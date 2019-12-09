const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://api.github.com/users/robinsonaaron')
  .then(
    (response) => {
      console.log(response.data.avatar_url);
      return axios.get(response.data.avatar_url, { responseType: 'stream' });
    }
  )
  .then(
    (imageResponse) => {
      return fs.writeFile('my-face.jpg', imageResponse.data, null);
    }
  )
  .then(
    () => { console.log('Wrote the image file to my-face.png') }
  )