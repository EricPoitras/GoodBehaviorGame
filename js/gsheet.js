function makeApiCall() {
      var params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: '1gDgVqIzjQ2iCRSkMq_8ez02wB1yi7A5oGJSUaxvULss',  // TODO: Update placeholder value.

        // The A1 notation of a range to search for a logical table of data.
        // Values will be appended after the last row of the table.
        range: 'Sheet1',  // TODO: Update placeholder value.

        // How the input data should be interpreted.
        valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.

        // How the input data should be inserted.
        insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
      };
            
      var valueRangeBody = {
        // TODO: Add desired properties to the request body.
        "values":
          [
              [
                  sessionStorage.batch_log
              ]
          ],
          "majorDimension":"ROWS"
      };


      var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

function initClient() {
      var API_KEY = 'AIzaSyCxg0zU9Nu9FO1HoQKobjUasVwnupgNBiI';  // TODO: Update placeholder with desired API key.

      var CLIENT_ID = '271667931001-l9tk44n8habti7jbrq45va3ahdc0185v.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

      // TODO: Authorize using one of the following scopes:
      //   'https://www.googleapis.com/auth/drive'
      //   'https://www.googleapis.com/auth/drive.file'
      //   'https://www.googleapis.com/auth/drive.readonly'
      //   'https://www.googleapis.com/auth/spreadsheets'
      //   'https://www.googleapis.com/auth/spreadsheets.readonly'
      var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }

function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }

function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        makeApiCall();
      }
    }

function handleSignInClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    }

function handleSignOutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }
    