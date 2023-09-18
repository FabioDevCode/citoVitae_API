const passwordValidator = require('password-validator');
const Password = new passwordValidator();

Password
.is().min(12)
.is().max(100)
.has().uppercase()
.has().lowercase()
.has().digits()
.has().not().spaces()

module.exports = Password;