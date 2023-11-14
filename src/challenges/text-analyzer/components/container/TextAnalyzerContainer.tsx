import { ComponentProps, useState } from "react";
import TextArea from "../ui/TextArea";
import TextInfo from "../ui/TextInfo";
import { TextManager } from "../../utils/text-manager";

type State = ComponentProps<typeof TextInfo>["infoBoxs"];

const initialState: State = {
  words: {
    label: "Words",
    quantity: "0",
  },
  characters: {
    label: "Characters",
    quantity: "0",
  },
  sentences: {
    label: "Sentences",
    quantity: "0",
  },
  paragraphs: {
    label: "Paragraphs",
    quantity: "0",
  },
  pronouns: {
    label: "Pronouns",
    quantity: "0",
  },
};

const TextAnalyzerContainer = () => {
  const [infoState, setInfoState] = useState<State>(initialState);

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textManager = new TextManager(event.target.value);
    setInfoState((prevState) => ({
      ...prevState,
      words: {
        label: prevState.words.label,
        quantity: textManager.getWordsQuantity(),
      },
      characters: {
        label: prevState.characters.label,
        quantity: textManager.getCharactersQuantity(),
      },
      sentences: {
        label: prevState.sentences.label,
        quantity: textManager.getSentencesQuantity(),
      },
      paragraphs: {
        label: prevState.paragraphs.label,
        quantity: textManager.getParagraphsQuantity(),
      },
      pronouns: {
        label: prevState.pronouns.label,
        quantity: textManager.getPronounsQuantity(),
      },
    }));
  };

  return (
    <div className="w-full lg:max-w-6xl m-auto">
      <TextInfo infoBoxs={infoState} />
      <TextArea onChange={handleOnChange} />
    </div>
  );
};

export default TextAnalyzerContainer;
