function createRevenueChart() {
    const revenueChartNode = document.getElementById('revenue-chart');

    // Axes values
    const xValues = ['1st', '2nd', '3rd', '4th'];
    const yValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    new Chart(revenueChartNode, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: 'Quarterly Revenue',
                data: [20, 30, 75, 60],
            }],
        },
        options: {
            scales: {
                y: {
                    min: 10,
                    max: 100,
                    tick: {
                        stepSize: 10,
                    },

                    title: {
                        display: true,
                        text: 'Revenue ($ mil)'
                    }
                },

                x : {
                    title: {
                        display: true,
                        text: 'Yearly Quarter',
                    },
                },
            },

            backgroundColor: 'rgb(17, 4, 255)',
            borderColor: 'rgb(98, 10, 221)',
        }
    })
}

createRevenueChart();