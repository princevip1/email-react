import { ConfigProvider } from "antd";
import React, { useState } from "react";

import DarkTheme from "./dark";
import LightTheme from "./light";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ConfigProvider theme={theme === "light" ? LightTheme : DarkTheme}>
				{children}
			</ConfigProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
