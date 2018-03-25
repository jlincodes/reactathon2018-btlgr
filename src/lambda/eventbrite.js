import axios from 'axios';

export function handler(event, context, callback) {

  let info;

  let key = process.env.eventbriteKey ? process.env.eventbriteKey : "I6KMPRJD2RIBTZ23G2LR";

  axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${key}&start_date.keyword=today&sort_by=best&q=karaoke`)
    .then(resp => {
      info = resp.data.events;
      console.log(info);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: info })
      });
    });

}