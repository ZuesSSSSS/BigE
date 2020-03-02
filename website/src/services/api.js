import axios from 'axios';

const prod = {
  url: {
    API_URL: 'http://165.22.234.135/api'
  }
}

const dev = {
  url: {
    API_URL: 'http://127.0.0.1:8000/api'
  }
}

const config = process.env.NODE_ENV === 'development' ? dev : prod;

function getAPIUrl() {
  return config.url.API_URL
}

async function getAllProducts() {
  let data = null;

  await axios( getAPIUrl() + '/products' ).then( (res) => {
    if ( res.status === 200 ) {
      data = res.data;
    }
  });

  return data.products;
}

export {
  getAllProducts,
}
