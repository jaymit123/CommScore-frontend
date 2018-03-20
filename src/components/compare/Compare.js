import React, { Component } from 'react';
import { Layout } from 'antd';
import CompareForm from './CompareForm';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
const { Content } = Layout;


class Compare extends Component {
    render() {
        if (!this.props.auth) return (<Redirect to={'/login'}/>)
        else return (<Content style={{ height: '100%', textAlign: 'center', width: '50%', margin: '0 auto' }}>
            <CompareForm />
        </Content>)
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}


export default connect(mapStateToProps)(Compare);
