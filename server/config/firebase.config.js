
const admin = require('firebase-admin');

const encodedPrivateKey = process.env.PRIVATE_KEY;
const privateKey = Buffer.from(encodedPrivateKey, 'base64').toString('utf8');

const serviceAccount = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: privateKey.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
  client_x509_cert_url: process.env.CLIENT_CERT,
  universe_domain: process.env.UNIVERSE_DOMAIN,
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://resumate-io-default-rtdb.firebaseio.com', // Replace with your Firebase project URL
});

module.exports = admin;
