import { FunctionComponent } from "react";
import Label from "../Label/Label";
import { TextInputProps } from "./types";

const TextInput: FunctionComponent<TextInputProps> = ({
  label,
  id,
  ...props
}) => {
  return (
    <fieldset>
      <Label id={id} label={label} />
      <input
        type="text"
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...props}
      />
    </fieldset>
  );
};

export default TextInput;
