import React, { Component } from 'react';
import { Layout, Form, Button } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import registerFields from './registerFormFields';
import { Field, reduxForm } from 'redux-form';
import FormField from '../form/FormField';
import { registerUser } from '../../actions';
import { validateRegistration } from '../../utils/validate';

const { Content } = Layout;
const FormItem = Form.Item;


class RegisterForm extends Component {


    renderFields() {
        return _.map(registerFields, ({ name, label, type }) => <Field component={FormField} type='text' key={name} name={name} label={label} htmltype={type} />)
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
        formValues: register ? register.values : null
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'register', validate: validateRegistration })(RegisterForm));
