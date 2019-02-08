const headquarter = 42;
const block = 264;

function distanceFromHqInBlocks(pickup) {
  return Math.abs(headquarter - pickup)
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * block;
}

function distanceTravelledInFeet(pickup, dropoff) {
  const distance = Math.abs(pickup - dropoff);
  return distance * block;
}


// calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in the beginning and destination blocks and returns the number of feet travelled. Each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.
