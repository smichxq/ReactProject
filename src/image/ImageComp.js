import React from 'react';
import { Image } from 'antd';

export function ImageComp() {
    return (
    <Image
        width={100}
        height={50}
        preview={false}
        src="http://localhost:8080/community/login/kaptcha"
        onClick={refresh}
    />
    )
}

function refresh() {

}
