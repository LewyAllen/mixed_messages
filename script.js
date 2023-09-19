//Step 1 Plan project - very quick

//Step 2 Come up with a topic - holidays! Location, time of year and how to get there.

//Step 3 Create script and run it locally! 

//Step 4 - Set up version control 

  
//Step 5 - Store message components
  const holInfo = {
    location: ['Greece', 'Canada', 'Chile', 'Japan', 'England', 'India', 'Kenya'],
    timeOfYear: ['January', 'April', 'June', 'July', 'December'],
    transport: ['Train', 'Plane', 'Car']
  }
  
// Step 6 - Create the message

let message = []

let randomNumber = num => {
    return Math.floor(Math.random() * num)
  }
  
for(let i in holInfo) {
    let option = randomNumber(holInfo[i].length)
  
    switch(i) {
      case 'location':
        message.push(`You're due a holiday to ${holInfo[i][option]}.`)
        break
      case 'timeOfYear':
        message.push(`${holInfo[i][option]} is the ideal time for you to go.`)
        break
      case 'transport':
        message.push(`You should get there by ${holInfo[i][option]}.`)
        break
      default:
        message.push('There is not enough info.')
    }
  }
  

  //Step 7 - Put the program together
  let formatTrip = trip => {
    const holiday = message.join(' ')
    console.log(holiday)
  }
  
  formatTrip(message);