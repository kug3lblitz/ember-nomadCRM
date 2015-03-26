/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-nomad-crm',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
        'connect-src': "'self' https://api.parse.com",
        'style-src': "'self' 'unsafe-inline'"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    'simple-auth': {
      authorizer: 'authorizer:parse',
      crossOriginWhitelist: ['https://api.parse.com']
    },

    parseKeys: {
      applicationId: "5zQy2Xg9HHfY6BLa2G2z5GejWqs2wWZthZ5fKp1m",
      restApi: "d97PB9k87pZUGFYlylt2izkVn2JsO2JUUJp33UDc"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/CRaM/';

  }

  return ENV;
};
