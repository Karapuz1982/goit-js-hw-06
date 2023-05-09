function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = Number(document.querySelector('input').value);
    let boxesHTML = '';

    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const color = getRandomHexColor();
      boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    }

    boxesContainer.innerHTML = boxesHTML;
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
console.log(createBoxes);