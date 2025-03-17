'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
	theme: string;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<string>('light');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

const ThemeToggler = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app-container ${theme}`}>
			<h1>Welcome to the {theme} mode!</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

const Context = () => {
	return (
		<ThemeProvider>
			<ThemeToggler />
		</ThemeProvider>
	);
};

export default Context;
