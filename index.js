var express = require('express');
var app = express();
var fs = require("fs");
var ejs = require('ejs');

app.get('/listUsers', function (req, res) {
   // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //     console.log( data );
   //     res.end( data );
   console.log("Request handler random was called.");
  res.writeHead(200, {"Content-Type": "application/json"});
  var otherArray = ["item1", "item2"];
  var otherObject = { item1: "item1val", item2: "item2val" };
  var json = JSON.stringify({ 
    anObject: otherObject, 
    anArray: otherArray, 
    another: "item"
  });
  res.end(JSON.stringify(otherObject));
  // res.end(JSON.stringify(otherObject.item2));
   // });
})

app.get('/floor-list', function (req, res) {
   // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //     console.log( data );
   //     res.end( data );
   console.log(req.query.name)
   var data = fs.readFileSync(__dirname +'/test.txt');
   console.log(data.toString())
   res.sendFile(__dirname + '/public_html/floorlist.html')
   // });
})

app.get('/floor-overview', function (req, res) {
   // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //     console.log( data );
   //     res.end( data );
   console.log(req.query.name)
   var data = fs.readFileSync(__dirname +'/test.txt');
   console.log(data.toString())
   res.sendFile(__dirname + '/public_html/flooroverview.html')
   // });
})

app.get('/', function (req, res) {

   res.sendFile(__dirname + '/public_html/index.html')

})

app.get('/network-log', function (req, res) {

   res.sendFile(__dirname + '/public_html/networkconfig.html')
})

// app.get('/network-config', function (req, res) {
// 	var json = {"objects":[{"type":"image","originX":"left","originY":"top","left":20,"top":30,"width":50,"height":50,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/networkconfig/server.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"},{"type":"image","originX":"left","originY":"top","left":20,"top":30,"width":50,"height":50,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/networkconfig/server.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}],"background":"","backgroundImage":{"type":"image","originX":"left","originY":"top","left":0,"top":0,"width":1084,"height":500,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/ground.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}}

//    res.sendFile(__dirname + '/public_html/networkconfig.html')

// })

app.get('/venue-activity', function (req, res) {

   res.sendFile(__dirname + '/public_html/venueactivity.html')

})

app.get('/venue-dashboard', function (req, res) {

   res.sendFile(__dirname + '/public_html/venuedashboard.html')
  
})

app.get('/venue-stats', function (req, res) {

   res.sendFile(__dirname + '/public_html/venuestats.html');

})

app.get('/activity', function (req, res) {

   res.sendFile(__dirname + '/public_html/activity.html');

})

// app.get('/test', function(req, res) {
//   res.render(__dirname + '/public_html/test');
// });
app.set('view engine', 'ejs');

app.get('/test', function(req, res) {
	// var json ="djjdjj"
	var json = '{"objects":[{"type":"image","originX":"left","originY":"top","left":20,"top":30,"width":50,"height":50,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/networkconfig/server.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"},{"type":"image","originX":"left","originY":"top","left":20,"top":30,"width":50,"height":50,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/networkconfig/server.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}],"background":"","backgroundImage":{"type":"image","originX":"left","originY":"top","left":0,"top":0,"width":1084,"height":500,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/ground.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}}';
    res.render(__dirname + '/public_html/test', {
        tagline: json
    });
});

app.get('/network-config', function(req, res) {
	var json = '{"objects":[{"type":"image","originX":"left","originY":"top","left":20,"top":30,"width":50,"height":50,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/networkconfig/server.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"},{"type":"image","originX":"left","originY":"top","left":20,"top":30,"width":50,"height":50,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/networkconfig/server.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}],"background":"","backgroundImage":{"type":"image","originX":"left","originY":"top","left":0,"top":0,"width":1084,"height":500,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://localhost:8081/images/ground.png","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}}';
    res.render(__dirname + '/public_html/networkconfig', {
        tagline: json
    });
});



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

app.use(express.static('public_html'));

// app.get('/process_get', function (req, res) {

//    // Prepare output in JSON format
//    response = {
//        first_name:req.query.first_name,
//        last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

