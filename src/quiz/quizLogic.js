
let countries;
let currentCountry;

function getNextCountry() {
  let freeCountries = countries.filter(country => !country.done);
  let index = Math.floor(Math.random() * freeCountries.length);
  return freeCountries[index];
}

function haveFreeCountry() {
  let freeCountries = countries.filter(country => !country.done);
  return freeCountries.length > 0;
}

function start(dataCountries) {
  countries = dataCountries
    .slice(0, 10)
    .map(country => {
      return {
        ...country,
        done: false,
      }
    });
  currentCountry = getNextCountry();
}

function select(country) {
  if (currentCountry.code === country.code) {
    currentCountry.done = true;
    if (haveFreeCountry()) {
      currentCountry = getNextCountry();
    } else {
      currentCountry = null;
    }
  } else {
    console.log('wrong answer');
  }

}

export default {
  start,
  getCountries: () => countries,
  getCurrentCountry: () => currentCountry,
  select,
}