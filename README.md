*** This example uses Alexa NodeSDK v1 ***

# Single Live Stream sample using Alexa Skills Kit 
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
        // URL to Live Stream - Should be HTTPS 
        'url' : '<https://radio.stream.url>',
        // URL to Station Logo - Should be HTTPS, S3 works great
        'image' : '<https://s3.amazonaws.com/radiostation/logo.png>'
        ```
        
        
# Deployment

ASK CLI **will create the skill and the lambda function for you**. The Lambda function will be created in ```us-east-1 (Northern Virginia)``` by default.

1. Navigate to the project's root directory. you should see a file named 'skill.json' there.
2. Deploy the skill and the lambda function in one step by running the following command:

	```bash
	$ ask deploy
	```
    
# Testing

1. To test, you need to login to Alexa Developer Console, and **enable the "Test" switch on your skill from the "Test" Tab**.
