interface TextAreaProps {
  onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ onChange }: TextAreaProps) => {
  return (
    <textarea
      className="w-full min-h-[65vh] resize-none p-4 rounded-md"
      autoFocus
      onChange={onChange}
      placeholder="Paste your text here..."
    />
  );
};

export default TextArea;
