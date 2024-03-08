import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const base = "https://fastjwt.onrender.com"

    fetch( base+"/auth", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email, password})
    }).then((res)=> {
      if(res.status === 403){
        alert("Invalid Credentials")
      }else if (res.status == 200){
        const data = res.json()
        return data
      }
    }).then((data) => {
        console.log(data)
        const token = data.token
        const email = data.email

        console.log(token)
        console.log(email)

        localStorage.setItem("isLoggedIn", true)
        localStorage.setItem("Jwt-Token", token)
        localStorage.setItem("email", email)
        navigate("/task")
    })
  }

  return (
    <>
      <form className="mx-auto mt-8 max-w-md" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            onBlur={(e)=>{setEmail(e.target.value)}}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            autoComplete="email"
            placeholder="gh0stfrk@localhost.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            onBlur={(e)=>{setPassword(e.target.value)}}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="gh0stfrk"
            autoComplete="password"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-black hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
