import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function ConversationList({ setSelectedConversation, className }) {
  const [conversations, setConversations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch conversations from API
    // This is a mock implementation
    setConversations([
      {
        id: 1,
        user: { name: "John Doe", avatar: "https://via.placeholder.com/40" },
        lastMessage: "Hey, how are you?",
        timestamp: "10:30 AM",
      },
      {
        id: 2,
        user: { name: "Jane Smith", avatar: "https://via.placeholder.com/40" },
        lastMessage: "Can we schedule a meeting?",
        timestamp: "Yesterday",
      },
      // Add more conversations...
    ]);
  }, []);

  const filteredConversations = conversations.filter((conv) =>
    conv.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="p-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-400"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conv) => (
          <div
            key={conv.id}
            className="flex items-center p-4 border-b hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedConversation(conv)}
          >
            <img
              src={conv.user.avatar}
              alt={conv.user.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{conv.user.name}</h3>
              <p className="text-sm text-gray-600 truncate">
                {conv.lastMessage}
              </p>
            </div>
            <span className="text-xs text-gray-500">{conv.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

//add prop types
ConversationList.propTypes = {
  setSelectedConversation: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ConversationList;
