import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "../src/components/footer";
import FixedBtn from "./components/fixedBtn";
import BookingLayout from "./components/bookingMovie/bookingLayout";
import BookingSeat from "./components/bookingMovie/bookingSeat";

import { BookingProvider } from "./components/bookingMovie/bookingContext";

import Main from "./pages/main";
import Login from "./pages/login";
import Movies from "./pages/movies";
import Theaters from "./pages/theaters";
import MovieDetail from "./pages/movieDetail";
import JoinWelcome from "./pages/joinWelcome";
import Join from "./pages/join";
import BookingDefault from "./components/bookingMovie/bookingDefault";

function App() {
  return (
    <div className="App">
      <BookingProvider>
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
            <Route path="/theaters" element={<Theaters />} />
            <Route path="/movieDetail/:id" element={<MovieDetail />} />
            <Route path="/ticket" element={<BookingLayout />} />
            <Route path="/bookingSeat" element={<BookingSeat />} />
            <Route path="/bookingDefault" element={<BookingDefault />} />
          </Routes>
        </BrowserRouter>
      </BookingProvider>
      <FixedBtn />
      <Footer />
    </div>
  );
}

export default App;
