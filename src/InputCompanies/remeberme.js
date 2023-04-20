import {Checkbox, Form} from "antd";

// lb: 输入框旁边的提示
// nm: 输入框内容变量名称
export function Remeberme({lb,nm,msg}) {
    return (

        <Form.Item name={lb} valuePropName={nm} wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>{msg}</Checkbox>
        </Form.Item>
    )
}