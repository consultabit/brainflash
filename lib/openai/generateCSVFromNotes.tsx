import openai from "./openai";
import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from 'openai';
import Flashcard from "../../components/flashcards/flashcard";

export default async function generateFlashcardsChatCompletion(userInput){

    let model = "gpt-3.5-turbo";

    let messages: ChatCompletionRequestMessage[] = [
        {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: userInput,
        },
    ];

    console.log(messages);

    let response = await openai.createChatCompletion(
        {
            "model": model,
            "messages": messages,
            "temperature": .2,
        }
    )

    let assistantResponse = response.data.choices[0].message
    console.log(assistantResponse);

    let responseObject = {
      "flashcards":assistantResponse,
    }

    return responseObject;
}