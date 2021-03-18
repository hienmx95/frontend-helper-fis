import React from 'react';

import Icon from '../icons';

import { useHistory } from 'react-router-dom';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { isString, isFunction } from 'lodash';
const { Search } = Input;

import FwButton from '../Button';

function HeaderPage(props) {
  const history = useHistory();
  const {
    title,
    placeholder,
    titleButton,
    onClick,
    actionCancel,
    actionEdit,
    actionTransfer,
    actionDelete,
    onSearch,
    initSearchValue,
    hideShadow,
    addon
  } = props;

  const _renderButtonAction = (action, icon) => {
    let onAction;
    if (isString(action)) {
      onAction = () => history.push(action);
    } else if (isFunction(action)) {
      onAction = action;
    } else {
      return '';
    }
    return <Button className="fwork-btn-icon" onClick={onAction} >
      <Icon type={icon} />
    </Button>;
  };

  const _renderSearch = () => {
    if (!isFunction(onSearch)) {
      return '';
    }

    return <Search
      placeholder={placeholder || 'Tìm kiếm'}
      onChange={e => {
        const searchValue = e.target.value.trim();
        handleSearch(searchValue);
      }}
      defaultValue={initSearchValue || ''}
      className="fwork-search-bar"
    />;
  };

  const handleSearch = debounce(searchValue => {
    onSearch(searchValue);
  }, 300);

  return (
    <div className={`fwork-header-page ${hideShadow ? 'hide-box-shadow' : ''}`}>
      <h2>{title}</h2>
      <div className="fwork-header-page-actions">
        {addon}
        {_renderSearch()}
        {titleButton ?
          <FwButton type="primary" onClick={onClick}>
            {titleButton}
          </FwButton>
          : ''}
        {_renderButtonAction(actionEdit, 'edit')}
        {_renderButtonAction(actionTransfer, 'move')}
        {_renderButtonAction(actionDelete, 'delete')}
        {_renderButtonAction(actionCancel, 'close')}
      </div>
    </div>
  );
}

function debounce(a, b, c) {
  let d, e;
  return function () {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }
    const f = this;
    const g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

HeaderPage.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  titleButton: PropTypes.string,
  onClick: PropTypes.func,
  onSearch: PropTypes.func
};

export default HeaderPage;
