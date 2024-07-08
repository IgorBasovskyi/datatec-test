import { FunctionComponent, PropsWithChildren } from "react";
import { RadioProps } from "./types";

const Option: FunctionComponent<PropsWithChildren<RadioProps>> = ({
  children,
  id,
  ...props
}) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="radio"
        id={id}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        {...props}
      />
      <label
        htmlFor={id}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
      >
        {children}
      </label>
    </div>
  );
};

export default Option;
