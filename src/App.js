import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import FixedBtn from "./components/fixedBtn";
import BookingLayout from "./components/bookingMovie/bookingLayout";
import BookingSeat from "./components/bookingMovie/bookingSeat";
import { BookingProvider } from "./components/bookingMovie/bookingContext";
import { useAuth } from "./AuthProvider"; // AuthProvider만 가져오기
import Main from "./pages/main";
import Login from "./pages/login";
import Movies from "./pages/movies";
import Theaters from "./pages/theaters";
import MovieDetail from "./pages/movieDetail";
import JoinWelcome from "./pages/joinWelcome";
import Join from "./pages/join";
import BookingDefault from "./components/bookingMovie/bookingDefault";

function App() {
  const { isLoggedIn, logout } = useAuth(); // 로그아웃 함수도 가져오기

  return (
    <div className="App">
      <BrowserRouter>
        {/* AuthProvider로 로그인 상태를 관리 */}
        <BookingProvider>
          <Header isLoggedIn={isLoggedIn} onLogout={logout} />{" "}
          {/* 로그아웃 함수 전달 */}
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/joinWelcome" element={<JoinWelcome />} />
            <Route path="/join" element={<Join />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/theaters" element={<Theaters />} />
            <Route path="/movieDetail/:id" element={<MovieDetail />} />
            <Route path="/ticket" element={<BookingLayout />} />
            <Route path="/bookingSeat" element={<BookingSeat />} />
            <Route path="/bookingDefault" element={<BookingDefault />} />
          </Routes>
        </BookingProvider>
      </BrowserRouter>
      <FixedBtn />
      <Footer />
    </div>
  );
}

export default App;
