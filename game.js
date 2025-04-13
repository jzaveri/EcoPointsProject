let score = 0;
const scoreDisplay = document.getElementById('game-score');

// Game item setup
const draggableItems = document.querySelectorAll('.draggable-item');
const bins = document.querySelectorAll('.bin');

// Function to allow dragging of items
draggableItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

bins.forEach(bin => {
  bin.addEventListener('dragover', dragOver);
  bin.addEventListener('drop', dropItem);
});

function dragStart(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function dragOver(e) {
  e.preventDefault();
}

function dropItem(e) {
  e.preventDefault();
  const draggedItemId = e.dataTransfer.getData('text');
  const draggedItem = document.getElementById(draggedItemId);
  const binId = e.target.id;

  // Check if the item matches the bin
  if (isCorrectBin(draggedItemId, binId)) {
    score += 10;  // Correct match adds points
    scoreDisplay.textContent = score;
  } else {
    score -= 5;  // Incorrect match deducts points
    scoreDisplay.textContent = score;
  }

  // Reset item position after drop
  draggedItem.style.position = 'relative';
  draggedItem.style.left = '0';
  draggedItem.style.top = '0';
}

// Function to check if the item matches the bin
function isCorrectBin(itemId, binId) {
  if (itemId === 'plastic' && binId === 'plastic-bin') return true;
  if (itemId === 'paper' && binId === 'paper-bin') return true;
  if (itemId === 'glass' && binId === 'glass-bin') return true;
  return false;
}
