import {createContext} from "react";
import {create} from "domain";

export type ChatHistoryContextType = {
  chatHistory: Object[];
  setChatHistory: (chatHistory: any) => void;
}

export const defaultValue: ChatHistoryContextType = {
  chatHistory: [],
  setChatHistory: () => {},
}

const ChatHistoryContext = createContext<ChatHistoryContextType>(defaultValue);

export default ChatHistoryContext;