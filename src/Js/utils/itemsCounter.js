export default (meals, element) => {
  element.textContent = ` (${meals.length})`;
  return meals.length;
};