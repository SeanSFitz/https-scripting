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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);