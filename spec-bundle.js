require('core-js');

require('zone.js/dist/zone-microtask.js');
require('zone.js/dist/jasmine-patch.js');

var testContext = require.context('./client', true, /\.spec\.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);
