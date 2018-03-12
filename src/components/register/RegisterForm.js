import React, { Component } from 'react';
import { Layout, Form, Button } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import registerFields from './registerFormFields';
import { Field, reduxForm } from 'redux-form';
import RegisterField from './RegisterField';
import { registerUser } from '../../actions';
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const { Content } = Layout;
const FormItem = Form.Item;


class RegisterForm extends Component {

    renderFields() {
        return _.map(registerFields, ({ name, label, type }) => <Field component={RegisterField} type='text' key={name} name={name} label={label} htmltype={type} />)
    }


    render() {
        return (<Content style={{ height: '100%', textAlign: 'center' }}>
            <Form>
                {this.renderFields()}
                <FormItem>
                    <Button onClick={this.props.handleSubmit(() => { this.props.registerUser(this.props.formValues) })} type='primary' htmlType='submit' >Register</Button>
                </FormItem>
            </Form>

        </Content>)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        'registerUser': (values) => dispatch(registerUser(values))
    }
}

const mapStateToProps = ({ form: { register } }) => {
    return {
        formValues: register ? register.registeredFields : null
    }
}

const validate = (values) => {
    const errors = {};
    const email = values.email;
    if (email.length && emailRegex.test(email) === false)  errors['email'] = "Please enter a valid email";
}


export default reduxForm({ form: 'register' } , validate)(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
