import React, { useContext, useEffect, useState } from 'react';
import autoGenerateFlashcardsCallAPI from '/home/grant/pycharm/brainflash/lib/autoGenerateFlashcardsCallAPI';
import LanguageSelectorContext from '../../context/LanguageSelectorContext';
import getTemplate from '../../preprompts/preprompt.js';
import csvFromNotes from '../../preprompts/csvFromNotes';
import languageSelectorContext from '../../context/LanguageSelectorContext';
import LanguageSelector from '../LanguageSelector';

const AutoGenerateFlashcardsFromTextSource = (props) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [csvData, setCsvData] = useState('');

  let extractContent = useContext(languageSelectorContext);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateClick = async () => {
    setIsLoading(true);

    let template = csvFromNotes(inputText);


    console.log('input text:' + template);
    const generatedCsv:any = await autoGenerateFlashcardsCallAPI(template);
    setCsvData(generatedCsv);
    props.onGenerate(template);

    setIsLoading(false);
  };

  const downloadCsv = () => {
    const element = document.createElement('a');
    const file = new Blob([csvData], { type: 'text/csv' });
    element.href = URL.createObjectURL(file);
    element.download = 'flashcards.csv';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-semibold mb-4'>Auto-Generate Flashcards</h1>
      <div className='mb-4'>
        <label htmlFor='input-text' className='block text-lg font-medium mb-2'>
          Enter your source text:
        </label>
        <textarea
          id='input-text'
          className='w-full h-64 p-2 border border-gray-300 rounded'
          wrap="hard"
          onChange={handleInputChange}
        />
      </div>
      <button
        className='bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 mr-4'
        onClick={handleGenerateClick}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate CSV'}
      </button>
      <button
        className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500'
        onClick={downloadCsv}
        disabled={!csvData}
      >
        Download CSV
      </button>
    </div>
  );
};

export default AutoGenerateFlashcardsFromTextSource;