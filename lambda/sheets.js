import { google } from 'googleapis'
import { config as dotenvConfig } from 'dotenv'


dotenvConfig()



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
      iban,
      name_card,
      years_tennis,
      competition_experience,
      competition_seasons_amount,
      color_last_year,
      trainer_last_year,
    } = params
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
      iban,
      name_card,
      years_tennis,
      competition_experience,
      competition_seasons_amount,
      color_last_year,
      trainer_last_year,
    ]
    const value = totalPrice
    const col = toColumnName(dataToSheet.length)
    const sheetsRes = await addToCol(`A1`, dataToSheet)
    console.log(`A1:${col}1`)
    return {
      statusCode: sheetsRes.status,
      body: `respnse ${ JSON.stringify(sheetsRes) }`,
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}
