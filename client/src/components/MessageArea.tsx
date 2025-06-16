import React from 'react';

const TypingDots = () => (
    <div className="flex items-center space-x-1">
        {Array.from({ length: 3 }).map((_, i) => (
            <div
                key={i}
                className="w-2 h-2 bg-gray-400/80 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 200}ms` }}
            ></div>
        ))}
    </div>
);

const SearchStages = ({ searchInfo }) => {
    if (!searchInfo || !searchInfo.stages?.length) return null;

    return (
        <div className="mb-3 mt-1 pl-4">
            <div className="flex flex-col text-sm text-gray-700 space-y-4">
                {searchInfo.stages.includes('searching') && (
                    <div className="relative">
                        <StageDot />
                        <StageLabel label="Searching the web" />
                        <TagList tags={[searchInfo.query]} icon="🔍" />
                    </div>
                )}
                {searchInfo.stages.includes('reading') && (
                    <div className="relative">
                        <StageDot />
                        <StageLabel label="Reading" />
                        <TagList tags={searchInfo.urls} />
                    </div>
                )}
                {searchInfo.stages.includes('writing') && (
                    <div className="relative">
                        <StageDot />
                        <StageLabel label="Writing answer" />
                    </div>
                )}
                {searchInfo.stages.includes('error') && (
                    <div className="relative">
                        <StageDot color="red" />
                        <StageLabel label="Search error" />
                        <div className="pl-4 text-xs text-red-500 mt-1">
                            {searchInfo.error || "An error occurred during search."}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const StageDot = ({ color = "teal" }: { color?: string }) => (
    <div
        className={`absolute -left-3 top-1 w-2.5 h-2.5 rounded-full shadow-sm ${color === "teal" ? "bg-teal-400" : "bg-red-400"}`}
    />
);

const StageLabel = ({ label }) => (
    <span className="font-medium pl-2">{label}</span>
);

const TagList = ({ tags, icon = "" }) => {
    if (!Array.isArray(tags) || tags.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 pl-2 mt-2">
            {tags.map((tag, i) => (
                <div
                    key={i}
                    className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 truncate max-w-[220px] hover:bg-gray-50 transition"
                >
                    {icon && <span className="mr-1">{icon}</span>}
                    {typeof tag === 'string' ? tag : JSON.stringify(tag).substring(0, 30)}
                </div>
            ))}
        </div>
    );
};

const MessageArea = ({ messages }) => {
    return (
        <div className="flex-grow overflow-y-auto bg-[#FAFAF9] border-b border-gray-100" style={{ minHeight: 0 }}>
            <div className="max-w-4xl mx-auto p-6">
                {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-6`}>
                        <div className="flex flex-col max-w-md">
                            {!message.isUser && message.searchInfo && (
                                <SearchStages searchInfo={message.searchInfo} />
                            )}
                            <div
                                className={`rounded-lg py-3 px-5 text-sm whitespace-pre-wrap break-words leading-relaxed ${
                                    message.isUser
                                        ? 'bg-gradient-to-br from-[#5E507F] to-[#4A3F71] text-white rounded-br-none shadow-md'
                                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                                }`}
                            >
                                {message.isLoading ? (
                                    <TypingDots />
                                ) : (
                                    message.content || <span className="text-gray-400 text-xs italic">Waiting for response...</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageArea;
