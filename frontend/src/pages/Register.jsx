import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input, Typography, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const { Title, Text } = Typography;

const RegisterPage = () => {
  console.log("✅ RegisterPage is rendering...");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(selectAuth);

  const onFinish = (values) => {
    dispatch(register({ registerData: values }));
  };

  // ✅ Ensure only one "Register" title appears
  const authContent = (
    <Loading isLoading={isLoading}>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Title level={2} style={{ textAlign: "center" }}>Register</Title> {/* Single title */}
        <Divider />

        <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please enter your full name" }]}>
          <Input placeholder="Enter your full name" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: "Please enter a valid email" }]}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter a password" }]}>
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} size="large" block>
            Register
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Text>Already have an account? </Text>
          <Button type="link" onClick={() => navigate('/login')}>Log In</Button>
        </Form.Item>
      </Form>
    </Loading>
  );

  return <AuthModule AUTH_TITLE="" authContent={authContent} />; // ✅ No duplicate title
};

export default RegisterPage;
