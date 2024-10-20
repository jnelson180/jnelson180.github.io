let pic = 1;

function nextBackground() {
  if (pic < 34) {
    pic++;
  } else {
    pic = 1;
  }
  document.getElementsByClassName("masthead")[0].style.background = `url(./img/${ pic }.jpg)`;
}

function prevBackground() {
  if (pic < 35 && pic > 0) {
    pic--;
  } else {
    pic = 34;
  }
  document.getElementsByClassName("masthead")[0].style.background = `url(./img/${ pic }.jpg)`;
}

function black() {
  const el = document.getElementsByClassName("masthead")[0];
  const className = "black";
  toggleClass(el, className);
}

function mask() {
  const el = document.getElementById("intro-div");
  const className = "mask";
  toggleClass(el, className);
}

function toggleClass(element, classToToggle) {
  if (element.classList.contains(classToToggle)) {
    element.classList.remove(classToToggle);
  } else {
    element.classList.add(classToToggle);
  }
}

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // project info
  var cardContainer = document.getElementById('cardContainer');
  var cardData = [
    {
      url: "https://codepen.io/JNelson180/pen/ggaOgL",
      title: "Local Weather App",
      description: "A basic local weather app.",
      skills: "JavaScript/ES6, HTML, CSS",
      image: "./img/weather.jpg"
    },
    // {
    //     url: "https://www.sunshinerising.net/",
    //     title: "Sunshine Rising Book Blog",
    //     description: "A WordPress based book blog with custom elements.",
    //     skills: "Wordpress, JavaScript, HTML, CSS, PHP"
    // },
    {
      url: "https://smurl-app.herokuapp.com/",
      title: "URL Shortener",
      description: "A URL shortener microservice used to return the client with an abbreviated URL from their input.",
      skills: "Javascript/ES6, Node.js, MongoDB, HTML, CSS",
      image: "./img/smurl.jpg"
    },
    {
      url: "http://codepen.io/JNelson180/full/gwaZKz",
      title: "Simon Says",
      description: "A Simon Says game mocked up in Javascript/HTML/CSS.",
      skills: "Javascript, jQuery, HTML, CSS",
      image: "./img/simon.jpg"
    },
    {
      url: "http://codepen.io/JNelson180/full/zBaNqy",
      title: "Javascript Calculator",
      description: "A basic calculator app.",
      skills: "Javascript, HTML, CSS",
      image: "./img/calc.jpg"
    },
    {
      url: "https://imglook.herokuapp.com/api/imagesearch/",
      title: "Image Search Metadata",
      description: "Provides JSON data of image search results.",
      skills: "Nodejs, Express, MongoDB, Javascript, HTML, CSS",
      image: "./img/imglook.jpg"
    },
    {
      url: "https://codepen.io/JNelson180/full/BpobRp/",
      title: "Javascript Piano",
      description: "Playable Javascript mini keyboard.",
      skills: "Javascript, HTML, CSS",
      image: "./img/piano.jpg"
    },
    {
      url: "https://metafile-js.herokuapp.com/",
      title: "File metadata microservice",
      description: "Upload a file to view its metadata",
      skills: "Nodejs, Javascript, Express, Bootstrap",
      image: "./img/metadata.jpg"
    },
    // {
    //     url: "https://codepen.io/JNelson180/full/JrbBWX/",
    //     title: "Flexbox Bookshelf",
    //     description: "Dynamically generated bookshelf based on Goodreads API data.",
    //     skills: "Nodejs, Express, Heroku, MongoDB, Javascript, HTML, CSS"
    // },
    // {
    //   url: "https://codepen.io/JNelson180/full/yOZJxQ/",
    //   title: "Motivational Quote Machine",
    //   description: "Motivational quote generator from external API.",
    //   skills: "Javascript, HTML, CSS",
    //   image: "../quote.jpg"
    // },
    {
      url: "https://codepen.io/JNelson180/pen/EWBzLB",
      title: "Flexbox Bookshelf",
      description: "A flexbox bookshelf based on Goodreads user info.",
      skills: "Javascript, HTML, CSS",
      image: "./img/bookshelf.jpg"
    },
    {
      url: "https://codepen.io/JNelson180/full/Wxaybg/",
      title: "Pomodoro Clock",
      description: "Basic pomodoro clock app",
      skills: "Javascript, HTML, CSS",
      image: "./img/pomodoro.jpg"
    },
    {
      url: "https://codepen.io/JNelson180/full/vKbrkv/",
      title: "Tic Tac Toe",
      description: "Javascript tic tac toe game.",
      skills: "Javascript, jQuery, HTML, CSS",
      image: "./img/tictactoe.jpg"
    }
  ];

  var createCard = function createCard(url, title, description, skills, image) {
    console.log({ image, title })
    const preview = image
      ? `<a href="${ url }" target="_blank"><img class="plain" src="${ image }" /></a>`
      : `<a href={url} target="_blank" class="plain"><iframe class="frame" scrolling="no" src={url}></iframe></a>`

    return `
      <div class="col-lg-12 portfolio-item">
        <div>
          <div class="card-body">
            ${ preview }
            <br />
            <h4 class="card-title">
              <a href="${url}">${title}</a>
            </h4>
            <p class="card-text">
              ${description}<br />
              ${skills}
            </p>
          </div>
        </div>
        <br />
      </div>
    `;
  };

  var cards = cardData.map(function (c) {
    return createCard(c.url, c.title, c.description, c.skills, c.image);
  });

  document.getElementById("projects").innerHTML=(String(cards).split(",").join(""));

  // document.getElementById("controls").innerHTML=`
  //   <button onclick="prevBackground()">prev</button>
  //   <button onclick="nextBackground()">next</button>
  //   <button onclick="black()">color</button>
  //   <button onclick="mask()">mask</button>
  //   <b>${ pic }<b>
  // `;

})(jQuery); // End of use strict

