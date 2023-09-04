import { atom } from "recoil";

export const correctAnswersState = atom({
    key: "correctAnswers",
    default: [],
});

export const questionsState = atom({
    key: "questions",
    default: [],
});

export const selectedCategroty = atom({
    key: "selectedCategory",
    default: null,
});

export const Button = ({ onClick, title }) => (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
);