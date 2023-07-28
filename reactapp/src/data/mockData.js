import { privateAxios } from "../services/helper";
import { tokens } from "../theme";


export const Piedata = (id) => {
  return privateAxios.get(`chart/pie/`+id).then((response) => response.data);
};

export const LineData = (id) => {
  return privateAxios.get(`chart/line/`+id).then((response) => response.data);
};


export const mockTransactions = (id) => {
  return privateAxios.get(`chart/transactions/`+id).then((response) => response.data);
};

export const getotalworkoutsforuserid = (id) => {
  return privateAxios.get(`count/totalworkouts/`+id).then((response) => response.data);
}
export const gettotalexercisesforuserid = (id) => {
  return privateAxios.get(`count/totalexercises/`+id).then((response) => response.data);
}
export const gettotalsetsforuserid = (id) => {
  return privateAxios.get(`count/totalsets/`+id).then((response) => response.data);
}
export const gettotalgoalsforuserid = (id) => {
  return privateAxios.get(`count/totalgoals/`+id).then((response) => response.data);
}

export const getnotcompletedworkoutsbyuserid = (id) => {
  return privateAxios.get(`count/notcompletedworkouts/`+id).then((response) => response.data);
}
export const getnotcompletedexercisesbyuserid = (id) => {
  return privateAxios.get(`count/notcompletedexercises/`+id).then((response) => response.data);
}
export const getnotcompletedsetsbyuserid = (id) => {
  return privateAxios.get(`count/notcompletedsets/`+id).then((response) => response.data);
}
export const getnotcompletedgoalsbyuserid = (id) => {
  return privateAxios.get(`count/notcompletedgoals/`+id).then((response) => response.data);
}
