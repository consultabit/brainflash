import {NextApiRequest,NextApiResponse} from "next";
import generateFlashcardsChatCompletion from "../../lib/openai/generateFlashcardsChatCompletion";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  // Check if the request method if post
  if (req.method !== 'POST') {
    res.status(405).json({ message: "Method Not Allowed"});
    return;
  }

  console.log("generate_csv_flashcards_from_source is activated");

  // Get the input text from the request body
  const inputText = (req.body.userInput);

  // Check if inputText is provided
  if (!inputText) {
    console.log(req.body)
    res.status(400).json({ message: 'Bad Request: Input text is required' });
    return;
  }

  console.log("inputText: "+inputText);


  try {
    // Call your function to generate flashcards using the input text
    const generatedFlashcards = await generateFlashcardsChatCompletion(inputText);

    // Send the gneerated flashcards as the response
    res.status(200).json(generatedFlashcards);
  } catch(error) {
    // Handle any errors that occur during the flashcard generation process
    // console.error(error);
    res.status(500).json({ message: 'Internal Server Error'});
  }
}