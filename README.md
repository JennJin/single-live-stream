*** This example uses Alexa NodeSDK v1 ***

# Single Live Stream sample using Alexa Skills Kit 
Template for streaming a single Live Stream, for example a Radio Station


## Setup Steps - Edit the following files and fill in your info
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

	
## About
**Note:** The rest of this readme assumes you have your developer environment ready to go and that you have some familiarity with CLI (Command Line Interface) Tools, [AWS](https://aws.amazon.com/), and the [ASK Developer Portal](https://developer.amazon.com/alexa-skills-kit). If not, [click here](./instructions/0-intro.md) for a more detailed walkthrough.

## Setup w/ ASK CLI

### Pre-requisites

* Node.js (> v4.3)
* Register for an [AWS Account](https://aws.amazon.com/)
* Register for an [Amazon Developer Account](https://developer.amazon.com/)
* Install and Setup [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)

### Installation
1. Clone the repository into a folder named stream-test.

	```bash
	$ git clone https://github.com/JennJin/single-live-stream stream-test
	```

2. Initiatialize the [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) by Navigating into the repository and running npm command: `ask init`. Follow the prompts.

	```bash
	$ cd stream-test
	$ ask init
	```

3. Install npm dependencies by navigating into the `/lambda/custom` directory and running the npm command: `npm install`

	```bash
	$ cd lambda/custom
	$ npm install
	```
        
        
## Deployment

ASK CLI **will create the skill and the lambda function for you**. The Lambda function will be created in ```us-east-1 (Northern Virginia)``` by default.

1. Navigate to the project's root directory. you should see a file named 'skill.json' there.
2. Deploy the skill and the lambda function in one step by running the following command:

	```bash
	$ ask deploy
	```
    
## Testing

1. To test, you need to login to Alexa Developer Console, and **enable the "Test" switch on your skill from the "Test" Tab**.
2. Once the "Test" switch is enabled, your skill can be tested on devices associated with the developer account as well. Speak to Alexa from any enabled device, from your browser at [echosim.io](https://echosim.io/welcome), or through your Amazon Mobile App and say:

	```text
	Alexa, open radio test
	```
