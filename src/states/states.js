import { atom } from "recoil";

export const categoryState = atom ({
  key: "category",
  default:null,
});

export const questionsState = atom ({
  key: "questions",
  default:[],
});

export const correctAnswersState = atom ({
  key: "correctAnswers",
  default:[],
});

export const usernameState = atom({
  key: "username",
  default: [],
});

export const usersState = atom({
  key: "users",
  default: [],
});