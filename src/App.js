import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "../src/components/footer";
import Main from "./pages/main";
import Login from "./pages/login";
import Movies from "./pages/movies";
import Ticket from "./pages/ticket";
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
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/joinWelcome" element={<JoinWelcome />} />
          <Route path="/join" element={<Join />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/theaters" element={<Theaters />} />
          <Route path="/movieDetail/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
