import "./styles/main.scss";
import api from "./api";
import {
  IAppState,
  IAnimationData,
  ICars,
  ICar,
  IWinner,
  IWinners,
} from "./types";
import svg from "./assets/svg/race-car-icon.svg";

interface ICarInfo {
  id: number;
  color: string;
  name: string;
  velocity?: number;
  duration?: number;
}

interface ICarsAnimationIds {
  [key: string]: number;
}

interface IRaceWinner {
  id: number;
  time: number;
}

const appState: IAppState = {
  cars: [],
  winners: [],
  currentCar: {
    data: null,
    animationId: null,
  },
};

const carsAnimationIds: ICarsAnimationIds = {};
const inputsCreateData = {
  name: "",
  color: "",
};

const inputsUpdateData = {
  name: "",
  color: "",
};
let winner: IRaceWinner | null;
let currentPage = 1;
let totalPages = 1;
let currentPageName = "Garage";
let isRace = false;
const globFunc = {
  updateCarsElements() {},
  updateWinnersElemement() {},
};
const { body } = document;
const main = document.createElement("main");
const wrapper = document.createElement("div");
main.classList.add("main");
wrapper.classList.add("wrapper");
body.append(main);
main.append(wrapper);
const deleteWinnerText = (): void => {
  const el = document.querySelector(".winners-text");
  (el as Element).remove();
};
const winnersText = (text: string): void => {
  const h2 = document.createElement("h2");
  h2.classList.add("winners-text");
  h2.innerText = text;
  main.append(h2);
  h2.addEventListener("click", deleteWinnerText);
};

const postWinner = async ({ id }: ICar, time: number): Promise<void> => {
  const response = await api.getWinner(id);
  if (response.ok) {
    const checkedWinner = await response.json();
    api.updateWinner({ id, wins: checkedWinner.wins + 1, time });
  } else {
    api.createWinnner({ id, wins: 1, time });
  }
};
const carStartAnimation = (
  id: number,
  { distance, velocity }: IAnimationData
): number => {
  const fps = Math.round(distance / velocity);
  const car = document.querySelector(`[data-car-id="${id}"]`) as HTMLElement;
  const seconds = Number((fps / 10).toFixed(2));
  const sec = Number((fps / 600).toFixed(2));
  const pr = Number((100 / seconds).toFixed(2));
  let frame = 0;
  function carDriveAnimation() {
    frame += pr;

    if (frame > 90 && !winner) {
      winner = { id, time: sec };
    }
    if (frame > 90 && winner && isRace) {
      const winCar = (appState.cars as ICars).find(
        (c) => c.id === (winner as IRaceWinner).id
      );
      postWinner(winCar as ICar, (winner as IRaceWinner).time);
      winnersText(
        `${winCar?.name} win in ${(winner as IRaceWinner).time} seconds`
      );
      isRace = false;
    }
    car.style.left = `${frame}%`;

    if (frame < 92)
      carsAnimationIds[id] = requestAnimationFrame(carDriveAnimation);
  }

  carsAnimationIds[id] = requestAnimationFrame(carDriveAnimation);
  return carsAnimationIds[id];
};

const startCar = async (id: number): Promise<void> => {
  const stopEl = document.querySelector(
    `[data-stop-car-id="${id}"]`
  ) as HTMLButtonElement;
  const startEl = document.querySelector(
    `[data-start-car-id="${id}"]`
  ) as HTMLButtonElement;
  startEl.disabled = true;
  let startResponse: IAnimationData;
  await api.startCarEngine(id).then((data) => {
    startResponse = data;
    carsAnimationIds[id] = carStartAnimation(id, startResponse);
    stopEl.disabled = false;
  });
  await api.driveCarStatus(id).then((data) => {
    if (data.status === 500) {
      cancelAnimationFrame(carsAnimationIds[id]);
    }
  });
};

const startRace = (): void => {
  winner = null;
  isRace = true;
  const carsData = [];

  if (Array.isArray(appState.cars)) {
    const cars: ICars = appState.cars as ICars;
    const fetchs = cars.map((car: ICar) => api.startCarEngine(car.id));
    Promise.allSettled(fetchs).then((responses) => {
      responses.forEach((res, index: number) => {
        const carId = cars[index].id;
        if (res.status === "fulfilled") {
          startCar(carId);
        }
        if (res.status === "rejected") {
          cancelAnimationFrame(carsAnimationIds[carId]);
        }
      });
    });
  }
};

const firmName = [
  "Acura",
  "Audi",
  "Alfa Romeo",
  "BMW",
  "Bentley",
  "Mercedes-Benz",
  "Volvo",
  "Volkswagen",
  "Toyota",
  "Ford",
  "Kia",
  "Skoda",
  "Saab",
  "Nissan",
  "Mazda",
  "Subary",
  "Porshe",
  "Lexus",
  "Tesla",
  "Jaxuar",
  "Maserati",
  "Honda",
  "Jeep",
  "Cadillac",
  "Chevrolete",
];

const modelsName = [
  "RX-7",
  "RAV-4",
  "LX470",
  "Mustang",
  "Corvet",
  "XJ-7",
  "GT3000",
  "MX-5",
  "Patrol",
  "LS",
  "Cherokee",
  "Imprezs",
  "Skyline",
  "Q7",
  "Q5",
  "TT",
  "K5",
  "S222",
  "CLS",
  "Focus",
];

const updatePageTitle = (title: string, carsCount: number, page: number) => {
  const titleElement = document.querySelector(".page-title") as HTMLElement;
  const pageElement = document.querySelector(".page-text") as HTMLElement;
  titleElement.innerText = `${title} (${carsCount})`;
  pageElement.innerText = `Page #${page}`;
};

const generateCars = () => {
  const firmLength = firmName.length;
  const modelsLength = modelsName.length;
  const randomFirm = Math.floor(Math.random() * (firmLength - 1) + 1);
  const randomModel = Math.floor(Math.random() * (modelsLength - 1) + 1);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const name = `${firmName[randomFirm]} ${modelsName[randomModel]}`;
  for (let i = 1; i <= 100; i += 1) {
    api.createCar({ name, color: randomColor });
  }
  setTimeout(() => {
    api.getCars().then((data) => {
      const headersCount = Number(data.headers.get("x-total-count"));
      updatePageTitle("Garage", headersCount, currentPage);
      return data.json();
    });
  }, 100);
};

const drawViewTitle = (
  view: HTMLElement,
  title: string,
  carsCount: number,
  page: number
): void => {
  const viewTitle = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  viewTitle.classList.add("view-title");
  h1.classList.add("page-title");
  p.classList.add("page-text");
  h1.innerText = `${title} (${carsCount})`;
  p.innerText = `Page #${page}`;
  viewTitle.append(h1, p);
  view.append(viewTitle);
};

const selectCarHandler = async (id: number): Promise<void> => {
  const updateEl = document.querySelector(
    ".update-car__button"
  ) as HTMLButtonElement;
  updateEl.disabled = false;
  const input = document.querySelector(
    ".update-car__input"
  ) as HTMLInputElement;
  const color = document.querySelector(
    ".update-car__color"
  ) as HTMLInputElement;
  const selectedCar = await api.getCar(id);
  appState.currentCar.data = selectedCar;
  inputsUpdateData.name = selectedCar.name;
  inputsUpdateData.color = selectedCar.color;
  input.value = selectedCar.name;
  color.value = selectedCar.color;
};

const stopCar = async (id: number): Promise<void> => {
  const car = document.querySelector(`[data-car-id="${id}"]`) as HTMLElement;
  const startEl = document.querySelector(
    `[data-start-car-id="${id}"]`
  ) as HTMLButtonElement;
  const stopEl = document.querySelector(
    `[data-stop-car-id="${id}"]`
  ) as HTMLButtonElement;
  cancelAnimationFrame(carsAnimationIds[id]);
  await api
    .stopCarEngine(id)
    .then(() => {
      car.style.left = `0%`;
      startEl.disabled = false;
      stopEl.disabled = true;
    })
    .finally(() => {
      car.style.left = `0%`;
      startEl.disabled = false;
      stopEl.disabled = true;
    });
};

const resetCars = (): void => {
  if (Array.isArray(appState.cars)) {
    (appState.cars as ICars).forEach((car) => {
      stopCar(car.id);
    });
  }
};

const drawGarageButtons = (view: HTMLElement): void => {
  const createCar = document.createElement("div");
  const updateCar = document.createElement("div");
  const createCarInput = document.createElement("input");
  const createCarColor = document.createElement("input");
  const updateCarInput = document.createElement("input");
  const updateCarColor = document.createElement("input");
  const createCarButton = document.createElement("button");
  const updateCarButton = document.createElement("button");
  const bottomButtons = document.createElement("div");
  const raceButton = document.createElement("button");
  const resetButton = document.createElement("button");
  const generateCarsButton = document.createElement("button");
  createCar.classList.add("create-car");
  updateCar.classList.add("update-car");
  createCarInput.classList.add("create-car__input");
  createCarColor.classList.add("create-car__color", "app__input-color");
  updateCarInput.classList.add("update-car__input");
  updateCarColor.classList.add("update-car__color", "app__input-color");
  createCarButton.classList.add("create-car__button", "app__button");
  updateCarButton.classList.add("update-car__button", "app__button");
  bottomButtons.classList.add("bottom-buttons");
  raceButton.classList.add("race-button", "app__button");
  resetButton.classList.add("reset-button", "app__button");
  generateCarsButton.classList.add("generate-cars-button", "app__button");
  createCarButton.innerText = "create car";
  createCarInput.setAttribute("name", "carName");
  createCarColor.setAttribute("type", "color");
  createCarColor.setAttribute("name", "carColor");
  updateCarButton.innerText = "update car";
  updateCarButton.disabled = true;
  updateCarInput.setAttribute("name", "updateCarName");
  updateCarColor.setAttribute("type", "color");
  updateCarColor.setAttribute("name", "updateCarColor");
  raceButton.innerText = "race";
  resetButton.innerText = "reset";
  generateCarsButton.innerText = "generate cars";
  createCar.append(createCarInput, createCarColor, createCarButton);
  updateCar.append(updateCarInput, updateCarColor, updateCarButton);
  bottomButtons.append(raceButton, resetButton, generateCarsButton);
  view.append(createCar, updateCar, bottomButtons);
  raceButton.addEventListener("click", startRace);
  resetButton.addEventListener("click", resetCars);
  generateCarsButton.addEventListener("click", generateCars);
  createCar.addEventListener("click", () =>
    api.createCar({
      name: inputsCreateData.name,
      color: inputsCreateData.color,
    })
  );
  createCarInput.addEventListener("input", () => {
    inputsCreateData.name = createCarInput.value;
  });
  createCarColor.addEventListener("change", () => {
    inputsCreateData.color = createCarColor.value;
  });
  updateCarButton.addEventListener("click", () => {
    if (appState.currentCar.data) {
      api.updateCar(appState.currentCar.data.id, {
        name: inputsUpdateData.name,
        color: inputsUpdateData.color,
      });
    }
    updateCarButton.disabled = true;
  });
  updateCarInput.addEventListener("input", (e) => {
    const input = e.target as HTMLInputElement;
    inputsUpdateData.name = input.value;
    updateCarInput.value = inputsUpdateData.name;
  });
  updateCarColor.addEventListener("change", (e) => {
    const input = e.target as HTMLInputElement;
    inputsUpdateData.color = input.value;
    updateCarColor.value = inputsUpdateData.color;
  });
};

const deleteCar = async (id: number) => {
  api.deleteCar(id);
  api.deleteWinner(id);
  globFunc.updateCarsElements();
};
const drawCarElement = (carInfo: ICarInfo): void => {
  const carsBody = document.querySelector(".cars");
  const carItem = document.createElement("div");
  const carButtons = document.createElement("div");
  const selectButton = document.createElement("button");
  const removeButton = document.createElement("button");
  const carsName = document.createElement("h2");
  const startStopButtons = document.createElement("div");
  const startButton = document.createElement("button");
  const stopButton = document.createElement("button");
  const carIcon = document.createElement("div");
  const roadBlock = document.createElement("div");
  const road = document.createElement("div");
  const car = document.createElement("div");
  const finishFlag = document.createElement("div");
  carItem.classList.add("car__item");
  carButtons.classList.add("car__buttons");
  selectButton.classList.add("select-button", "app__button");
  removeButton.classList.add("remove-button", "app__button");
  carsName.classList.add("cars-name");
  startStopButtons.classList.add("start-stop__buttons");
  startButton.classList.add("start-button", "app__button");
  stopButton.classList.add("stop-button", "app__button");
  carIcon.classList.add("car-icon");
  roadBlock.classList.add("roadBlock");
  road.classList.add("road");
  car.classList.add("car");
  finishFlag.classList.add("finish-flag");
  car.dataset.carId = String(carInfo.id);
  startButton.dataset.startCarId = String(carInfo.id);
  stopButton.dataset.stopCarId = String(carInfo.id);
  carIcon.innerHTML = svg;
  const icon = carIcon.children[0] as HTMLElement;
  icon.style.color = carInfo.color;
  selectButton.innerText = "select";
  removeButton.innerText = "remove";
  carsName.innerText = carInfo.name;
  startButton.innerText = "start";
  stopButton.innerText = "stop";
  stopButton.disabled = true;
  carItem.append(carButtons, startStopButtons, roadBlock);
  carButtons.append(selectButton, removeButton, carsName);
  startStopButtons.append(startButton, stopButton);
  car.append(carIcon);
  road.append(finishFlag);
  roadBlock.append(startStopButtons, car, road);
  carsBody?.append(carItem);

  selectButton.addEventListener("click", () => selectCarHandler(carInfo.id));
  removeButton.addEventListener("click", () => deleteCar(carInfo.id));
  startButton.addEventListener("click", async () => {
    startCar(carInfo.id);
  });
  stopButton.addEventListener("click", () => stopCar(carInfo.id));
};

const drawCars = (cars: ICars): void => {
  cars.forEach((car: ICar) => {
    drawCarElement(car);
  });
};
const updateCarsElements = () => {
  const garageBody = document.querySelector(".garage") as HTMLElement;
  const carsBody = document.querySelector(".cars");
  carsBody?.childNodes.forEach((element) => {
    element.remove();
  });
  api
    .getCars(currentPage, 7)
    .then((data) => {
      const headersCount = Number(data.headers.get("x-total-count"));
      updatePageTitle("Garage", headersCount, currentPage);
      return data.json();
    })
    .then((resBody) => {
      const cars = resBody;
      appState.cars = cars;
      drawCars(cars);
    });
};
globFunc.updateCarsElements = updateCarsElements;
const drawGaragePage = (): void => {
  currentPageName = "Garage";
  let totalItems = 1;
  const pageLimit = 7;
  const garageBody = document.createElement("section");
  const garageView = document.createElement("div");
  const carsBody = document.createElement("div");
  carsBody.classList.add("cars");
  garageBody.classList.add("garage");
  garageView.classList.add("view", "view__garage");
  drawGarageButtons(garageBody);
  const response = api.getCars();
  garageView.append(garageBody);
  wrapper.append(garageView);

  response
    .then((data) => {
      const headersCount = Number(data.headers.get("x-total-count"));
      totalItems = headersCount;
      drawViewTitle(garageBody, "Garage", headersCount, currentPage);

      return data.json();
    })
    .then((resBody) => {
      const cars = resBody;
      appState.cars = cars;
      totalPages = Math.ceil(totalItems / pageLimit);
      garageBody.append(carsBody);

      drawCars(cars);
    });
};

const drawWinnerElement = (winnerInfo: IWinner): HTMLElement => {
  let currentCar: ICar;
  const nameCol = document.createElement("td");
  const carCol = document.createElement("td");
  carCol.innerHTML = svg;
  const icon = carCol.children[0] as HTMLElement;
  api.getCar(winnerInfo.id).then((data) => {
    currentCar = data;
    nameCol.innerText = String(currentCar.name);
    icon.style.color = String(currentCar.color);
  });
  const row = document.createElement("tr");
  const numberCol = document.createElement("td");
  const winsCol = document.createElement("td");
  const timeCol = document.createElement("td");
  const carIcon = document.createElement("div");
  row.classList.add("table__row", "winners__item");
  numberCol.classList.add("table__col");
  carCol.classList.add("table__col");
  nameCol.classList.add("table__col");
  winsCol.classList.add("table__col");
  timeCol.classList.add("table__col");
  carIcon.classList.add("winner-icon");
  numberCol.innerText = String(winnerInfo.id);
  winsCol.innerText = String(winnerInfo.wins);
  timeCol.innerText = String(winnerInfo.time);

  row.append(numberCol, carCol, carCol, nameCol, winsCol, timeCol);
  return row;
};
const drawWinnersElement = (winners: IWinner[]): HTMLElement => {
  const winnersTableBody = document.createElement("tbody");
  winnersTableBody.classList.add("table__body", "winners__list");
  winners.forEach((win: IWinner) => {
    winnersTableBody.append(drawWinnerElement(win));
  });
  return winnersTableBody;
};

const updateWinnersElemement = () => {
  const winnersList = document.querySelector(".winners__list");
  const winnersElements = document.querySelectorAll(".winners__item");
  winnersElements.forEach((element) => {
    element.remove();
  });
  (appState.winners as IWinners).forEach((win: IWinner) => {
    winnersList?.append(drawWinnerElement(win));
  });
};

globFunc.updateWinnersElemement = updateWinnersElemement;
let closureSort = "id";
let order = "ASC";
const sortWinnersBy = async (sort: string) => {
  if (closureSort === sort) {
    if (order === "ASC") {
      order = "DESC";
    } else {
      order = "ASC";
    }
  }

  closureSort = sort;

  await api
    .getWinners(currentPage, 10, sort, order)
    .then((data) => {
      const headersCount = Number(data.headers.get("x-total-count"));
      updatePageTitle("Winners", headersCount, currentPage);
      return data.json();
    })
    .then((resBody) => {
      const winners = resBody;
      appState.winners = winners;
      updateWinnersElemement();
    });
};

const previousPage = () => {
  if (currentPage > 1) {
    currentPage -= 1;
    if (currentPageName === "Garage") {
      updateCarsElements();
    } else if (currentPageName === "Winners") {
      updateWinnersElemement();
    }
  }
};

const nextPage = () => {
  if (currentPage < totalPages) {
    currentPage += 1;
    if (currentPageName === "Garage") {
      updateCarsElements();
    } else if (currentPageName === "Winners") {
      updateWinnersElemement();
    }
  }
};
const drawPaginatorButtons = (): void => {
  const paginatorStopButtons = document.createElement("div");
  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");
  paginatorStopButtons.classList.add("paginator__stop-buttons");
  prevButton.classList.add("prev-button", "app__button");
  nextButton.classList.add("next-button", "app__button");
  prevButton.innerText = "prev";
  nextButton.innerText = "next";
  prevButton.addEventListener("click", () => previousPage());
  nextButton.addEventListener("click", () => nextPage());
  paginatorStopButtons.append(prevButton, nextButton);
  main.append(paginatorStopButtons);
};
const drawWinnersPage = (): void => {
  let totalItems = 1;
  const pageLimit = 7;
  currentPageName = "Winners";
  const winnersBody = document.createElement("section");
  const winnersView = document.createElement("div");
  const winnersTable = document.createElement("table");
  const winnersTableHeaders = document.createElement("thead");
  const winnersTableHeaderRow = document.createElement("tr");
  winnersBody.classList.add("winners");
  winnersView.classList.add("view", "view__winners");
  winnersTable.classList.add("winners__table");
  winnersTableHeaders.classList.add("table__headers");
  winnersTableHeaderRow.classList.add("table__row");
  winnersTableHeaders.append(winnersTableHeaderRow);
  const tableHeders = ["Number", "Car", "Name", "Wins", "Best time(seconds)"];
  tableHeders.forEach((header) => {
    const winnersTableHeader = document.createElement("th");
    winnersTableHeader.classList.add("table__header");
    winnersTableHeader.innerText = header;
    winnersTableHeaderRow.append(winnersTableHeader);
    if (header === "Wins") {
      winnersTableHeader.addEventListener("click", () => {
        sortWinnersBy("wins");
      });
      winnersTableHeader.classList.add("sortable-header");
    }
    if (header === "Best time(seconds)") {
      winnersTableHeader.addEventListener("click", () => {
        sortWinnersBy("time");
      });
      winnersTableHeader.classList.add("sortable-header");
    }
  });

  winnersView.append(winnersBody);
  winnersTable.append(winnersTableHeaders);
  wrapper.append(winnersView);

  api
    .getWinners()
    .then((data) => {
      const headersCount = Number(data.headers.get("x-total-count"));
      totalItems = headersCount;
      drawViewTitle(winnersBody, "Winners", headersCount, currentPage);
      winnersBody.append(winnersTable);

      return data.json();
    })
    .then((resBody) => {
      const winners = resBody;
      appState.winners = winners;
      totalPages = Math.ceil(totalItems / pageLimit);
      winnersTable.append(drawWinnersElement(winners));
    });
};

const switchPage = (name: string): void => {
  const views = document.querySelectorAll(".view");
  views.forEach((view) => view.remove());
  if (name === "garage") {
    drawGaragePage();
  } else if (name === "winners") {
    drawWinnersPage();
  }
};

const drawPageButtons = (): void => {
  const headerButtons = document.createElement("div");
  const garageButton = document.createElement("button");
  const winnersButton = document.createElement("button");
  headerButtons.classList.add("header-buttons");
  garageButton.classList.add("garage-button", "app__button");
  winnersButton.classList.add("winners-button", "app__button");
  garageButton.innerText = "garage";
  winnersButton.innerText = "winners";
  garageButton.addEventListener("click", () => switchPage("garage"));
  winnersButton.addEventListener("click", () => switchPage("winners"));
  headerButtons.append(garageButton, winnersButton);
  wrapper.append(headerButtons);
};

window.addEventListener("load", () => {
  drawPageButtons();
  drawGaragePage();
  drawPaginatorButtons();
});
