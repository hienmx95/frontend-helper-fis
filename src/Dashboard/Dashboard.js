import React, { useState, useEffect, useReducer, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Dropdown, Menu } from 'antd';
import GridLayout from 'react-grid-layout';
import './style.scss';
import { common, fetchAPI } from '@fwork/frontend-helper';
import { v4 } from 'uuid';
import IconEdit from './icons/icon_edit.svg';
import IconBack from './icons/icon_back.svg';
import IconForward from './icons/icon_forward.svg';
import IconPlus from './icons/icon_plus.svg';
import IconDropDown from './icons/icon_dropdown.svg';
import IconRemove from './icons/icon_remove.svg';
import IconScreen from './icons/icon_screen.svg';
import queryString from 'query-string';

const baseUrlDashboard = process.env.FWORK_API_ENDPOINT + '/dashboard';
const { Button, confirm } = common;

const initialState = {
  dashboard: {},
  steps: [],
  pointer: 0 // position currentStep
};

const reducer = (state, action) => {
  const { steps, pointer } = state;
  switch (action.type) {
    case 'FETCHING_SUCCESS':
      return {
        dashboard: action.payload,
        steps: [action.payload],
        pointer: 0
      };
    case 'CHANGE_LAYOUT':
      // eslint-disable-next-line no-case-declarations
      const currentSteps = steps.filter((_item, index) => index <= pointer);
      return {
        dashboard: action.payload,
        steps: [...currentSteps, action.payload],
        pointer: pointer + 1
      };
    case 'CANCEL_CHANGE':
      return {
        dashboard: steps[0],
        steps: [steps[0]],
        pointer: 0
      };
    case 'NEXT':
      if (pointer < steps.length - 1) {
        return {
          ...state,
          dashboard: steps[pointer + 1],
          pointer: pointer + 1
        };
      }
      return state;
    case 'PREVIOUS':
      if (pointer > 0) {
        return {
          ...state,
          dashboard: steps[pointer - 1],
          pointer: pointer - 1
        };
      }
      return state;
    default:
      return state;
  }
};

function Dashboard(props) {
  const history = useHistory();
  const { service, listGadgets = [], setDashboardLayout, setDashboardCreate } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { dashboard, steps } = state;
  const [visibleAddGadget, setVisibleAddGadget] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [widthGrid, setWidthGrid] = useState(window.innerWidth - 256);
  const [heightGird, setHeightGrid] = useState(0);
  const historyRef = useRef(null);

  const { code } = queryString.parse(history.location.search);
  useEffect(() => {
    fetchAPI({
      url: `${baseUrlDashboard}/?service=${service}&code=${code}`,
      method: 'get'
    }).then((resp) => {
      if (resp.data.success && resp.data.data) {
        const { components = [] } = resp.data.data;
        const newDashboard = {
          ...resp.data.data,
          components: components.map(component => {
            const gadget = getComponentByCode(component.code);
            const { minH = 1, minW = 1, maxW = Infinity, maxH = Infinity } = getSizeComponent(gadget, widthGrid);
            return {
              ...component,
              minH,
              minW,
              maxH,
              maxW,
            }
          })
        }
        dispatch({ type: 'FETCHING_SUCCESS', payload: newDashboard });
        if (_.isEmpty(newDashboard.components)) {
          setIsEdit(true);
        }
      }
    });
  }, []);

  useEffect(() => {
    const minHeight = window.innerHeight;
    const height = getMaxOffsetHeight(dashboard.components) * 40 + 40 * 10;
    setHeightGrid(Math.max(minHeight, height));
  }, [state]);

  useEffect(() => {
    const handleResize = () => setWidthGrid(window.innerWidth - 256);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    return () => {
      history.push({ search: '' });
    }
  }, []);

  const onUnload = (ev) => {
    if (steps.length > 1) {
      ev.preventDefault();
      return (ev.returnValue = "Are you sure you want to close?");
    }
    return null;

  };

  useEffect(() => {
    window.addEventListener("beforeunload", onUnload);
    historyRef.current = history.block((location, action) => {
      if (steps.length > 1) return "Are you sure you want to leave this page?";
      return null;
    });
    return () => {
      if (historyRef.current) historyRef.current();
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [steps.length]);

  const handleLayoutChange = (layout) => {
    const components = dashboard.components.map((o) => {
      const { w, h, x, y } = layout.find((item) => item.i === o.i);
      return {
        ...o,
        w,
        h,
        x,
        y
      };
    });

    const newDashboard = { ...dashboard, components };
    dispatch({ type: 'CHANGE_LAYOUT', payload: newDashboard });
  };

  const getComponentByCode = (code) => {
    return listGadgets.find((gadget) => gadget.code === code) || {};
  };

  const addGadget = async (gadget) => {
    const { components = [] } = dashboard;
    const maxOffsetY = getMaxOffsetHeight(components);
    const uuid = v4();
    const { w = 1, h = 1, minH = 1, minW = 1, maxW = Infinity, maxH = Infinity } = getSizeComponent(gadget, widthGrid);
    const newDashboard = {
      ...dashboard,
      components: [
        ...dashboard.components,
        {
          code: gadget.code,
          i: uuid,
          w,
          h,
          minH,
          minW,
          maxH,
          maxW,
          x: 0,
          y: maxOffsetY
        }
      ]
    };
    dispatch({ type: 'CHANGE_LAYOUT', payload: newDashboard });
  };

  const removeComponent = (i) => {
    const newDashboard = {
      ...dashboard,
      components: dashboard.components.filter((o) => o.i !== i)
    };
    dispatch({ type: 'CHANGE_LAYOUT', payload: newDashboard });
  };

  const handleSaveLayout = (status) => {
    console.log('dashboard', dashboard)
    const { code, default: isDefault } = dashboard;
    if (isDefault) {
      confirm({
        title: "Bạn đang sửa Layout mặc định",
        content: "Nhấn đồng ý để tạo Layout mới",
        okText: "Đồng ý",
        type: 'primary',
        cancelText: "Hủy bỏ",
        onOk: () => {
          setDashboardLayout("create-dashboard");
          setDashboardCreate({ ...dashboard, status });
        }
      });
    } else {
      fetchAPI({
        url: `${baseUrlDashboard}/${code}`,
        method: 'patch',
        body: { ...dashboard, status }
      }).then((resp) => {
        if (resp.data.success) {
          dispatch({ type: 'FETCHING_SUCCESS', payload: resp.data.data });
          setIsEdit(false);
        }
      });
    }
  };

  const handleCancel = () => {
    if (steps.length > 1) {
      confirm({
        title: "Rời khỏi trang ?",
        content: "Thao tác trên trang này chưa được lưu.?",
        okText: "Thoát",
        type: 'danger',
        cancelText: "Bỏ qua",
        onOk: () => {
          dispatch({ type: 'CANCEL_CHANGE' });
          setIsEdit(false);
        }
      });
    } else {
      setIsEdit(false);
    }
  };

  const handleNext = () => {
    dispatch({ type: 'NEXT' });
  };

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS' });
  };
  const MenuDropDown = (
    <Menu>
      <Menu.Item>
        <a onClick={() => handleSaveLayout(false)}>Lưu vào danh sách</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{ position: 'relative', zIndex: 0 }}
    >
      <Modal
        title="Add Gadget"
        visible={visibleAddGadget}
        onOk={() => setVisibleAddGadget(false)}
        onCancel={() => setVisibleAddGadget(false)}
      >
        <div style={{ maxHeight: '50vh', overflow: 'auto' }}>
          {listGadgets.map((gadget) => (
            <div className="fwork-gadget-container" key={gadget.code}>
              <img src={gadget.image} />
              <div className="fwork-gadget-information">
                <span>{gadget.name}</span>
                <span>{gadget.description}</span>
              </div>
              <Button onClick={() => addGadget(gadget)}>Add Gadget</Button>
            </div>
          ))}
        </div>
      </Modal>

      <div
        className="fwork-dashboard-header"
      >
        {isEdit ? (
          <div className="fwork-button-edit">
            <Button type="link" onClick={() => handleCancel()}>Hủy bỏ</Button>
            <Button
              onClick={() => setVisibleAddGadget(true)}
              type="primary"
            >
              <img src={IconPlus} /> Thêm biểu đồ
            </Button>
            <Button type="default" onClick={handlePrevious}><img src={IconBack} /></Button>
            <Button type="default" onClick={handleNext}><img src={IconForward} /></Button>
            <Button onClick={() => handleSaveLayout(true)}>Lưu và sử dụng</Button>
            <Dropdown overlay={MenuDropDown} placement="bottomCenter" arrow overlayClassName="fwork-dropdown-save-layout">
              <Button><img src={IconDropDown} /></Button>
            </Dropdown>
          </div>
        ) : (
            <div className="fwork-button-default">
              <Button type="link" onClick={() => setDashboardLayout('list-dashboard')}>Danh sách bố cục</Button>
              <Button onClick={() => setIsEdit(true)}><img src={IconEdit} />Chỉnh sửa bố cục</Button>
              <Button type="primary" onClick={() => setDashboardLayout('create-dashboard')} >Tạo mới</Button>
            </div>
          )}
      </div>
      {!_.isEmpty(dashboard.components) && (
        <GridLayout
          className={`fwork-dashboard ${isEdit ? 'fwork-dashboard-editing' : 'fwork-dashboard-default'}`}
          layout={dashboard.components} // modify
          margin={[16, 16]}
          cols={12}
          rowHeight={24}
          width={widthGrid}
          isDraggable={isEdit}
          isResizable={isEdit}
          onResizeStop={handleLayoutChange}
          onDragStop={handleLayoutChange}
          draggableCancel="test"
        >
          {dashboard.components.map((component, index) => {
            const gadget = getComponentByCode(component.code);
            return (
              !_.isEmpty(gadget) ? (<div
                key={component.i}
                className="fwork-dashboard-component"
              >
                {isEdit && (
                  <div className="fwork-dashboard-component-action">
                    <Button><img src={IconScreen} /></Button>
                    <Button onClick={() => removeComponent(component.i)}><img src={IconRemove} /></Button>
                  </div>
                )}
                <div className="fwork-dashboard-component-content">
                  {<gadget.component {...gadget.props} />}
                </div>
              </div>) : <></>
            );
          })}
        </GridLayout>
      )}
      {isEdit && <div className="fwork-dashboard-grid">
        {renderGird(widthGrid, heightGird)}
      </div>}
    </div>
  );
}

export default Dashboard;

function getMaxOffsetHeight(components = []) {
  let maxOffsetY = 0;
  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    if (maxOffsetY < component.h + component.y) {
      maxOffsetY = component.h + component.y;
    }
  }
  return maxOffsetY;
}

function renderGird(width = 0, height = 0) {
  const widthRectangle = (width - 16 * 13) / 12;
  const heightRectangle = 24;
  const paddingHeight = 16;
  const row = [];
  for (let i = 0; i < 12; i++) {
    // rectangle
    row.push(<rect x={widthRectangle * i + paddingHeight * (i + 1)} y={paddingHeight} width={widthRectangle} height={heightRectangle} fill="#e4eaf2"></rect>);
  }

  return (
    <svg width={width - 1} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1" >
      <defs>
        <pattern id="grid" x="0" y="0" width="1" height={(24 + 16) / height}>
          {row}
        </pattern>
      </defs>
      <rect fill="url(#grid)" x="0" y="0" width={width - 1} height={height}></rect>
    </svg>);
}

function getSizeComponent(gadget, widthGrid) {
  try {
    let { minWidth = 1, minHeight = 1, maxHeight = Infinity, maxWidth = Infinity, w, h } = gadget;
    const widthRectangle = (widthGrid - 16 * 13) / 12;
    const heightRectangle = 24;
    const padding = 16;
    const minW = Math.floor((minWidth + padding) / (widthRectangle + padding)) + 1;
    const minH = Math.floor((minHeight + padding) / (heightRectangle + padding)) + 1;
    const maxH = Math.floor((maxHeight + padding) / (heightRectangle + padding));
    const maxW = Math.floor((maxWidth + padding) / (widthRectangle + padding));

    return {
      w: w || Math.max(minW, 2),
      h: h || Math.max(minH, 4),
      minH,
      minW,
      maxH,
      maxW
    };
  } catch (error) {
    console.log(error);
  }
}
