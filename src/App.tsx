
import React from 'react'
import  {store}  from "./store";
import { Provider } from "react-redux";
import Homepage from './Components/homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
      <Homepage />
      </Provider>
    </div>
  )
}

export default App;
