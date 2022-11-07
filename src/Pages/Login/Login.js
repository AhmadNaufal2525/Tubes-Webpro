import React from "react";
import background from '../../assets/imageLogin.png'
import Logo from '../../assets/logo.png'
import { BassicTitle } from '../../Components/BassicTitle/BassicTitle';
import { Button } from '../../Components/Button/Button';
import LoginAlter from '../../Components/LoginAlter/LoginAlter';
import './Login.css';


export default function Login() {
    return (
        <section className='login-wrapper'>
        <div className='flex'>
        <div>
          <img className='image-login' src={background} alt=""/>
        </div>
        <div className='alternative-login'>
            <img className='logo' src={Logo} alt=""/>
            <h1 className='mt-8 text-2xl font-bold'>Login</h1>
            <p className='mt-4'>Yuk kita jelajahi Kuliner.Go Sekarang!</p>
            <LoginAlter/>
          <div className='mt-4'>
                <div className='divider text-gray-400'>
                    atau login dengan
                </div>
         </div>
        <div className="form-login">
            <BassicTitle title="Email" type="email" />
            <BassicTitle title="Kata Sandi" type="password" />
            <input className='mr-1' type="checkbox"/>
            <label>Dengan ini saya telah membaca <split className="text-blue-200">Syarat dan <br/> Ketentuan</split>, serta Kebijakan Privasi Kuliner.go</label>
            <Button title="Login" />
        </div>
        </div>
      </div>
    </section>
    )
}