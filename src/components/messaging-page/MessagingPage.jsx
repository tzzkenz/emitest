import { useEffect, useState } from "react";
import ConversationList from "./ConversationList";
import MessageArea from "./MessageArea";
import UserProfile from "./UserProfile";
import Navbar from "../Navbar";

function MessagingPage() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleBackToList = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row h-[calc(100vh-200px)] bg-white rounded-lg shadow-lg overflow-hidden">
          {(!selectedConversation || !isMobileView) && (
            <ConversationList
              setSelectedConversation={handleConversationSelect}
              className="w-full md:w-1/4 border-r"
            />
          )}
          {selectedConversation && (
            <MessageArea
              conversation={selectedConversation}
              setShowProfile={setShowProfile}
              onBackClick={handleBackToList}
              className="w-full md:w-1/2"
            />
          )}
          {!isMobileView && selectedConversation && (
            <UserProfile
              user={selectedConversation.user}
              show={showProfile}
              setShow={setShowProfile}
              className="w-1/4 border-l"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MessagingPage;
