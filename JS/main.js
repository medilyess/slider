// Get Slider Items
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide =1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous & Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click On Previous & Next Buttons
nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;

// Next Slide Function
function nextSlide(){
    
    if (nextButton.classList.contains('disabled')) {

        // do nothing
        return false;

    }else{

        currentSlide++;
        thechecker();

    }

}

// Previous Slide Function
function prevSlide(){
    
    if (prevButton.classList.contains('disabled')) {

        // do nothing
        return false;

    }else{

        currentSlide--;
        thechecker();

    }

}

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created UL Element
paginationElement.setAttribute('id','pagination-ul');

// Create List Items Based On Slides Count
for (var i=1; i <= slidesCount; i++){

    // Create The Li
    var paginationItem= document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items To The Main Ul List
    paginationElement.appendChild(paginationItem)

}

// Add The Created Ul To The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created Ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination items
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through all bullets items
for (var i = 0; i < paginationBullets.length; i++) {
    
    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));

        thechecker();
    }

}

// Trigger the checker function
thechecker();

// Create The Checker Function
function thechecker(){

    // set the slide number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // remove all active classes
    removeAllActive();

    // set active class on current slide
    sliderImages[currentSlide-1].classList.add('active');

    // set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // check if the current slide is the first
    if (currentSlide == 1){

        // add disabled class on previous button
        prevButton.classList.add('disabled');

    }else{
        // remove disabled class from previous button
        prevButton.classList.remove('disabled');
    }

    // check if the current slide is the last
    if (currentSlide == slidesCount){

        // add disabled class on next button
        nextButton.classList.add('disabled');

    }else{
        // remove disabled class from next button
        nextButton.classList.remove('disabled');
    }

}

// remove all active classes from images and pagination bullets
function removeAllActive() {
    
    // Loop throufh images
    sliderImages.forEach(function(img){

        img.classList.remove('active');

    });

    // loop through pagination bullets
    paginationBullets.forEach(function(bullet){

        bullet.classList.remove('active');        

    });

}