
(function () {
  const ctx = document.getElementById('chart-container').getContext('2d');
  let chart;

  function renderChart(data) {
    const labels = data.map(item => item.doc_type);
    const values = data.map(item => item.count);

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED']
        }]
      },
      options: {
        rotation: -Math.PI,
        circumference: Math.PI,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#FFFFFF'
            }
          }
        },
        onClick: (evt, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const selectedDocType = labels[index];
            console.log(`Selected Document Type: ${selectedDocType}`);
          }
        }
      }
    });
  }

  const sampleData = [
    { doc_type: 'Fitness', count: 10 },
    { doc_type: 'Insurance', count: 15 },
    { doc_type: 'Permit', count: 5 },
    { doc_type: 'National Permit', count: 8 },
    { doc_type: 'Tax', count: 12 },
    { doc_type: 'Green Tax', count: 7 },
    { doc_type: 'PUC', count: 9 }
  ];

  renderChart(sampleData);
})();
