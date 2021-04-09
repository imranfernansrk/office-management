import React, { useState } from "react";
// import Login from 'ant-design-pro/lib/Login';
// import { Alert, Checkbox } from 'antd';

// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

// const LoginDemo = ()=> {
//   const [state, setState] = useState({
//     notice: '',
//     type: 'tab2',
//     autoLogin: true,
//   });
//   const onSubmit = (err: any, values: any) => {

//   };
//   const onTabChange = (key: any) => {
//     setState({
//         ...state,
//       type: key,
//     });
//   };
//   const changeAutoLogin = (e: any) => {
//     setState({
//         ...state,
//       autoLogin: e.target.checked,
//     });
//   };
//     return (
//       <div className="login-warp">
//         <Login
//           defaultActiveKey={state.type}
//           onTabChange={onTabChange}
//           onSubmit={onSubmit}
//         >
//           <Tab key="tab1" tab="Account">
//             <UserName name="username" />
//             <Password name="password" />
//           </Tab>
//           <Tab key="tab2" tab="Mobile">
//           <UserName onChange name="username" />
//           <Password name="password" />         
//             </Tab>
//           <div>
//             <Checkbox checked={state.autoLogin} onChange={changeAutoLogin}>
//               Keep me logged in
//             </Checkbox>
//             <a style={{ float: 'right' }} href="">
//               Forgot password
//             </a>
//           </div>
//           <Submit>Login</Submit>
//           <div>
//             Other login methods
//             <span className="icon icon-alipay" />
//             <span className="icon icon-taobao" />
//             <span className="icon icon-weibo" />
//             <a style={{ float: 'right' }} href="">
//               Register
//             </a>
//           </div>
//         </Login>
//       </div>
//     );
// }

// export default LoginDemo;