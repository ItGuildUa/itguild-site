'use strict';

/**
 * our-code service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-code.our-code');
