// documentation: http://goqr.me/api/doc/create-qr-code/
var margintwo = document.querySelector('#margintwo')
var marginthree = document.querySelector('#marginthree')
var body = document.querySelector('body');
var imageArea = document.querySelector('#imageArea');
var data = document.querySelector('#data');
var format = document.querySelector('#format');
var margin = document.querySelector('#margin')
var bgcolor = document.querySelector('#bgcolor')
var color = document.querySelector('#color')
var img = document.createElement('img');

var baseUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150';
var options = {
  color: '',
  bgcolor: '',
  margin: '',
  format: '',
  data: ''
};

format.addEventListener('change', function() {
  if (format.value == 'svg') {
    // hide the margin field
    margin.style.display = "none";
    margintwo.style.display = "none";
    marginthree.style.display = "none";
  } else {
    // show the margin field
    margin.style.display = "inline";
    margintwo.style.display = "block";
    marginthree.style.display = "inline";
  }
});

var fullUrl = baseUrl;


function createImage(src) {
  img.setAttribute('src', src);
  imageArea.appendChild(img);
}


function clearOptions() {
  
  options.data = ''; 
  options.format = '';
  options.margin = '';
  options.bgcolor = '';
  options.color = '';
  
 
  data.value = '';
  format.value = '';
  margin.value = '';
  bgcolor.value = '';
  color.value = '';
  
 
}


function buildRequest() {
  
  var keys = Object.keys(options);
  var values = Object.values(options);

  for (var i=0; i<keys.length; i++) {
    if (values[i] !== '') {
      fullUrl += '&' + keys[i] + '=' + values[i];
    }
  }
  
  console.log(fullUrl);
  
  createImage(fullUrl);
  
}





function grabValues() {
  options.data = data.value; 
  options.format = format.value;
  options.margin = margin.value;
  options.bgcolor = bgcolor.value;
  options.color = color.value;
  buildRequest();
  clearOptions();
}; 

