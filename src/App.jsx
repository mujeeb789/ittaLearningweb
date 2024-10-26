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

import Books from "./pages/Books";

import Team from "./pages/Team";
import CheatSheetPage from "./pages/CheatSheets";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
    
          <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/about" element={<About />} /> */}

            <Route path="/signup" element={<Signup />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/cheatsheets" element={<CheatSheetPage />} />

            <Route path="/contacts" element={<Contacts />} />
            <Route path="/books" element={<Books />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
