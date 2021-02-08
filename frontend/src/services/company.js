/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { goToRecProfile } from '../routes/goTo.js';
import { baseurl } from './data.js';

export const signupCompany = (body, history) => {
  axios
    .post(`${baseurl}company/signup`, body)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      goToRecProfile(history);
    })
    .catch(error => {
      alert('Ocorreu um erro, tente novamente mais tarde!');
    });
};

export const insertProject = body => {
  const headers = {
    Authorization: localStorage.getItem('token'),
  };

  axios
    .post(`${baseurl}company/project`, body, headers)
    .then(response => {
      alert('Projeto inserido com sucesso');
    })
    .catch(error => {
      alert('Ocorreu um erro, tente novamente mais tarde!');
    });
};

export const getProjects = setState => {
  const headers = {
    Authorization: localStorage.getItem('token'),
  };

  axios
    .get(`${baseurl}company/project`, headers)
    .then(response => {
      setState(response.data);
      console.log(response.data);
    })
    .catch(error => {
      alert('Ocorreu um erro, tente novamente mais tarde!');
    });
};
