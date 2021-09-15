import itemsCounter from "../itemsCounter";

const { getByTestId } = require('@testing-library/dom');

const meals = [
    {
      "strMeal": "Apam balik",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
      "idMeal": "53049"
    },
    {
      "strMeal": "Apple & Blackberry Crumble",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
      "idMeal": "52893"
    },
    {
      "strMeal": "Apple Frangipan Tart",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
      "idMeal": "52768"
    },
];

describe('Items Counter', () => {
    beforeEach(() => {
      document.body.innerHTML = `
      <ul class="meals-list">
        <li class="meal-item">
            <span data-testid="item-count"></span>
        </li>
      </ul>
      `;
    });
    it('counts the number of items', () => {
      const container = document.body;
      const element = getByTestId(container, 'item-count');
      const count = itemsCounter(meals, element);
      expect(count).toBe(3);
    });
  
    it('updates the UI with the number of item counts', () => {
      const container = document.body;
      const element = getByTestId(container, 'item-count');
      itemsCounter(meals, element);
      expect(element.textContent).toBe(' (3)');
    });
  });
