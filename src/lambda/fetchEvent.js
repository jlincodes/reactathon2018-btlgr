import axios from 'axios';

export function handler(event, context, callback) {
  console.log('eventID', event.body);

  let data = {
      "type": "select",
      "args": {
          "table": "Events",
          "columns": [
            "id",
            "Name",
            "Description",
            "token",
            "session_id"
          ],
          "where": {
            "id": {
              "$eq": `${event.body}`
            }
          }
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
