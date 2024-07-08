import { useState } from "react";
import Button from "./ui/Button/Button";

const DiscountGenerator = () => {
  const [discount, setDiscount] = useState("");

  const generateDiscountCode = () => {
    const generateCode = (): string => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let code = "";
      while (true) {
        code = "";
        for (let i = 0; i < 18; i++) {
          code += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        const digits = Math.floor(10 + Math.random() * 90).toString();
        code = code.slice(0, 18) + digits;
        if (/^(?=(.*[A-Z]){6,})(?=.*\d{2,}).{8,20}$/.test(code)) {
          break;
        }
      }
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
