let userPoints = 0;

const actionForm = document.getElementById('actionForm');
const pointsDisplay = document.getElementById('points');
const yourPointsLB = document.getElementById('yourPointsLB');

const actionPoints = {
  "bike": 10,
  "reusable": 5,
  "public-transport": 8,
  "no-plastic": 6
};

actionForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const action = document.getElementById('action').value;

  if (action && actionPoints[action]) {
    userPoints += actionPoints[action];
    pointsDisplay.textContent = userPoints;
    yourPointsLB.textContent = userPoints;
    alert(`+${actionPoints[action]} points! Keep it up 🌿`);
    actionForm.reset();
  }
});
