const admin = require('../config/firebase.config')

const authenticateFirebaseUser = (req, res, next) => {
    const idToken = req.headers.authorization
    admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken)=>{
            req.user = decodedToken
            next()
        })
        .catch((error)=>{
            res.status(403).json({error: 'Unauthorized'})
        })
};

module.exports = authenticateFirebaseUser