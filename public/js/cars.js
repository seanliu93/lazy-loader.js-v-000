"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var count = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var mystr = "<div class=\"row\">";
  $.each(carsJSON, function(index, car) {
    mystr += "<div class=\"col-md-4 car\">";
    mystr += "<h2>" + car.Make + "</h2>";
    mystr += "<p><strong>Model:</strong> " + car.Model + "</p>";
    mystr += "<p><strong>Year:</strong> " + car.Year + "</p>";
    mystr += "</div>";
  })
  mystr += "</div>";
  return mystr;
}


function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var formattedStr = formatCars(carsJSON);
  $("#cars").append(formattedStr);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = baseUrl + count + "/3";
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    },
    error: function(response) {
      $("body").text("There was an error with the request.");
    }
  });
  count += 1;
}