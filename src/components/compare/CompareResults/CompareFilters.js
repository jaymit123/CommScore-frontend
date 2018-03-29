import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';

const { Content } = Layout;


class CompareFilters extends Component {


    render() {
        let user = this.props.user;
        return (<Content style={{ height: '100%', textAlign: 'center' }}>
            <center><h2>Select Filter</h2></center>
            <Button style={{ margin: '0% 2% 3% 2%' }} type='primary' > Your Age: {(user !== null) ? user.age : "" }  </Button>
            <Button style={{ margin: '0% 2% 3% 2%' }} type='primary' > Your Height: {user!== null ? user.height : ""}  </Button>
            <Button style={{ margin: '0% 2% 3% 2%' }} type='primary'> Your Income: {user !== null ? user.income : ""} </Button> <br />
            <Button style={{ margin: '0% 2% 3% 2%' }}> Higher is Better  </Button>
            <Button style={{ margin: '0% 2% 3% 2%' }}> Lower is Better  </Button>
        </Content>)
    }

}



const mapStateToProps = ({ stats : { user }}) => { return { user  } }


export default connect(mapStateToProps, null)(CompareFilters);
