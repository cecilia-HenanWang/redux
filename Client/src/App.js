import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Account from "./pages/Account";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="Account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
