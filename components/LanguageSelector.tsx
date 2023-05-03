import React, {useContext} from 'react';
import Select from 'react-select';

// const languageOptions = [
//   { value: 'english', label: 'English' },
//   { value: 'korean', label: 'Korean' },
//   { value: 'spanish', label: 'Spanish' },
//   { value: 'chinese', label: 'Chinese' },
//
//   // ... add more language options here
// ];
import {LanguageSelectorProps} from "./FlashcardApp";
import LanguageSelectorContext from "../context/LanguageSelectorContext";
import {OptionType} from "../context/LanguageSelectorContext";

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const {
    nativeLanguage,
    targetLanguage,
    setNativeLanguage: setContextNativeLanguage,
    setTargetLanguage: setContextTargetLanguage,
    languageOptions,
  } = useContext(LanguageSelectorContext);


  const handleNativeLanguageChange = (selectedLanguage: OptionType) => {
    setContextNativeLanguage(selectedLanguage);
    console.log(selectedLanguage);
  }

  const handleTargetLanguageChange = (selectedLanguage: OptionType) => {
    setContextTargetLanguage(selectedLanguage);
    console.log(selectedLanguage);
  }

  return (
    <div className="flex justify-center items-center space-x-8">
      <div>
        <label htmlFor="nativeLanguage" className="block text-sm font-medium text-gray-700">
          Native Language
        </label>
        <Select
          id="nativeLanguage"
          value={nativeLanguage}
          onChange={(selectedOption: any) => handleNativeLanguageChange(selectedOption)}
          options={languageOptions}
          className="w-64 mt-1"
        />
      </div>
      <div>
        <label htmlFor="targetLanguage" className="block text-sm font-medium text-gray-700">
          Target Language
        </label>
        <Select
          id="targetLanguage"
          value={targetLanguage}
          onChange={(selectedOption: any) => handleTargetLanguageChange(selectedOption)}
          options={languageOptions}
          className="w-64 mt-1"
        />
      </div>
    </div>
  );
};

export default LanguageSelector;