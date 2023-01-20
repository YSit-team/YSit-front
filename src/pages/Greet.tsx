import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TeamName from '../components/TeamName';
import Input from '../components/Input'
import Button from '../components/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Greet = () => {

	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        const params = { "Hello" : "hi"}
        axios.get('/greeting', { params } 
        // { World : "hello"}
        )
        .then(
            res => console.log(res)
            )
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    return (
        <div>
            hi
        </div>
    );
};

export default Greet;