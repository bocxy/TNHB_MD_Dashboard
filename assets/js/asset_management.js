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