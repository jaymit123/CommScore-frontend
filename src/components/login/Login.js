import React, { Component } from 'react';
import { Layout } from 'antd';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
const { Content } = Layout;


class Login extends Component {
    render() {
        if (this.props.auth) return (<Redirect to={'/compare'}/>)
        else return (<Content style={{ height: '100%', textAlign: 'center', width: '50%', margin: '0 auto' }}>
            <LoginForm />
        </Content>)
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}


export default connect(mapStateToProps)(Login);
