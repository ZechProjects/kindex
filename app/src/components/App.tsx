import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyProfilePage from "./CompanyProfilePage";
import ReviewsPage from "./ReviewsPage";
import { createKintoSDK, KintoAccountInfo } from "kinto-web-sdk";
import { defineChain } from "viem";
import Navbar from "./Navbar";

const kinto = defineChain({
  id: 7887,
  name: "Kinto",
  network: "kinto",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.kinto-rpc.com/"],
      webSocket: ["wss://rpc.kinto.xyz/ws"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://kintoscan.io" },
  },
});

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/company-profile/:companyId"
          element={<CompanyProfilePage />}
        />
        <Route path="/company-reviews/:companyId" element={<ReviewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
