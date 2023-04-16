import axios from 'axios'

export async function getTodo (url,data,setData) {
    axios.get(url+data).
    then((response) => {
      setData({
        id: response.data.id,
        title: response.data.title
      })
    }).catch(error => console.log(error))
}

async function PostTodo (url,data,setData) {
  axios.get(url+data).
  then((response) => {
    setData({
      id: response.data.id,
      title: response.data.title
    })
  }).catch(error => console.log(error))
}

export async function postTodo (url,data) {
  axios.post(url,data)
  .then((response) => console.log(response))
  .catch((error) => {console.log(error)})
} 



// https://jsonplaceholder.typicode.com/todos/
// 'https://jsonplaceholder.typicode.com/posts'