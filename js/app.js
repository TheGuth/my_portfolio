

const state = {
  currentProject: ['Cusine Quest', 'Fast Drunk', 'Dolthraki-X', 'Q-less'],
  projects: [
    {
      name: 'Cusine Quest',
      tech: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
      intro: "This app will take a user's location, and style of food they like and find the 20 closest / best rated restaurants near you. The user then has the option to look through the results to pick a restaurant to go to, or click the choose for me button, to have the app randomly pick a restaurant for you to go to.",
      image1: 'img/Home-page-cuisine.png',
      image2: 'img/results-page-cuisine.png',
      challenges: "The hardest parts of this project were two fold. The first was getting yelp's api to talk to me and making sure I was authenticated for access. The second was that I had a slight delay, before rendering my page results, and had to come up with a work around.",
      github: "https://github.com/TheGuth/We-Choose-Where-to-Eat",
      liveVersion: "https://theguth.github.io/We-Choose-Where-to-Eat/",
    },
    {
      name: 'Q-less Web',
      tech: ['React', 'Redux', 'Nodejs', 'express', 'mongodb', 'HTML', 'CSS'],
      intro: "This app was built, because of a common problem that occurs when going out to a bar or club, and you have to fight the crowd to even order a drink. This app focuses on the business to client interaction, and provides a platform for business to create a menu and also receive orders for those menu items from clients.",
      image1: 'img/landing_page_qless_web.png',
      image2: 'img/business_dashboard_qless_web.png',
      challenges: "The hardest part of this project was the creation of a feature where a user can order a drink and have it immediately populate on the business dashboard",
      github: "https://github.com/TheGuth/bar_service_app",
      liveVersion: "https://vast-earth-24706.herokuapp.com/#/",
    },
    {
      name: 'Dolthraki-X',
      tech: ['React', 'Redux', 'Nodejs', 'express', 'mongodb', 'HTML', 'CSS'],
      intro: "Dolthraki-X is an language learning app built using the paradigm of Spaced Repition to facilitate quicker learning and stronger retention. The app features Dolthraki a language from the tv show Game of Thrones.",
      image1: 'img/Home-page-dolthraki.png',
      image2: 'img/question-page-dolthraki.png',
      challenges: "The biggest challenge was implementing the spaced repetition algorithm on the server side so that we could update memory values for each question for each user, allowing for future statistical analysis of questions and how users perform on each question.",
      github: "https://github.com/Jean-Luc19/spaced-rep",
      liveVersion: "https://dothraki-x.herokuapp.com/#/",
    },
    {
      name: 'Q-less Mobile',
      tech: ['React', 'Redux', 'React-Native', 'Native-base-io', 'Nodejs', 'express', 'mongodb'],
      intro: "Continuing from the Web version we knew that most client users would be using this application from their phone. We built the app for use on both ios and android devices. The app itself features very similer user interface to the full web application. The main goal of this application is to make it easy for a user to connect to a business and order from their menu.",
      image1: 'img/login_page_qless.png',
      image2: 'img/cart_page_qless.png',
      challenges: 'The main challenge with developing in react-native was just learning the differences between a mobile platform and a web one. I think the main learning curves were styling and routing through various pages, after I figured out the nuances it was smooth sailing from there on out. ',
      github: 'https://github.com/TheGuth/Q-less',
      liveVersion: "",
    },
  ]
};

function techDisplay(techArray) {
  techArray.forEach((tech) => {
    $('.project-tech').append(
      `<li>${tech}</li>`
    );
  });
}

function displayProject(project) {
  $('.project-display').html(
    `<div class="project-content-display">
      <h2 class="project-title">${project.name}</h2>
      <ul class="project-tech">
      </ul>
      <div class="project-links">
        <button>
          <a class="project-github" href="${project.github}">Github</a>
        </button>
        <button>
          <a class="project-liveversion" href="${project.liveVersion}">Demo</a>
        </button>
      </div>
      <div class="project-intro">
        <p class="project-intro-info">${project.intro}</p>
      </div>
      <div class="project-challenges">
        <p class="project-challenges-info">${project.challenges}</p>
      </div>
      <div class="project-images">
        <img src="${project.image1}" alt="Home Page">
        <img src="${project.image2}" alt="Main Page">
      </div>
    </div>`
  );
  techDisplay(project.tech);
}

function initializeEventListeners(state) {
  $('.project-list li').on('click', function(event) {
    const index = $(this).index();
    $('.project-list li').removeClass('currentProject');
    $(this).addClass('currentProject');
    displayProject(state.projects[index]);
  });
}

function initialDisplay(state) {
  $('.project-list li:first-child').addClass('currentProject');
}

$(function() {
  initializeEventListeners(state);
  initialDisplay(state);
});
