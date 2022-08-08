# LinkedIn Profile Scraper Service

## Setup
* Make sure that you have Node.js v12.x and npm v6 or above installed.
* Run `npm install` in order to install dependencies.<br />
* Start `Coding!`. 
## Development on your Local Machine

### Preparing cookie.json File
* Setup [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en-US&utm_source=chrome-ntp-launcher) Chrome Extension
* Log in to your LinkedIn Account
* After successful login, click on the **EditThisCookie** extension on your Chrome's toolbar and select **Export**. This will copy your cookies information to your clipboard.
* Paste the contents on a file and name it *cookie.json* and place on the path you configured on your serverless.yml file.

### Setup your AWS Credentials file
* Create a file named *credentials* on your home directory under *.aws* directory **(e.g. /home/yourusername/.aws/credentials)**
* The file contents should look something like the one below:
```
[otto]
aws_access_key_id=...
aws_secret_access_key=...
```
This serverless project uses the *otto* profie, hence the use of *[otto]*.

### Test the function using Serverless Framework's **Invoke Local** feature

`sls invoke local -f process-profile --data '{ "body": "{\"url\": \"https://www.linkedin.com/in/{{username}}/\"}"}'`

### Running in offline mode
Serverless offline plugin emulates AWS Lambda and API Gateway in your local machine.
To run the project in offline mode:

`sls offline`

This should show a similar output like the one below:
```
offline: Starting Offline: dev/us-east-1.
offline: Key with token: d41d8cd98f00b204e9800998ecf8427e
offline: Remember to use x-api-key on the request headers
offline: Offline [http for lambda] listening on http://localhost:3002
offline: Function names exposed for local invocation by aws-sdk:
           * process-profile: linkedin-scraper-dev-process-profile

   ┌───────────────────────────────────────────────────────────────────────────────────┐
   │                                                                                   │
   │   POST | http://localhost:3000/dev/profile_extraction                             │
   │   POST | http://localhost:3000/2015-03-31/functions/process-profile/invocations   │
   │                                                                                   │
   └───────────────────────────────────────────────────────────────────────────────────┘

offline: [HTTP] server ready: http://localhost:3000 🚀
offline:
offline: Enter "rp" to replay the last request
No type errors found
Version: typescript 3.9.6
Time: 6966ms
```

In the serverless offline output, you can see the endpoints available in your local machine, as well as the API Key to set with the *x-api-key* header when calling the endpoints.