import {useState} from "react";

interface Flashcard {
  targetLanguage:object;
  nativeLanguage:object;
  image: string;
}

export default function Flashcard(props){
  const testData= {

    targetLanguage:{
      word:"집",
      sentence:"집에 가다",
      definition: "흠흠흠",
      wordType:"흠흠",
    },

    nativeLanguage: {
      word:"house",
      sentence:"To go home",
      definition: "blahblahblah",
      wordType:"noun",
    },

    image:"/path/to/image",
  }

  return(
    <>
    <div className="bg-white shadow-md rounded-md p-4 mx-4 my-4 w-full md:w-auto md:flex md:space-x-4 flex justify-center bg-blue-50">
      <div className="flex-1 md:max-w-md bg-gradient-to-br from-indigo-500 to-blue-500 rounded-md p-4 text-white">
        <h2 className="text-lg font-bold mb-2">{props.card.targetLanguage.word}</h2>
        <p className="text-sm mb-2">{props.card.targetLanguage.sentence}</p>
        <p className="text-sm italic">{props.card.targetLanguage.wordType}</p>
        <p className="text-sm mt-4">{props.card.targetLanguage.definition}</p>
        <br/>
        <img className="mt-4 rounded-md" src={props.card.image} alt={props.card.targetLanguage.word} />
      </div>
      <div className="flex-1 md:max-w-md bg-gradient-to-br from-green-500 to-blue-500 rounded-md p-4 text-white mt-4 md:mt-0">
        <h2 className="text-lg font-bold mb-2">{props.card.nativeLanguage.word}</h2>
        <p className="text-sm mb-2">{props.card.nativeLanguage.sentence}</p>
        <p className="text-sm italic">{props.card.nativeLanguage.wordType}</p>
        <p className="text-sm mt-4">{props.card.nativeLanguage.definition}</p>
        <br/>
        <img className="mt-4 rounded-md" src={props.card.image} alt={props.card.nativeLanguage.word} />

      </div>
    </div>
    </>
  )
}