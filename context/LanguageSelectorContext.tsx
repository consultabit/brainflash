import {createContext} from "react";
import {Option} from "commander";

export interface OptionType {
  value:string;
  label:string;
}

export const languageOptions: OptionType[] = [
  { value: 'english', label: 'English' },
  { value: 'korean', label: 'Korean' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'chinese', label: 'Chinese' },
  // ... add more language options here
];

export type LanguageSelectorContextType = {
  nativeLanguage: OptionType;
  targetLanguage: OptionType;
  setNativeLanguage: (nativeLanguage: OptionType) => void;
  setTargetLanguage: (targetLanguage: OptionType) => void;
  languageOptions: OptionType[],
}

export const defaultValue: LanguageSelectorContextType = {
  nativeLanguage: {value: "english", label: "English"},
  targetLanguage: {value: "korean", label: "Korean"},
  setNativeLanguage: () => {},
  setTargetLanguage: () => {},
  languageOptions: languageOptions,
}

const LanguageSelectorContext = createContext<LanguageSelectorContextType>(defaultValue);

export default LanguageSelectorContext;