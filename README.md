# ASK Single Live Stream
Template for streaming a single Live Stream, for example a Radio Station


# Setup Steps - Edit the following files and fill in your info
* Edit src/constants.js
    *  Add Skill ID as 'appID'
        ``` javascript
        // App-ID. TODO: set to your own Skill App ID from the developer portal.
         appId : '<Skill ID>',
         ```
    * Define a DynamoDB Table name
        ``` javascript
        //  DynamoDB Table name. TODO: define a name for the table to store playback info for users
        dynamoDBTableName : '<Table Name>',
        ```

* Edit src/audioAssets.js
    * Fill out the Station info
        ``` javascript
        // Station Name - Displayed on card in Alexa App
        'title' : '<Radio Station Name>',
        // URL to Live Stream - Should be HTTPS, if not, reach out to your BD/SA contact for assistance 
        'url' : '<https://radio.stream.url>',
        // URL to Station Logo - Should be HTTPS, S3 works great
        'image' : '<https://s3.amazonaws.com/radiostation/logo.png>'
        ```