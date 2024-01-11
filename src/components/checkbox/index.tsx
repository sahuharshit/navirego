import { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox, Space } from "antd";

interface CheckboxProps {
  checkboxNumber: number;
}

const CustomCheckbox = ({ checkboxNumber }: CheckboxProps) => {
  const [letters, setLetters] = useState<string[]>([]);
  const [checkvalue, setCheckValue] = useState<boolean>(false);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await axios.get(
        `https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters/${checkboxNumber}`
      );
      const currentLetters = [...letters];
      if (currentLetters.length >= 30) {
        currentLetters.shift();
      }
      const result = res.data.letter;
      setLetters(() => [...currentLetters, result]);
    };
    let intervalId: NodeJS.Timeout;

    if (checkvalue) {
      intervalId = setInterval(handleFetch, 2000);
    }

    return () => clearInterval(intervalId);
  }, [checkvalue, checkboxNumber, letters]);

  return (
    <div>
      <Space direction="horizontal" size="middle">
        <Checkbox
          value={checkboxNumber}
          onChange={(e) => {
            setCheckValue(e.target.checked);
          }}
        >
          Box {checkboxNumber}
        </Checkbox>
      </Space>
      <div>
        {letters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
};
export default CustomCheckbox;
