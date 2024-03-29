import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";

const App = () => {
	const [coins, setCoins] = useState([]);
	const url =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false";
	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setCoins(response.data);
				console.log(response.data[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Coins coins={coins} />
				<Routes>
					{/* <Route path="/" element={<Coins coins={coins} />} /> */}
					{/* <Route path="/coin" element={<Coin />}>
						<Route path=":coinId" element={<Coin />} />
					</Route> */}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
