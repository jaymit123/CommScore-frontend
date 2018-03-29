import React, { Component } from 'react';
import { Layout, Form, Button } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import loginFormFields from './loginFormFields';
import { Field, reduxForm } from 'redux-form';
import FormField from '../form/FormField';
import { loginUser } from '../../actions';
import { validateLogin } from '../../utils/validate';

const { Content } = Layout;
const FormItem = Form.Item;


class LoginForm extends Component {

    renderFields() {
        return _.map(loginFormFields, ({ name, label, type }) => <Field component={FormField} type='text' key={name} name={name} label={label} htmltype={type} />)
    }


    render() {
        return (<Content style={{ height: '100%', textAlign: 'center' }}>
            <Form>
                {this.renderFields()}
                <FormItem>
                    <Button onClick={this.props.handleSubmit(() => { this.props.loginUser(this.props.formValues) })} type='primary' htmlType='submit' >Login</Button>
                </FormItem>
            </Form>

        </Content>)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        'loginUser': (values) => dispatch(loginUser(values))
    }
}

const mapStateToProps = ({ form: { login } }) => {
    return {
        formValues: login ? login.values : null
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'login', validate: validateLogin })(LoginForm));
