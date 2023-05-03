import React, {useContext, useState} from "react";
import ChatHistoryContext from "../../context/ChatHistoryContext";

const AIChat = (props) => {
  const [userInput, setUserInput] = useState("");
  const {
    chatHistory,
    setChatHistory: setContextChatHistory,
  } = useContext(ChatHistoryContext)
  const [flashcards, setFlashcards] = useState(props.flashcards)

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleChatHistoryInputChange = (event) => {
    setContextChatHistory(event.target.value);
  }

  const handleSendMessage = async () => {
    // Add the user message to the chat history

    let message_obj = { type: 'user', content: userInput }

    setContextChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      `${message_obj.content}\n\n`,
    ]);

    // Call your AI API here to get the AI's response
    const aiResponse = await onSendMessage(userInput, flashcards);

    // Add the AI's response to the chat history
    setContextChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { type: 'assistant', content: aiResponse },
    ]);
  }

  console.log("chat history: "+chatHistory)

  return(
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Chat History</h1>
      <div className="chat-history mb-4">
        {/* Render the chat history here */}
      <div className="input-area">
        <textarea
          type="text"
          className="border border-gray-300 rounded p-2 w-full h-56 overflow-y-auto"
          value={chatHistory.join("")}
          readOnly={true}
          // onChange={}
        />
      </div>
      </div>
      {/* Render user messages here */}
      <div className="input-area">
        <input
          type="text"
          className="border border-gray-300 rounded p-2 w-full h-16"
          value={userInput}
          onChange={handleUserInputChange}
          placeholder={"Send a message"}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 mt-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
    </>
  )
}

export default AIChat;