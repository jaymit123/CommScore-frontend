import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import ConfirmRegister from './ConfirmRegister';
import { Button } from 'antd';
const { Content } = Layout;


class Register extends Component {
    constructor() {
        super();
        this.state = { 'confirm': false };
    }

    renderConfirmation() {
        if (!this.state.confirm) {
            return <Button type='normal' onClick={() => this.setState({ 'confirm': true })} >Confirm User</Button>
        } else {
           return <ConfirmRegister />
        }
    }


    render() {
        return (<Content style={{ height: '100%', textAlign: 'center', width: '50%', margin: '0 auto' }}>Register Page
        <RegisterForm />
            {this.renderConfirmation()}
        </Content>)
    }
}


const mapDispatchToProps = ({ auth }) => { return { auth } }

export default connect(mapDispatchToProps)(Register);
