import Link from 'next/link'
import React from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export const Login = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-5/12 lg:block">
        <img
          className="h-full w-full object-fill"
          src="assets/fondo.png"
          alt="fondo"
        />
      </div>
      <div className="z-50 grid h-full w-full place-content-center rounded-2xl bg-white font-montserrat lg:absolute lg:right-0 lg:w-[60%]">
        <div className="flex flex-col items-center">
          <figure>
            <img src="assets/logo.png" alt="" />
          </figure>
          <h1 className="text-3xl font-semibold text-black">Librioteca</h1>
        </div>
        <p className="mb-16 max-w-sm pt-3 text-center text-[#868686]">
          Somos una biblioteca con gran variedad de libros de todos los géneros
          y editoriales
        </p>
        <form className="flex flex-col space-y-8">
          <Input name="Email" />
          <Input name="Contraseña" />
        </form>
        <h6 className="my-3 cursor-pointer self-end justify-self-end text-xs font-semibold text-[#151515]">
          Recuperar contraseña
        </h6>
        <div className="mt-20">
          <Link href="/dashboard">
            <a href="">
              <Button title="Iniciar Sesión" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
