import React, {  } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from 'antd'
import './styles/homepageDemo.css'


const {Title} = Typography;

const MainContent = () => {
    return (
        <>
        <div className="MAIN_CONTENT_BG_IMAGE">
        </div>
        <div className="MAIN_CONTENT_TITLE">
            {/* <Title style={{backgroundColor:'black'}} level={2} keyboard>
                Fastest way to arrange the meetings
            </Title>
            <Title style={{backgroundColor:'black'}} level={2} keyboard>
                Post and Get the Messages Instanly and Very User Friendly
            </Title>
            <Button size="large" ghost={true}>
                Get Started
            </Button> */}
            <div style={{border:'1px solid white', padding: '15px'}}>
            <Title style={{}} level={2} keyboard>
                <b>Fastest way to arrange the meetings,</b><br />
                Post and Get the Messages Instanly and Very User Friendly
                {/* <Title level={2}>
                    
                </Title> */}
            </Title>
            <Button size="large" ghost={true}>
                <Link to="/login">
                    Get Started
                </Link>
            </Button>
            </div>
        </div>
        </>
    )
}

export default MainContent;