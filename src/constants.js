"use strict";

module.exports = Object.freeze({
    
    // App-ID. TODO: set to your own Skill App ID from the developer portal.
    appId : '<Skill ID>',
    
    //  DynamoDB Table name. TODO: define a name for the table to store playback info for users
    dynamoDBTableName : '<Table Name>',
    
    states : {
        START_MODE : '',
        PLAY_MODE : '_PLAY_MODE'
    }
});
