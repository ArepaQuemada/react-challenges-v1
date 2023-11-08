type InfoBox = {
  label: string;
  quantity: string;
};

interface TextInfoProps {
  infoBoxs: InfoBox[];
}

const TextInfo = ({ infoBoxs }: TextInfoProps) => {
  return (
    <section className="flex flex-wrap gap-4 justify-center text-center bg-white mb-4">
      {infoBoxs.map((infoBox) => (
        <div key={infoBox.label}>
          <p className="text-gray-400">{infoBox.label}</p>
          <p className="font-bold">{infoBox.quantity}</p>
        </div>
      ))}
    </section>
  );
};

export default TextInfo;
