const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const itemsCount = item.querySelectorAll('li');
    console.log(`${categoryName} (${itemsCount.length} elements)`); }
     

);

