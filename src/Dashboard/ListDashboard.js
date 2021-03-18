import React, { useState } from 'react';
import { common, fetchAPI } from '@fwork/frontend-helper';
import { TableCustom } from '@fwork/table-custom';
import { Button, Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';

const baseUrlDashboard = process.env.FWORK_API_ENDPOINT + '/dashboard';
const { HeaderPage, Icon, confirm } = common;

function ListDashboard(props) {
  const { service, setDashboardLayout } = props;
  const history = useHistory()
  const [searchValue, setSearchValue] = useState('');
  const [dashboardReducer, setDashboardReducer] = useState({
    dashboards: [],
    pagination: { pageSize: 20, current: 1, total: 0 }
  })
  const columnsDashboard = [
    {
      title: 'Mã',
      dataIndex: 'code',
      width: '10%',
    },
    {
      title: 'Tên Layout',
      dataIndex: 'name',
      width: '30%',
      render: (text, record) => {
        return <a onClick={() => handleEditDashboard(record)} style={{ cursor: "pointer" }}>{text}</a>
      }
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      width: '45%'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: '10%',
      render: (text, record) => (text ? "Đang sử dụng" : "Không sử dụng")
    },
    {
      width: '5%',
      align: 'right',
      render: (value, record) => (
        <span>
          <Tooltip placement="bottom" title="sửa">
            <span style={{ marginRight: '10px' }} onClick={() => handleEditDashboard(record)}>
              <Icon size={12} type="edit" />
            </span>
          </Tooltip>
          <Tooltip placement="bottom" title="xóa">
            <span>
              <Icon size={12} type="delete" onClick={() => handleDeleteDashboard(record)} />
            </span>
          </Tooltip>
        </span>
      )
    }
  ];

  const fetchingDashboard = async (params) => {
    const { data: resp } = await fetchAPI({
      url: `${baseUrlDashboard}/all`,
      method: 'get',
      params: { ...params, service: service }
    });

    if (resp.success && resp.data) {
      const { dashboards = [], total = 0 } = resp.data;
      const { pageSize = 20, current = 1 } = params;
      setDashboardReducer({
        dashboards,
        pagination: { pageSize, current, total }
      })
    }
  }

  const handleDeleteDashboard = (record) => {
    confirm({
      title: "Xóa Layout",
      content: <>Bạn có chắc muốn xóa <i style={{ fontWeight: 'bold' }}>{record.name}</i> ?</>,
      okText: "Xóa Layout",
      type: 'danger',
      cancelText: "Hủy",
      onOk: async () => {
        const { data: resp } = await fetchAPI({
          url: baseUrlDashboard,
          method: 'delete',
          body: { dashboardId: record._id }
        });

        if (resp.success) {
          await fetchingDashboard()
        }
      }
    });
  }

  const handleEditDashboard = (record) => {
    setDashboardLayout("dashboard");
    history.push({ search: `?code=${record.code}` });
  }

  const { dashboards, pagination } = dashboardReducer;
  return (
    <div>
      <HeaderPage
        title="Danh sách Layout"
        placeholder="Nhập thông tin tìm kiếm"
        onSearch={value => {
          setSearchValue(value);
        }}
        titleButton="Tạo mới"
        onClick={() => setDashboardLayout("create-dashboard")}
        addon={
          <Button onClick={() => setDashboardLayout("dashboard")}
            className="btn-icon-close" type="secondary" style={{ order: 1 }}
          >
            <Icon size={12} type="close" />
          </Button>
        }
      />
      <TableCustom
        history={history}
        fixedParam='service=Approval'
        columns={columnsDashboard}
        dataSource={dashboards}
        fetchingData={fetchingDashboard}
        searchValue={searchValue}
        pagination={pagination}
      />
    </div>
  )
}

export default ListDashboard

