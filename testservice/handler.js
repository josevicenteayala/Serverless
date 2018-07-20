'use strict';

module.exports.hello = (event, context, callback) => {
  const {object,identification,born}  = event;
  const age = 2018-born;
  const persona = "The person is "+object+" and his identification is "+identification+" born in "+age;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      input : object,
      innput : identification,
      input: event,
      event : persona
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  //callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
