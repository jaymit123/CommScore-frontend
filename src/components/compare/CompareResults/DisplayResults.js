import React, { Component } from 'react';
import { Layout, List } from 'antd';
import { connect } from 'react-redux';


class DisplayResults extends Component {
    renderList() {
        const allStats = this.props.all;
        if (allStats) {

            const renderItem = ({ age, height, income }) => {
                const content = ` Age: ${age} Height: ${height} Income: ${income}`;

                return (<List.Item  style={{display:'inline-block', textAlign:'center'}}>
                    <List.Item.Meta description={content}/>
                </List.Item>);
            }

            return <List  style={{border:'1px solid black', backgroundColor:'white'}} dataSource={allStats} renderItem={renderItem}/>
        }
    }

    render() {
        return (<Layout style={{ height: '100%', textAlign: 'center' }}>
            {this.renderList()}
        </Layout>)
    }
}



const mapStateToProps = ({ stats: { all } }) => { return { all } }


export default connect(mapStateToProps, null)(DisplayResults);
