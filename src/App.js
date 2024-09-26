import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "../src/components/footer";
import FixedBtn from "./components/fixedBtn";
import BookingLayout from "./components/bookingMovie/bookingLayout";
import BookingSeat from "./components/bookingMovie/bookingSeat";

import Main from "./pages/main";
import Login from "./pages/login";
import Movies from "./pages/movies";
import Theaters from "./pages/theaters";
import MovieDetail from "./pages/movieDetail";
import JoinWelcome from "./pages/joinWelcome";
import Join from "./pages/join";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/joinWelcome" element={<JoinWelcome />} />
          <Route path="/join" element={<Join />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/ticket" element={<Ticket />} /> */}
          <Route path="/ticket" element={<BookingLayout />} />
          <Route path="/theaters" element={<Theaters />} />
          <Route path="/movieDetail/:id" element={<MovieDetail />} />
          <Route path="/bookingSeat" element={<BookingSeat />} />
        </Routes>
      </BrowserRouter>
      <FixedBtn />
      <Footer />
    </div>
  );
}

export default App;
