/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NewAppReleaseAlertingEvent class.
 * @constructor
 * New app release alerting event
 *
 * @member {array} [userIds] List of users who need to receive an email
 * notification. If this is not null, then only sending emails will be
 * triggered even if the event requires calling webhooks or doing other
 * actions.
 * 
 * @member {object} [appReleaseProperties] Properties of new application
 * release
 * 
 * @member {string} [appReleaseProperties.appName]
 * 
 * @member {string} [appReleaseProperties.appDisplayName]
 * 
 * @member {string} [appReleaseProperties.releaseId]
 * 
 * @member {string} [appReleaseProperties.platform]
 * 
 * @member {string} [appReleaseProperties.uploadedAt] Date and time in ISO
 * 8601 format
 * 
 * @member {string} [appReleaseProperties.fingerprint]
 * 
 * @member {string} [appReleaseProperties.releaseNotes]
 * 
 * @member {string} [appReleaseProperties.version]
 * 
 * @member {string} [appReleaseProperties.shortVersion]
 * 
 * @member {string} [appReleaseProperties.minOs]
 * 
 * @member {boolean} [appReleaseProperties.mandatoryUpdate]
 * 
 * @member {number} [appReleaseProperties.size]
 * 
 * @member {string} [appReleaseProperties.provisioningProfileName]
 * 
 * @member {string} [appReleaseProperties.provisioningProfileType]
 * 
 * @member {string} [appReleaseProperties.bundleIdentifier]
 * 
 * @member {string} [appReleaseProperties.installLink]
 * 
 * @member {string} [appReleaseProperties.iconLink]
 * 
 * @member {string} [appReleaseProperties.distributionGroupId]
 * 
 */
function NewAppReleaseAlertingEvent() {
  NewAppReleaseAlertingEvent['super_'].call(this);
}

util.inherits(NewAppReleaseAlertingEvent, models['AlertingEvent']);

/**
 * Defines the metadata of NewAppReleaseAlertingEvent
 *
 * @returns {object} metadata of NewAppReleaseAlertingEvent
 *
 */
NewAppReleaseAlertingEvent.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NewAppReleaseAlertingEvent',
    type: {
      name: 'Composite',
      className: 'NewAppReleaseAlertingEvent',
      modelProperties: {
        eventTimestamp: {
          required: true,
          serializedName: 'event_timestamp',
          type: {
            name: 'String'
          }
        },
        eventId: {
          required: true,
          serializedName: 'event_id',
          type: {
            name: 'String'
          }
        },
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Object'
          }
        },
        userIds: {
          required: false,
          serializedName: 'user_ids',
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
        },
        appReleaseProperties: {
          required: false,
          serializedName: 'app_release_properties',
          type: {
            name: 'Composite',
            className: 'NewAppReleaseAlertingEventAppReleaseProperties'
          }
        }
      }
    }
  };
};

module.exports = NewAppReleaseAlertingEvent;
