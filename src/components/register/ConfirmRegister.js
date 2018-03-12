import React, { Component } from 'react';
import { Layout, Form, Button } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import { confirmRegisterFields } from './registerFormFields';
import { Field, reduxForm } from 'redux-form';
import RegisterField from './RegisterField';
import { confirmUser } from '../../actions';
const { Content } = Layout;
const FormItem = Form.Item;


class ConfirmRegister extends Component {

    renderFields() {
        return _.map(confirmRegisterFields, ({ name, label, type }) => <Field component={RegisterField} type='text' key={name} name={name} label={label} htmltype={type} />)
    }


    render() {
        return (<Content style={{ height: '100%', textAlign: 'center' }}>
            <Form>
                {this.renderFields()}
                <FormItem>
                    <Button onClick={this.props.handleSubmit(() => { this.props.confirmUser(this.props.form) })} type='primary' htmlType='submit' >Confirm</Button>
                </FormItem>
            </Form>

        </Content>)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        'confirmUser': (values) => dispatch(confirmUser(values))
    }
}

const mapStateToProps = ({form: { confirm } }) => {
    return {
        form: confirm ? confirm.registeredFields : null

    }
}


const validate = (values) => {
const error = {};



 };

export default reduxForm({ form: 'confirm' })(connect(mapStateToProps, mapDispatchToProps)(ConfirmRegister));
