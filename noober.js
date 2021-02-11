function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', async function() {
  // YOUR CODE
  // add json fetcher
let response = await fetch('https://kiei451.com/api/rides.json')
let json = await response.json()
let clearHTML = document.querySelector(`.rides`)
let emptyArray = []
  
  // start with all rides

  // we have data! now let's build up some notifications for clicking the rides
let allFilter = document.querySelector('#all-filter') 
allFilter.addEventListener('click', function(event) {
console.log('All rides was clicked!')
  // boom, solved. Now to load all the rides inside the thing we want
clearHTML.innerHTML = ``
renderRides(json)
  })

  // noober pool array
let poolArray = []
for (let i=0; i<json.length; i++) {
  let p = levelOfService(json[i])
  if(p == 'Noober Pool') {
    poolArray.push(json[i])
  }
}

  // noober pool load
let npoolFilter = document.querySelector('#noober-pool-filter') 
npoolFilter.addEventListener('click', function(event) {
console.log('Noober pool was clicked!')
  // boom, solved. Now to load all the rides inside the thing we want
  clearHTML.innerHTML = ``
  renderRides(poolArray)
  })

  // noober purple array
  let purpleArray = []
  for (let i=0; i<json.length; i++) {
    let p = levelOfService(json[i])
    if(p == 'Noober Purple') {
      purpleArray.push(json[i])
    }
  }
  
    // noober Purple load
  let npurpleFilter = document.querySelector('#noober-purple-filter') 
  npurpleFilter.addEventListener('click', function(event) {
  console.log('Noober Purple was clicked!')
    // boom, solved. Now to load all the rides inside the thing we want
    clearHTML.innerHTML = ``
    renderRides(purpleArray)
    })

    // noober XL array
  let nXLArray = []
    for (let i=0; i<json.length; i++) {
      let p = levelOfService(json[i])
      if(p == 'Noober XL') {
        nXLArray.push(json[i])
      }
    }

    // noober Purple load
  let nXLFilter = document.querySelector('#noober-xl-filter') 
    nXLFilter.addEventListener('click', function(event) {
    console.log('Noober XL was clicked!')
      // boom, solved. Now to load all the rides inside the thing we want
      clearHTML.innerHTML = ``
      renderRides(nXLArray)
      })

        // noober XL array
  let nXArray = []
  for (let i=0; i<json.length; i++) {
    let p = levelOfService(json[i])
    if(p == 'Noober X') {
      nXArray.push(json[i])
    }
  }

  // noober Purple load
  let nXFilter = document.querySelector('#noober-x-filter') 
  nXFilter.addEventListener('click', function(event) {
  console.log('Noober X was clicked!')
    // boom, solved. Now to load all the rides inside the thing we want
    clearHTML.innerHTML = ``
    renderRides(nXArray)
    })

    //end
})

