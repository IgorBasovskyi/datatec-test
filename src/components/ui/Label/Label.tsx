import { FunctionComponent } from "react";
import { LabelProps } from "./types";

const Label: FunctionComponent<LabelProps> = ({ id, label }) => {
  return (
    <label
      className="block mb-2 text-sm font-medium text-gray-900"
      htmlFor={id}
    >
      {label}
    </label>
  );
};

export default Label;
