function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require('https');


  https.get(requestOptions, function (response) {

    var incoming = [];

    response.setEncoding('utf8');

    response.on('data', function (data) {
      incoming.push(data);
    });

    response.on('end', function () {
      console.log(incoming.join(''));
    });

  });

}

getAndPrintHTML();