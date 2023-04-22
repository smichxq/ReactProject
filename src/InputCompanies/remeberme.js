import {Checkbox, Form} from "antd";
import React from "react";

// lb: 输入框旁边的提示
// nm: 输入框内容变量名称
export function Remeberme({type,nm,msg}) {
    return (

        <Form.Item name={nm} valuePropName={type} wrapperCol={{ offset: 15, span: 5 }}>
            <Checkbox>{msg}</Checkbox>
        </Form.Item>
    )
}