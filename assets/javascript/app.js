// Initial array of Industries
var industries = [
  "Building",
  "Skyscrapper",
  "Robot",
  "Robotics",
  "Space",
  "Spaceship",
  "Space Shuttle",
  "Car",
  "Truck",
  "Automotive",
  "Motorcyle",
  "Computer",
  "Computer Science",
  "Coding",
  "Hacking",
  "Camera",
  "Photography",
  "Airline",
  "Airplane",
  "Aircraft",
  "Boat",
  "Bridge",
  "Civil Engineering",
  "Farm",
  "Farming",
  "Manufacturing",
  "Pharmacy",
  "pharmaceutical",
  "Doctor"
];

//not sure how to pause the gif if I am pulling it
// This is the data response for still image
// var imageUrlstill = response.data.image_original_still
// function pauseGif(){
//   var imageUrlstill = response.data.image_original_still
//   console.log(response);
//   // // Creating and storing an image tag
//   var Image = $("<img>");

//   // Setting the catImage src attribute to imageUrl
//   Image.attr("src", imageUrl);
//   Image.attr("alt", "Image");

//   // Prepending the Image to the images div
//   $("#images").prepend(Image);
// }


// Function for dumping the JSON content for each button into the div
function displayIndustryInfo() {
  var industry = $(this).attr("data-name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=UOKdWD2F7dHczSqJE41qtLPtg7dS5fpM=" + industry + "&rating=G";
  
    $.ajax({
    url: queryURL,
    crossDomain: true,
    method: "GET"
  }).then(function(response) {
    // Saving the image_original_url property
    //var imageUrl = response.data.image_original_url;
    var imageUrl = response.data_rating.image_original_url;
    console.log(response);
    // // Creating and storing an image tag
    var Image = $("<img>");

    // Setting the catImage src attribute to imageUrl
    Image.attr("src", imageUrl);
    Image.attr("alt", "Image");

    // Prepending the Image to the images div
    $("#images").prepend(Image);
    //$("#images").text(JSON.stringify(response));
    $("#images").on("click", ".image", displayIndustryInfo);
    
  });
}

// Function for displaying industry data
function renderButtons() {
  // Deleting the buttons prior to adding new industries
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of industries
  for (var i = 0; i < industries.length; i++) {
    // Then dynamically generating buttons for each indusry in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of industry to our button
    a.addClass("industry");
    // Adding a data-attribute
    a.attr("data-name", industries[i]);
    // Providing the initial button text
    a.text(industries[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-Industry").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var industry = $("#Industry-input")
    .val()
    .trim();

  // Adding the industry from the textbox to our array
  industries.push(industry);
  console.log(industries);

  // Calling renderButtons which handles the processing of our industry array
  renderButtons();
});

// Function for displaying the industry info
// Using $(document).on instead of $(".industry").on to add event listeners to dynamically generated elements
$(document).on("click", ".industry", displayIndustryInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
