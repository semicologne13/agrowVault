"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover";
import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const connectWalletHandler = () =>{
        if(window.ethereum) {
            provider.send("eth_requestAccounts", []).then(async () => {
                await accountChangedHandler(provider.getSigner());
            })
        } else {
            setErrorMessage("Please install Metamask!!");
        }
    }
    const accountChangedHandler = async (newAccount) => {
        const address = await newAccount.getAddress();
        setDefaultAccount(address);
        const balance = await newAccount.getBalance();
        setUserBalance(ethers.utils.formatEther(balance));
        await getUserBalance(address);
    }
    const getUserBalance = async (address) => {
        const balance = await provider.getBalance(address,"latest");
    }
  return (
    <div>WalletCard</div>
  )
}

export default WalletCard