import axios from 'axios';

/*
//loginUser
export const loginUser = async values => {
  try {
    const url = 'api/users/login';
    const response = await axios.post(url, values);
    console.log('loginUser response =>', response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//lRegisterUser
export const registerUser = async values => {
  try {
    const url = 'api/users';
    const response = await axios.post(url, values);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

*/

// Login User
export const loginUser = values => {
  const url = 'api/users/login';

  return axios.post(url, values).then(response => response.data);
};

// Register User
export const registerUser = values => {
  const url = 'api/users';

  return axios.post(url, values).then(response => response.data);
};
