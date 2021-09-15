const displayMeals = (meals, likes) => {
    console.log(meals);
    const mealsList = document.querySelector('.meals-list');
    mealsList.textContent = '';
    meals.forEach((meal) => {
        const {idMeal, strMeal, strMealThumb} = meal;
        const likeObj = likes.find((like) => like.item_id === idMeal);
        const item = document.createElement('li');
        item.classList.add('meal-item');
        const image = document.createElement('img');
        image.classList.add('meal-img');
        image.setAttribute('src', strMealThumb);
        const name = document.createElement('span');
        name.classList.add('meal-name');
        name.textContent = strMeal;
        const commentBtn = document.createElement('button');
        commentBtn.textContent = 'COMMENTS';

        
        const likeBtn = document.createElement('i');
        likeBtn.classList.add('far');
        likeBtn.classList.add('fa-heart');
        likeBtn.setAttribute('data-id',  `${idMeal}`);
        likeBtn.setAttribute('id', 'like-btn');
        const likesCount = document.createElement('span');
        likesCount.classList.add('count');
        likesCount.textContent = `${likeObj ? likeObj.likes : 0}`;

        const details = document.createElement('div');
        details.classList.add('details');
        const likesDiv = document.createElement('div');
        likesDiv.classList.add('likes-div');

        likesDiv.append(likeBtn, likesCount)
        details.append(name, likesDiv);
        item.append(image, details, commentBtn);
        mealsList.append(item);
    });;
}

export default displayMeals;