import { useState, useEffect } from "react";
import { StyledSwitch } from "./Switch.styles";
import { Box, SwitchProps as MUISwitchProps } from "@mui/material";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";

const apiKey: string = import.meta.env.VITE_GPT_KEY as string;

type SwitchProps = MUISwitchProps;

export const Switch = (props: SwitchProps) => {
 const [isChecked, setIsChecked] = useState<boolean>(false);
 const { changeModal, handleModalOpen, setGptData } = useContext(OrderAiContext);
 const [responseFromAPI, setResponseFromAPI] = useState<string | null>(null);

 const handleLoading = () => {
  handleModalOpen();
  changeModal("Loading");
 };

 const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newCheckedState = event.target.checked;

  if (!isChecked && newCheckedState) {
   handleLoading();
  }

  setIsChecked(newCheckedState);
  const prompt = `
      Tworzę stronę, która ma być zbiorowiskiem innych stron oferujących gotowe rozwiązania AI. Potrzebuję pliku JSON, który zawierałby takie informacje.
      Stwórz 1 kategorię, do których można by przypisać strony.
      Do każdej kategorii przypisz 3 strony.
      Kategoria powinna zawierać:
      id - id kategorii, jako cyfra
      name - nazwę kategorii,
      color - kolor kategorii w stylu pastelowym, ciemny lub jasny
      imageUrl - link do zdjęcia tematycznego odwzorowującego nazwę kategorii
      products - tabelę produktów
      
      Element tabeli products powinien wyglądać tak:
      id - id produktu, jako cyfra
      name - nazwa produktu,
      website - link do strony produktu,
      license - typ licensji, "Darmowa" lub "Płatna",
      youtubeUrl - link do filmu na platformie YouTube, który pokazuje działanie strony
      description - opis strony
      Stwórz JSON w tym formacie:
      [
        "id" : 1,
        "name": "Produktywność",
        "color": "#123423",
        "imageUrl" : "https://themamamanual.files.wordpress.com/2011/08/cow.jpg",
        "products" : [
          {
            "id" : 1,
            "name": "TensorFlow",
            "website": "https://www.tensorflow.org/",
            "license": "darmowa",
            "youtubeUrl": "https://www.youtube.com/watch?v=tPYj3fFJGjk",
            "description": "Platforma do uczenia maszynowego stworzona przez Google."
          },
          {
            "id" : 2,
            "name": "OpenAI",
            "website": "https://www.openai.com/",
            "license": "darmowa",
            "youtubeUrl": "https://www.youtube.com/watch?v=Rykmwn0SMWU",
            "description": "Organizacja zajmująca się sztuczną inteligencją."
            },
        ]
      ]
    `;

  if (newCheckedState) {
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
     console.log("Chat response:", data.choices[0]?.message?.content);
     const jsonData = JSON.parse(data.choices[0]?.message?.content);
     setGptData(jsonData);
     setResponseFromAPI(data);
    })
    .catch((error) => {
     console.error(error);
    });
  }
 };
 useEffect(() => {}, [responseFromAPI]);

 return (
  <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
   <StyledSwitch {...props} checked={isChecked} onChange={handleSwitchChange} />
  </Box>
 );
};
