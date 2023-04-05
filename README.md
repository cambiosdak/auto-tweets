# Auto Post Tweets
## Description
This code will make Http POST request using Axios library to create a new tweet. Every tweet to send should be predefined in an array called ``array`` and it will automatically send each tweet every 30 mins aprox. Once the the full array is ended, it will start over, make sure to add a random-word or space to ensure the tweet goes through, otherwise will return an error saying 'Tweet already exist' <br />
All the data, endpoint and else was extracted using Web Scrapping and HTTP Requests, use it to your own risk.
> This bot DOES NOT require API PERMISSIONS

## Usage
Install package via npm:
```
npm i axios random-words
```
You need to modify the code and obtain your ``cookie``, ``x-csrf-token`` and ``authorization`` in the headers of the requests as well as ``queryId`` on data section.

## Reference
[Axios](https://www.npmjs.com/package/axios)
[Twitter](http://twitter.com)
