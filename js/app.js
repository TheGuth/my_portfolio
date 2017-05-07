
const state = {
  currentProject: ['Cusine Quest', 'Fast Drunk', 'Dolthraki-X', 'Q-less'],
  projects: [
    {
      name: 'Cusine Quest',
      tech: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
      intro: "This app will take a user's location and their style of food to find the 20 closest top rated restaurants. The user has the option to either look through the results and picks a restaurant or click the \"Choose for Me\" button, which randomly pick a restaurant for you.",
      image1: 'img/Home-page-cuisine.png',
      image2: 'img/results-page-cuisine.png',
      challenges: "",
      github: "https://github.com/TheGuth/We-Choose-Where-to-Eat",
      liveVersion: "https://theguth.github.io/We-Choose-Where-to-Eat/",
    },
    {
      name: 'Q-less',
      version: 'web',
      webTech: ['React', 'Redux', 'Nodejs', 'express', 'mongodb', 'HTML', 'CSS'],
      mobileTech: ['React', 'Redux', 'React-Native', 'Native-base-io', 'Nodejs', 'express', 'mongodb'],
      intro: "Have you ever found yourself at a bar or club and just not been able to get your order in? Well this app was made exactly for this problem. <span></span> The app is built on a business to client interface, so that users can connect to a business, see their menu, and place an order. This app will help clients and save time and money for the business. The bartenders will be able to receive orders, keep track of them, increase their productivity, and enhance their tips.",
      webImage1: 'img/landing_page_qless_web.png',
      webImage2: 'img/business_dashboard_qless_web.png',
      mobileImage1: 'img/login_page_qless.png',
      mobileImage2: 'img/cart_page_qless.png',
      challenges: "",
      webGithub: "https://github.com/TheGuth/bar_service_app",
      webLiveVersion: "https://q-less.herokuapp.com/#/",
      mobileGithub: "https://github.com/TheGuth/Q-less",
      mobileLiveVersion: "https://appetize.io/app/b06g9gg17ceexjkcqaeckbywwm?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3",

    },
    {
      name: 'Dolthraki-X',
      tech: ['React', 'Redux', 'Nodejs', 'express', 'mongodb', 'HTML', 'CSS'],
      intro: "Dolthraki-X is a Language Learning app built using the paradigm of Spaced Repetition to facilitate quicker learning and stronger retention. The app features Dolthraki, a language from the television show Game of Thrones.",
      image1: 'img/Home-page-dolthraki.png',
      image2: 'img/question-page-dolthraki.png',
      challenges: "",
      github: "https://github.com/Jean-Luc19/spaced-rep",
      liveVersion: "https://dothraki-x.herokuapp.com/#/",
    },
  ]
};

function techDisplay(project) {
  if (project.tech) {
    project.tech.forEach((tech) => {
      $('.project-tech').append(
        `<li>${tech}</li>`
      );
    });
  } else {
    project.webTech.forEach((tech) => {
      $('.project-tech').append(
        `<li>${tech}</li>`
      );
    });
    project.mobileTech.forEach((tech) => {
      $('.project-tech-mobile').append(
        `<li>${tech}</li>`
      );
    });
  }
}

function displayProject(project) {
  if (project.name === 'Q-less') {
    $('.project-display').html(
      `<div class="project-content-display">
        <h2 class="project-title">${project.name}</h2>
        <h3>Web Version</h3>
        <ul class="project-tech">
        </ul>
        <div class="project-links">
          <button>
            <a class="project-github" href="${project.webGithub}">Github</a>
          </button>
          <button>
            <a class="project-liveversion" href="${project.webLiveVersion}">Demo</a>
          </button>
        </div>
        <h3>Mobile Version</h3>
        <ul class="project-tech-mobile">
        </ul>
        <div class="project-links">
          <button>
            <a class="project-github" href="${project.mobileGithub}">Github</a>
          </button>
          <button>
            <a class="project-liveversion" href="${project.mobileLiveVersion}">Demo</a>
          </button>
        </div>
        <div class="project-intro">
          <p class="project-intro-info">${project.intro}</p>
        </div>
        <div class="project-images">
          <h4>Web Images</h4>
          <img src="${project.webImage1}" alt="Home Page">
          <img src="${project.webImage2}" alt="Main Page">
        </div>
        <div class="project-images">
          <h4>Mobile Images</h4>
          <img src="${project.mobileImage1}" alt="Home Page">
          <img src="${project.mobileImage2}" alt="Main Page">
        </div>
      </div>`
    );
  } else {
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
        <div class="project-images">
          <img src="${project.image1}" alt="Home Page">
          <img src="${project.image2}" alt="Main Page">
        </div>
      </div>`
    );
  }
  techDisplay(project);
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
