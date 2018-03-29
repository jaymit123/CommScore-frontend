import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getStats } from '../../../actions';

const { Content } = Layout;


class ConmpareControls extends Component {


    render() {
        return (<Content style={{ height: '100%', textAlign: 'center', borderBottom: '5px dotted  black', margin: '15% 0% 5% 0%', paddingBottom: '2%' }}>
            <center><h2>Your Results</h2></center>
            <Button style={{ marginRight: '5px' }} onClick={() => this.props.toggleAlreadyStored()}> Set Data </Button>
            <Button style={{ marginRight: '5px' }} type="danger" > Clear Data on Server </Button>
            <Button style={{ marginRight: '5px' }} type="primary" onClick={() => this.props.getStats('all')}>  Get Results </Button>
        </Content>)
    }
}





export default connect(null, { getStats })(ConmpareControls);
