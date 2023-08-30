import { postUser } from 'app/api/postData';
import { redirect } from 'next/navigation';
import React from 'react'

function Login() {
  const getLogDetails = async (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value
    // const usernameInput = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    // setSignUpDetails({username:`${usernameInput}`,email:`${emailInput}`,password:`${passwordInput}`})
    // console.log(signUpDetails)
    try {
      const url = `https://chimes-api.vercel.app/api/v2/auth/login`
      const item = {email,password}
      const {user,token} = await postUser(item,url)
      console.log(user)
      console.log(token)
      localStorage.setItem('username', user.username)
      localStorage.setItem('email', email)
      localStorage.setItem('token', token)
      alert('successfully logged in')
    } catch (error) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }
  return (
    <div className="">
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-30 w-auto bg-sky-400 rounded-full ring-4 ring-sky-500"
            src="https://cdn-icons-png.flaticon.com/128/7096/7096707.png"
            alt="Chimes Icon"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => getLogDetails(e)}>
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Do not have an account?{' '}
            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register Now!
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login