const dateContainer = document.querySelector(".js-date"),
  clockTitle = dateContainer.querySelector("h1"),
  dateTitle = dateContainer.querySelector("h3");

function getTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  dateTitle.innerText = `${year}/${month < 10 ? `0${month}` : month}/${
    date < 10 ? `0${date}` : date
  }`;
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
