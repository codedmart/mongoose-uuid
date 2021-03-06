'use strict';
/**
 * mongoose-uuid
 * git@github.com:dlamp/mongoose-uuid.git
 *
 * Copyright (c) 2014 Darin Lampson
 * Licensed under the MIT license.
 */

/**
 * Dependencies
 * -------------------------------------------------------------------------*/
var uuid = require('node-uuid');

/**
 * Plugin
 * -------------------------------------------------------------------------*/

function uuidPlugin(schema) {

    if (!schema.paths._id) {
        schema.add({
            '_id': { 
                type: String,
                index: {
                    unique: true
                }
            }
        });
    }

    schema.pre('save', function(next) {
        if(!this.isNew) return next();

        this._id = uuid.v4();
        return next();
    });
};

module.exports = uuidPlugin
