import {useEffect, useState} from "react";
import Flashcard from "../flashcards/flashcard";
export default function FlashcardPreview(props){
  const [data, setData] = useState(0);
  const [flashcardsMap, setFlashcardsMap] = useState(null)

  useEffect(() => {

    const flashcardsMapStage = props.flashcards.map( (card) => {
        return <Flashcard card={card}/>
      }
    );

    setFlashcardsMap( flashcardsMapStage )
  },[props.flashcards])

  return(
    <>
      {flashcardsMap}
    </>
  )
}