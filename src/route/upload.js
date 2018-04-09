const fs = require('fs');

const handler = (request, reply) => {
  const result = [];
  //   for (let i = 0; i < request.payload.file.length; i += 1) {
  result.push(request.payload.file.hapi);
  const dirname = '/Users/vishalvasnani/Desktop/project/val/w';
  request.payload.file.pipe(fs.createWriteStream(`${dirname}/${request.payload.file.hapi.filename}`));
  //   }
  reply(result);
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
        maxBytes: 5 * 1000 * 1000,
      },
    },
    handler,
  }
);
