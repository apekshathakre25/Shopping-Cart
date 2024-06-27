import React from "react";
import Home from "./Components/Home";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Edit from "./Components/Edit";
import Create from "./Components/Create";
function App() {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex bg-zinc-200">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="absolute left-[17%] top-[3%] text-red-300">
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
