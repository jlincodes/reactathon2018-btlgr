import axios from 'axios';

export function handler(event, context, callback) {

  let info;

  let key = process.env.eventbriteKey ? process.env.eventbriteKey : "I6KMPRJD2RIBTZ23G2LR";

<<<<<<< HEAD
  axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${key}&start_date.keyword=today&sort_by=best&q=${event.body}`
=======
  axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${key}&start_date.keyword=today&sort_by=best&q=${event.body}`)
>>>>>>> 6fa0f0d90313c2918efe71a8362dfa099eb3b6c5
    .then(resp => {
      info = resp.data.events.map(item => {
        return(
          {"Name":`${item.name.text}`,
           "Description":`${item.description.text}`}
        );
      });

      let data = {
        "type":"insert",
        "args":{
          "table":"Events",
          "objects":info,
          "returning":["id","Name"]
        }
<<<<<<< HEAD
      }
=======
      };
>>>>>>> 6fa0f0d90313c2918efe71a8362dfa099eb3b6c5

      let requestOptions = {
          "method": "POST",
          "headers": {
              "Content-Type": "application/json"
          }
<<<<<<< HEAD
      }

      axios.post(`https://data.annihilate87.hasura-app.io/v1/query`, data, requestOptions).then(resp => {
        info = resp

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        });

      }).catch(err => {
        console.log('^&$&%^$&^%$&%^$&%^$&^%$&^%$&^%$&^%$&^%$&%^$');
        console.log(err);
      })
    }
  )
=======
      };

      axios.post(`https://data.annihilate87.hasura-app.io/v1/query`, data, requestOptions)
        .then(response => {
          info = response;

          callback(null, {
            statusCode: 200,
            body: JSON.stringify(data)
          });

        })
        .catch(err => {
          console.log('^&$&%^$&^%$&%^$&%^$&^%$&^%$&^%$&^%$&^%$&%^$');
          console.log(err);
        });
    });
>>>>>>> 6fa0f0d90313c2918efe71a8362dfa099eb3b6c5
}
