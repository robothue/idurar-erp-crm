import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useLanguage from '@/locale/useLanguage';

import { Form, Button } from 'antd';

import { login } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import LoginForm from '@/forms/LoginForm';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const LoginPage = () => {
  const translate = useLanguage();
  const { isLoading, isSuccess } = useSelector(selectAuth);
  const navigate = useNavigate();
  // const size = useSize();

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login({ loginData: values }));
  };

  useEffect(() => {
    if (isSuccess) navigate('/');
  }, [isSuccess]);

  const FormContainer = () => {
    return (
      <Loading isLoading={isLoading}>
        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <LoginForm />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={isLoading}
              size="large"
            >
              {translate('Log in')}
            </Button>
          </Form.Item>
        </Form>
      </Loading>
    );
  };

  return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign in" />;
};

export default LoginPage;



// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button, Tabs, Input } from 'antd';

// import useLanguage from '@/locale/useLanguage';
// import { login } from '@/redux/auth/actions';
// import { selectAuth } from '@/redux/auth/selectors';
// //import { register } from '@/services/auth.service'; // Import the register function

// import LoginForm from '@/forms/LoginForm';
// import Loading from '@/components/Loading';
// import AuthModule from '@/modules/AuthModule';

// const LoginPage = () => {
//   const translate = useLanguage();
//   const { isLoading, isSuccess } = useSelector(selectAuth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  
//   const [activeTab, setActiveTab] = useState('login'); // Toggle between login & register
//   const [registerForm] = Form.useForm(); // Form reference for registration

//   // Login Submission
//   const onLoginFinish = (values) => {
//     dispatch(login({ loginData: values }));
//   };

//   // Registration Submission
//   const onRegisterFinish = async (values) => {
//     try {
//       const response = await register({ registerData: values });
//       if (response?.success) {
//         alert('Registration successful! You can now log in.');
//         setActiveTab('login'); // Switch back to login tab after successful registration
//       } else {
//         alert('Registration failed: ' + response?.message);
//       }
//     } catch (error) {
//       console.error('Registration Error:', error);
//       alert('Registration error. Please try again.');
//     }
//   };

//   useEffect(() => {
//     if (isSuccess) navigate('/');
//   }, [isSuccess]);

//   return (
//     <AuthModule AUTH_TITLE="Sign in">
//       <Tabs activeKey={activeTab} onChange={setActiveTab}>
//         {/* Login Tab */}
//         <Tabs.TabPane tab={translate('Log in')} key="login">
//           <Loading isLoading={isLoading}>
//             <Form layout="vertical" name="login_form" onFinish={onLoginFinish}>
//               <LoginForm />
//               <Form.Item>
//                 <Button type="primary" htmlType="submit" loading={isLoading} size="large">
//                   {translate('Log in')}
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Loading>
//         </Tabs.TabPane>

//         {/* Register Tab */}
//         <Tabs.TabPane tab={translate('Sign Up')} key="register">
//           <Form layout="vertical" form={registerForm} name="register_form" onFinish={onRegisterFinish}>
//             <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Please enter your name' }]}>
//               <Input placeholder="Enter your full name" />
//             </Form.Item>
//             <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
//               <Input placeholder="Enter your email" />
//             </Form.Item>
//             <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter a password' }]}>
//               <Input.Password placeholder="Enter your password" />
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit" size="large">
//                 {translate('Create Account')}
//               </Button>
//             </Form.Item>
//           </Form>
//         </Tabs.TabPane>
//       </Tabs>
//     </AuthModule>
//   );
// };

// export default LoginPage;
