import axios from 'axios';
import { API_KEY, TOKEN } from '../config'

const OpenTok = require('opentok')

export function handler(event, context, callback) {

  let info;

  let key = process.env.eventbriteKey ? process.env.eventbriteKey : "I6KMPRJD2RIBTZ23G2LR";
  const openTok = new OpenTok(API_KEY, '5329985e4f9e3e3d5d92afaaf9b01f381fcba349')

  openTok.createSession((err, session) => {
    if(err) return console.log(err)
  

    axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${key}&start_date.keyword=today&sort_by=best&q=${event.body}`)
      .then(resp => {
        // console.log(resp.data.events);
        info = resp.data.events.map(item => {

          if (item.logo) {
            return(
              {"Name":`${item.name.text}`,
              "Description":`${item.description.text}`,
              "image_url":`${item.logo.url}`,
              "session_id":`${session.sessionId}`,
              "token":`${session.generateToken()}`
            }

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
  })
}
