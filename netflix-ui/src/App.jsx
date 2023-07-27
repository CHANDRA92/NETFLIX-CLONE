// import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import { Route,Routes } from 'react-router-dom'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Netflix from './pages/Netflix'
// import Player from './pages/Player'
// import Admin from './pages/Admin'


// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/admin" element={<Admin />} />
//       <Route path="/player" element={<Player />} />
//       <Route path="/" element={<Netflix/>} />
//     </Routes>
//     </BrowserRouter>
//   );
// }
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import Admin from './pages/Admin'
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
import Error from "./pages/Error";
import UnderConstruction from "./pages/UnderConstruction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminlist" element={<UnderConstruction />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Netflix />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}