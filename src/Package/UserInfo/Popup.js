import React, { useEffect, useState } from 'react';
import { Avatar, Popover } from 'antd';
import Button from '../Button';
import fetchAPI from '../../fetchAPI';
import { AtSignIcon, PhoneIcon, DepartmentIcon, EmailIcon, ChatIcon } from './Icon';

const ContentPopover = ({
  user,
  bg
}) => {
  const {
    fullName,
    username = false,
    avatar,
    email = false,
    phone = false,
    lastName = 'B',
    organizationInfo,
    organization
  } = user;
  const [orgName, setOrgName] = useState(organizationInfo?.name);
  useEffect(() => {
    if (!organizationInfo?.name) {
      const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
      const endpoint = FWORK_API_ENDPOINT + '/iam';
      fetchAPI(endpoint + `/organizations/${organization}/plain-info`, 'GET')
        .then(({ data: res }) => {
          if (!res.success && !res.data) {
            return;
          }
          setOrgName(res.data?.name);
        });
    }
  }, [organizationInfo?.name]);

  return (<>
    <div>
      <div className="avatar">
        <Avatar
          style={{ background: bg }}
          src={avatar}
          size={96}
        >{lastName[0]}</Avatar>
      </div>
      <div className="user-info">
        <h5>{fullName}</h5>
        <div>
          <DepartmentIcon/>
          <span>{orgName}</span>
        </div>
        <div>
          <AtSignIcon/>
          <span>{username}</span>
        </div>
        {phone && <div>
          <PhoneIcon/>
          <span>{phone}</span>
        </div>}
        <div>
          <EmailIcon/>
          <span>{email}</span>
        </div>
      </div>
    </div>
    <Button type="secondary" block>
      <ChatIcon/>
      <span>Nhắn tin</span>
    </Button>
  </>);
};

const Popup = ({
  user = {},
  styleAvatar = {},
  size,
  placement,
  showName = false
}) => {
  return (
    <Popover
      content={<ContentPopover user={user} bg={styleAvatar.background}/>}
      style={styleAvatar}
      placement={placement}
      overlayClassName="fw-overlay-user"
    >
      <Avatar
        style={styleAvatar}
        size={size}
        src={user?.avatar}>
        {user?.lastName[0]}
      </Avatar>
      {showName ? <span className="fullname">{user?.fullName}</span> : ''}
    </Popover>
  );
};

export default Popup;
