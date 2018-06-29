const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbGymBuddy = process.env.MONGODB_URI || `mongodb://localhost/WDI_LDN_PROJECT3-${env}`;
const secret = 'shh';

module.exports = { port, dbGymBuddy, secret };
