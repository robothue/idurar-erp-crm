// // import { useEffect } from 'react';

// // import { useDispatch, useSelector } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';

// // import useLanguage from '@/locale/useLanguage';

// // import { Form, Button } from 'antd';

// // import { login } from '@/redux/auth/actions';
// // import { selectAuth } from '@/redux/auth/selectors';
// // import LoginForm from '@/forms/LoginForm';
// // import Loading from '@/components/Loading';
// // import AuthModule from '@/modules/AuthModule';

// // const LoginPage = () => {
// //   const translate = useLanguage();
// //   const { isLoading, isSuccess } = useSelector(selectAuth);
// //   const navigate = useNavigate();
// //   // const size = useSize();

// //   const dispatch = useDispatch();
// //   const onFinish = (values) => {
// //     dispatch(login({ loginData: values }));
// //   };

// //   useEffect(() => {
// //     if (isSuccess) navigate('/');
// //   }, [isSuccess]);

// //   const FormContainer = () => {
// //     return (
// //       <Loading isLoading={isLoading}>
// //         <Form
// //           layout="vertical"
// //           name="normal_login"
// //           className="login-form"
// //           initialValues={{
// //             remember: true,
// //           }}
// //           onFinish={onFinish}
// //         >
// //           <LoginForm />
// //           <Form.Item>
// //             {/* <Button
// //               type="primary"
// //               htmlType="submit"
// //               className="login-form-button"
// //               loading={isLoading}
// //               size="large"
// //             >
// //               {translate('Log in')}
// //             </Button> */}
// //               <Form.Item>
// //                 <Button
// //                   type="primary"
// //                   htmlType="submit"
// //                   className="login-form-button"
// //                   loading={isLoading}
// //                   size="large"
// //                 >
// //                   {translate('Log in')}
// //                 </Button>
// //                 <Button
// //                   type="link"
// //                   onClick={() => navigate('/Register')}
// //                   style={{ marginLeft: 10 }}
// //                 >
// //                   {translate('Sign Up')}
// //                 </Button>
// //               </Form.Item>


// //           </Form.Item>
// //         </Form>
// //       </Loading>
// //     );
// //   };

// //   return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign in" />;
// // };

// // export default LoginPage;



import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const LoginPage = () => {
  console.log("✅ LoginPage is rendering...");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(selectAuth);

  const onFinish = (values) => {
    dispatch(login({ loginData: values }));
  };

  // ✅ Define authContent properly
  const authContent = (
    <Loading isLoading={isLoading}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} size="large" block>
            Log In
          </Button>
        </Form.Item>
        {/* ✅ Add a Sign Up link to navigate to Register page */}
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="link" onClick={() => navigate('/register')}>
            Don't have an account? Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Loading>
  );

  console.log("🔍 Passing authContent:", authContent); // Debug log

  return <AuthModule AUTH_TITLE="Sign In" authContent={authContent} />;
};

export default LoginPage;
