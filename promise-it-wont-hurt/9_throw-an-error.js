'use strict';

const parsePromised = (json) => 
  (new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      reject(error.message);
    }
  }))


parsePromised(process.argv[2])
  .catch(console.log);
