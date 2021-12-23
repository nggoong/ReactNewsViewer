import React, { useState, useCallback } from 'react';
import './SignUp.css';


const SignUp = () => {

    const [form, setForm] = useState({
        email:'',
        nickname:'',
        password:'',
        confirmPassword:''
    })


    return(
        <div className='blur-container'>
            <div className='signup-templete'>
                <input type="email" name='email' placeholder='email' value={form.email}></input>
                <input type="text" name='nickname' placeholder='nickname' value={form.nickname}></input>
                <input type="password" name='password' placeholder='password' value={form.password}></input>
                <input type="password" name='confirmPassword' placeholder='input your password again' value={form.confirmPassword}></input>
                <div className='btn-container'>
                    <button>확인</button>
                    <button>취소</button>
                </div>
            </div>

        </div>
    )
}

export default SignUp;