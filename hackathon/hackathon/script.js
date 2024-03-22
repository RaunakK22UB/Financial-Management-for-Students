$(document).ready(function() {
    var totalIncome = 0;
    var totalExpenses = 0;

    $('#expenseForm').submit(function(e) {
        e.preventDefault();
        var expenseName = $('#expenseName').val();
        var expenseAmount = parseFloat($('#expenseAmount').val());
        totalExpenses += expenseAmount;
        $('#expenseList').append('<li class="list-group-item">Name: ' + expenseName + ', Amount: $' + expenseAmount + '</li>');
        updateFinancialSummary();
    });

    $('#incomeForm').submit(function(e) {
        e.preventDefault();
        var incomeName = $('#incomeName').val();
        var incomeAmount = parseFloat($('#incomeAmount').val());
        totalIncome += incomeAmount;
        $('#incomeList').append('<li class="list-group-item">Source: ' + incomeName + ', Amount: $' + incomeAmount + '</li>');
        updateFinancialSummary();
    });

    function updateFinancialSummary() {
        $('#totalIncome').text(totalIncome);
        $('#totalExpenses').text(totalExpenses);
        $('#remainingBalance').text(totalIncome - totalExpenses);
    }
});
