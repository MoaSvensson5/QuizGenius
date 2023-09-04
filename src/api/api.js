export async function getQuestions(category) {
    let result = await fetch(`https://opentdb.com/api.php?amount=12&category=${category.category}&type=multiple`);
    let json = await result.json();
    return json;
}