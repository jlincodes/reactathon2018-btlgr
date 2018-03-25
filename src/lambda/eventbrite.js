import axios from 'axios';

export function handler(event, context, callback) {

  let info;

  let key = process.env.eventbriteKey ? process.env.eventbriteKey : "I6KMPRJD2RIBTZ23G2LR";

  axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${key}&start_date.keyword=today&sort_by=best&q=${event.body}`)
    .then(resp => {
      console.log(resp.data.events);
      info = resp.data.events.map(item => {
        if (item.logo) {
          return(
            {"Name":`${item.name.text}`,
            "Description":`${item.description.text}`,
            "image_url":`${item.logo.url}`}
          );          
        } else {
          return(
            {"Name":`${item.name.text}`,
            "Description":`${item.description.text}`,
            }
          );

        }
      });

      let data = {
        "type":"insert",
        "args":{
          "table":"Events",
          "objects":info,
          "returning":["id","Name"]
        }
      }


      let requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        }
      }

      axios.post(`https://data.annihilate87.hasura-app.io/v1/query`, data, requestOptions)
        .then(resp => {
          
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(resp)
          });

        }).catch(err => {
          console.log('^&$&%^$&^%$&%^$&%^$&^%$&^%$&^%$&^%$&^%$&%^$');
          console.log(err);
        }
      )
    }
  )
}
