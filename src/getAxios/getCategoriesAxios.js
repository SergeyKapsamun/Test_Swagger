import axios from 'axios';
const   getCategoriesAxios= async (callback)=>{
  try {
    const response = await axios.get('https://testtask.sebbia.com/v1/news/categories');
  callback(response.data.list)
 
  return response;
  } catch (error) {
    console.error(error);
  }

}

export default getCategoriesAxios;
