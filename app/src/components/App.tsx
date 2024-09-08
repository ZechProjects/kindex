import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyProfilePage from "./CompanyProfilePage";
import ReviewsPage from "./ReviewsPage";
import SearchCompanyPage from "./SearchCompanyPage";
import contractsJSON from "../abis/7887.json";
import { createKintoSDK, KintoAccountInfo } from "kinto-web-sdk";
import {
  defineChain,
  createPublicClient,
  http,
  getContract,
  Address,
} from "viem";
import Navbar from "./Navbar";

interface KYCViewerInfo {
  isIndividual: boolean;
  isCorporate: boolean;
  isKYC: boolean;
  isSanctionsSafe: boolean;
  getCountry: string;
  getWalletOwners: Address[];
}

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
  const [accountInfo, setAccountInfo] = useState<KintoAccountInfo | undefined>(
    undefined
  );
  const [kycViewerInfo, setKYCViewerInfo] = useState<any | undefined>(
    undefined
  );
  const kintoSDK = createKintoSDK("0x0aE20e3C7aFe02c5684eb54C40387c7fb5C47Faf");

  const handleLogin = async () => {
    console.log("Logging in...");
    async function kintoLogin() {
      try {
        console.log("Logging in kintoSDK...");
        await kintoSDK.createNewWallet();
      } catch (error) {
        console.error("Failed to login/signup:", error);
      }
    }

    await kintoLogin();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  async function fetchKYCViewerInfo() {
    if (!accountInfo?.walletAddress) return;

    const client = createPublicClient({
      chain: kinto,
      transport: http(),
    });
    const kycViewer = getContract({
      address: contractsJSON.contracts.KYCViewer.address as Address,
      abi: contractsJSON.contracts.KYCViewer.abi,
      client: { public: client },
    });

    console.log("fetchKYCViewerInfo");

    try {
      const [
        isIndividual,
        isCorporate,
        isKYC,
        isSanctionsSafe,
        getCountry,
        getWalletOwners,
      ] = await Promise.all([
        kycViewer.read.isIndividual([accountInfo.walletAddress]),
        kycViewer.read.isCompany([accountInfo.walletAddress]),
        kycViewer.read.isKYC([accountInfo.walletAddress]),
        kycViewer.read.isSanctionsSafe([accountInfo.walletAddress]),
        kycViewer.read.getCountry([accountInfo.walletAddress]),
        kycViewer.read.getWalletOwners([accountInfo.walletAddress]),
      ]);

      setKYCViewerInfo({
        isIndividual,
        isCorporate,
        isKYC,
        isSanctionsSafe,
        getCountry,
        getWalletOwners,
      } as KYCViewerInfo);
    } catch (error) {
      console.error("Failed to fetch KYC viewer info:", error);
    }

    console.log("KYCViewerInfo:", kycViewerInfo);
  }

  useEffect(() => {
    if (accountInfo?.walletAddress) {
      fetchKYCViewerInfo();
    }
  }, [accountInfo]);

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchCompanyPage />} />
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
