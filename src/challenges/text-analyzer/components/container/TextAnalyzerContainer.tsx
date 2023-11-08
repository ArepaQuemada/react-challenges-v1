import TextArea from "../ui/TextArea";
import TextInfo from "../ui/TextInfo";

const TextAnalyzerContainer = () => {
  return (
    <div className="w-full lg:max-w-6xl m-auto">
      <TextInfo
        infoBoxs={[
          {
            label: "Words",
            quantity: "0",
          },
          {
            label: "Characters",
            quantity: "0",
          },
          {
            label: "Sentences",
            quantity: "0",
          },
          {
            label: "Paragraphs",
            quantity: "0",
          },
          {
            label: "Pronouns",
            quantity: "0",
          },
        ]}
      />
      <TextArea />
    </div>
  );
};

export default TextAnalyzerContainer;
