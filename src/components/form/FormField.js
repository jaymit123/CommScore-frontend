import React from 'react';
import { Input, Form } from 'antd';
const FormItem = Form.Item;

export default ({ input, children, name, label, htmltype, meta: { error, touched } }) => {


    const { validateStatus, help } = getFieldStatus(error, touched);
    return (<FormItem label={label} validateStatus={validateStatus} help={help} >
        <Input type={htmltype} {...input} children={children} required   ></Input>
    </FormItem>);
}


const getFieldStatus = (error, touched) => {
    if (error && touched) {
        return { validateStatus: 'error', help: error }
    } else {
        return { validateStatus: 'success', help: '' }
    }
}