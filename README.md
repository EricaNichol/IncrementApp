# IncrementApp

Thinkific Developer Challenge

please visit: <a href="http://thinkific.herokuapp.com">thinkific.herokuapp.com</a>

###Instructions:

Please visit thinkific.herokuapp.com
and sign up for an account. 

###Stack:

Built on Node Js, Express Js with MongoDB deployed on
Heruoku.

###Summary:

I choose this stack because it is light weight,
asyncronous and non relational,
which is suitable for this challenge.

I started with a basic API that gives a token, which
users can use "Postman" to connect to the API. Below are 
the routes for this app:

#####GET:
		home:         which is root 
		authenticate: which is to authenticate client 
		signup:       for signing up
		profile:      the user profile page

#####POST:
		/update/:user_id/edit  : for updating number with new No.

		/next/:user_id .       : to get next number<br><br>

The API is secured through password hashing and middleware
provided by Express.JS<br><br>

###Assumptions:

When a user refreshes, the integer increments by 1, as per the short video clip. Which is why I did coding logic in the POST route.

Since it is deployed on website, I did not provide API key instead, I printed a unique ID demonstrating that a token can be given out to put in the header for Curl or PostMan.

If you have any questions don't hesitate to contact me, 
feedback is greatly appreciated!

Kind regards,

David
604-828-8683<br>
davidlin98@hotmail.com / dave@codingbydave.com / codingbydave.com



