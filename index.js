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
  let farePrice = 0;

  if (distance > 400 && distance < 2000) {
    distance -= 400;
    farePrice += distance * .02;
  }
  if (distance >= 2000) {
    distance -= 2000;
    farePrice += distance * 25;
  }

  return farePrice;
}
