// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

import { AllData } from "../data/data";

export const allPlanetsMoonsCount = (data: AllData) => {
  return data.planets
    .map((planet) => {
      if (planet.moonsCount) {
        return planet.moonsCount;
      } else return 0;
    })
    .reduce((acc, prev) => {
      return acc + prev;
    });
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
