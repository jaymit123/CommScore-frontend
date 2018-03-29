import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import ConfirmRegister from './ConfirmRegister';
import { Button, Alert } from 'antd';
import { Redirect} from 'react-router-dom';
const { Content } = Layout;


class Register extends Component {
    constructor() {
        super();
        this.state = { 'confirm': false };
    }

// Display registeration confirmation form to user when button is clicked. 
    

    renderConfirmation() {
        if (!this.state.confirm) {
            return <Button type='normal' onClick={() => this.setState({ 'confirm': true })} >Confirm User</Button>
        } else {
            return <ConfirmRegister />
        }
    }

    renderAlert() {
        const { message, type } = this.props.alert;
        if (type) {
            return <Alert type={type} message={message} banner />;
        }
    }


    render() {
        if (this.props.auth) return (<Redirect to={'/compare'}/>)
        else return (<Content style={{ height: '100%', textAlign: 'center', width: '50%', margin: '0 auto' }}>Register Page
            {this.renderAlert()}
            <RegisterForm />
            {this.renderConfirmation()}
        </Content>)
    }
}


const mapDispatchToProps = ({ auth, alert }) => { return { auth, alert } }

export default connect(mapDispatchToProps)(Register);
