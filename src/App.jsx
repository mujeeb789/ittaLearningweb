import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Team from "./pages/Team";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="fixed   z-20">
        <Header />

        </div>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Blog" element={<Blogs />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
