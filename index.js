const http = require('http');
const mysql = require('mysql');

const PORT = process.env.PORT || 5000;
const { JAWSDB_MARIA_IVORY_URL } = process.env;
const server = http.createServer((req, res) => {
  const client = mysql.createConnection({
    host      : 'nkpl8b2jg68m87ht.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user      : 'qtevfd0vgvvxwf8c',
    password  : 'qfwuoffbwqrfz31o',
    port      : '3306',
    database  : 'g0mdd7886og6dtc0'
  });

  var sql = "SELECT * FROM hellotable";
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  client.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.end('ERROR');
      client.end();
    }

    client.query(sql, function(error, results, fields)
    {
      if (error) throw error;

      var result_name = results[0].name

      res.end(`${result_name}\n`);
      client.end();
    });
  })
    // .catch(() => {
    //   res.end('ERROR');
    //   client.end();
    // });
});

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on ${PORT}`);
});
