import axios from 'axios';

export function handler(event, context, callback) {

  let info;
  
  let key = process.env.eventbriteKey ? process.env.eventbriteKey : "I6KMPRJD2RIBTZ23G2LR";

  axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${key}&start_date.keyword=today&sort_by=best&q=${event.body}`
    .then(resp => {      
      info = resp.data.events.map(item => {
        return(
          {"Name":`${item.name.text}`,
           "Description":`${item.description.text}`}
        )
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
}