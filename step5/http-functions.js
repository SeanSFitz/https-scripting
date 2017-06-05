function getHTML (options, callback) {

  var https = require('https');


  https.get(options, function (response) {

    var incoming = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      incoming += data;
    });

    response.on('end', function () {
      callback(incoming);
    });

  });

}

module.exports = getHTML;