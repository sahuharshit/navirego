import { useState } from "react";
import { FetchUtils } from "../../libs/utils/fetch-utils";
import {
  LetterApiResponse,
  LetterData,
} from "../../libs/interfaces/responseInterface";

const useCheckbox = () => {
  const [checkvalue, setCheckValue] = useState<boolean>();
  const [letters, setLetters] = useState<string[]>([]);

  const fetchData = async (checkboxNumber: number) => {
    const response: LetterApiResponse<LetterData> = await FetchUtils.getRequest(
      `${checkboxNumber}`
    );
    const currentLetters = [...letters];
    if (currentLetters.length >= 30) {
      currentLetters.shift();
    }
    if (response.data) {
      const result = response.data.letter;
      setLetters([...currentLetters, result]);
    }
  };

  return {
    checkvalue,
    setCheckValue,
    fetchData,
    letters,
  };
};
export default useCheckbox;
