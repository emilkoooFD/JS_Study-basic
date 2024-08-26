const posLatitude = 6;
const posLongitude = 18;

const DestinLatitude = 23;
const DestinLongitude = 46;

const diffLatitude = DestinLatitude - posLatitude
const diffLongitude = DestinLongitude - posLongitude

const distance = Math.sqrt(posLongitude ** 2 + diffLongitude ** 2)

console.log(`Расстояние = ${distance}км`)
