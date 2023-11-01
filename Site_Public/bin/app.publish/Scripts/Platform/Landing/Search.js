$(document).ready(function () {
    const transferEl = document.getElementById('transfer-basic');
    const data1 = [
        { data: 'Target' },
        { data: 'Walmart' },
        { data: 'Meijer' },
        { data: 'Kroger' },
        { data: 'Amazon' },
        { data: 'Best Buy' },
        { data: 'Costco' },
        { data: 'Home Depot' },
        { data: 'Lowe\'s' },
        { data: 'Staples' },
        { data: 'Office Depot' },
        { data: 'Bed Bath & Beyond' },
        { data: 'Macy\'s' },
        { data: 'Nordstrom' },
        { data: 'Sears' },
        // Add more entries as needed
    ];

    const instanceTransfer = new Transfer(transferEl, {
        dataSource: data1,
        titleTarget: 'Selected Vendors',
        titleSource: 'Available Vendors'
    });


})

$(document).on('click', '#search-options-engage', function () {
    $('#window-search-settings').modal('show');
})