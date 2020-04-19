import { FLIGHTS_BASE_API_PATH, PARTENER, V_PARAMETER } from "./constants";
import axios from "axios";

const fetchFlightServices = (data) =>
  axios
    .get(FLIGHTS_BASE_API_PATH, {
      params: {
        flyFrom: data.flyFrom,
        to: data.flyTo,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo,
        partner: PARTENER,
        v: V_PARAMETER,
      },
    })
    .then((response) => response.data)
    .catch((err) => err);

export default fetchFlightServices;
