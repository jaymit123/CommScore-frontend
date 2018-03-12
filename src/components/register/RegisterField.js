import React from 'react';
import { Input, Form } from 'antd';
const FormItem = Form.Item;

export default ({ input,name, label, htmltype, meta: { error, touched } }) => {
    return (<FormItem label={label} >
        <Input {...input} type={htmltype} required   ></Input>
    </FormItem>);
}