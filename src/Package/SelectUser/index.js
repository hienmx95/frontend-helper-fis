import React, { useState, useEffect, useRef } from 'react';
import fetchAPI from '../../fetchAPI';
import PropTypes from 'prop-types';
import { Form, Select, Avatar } from 'antd';
import { debounce, xor } from 'lodash';

const { Option } = Select;

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current || {};
}

const isArray = (variable) => !!variable && variable.constructor === Array;
const map = (variable) => variable.map((el) => (el._id ? el._id : el));

function isDifferent(preData, nextData) {
  if (!nextData || (isArray(nextData) && !nextData.length)) return false;
  if (preData !== nextData) {
    if (isArray(preData) && isArray(nextData)) {
      return xor(map(preData), map(nextData)).length > 0;
    }
    return true;
  }
  return false;
}

const SelectUser = ({
  name = '',
  getFieldDecorator,
  label = '',
  rules = [],
  extendData = [],
  widthPercent,
  initialValue = [],
  onChange,
  showEmail = false,
  options = [],
  ...rest
}) => {
  const prev = usePrevious({ extendData, initialValue, options });

  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!initialValue || !initialValue.length) {
      return;
    }
    if (
      isDifferent(prev.extendData, extendData) ||
      isDifferent(prev.initialValue, initialValue)
    ) {
      fetchInitialValue();
    }
  }, [extendData, initialValue, options]);

  useEffect(() => {
    if (
      isDifferent(prev.extendData, extendData) ||
      isDifferent(prev.options, options)
    ) {
      let data = extendData || [];
      if (options && options.length > 0) {
        data = data.concat(options.map((el) => ({ ...el, name: el.fullName })));
      }
      setUsers(data);
    }
  }, [extendData, options]);

  useEffect(() => {
    return () => setUsers([]);
  }, []);

  const fetchInitialValue = async () => {
    const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
    const USER_BACKEND = FWORK_API_ENDPOINT + '/users';

    const initialValue2 = Array.isArray(initialValue)
      ? initialValue
      : [initialValue];
    const userIds = initialValue2.filter((el) => !el.includes('_'));
    let data = extendData || [];
    if (options && options.length > 0) {
      data = data.concat(
        options.map((el) => ({ ...el, name: el.fullName, isUser: true }))
      );
    }
    if (userIds.length) {
      if (options && options.length > 0) {
        // data = data.map(user => userIds.includes(user._id) && (user.isUser = true));
      } else {
        const { data: result } = await fetchAPI(
          `${USER_BACKEND}/info`,
          'GET',
          null,
          { userIds }
        );
        if (!result || !result.data || !result.success) {
          return;
        }
        data = data.concat(
          result.data.map((el) => ({ ...el, name: el.fullName, isUser: true }))
        );
      }
    }
    setUsers(data);
  };

  const fetchUsers = async (key) => {
    const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
    const USER_BACKEND = FWORK_API_ENDPOINT + '/users';

    const url = `${USER_BACKEND}/search`;
    const data = {
      url,
      method: 'GET',
      params: { key },
    };
    const { data: result } = await fetchAPI(data);
    if (!result || !result.data || !result.success) {
      console.error('[Select User] Some thing wrong when get users!');
      return [];
    }
    return result.data.map((el) => ({
      ...el,
      name: el.fullName,
      isUser: true,
    }));
  };

  const fetchData = async (key = '') => {
    key = key.trim();
    if (options && options.length > 0) {
      options = options.map((el) => ({
        ...el,
        name: el.fullName,
        isUser: true,
      }));
      const optionDataFiltered = options.filter((el) => {
        return el.name.toLowerCase().includes(key.toLowerCase());
      });
      const extendDataFiltered = extendData.filter((el) => {
        return el.name.toLowerCase().includes(key.toLowerCase());
      });
      setUsers(optionDataFiltered.concat(extendDataFiltered));
    } else {
      const users = await fetchUsers(key);
      const extendDataFiltered = extendData.filter((el) => {
        return el.name.toLowerCase().includes(key.toLowerCase());
      });
      setUsers(users.concat(extendDataFiltered));
    }
  };

  if (typeof getFieldDecorator !== 'function' || !getFieldDecorator) {
    getFieldDecorator = () => (el) => el;
    rest.defaultValue = initialValue;
  }

  return (
    <Form.Item label={label} className="fwork-form-item">
      {getFieldDecorator(name, {
        rules,
        initialValue,
      })(
        <Select
          className="fwork-select-user"
          dropdownClassName="fwork-dropdown-select-users"
          onSearch={debounce(fetchData, 300)}
          style={{ width: `${widthPercent}%` }}
          notFoundContent={null}
          onChange={onChange}
          filterOption={false}
          showSearch
          onFocus={() => fetchData()}
          {...rest}
        >
          {users.map((user) => {
            const {
              _id: userId,
              name,
              avatar,
              username = '',
              email = '',
              lastName = '',
              status,
              isUser,
            } = user;
            return (
              <Option
                key={userId}
                value={userId}
                disabled={status === 'disabled'}
              >
                <div className="fwork-option-select-user">
                  {isUser && (
                    <div className="fwork-option-avatar">
                      <Avatar
                        size={32}
                        src={avatar}
                        style={{
                          backgroundColor: getColor(lastName[0]),
                        }}
                      >
                        {name ? name[0] : ''}
                      </Avatar>
                    </div>
                  )}
                  <div className="fwork-option-user-info">
                    <div className="info-name">
                      <span>{name}</span>
                      {status === 'disabled' && (
                        <span className="user-inactive">inactive</span>
                      )}
                    </div>

                    {showEmail ? (
                      <div>{email}</div>
                    ) : (
                      !!username && (
                        <span className="info-username">@{username}</span>
                      )
                    )}
                  </div>
                </div>
              </Option>
            );
          })}
        </Select>
      )}
    </Form.Item>
  );
};

const getColor = (char = 'O') => {
  if (typeof char !== 'string') {
    return '#e7e9ed';
  }

  char = char.toUpperCase();
  const colors = [
    '#ffa726',
    '#ef5350',
    '#ec407a',
    '#fdd835',
    '#66bb6a',
    '#26a69a',
    '#00bcd4',
    '#42a5f5',
    '#5c6bc0',
  ];

  const n = char.charCodeAt(0) - 65;
  const index = n % colors.length;

  if (index < 0 || index >= colors.length) {
    return '#e7e9ed';
  }
  return colors[index];
};

SelectUser.propTypes = {
  rules: PropTypes.array,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  widthPercent: PropTypes.number,
  initialValue: PropTypes.any,
  extendData: PropTypes.array,
};

SelectUser.defaultProps = {
  type: 'text',
  widthPercent: 100,
  name: '',
  initialValue: undefined,
};

export default SelectUser;
