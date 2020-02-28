'use strict'

var startCalculator = (function () {

    function showResult(result) {
        alert('Result is: ' + result)
    }
    function getNumberFormUser() {
        var input = prompt('Type number!')
        var number = Number(input)

        if (Number.isNaN(number)) {
            return getNumberFormUser()
        } else {
            return number
        }
    }
    function getOperatorFromUser() {
        var input = prompt('Type operator (+, -, *, /)')

        switch (input) {
            case '+':
                return input
            case '-':
                return input
            case '*':
                return input
            case '/':
                return input
            default:
                return getOperatorFromUser()
        }
    }
    function getConfirmationFromUser() {
        return confirm('Do you want to proceed?')
    }

    function calculate(operator, a, b) {
        switch (operator) {
            case '+':
                return a + b
            case '-':
                return a - b
            case '*':
                return a * b
            case '/':
                return a / b
        }
    }

    function getConfirmationFromUserAndProceed(result) {
        var confirmation = getConfirmationFromUser()

        if (confirmation) {
            mainLoop(result)
        } else {
            showResult(result)
        }
    }
    function mainLoop(result) {
        var operator = getOperatorFromUser()
        var number = getNumberFormUser()

        var newResult = calculate(operator, result, number)

        getConfirmationFromUserAndProceed(newResult)
    }

    function start() {
        var result = getNumberFormUser()

        getConfirmationFromUserAndProceed(result)
    }

    return start

})()