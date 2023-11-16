import { useState, useMemo, FC } from 'react';

import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};
