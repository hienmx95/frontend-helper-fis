import React from 'react';
import Remove from './icon/Remove';
import Success from './icon/Success';
import Error from './icon/Error';
import Edit from './icon/Edit';
import Warning from './icon/Warning';
import Alert from './icon/Alert';
import Comment from './icon/Comment';
import { notification } from 'antd';

import './style.scss';

export default ({ type, action, message, description = null, duration = 5, top = 64 }) => {
  const dataIcon = {
    'success': <Success />,
    'error': <Error />,
    'comment': <Comment />,
    'alert': <Alert />,
    'warning': <Warning />,
    'edit': <Edit />,
    'remove': <Remove />
  };

  notification.open({
    message: <p dangerouslySetInnerHTML={{ __html: message }} />,
    description: description,
    onClick: action,
    duration: duration,
    icon: dataIcon[type],
    className: `fwork-notification ${type}`,
    top
  });
};
