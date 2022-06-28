import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Albums from "./components/Albums";
import Songs from "./components/Songs";
import User from "./components/User";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Songs />} />
            <Route path="album" element={<Albums />} />
            {/* <Route path="/" element={<Playlist />} /> */}
            <Route path="user" element={<User />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
