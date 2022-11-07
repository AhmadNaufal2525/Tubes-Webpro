import React from 'react';
import background from '../../assets/imageLogin.png'
import Logo from '../../assets/logo.png'
import { BassicTitle } from '../../Components/BassicTitle/BassicTitle';
import { Button } from '../../Components/Button/Button';
import ButtonGoogle from '../../Components/ButtonGoogle/ButtonGoogle';
import './Register.css';

export default function Register() {
  return (
    <section className='login overflow-hidden'>
    <div className='flex'>
        <div>
          <img className='image-login' src={background} alt=""/>
        </div>
        <div className='form'>
          <img className='logo' src={Logo} alt=""/>
          <h1 className='mt-8 text-2xl font-bold'>Daftar</h1>
          <p className='mt-4'>Yuk buat daftarkan akunmu sekarang juga!</p>
          <ButtonGoogle/>
          <div className='mt-4'>
            <div className='divider text-gray-400'>
            atau daftar dengan
            </div>
          </div>
          <BassicTitle title="Email" type="email" />
          <BassicTitle title="Nama Pengguna" type="text" />
          <BassicTitle title="Kata Sandi" type="password" />
          <input className='mr-1' type="checkbox"/>
          <label>Dengan mendaftar saya telah menyetujui <split className="text-blue-200">Syarat dan <br/> Ketentuan</split>, serta Kebijakan Privasi Kuliner.go</label>
         <div>
          <Button title="Daftar" />
         </div>
        </div>
      </div>
    </section>
  )
}
