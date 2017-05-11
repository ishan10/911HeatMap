var express = require('express');
var router = express.Router();
var mongourl = "mongodb://cmpe280:cmpe280@ds137281.mlab.com:37281/cmpe280heatmap";
var MongoClient = require('mongodb').MongoClient;
var Twitter = require('twitter');

var accountSid = 'ACb4202c6fc6db123e65885cc15f0d7763';
var authToken = '8bd9fe10702b72c4a7d13bdc0d150f6b';
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/globe', function(req, res, next) {
    res.render('globe');
});

router.get('/tweet', function(req, res, next) {
    res.render('tweet');
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/register', function(req, res, next) {
    res.render('register');
});



router.get('/getData', function(req, res, next) {
    var data =  [{"date":"2016-05-07T23:14:54.586Z","visits":46},{"date":"2016-05-08T23:14:54.586Z","visits":44},{"date":"2016-05-10T23:14:54.586Z","visits":59},{"date":"2016-05-09T23:14:54.586Z","visits":59},{"date":"2016-05-11T23:14:54.586Z","visits":29},{"date":"2016-05-12T23:14:54.586Z","visits":57},{"date":"2016-05-14T23:14:54.586Z","visits":37},{"date":"2016-05-13T23:14:54.586Z","visits":45},{"date":"2016-05-15T23:14:54.586Z","visits":49},{"date":"2016-05-16T23:14:54.586Z","visits":41},{"date":"2016-05-17T23:14:54.586Z","visits":45},{"date":"2016-05-18T23:14:54.586Z","visits":69},{"date":"2016-05-19T23:14:54.586Z","visits":48},{"date":"2016-05-20T23:14:54.586Z","visits":66},{"date":"2016-05-21T23:14:54.586Z","visits":57},{"date":"2016-05-23T23:14:54.586Z","visits":56},{"date":"2016-05-22T23:14:54.586Z","visits":49},{"date":"2016-05-24T23:14:54.586Z","visits":75},{"date":"2016-05-26T23:14:54.586Z","visits":56},{"date":"2016-05-25T23:14:54.586Z","visits":66},{"date":"2016-05-27T23:14:54.586Z","visits":82},{"date":"2016-05-28T23:14:54.586Z","visits":52},{"date":"2016-05-29T23:14:54.586Z","visits":48},{"date":"2016-05-30T23:14:54.586Z","visits":56},{"date":"2016-05-31T23:14:54.586Z","visits":77},{"date":"2016-06-01T23:14:54.586Z","visits":69},{"date":"2016-06-02T23:14:54.586Z","visits":67},{"date":"2016-06-03T23:14:54.586Z","visits":86},{"date":"2016-06-04T23:14:54.586Z","visits":58},{"date":"2016-06-05T23:14:54.586Z","visits":90},{"date":"2016-06-06T23:14:54.586Z","visits":52},{"date":"2016-06-07T23:14:54.586Z","visits":92},{"date":"2016-06-08T23:14:54.586Z","visits":84},{"date":"2016-06-09T23:14:54.586Z","visits":64},{"date":"2016-06-10T23:14:54.586Z","visits":76},{"date":"2016-06-11T23:14:54.586Z","visits":81},{"date":"2016-06-12T23:14:54.586Z","visits":85},{"date":"2016-06-13T23:14:54.586Z","visits":82},{"date":"2016-06-14T23:14:54.586Z","visits":90},{"date":"2016-06-15T23:14:54.586Z","visits":61},{"date":"2016-06-16T23:14:54.586Z","visits":108},{"date":"2016-06-17T23:14:54.586Z","visits":70},{"date":"2016-06-18T23:14:54.586Z","visits":77},{"date":"2016-06-19T23:14:54.586Z","visits":70},{"date":"2016-06-20T23:14:54.586Z","visits":69},{"date":"2016-06-21T23:14:54.586Z","visits":112},{"date":"2016-06-22T23:14:54.586Z","visits":103},{"date":"2016-06-23T23:14:54.586Z","visits":105},{"date":"2016-06-24T23:14:54.586Z","visits":116},{"date":"2016-06-25T23:14:54.586Z","visits":99},{"date":"2016-06-26T23:14:54.586Z","visits":103},{"date":"2016-06-27T23:14:54.586Z","visits":102},{"date":"2016-06-28T23:14:54.586Z","visits":115},{"date":"2016-06-29T23:14:54.586Z","visits":95},{"date":"2016-06-30T23:14:54.586Z","visits":96},{"date":"2016-07-01T23:14:54.586Z","visits":93},{"date":"2016-07-02T23:14:54.586Z","visits":121},{"date":"2016-07-03T23:14:54.586Z","visits":116},{"date":"2016-07-04T23:14:54.586Z","visits":91},{"date":"2016-07-05T23:14:54.586Z","visits":88},{"date":"2016-07-06T23:14:54.586Z","visits":81},{"date":"2016-07-07T23:14:54.586Z","visits":92},{"date":"2016-07-08T23:14:54.586Z","visits":119},{"date":"2016-07-09T23:14:54.586Z","visits":122},{"date":"2016-07-10T23:14:54.586Z","visits":96},{"date":"2016-07-11T23:14:54.586Z","visits":129},{"date":"2016-07-12T23:14:54.586Z","visits":111},{"date":"2016-07-13T23:14:54.586Z","visits":139},{"date":"2016-07-14T23:14:54.586Z","visits":103},{"date":"2016-07-15T23:14:54.586Z","visits":112},{"date":"2016-07-16T23:14:54.586Z","visits":112},{"date":"2016-07-17T23:14:54.586Z","visits":130},{"date":"2016-07-18T23:14:54.586Z","visits":110},{"date":"2016-07-19T23:14:54.586Z","visits":139},{"date":"2016-07-20T23:14:54.586Z","visits":121},{"date":"2016-07-21T23:14:54.586Z","visits":139},{"date":"2016-07-22T23:14:54.586Z","visits":130},{"date":"2016-07-23T23:14:54.586Z","visits":143},{"date":"2016-07-24T23:14:54.586Z","visits":145},{"date":"2016-07-25T23:14:54.586Z","visits":111},{"date":"2016-07-26T23:14:54.586Z","visits":107},{"date":"2016-07-27T23:14:54.586Z","visits":145},{"date":"2016-07-28T23:14:54.586Z","visits":142},{"date":"2016-07-29T23:14:54.586Z","visits":123},{"date":"2016-07-30T23:14:54.586Z","visits":153},{"date":"2016-07-31T23:14:54.586Z","visits":130},{"date":"2016-08-01T23:14:54.586Z","visits":143},{"date":"2016-08-02T23:14:54.586Z","visits":135},{"date":"2016-08-03T23:14:54.586Z","visits":108},{"date":"2016-08-04T23:14:54.586Z","visits":117},{"date":"2016-08-05T23:14:54.586Z","visits":155},{"date":"2016-08-06T23:14:54.586Z","visits":167},{"date":"2016-08-07T23:14:54.586Z","visits":132},{"date":"2016-08-08T23:14:54.586Z","visits":142},{"date":"2016-08-09T23:14:54.586Z","visits":131},{"date":"2016-08-10T23:14:54.586Z","visits":124},{"date":"2016-08-11T23:14:54.586Z","visits":166},{"date":"2016-08-12T23:14:54.586Z","visits":175},{"date":"2016-08-13T23:14:54.586Z","visits":131},{"date":"2016-08-14T23:14:54.586Z","visits":130},{"date":"2016-08-15T23:14:54.586Z","visits":137},{"date":"2016-08-16T23:14:54.586Z","visits":172},{"date":"2016-08-17T23:14:54.586Z","visits":177},{"date":"2016-08-18T23:14:54.586Z","visits":178},{"date":"2016-08-19T23:14:54.586Z","visits":146},{"date":"2016-08-20T23:14:54.586Z","visits":139},{"date":"2016-08-21T23:14:54.586Z","visits":129},{"date":"2016-08-22T23:14:54.586Z","visits":158},{"date":"2016-08-23T23:14:54.586Z","visits":156},{"date":"2016-08-24T23:14:54.586Z","visits":147},{"date":"2016-08-25T23:14:54.586Z","visits":139},{"date":"2016-08-26T23:14:54.586Z","visits":139},{"date":"2016-08-27T23:14:54.586Z","visits":148},{"date":"2016-08-28T23:14:54.586Z","visits":133},{"date":"2016-08-29T23:14:54.586Z","visits":182},{"date":"2016-08-30T23:14:54.586Z","visits":141},{"date":"2016-08-31T23:14:54.586Z","visits":179},{"date":"2016-09-01T23:14:54.586Z","visits":139},{"date":"2016-09-02T23:14:54.586Z","visits":181},{"date":"2016-09-03T23:14:54.586Z","visits":170},{"date":"2016-09-04T23:14:54.586Z","visits":183},{"date":"2016-09-05T23:14:54.586Z","visits":191},{"date":"2016-09-06T23:14:54.586Z","visits":153},{"date":"2016-09-07T23:14:54.586Z","visits":188},{"date":"2016-09-08T23:14:54.586Z","visits":151},{"date":"2016-09-09T23:14:54.586Z","visits":190},{"date":"2016-09-10T23:14:54.586Z","visits":182},{"date":"2016-09-11T23:14:54.586Z","visits":200},{"date":"2016-09-12T23:14:54.586Z","visits":208},{"date":"2016-09-13T23:14:54.586Z","visits":182},{"date":"2016-09-14T23:14:54.586Z","visits":166},{"date":"2016-09-15T23:14:54.586Z","visits":164},{"date":"2016-09-16T23:14:54.586Z","visits":208},{"date":"2016-09-17T23:14:54.586Z","visits":218},{"date":"2016-09-18T23:14:54.586Z","visits":215},{"date":"2016-09-19T23:14:54.586Z","visits":180},{"date":"2016-09-20T23:14:54.586Z","visits":181},{"date":"2016-09-21T23:14:54.586Z","visits":188},{"date":"2016-09-22T23:14:54.586Z","visits":188},{"date":"2016-09-23T23:14:54.586Z","visits":162},{"date":"2016-09-24T23:14:54.586Z","visits":217},{"date":"2016-09-25T23:14:54.586Z","visits":164},{"date":"2016-09-26T23:14:54.586Z","visits":163},{"date":"2016-09-27T23:14:54.586Z","visits":188},{"date":"2016-09-28T23:14:54.586Z","visits":174},{"date":"2016-09-29T23:14:54.586Z","visits":220},{"date":"2016-09-30T23:14:54.586Z","visits":173},{"date":"2016-10-01T23:14:54.586Z","visits":214},{"date":"2016-10-02T23:14:54.586Z","visits":174},{"date":"2016-10-03T23:14:54.586Z","visits":170},{"date":"2016-10-04T23:14:54.586Z","visits":201},{"date":"2016-10-05T23:14:54.586Z","visits":241},{"date":"2016-10-06T23:14:54.586Z","visits":213},{"date":"2016-10-07T23:14:54.586Z","visits":180},{"date":"2016-10-08T23:14:54.586Z","visits":175},{"date":"2016-10-09T23:14:54.586Z","visits":240},{"date":"2016-10-10T23:14:54.586Z","visits":195},{"date":"2016-10-11T23:14:54.586Z","visits":190},{"date":"2016-10-12T23:14:54.586Z","visits":213},{"date":"2016-10-13T23:14:54.586Z","visits":198},{"date":"2016-10-14T23:14:54.586Z","visits":192},{"date":"2016-10-15T23:14:54.586Z","visits":187},{"date":"2016-10-16T23:14:54.586Z","visits":230},{"date":"2016-10-17T23:14:54.586Z","visits":199},{"date":"2016-10-18T23:14:54.586Z","visits":233},{"date":"2016-10-19T23:14:54.586Z","visits":210},{"date":"2016-10-20T23:14:54.586Z","visits":244},{"date":"2016-10-21T23:14:54.586Z","visits":219},{"date":"2016-10-22T23:14:54.586Z","visits":256},{"date":"2016-10-23T23:14:54.586Z","visits":194},{"date":"2016-10-24T23:14:54.586Z","visits":215},{"date":"2016-10-25T23:14:54.586Z","visits":247},{"date":"2016-10-26T23:14:54.586Z","visits":204},{"date":"2016-10-27T23:14:54.586Z","visits":201},{"date":"2016-10-28T23:14:54.586Z","visits":247},{"date":"2016-10-29T23:14:54.586Z","visits":203},{"date":"2016-10-30T23:14:54.586Z","visits":261},{"date":"2016-10-31T23:14:54.586Z","visits":268},{"date":"2016-11-01T23:14:54.586Z","visits":230},{"date":"2016-11-02T23:14:54.586Z","visits":262},{"date":"2016-11-03T23:14:54.586Z","visits":238},{"date":"2016-11-04T23:14:54.586Z","visits":224},{"date":"2016-11-05T23:14:54.586Z","visits":221},{"date":"2016-11-07T00:14:54.586Z","visits":234},{"date":"2016-11-08T00:14:54.586Z","visits":232},{"date":"2016-11-09T00:14:54.586Z","visits":232},{"date":"2016-11-10T00:14:54.586Z","visits":270},{"date":"2016-11-11T00:14:54.586Z","visits":230},{"date":"2016-11-12T00:14:54.586Z","visits":285},{"date":"2016-11-13T00:14:54.586Z","visits":275},{"date":"2016-11-14T00:14:54.586Z","visits":281},{"date":"2016-11-15T00:14:54.586Z","visits":230},{"date":"2016-11-16T00:14:54.586Z","visits":280},{"date":"2016-11-17T00:14:54.586Z","visits":285},{"date":"2016-11-18T00:14:54.586Z","visits":241},{"date":"2016-11-19T00:14:54.586Z","visits":247},{"date":"2016-11-20T00:14:54.586Z","visits":279},{"date":"2016-11-21T00:14:54.586Z","visits":295},{"date":"2016-11-22T00:14:54.586Z","visits":223},{"date":"2016-11-23T00:14:54.586Z","visits":293},{"date":"2016-11-24T00:14:54.586Z","visits":286},{"date":"2016-11-25T00:14:54.586Z","visits":250},{"date":"2016-11-26T00:14:54.586Z","visits":284},{"date":"2016-11-27T00:14:54.586Z","visits":239},{"date":"2016-11-28T00:14:54.586Z","visits":302},{"date":"2016-11-29T00:14:54.586Z","visits":284},{"date":"2016-11-30T00:14:54.586Z","visits":304},{"date":"2016-12-01T00:14:54.586Z","visits":277},{"date":"2016-12-02T00:14:54.586Z","visits":247},{"date":"2016-12-03T00:14:54.586Z","visits":248},{"date":"2016-12-04T00:14:54.586Z","visits":237},{"date":"2016-12-05T00:14:54.586Z","visits":244},{"date":"2016-12-06T00:14:54.586Z","visits":287},{"date":"2016-12-07T00:14:54.586Z","visits":309},{"date":"2016-12-08T00:14:54.586Z","visits":282},{"date":"2016-12-09T00:14:54.586Z","visits":303},{"date":"2016-12-10T00:14:54.586Z","visits":296},{"date":"2016-12-11T00:14:54.586Z","visits":260},{"date":"2016-12-12T00:14:54.586Z","visits":313},{"date":"2016-12-13T00:14:54.586Z","visits":313},{"date":"2016-12-14T00:14:54.586Z","visits":306},{"date":"2016-12-15T00:14:54.586Z","visits":253},{"date":"2016-12-16T00:14:54.586Z","visits":258},{"date":"2016-12-17T00:14:54.586Z","visits":292},{"date":"2016-12-18T00:14:54.586Z","visits":276},{"date":"2016-12-19T00:14:54.586Z","visits":277},{"date":"2016-12-20T00:14:54.586Z","visits":287},{"date":"2016-12-21T00:14:54.586Z","visits":253},{"date":"2016-12-22T00:14:54.586Z","visits":298},{"date":"2016-12-23T00:14:54.586Z","visits":287},{"date":"2016-12-24T00:14:54.586Z","visits":279},{"date":"2016-12-25T00:14:54.586Z","visits":331},{"date":"2016-12-26T00:14:54.586Z","visits":333},{"date":"2016-12-27T00:14:54.586Z","visits":273},{"date":"2016-12-28T00:14:54.586Z","visits":309},{"date":"2016-12-29T00:14:54.586Z","visits":287},{"date":"2016-12-30T00:14:54.586Z","visits":317},{"date":"2016-12-31T00:14:54.586Z","visits":274},{"date":"2017-01-01T00:14:54.586Z","visits":292},{"date":"2017-01-02T00:14:54.586Z","visits":261},{"date":"2017-01-03T00:14:54.586Z","visits":346},{"date":"2017-01-04T00:14:54.586Z","visits":312},{"date":"2017-01-05T00:14:54.586Z","visits":339},{"date":"2017-01-06T00:14:54.586Z","visits":313},{"date":"2017-01-07T00:14:54.586Z","visits":275},{"date":"2017-01-08T00:14:54.586Z","visits":332},{"date":"2017-01-09T00:14:54.586Z","visits":333},{"date":"2017-01-10T00:14:54.586Z","visits":285},{"date":"2017-01-11T00:14:54.586Z","visits":277},{"date":"2017-01-12T00:14:54.586Z","visits":354},{"date":"2017-01-13T00:14:54.586Z","visits":352},{"date":"2017-01-14T00:14:54.586Z","visits":305},{"date":"2017-01-15T00:14:54.586Z","visits":282},{"date":"2017-01-16T00:14:54.586Z","visits":295},{"date":"2017-01-17T00:14:54.586Z","visits":307},{"date":"2017-01-18T00:14:54.586Z","visits":297},{"date":"2017-01-19T00:14:54.586Z","visits":351},{"date":"2017-01-20T00:14:54.586Z","visits":311},{"date":"2017-01-21T00:14:54.586Z","visits":291},{"date":"2017-01-22T00:14:54.586Z","visits":341},{"date":"2017-01-23T00:14:54.586Z","visits":361},{"date":"2017-01-24T00:14:54.586Z","visits":335},{"date":"2017-01-25T00:14:54.586Z","visits":311},{"date":"2017-01-26T00:14:54.586Z","visits":335},{"date":"2017-01-27T00:14:54.586Z","visits":371},{"date":"2017-01-28T00:14:54.586Z","visits":305},{"date":"2017-01-29T00:14:54.586Z","visits":338},{"date":"2017-01-30T00:14:54.586Z","visits":344},{"date":"2017-01-31T00:14:54.586Z","visits":315},{"date":"2017-02-01T00:14:54.586Z","visits":347},{"date":"2017-02-02T00:14:54.586Z","visits":332},{"date":"2017-02-03T00:14:54.586Z","visits":300},{"date":"2017-02-04T00:14:54.586Z","visits":376},{"date":"2017-02-05T00:14:54.586Z","visits":321},{"date":"2017-02-06T00:14:54.586Z","visits":305},{"date":"2017-02-07T00:14:54.586Z","visits":342},{"date":"2017-02-08T00:14:54.586Z","visits":319},{"date":"2017-02-09T00:14:54.586Z","visits":308},{"date":"2017-02-10T00:14:54.586Z","visits":357},{"date":"2017-02-11T00:14:54.586Z","visits":307},{"date":"2017-02-12T00:14:54.586Z","visits":385},{"date":"2017-02-13T00:14:54.586Z","visits":310},{"date":"2017-02-14T00:14:54.586Z","visits":333},{"date":"2017-02-15T00:14:54.586Z","visits":386},{"date":"2017-02-16T00:14:54.586Z","visits":394},{"date":"2017-02-17T00:14:54.586Z","visits":375},{"date":"2017-02-18T00:14:54.586Z","visits":351},{"date":"2017-02-19T00:14:54.586Z","visits":365},{"date":"2017-02-20T00:14:54.586Z","visits":321},{"date":"2017-02-21T00:14:54.586Z","visits":387},{"date":"2017-02-22T00:14:54.586Z","visits":383},{"date":"2017-02-23T00:14:54.586Z","visits":408},{"date":"2017-02-24T00:14:54.586Z","visits":333},{"date":"2017-02-25T00:14:54.586Z","visits":333},{"date":"2017-02-26T00:14:54.586Z","visits":346},{"date":"2017-02-27T00:14:54.586Z","visits":378},{"date":"2017-02-28T00:14:54.586Z","visits":413},{"date":"2017-03-01T00:14:54.586Z","visits":349},{"date":"2017-03-02T00:14:54.586Z","visits":322},{"date":"2017-03-03T00:14:54.586Z","visits":322},{"date":"2017-03-04T00:14:54.586Z","visits":340},{"date":"2017-03-05T00:14:54.586Z","visits":329},{"date":"2017-03-06T00:14:54.586Z","visits":371},{"date":"2017-03-07T00:14:54.586Z","visits":366},{"date":"2017-03-08T00:14:54.586Z","visits":386},{"date":"2017-03-09T00:14:54.586Z","visits":363},{"date":"2017-03-10T00:14:54.586Z","visits":381},{"date":"2017-03-11T00:14:54.586Z","visits":379},{"date":"2017-03-12T00:14:54.586Z","visits":360},{"date":"2017-03-12T23:14:54.586Z","visits":403},{"date":"2017-03-13T23:14:54.586Z","visits":330},{"date":"2017-03-14T23:14:54.586Z","visits":412},{"date":"2017-03-15T23:14:54.586Z","visits":428},{"date":"2017-03-16T23:14:54.586Z","visits":377},{"date":"2017-03-17T23:14:54.586Z","visits":348},{"date":"2017-03-18T23:14:54.586Z","visits":376},{"date":"2017-03-19T23:14:54.586Z","visits":377},{"date":"2017-03-20T23:14:54.586Z","visits":437},{"date":"2017-03-21T23:14:54.586Z","visits":404},{"date":"2017-03-22T23:14:54.586Z","visits":350},{"date":"2017-03-23T23:14:54.586Z","visits":365},{"date":"2017-03-24T23:14:54.586Z","visits":379},{"date":"2017-03-25T23:14:54.586Z","visits":351},{"date":"2017-03-26T23:14:54.586Z","visits":403},{"date":"2017-03-27T23:14:54.586Z","visits":436},{"date":"2017-03-28T23:14:54.586Z","visits":375},{"date":"2017-03-29T23:14:54.586Z","visits":387},{"date":"2017-03-30T23:14:54.586Z","visits":421},{"date":"2017-03-31T23:14:54.586Z","visits":378},{"date":"2017-04-01T23:14:54.586Z","visits":359},{"date":"2017-04-02T23:14:54.586Z","visits":413},{"date":"2017-04-03T23:14:54.586Z","visits":355},{"date":"2017-04-04T23:14:54.586Z","visits":450},{"date":"2017-04-05T23:14:54.586Z","visits":408},{"date":"2017-04-06T23:14:54.586Z","visits":407},{"date":"2017-04-07T23:14:54.586Z","visits":356},{"date":"2017-04-08T23:14:54.586Z","visits":415},{"date":"2017-04-09T23:14:54.586Z","visits":448},{"date":"2017-04-10T23:14:54.586Z","visits":398},{"date":"2017-04-11T23:14:54.586Z","visits":367},{"date":"2017-04-12T23:14:54.586Z","visits":406},{"date":"2017-04-13T23:14:54.586Z","visits":462},{"date":"2017-04-14T23:14:54.586Z","visits":389},{"date":"2017-04-15T23:14:54.586Z","visits":444},{"date":"2017-04-16T23:14:54.586Z","visits":430},{"date":"2017-04-17T23:14:54.586Z","visits":453},{"date":"2017-04-18T23:14:54.586Z","visits":367},{"date":"2017-04-19T23:14:54.586Z","visits":427},{"date":"2017-04-20T23:14:54.586Z","visits":396},{"date":"2017-04-21T23:14:54.586Z","visits":446},{"date":"2017-04-22T23:14:54.586Z","visits":401},{"date":"2017-04-23T23:14:54.586Z","visits":444},{"date":"2017-04-24T23:14:54.586Z","visits":415},{"date":"2017-04-25T23:14:54.586Z","visits":470},{"date":"2017-04-26T23:14:54.586Z","visits":432},{"date":"2017-04-27T23:14:54.586Z","visits":410},{"date":"2017-04-28T23:14:54.586Z","visits":474},{"date":"2017-04-29T23:14:54.586Z","visits":439},{"date":"2017-04-30T23:14:54.586Z","visits":423},{"date":"2017-05-01T23:14:54.586Z","visits":435},{"date":"2017-05-02T23:14:54.586Z","visits":491},{"date":"2017-05-03T23:14:54.586Z","visits":399},{"date":"2017-05-04T23:14:54.586Z","visits":426},{"date":"2017-05-05T23:14:54.586Z","visits":424},{"date":"2017-05-06T23:14:54.586Z","visits":399},{"date":"2017-05-07T23:14:54.586Z","visits":469}];

    res.send(JSON.stringify(data));
});


router.post('/register1', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var zipcode = req.body.zip;
    var mobile = req.body.mobile;
    MongoClient.connect(mongourl,function (err,db) {

        if(err)
            throw err;
        db.collection("users").insert({"email" : email, "password" : password, "zipcode" : zipcode,"mobile" : mobile},{w:1},function (err,result) {
            if (err){
                console.log("Error");
            }
            else{
                res.send({"data" : 200});
            }
        });
    })

});

router.post('/logincheck', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    MongoClient.connect(mongourl,function (err,db) {

        if(err)
            throw err;
        db.collection("users").findOne({"email" : email}, function(err, document) {
           if(err)
           {
               res.send({"data" : false});
           }
            if(document != null)
           {
                if(document.email.trim() === email.trim()){
                 output = true;
                 res.send({"data" : true});
               }
                else
               {
                res.send({"data" : false});
               }
           }
           else{
                res.send({"data" : false});
            }


        });
    });



});


router.post('/sendAlert', function(req, res, next) {

    var zip = req.body.zip;
    var message = req.body.message;
    MongoClient.connect(mongourl,function (err,db) {

        if(err)
            throw err;
        /*db.collection("users").find({}, function(err, document) {
            console.log(document);

        });*/
        db.collection("users").find({"zipcode" : zip}).toArray(function(err, results){
            // output all records
            for (var i = 0; i < results.length;i++)
            {
                //console.log(results[i]);
                client.messages.create({
                    to: results[i].mobile,
                    from: "+12014845605",
                    body: message
                    //mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
                }, function(err, message) {
                    console.log(message.sid + "sucess send");
                });
            }
        });
    })


    /*client.messages.create({
        to: "+16692387574",
        from: "+12014845605",
        body: "test message in progress",
        //mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
    }, function(err, message) {
        console.log(message.sid + "sucess send");
    });*/
});

router.get('/getTweets', function(req, res, next) {
    var client = new Twitter({
        consumer_key: '7Zsd2xkYFTNcyTUdLZLTGhaPp',
        consumer_secret: 'm8ON50IXFy2xBLCPJa56JuCBBroGVGvrwCT8dsq5MIV9nDubfx',
        access_token_key: '791446091140964352-AjYeLO3zBwStzhuR0BvM8v25uiiJ2e9',
        access_token_secret: 'iWbUZ9Pu8YHt5hW2iJMbKfAeL7GeBbLgns9Euy84TihZ2'
    });
var streamdata = [];
var count = 0;
    var stream = client.stream('statuses/filter', {track: 'crime'});
    stream.on('data', function(event) {
        console.log(event.text);

        count++;
        streamdata.push({"data" : event.text});
        if (count == 5) {
            stream.destroy();
            res.send({"data" : streamdata});
        }
        //stream.destroy();


    });

    stream.on('error', function(error) {
        throw error;
    });
});


module.exports = router;
