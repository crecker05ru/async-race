import { ICar, IWinner, StartStop } from "./types";

const BASE_URL = "http://localhost:3000/";
const GARAGE_ENDPOINT = "garage";
const ENGINE_ENDPOINT = "engine";
const WINNERS_ENDPOINT = "winners";
const getCars = async (_page = 1, _limit = 7) => {
  const response = await fetch(
    `${BASE_URL}${GARAGE_ENDPOINT}?${new URLSearchParams({
      _page: String(_page),
      _limit: String(_limit),
    })}`,
    {
      method: "GET",
    }
  );
  // const body = await response.json();
  // return body;
  return response;
};

const getCar = async (id: number): Promise<ICar> => {
  const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}/${id}`, {
    method: "GET",
  });
  const body = await response.json();
  return body;
};

type CreateCar = { name: string; color: string };
const createCar = async ({ name, color }: CreateCar) => {
  const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, color }),
  });
  return response;
};

const deleteCar = async (id: number) => {
  const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  const body = await response.json();
  return body;
};

const updateCar = async (id: number, { name, color }: CreateCar) => {
  const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, color }),
  });
  const body = await response.json();
  return body;
};

const startCarEngine = async (id: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}${ENGINE_ENDPOINT}?${new URLSearchParams({
        id: String(id),
        status: StartStop.start,
      })}`,
      {
        method: "PATCH",
      }
    );
    if (response.status === 500) throw new Error("500 error");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return StartStop.stop;
  }
};

const stopCarEngine = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}${ENGINE_ENDPOINT}?${new URLSearchParams({
      id: String(id),
      status: StartStop.stop,
    })}`,
    {
      method: "PATCH",
    }
  );
  const data = await response.json();
  return data;
};

const driveCarStatus = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}${ENGINE_ENDPOINT}/?${new URLSearchParams({
      id: String(id),
      status: StartStop.drive,
    })}`,
    {
      method: "PATCH",
    }
  );
  // const data = await response.json();
  // return data;

  return response;
};

const getWinners = async (
  _page = 1,
  _limit = 10,
  _sort = "id",
  _order = "ASC"
) => {
  const response = await fetch(
    `${BASE_URL}${WINNERS_ENDPOINT}?${new URLSearchParams({
      _page: String(_page),
      _limit: String(_limit),
      _sort: String(_sort),
      _order: String(_order),
    })}`,
    {
      method: "GET",
    }
  );
  //   _page=[integer]
  // _limit=[integer]
  // _sort=['id'|'wins'|'time']
  // _order=['ASC'|'DESC']
  // If _limit param is passed api returns a header X-Total-Count that countains total number of records.
  // const body = await response.json();
  return response;
};

const getWinner = async (id: number) => {
  const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}/${String(id)}`, {
    method: "GET",
  });
  // const body = await response.json();
  return response;
};

const createWinnner = async ({ id, wins, time }: IWinner) => {
  const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, wins, time }),
  });
  return response;
};

const deleteWinner = async (id: number) => {
  const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  const body = await response.json();
  return body;
};

const updateWinner = async ({ id, wins, time }: IWinner) => {
  const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ wins, time }),
  });
  const body = await response.json();
  return body;
};
export default {
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
  startCarEngine,
  stopCarEngine,
  driveCarStatus,
  getWinners,
  getWinner,
  createWinnner,
  deleteWinner,
  updateWinner,
};
