import React from 'react';
import { Image } from 'antd';
import { AxiosInstace } from "../Axios/MyAxios";
import {AxiosFIns} from "../Axios/MyAxios";
import { useState } from "react";

export function ImageComp() {
    const url = "http://localhost:8080/community/login/kaptcha" + getRandomString();
    const [index,setIndex] = useState(url);

    // let ImageStream;
    // let randomStr = getRandomString();


    //初次加载必须为Image组件提供一个地址获取验证码
    // setIndex(url);

    function refresh() {
        let funcUrl = "http://localhost:8080/community/login/kaptcha" + getRandomString();
        // let url = new URL(funcUrl);

        setIndex(funcUrl);
        AxiosFIns(funcUrl)({
            url: funcUrl,
            method: "GET"
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

        //     AxiosInstace({
        //     url: {url},
        //     method:"GET",
        //     // responseType:'blob'
        //
        // }).then(res=>{
        //     // var reader = new FileReader()
        //     // res = ImageStream
        //     console.log(res.data)
        // }).catch(err=>{
        //     console.log(err)
        // })
        // alert('知道了')
    }

    // let imgUrl = "http://localhost:8080" + url + randomStr

    // var Img =

    return (
        <Image
            width={90}
            height={40}
            preview={false}
            src={index}
            onClick={refresh}
        />
    )
}


const _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';


/**
 * 随机生成字符串
 * @param len 指定生成字符串长度
 */
function getRandomString(len) {
    let min = 0, max = _charStr.length - 1, _str = '';
    //判断是否指定长度，否则默认长度为15
    len = len || 15;
    //循环生成字符串
    for (var i = 0, index; i < len; i++) {
        index = RandomIndex(min, max, i);
        _str += _charStr[index];
    }
    return _str;
}




/**
 * 随机生成索引
 * @param min 最小值
 * @param max 最大值
 * @param i 当前获取位置
 */
function RandomIndex(min, max, i){
    let index = Math.floor(Math.random()*(max-min+1)+min),
        numStart = _charStr.length - 10;
    //如果字符串第一位是数字，则递归重新获取
    if(i==0&&index>=numStart){
        index = RandomIndex(min, max, i);
    }
    //返回最终索引值
    return index;
}