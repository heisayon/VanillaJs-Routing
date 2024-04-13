const mainPage = document.getElementById("app");
const route = (event) => {
  event.preventDefault();
  window.history.pushState(null, null, event.target.href);
  handleLocation();
};

const routes = {
  404: "/404.html",
  "/": "/index.html",
  "/about": "/about.html",
  "/bye": "/bye.html",
};
const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const data = await fetch(route).then((data) => data.text());
  mainPage.innerHTML = data;
};

window.route = route;
window.onpopstate = handleLocation;

handleLocation();
