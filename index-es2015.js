import 'es6-promise/auto';

function determineDate() {
  import('moment')
    .then(moment => moment().format('LLLL'))
    .then(str => console.log(str))
    .catch(err => console.log('Failed to load moment', err));
}


module.exports = window.Test = determineDate();
