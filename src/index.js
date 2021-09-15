import displayMeals from './Js/utils/display';
import { fetchLikes, fetchMeals, postLike } from './Js/utils/api';
import './style.css';

document.querySelector('.meals-list').addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.id === 'like-btn') {
        const id = event.target.getAttribute('data-id');
        await postLike(id);
        const meals = await fetchMeals();
        const likes = await fetchLikes();
        displayMeals(meals, likes)
    }
})

const initialize = async () => {
    const meals = await fetchMeals();
    const likes = await fetchLikes();
    displayMeals(meals, likes);
};
initialize();