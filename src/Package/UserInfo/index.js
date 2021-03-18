import React from 'react';
import Popup from './Popup';
import { Avatar, Popover } from 'antd';
import { get } from 'lodash';

function UserInfo ({
  users = [],
  user,
  size = 28,
  placement,
  hideName = false,
  ...rest
}) {
  let data = user ? [user] : users;
  let hideData = [];
  const showCount = 4;
  if (data && data.length > showCount) {
    hideData = data.slice(showCount);
    data = data.slice(0, showCount);
  }

  const propsPopup = {
    size: size,
    placement: placement,
    showName: !hideName && data.length === 1
  };

  return (
    <div {...rest} className="fwork-user-infor">
      {
        data && data.map((user, i) => {
          if (!user) return;
          return <Popup
            {...propsPopup}
            styleAvatar={{
              zIndex: data.length - i,
              marginLeft: -8,
              fontSize: 0.6 * size,
              background: getColor(get(user, 'lastName[0]', 'Q'))
            }}
            key={i} user={user}/>;
        })
      }
      {
        hideData.length > 0 &&
        <Popover
          overlayClassName="fwork-list-user-popup"
          placement={placement}
          content={
            <div>
              {
                hideData.map(user =>
                  <div key={user?._id} className="fwork-list-user-popup-item">
                    <Popup
                      {...propsPopup}
                      placement="leftTop"
                      showName={true}
                      styleAvatar={{
                        background: getColor(get(user, 'lastName[0]', 'Q'))
                      }}
                      key={user?._id}
                      user={user}
                    />
                  </div>
                )
              }
            </div>
          }
        >
          <span>
            <Avatar
              style={{
                zIndex: 0,
                marginLeft: -8,
                fontSize: size / 2,
                color: '#172b4d',
                background: getColor()
              }}
              src={user?.avatar}
              size={size}
              className="rest_user"
            >{hideData.length <= 9 ? '+' + hideData.length : '9+' }</Avatar>
          </span>
        </Popover>
      }
    </div>
  );
}

export default UserInfo;

const getColor = char => {
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
    '#5c6bc0'
  ];

  const n = char.charCodeAt(0) - 65;
  const index = n % colors.length;

  if (index < 0 || index >= colors.length) {
    return '#e7e9ed';
  }
  return colors[index];
};
