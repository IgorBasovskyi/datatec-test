import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setSelectedOption } from "../redux/slices/optionSlice";
import Radio from "./ui/Radio/Radio";

const OPTIONS_DATA = [
  { value: "Option A", id: "radio1" },
  { value: "Option B", id: "radio2" },
  { value: "Option C", id: "radio3" },
];

const Options = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.option.selectedOption
  );
  const dispatch = useDispatch();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(event.target.value));
  };

  return (
    <>
      <h2 className="mb-3">Selected Option: {selectedOption}</h2>
      <div>
        {OPTIONS_DATA.map(({ value, ...props }) => (
          <Radio
            value={value}
            name="one-datatec-radio"
            checked={selectedOption === value}
            onChange={handleOptionChange}
            {...props}
          >
            {value}
          </Radio>
        ))}
      </div>
    </>
  );
};

export default Options;
