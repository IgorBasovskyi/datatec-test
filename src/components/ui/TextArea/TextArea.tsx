import { FunctionComponent } from "react";
import { TextAreaProps } from "./types";
import Label from "../Label/Label";

const TextArea: FunctionComponent<TextAreaProps> = ({
  label,
  id,
  ...props
}) => {
  return (
    <fieldset>
      <Label id={id} label={label} />
      <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        rows={4}
        cols={50}
        id={id}
        {...props}
      />
    </fieldset>
  );
};

export default TextArea;
