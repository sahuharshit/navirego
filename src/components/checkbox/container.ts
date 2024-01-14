import { useEffect, useState } from "react";
import { FetchUtils } from "../../libs/utils/fetch-utils";

const useCheckbox = (checkboxNumber: number) => {
  const [letters, setLetters] = useState<string[]>([]);
  const [checkvalue, setCheckValue] = useState<boolean>();

  const fetchData = async (checkboxNumber: number) => {
    const response = await FetchUtils.getRequest(`${checkboxNumber}`);
    const currentLetters = [...letters];
    if (currentLetters.length >= 30) {
      currentLetters.shift();
    }
    const result = response.data.letter;
    setLetters(() => [...currentLetters, result]);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (checkvalue) {
      intervalId = setInterval(() => fetchData(checkboxNumber), 2000);
    }
    return () => clearInterval(intervalId);
  }, [checkboxNumber, checkvalue, letters]);

  return { letters, checkvalue, setCheckValue, setLetters, fetchData };
};
export default useCheckbox;
