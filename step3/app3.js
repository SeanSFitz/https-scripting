function getAndPrintHTML (options) {


  var https = require('https');


  https.get(options, function (response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML(requestOptions);