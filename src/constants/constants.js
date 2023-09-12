export const Button = ({ onClick, title }) => (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
);

 //Slumpmässigt blandar en array
export const shuffleArray = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
};