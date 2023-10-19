Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
export const config = {
//exports.config = {
    //directConnect: true,
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'custom',
   frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../Features/Login.feature'],

    cucumberOpts: {
require : '../Features/Step_Definitions/Stepdef.js'   
}
  };