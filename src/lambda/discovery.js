import axios from 'axios';

export function handler(event, context, callback) {
  
  let data = {
      "type": "select",
      "args": {
          "table": "Events",
          "columns": [
              "Name"
          ],
          "order_by": [
              {
                  "column": "Name",
                  "order": "asc"
              }
          ]
      }
  };

  let requestOptions = {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  };
  
  axios.post('https://data.annihilate87.hasura-app.io/v1/query', data, requestOptions)
    .then(response => {
      let retVal = {};
      
      console.log(response);
      
      response.data.forEach((obj, i) => {
        retVal[i] = obj
      })
      
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(retVal)
      });
      
    })
    .catch(err => {
      console.log('*&^%*&^%*&^%*&^%*&^%*&^%*&^%*&^%*&^%*&^%*&^%');
      console.log(err);
    });
}
