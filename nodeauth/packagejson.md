{
  "name": "nodeauth",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0",
    "mongodb": "*",
    "mongoose": "*",            // Driver voor mongoDB
    "connect-flash": "*",       // Flash messages
    "express-validator": "*",   // Form validations
    "express-session": "*",     // Sessions
    "express-messages": "*",    // Messages (???)
    "passport": "*",            // Auth
    "passport-local": "*",      // Omdat je met een local db werkt
    "passport-http": "*",       // HTTP requests
    "multer"                    // Simplifies file upload
  }
}
