const mongoose = require('mongoose');

mongoose.connect(
  // Changed to mongod://localhost/openai (was mongod://localhost/googlebooks)
    process.env.MONGODB_URI || 'mongodb://localhost/openai',
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    },
  );

module.exports = mongoose.connection;