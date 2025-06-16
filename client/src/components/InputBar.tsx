import { useState } from "react";

const InputBar = ({ currentMessage, setCurrentMessage, onSubmit }) => {
    const handleChange = (e) => {
        setCurrentMessage(e.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center bg-[#F8F8F4] rounded-full px-4 py-2 shadow-sm border border-gray-200 transition-all">
                {/* Optional icon on the left */}
                <button
                    type="button"
                    className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                {/* Text input */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={currentMessage}
                    onChange={handleChange}
                    className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400 text-sm"
                />

                {/* Optional reaction icon */}
                <button
                    type="button"
                    className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                </button>

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 rounded-full p-2.5 ml-2 shadow-sm transition group"
                >
                    <svg className="w-5 h-5 text-white transform rotate-45 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default InputBar;
