import GenerateFlashcardsForLearningLanguageFromInput from "./autogenerate/AutoGenerateFlashcards";
import FlashcardPreview from "./autogenerate/FlashcardPreview";
import React, {useContext, useEffect, useState} from "react";
import useFlashcardAPI from "../hooks/useFlashCardAPI";
import LanguageSelector from "./LanguageSelector";
import LanguageSelectorContext, {OptionType} from "../context/LanguageSelectorContext";
import ChatHistoryContext from "../context/ChatHistoryContext";
import AutoGenerateFlashcardsFromTextSource from "./autogenerate/AutoGenerateFlashcardsFromTextSource";
import AIChat from './aichat/AIChat';
import {languageOptions} from "../context/LanguageSelectorContext";

export interface LanguageSelectorProps {

}

export interface ChatHistoryProps {
  chatHistory: Object[];
}

const appOptions = [
  {value: "Language"},
  {value: "NotesToCSV"},
]

export default function FlashcardApp(props:any){
  const { flashcards, aiMessage, generateFlashcards } = useFlashcardAPI();
  const [nativeLanguage, setNativeLanguage] = useState<OptionType>({value:"english",label:"English"})
  const [targetLanguage, setTargetLanguage] = useState<OptionType>({value:"korean",label:"Korean"})
  const [chatHistory, setChatHistory] = useState([]);
  const [activeApp, setActiveApp] = useState("Language");
  const [previewFlashcards] = useState([]);


  // Pushes the AI Message into the state
  useEffect(() => {
    if (aiMessage){
      console.log(aiMessage);
      setChatHistory((prevChatHistory) => [...prevChatHistory, aiMessage]);
    }
  }, [aiMessage])

  console.log(chatHistory);

  return(
    <>
        <section className="text-center mb-8">
          <h3 className="text-4xl font-semibold mb-4"><i>Powered by ChatGPT</i></h3>
          <p className="text-lg">
            The ultimate solution for language flashcard generation
          </p>
        </section>

      <LanguageSelectorContext.Provider value={{nativeLanguage, targetLanguage, setNativeLanguage,setTargetLanguage, languageOptions}}>
      <ChatHistoryContext.Provider value={{chatHistory, setChatHistory}}>

          { activeApp == "Language" && (
              <>
                <LanguageSelector/>
                <GenerateFlashcardsForLearningLanguageFromInput onGenerate={generateFlashcards}/>
              </>
            )
          }

          {activeApp == "NotesToCSV" &&
            <AutoGenerateFlashcardsFromTextSource onGenerate={generateFlashcards}/>
          }

          <AIChat flashcards={flashcards}/>

        </ChatHistoryContext.Provider>

        <FlashcardPreview flashcards={flashcards} />
      </LanguageSelectorContext.Provider>
    </>
  )
}