import { useState } from "react";
import { useContext } from "react";
import { OrderAiContext } from "../Context/ContextProvider"

const useApi = (apiKey: string) => {
  const [responseFromAPI, setResponseFromAPI] = useState<string | null>(null);
  const { setGptData } = useContext(OrderAiContext);

  const callApi = (prompt: string) => {
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const gptData = JSON.parse(data.choices[0]?.message?.content);
        setGptData(gptData);
        setResponseFromAPI(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { responseFromAPI, callApi };
};

export default useApi;
