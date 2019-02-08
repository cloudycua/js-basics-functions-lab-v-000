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

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let fare = 0;

  if (distance > 400 && distance < 2000) {
    distance -= 400
    fare += distance * .02;
  }

  return distance * farePrice;
}
