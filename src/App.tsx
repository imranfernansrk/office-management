import React from 'react'
import { store } from "./store";
import { Provider } from "react-redux";
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import { ManagerProfile } from "./components/ManagerProfile";
import { EmployeeProfile } from "./components/EmployeeProfile";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';


const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/managerProfile/:id" component={ManagerProfile} />
            <Route path="/employeeProfile/:id" component={EmployeeProfile} />
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App;
