import React from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const Login = () => {
  const { register, handleSubmit } = useForm()
  const { loginUser, errorLogin, currentUser } = useCurrentUser()
  const router = useRouter()

  const onSubmit: SubmitHandler<FieldValues> = ({ usuario, password }) => {
    loginUser(usuario, password)
  }

  useEffect(() => {
    currentUser.usuario !== '' && router.push('http://localhost:3000/dashboard')
  }, [])

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8"
        >
          <Input register={register} type="text" name="usuario" />
          <Input register={register} type="password" name="password" />
          <input
            type="submit"
            value="Iniciar Sesión"
            className=" flex cursor-pointer items-center justify-center space-x-3 rounded-md bg-[#272727] px-4 py-3 text-white"
          />
        </form>
        {errorLogin && (
          <p className="mt-5 grid place-content-center rounded-lg bg-red-100 px-4  py-2 text-red-600 ">
            Usuario o contraseña incorrecto
          </p>
        )}
        <h6 className="mt-4 cursor-pointer self-end justify-self-end text-xs font-semibold text-[#151515]">
          Recuperar contraseña
        </h6>
        {/* <div className="mt-20">
          <Link href="/dashboard">
            <a href="">
              <Button title="Iniciar Sesión" />
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  )
}
