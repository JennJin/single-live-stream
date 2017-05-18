'use strict';

var audioData = [
    {
        // Station Name - Displayed on card in Alexa App
        'title' : '<Radio Station Name>',
        // URL to Live Stream - Should be HTTPS, if not, reach out to your BD/SA contact for assistance 
        'url' : '<https://radio.stream.url',
        // URL to Station Logo - Should be HTTPS, S3 works great
        'image' : 'https://s3.amazonaws.com/radiostation/logo.png'
    }
];

module.exports = audioData;