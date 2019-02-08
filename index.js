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
  const distance = distanceTravelledInFeet(start, destination);
  let farePrice = 0;

  if (distance <= 1) {
    farePrice = 0;
  }

  return distance * farePrice;

}
