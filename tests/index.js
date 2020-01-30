const URL = require('url').URL;
const portfolios = require('../portfolios.json');

const isString = item => typeof item === 'string';

const isValidUrl = item => {
  try {
    new URL(item);
    return true;
  } catch (err) {
    return false;
  }
};

const isGithub = github => {
  return github.com.toLowerCase().includes('github.com');
};

const validate = portfolio => {
  if (!isString(portfolio.username)) {
    throw new Error('Username must be a string');
  }

  if (!isString(portfolio.image)) {
    throw new Error('Image must be a string');
  }

  if (!isString(portfolio.website) || !isValidUrl(portfolio.website)) {
    throw new Error('Website must be a valid URL string');
  }

  if (!isString(portfolio.github) || !isValidUrl(portfolio.github) || !isGithub(portfolio.github)) {
    throw new Error('GitHub must be a valid URL string');
  }

  return true;
};

portfolios.forEach(validate);
