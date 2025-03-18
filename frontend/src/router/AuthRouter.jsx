// import { Routes, Route, Navigate } from 'react-router-dom';

// import Login from '@/pages/Login';
// import NotFound from '@/pages/NotFound';

// import ForgetPassword from '@/pages/ForgetPassword';
// import ResetPassword from '@/pages/ResetPassword';

// import { useDispatch } from 'react-redux';

// export default function AuthRouter() {
//   const dispatch = useDispatch();

//   return (
//     <Routes>
//       <Route element={<Login />} path="/" />
//       <Route element={<Login />} path="/login" />
//       <Route element={<Navigate to="/login" replace />} path="/logout" />
//       <Route element={<ForgetPassword />} path="/forgetpassword" />
//       <Route element={<ResetPassword />} path="/resetpassword/:userId/:resetToken" />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';  // ✅ Make sure Register is imported!
import ForgetPassword from '@/pages/ForgetPassword';
import ResetPassword from '@/pages/ResetPassword';
import NotFound from '@/pages/NotFound';

export default function AuthRouter() {
  console.log("✅ AuthRouter is loading...");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />  {/* Redirect root to login */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />  {/* ✅ Ensure this exists */}
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/resetpassword/:userId/:resetToken" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />  {/* Catch-all for 404 */}
    </Routes>
  );
}
