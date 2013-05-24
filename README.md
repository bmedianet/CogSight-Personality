Cognitive Insights - Personality
====================

This folder is dedicated to maintaining and developing sample applications that demonstrate the core functionality of the REST API called Cognitive Insights - Personality, developed by Behavioral Media Networks (BMN).

This API is a wrapper around one of BMN's unique, cognitive algorithms that focuses on understanding and predicting personality traits in individuals by analyzing online communication and social media text. Our algorithm for personality prediction uses new methods in computational linguistics to predict the personality of an individual along five dimensions: Extraversion, Emotional Stability, Agreeableness, Conscientiousness and Openness. Each dimension is its own continuum, possessing two extremes between which an individual might fall. 

It works as follows:

* The algorithm accepts unstructured, online text as input. 
* Then, it parses the text for important markers of personality.
* Finally, it returns a personality prediction for the author of the provided text. 

This prediction has five components, one for each of the dimensions of personality listed above. For each dimension, the algorithm predicts that the user most closely belongs to one of three categories - "yes", "no" or "neutral". "Neutral" means that the author is somewhat closer to the center of that dimension's continuum. The "yes" and "no" categories mean that the individual falls closer to one of the two ends of the spectrum. What this means for each of the five dimensions is described below:

<table>
	<tr>
		<th>Personality Dimension</th>
		<th>"Yes"</th>
		<th>"No"</th>
	</tr>
	<tr>
		<td>Extraversion</td>
		<td>Extraverted</td>
		<td>Introverted</td>
	</tr>
	<tr>
		<td>Emotional Stability</td>
		<td>Secure/Confident</td>
		<td>Sensitive/Nervous</td>
	</tr>
	<tr>
		<td>Agreeableness</td>
		<td>Friendly/Compassionate</td>
		<td>Cold/Unkind</td>
	</tr>
	<tr>
		<td>Conscientiousness</td>
		<td>Efficient/Organized</td>
		<td>Spontaneous/Easy-Going</td>
	</tr>
	<tr>
		<td>Openness (to Experience)</td>
		<td>Inventive/Curious</td>
		<td>Consistent/Cautious</td>
	</tr>
</table>

For example, if an individual gets a "yes" prediction along the Agreeableness dimension, it means they tend to be more friednly than cold. An inidiviual who get a "no" on Extraversion might be more Introverted by nature. 


The REST API
-------------------

As mentioned, this repository contains sample applications that demonstrate how to interact with the API wrapper for our personality analysis algorithm. This wrapper not only provides users access to our analysis engine, but also provides content storage and retrieval functionality. Some actions you might be able to perform using our API are: 

* Analyze textual input from an author
* Add an author to your content repository
* Manage the author content in your repository
* Retrieve a list of authors from your content repository based on an inputted personality model.
* Get personality predictions for an author over a period of time.

If you wish to create your own repository and start using our Cognitive Insights - Personality REST API, you can get authorization by making the following POST request:

		https://bpc.bmedianet.com/api/1/createUser.htm

In order to authorize yourself, provide the following parameters:

		user=anyUser
		pswd=anyPassword

If you do not receive an error message, then you have successfully authorized yourself, and can start using our engine and populate your own content repository. 

Once you are authorized, you can access our API using HTTP Basic Authentication that is SSL-encrypted (HTTPS). For more information on how to use our Cognitive Insights - Personality API, check out some of our sample apps in this repository, as well as our Apigee API Console: https://apigee.com/bmnAPIs/embed/console/CogSightYou

You can also find more information about our suite of APIs, Cognitive Insights, at our website, http://www.bmedianet.com/main.html.
