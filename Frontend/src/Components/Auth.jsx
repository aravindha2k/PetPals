import { useState } from "react";
import {useNavigate} from 'react-router-dom';
export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[username,setUsername]=useState("");


  const [isSignUp, setIsSignup] = useState(true);
 const navigate=useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

  

    if (isSignUp) {
      fetch("http://localhost:3000/user/signup", {
        headers:{
          "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify({ email, password ,username }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            throw new Error(res.error);
          }
          return res;
        })
        .then(() => alert("Register Successfully"))
        .catch((err) => alert(err));
    } else {
      fetch("http://localhost:3000/user/login", {
        headers:{
          "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            throw new Error(res.error);
          }
          return res;
        })

        .then(() => {
          navigate("/");
         console.log("success")
        })

        .catch((err) => alert(err))
       
    }
  };

  return (
    <div className="py-6">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <picture>
          <img
            src="https://media.licdn.com/dms/image/D4D0BAQHhsRoIwd7sAg/company-logo_200_200/0/1683804596890/saraltech_logo?e=1723075200&v=beta&t=7FnrVb61cbwfbbjVQNjF-QJWPZ2rb7x4IvW-VWePDKw"
            alt="SaralTech"
            className="mx-auto w-32 h-32"
          />
          </picture>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              login
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
      {isSignUp &&    <div className="mt-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder="Username"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>

            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button
              onClick={handleFormSubmit}
              className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
            >
              {isSignUp ? "Signup" : "Login"}
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <div onClick={() => setIsSignup(!isSignUp)}>
              {isSignUp ? (
                <p>
                  Is already register? <a href="#">Login</a>
                </p>
              ) : (
                <p>
                  New here <a href="#">Signup</a>
                </p>
              )}
            </div>

            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}