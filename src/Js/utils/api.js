const Meals_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
const API_KEY = 'a2VutWNLP515ay0nBLQw';
const INVOLVEMENT_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/likes/`

export const fetchMeals = async () => {
    const requestOptions = {
        method: 'GET',
    };
    const result = await fetch(Meals_URL, requestOptions);
    const {meals} = await result.json();
    return meals;
};

export const fetchLikes = async () => {
    try {
        const requestOptions = {
            method: 'GET',
        };
        const response = await fetch(INVOLVEMENT_URL, requestOptions);
        const likes = await response.json();
        return likes;
    } catch (error) {
        return [];
    };
};

export const postLike = async (id) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const like = JSON.stringify({ item_id: id });
    const requestOptions = { 
        method: 'POST',
        headers, 
        body: like,
    };
    await fetch(INVOLVEMENT_URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};



