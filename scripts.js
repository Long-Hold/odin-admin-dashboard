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

function createTrafficPieChart() {
    const pieChartNode = document.getElementById('traffic-chart');

    new Chart(pieChartNode, {
        type: 'pie',
        data: {
            labels: ['Social', 'Direct', 'Referral', 'Other'],
            datasets: [{
                label: 'Traffic Sources',
                data: [35, 25, 20, 20],
                backgroundColor: [
                    'rgb(238, 235, 18)',
                    'rgb(72, 61, 194)',
                    'rgb(161, 7, 7)',
                    'rgb(30, 227, 165)', 
                ]
            }]
        },
        // This is where we configure the chart behavior
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                // Configure the datalabels plugin
                datalabels: {
                    // This formatter function determines what text appears on each slice
                    formatter: function(value, context) {
                        // Calculate percentage
                        const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return percentage + '%';
                    },
                    // Styling the labels
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 16
                    },
                    // Position the labels in the center of each slice
                    anchor: 'center',
                    align: 'center'
                },
                // Keep the legend visible
                legend: {
                    position: 'top',
                }
            }
        },
        // Register the datalabels plugin
        plugins: [ChartDataLabels]
    })
}

function toggleManagementTable() {
    const toggle = document.querySelector('.toggle-user-management');
    const managementTable = document.querySelector('.user-management');

    let visible = false;
    toggle.addEventListener('click', (e) => {
        if (visible) {
            managementTable.style.display = 'none';
        }
        else {
            managementTable.style.display = 'block';
        }

        visible = !visible;
    } )
}

createRevenueChart();
createTrafficPieChart();
toggleManagementTable();