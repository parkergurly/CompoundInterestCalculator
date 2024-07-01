/* Compound interest calculator, that prompts a user for some input, and calculates the compounded interest value

 Step 1 - define a function that we can use to calculate the final value of the compounded interest

 Step 2 - define a function that would calculate the difference (ie the impact that compounding has had)

 Step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

 Step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

*/

const prompt = require('prompt-sync')()

// let initial_amount = 20000
// let monthly_contribution = 400
// let number_of_years = 30
// let interest_rate = 10

//Step 1

function compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate) {
    let total = initial_amount
    let annual_contribution = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total = total + annual_contribution
        total = total * ((100 + interest_rate) / 100)
    }

    return total.toFixed(2)
}

//Step 2

function calculateRegularAmount(initial_amount, monthly_contribution, number_of_years) {
    let regular_value = initial_amount + monthly_contribution * 12 * number_of_years  
    return regular_value.toFixed(2)
}

// Step 3

function run () {
    let initial_amount = parseInt(prompt('How much money are you initially investing ($)?'))
    let monthly_contribution = parseInt(prompt('How much will your monthly contribution amount be($)?'))
    let number_of_years = parseInt(prompt('For how many years would you like to compound your investment?'))
    let interest_rate = parseInt(prompt('What is your expected interest rate (%) over these years?'))

    printOutput(initial_amount, monthly_contribution, number_of_years, interest_rate)
}


// Step 4 

function printOutput(initial_amount, monthly_contribution, number_of_years, interest_rate) {
    let final_value = compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate)

    let value_without_compounding = calculateRegularAmount(initial_amount, monthly_contribution, number_of_years)

    let summary = `\n You originally invested: $${initial_amount}\n Your monthly contribution was: $${monthly_contribution}\n You invested for ${number_of_years} years\n Your expected interest rate is: ${interest_rate}% \n\n Your final compounded value: $${final_value}\n Your regular amount: $${value_without_compounding}\n The difference was: $${final_value - value_without_compounding}`
    console.log(summary)
}

run()