import React, {useContext, useEffect, useState} from 'react';
// This one works
import getTemplate from '../../preprompts/preprompt.js';
// This prompt is in testing
import aiMessageResponseAndFlashcardsGeneration from "../../preprompts/aiMessageResponseAndFlashcardsGeneration";
import languageSelectorContext from "../../context/LanguageSelectorContext";


const GenerateFlashcardsForLearningLanguageFromInput = (props) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  let extractContent = useContext(languageSelectorContext);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateClick = async () => {
    setIsLoading(true);

    // Get the template
    let userObj = {
      "targetLanguage": extractContent.targetLanguage.label,
      "nativeLanguage": extractContent.nativeLanguage.label,
    }

    let newObj = (userObj);
    let template = aiMessageResponseAndFlashcardsGeneration(newObj, inputText);

    // Replace this with your own API call to generate flashcards
    console.log("input text:"+template);
    props.onGenerate(template);

    setIsLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Auto-Generate Flashcards</h1>
      <div className="mb-4">
        <label
          htmlFor="input-text"
          className="block text-lg font-medium mb-2"
        >
          Enter your notes or documentation:
        </label>
        <textarea
          id="input-text"
          className="w-full h-64 p-2 border border-gray-300 rounded"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
        onClick={handleGenerateClick}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Flashcards'}
      </button>
    </div>
  );
};

export default GenerateFlashcardsForLearningLanguageFromInput;