const PythonShell = require('python-shell');

const handler = (request, reply) => {
  const pyshell = new PythonShell('evaluate_model.py');
  pyshell.on('message', (message) => {
    reply(message);
  });
};

module.exports = {
  path: '/predict',
  method: 'GET',
  handler,
};

