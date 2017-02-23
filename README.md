# IncrementApp

Thinkific Developer Challenge<br><br>

**please visit:<br><br>

<b><a href="http://thinkific.herokuapp.com">thinkific.herokuapp.com</a></b><br><br>

<b>Instructions:</b><br><br>

Please visit thinkific.herokuapp.com
and sign up for an account. <br><br>

<b>Stack:</b><br><br>

Built on Node Js, Express Js with MongoDB deployed on
Heruoku.<br><br>

<b>Summary:</b><br><br>

I choose this stack because it is light weight,
asyncronous and non relational,
which is suitable for this challenge. <br><br>

I started with a basic API that gives a token, which
users can use "Postman" to connect to the API. Below are 
the routes for this app:<br><br>

GET:<br>
home:         which is root <br>
authenticate: which is to authenticate client <br>
signup:       for signing up<br>
profile:      the user profile page<br><br>

POST:<br>
/update/:user_id/edit  : for updating number with new #<br>
/next/:user_id .       : to get next number<br><br>

The API is secured through password hashing and middleware
provided by Express.JS<br><br>

<b>Assumptions:</b><br><br>

When a user refreshes, the integer increments by 1, as per the short video clip. Which is why I did coding logic in the POST route.

Since it is deployed on website, I did not provide API key instead, I printed a unique ID demonstrating that a token can be given out to put in the header for Curl or PostMan.<br><br>

If you have any questions don't hesitate to contact me, 
feedback is greatly appreciated!<br><br><br>

Kind regards,<br><br>

David<br>
604-828-8683<br>
davidlin98@hotmail.com / dave@codingbydave.com / codingbydave.com







