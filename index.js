const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Golden Retriever",
    averageWeight: 30,
    activities: ["fetch", "swimming", "hiking"],
  },
  {
    breed: "Labrador Retriever",
    averageWeight: 29,
    activities: ["fetch", "swimming", "running"],
  },
  {
    breed: "Bulldog",
    averageWeight: 23,
    activities: ["walking", "cuddling"],
  },
  {
    breed: "Beagle",
    averageWeight: 10,
    activities: ["fetch", "sniffing"],
  },
  {
    breed: "Poodle",
    averageWeight: 20,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Boxer",
    averageWeight: 30,
    activities: ["fetch", "running", "playing"],
  },
  {
    breed: "Dachshund",
    averageWeight: 9,
    activities: ["walking", "digging"],
  },
  {
    breed: "Corgi",
    averageWeight: 11,
    activities: ["fetch", "hiking"],
  },
  {
    breed: "Siberian Husky",
    averageWeight: 23,
    activities: ["running", "pulling sleds", "hiking"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
];

const huskyWeight = breeds.find(
  (breed) => breed.breed === "Husky"
).averageWeight;

console.log(huskyWeight);

const dogBothActivities = breeds.find(
  (breed) =>
    breed.activities.includes("walking") && breed.activities.includes("digging")
).breed;

console.log(dogBothActivities);

// const allActivities = breeds.map((breed) => breed.activities).flat();
const allActivities = breeds.flatMap((breed) => breed.activities);

console.log(allActivities);
const uniqueActivities = [...new Set(allActivities)];

console.log(uniqueActivities);

const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter((breed) => breed.activities.includes("swimming"))
      .flatMap((breed) => breed.activities)
      .filter((activity) => activity !== "swimming")
  ),
];

console.log(swimmingAdjacent);

console.log(breeds.every((breed) => breed.averageWeight > 5));
console.log(breeds.some((breed) => breed.activities.length >= 3));

const fetchWeights = breeds
  .filter((breed) => breed.activities.includes("fetch"))
  .map((breed) => breed.averageWeight);

const heaviestFetchBreed = Math.max(...fetchWeights);

console.log(fetchWeights);
console.log(heaviestFetchBreed);

const groupedWeights = Object.groupBy(heaviestFetchBreed, (heviest) =>
  heviest > 30 ? "max" : "min"
);
