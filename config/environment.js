const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbGymBuddy = `mongodb://localhost/WDI_LDN_PROJECT3-${env}`;
// const secret =

module.exports = { port, dbGymBuddy };

// , secret };
