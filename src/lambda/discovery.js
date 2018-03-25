import axios from 'axios';

export function handler(event, context, callback) {
  let data = {
    "type": "select",
    "args": {
      "table": "Events",
      "columns": [],
      "ordered_by": [
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
  axios.get('https://data.annihilate87.hasura-app.io/v1/query', data, requestOptions)
    .then(response => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      });
    })
    .catch(err => {
      console.log(err);
    });
}
