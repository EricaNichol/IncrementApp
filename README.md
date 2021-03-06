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
asyncronous and non relational, which is suitable for
this challenge.

Express comes with Jade but I used "Consolidate JS"
to switch the template engine to Handlebars ( i like html ).

Originally, I built the app as an API that gives back a token, which
users can use cUrl or Postman to connect to. Eventually, I ended up building 
the full UI because I really got in to the challenge and enjoyed it so much.

The routes are secured by Passport JS module. I created the rules of authentication
myself by using bcrypt to hash the users password.

Below are the routes for this app:

#####GET:
		home:         which is root
		authenticate: which is to authenticate client
		signup:       for signing up
		profile:      the user profile page

#####POST:

		/update/:user_id/edit  : for updating number with new No.
		/next/:user_id .       : to get next number

The API is secured through password hashing and middleware
provided by Passport.JS

###Feature Modules:

		consolidate, handlebars (template engine)
		mongoose (middleware to mongodb)
		passport (authentication, securing the API)
		mongo (database)
		bcrypt (hashing)
		boostrap, (styling)
		heroku (for deployment)

###Assumptions:

When an user refreshes, the integer increments by 1, as per the short video clip. Which is why I did coding logic in the POST route.

Since it is deployed on website, I did not provide API key, instead, I printed an unique ID demonstrating that a token can be given out to put in the header for Curl or PostMan. I really enjoyed this exercise which is why I am going to implement
facebook authentication when I have free time!

If you have any questions don't hesitate to contact me,
feedback is greatly appreciated!

Kind regards,

David
604-828-8683<br>
davidlin98@hotmail.com / dave@codingbydave.com / codingbydave.com
