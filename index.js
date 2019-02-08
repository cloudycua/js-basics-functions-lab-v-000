function distanceFromHqInBlocks(pickupLocation) {
  const headquarter = 42;
  return Math.abs(headquarter - pickupLocation)
}

function distanceFromHqInFeet(pickupLocation) {
  const block = 264;
  return distanceFromHqInBlocks(pickupLocation) * block;
}

function distanceTravelledInFeet(pickup, dropoff) {
  const distance = Math.abs(pickup - dropoff)
}


// calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in the beginning and destination blocks and returns the number of feet travelled. Each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.
