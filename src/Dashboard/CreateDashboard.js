import React, { useEffect } from 'react';
import { common, fetchAPI } from '@fwork/frontend-helper';
import { Form } from 'antd';

const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
const baseUrlDashboard = FWORK_API_ENDPOINT + '/dashboard';
const { HeaderPage, Icon, ContainerForm, TextInput, Button } = common;

function createDashboard(props) {
  const { service, setDashboardLayout, form, dashboardCreate, setDashboardCreate } = props;
  const { getFieldDecorator } = form;
  useEffect(() => {

    return () => { setDashboardCreate({}); }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        const { components, status } = dashboardCreate;
        const { data: resp } = await fetchAPI({
          url: baseUrlDashboard,
          method: 'post',
          body: { ...values, service, components, status }
        });
        if (resp.success) {
          setDashboardLayout('list-dashboard');
        }
      }
    });
  };
  return (
    <div>
      <HeaderPage
        title="Tạo mới Layout"
        addon={
          <Button onClick={() => setDashboardLayout("dashboard")}
            className="btn-icon-close" type="secondary" style={{ order: 1 }}>
            <Icon size={12} type="close" />
          </Button>
        }
      />
      <ContainerForm style={{ overflowX: "auto" }}>
        <Form onSubmit={handleSubmit}>
          <TextInput
            getFieldDecorator={getFieldDecorator}
            name="name"
            label="Tên Layout"
            rules={[
              {
                required: true,
                message: "Tên không được để trống",
                whitespace: true,
              },
              {
                max: 256,
                message: "Tên nhóm có độ dài nhỏ hơn 256 kí tự",
              },
            ]}
            placeholder="Nhập tên Layout"
          />

          <TextInput
            getFieldDecorator={getFieldDecorator}
            name="description"
            label="Mô tả"
            placeholder="Nhập mô tả ngắn Layout"
            rules={[
              {
                max: 256,
                message: "Bạn nhập quá 256 kí tự",
              },
            ]}
          />
          <div style={{ textAlign: "right" }}>
            <Button type="link" onClick={() => setDashboardLayout('dashboard')}>
              Hủy bỏ
            </Button>
            <Button
              htmlType="submit"
              style={{ marginLeft: "8px" }}
              type="primary"
            >
              Tạo mới
            </Button>
          </div>
        </Form>
      </ContainerForm>
    </div>
  )
}
export default React.memo(Form.create({ name: 'form_create_dashboard' })(createDashboard));

