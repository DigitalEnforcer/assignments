# Intro to Express

    #Initialize a new node project
        -npm init -y

        -npm install

        -npm install express
        -npm install morgan
        -npm install uuid
    # Vocabulary

        # Route
            * An event listener for http requests (get put post delete)

        # Endpoint
            * "/item" "/user"

        # Port
            * localhost:9000/  // stay about 3000 and lower than 9000
        
    # Nodemon
        * npm install -g nodemon

# Intro to REST API architecture

    # REST - Representational State Transfer

    # Resource - Single item (object) in a database
        /user/kjwerwjk9

    # Collection - a collection of similar items in a database
        /users
    
    # Base (root) URL - http://amazon.com/

    # API Endpoint - http://amazon.com/movies

    # Parameters - /movies/:movieId

    # Query (query string) - /movies?genre=action&year=1999

    # Client - Frontend

    # Server - Intermediary

    # Request Method -  CRUD - Get Post Put Delete

    # Middleware - a function that fires on the inbetween

    # Request Boby (req.body)

    # UUID - creates unique IDs 
        * npm install uuid
        *const {v4: uuidv4} = require("uuid")
            then call with uuidv4()
    
    # Express Router - Enables to modularize our routes in express

# URL Parameters

    # Parts of a URL
        * Base - http://amazon.com
        * Endpoint - http://amazon.com/images
        * Parameters - http://amazon.com/images/9283749823scf
        * Query
    
    # Parameters (req.params) - GET One

# URL Queries

    # Query string - (typically to filter results)
        * Begins with a "?"
        * Built of key-value pairs.
        * Multiple queries separated by the "&"

# Middleware

    # What is it?
        * app.use()
            1. (Optional) - Mount Path ( endpoint )
            2. Callback Function = receives the request, response objects, also the 'next' function

    # The 'next' function
        * Moves on to the middleware in line on our server

# Console Errors in Express

    # Use a logger
        *npm install morgan

# Connecting the Front-end to the Back-end

    # Folder Structure
    # Proxy

# Status Codes

    # 200 - Successful Request
    # 201 - Successful Insert / Successful update
    # 401 - Unauthorized
    # 404 - Not found
    # 500 - Server Error


    #https://http.cat