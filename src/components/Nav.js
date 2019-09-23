import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from "react-router-dom";
import { Menu, Layout } from 'antd';

import fire from "../boot/firebase";

const { Header } = Layout;

class Nav extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props){
        super(props);

        this.fire = fire;
        this.handleClickLogout = this.handleClickLogout.bind(this);
    }

    handleClickLogout(){
        this.fire.auth.signOut().then(() => {
            console.log('holi');
            window.localStorage.removeItem("labNotes");
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <Header className="nav__wrapper">
                <div className="brandLogo" >
                 LapNotes
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    className="nav__component-menu"
                >
                    <Menu.Item key="notes">
                        <Link to="/notes"> Notes </Link> 
                    </Menu.Item>
                    <Menu.Item key="newNotes">
                        <Link to="/newNote"> New Note </Link>
                    </Menu.Item>
                    <Menu.Item key="logout" className="btnLogout" onClick={this.handleClickLogout}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default withRouter(Nav);
