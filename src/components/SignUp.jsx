import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const SubmitForm = (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    console.log(userData);
    
    setEmail("");
    setPassword("");
  }
  return (
    <form className='flex flex-col justify-center' onSubmit={(e) => {
      SubmitForm(e)
    }}>
      <div>
        <label htmlFor="email">Enter Your Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className='bg-slate-100 w-11/12 my-3 p-2 rounded-md focus:outline-none'
          value={email}
          type="text"
          name="email"
          id="email" />
      </div>
      <div>
        <label htmlFor="password">Enter Your Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className='bg-slate-100 w-11/12 my-3 p-2 rounded-md focus:outline-none'
          type="password"
          name="password"
          id="password" />
      </div>

      <div className="self-center w-11/12 sm:w-auto">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-slate-100 px-3 py-2 transition-all delay-[0.1s] ease-in-out hover:bg-green-300 hover:-translate-y-1 text-sm font-semibold text-black shadow-sm sm:ml-3 sm:w-auto"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default SignUp