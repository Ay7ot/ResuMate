
const admin = require('firebase-admin');

const serviceAccount = require('./resumate-io-firebase-adminsdk-spmtb-f7126b3fb1.json'); // Path relative to this config file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://resumate-io-default-rtdb.firebaseio.com', // Replace with your Firebase project URL
});

module.exports = admin;
