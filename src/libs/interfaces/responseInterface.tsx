export interface LetterApiResponse<T> {
  statusText: string;
  data?: T;
}

export interface LetterData {
  letter: string;
}
