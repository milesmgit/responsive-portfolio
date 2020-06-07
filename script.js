


window.onload = function() {

  let body = document.getElementById('body');
  let header = document.getElementById('header');
  let slide = document.createElement('div');
  let buttonSlideBack = document.createElement('button');

  buttonSlideBack.id = "slideBackButton";
  buttonSlideBack.innerText = "<";
  body.appendChild(buttonSlideBack);
  buttonSlideBack.addEventListener('click', slideBack);

  function displayIntro() {
  header.innerHTML = '';
  header.appendChild(slide);
  slide.id = "slide";
  slide.innerHTML = `
    <div class="flex-nav">
      <div class="navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="gallery.html">Project Gallery</a></li>
          <li><a href="contact.html">Contact Me</a></li>
        </ul>
      </div>
      <div class="navbarBrand">
        <a href="index.html">
          <img src="img/matt-miles.jpeg" id="brand" width="100" height="100" class="d-inline-block align-center pic-brand" alt="" loading="lazy">
        </a>
      </div>
    </div>
  `

// function to hide the navigation and brand (this works in unison with css animations for id slideBack)
  }
  function slideBack() {
    if(slide.id === "slide"){
      slide.id = "slideBack";
      setTimeout(function(){
      slide.style.display = 'none';
      }, 2000);
      buttonSlideBack.innerText = ">";
      console.log('hello');
    }
    else if(slide.id === "slideBack"){
      slide.style.display = "block";
      displayIntro();
      slideBackButton.innerText = "<";
    }
    else
    console.log('error');


  }







  displayIntro();



}
