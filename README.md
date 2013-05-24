Cognitive Insights - Personality
====================

This folder is dedicated to maintaining and developing sample applications that demonstrate the core functionality of Behavioral Media Networks' (BMN) API, Cognitive Insights - Personality.

This API is a wrapper around BMN's unique and novel methods for understanding and predicting personality traits from online communication and social media text. Our algorithm for personality extraction uses new methods in computational linguistics to predict the personality of an author of social media text, SMS, etc. along five dimensions: Extraversion, Emotional Stability, Agreeableness, Conscientiousness and Openness.

Our algorithm is able to take unstructured text as input, parse it for important markers of personality, and return a categorical prediction of personality for each of the five dimentions listed above. For each dimension, the algorithm predicts one of three categories - yes, no or neutral. Neutral means that the author displayed both sides of the continuum equally, or neither. The meaning of the yes and no categories, however, is described below:

<table>
	<tr>
		<th>Personality Dimension</th>
		<th>"Yes"</th>
		<th>"No"</th>
	</tr>
	<tr>
		<th>Extraversion</th>
		<th>Extraverted</th>
		<th>Introverted</th>
	</tr>
	<tr>
		<th>Emotional Stability</th>
		<th>Secure/Confident</th>
		<th>Sensitive/Nervous</th>
	</tr>
	<tr>
		<th>Agreeableness</th>
		<th>Friendly/Compassionate</th>
		<th>Cold/Unkind</th>
	</tr>
	<tr>
		<th>Conscientiousness</th>
		<th>Efficient/Organized</th>
		<th>Spontaneous/Easy-Going</th>
	</tr>
	<tr>
		<th>Openness (to Experience)</th>
		<th>Inventive/Curious</th>
		<th>Consistent/Cautious</th>
	</tr>
</table>

The REST API
-------------------

As mentioned, this repository contains sample applications that demonstrate how to interact with the API wrapper for our personality analysis algorithm. This wrapper not only provides users access to our analysis engine, but also provides content storage and retrieval functionality. Some actions you might be able to perform using our API are: 

* Analyze textual input from an author
* Add an author to your content repository
* Manage the author content in your repository
* Retrieve a list of authors from your content repository based on an inputted personality model.
* Get personality predictions for an author over a period of time.

If you wish to create your own repository and start using our Cognitive Insights - Personality API, you can get authorization by making the following call to our API:

		https://bpc.bmedianet.com/api/1/createUser.htm

In order to authorize yourself, provide the following parameters:

		user=anyUser
		pswd=anyPassword

If you do not receive an error message, then you have successfully authorized yourself, and can start using our engine and populate your own content repository. 

Once you are authorized, you can access our API using HTTP Basic Authentication that are SSL-encrypted (HTTPS). For more information on how to use our Cognitive Insights - Personality API, check out some of our sample apps in this repository, as well as our Apigee API Console at https://apigee.com/bmnAPIs/embed/console/CogSightYou

You can also find more information about our suite of APIs, Cognitive Insights, at our website, http://www.bmedianet.com/main.html.
