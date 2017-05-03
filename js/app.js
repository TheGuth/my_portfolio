
const state = {
  currentProject: ['Cusine Quest', 'Fast Drunk', 'Dolthraki-X', 'Q-less'],
  projects: [
    {
      name: 'Cusine Quest',
      tech: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
      intro: "This app will take a user's location, and style of food and find the 20 closest and best rated restaurants. The user then has the option to either, look through the results to pick a restaurant, or click the choose for me button, which the app randomly pick a restaurant for you to go to.",
      image1: 'img/Home-page-cuisine.png',
      image2: 'img/results-page-cuisine.png',
      challenges: "",
      github: "https://github.com/TheGuth/We-Choose-Where-to-Eat",
      liveVersion: "https://theguth.github.io/We-Choose-Where-to-Eat/",
    },
    {
      name: 'Q-less Web',
      tech: ['React', 'Redux', 'Nodejs', 'express', 'mongodb', 'HTML', 'CSS'],
      intro: "Have you ever found yourself at a bar or club, and just not been able to get your order in? Well this app was built exactly for this problem. <span></span> The app is built on a business to client interface, so that users can connect to a business and see their menu to make orders. This app will help not only users, but also save time and money for the business. The bartenders will be able to receive orders and keep track of them, this way they can increase their productivity and their tips.",
      image1: 'img/landing_page_qless_web.png',
      image2: 'img/business_dashboard_qless_web.png',
      challenges: "",
      github: "https://github.com/TheGuth/bar_service_app",
      liveVersion: "https://vast-earth-24706.herokuapp.com/#/",
    },
    {
      name: 'Dolthraki-X',
      tech: ['React', 'Redux', 'Nodejs', 'express', 'mongodb', 'HTML', 'CSS'],
      intro: "Dolthraki-X is an language learning app built using the paradigm of Spaced Repition to facilitate quicker learning and stronger retention. The app features Dolthraki a language from the tv show Game of Thrones.",
      image1: 'img/Home-page-dolthraki.png',
      image2: 'img/question-page-dolthraki.png',
      challenges: "",
      github: "https://github.com/Jean-Luc19/spaced-rep",
      liveVersion: "https://dothraki-x.herokuapp.com/#/",
    },
    {
      name: 'Q-less Mobile',
      tech: ['React', 'Redux', 'React-Native', 'Native-base-io', 'Nodejs', 'express', 'mongodb'],
      intro: "Continuing from the Web version we knew that most client users would be using this application from their phone. We built the app for use on both ios and android devices. The app itself features very similer user interface to the full web application. The main goal of this application is to make it easy for a user to connect to a business and order from their menu.",
      image1: 'img/login_page_qless.png',
      image2: 'img/cart_page_qless.png',
      challenges: '',
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
