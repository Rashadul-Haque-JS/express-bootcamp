Express Bootcamp
Hello World
Build a web application that has two end points, one which serves "Hello World" and one which serves your name.

Dynamic End Point
Build a web app that has one dynamic End Point

GET /:name

And responds with "Hello, :name!"

Dynamic Content
Store an array of article-objects with title, author and content keys.

Render this array as HTML using EJS.

Also add some styling.

Calculator
Build a simple calculator with a form with two number inputs and a operator dropdown with (+,-,*,/).

The form should make a GET request and the server should perform the calculation and respond with the results.

Request Logger Middleware
Construct a middle ware that writes the request method and path to the console each time a request is made.

Cookie Parser Middleware
Contruct a middleware that parses the Cookie-header to add a cookies-object to the request object.

Example
With a request like

GET / HTTP 1.1
Cookie: grill=korv
The middleware should add a cookies-object into the request object for future middlewares and request handlers

req.cookies // {grill: "korv"}
Page Visit Counter
Build a web application with two pages and navigation between them. Use cookies to save the number of visits each client to each page.

Both pages should render the number of vists the client has made.

Shakespeare Insult Generator
Build a web site that renders a random insult from one of the Shakespeare works.

You will have to decide the severity for each insult yourself.

Insults
Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner? - Macbeth

Never hung poison on a fouler toad - Richard III

He thinks too much: such men are dangerous. - Julius Ceasar

Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs. - The Merchant of Venice

Give me your hand...I can tell your fortune. You are a fool. - The Two Noble Kinsmen

He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish! - The Tempest

It is a tale Told by an idiot, full of sound and fury, Signifying nothing. - Macbeth

Alas, poor heart, that kiss is comfortless As frozen water to a starved snake. - Titus Andronicus

Villain, I have done thy mother. - Titus Andronicus

He hath eaten me out of house and home; he hath put all substance into that fat belly of his. - Henry IV, Part 2

Out, you green-sickness carrion! Out, you baggage! You tallow-face! - Romeo and Juliet
EndPoints
GET / - Renders a random insult
GET /:severity - Renders a random insult with supplied severity
Level Up
GET /insults - Serves a form to create a new insult
POST /insults - Creates a new insult with a form
GET /insults/:id - Renders a form to update a given insult
POST /insults/:id - Updates the insult with supplied ID
Upgrade
Add a another view with information about the insults' origin book. When rendering an insult the origin should be a link to this view.

Low Quality, Unsecured Chat-Application
Build a webapplication that enable clients to chat with each other.

End Points
GET / - Serves a form for choosing a username
POST /setname - Saves the supplied username as a cookie
GET /chat - Serves chat layout with a message form
POST /messages - Creates a new message and redirects to GET /chat
GET /messages - Serves the latest messages
GET /messages?after=TIME_STAMP - Filters the messages to only include messages after the supplied timestamp
Messages and Polling
Messages should be stored in memory as an array of objects with author, content and timestamp.

The chat layout should have a client side javascript that continously requests the latest messages and updates the DOM if any new messages have arrived.