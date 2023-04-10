export default async function handler(req, res) {
  // Check if the request method if post
  if (req.method !== 'POST') {
    res.status(405).json({ message: "Method Not Allowed"});
    return;
  }

  // Get the input text from the request body
  const  inputText = req.body;

  console.log(inputText);

  // Check if inputText is provided
  if (!inputText) {
    console.log(req.body)
    res.status(400).json({ message: 'Bad Request: Input text is required' });
    return;
  }

  try {
    // Call your function to generate flashcards using the input text
    const generatedFlashcards = await yourGenerateFlashcardsFunction(inputText);

    // Send the gneerated flashcards as the response
    res.status(200).json(generatedFlashcards);
  } catch(error) {
    // Handle any errors that occur during the flashcard generation process
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error'});
  }
}


async function yourGenerateFlashcardsFunction(){
  console.log("activated");
  return "GENERATED FLASHCARDS";
}