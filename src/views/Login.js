import React, { Component } from 'react'
import fire from '../boot/firebase';
import { Button } from 'antd';
import PropTypes from 'prop-types'

export default class Login extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props){
        super(props);

        this.handleClickLogin = this.handleClickLogin.bind(this);

    }

    handleClickLogin(){
        fire.auth.signInWithPopup(fire.provider) 
        .then((result) => {
            const data = {
                user: result.user
            };

            window.localStorage.setItem('labNotes', JSON.stringify(data));
            this.props.history.push('/notes');
        });
    }

    render() {
        return (
            <div className="login__wrapper">
                <Button type="primary" icon="google" onClick={this.handleClickLogin}>
                    Google login
                </Button>
            </div>
        )
    }
}
