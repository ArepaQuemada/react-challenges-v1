export type InfoBoxKeys =
  | "words"
  | "characters"
  | "sentences"
  | "paragraphs"
  | "pronouns";

export type InfoBox = {
  [key in InfoBoxKeys]: {
    label: string;
    quantity: string;
  };
};

interface TextInfoProps {
  infoBoxs: InfoBox;
}

const TextInfo = ({ infoBoxs }: TextInfoProps) => {
  return (
    <section className="flex flex-wrap gap-4 justify-center text-center bg-white mb-4">
      {Object.entries(infoBoxs).map(([key, value]) => (
        <div key={key}>
          <p className="text-gray-400">{value.label}</p>
          <p className="font-bold">{value.quantity}</p>
        </div>
      ))}
    </section>
  );
};

export default TextInfo;
