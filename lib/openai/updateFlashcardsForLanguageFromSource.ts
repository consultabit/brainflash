import openai from "./openai";
import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from 'openai';
import Flashcard from "../../components/flashcards/flashcard";

export default async function updateFlashcardsForLanguageFromSource(userInput, flashcards){

    let model = "gpt-3.5-turbo";

    let messageForOpenAI = `
      <!====== START FLASHCARDS ======!>
      ${flashcards}
      <!====== END FLASHCARDS ======!>
      
      <!====== START USER MESSAGE ======!>


      <!====== END USER MESSAGE ======!>
    `
    let messages: ChatCompletionRequestMessage[] = [
        {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: messageForOpenAI,
        },
    ];

    console.log("Begin Waiting...")

    let response = await openai.createChatCompletion(
        {
            "model": model,
            "messages": messages,
            "temperature": 1,
        }
    )

    let assistantResponse = response.data.choices[0].message
    console.log(assistantResponse);

    let responseObject = {
      "flashcards":assistantResponse,
    }

    return responseObject;
}