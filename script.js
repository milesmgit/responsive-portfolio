


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
  homeLink.class = "responsiveLink";
  homeLink.innerHTML = "Home";
  homeLink.href = "#header";
  li1.appendChild(homeLink);

  let li2 = document.createElement('li');
  li2.id = "li2";

  ul.appendChild(li2);
  let galleryLink = document.createElement('a');
  galleryLink.className = "responsiveLink";
  galleryLink.innerHTML = "Gallery";
  galleryLink.href = "#header";
  li2.appendChild(galleryLink);

  let li3 = document.createElement('li');
  li3.id = "li3";

  ul.appendChild(li3);
  let credentialsLink = document.createElement('a');
  credentialsLink.className = "responsiveLink";
  credentialsLink.innerHTML = "Credentials";
  credentialsLink.href = "#header";
  li3.appendChild(credentialsLink);

  let li4 = document.createElement('li');
  li4.id = "li4";

  ul.appendChild(li4);
  let contactLink = document.createElement('a');
  contactLink.className = "responsiveLink";
  contactLink.innerHTML = "Contact Me";
  contactLink.href = "#header";
  li4.appendChild(contactLink);

  let divNavBarBrand = document.createElement('div');
  divNavBarBrand.className = "navbarBrand";
  divNavBarBrand.innerHTML = `
    <a href="index.html">
      <img src="img/matt-miles.jpeg" id="brand" width="100" height="100" class="d-inline-block align-center pic-brand" alt="" loading="lazy">
    </a>
  `

  divFlex.appendChild(divNavBarBrand);


  homeLink.addEventListener('click', displayIntro);
  galleryLink.addEventListener('click', displayGallery);
  credentialsLink.addEventListener('click', displayCredentials);
  contactLink.addEventListener('click', displayContact);


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
    body.style.height = "800px";
  }, 2000);



  }

  // function to hide the navigation and brand (this works in unison with css animations for id slideBack)
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
                    <div class="topPlacement">
                      <button class="toTopButton"><a class="top" href="#header">Top</a></button>
                    </div>
                    `
                    body.style.height = "2300px";



  }


  function displayCredentials() {
    setTimeout(function() {
      wrapper.innerHTML = `
        <div id="main-flex">
          <a href="https://drive.google.com/file/d/1M9dmvrO5BQi0DyKjvHGpD6t-doLqf1wG/view?usp=sharing" target="_blank">
            <div class="card">
              <div class="resources"><p>Resume</p><img src="img/google-drive.jpeg"  alt="Matthew Miles: Resume" width="75" height="75" title="Click to view/download resume (Google Drive):  https://drive.google.com/file/d/1-tlYJYkcMLbY3jegKX5seRLQ8ff6mQgM/view?usp=sharing"></div>
            </div>
          </a>
          <a href="https://linkedin.com/in/matthew-miles-code-louisville" target="_blank">
            <div class="card">
              <div class="resources"><p>LinkedIn Profile</p><img src="img/linked.jpeg"  alt="Matthew Miles: Linked-In Profile" width="75" height="75" title="Click to view my Linked-In Profile:  https://linkedin.com/in/matthew-miles-code-louisville"></div>
            </div>
          </a>
          <a href="https://github.com/milesmgit?tab=repositories" target="_blank">
            <div class="card">
              <div class="resources"><p>GitHub Profile</p><img src="img/github.png"  alt="Matthew Miles: GitHub" width="75" height="75" title="Click to view GitHub Profile:  https://github.com/milesmgit?tab=repositories"></div>
            </div>
          </a>
        </div>
        <div class="topPlacement">
          <button class="toTopButton"><a class="top" href="#header">Top</a></button>
        </div>`
      body.style.height = "1200px";
    }, 1000);


  }

  function displayGallery() {
    setTimeout(function() {
      wrapper.innerHTML = `
        <div id="main-flex">
        <div class="horizontal-flex-div">
          <h4>Project Gallery</h4><h6>Tap image to visit the GitHub repository.  There you will find a link to the project demo if applicable.</h6>
            <div class="parentDiv">
              <div class="project scale"><p>JavaScript: Matthew Miles - Portfolio Site</p><a href="https://github.com/milesmgit/responsive-portfolio" target="_blank"><img src="img/responsive.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Portfolio Site" width="300" height="200" title="JavaScript: - Matthew Miles - Portfolio Site"></a></div>
              <div class="project scale"><p>React: Noobx-Cube - Quiz Game</p><a href="https://github.com/milesmgit/noobx-cube" target="_blank"><img src="img/noobx-thumb.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Noobx Cube Project" width="300" height="200" title="React: Noobx-Cube - Quiz Game"></a></div>
              <div class="project scale"><p>JavaScript: Tic-Tac-Toe Animated - Game</p><a href="https://github.com/milesmgit/tic-tac-toe-1-animated" target="_blank"><img src="img/tic-tac-toe.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Tic Tac Toe" width="300" height="200" title="JavaScript/HTML/CSS: Tic-Tac-Toe-Animated - Game"></a></div>
              <div class="project scale"><p>JavaScript: Meal Profiler - Meal Nutrition Calculator</p><a href="https://github.com/milesmgit/milesmgit.github.io" target="_blank"><img src="img/meal-profiler-javascript.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Meal Profiler JavaScript" width="300" height="200" title="JavaScript/HTML/CSS: Meal-Profiler - Nutrition Calculator"></a></div>
            </div>
            <div class="parentDiv">
              <div class="project scale"><p>JavaScript: 3D Tic-Tac-Toe - Game</p><a href="https://github.com/milesmgit/tic-tac-toe-refactored-3d" target="_blank"><img src="img/tic-tac-toe-2.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Tic Tac Toe 2" width="300" height="200" title="JavaScript/HTML/CSS: Tic-Tac-Toe-3d - Animated  Zoom out to the max for this, as I did not know how to scale down the cube when I made this. I will update later."></a></div>
              <div id="instruction" class="project scale" title="Hover a small project square to see it on the bigger rotating cube. Click the smaller project square for GitHub repo and link to project demo." width="300" height="200">Hover Me for Instructions</div>
              <div class="project scale"><p>C#/SQL/ASP.NET: Meal Profiler - Nutrition Calculator w/Database</p><a href="https://github.com/milesmgit/Profiler" target="_blank"><img src="img/detailedResults.PNG" onmouseover="rollover(this)" onmouseout="rollout()" alt="Meal Profiler C#" width="300" height="200" title="C#/Razor/SQL/Asp.Net: Meal-Profiler - Nutrition Calculator With Database"></a></div>
            </div>
            <div class="parentDiv">
              <div class="project scale"><p>HTML: Haiku - Static Website</p><a href="https://github.com/milesmgit/Code-Louisville-Capstone-Project" target="_blank"><img src="img/haiku.PNG" onmouseover="rollover(this)" onmouseout="rollout()" alt="Haiku HTML" width="300" height="200" title="JavaScript/HTML/CSS: Haiku - Static Website with Gimp Designed Homepage"></a></div>
              <div class="project scale"><p>HTML: New Roots - Static Website</p><a href="https://github.com/milesmgit/Code-Louisville-Capstone-Project-3" target="_blank"><img src="img/new-roots.PNG" onmouseover="rollover(this)" onmouseout="rollout()" alt="New Roots HTML" width="300" height="200" title="JavaScript/HTML/CSS: New Roots - Static Webpage"></a></div>
              <div class="project scale"><p>C#: Equipment Catalogue - Console App using JSON Persisted Data</p><a href="https://github.com/milesmgit/Equipment-Catalogue" target="_blank"><img src="img/equipment.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Equipment Catalogue C# Console" width="300" height="200" title="C#: Equipment-Catalogue - Console Software utilizing JSON to store data persistently."></a></div>
            </div>
        </div> <!-- end horizontal-flex-div -->
        </div>
        <div class="topPlacement">
          <button class="toTopButton"><a class="top" href="#header">Top</a></button>
        </div>`
      body.style.height = "3100px";
    }, 1000);


  }

  function displayContact() {
    setTimeout(function() {
      wrapper.innerHTML = `
        <div id="main-flex">
        <div class="horizontal-flex-div">
          <h4>Contact Me</h4>
          <h6><a href="mailto:milesm427@gmail.com">Email: milesm427@gmail.com</a></h6>
          <h6>Cell: 502.822.8709</h6>

        </div> <!-- end horizontal-flex-div -->
        </div>
        `
      body.style.height = "800px";
    }, 1000);


  }

  displayIntro();


}
