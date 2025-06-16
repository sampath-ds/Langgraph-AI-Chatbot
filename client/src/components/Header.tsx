const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex justify-center px-8 py-5 bg-gradient-to-r from-[#1f1f3a] to-[#3b3b5c] shadow-md">
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {/* Title only */}
            <div className="flex items-center relative z-10">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-6 bg-teal-400 rounded-full opacity-80 shadow-sm"></div>
                <span className="font-semibold text-white text-xl tracking-wide pl-4">
                    SAM CHATBOT
                </span>
            </div>
        </header>
    );
};

export default Header;
