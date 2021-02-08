/* eslint-disable prettier/prettier */
import axios from 'axios';
import { baseurl } from './data.js';
import {goToCandProfile} from "../routes/goTo.js"

export const signupCandidate = (body, history) => {
  axios
    .post(`${baseurl}candidate/signup`, body)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      goToCandProfile(history)
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
