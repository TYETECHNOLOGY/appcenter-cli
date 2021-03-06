/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the MissingSymbolCrashGroupsInfoResponse class.
 * @constructor
 * missing symbol groups
 *
 * @member {number} totalCrashCount total number of crashes for all missing
 * symbol groups
 * 
 */
function MissingSymbolCrashGroupsInfoResponse() {
}

/**
 * Defines the metadata of MissingSymbolCrashGroupsInfoResponse
 *
 * @returns {object} metadata of MissingSymbolCrashGroupsInfoResponse
 *
 */
MissingSymbolCrashGroupsInfoResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'MissingSymbolCrashGroupsInfoResponse',
    type: {
      name: 'Composite',
      className: 'MissingSymbolCrashGroupsInfoResponse',
      modelProperties: {
        totalCrashCount: {
          required: true,
          serializedName: 'total_crash_count',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = MissingSymbolCrashGroupsInfoResponse;
