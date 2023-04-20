export default async function autoGenerateFlashcardsCallAPI(inputText){

  fetch('/api/generate_flashcards', {
    method: "POST",
    body: JSON.stringify({inputText: inputText}),
  })
  .then(response => response.json())
  .then (data => {
    console.log(data);
  })
}