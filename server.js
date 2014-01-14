var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = app.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
