function createRevenueChart() {
    const xValues = ['1st', '2nd', '3rd', '4th'];
    const yValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    const revenueData = {
        labels: xValues,
        datasets: [{
            label: 'Quarterly Revenue',
            data: [20, 30, 75, 60],
            fill: false,
            borderColor: 'rgb(20, 208, 42)',
            backgroundColor: 'white',
            tension: 0.1
        }]
    };

    return new Chart('revenue-chart', {
        type: 'line',
        data: revenueData,
        options: {
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Quarter'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Revenue ($ / mil)'
                    }
                }],
            },
        },
    });
}

const revenueChart = createRevenueChart();