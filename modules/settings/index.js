const d = new Date();
const year = d.getFullYear();
const theme = process.env.THEME || 'hospitality';

module.exports = {
  options: {
    ignoreNoCodeWarning: true,
    year: year,
    theme: theme
  }
};
