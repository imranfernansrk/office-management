import React from "react";
import { Link } from "react-router-dom";
import { HomepageString, HomepageTitle } from "../../constants";
import { Button, Typography } from 'antd'
import './styles.css'

const {Title} = Typography;

const MainContent = () => {
    return (
        <>
        <div className="main-content-bg-image">
        </div>
        <div className="main-content-title">
            <div className="main-content-title-box">
            <Title level={2} keyboard>
                <b>{HomepageString.CONTENT_TITLE}</b>
                <br/>
                {HomepageString.CONTENT_SUB_TITLE}
            </Title>
            <Button size="large" ghost={true}>
                <Link className="get-started-link" to="/login">{HomepageTitle.GET_STARTED}</Link>
            </Button>
            </div>
        </div>
        </>
    )
}

export default MainContent;