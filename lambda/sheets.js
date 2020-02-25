import { google } from 'googleapis'
import { config as dotenvConfig } from 'dotenv'


dotenvConfig()



const fullSchedule = JSON.parse('["2018-01-04T10:00:00.000Z","2018-01-04T11:00:00.000Z","2018-01-04T12:00:00.000Z","2018-01-04T13:00:00.000Z","2018-01-04T14:00:00.000Z","2018-01-04T15:00:00.000Z","2018-01-05T10:00:00.000Z","2018-01-05T11:00:00.000Z","2018-01-05T12:00:00.000Z","2018-01-05T13:00:00.000Z","2018-01-05T14:00:00.000Z","2018-01-05T15:00:00.000Z","2018-01-01T12:00:00.000Z","2018-01-01T13:00:00.000Z","2018-01-01T14:00:00.000Z","2018-01-01T15:00:00.000Z","2018-01-01T16:00:00.000Z","2018-01-01T08:00:00.000Z","2018-01-01T09:00:00.000Z","2018-01-01T10:00:00.000Z","2018-01-01T11:00:00.000Z","2018-01-01T12:00:00.000Z","2018-01-01T13:00:00.000Z","2018-01-01T14:00:00.000Z","2018-01-01T15:00:00.000Z","2018-01-01T16:00:00.000Z","2018-01-01T17:00:00.000Z","2018-01-01T18:00:00.000Z","2018-01-01T19:00:00.000Z","2018-01-02T08:00:00.000Z","2018-01-02T09:00:00.000Z","2018-01-02T10:00:00.000Z","2018-01-02T11:00:00.000Z","2018-01-02T12:00:00.000Z","2018-01-02T13:00:00.000Z","2018-01-02T14:00:00.000Z","2018-01-02T15:00:00.000Z","2018-01-02T16:00:00.000Z","2018-01-02T17:00:00.000Z","2018-01-02T18:00:00.000Z","2018-01-02T19:00:00.000Z","2018-01-03T08:00:00.000Z","2018-01-03T09:00:00.000Z","2018-01-03T10:00:00.000Z","2018-01-03T11:00:00.000Z","2018-01-03T12:00:00.000Z","2018-01-03T13:00:00.000Z","2018-01-03T14:00:00.000Z","2018-01-03T15:00:00.000Z","2018-01-03T16:00:00.000Z","2018-01-03T17:00:00.000Z","2018-01-03T18:00:00.000Z","2018-01-03T19:00:00.000Z","2018-01-04T08:00:00.000Z","2018-01-04T09:00:00.000Z","2018-01-04T10:00:00.000Z","2018-01-04T11:00:00.000Z","2018-01-04T12:00:00.000Z","2018-01-04T13:00:00.000Z","2018-01-04T14:00:00.000Z","2018-01-04T15:00:00.000Z","2018-01-04T16:00:00.000Z","2018-01-04T17:00:00.000Z","2018-01-04T18:00:00.000Z","2018-01-04T19:00:00.000Z","2018-01-05T08:00:00.000Z","2018-01-05T09:00:00.000Z","2018-01-05T10:00:00.000Z","2018-01-05T11:00:00.000Z","2018-01-05T12:00:00.000Z","2018-01-05T13:00:00.000Z","2018-01-05T14:00:00.000Z","2018-01-05T15:00:00.000Z","2018-01-05T16:00:00.000Z","2018-01-05T17:00:00.000Z","2018-01-05T18:00:00.000Z","2018-01-05T19:00:00.000Z","2018-01-06T08:00:00.000Z","2018-01-06T09:00:00.000Z","2018-01-06T10:00:00.000Z","2018-01-06T11:00:00.000Z","2018-01-06T12:00:00.000Z","2018-01-06T13:00:00.000Z","2018-01-06T14:00:00.000Z","2018-01-06T15:00:00.000Z","2018-01-06T16:00:00.000Z","2018-01-06T17:00:00.000Z","2018-01-06T18:00:00.000Z","2018-01-06T19:00:00.000Z","2018-01-07T08:00:00.000Z","2018-01-07T09:00:00.000Z","2018-01-07T10:00:00.000Z","2018-01-07T11:00:00.000Z","2018-01-07T12:00:00.000Z","2018-01-07T13:00:00.000Z","2018-01-07T14:00:00.000Z","2018-01-07T15:00:00.000Z","2018-01-07T16:00:00.000Z","2018-01-07T17:00:00.000Z","2018-01-07T18:00:00.000Z","2018-01-07T19:00:00.000Z"]')



/**
 * Takes a positive integer and returns the corresponding column name.
 * taken from https://cwestblog.com/2013/09/05/javascript-snippet-convert-number-to-column-name/
 */
export function toColumnName(num) {
  for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
    ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
  }
  return ret;
}



const buildCredentials = ({ PROJECT_ID, PRIVATE_KEY, PRIVATE_KEY_ID, CLIENT_EMAIL, CLIENT_ID }) => ({
  type: 'service_account',
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
  client_email: CLIENT_EMAIL,
  client_id: CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/netlify%40sheets-267714.iam.gserviceaccount.com',
})

const getClient = ({ scopes }) => {
  return google.auth.getClient({
    credentials: buildCredentials(process.env),
    scopes: scopes,
  })
}

const authorizeSheets = async () => {
  const client = await getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return google.sheets({
    version: 'v4',
    auth: client,
  })
}

const addToCol = async (range, emailAddress) => {
  const sheets = await authorizeSheets()
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.append(
      {
        spreadsheetId: '1QeyAOvw5YijBqVvymn81Psy0anMv6sVW_m8xtz9M-P4',
        range,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [emailAddress],
        },
      },
      (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      }
    )
  })
}

exports.handler = async function(event, context, callback) {
  try {
    const params = JSON.parse(event.body);
    const {
      totalPrice,
      color,
      packageChoice,
      extraItems,
      email,
      first_name_child,
      last_name_child,
      date_of_birth_child,
      phone,
      comment,
      check_transfer,
      check_newsletter,
      iban,
      name_card,
      years_tennis,
      competition_experience,
      competition_seasons_amount,
      color_last_year,
      trainer_last_year,
      other_trainer_last_year,
      schedule,
    } = params
    const scheduleMapped = fullSchedule.map( item => schedule.includes( item ) ? item : 0 )
    const dataToSheet = [
      new Date,
      totalPrice,
      color,
      packageChoice,
      extraItems.map( item => item.value ).join(', '),
      email,
      first_name_child,
      last_name_child,
      date_of_birth_child,
      phone,
      comment,
      check_transfer,
      check_newsletter,
      iban,
      name_card,
      years_tennis,
      competition_experience,
      competition_seasons_amount,
      color_last_year,
      trainer_last_year,
      other_trainer_last_year,
    ]
    const colData = dataToSheet.concat( scheduleMapped )
    const col = toColumnName(dataToSheet.length)
    const sheetsRes = await addToCol(`A1`, colData)
    return {
      statusCode: sheetsRes.status,
      body: `respnse ${ JSON.stringify(sheetsRes) }`,
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}
