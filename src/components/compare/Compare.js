import React, { Component } from 'react';
import { Layout } from 'antd';
import CompareForm from './CompareForm';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CompareResults from './CompareResults/CompareResults';
const { Content } = Layout;


class Compare extends Component {
    constructor(){
        super();
        this.state = { alreadyStored : false };
        this.toggleAlreadyStored = this.toggleAlreadyStored.bind(this);
    }


    toggleAlreadyStored(){
        this.setState({ alreadyStored : !this.state.alreadyStored});
    }


    renderContent(){
        if(!this.state.alreadyStored){
            return <CompareForm toggleAlreadyStored={this.toggleAlreadyStored}/>
        }else{
            return <CompareResults toggleAlreadyStored={this.toggleAlreadyStored}/>
        }
    }

    render() {
        if (!this.props.auth) return (<Redirect to={'/login'} />)
        else {



            return (<Content style={{ height: '100%', textAlign: 'center', width: '50%', margin: '0 auto' }}>
                {this.renderContent()}
            </Content>)
        }
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}


export default connect(mapStateToProps)(Compare);
