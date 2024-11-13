'use strict';

/**
 * people-who-trust-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::people-who-trust-us.people-who-trust-us');
