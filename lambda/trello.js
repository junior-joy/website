const OAuth = require('oauth');
const { config } = require('dotenv')
config()


function truncateString(str, num) {
  // Credits: https://medium.com/@DylanAttal/truncate-a-string-in-javascript-41f33171d5a8
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
module.exports.handler = async function(event, context) {
  const params = JSON.parse(event.body);
  const {
    email,
    naam,
    topic,
    message,
  } = params
  const oauth = new OAuth.OAuth(
    process.env.TRELLO_URL_REQUEST,
    process.env.TRELLO_URL_ACCESS,
    process.env.TRELLO_CLIENT_KEY,
    process.env.TRELLO_CLIENT_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  const resData = {}
  console.log(email, naam, topic, message)
  oauth.post(
       `https://api.trello.com/1/cards/?idList=5f3d08e44eaec066de6356aa&name=Email%20${encodeURI(naam)}&desc=Naam%3A%20${encodeURI(naam)}%0AEmail%3A%20${encodeURI(email)}%0AReden%20van%20contact%3A%20${encodeURI(topic)}%0A%0A---%0A%0A${encodeURI(truncateString(message, 40))}`,
       process.env.TRELLO_OAUTH_TOKEN,
       process.env.TRELLO_OAUTH_SECRET,
       {},
       'application/json',
       function (e, data, res) {
         if (e) console.error(e);
         resData.data = data
         return
       });
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: `${resData.data}`,
    })
  }
}

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
