import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import { InputComp , InputCkCode} from "../InputCompanies/InputComp";
import { Remeberme } from "../InputCompanies/remeberme";
import {AxiosFIns} from "../Axios/MyAxios";
// import * as url from "url";

const LoginForm: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        const Url = "http://localhost:8080/community/login/sigin";
        AxiosFIns(Url)({
            url: Url,
            method: "POST",
            // account
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        console.log('Success:', values);
        console.log(getFieldValue());
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function getFieldValue() {
        return form.getFieldsValue(true);
    }

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{offset:2, span: 16 }}
            style={{ maxWidth: 900 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <InputComp
                ispassword={false}
                lb={'1'}
                nm={"account"}
                text={"请输入手机或邮箱"}
                rule={[{required: true, message: '请输入正确的邮箱' , type:'email'}]}
            />

            <InputComp
                ispassword={true}
                lb={'1'}
                text={"请输入密码"}
                nm={'password'}
                rule={[{required: true, message: '请输入密码' }]}
            />

            <InputCkCode
                nm={'code'}
            />

            <Remeberme
                type={"checked"}
                nm={"remember"}
                msg={"记住我"}
            />



            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;
