import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import CompareControls from './CompareControls';
import CompareFilters from './CompareFilters';
import { getStats } from '../../../actions';
import DisplayResults from './DisplayResults';

class CompareResults extends Component {


    componentDidMount(){
        this.props.getStats('single');
    }

    render() {
        return (<Layout style={{ height: '100%', textAlign: 'center' }}>
            <CompareControls toggleAlreadyStored={this.props.toggleAlreadyStored} />
            <CompareFilters />
            <DisplayResults />
        </Layout>)
    }
}






export default connect(null, {getStats})(CompareResults);;
