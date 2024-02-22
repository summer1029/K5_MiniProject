import React from 'react';

import { useState } from "react";
import { useRecoilState } from "recoil";
import { stLogin } from "./AtomSt"
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useRecoilState(stLogin);  
  console.log("login", isLogin)

  const navigate = useNavigate()
  const navigateToLogin = () => {
      navigate("/Login")
  }

  const handleLogin = (userIn) => {
    localStorage.setItem("user", "userIn")
    setUser(userIn)

    // 로그인이 되면 true
    setIsLogin(true)
  }

  const handleLogout = (userIn) => {
    localStorage.removeItem("user")
    setUser(null)

    // 로그아웃이 되면 false
    setIsLogin(false)
  }

  return (
  // <LoginForm onSubmit={handleSubmit} />
  <div>
    {/* 로그인이 되면(isLogin이 true가 되면) Logout 버튼 생성 */}
      {isLogin ? <button className='block lg:inline-block p-1.5 mr-3 border rounded text-lg font-appleB text-white border-white hover:text-red-400 hover:bg-white' onClick={handleLogout}>Logout</button>
            //  로그인이 안된 상태이면(isLogin이 false가 되면) Loginform 페이지 띄우기
             : <button className='block lg:inline-block p-1.5 mr-3 border rounded text-lg font-appleB text-white border-white hover:text-red-400 hover:bg-white' onClick={navigateToLogin}>Login</button>
             } 
  </div>
  )
}
