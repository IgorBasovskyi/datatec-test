export interface TextAreaProps {
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  placeholder: string;
}
