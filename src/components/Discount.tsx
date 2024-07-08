import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setDiscountCode } from "../redux/slices/discountCodeSlice";
import TextInput from "./ui/TextInput/TextInput";
import Button from "./ui/Button/Button";

const Discount = () => {
  const dispatch = useDispatch();
  const { code, isValid } = useSelector(
    (state: RootState) => state.discountCode
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setDiscountCode(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValid) {
      alert("Discount code is valid!");
    } else {
      alert("Invalid discount code!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="discountCode"
        value={code}
        label="Enter Discount Code:"
        onChange={handleChange}
      />
      {!isValid && (
        <p className="text-red-700">Invalid discount code format.</p>
      )}
      <Button type="submit" disabled={!isValid || !code} className="mt-3">
        Validate
      </Button>
    </form>
  );
};

export default Discount;
