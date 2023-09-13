export const Button = ({ onClick, title, className }) => (
    <div>
      <button className={className} onClick={onClick}>{title}</button>
    </div>
);

export const shuffleArray = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
};

export function getCategoryClass(category) {

    switch (category){
        case '9':
            return 'category-general-knowledge';
        case '26':
            return 'category-celebrities';
        case '11':
            return 'category-movies';
        case '19':
            return 'category-math';
        default:
            return'';
    }
}