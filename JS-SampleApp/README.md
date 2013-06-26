Javascript Sample App
=====================

This is a sample web application created using simple javascript and html for the purpose of introducing developers to our Cognitive Insights - Personality REST API. This app is a blank slate that simply demonstrates the communication a front-end web app would have with our API, assuming the app has been successfully authorized. 

Authorization
---------------------

In order to get you started on interacting with our API, this sample app comes pre-packaged with username/password combination that has already been authorized. The username/password combination is "sampleUser"/"samplePassword" - in order to authorize your calls, please make sure you input that combination for each call you make in the "username" and "password" fields located at the top right of each window of this app. However, if you wish to start out by authorizing and manipulating your own repository, you can get authorization using the following steps:

* Pick a unique username/password combination you wish to use to authenticate your app in the future. 
* Make a request to https://bpc.bmedianet.com/api/1/createUser.json. Your request must be SSL-encrypted, and must contain the following parameters: user, pswd. Set "user" equal to your desired username, and "pswd" equal to your desired password. The request will look like this:
	https://bpc.bmedianet.com/api/1/createUser.json?user=myUsername&pswd=myPassword
* If you recieve and error message, then either some part of the combination you provided already exists, or it was not a valid input. Please adjust your request accordingly and try again.
* If you are successful, then your response will contain a json-formatted string that says "User successfully created". This means that you are now authorized to use the API, and can access/create your own data using that username/password combination.

Each page in the sample app provided requires a user-inputted username/password combination, in the fields labeled username/password located at the top right of each window. Make sure you are using your own username/password combination in those fields to use your private content repository.

All of our API calls are SSL-encrypted, and require HTTP Basic Authentication.

Using the Sample App
----------------------

Now that you are either using our sample username/password, or your own, you can start using the JS app. In order to view the environment, go in to either the ClientPersonality folder or the ClientThemes foler (depending on which API you prefer to work with) and open the index.html file in your browser of choice.

Once open, you will see a very basic user interface that will allow you to make requests to our REST API. All of the possible requests to our API are listed at the top of the home page for this sample app. If you wish to learn more about what each request does, take a look at the documentation for the Cognitive Insights - Personality REST API provided at our website: http://www.bmedianet.com/apis.html. Also, take a look at our Apigee API Console: https://apigee.com/bmnAPIs/embed/console/CogSightYou.

Each API call's response will show up for you in an alert dialogue window from your browser. This alert dialogue will show you the JSON-formatted response that each request responds with. 

Once you are familiar with the requests and their responses, you can look further into the app's code to see how the requests are made. To better understand how data is formatted by the app for each request, look at the functions contained in the following file:

* ClientPersonality/bmn.js

These files contain the javascript that is responsible for making requests to our APIs. They use the standard ajax format for making http requests, and all variables are set in the html file that corresponds to each API call (i.e. all_authors.html -> BMN.getAllAuthors(), author.html -> BMN.getAuthor(), etc.).

Most of the information needed for understanding how to interact with our API should be clear after following the steps listed above. However, if you are still unclear about the API, or have questions for us that are not answered by the sample app, or the API documentation, don't hesitate to contact us on Stack Overflow by using the tag "cognitive-insights" or "bmn", or on our website (http://www.bmedianet.com/form.html).
