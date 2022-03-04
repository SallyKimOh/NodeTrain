// default import
// import fetch from 'node-fetch';
const fetch = require('node-fetch');

// named export
// export const all = async (resourceName) => {
// module.exports.all = async (resourceName) => {
const all = async (resourceName) => {
  const res = await fetch(`http://localhost:3050/${resourceName}`);
  const resources = await res.json();
  console.log(resources);  
};

const one = async (resourceName,resourceId) => {
  const res = await fetch(
    `http://localhost:3050/${resourceName}/${resourceId}`);
  const resource = await res.json();
  console.log(resource);  
};

const append = async (resourceName,resourceData) => {

  const newResource = resourceData
    .split(',')
    .reduce( (resourceObj, dataProp) => {
      const [ key, value ] = dataProp.split(':');
      resourceObj[key] = value;
      return resourceObj;
    }, {});

  const res = await fetch(
    `http://localhost:3050/${resourceName}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newResource),
    },
  );
  const resource = await res.json();
  console.log(resource);
};

// default export
// export default { all, one, append };
// module.exports = { all: all, one: one, append: append };
module.exports = { all, one, append };