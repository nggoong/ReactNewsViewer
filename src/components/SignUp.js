import React, { useState, useCallback } from 'react';
import './SignUp.css';


const SignUp = ({ modalToggle }) => {

    const [form, setForm] = useState({
        email:'',
        nickname:'',
        password:'',
        confirmPassword:''
    })

    const formChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const clickHandler = (e) => {
        e.stopPropagation();
        modalToggle();
    }



    return(
        <div className='blur-container' onClick={clickHandler}>
            <div className='signup-templete'>
                <h1>LOGIN</h1>
                <input type="email" name='email' placeholder='email' value={form.email} onChange={formChange}></input>
                <input type="text" name='nickname' placeholder='nickname' value={form.nickname} onChange={formChange}></input>
                <input type="password" name='password' placeholder='password' value={form.password} onChange={formChange}></input>
                <input type="password" name='confirmPassword' placeholder='input your password again' value={form.confirmPassword} onChange={formChange}></input>
                <div className='btn-container'>
                    <button onClick={(e)=>{
                        e.stopPropagation();
                        modalToggle()
                        }}>확인</button>
                    <button onClick={(e)=>{
                        e.stopPropagation();
                        modalToggle()
                        }}>취소</button>
                </div>
            </div>

        </div>
    )
}

export default SignUp;