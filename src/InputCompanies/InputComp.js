import {Form, Input, Space} from "antd";
import {ImageComp} from "../image/ImageComp";
import React from "react";

//ispassword: 是否为密码框
// lb: 输入框旁边的提示
// nm: 输入框内容变量名称
// rule: 一些规则 [] []
export function InputComp({ispassword,lb,nm,rule,text}) {
    return (
        <Form.Item
            // label={lb}
            name={nm}
            rules={rule}
        >
            {ispassword ? <Input.Password  placeholder={text}/> : <Input  placeholder={text}/>}


        </Form.Item>
    )
}


//输入框+验证码

export function InputCkCode({ispassword,lb,nm,rule,left}) {

    return (

        // <Space
        //     style={{justifyContent:'space-around', flexDirection:'row'}}
        // >
            <Form.Item
                // label={'验证码'}
                name={nm}
                rules={[{required: true, message: '请输入验证码' }]}
                style={{justifyContent:'space-around', flexDirection:'row'}}
                // labelCol={{span: 6}}


            >

                <Space direction="horizontal" align={"baseline"} >
                    {/*<div style={{width:40}}>*/}
                        <Input
                            placeholder="请输入验证码"
                        />

                    {/*</div>*/}



                    {/*<div>*/}
                        <ImageComp />

                    {/*</div>*/}
                </Space>






            </Form.Item>
        // </Space>
    )
}