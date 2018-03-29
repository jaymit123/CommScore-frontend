import React, { Component } from 'react';
import { Layout, Form, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import compareFormFields from './compareFormFields';
import { Field, reduxForm } from 'redux-form';
import FormField from '../form/FormField';
import { submitDetails } from '../../actions';
import { validateCompare } from '../../utils/validate';

const { Content } = Layout;
const FormItem = Form.Item;


class CompareForm extends Component {

    renderFields() {
        return _.map(compareFormFields, ({ name, label, type }) => <Field component={FormField} type='text' key={name} name={name} label={label} htmltype={type} />)
    }


    render() {
        return (<Content style={{ height: '100%', textAlign: 'center' }}>
            <Form>
                {this.renderFields()}
                <FormItem>
                    <Button onClick={this.props.handleSubmit(() => { this.props.submitDetails(this.props.formValues) })} type='primary' htmlType='submit' >Upload<Icon style={{fontSize:24}}type="cloud-upload"/></Button>
                </FormItem>
            </Form>

            <Button onClick={() => this.props.toggleAlreadyStored()}> Data Already Stored ? </Button>

        </Content>)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        'submitDetails': (values) => dispatch(submitDetails(values))
    }
}

const mapStateToProps = ({ form: { compare } }) => {
    return {
        formValues: compare ? compare.values : null
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'compare', validate: validateCompare })(CompareForm));
