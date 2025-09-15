// modules/visualization.js

export function zobrazGraf(canvasId, data) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.years,
      datasets: [{
        label: 'Emise CO₂ (Gt)',
        data: data.values,
        borderColor: 'darkred',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Vývoj emisí CO₂ na Zemi (2015–2024)',
          font: { size: 18 }
        }
      }
    }
  });
}
