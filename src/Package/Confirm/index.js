import { Modal } from 'antd';
const currentService = window.location.pathname.split('/')[1];

export default ({
  type = 'primary',
  isHideOkButton,
  ...rest
}) => {
  Modal.confirm({
    icon: false,
    autoFocusButton: null,
    okButtonProps: {
      className: `fwork-btn fwork-btn-${type} ${currentService} ${isHideOkButton ? 'display-none' : ''}`
    },
    cancelButtonProps: {
      className: 'fwork-btn fwork-btn-default'
    },
    ...rest
  });
};
