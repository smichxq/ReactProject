import {Form, Input} from "antd";

//ispassword: 是否为密码框
// lb: 输入框旁边的提示
// nm: 输入框内容变量名称
// rule: 一些规则 [] []
export function InputComp({ispassword,lb,nm,rule}) {
    return (
        <Form.Item
            label={lb}
            name={nm}
            rules={rule}
        >
            {ispassword ? <Input.Password /> : <Input />}


        </Form.Item>
    )
}