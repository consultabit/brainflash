import {useState} from "react";
import Flashcard from "../components/flashcards/flashcard";
import generateFlashcardsChatCompletion from "../lib/openai/generateFlashcardsChatCompletion";

interface Flashcard {
  targetLanguage:object;
  nativeLanguage:object;
  image: string;
}

const useFlashcardAPI = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [aiMessage, setAIMessage] = useState('');
  const generateFlashcards = async (userInput: string) => {

    console.log("Generate Flashcards ACTIVATED");

    let requestBodyObject = {
      "userInput":userInput,
    }

    console.log(requestBodyObject);

    try{
      const response = await fetch('/api/generate_flashcards',{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBodyObject),
      });

      const aiResponseJSON = await response.json();
      const aiResponse = aiResponseJSON.assistantResponse.content;

      const startFlashcardsDelimiter = "<!==== START FLASHCARDS IN JSON ====!>";
      const endFlashcardsDelimiter = "<!==== END FLASHCARDS IN JSON ====!>";
      const startMessageDelimiter = "<!==== START HELPFUL ASSISTANT MESSAGE ====!>";
      const endMessageDelimiter = "<!==== END HELPFUL ASSISTANT MESSAGE ====!>";

      // Getting the flashcard indexes
      const flashcardsStartIndex = aiResponse.indexOf(startFlashcardsDelimiter) + startFlashcardsDelimiter.length;
      const flashcardsEndIndex = aiResponse.indexOf(endFlashcardsDelimiter)

      // Getting the message indexes
      const messageStartIndex = aiResponse.indexOf(startMessageDelimiter) + startMessageDelimiter.length;
      const messageEndIndex = aiResponse.indexOf(endMessageDelimiter);

      // Calculating the payload
      const flashcardsJSON = aiResponse.substring(flashcardsStartIndex, flashcardsEndIndex);
      const aiMessage = aiResponse.substring(messageStartIndex, messageEndIndex);

      console.log("flashcardsJSON"+flashcardsJSON);

      // setFlashcards(JSON.parse(aiResponse.flashcards.content));
      setFlashcards(JSON.parse(flashcardsJSON));
      setAIMessage(aiMessage);

      console.log(aiResponse)
      console.log(flashcards);
    }
    catch(error){
      console.log("Error generating flashcards: ", error);
    }
  }

  return {
    flashcards,
    aiMessage,
    generateFlashcards,
  };
}

export default useFlashcardAPI;