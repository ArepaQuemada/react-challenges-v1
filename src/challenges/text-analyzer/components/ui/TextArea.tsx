interface TextAreaProps {
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ value, onChange }: TextAreaProps) => {
  return (
    <textarea
      className="w-full min-h-[65vh] resize-none p-4 rounded-md"
      value={value}
      autoFocus
      onChange={onChange}
      placeholder="Paste your text here..."
    />
  );
};

export default TextArea;
