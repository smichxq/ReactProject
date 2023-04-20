import React from 'react';
import { Button, Checkbox, Form } from 'antd';
import { InputComp } from "../InputCompanies/InputComp";
import { Remeberme } from "../InputCompanies/remeberme";
import { ImageComp } from "../image/ImageComp"

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const App: React.FC = () => (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <InputComp
            ispassword={false}
            lb={'账号'}
            nm={"account"}
            rule={[{required: true, message: '请输入账号' }]}
        />

        <InputComp
            ispassword={true}
            lb={'密码'}
            nm={"password"}
            rule={[{required: true, message: '请输入密码' }]}
        />

        <Remeberme
            lb={'记住我'}
            nm={'remeberme'}
            msg={'记住我'}

        />

        <ImageComp />





        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);

export default App;