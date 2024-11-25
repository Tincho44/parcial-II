import axios from 'axios';
import { API_URL } from '../utils/apiUrl';

export interface Team {
  id?: string;
  name: string;
  description: string;
  goals: number;
  points: number;
  logo: string;
}

export const getAllTeams = () => {
    return axios
      .get(`${API_URL}`)
      .then((response) => response.data);
};

export const getTeam = (id: string|string[]) => {
  return axios
    .get(`${API_URL}/${id}`)
    .then((response) => response.data);
}

export const deleteTeam = (id?: string) => {
  return axios
    .delete(`${API_URL}/${id}`)
    .then((response) => response.data);
}

export const addTeam = (teamData: Team) => {
  return axios
    .post(`${API_URL}`, teamData)
    .then((response) => response.data);
}

export const updateTeam = (id: string|string[], teamData: Team) => {
  return axios
    .put(`${API_URL}/${id}`, teamData)
    .then((response) => response.data);
}