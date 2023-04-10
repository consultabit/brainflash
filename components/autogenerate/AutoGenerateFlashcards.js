import React, { useState } from 'react';
import autoGenerateFlashcardsFetch from "/home/grant/pycharm/brainflash/lib/autoGenerateFlashcardsFetch";
const AutoGenerateFlashcards = () => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateClick = async () => {
    setIsLoading(true);

    // Replace this with your own API call to generate flashcards
    await autoGenerateFlashcardsFetch(inputText);

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

export default AutoGenerateFlashcards;