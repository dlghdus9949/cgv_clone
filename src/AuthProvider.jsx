import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태 확인
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // 토큰이 있으면 로그인 상태로 설정
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "your_token"); // 로그인 시 토큰 저장
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token"); // 로그아웃 시 로컬 스토리지에서 토큰 삭제
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
