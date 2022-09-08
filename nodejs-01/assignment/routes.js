const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter user name</title><head>');
    res.write('<h1>Hello welcome</h1>');
    res.write(
      '<body><form action="/create-user" method="POST"><li for="message">username</li><input type="text" name="message"><button type="submit">submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>user list</title><head>');
    res.write('<h1>user list</h1>');
    res.write(
      '<body><ul><li>user 1</li><li>user 2</li><li>user 2</li></ul></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const userName = parseBody.split('=')[1];
      console.log(userName);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
};

module.exports = { handler: requestHandler, someText: 'some hard coded text' };
