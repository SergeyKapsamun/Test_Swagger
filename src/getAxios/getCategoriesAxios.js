import axios from 'axios';
const   getCategoriesAxios= async (callback)=>{
  try {
    const response = await axios.get('https://testtask.sebbia.com/v1/news/categories');
  callback(response.data.list)
  } catch (error) {
    console.error(error);
  }

}

export default getCategoriesAxios;
async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }