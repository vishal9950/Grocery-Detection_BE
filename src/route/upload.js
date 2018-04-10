const fs = require('fs');
const rmrf = require('rimraf');

const handler = (request, reply) => {
  const result = [];
  //   for (let i = 0; i < request.payload.file.length; i += 1) {
  result.push(request.payload.file.hapi);
  // const dirname = '/Users/vishalvasnani/CLG/gd_be/project/val/w';
  const dirname2 = '/Users/vishalvasnani/CLG/gd_fe/public/project/val/w';
  // rmrf(dirname, () => {
  // fs.mkdirSync(dirname);
  // request.payload.file.pipe(
  //   fs.createWriteStream(`${dirname}/${request.payload.file.hapi.filename}`)
  // );
  rmrf(dirname2, () => {
    fs.mkdirSync(dirname2);
    request.payload.file.pipe(fs.createWriteStream(`${dirname2}/${request.payload.file.hapi.filename}`));
    console.log('Uploaded!');
    reply(result);
  });
  // });
};

module.exports = (
  {
    path: '/upload',
    method: 'POST',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        maxBytes: 10 * 1000 * 1000,
      },
    },
    handler,
  }
);
