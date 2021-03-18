import React from 'react';
import forbiddenImage from '../images/forbidden.svg';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

const Forbidden = () => {
  const history = useHistory();
  return (
    <div className="fwork-forbidden-page">
      <h5>Xin lỗi, bạn không có quyền truy cập vào liên kết này.<br /> Vui lòng liên hệ Admin để được hỗ trợ</h5>
      <img src={forbiddenImage} alt="forbidden" />
      <Button onClick={() => history.go(-1)} type="link">&lt; Quay lại trang trước</Button>
    </div>
  );
};

export default Forbidden;
