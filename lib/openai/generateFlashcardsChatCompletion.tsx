import openai from "./openai";
import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from 'openai';

export default async function generateFlashcardsChatCompletion(userInput){

    let model = "gpt-3.5-turbo";

    let messages: ChatCompletionRequestMessage[] = [
        {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: userInput,
        },
    ];

    let  response = await openai.createChatCompletion(
        {
            "model": model,
            "messages": messages,
            "temperature": 0,
        }
    )

    let assistantResponse = response.data.choices[0].message
    console.log(assistantResponse);

    return response.data;
}