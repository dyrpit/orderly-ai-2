import { useState, useEffect } from "react";
import { StyledSwitch } from "./Switch.styles";
import { Box, SwitchProps as MUISwitchProps } from "@mui/material";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";

type SwitchProps = MUISwitchProps;

export const Switch = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { changeModal, handleModalOpen } = useContext(OrderAiContext);
  const { setJsonData } = useContext(OrderAiContext); 
  const [responseFromAPI, setResponseFromAPI] = useState<string | null>(null);


  const handleLoading = () => {
    handleModalOpen();
    changeModal("Loading");
    
   };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;

   if (!isChecked && newCheckedState) 
   {
      handleLoading();
   }

    setIsChecked(newCheckedState);
    const prompt = `
      Tworzę stronę, która ma być zbiorowiskiem innych stron oferujących gotowe rozwiązania AI. Potrzebuję pliku JSON, który zawierałby takie informacje.
      Stwórz 6 kategorii, do których można by przypisać strony.
      Do każdej kategorii przypisz 3 strony.
      Kolory kategorii powinny być pastelowe, każda kategoria powinna mieć różny.
      Zdjęcie kategorii powinno mniej więcej być tematyczne względem nazwy kategorii.
      Link do YouTube powinien prezentować działanie albo tutorial danej strony.
      Stwórz JSON w tym formacie:
      [
        "id" : "1",
        "name": "Produktywność",
        "color": "#123423",
        "imageUrl" : "https://themamamanual.files.wordpress.com/2011/08/cow.jpg",
        "products" : [
          {
            "name": "TensorFlow",
            "website": "https://www.tensorflow.org/",
            "license": "darmowa",
            "youtubeUrl": "https://www.youtube.com/watch?v=tPYj3fFJGjk",
            "description": "Platforma do uczenia maszynowego stworzona przez Google."
          }
        ]
      ]
    `;

    if (newCheckedState) {
      const apiKey = "key";
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
          setJsonData(data);
          setResponseFromAPI(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  useEffect(() => {
  }, [responseFromAPI]);

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <StyledSwitch
        {...props}
        checked={isChecked}
        onChange={handleSwitchChange}
      />
    </Box>
  );
};