import './mocha.config';

// load all tests and files - this ensures that all source files are included in the coverage report,
// even if they are not tested
// see also: coverageReporter.includeAllSources in karma.conf.js
const files = require.context('../src', true, /\.(js|ts)$/);
files.keys().map(files);
