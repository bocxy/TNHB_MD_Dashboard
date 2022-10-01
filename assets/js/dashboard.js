// Asset Status 
const labels = [
    'Occupied',
    'Vacant',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Asset Status',
        data: [70, 30],
        backgroundColor: ['rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
    }]
};
Chart.defaults.color = "#000000";
const config = {
    type: 'pie',
    data: data,
    options: {
        layout: {
            padding: 15
        },
        plugins: {
            title: {
                display: true,
                text: 'Asset Status'
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('asset-status'),
    config
);

const itemsAssetStatus = new Chart(
    document.getElementById('items-asset-status'),
    config
);

// Asset Category
const labelsCategory = [
    'Residential',
    'Commercial',
];
const dataCategory = {
    labels: labelsCategory,
    datasets: [{
        label: 'Asset Category',
        data: [50, 50],
        backgroundColor: ['rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
    }]
};
Chart.defaults.color = "#000000";
const configCategory = {
    type: 'doughnut',
    data: dataCategory,
    options: {
        layout: {
            padding: 15
        },
        plugins: {
            title: {
                display: true,
                text: 'Asset Category'
            }
        }
    }
};

const myChartCategory = new Chart(
    document.getElementById('items-asset-category'),
    configCategory
);

// Monitoring Status
const labels2 = [
    'Ongoing',
    'Overdue',
];
const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Monitoring Status',
        data: [60, 40],
        backgroundColor: ['rgb(62, 218, 20)',
            'rgb(255, 0, 0)'
        ],
        hoverOffset: 4
    }]
};
Chart.defaults.color = "#000000";
const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        layout: {
            padding: 15
        },
        plugins: {
            title: {
                display: true,
                text: 'Monitoring Status'
            }
        }
    }
};

const myChart2 = new Chart(
    document.getElementById('monitoring-status'),
    config2
);
const myChartMonitoring = new Chart(
    document.getElementById('items-monitoring'),
    config2
);