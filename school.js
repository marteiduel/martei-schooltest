let costOfAtend = 8000;

const appLanding = () => {
    console.log("Welcome to the school managment app")
    console.log("Here is the Menu Options, Please select what you would like to do")
    setTimeout(function() {console.log("Option 1: Cost per Student")}, 3000);
    setTimeout(function() {console.log("Option 2: Instructors Per student")}, 4000);
    setTimeout(function() {console.log("Option 3: Expense Break Down")}, 5000);
    setTimeout(function() {
      const answer = prompt("What Option would you like?" )
      if (answer == '1' || answer.toLowerCase() == 'option 1' || answer.toLowerCase() == 'option1') {
        costPerStudent();
      }
      else if (answer == '2' || answer.toLowerCase() == 'option 2' || answer.toLowerCase() == 'option2') {
        instructorsPerStudent();
      }
      else if (answer == '3' || answer.toLowerCase() == 'option 3' || answer.toLowerCase() == 'option3') {
        expenseBreakDown();
      }
      else {
        console.log("answer was wrong");
      }
      
    }, 7000);
    
  }
  
  const costPerStudent = () => {
    console.log(`This is what a student currently pays $${costOfAtend}`);
    console.log('Would you like to update the current cost?')
    setTimeout(function() {
        const costChangeAnswer = prompt('Yes or No?')
        if (costChangeAnswer.toLowerCase() == 'yes' || costChangeAnswer.toLowerCase() == 'y') {
            const changedCost = parseInt(prompt('What would you like to change the cost to? (Only enter numbers)'))
            return costOfAtend = changedCost
            console.log(`Now your cost of attend it's of ${changedCost}`)
        }
        else if (costChangeAnswer.toLowerCase() == 'no' || costChangeAnswer.toLowerCase() == 'n'){
            console.log('you have selected no')
        }
        else {
            console.log('Please enter yes or no ')
            costPerStudent()
        }
    }, 3000);
  }
  
  const instructorsPerStudent = () => {
    console.log("Instructors");
  }
  
  const expenseBreakDown = () => {
    console.log("Expense Break Down");
  }
  
  
  
  appLanding()