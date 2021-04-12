import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from 'antd'
import './styles.css'


const {Title} = Typography;

const MainContent = () => {
    return (
        <>
        <div className="main-content-bg-image">
        </div>
        <div className="main-content-title">
            <div style={{border:'1px solid white', padding: '15px'}}>
            <Title style={{}} level={2} keyboard>
                <b>Fastest way to arrange the meetings,</b><br />
                Post and Get the Messages Instanly and Very User Friendly
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