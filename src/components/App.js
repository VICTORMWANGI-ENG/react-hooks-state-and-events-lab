/** @format */

import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
	// Create a state variable to toggle between light and dark mode
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Function to toggle the dark mode state
	const handleToggle = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	// Determine the class to apply based on the current state
	const appClass = isDarkMode ? "App dark" : "App light";

	return (
		<div className={appClass}>
			<header>
				<h2>Shopster</h2>
				<button onClick={handleToggle}>
					{isDarkMode ? "Light Mode" : "Dark Mode"}
				</button>
			</header>
			<ShoppingList items={itemData} />
		</div>
	);
}

export default App;
