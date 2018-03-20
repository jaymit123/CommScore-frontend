import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { logoutUser, fetchUser } from '../actions';
import { withRouter } from 'react-router-dom';
const { Item } = Menu;


class Header extends Component {


    componentDidMount() {
        this.props.fetchUser();
      }
    

    renderContent() {
        if (this.props.auth) {
            return [<Item key={'/compare'}>Compare</Item>, <Item key={'logout'}>Logout</Item>]
        } else {
            return [<Item key={'/register'}>Sign Up</Item>,
            <Item key={'/login'}>Sign In</Item>]

        }
    }

    onMenuClick({ key }) {
        if (key === 'logout' && this.props.auth) {
            this.props.logoutUser();
            this.props.history.push('/');
        } else {
            this.props.history.push(key);
        }
    }

    render() {
        return <Layout.Header>
            <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }} onSelect={this.onMenuClick.bind(this)}>
                <Item key={'/'}>Compare-Yourself</Item>
                {this.renderContent()}
            </Menu>
        </Layout.Header>

    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}




export default withRouter(connect(mapStateToProps, { logoutUser, fetchUser })(Header));