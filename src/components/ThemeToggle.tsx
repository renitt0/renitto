import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`fixed top-6 right-6 lg:right-12 z-50 p-3 rounded-full border border-french-beige/30 transition-all duration-500 hover:scale-110 active:scale-95 ${theme === 'dark' ? 'bg-charcoal text-ivory' : 'bg-ivory text-charcoal'}`}
            aria-label="Toggle Theme"
        >
            <div className={`transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`}>
                {theme === 'dark' ? (
                    // Moon icon
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                ) : (
                    // Sun icon
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
                        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
                        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
                    </svg>
                )}
            </div>
        </button>
    );
};
