


window.onload = function() {

  let body = document.getElementById('body');
  let header = document.getElementById('header');
  let slide = document.createElement('div');
  let buttonPlacement = document.getElementById('buttonPlacement');
  let buttonSlideBack = document.createElement('button');
  let landingPage = document.getElementById('landingPage');

  buttonSlideBack.id = "slideBackButton";
  buttonSlideBack.innerText = "Bio";
  buttonPlacement.appendChild(buttonSlideBack);
  buttonSlideBack.addEventListener('click', slideBack);

  // building a nav and adding event listeners to the links so that I can build a one-page responsive javaScript site.

  let divFlex = document.createElement('div');
  divFlex.className = "flex-nav";

  slide.appendChild(divFlex);

  let divNavigation = document.createElement('div');
  divNavigation.className = "navigation";

  divFlex.appendChild(divNavigation);



  let ul = document.createElement('ul');
  ul.id = "nav";

  divNavigation.appendChild(ul);

  let li1 = document.createElement('li');
  li1.id = "li1";

  ul.appendChild(li1);
  let homeLink = document.createElement('a');
  homeLink.className = "responsiveLink";
  homeLink.innerHTML = "Home";
  li1.appendChild(homeLink);

  let li2 = document.createElement('li');
  li2.id = "li2";

  ul.appendChild(li2);
  let galleryLink = document.createElement('a');
  galleryLink.class = "responsiveLink";
  galleryLink.innerHTML = "Gallery";
  li2.appendChild(galleryLink);

  let li3 = document.createElement('li');
  li3.id = "li3";

  ul.appendChild(li3);
  let credentialsLink = document.createElement('a');
  credentialsLink.class = "responsiveLink";
  credentialsLink.innerHTML = "Credentials";
  li3.appendChild(credentialsLink);

  let li4 = document.createElement('li');
  li4.id = "li4";

  ul.appendChild(li4);
  let contactLink = document.createElement('a');
  contactLink.class = "responsiveLink";
  contactLink.innerHTML = "Contact Me";
  li4.appendChild(contactLink);

  let divNavBarBrand = document.createElement('div');
  divNavBarBrand.class = "navbarBrand";
  divNavBarBrand.innerHTML = `
    <a href="index.html">
      <img class="navbarBrand" src="img/matt-miles.jpeg" id="brand" width="100" height="100" class="d-inline-block align-center pic-brand" alt="" loading="lazy">
    </a>
  `

  divFlex.appendChild(divNavBarBrand);


  homeLink.addEventListener('click', displayIntro);
  // galleryLink.addEventListener('click', displayGallery);
  credentialsLink.addEventListener('click', displayCredentials);
  // contactLink.addEventListener('click', displayContact);


slide.id = "slide";
  header.appendChild(slide);


  function displayIntro() {
    slide.id = "slide";



  console.log(slide.innerHTML);
  setTimeout(function(){
    landingPage.innerHTML = `
      <p class="headline1">MATTHEW MILES</p>
      <P class="headline2">DEVELOPER</p>
    `
  }, 2000);


// function to hide the navigation and brand (this works in unison with css animations for id slideBack)
  }
  function slideBack() {
    if(slide.id === "slide"){
      slide.id = "slideBack";
      aboutMe.style.display = "block";
      aboutMe.id = "aboutMe";
      displayBio();
      setTimeout(function(){
      slide.style.display = 'none';
      buttonSlideBack.innerText = "Menu";
      }, 2000);

      console.log('hello');
    }
    else if(slide.id === "slideBack"){
      slide.style.display = "block";
      setTimeout(function(){
      aboutMe.style.display = 'none';
      slideBackButton.innerText = "Bio";
      }, 2000);
      displayIntro();

      aboutMe.id = "aboutMeBack";
    }
    else
    console.log('error');


  }


  let wrapper = document.getElementById('landingPage');
  let aboutMe = document.createElement('div');

  function displayBio() {
    wrapper.innerHTML = '';
    wrapper.appendChild(aboutMe);
    aboutMe.id = "aboutMe";
    aboutMe.innerHTML = `<h1 id='bioH1'>Bio</h1>
                    <p class='bioP1'>Matthew Miles is from Louisville, Ky U.S.A and currently lives in the downtown area. The freetime in his youth was spent playing sports; basketball,
                                  football, baseball, softball, soccer, and track being the most popular.  He also enjoyed bowling and playing chess. He played varsity basketball and soccer for his alma mater, Spalding University;
                                  however, after the start of the second season, he had an accident forcing him to give up playing competitive sports.</p>

                                  <p class="bioP1">He made the best of his new limitations and began hitting the books harder.  Eventually he earned his CompTIA A+ certification, and went on to study programming at a local
                                  programming school named Code Louisville.  He studied front end technologies such as JavaScript, CSS, and HTML.  He also studied back end technologies
                                  such as C#, ASP.NET, and SQL Database.  He completed three programming tracks and moved on to a software engineering immersive called Louisville
                                  Skills as taught by General Assembly and sponsored by a local software firm named Interapt.</p>

                                  <p class="bioP1">He studied front end technologies like JavaScript, CSS, HTML, and REACT, and backend technologies such as NodeJS, MongoDB, and Express.  In addition he learned to work effectively in teams and improved his soft skills considerably.
                                  He also learned about the version control software git, and became proficient in using it in combination with GitHub to store multiple versions of his project work.
                                  Matthew has thus far completed 8 personal projects and has caught the programming bug as of late.  He hopes to one day find a position where he can work remotely at least
                                  part of the work week.</p>

                                  <p class="bioP1">Matthew is a graduate of Spalding University in Louisville, KY and graduated with a 3.4/4.0 G.P.A.  He earned a Bachelor's of Science in Business Administration.</p>

                                  <p class="bioP1">Matthew currently works for Interapt as a software engineering apprentice, but due to the novel COVID-19 virus, most of the company was repurposed to help
                                  Humana transition the workforce to work from home.</p>

                                  <p class="bioP1">Matthew has been promoted twice in three months and now works in escalation, a specilized position in the IT department, where he constantly looks for issues that need to be brought to Major Incident specialists' attention so that Humana can mitigate losses in monetary
                                  terms and decreased member/agent satisfaction due to massive outages affecting many people or critical applications/software.

                    </p>
                    `


  }


  function displayCredentials() {
    wrapper.innerHTML = `
      <div id="main-flex">
        <div class="card">
          <div class="resources"><p>Resume</p><a href="https://drive.google.com/file/d/1-tlYJYkcMLbY3jegKX5seRLQ8ff6mQgM/view?usp=sharing" target="_blank"><img src="img/google-drive.jpeg"  alt="Matthew Miles: Resume" width="100" height="100" title="Click to view/download resume (Google Drive):  https://drive.google.com/file/d/1-tlYJYkcMLbY3jegKX5seRLQ8ff6mQgM/view?usp=sharing"></a></div>
        </div>
        <div class="card">
          <div class="resources"><p>LinkedIn Profile</p><a href="https://linkedin.com/in/matthew-miles-code-louisville" target="_blank"><img src="img/linked.jpeg"  alt="Matthew Miles: Linked-In Profile" width="100" height="100" title="Click to view my Linked-In Profile:  https://linkedin.com/in/matthew-miles-code-louisville"></a></div>
        </div>
        <div class="card">
          <div class="resources"><p>GitHub Profile</p><a href="https://github.com/milesmgit?tab=repositories" target="_blank"><img src="img/github.png"  alt="Matthew Miles: GitHub" width="100" height="100" title="Click to view GitHub Profile:  https://github.com/milesmgit?tab=repositories"></a></div>
        </div>
        <div class="card">
          <div class="resources"><p>Bio</p><img id="matt-bio" src="img/matt-miles.jpeg"  onclick="displayBio()" alt="Matthew Miles: Bio" width="100" height="100" title="Click to view Bio:  https://github.com/milesmgit?tab=repositories"></a></div>
        </div>
      </div>
      <div class="topPlacement">
        <button id="toTopButton"><a id="top" href="#header">Top</a></button>
      </div>`
    body.style.height = "1500px";

  }


  displayIntro();


}





//
// let body = document.getElementById('body');
// let header = document.getElementById('header');
// let slide = document.createElement('div');
// let buttonPlacement = document.getElementById('buttonPlacement');
// let buttonSlideBack = document.createElement('button');
// let landingPage = document.getElementById('landingPage');
//
// buttonSlideBack.id = "slideBackButton";
// buttonSlideBack.innerText = "Bio";
// buttonPlacement.appendChild(buttonSlideBack);
// buttonSlideBack.addEventListener('click', slideBack);
//
// function displayIntro() {
//
// header.innerHTML = '';
// header.appendChild(slide);
// slide.id = "slide";
// slide.innerHTML = `
//   <div class="flex-nav">
//     <div class="navigation">
//       <ul>
//         <li><a href="index.html">Home</a></li>
//         <li><a onclick="gallery()">Project Gallery</a></li>
//         <li><a href="contact.html">Contact Me</a></li>
//       </ul>
//     </div>
//     <div class="navbarBrand">
//       <a href="index.html">
//         <img src="img/matt-miles.jpeg" id="brand" width="100" height="100" class="d-inline-block align-center pic-brand" alt="" loading="lazy">
//       </a>
//     </div>
//   </div>
// `
