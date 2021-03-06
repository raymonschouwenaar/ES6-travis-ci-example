const SETTINGS = require('../config/settings')
const AXIOS = require('axios')
AXIOS.defaults.headers.post['Content-Type'] = SETTINGS.DEFAULT_AXIOS_CONTENT_TYPE

module.exports = function (comment, repoSlug, prId, ghToken) {
  if (typeof prId === 'number' && prId >= 0) {
    return AXIOS.post(`https://api.github.com/repos/${repoSlug}/issues/${prId}/comments?access_token=${ghToken}`, {
      body: comment
    })
      .then(function (response) {
        console.log('Posted comment!')
      })
      .catch(function (error) {
        console.error('Didn\'t Posted comment!')
        console.error(error)
      })
  } else {
    return false;
  }
}
