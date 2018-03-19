import worldCountries from 'world-countries/countries';

const europeBanList = 'AX GG GI JE IM FO SJ XK'.split(' ');
const americaBanList = 'AI AW BL BQ GP GF MF MQ PM UM BM VG VI GL KY CW MS SX TC'.split(' ');
const banList = [...europeBanList, ...americaBanList];

const allCountries = worldCountries
  .map(country => {
    return {
      // name: country.name.common,
      name: country.translations.rus.common,
      code: country.cca2,
      region: country.region,
    };
  })
  .filter(country => {
    return banList.indexOf(country.code) === -1;
  });

const europeCountries = allCountries.filter(country => country.region === 'Europe');
const asiaCountries = allCountries.filter(country => country.region === 'Asia');
const americaCountries = allCountries.filter(country => country.region === 'Americas');
const africaCountries = allCountries.filter(country => country.region === 'Africa');
const oceaniaCountries = allCountries.filter(country => country.region === 'Oceania');


export {
  worldCountries,
  europeCountries,
  asiaCountries,
  americaCountries,
  africaCountries,
  oceaniaCountries,
};