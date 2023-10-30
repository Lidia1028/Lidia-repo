"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
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
        require: '../Features/Step_Definitions/Stepdef.js'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDeEIsT0FBTyxDQUFDLE1BQU0sR0FBRztJQUNiLGFBQWEsRUFBRSxJQUFJO0lBRW5CLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixhQUFhLEVBQUUsUUFBUTtLQUN4QjtJQUVELDRDQUE0QztJQUM1QyxTQUFTLEVBQUUsUUFBUTtJQUNwQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUU5RCxtRUFBbUU7SUFDbkUsd0JBQXdCO0lBQ3hCLEtBQUssRUFBRSxDQUFDLDJCQUEyQixDQUFDO0lBRXBDLFlBQVksRUFBRTtRQUNsQixPQUFPLEVBQUcseUNBQXlDO0tBQ2xEO0NBQ0UsQ0FBQyJ9