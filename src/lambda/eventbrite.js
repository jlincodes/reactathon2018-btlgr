import axios from 'axios';

export function handler(event, context, callback) {

  let info;

  console.log(process.env);

// axios.get("https://www.eventbriteapi.com/v3/events/search/?token=I6KMPRJD2RIBTZ23G2LR&start_date.keyword=today&sort_by=best&q=heightened_series")
  // axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${process.env.eventbriteKey}&start_date.keyword=today&sort_by=best&q=heightened_series`)
  //   .then(resp => {
  //     info = resp.data.events;
  //     console.log(info);
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify({msg: info})
  //     });
  //   })

}
