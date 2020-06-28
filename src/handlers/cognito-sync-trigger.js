const AWS = require('aws-sdk');

const s3 = new AWS.cog();

/**
 * A Lambda function that logs the payload received from S3.
 */
exports.s3JsonLoggerHandler = async (event, context) => {
  // All log statements are written to CloudWatch by default. For more information, see
  // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
  const getObjectRequests = event.Records.map(record => {
      
     
  });
 return Promise.all(getObjectRequests).then(() => {
    console.debug('Complete!');
  });

};
