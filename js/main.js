const buttons = document.querySelectorAll('input[type="radio"]');
const workCurrent = document.querySelector("#work-current");
const workPrevious = document.querySelector("#work-previous");
const playCurrent = document.querySelector("#play-current");
const playPrevious = document.querySelector("#play-previous");
const studyCurrent = document.querySelector("#study-current");
const studyPrevious = document.querySelector("#study-previous");
const exerciseCurrent = document.querySelector("#exercise-current");
const exercisePrevious = document.querySelector("#exercise-previous");
const socialCurrent = document.querySelector("#social-current");
const socialPrevious = document.querySelector("#social-previous");
const selfcareCurrent = document.querySelector("#selfcare-current");
const selfcarePrevious = document.querySelector("#selfcare-previous");

const displayData = (time, data) => {
  workCurrent.innerHTML =
    data[0].timeframes[time].current === 1
      ? `${data[0].timeframes[time].current}hr`
      : `${data[0].timeframes[time].current}hrs`;
  workPrevious.innerHTML =
    data[0].timeframes[time].previous === 1
      ? `${data[0].timeframes[time].previous}hr`
      : `${data[0].timeframes[time].previous}hrs`;
  playCurrent.innerHTML =
    data[1].timeframes[time].current === 1
      ? `${data[1].timeframes[time].current}hr`
      : `${data[1].timeframes[time].current}hrs`;
  playPrevious.innerHTML =
    data[1].timeframes[time].previous === 1
      ? `${data[1].timeframes[time].previous}hr`
      : `${data[1].timeframes[time].previous}hrs`;
  studyCurrent.innerHTML =
    data[2].timeframes[time].current === 1
      ? `${data[2].timeframes[time].current}hr`
      : `${data[2].timeframes[time].current}hrs`;
  studyPrevious.innerHTML =
    data[2].timeframes[time].previous === 1
      ? `${data[2].timeframes[time].previous}hr`
      : `${data[2].timeframes[time].previous}hrs`;
  exerciseCurrent.innerHTML =
    data[3].timeframes[time].current === 1
      ? `${data[3].timeframes[time].current}hr`
      : `${data[3].timeframes[time].current}hrs`;
  exercisePrevious.innerHTML =
    data[3].timeframes[time].previous === 1
      ? `${data[3].timeframes[time].previous}hr`
      : `${data[3].timeframes[time].previous}hrs`;
  socialCurrent.innerHTML =
    data[4].timeframes[time].current === 1
      ? `${data[4].timeframes[time].current}hr`
      : `${data[4].timeframes[time].current}hrs`;
  socialPrevious.innerHTML =
    data[4].timeframes[time].previous === 1
      ? `${data[4].timeframes[time].previous}hr`
      : `${data[4].timeframes[time].previous}hrs`;
  selfcareCurrent.innerHTML =
    data[5].timeframes[time].current === 1
      ? `${data[5].timeframes[time].current}hr`
      : `${data[5].timeframes[time].current}hrs`;
  selfcarePrevious.innerHTML =
    data[5].timeframes[time].previous === 1
      ? `${data[5].timeframes[time].previous}hr`
      : `${data[5].timeframes[time].previous}hrs`;
};

const fetchData = async () => {
  try {
    const res = await fetch("js/data.json");
    data = await res.json();
    displayData("weekly", data);
  } catch (e) {
    console.log("something went wrong!", e);
  }
};

fetchData();

buttons.forEach((button) => {
  button.addEventListener("change", () => {
    if (button.id === "daily") {
      displayData(button.id, data);
    } else if (button.id === "weekly") {
      displayData(button.id, data);
    } else if (button.id === "monthly") {
      displayData(button.id, data);
    }
  });
});
