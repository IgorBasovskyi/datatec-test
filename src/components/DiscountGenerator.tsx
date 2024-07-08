import { useState } from "react";
import Button from "./ui/Button/Button";

const DiscountGenerator = () => {
  const [discount, setDiscount] = useState("");

  const generateDiscountCode = () => {
    const generateCode = (): string => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const charRandMin = 4;
      const charRandMax = 16;
      const numRandMin = 2;
      const numRandMax = 4;
      let code = "";

      function* generator(min: number, max: number, chars: string) {
        for (
          let i = 0;
          i < Math.floor(Math.random() * (max - min + 1) + min);
          i++
        ) {
          yield chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }

      code += Array.from(generator(charRandMin, charRandMax, characters)).join(
        ""
      );
      code += Array.from(generator(numRandMin, numRandMax, numbers)).join("");

      return code;
    };

    setDiscount(generateCode());
  };

  return (
    <>
      <Button type="button" className="mb-3" onClick={generateDiscountCode}>
        Generate
      </Button>
      {discount && <h2>{discount}</h2>}
    </>
  );
};

export default DiscountGenerator;
