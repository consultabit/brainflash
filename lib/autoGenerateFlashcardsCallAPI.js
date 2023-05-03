export default async function autoGenerateFlashcardsCallAPI(inputText){

  fetch('/api/generate_csv_flashcards_from_source', {
    method: "POST",
    body: JSON.stringify({inputText: inputText}),
  })
  .then(response => response.json())
  .then (data => {
    console.log(data);
    return data;
  })
}