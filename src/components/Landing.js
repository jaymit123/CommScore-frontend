import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
const { Content } = Layout;


class Landing extends Component {
    render() {
        return (<Content style={{ height: '100%', textAlign: 'center' }}>Welcome to Compare-Yourself!</Content>)
    }
}


const mapDispatchToProps = ({ auth }) => { return { auth } }

export default connect(mapDispatchToProps)(Landing);
