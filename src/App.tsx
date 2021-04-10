
import React from 'react'
import { store } from "./store";
import { Provider } from "react-redux";
import Homepage from './Components/homepage';
import HomepageDemo from "./Components/homepageDesign/homepage";
import LoginDemo from "./Components/loginDemo";
import ManagerProfile from "./Components/managerProfile";
import EmployeeProfile from "./Components/employeeProfile";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import ManagerLogin from './Components/managerLogin';


const App: React.FC = () => {
  return (
    <div>
      {/* <HomepageDemo /> */}
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomepageDemo} />
            {/* <Route path="/login" component={Homepage} /> */}
            <Route path="/login" component={LoginDemo} />
            <Route path="/managerProfile/:id" component={ManagerProfile} />
            <Route path="/employeeProfile/:id" component={EmployeeProfile} />
          </Switch>
        </Router>
      </Provider>
    </div>
    // <div>
    //   <Provider store={store}>
    //   <Homepage />
    //   </Provider>
    // </div>
  )
}

export default App;
