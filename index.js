const core = require('@actions/core');
const client = require('firebase-tools');
async function run() {
  try {
    const firebase_app_id = core.getInput('APPID');
    const firebase_token = core.getInput('FIREBASE_TOKEN');
    const input_file = core.getInput('FILE');
    const groups = core.getInput('GROUPS');
    const testers = core.getInput('TESTERS');
    const releaseNotes = core.getInput('RELEASENOTES');
    client.appdistribution.distribute(input_file, {
      app: firebase_app_id,
      token: firebase_token,
      groups: groups,
      testers: testers,
      releaseNotes: releaseNotes
    }).then(function () {
      console.log('Rules have been deployed!')
    }).catch(function (err) {
      // handle error
      console.log(err)
    });

  } catch (error) {
    core.setFailed(error.message);
  }
}
run()
