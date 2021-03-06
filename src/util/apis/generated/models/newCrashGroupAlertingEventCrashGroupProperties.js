/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NewCrashGroupAlertingEventCrashGroupProperties class.
 * @constructor
 * Properties of new crash group
 *
 * @member {string} [id]
 * 
 * @member {string} [name]
 * 
 * @member {string} [reason]
 * 
 * @member {string} [url]
 * 
 * @member {string} [appDisplayName]
 * 
 * @member {string} [appPlatform]
 * 
 * @member {string} [appVersion]
 * 
 * @member {array} [stackTrace]
 * 
 */
function NewCrashGroupAlertingEventCrashGroupProperties() {
}

/**
 * Defines the metadata of NewCrashGroupAlertingEventCrashGroupProperties
 *
 * @returns {object} metadata of NewCrashGroupAlertingEventCrashGroupProperties
 *
 */
NewCrashGroupAlertingEventCrashGroupProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NewCrashGroupAlertingEvent_crash_group_properties',
    type: {
      name: 'Composite',
      className: 'NewCrashGroupAlertingEventCrashGroupProperties',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        reason: {
          required: false,
          serializedName: 'reason',
          type: {
            name: 'String'
          }
        },
        url: {
          required: false,
          serializedName: 'url',
          type: {
            name: 'String'
          }
        },
        appDisplayName: {
          required: false,
          serializedName: 'app_display_name',
          type: {
            name: 'String'
          }
        },
        appPlatform: {
          required: false,
          serializedName: 'app_platform',
          type: {
            name: 'String'
          }
        },
        appVersion: {
          required: false,
          serializedName: 'app_version',
          type: {
            name: 'String'
          }
        },
        stackTrace: {
          required: false,
          serializedName: 'stack_trace',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = NewCrashGroupAlertingEventCrashGroupProperties;
