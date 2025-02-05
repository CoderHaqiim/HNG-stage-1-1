<b><h1>Overview</h1></b>
<b><h2>Description</h2></b>
<p>
  This API provides a single endpoint that takes an integer as a query parameter.
  The response tells if the integer given is even or odd; is an armstrong number;
  is perfect. It also gives the sum of all its digits and returns a fun fact about the number.
 
  This project is a stage 1 project for the backend track of the HNG internship.
</p>

<b><h2>Base URL</h2></b>
<p>
  https://hng-stage-1-1-2.onrender.com/
</p>

<b><h2>End points</h2></b>
<b><h3>classify-number</h3></b>
<p>
   /api/classify-number
</p>
<b><h4>Usage</h4></b>
<p>
  GET /api/classify-number?number=9
</p>

<b><h4>Response</h4></b>
  <p></p>Content-Type: application/json<p></p>
  <p></p>status: 200 OK</p>
  
  Response body:
<pre>
  {
    "number": 9,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
      "armstrong",
      "odd"
    ],
    "digit_sum": 9,
    "fun_fact": "9 is the sum of the digits of 41 is 5, and 41-5 = 36."
  }
</pre>

<b><h3>Invalid route</h3></b>
<b><h4>Response</h4></b>
  <p></p>Content-Type: application/json<p></p>
  <p></p>status: 404 Not found</p>

  Response body:
<pre>
  {
    "message": "Requested resource not found"
  }
</pre>

<b><h1>Running the server locally</h1></b>
You must install node and download this repository into your local computer. 
Open the project in your text editor of choice, and in your terminal, run:
<pre>
  node server.js
</pre>
