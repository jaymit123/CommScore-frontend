import React, { Component } from 'react';
import { Layout, Form, Button } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import { confirmRegisterFields } from './registerFormFields';
import { Field, reduxForm } from 'redux-form';
import FormField from '../form/FormField';
import { confirmUser } from '../../actions';
import { validateConfirmation } from '../../utils/validate';
const { Content } = Layout;
const FormItem = Form.Item;


class ConfirmRegister extends Component {
/*
confirmRegisterFields
method handling submit
*/
    renderFields() {
        return _.map(confirmRegisterFields, ({ name, label, type }) => <Field component={FormField} type='text' key={name} name={name} label={label} htmltype={type} />)
   
    }

    render() {
        return (<Content style={{ height: '100%', textAlign: 'center' }}>
            <Form>
                {this.renderFields()}
                <FormItem>
                    <Button onClick={this.props.handleSubmit(() => { this.props.confirmUser(this.props.formValues) })} type='primary' htmlType='submit' >Register</Button>
                </FormItem>
            </Form>

        </Content>)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        'confirmUser': (values) => dispatch(confirmUser(values)),
        
    }
}

const mapStateToProps = ({ form: { confirm } }) => {
    return {
        formValues: confirm ? confirm.values : null

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'confirm', validate: validateConfirmation })(ConfirmRegister));
