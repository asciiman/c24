window.onload=function(){

    // Clear operand input display
    function clear_operand() {
        $("#operand").val("0");
    }

    // Handle operand clear
    $(".clear").click(function() {
        clear_operand();
    });

    // Handle digit button clicks
    $(".digit").click(function() {
        var new_digit = $(this).text();
        var operand = $("#operand").val() == 0 ? "" : $("#operand").val();

        // Ignore existing decimals
        if (/\./i.test(operand) && new_digit == ".") return;

        // Append new digit
        operand += new_digit;
        $("#operand").val(operand);
    });

    // Handle negation toggle
    $(".neg").click(function() {
        var operand = $("#operand").val();
        operand = /-/i.test(operand) ? operand.replace('-','') : '-' + operand;
        $("#operand").val(operand);
    });

    // Handle enter
    $(".enter").click(function() {
        operands.push($("#operand").val());
        updateOperands();
        clear_operand();
    });

    function updateOperands() {
        var html = "";
        $.each(operands, function(index, value) {
            html += value + '<br>';
        });
        $(".operands").html(html);
    }

    // Handle new
    $(".new").click(function() {
        operands = [];
        updateOperands();
        $(".operator").html("");
        $(".result").html("");
    });

    // Handle sum
    $(".sum").click(function() {
        $(".operator").html("SUM");
        $(".result").html(sum_operands());
    });

    function sum_operands() {
        var sum = 0;
        $.each(operands, function(index, value) {
            sum += parseFloat(value);
        });
        return sum;
    }

    // Handle sum
    $(".mean").click(function() {
        var mean = operands.length == 0 ? 0 : sum_operands() / operands.length;
        $(".operator").html("MEAN");
        $(".result").html(mean);
    });

    var operands = [];

    clear_operand();
};
