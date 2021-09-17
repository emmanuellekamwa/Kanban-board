import itemsCounter from '../itemsCounter.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = JSDOM.fragment(`<!DOCTYPE html><ul class="meals-list">
<li class="meal-item">
    <span class="item-count"></span>
</li>
</ul>`);

const meals = [
  {
    strMeal: 'Apam balik',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
    idMeal: '53049',
  },
  {
    strMeal: 'Apple & Blackberry Crumble',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
    idMeal: '52893',
  },
  {
    strMeal: 'Apple Frangipan Tart',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    idMeal: '52768',
  },
];

describe('Items Counter', () => {
  it('counts the number of items', () => {
    const element = dom.querySelector('.item-count');
    const count = itemsCounter(meals, element);
    expect(count).toBe(3);
  });

  it('updates the UI with the number of item counts', () => {
    const element = dom.querySelector('.item-count');
    itemsCounter(meals, element);
    expect(element.textContent).toBe(' (3)');
  });
});
