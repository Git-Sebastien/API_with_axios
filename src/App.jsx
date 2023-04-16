import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import Select from './components/Select'
import Form from './components/Form'
import { getTodo,postTodo } from './axios/Todo'


function App() {
  const [selectedValue,SetSelectedValue] = useState(1)
  const [data,setData] = useState({})
  const source = axios.CancelToken.source();
  const formField = useRef({})

  const handleSelectChange = (event) => {
    SetSelectedValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)
    const datas = Object.fromEntries(Array.from(formData.entries()));
    postTodo('https://jsonplaceholder.typicode.com/posts',datas)
    
  }

  const getData = () => {
 
    return Object.keys(data).map((key,index) => 
      <li key={index}> {key} :{data[key]}</li>
    )
  }

  const getOptions = () => {
    const arr = [1,2,3,4];
    return arr.map(element => <option key={element} value={element}>{element}</option>)
  }

  const handleRef = (ref) => {
    formField.current[ref] = ref
  }

  const getInputs = () => {
    const key = [1,2]
    const input = ["name","email","adresse"];
    return input.map((element,index) =>
      <div key={index}>
        <label
          htmlFor={element}>{element}
        </label>

        <input 
          key={index} 
          type="text" 
          name={element}
          id="" 
          ref={(ref) => handleRef(ref)}
        />
      </div> 
    )
  }

  useEffect( () => {
      getTodo('https://jsonplaceholder.typicode.com/todos/',selectedValue,setData)

      return () => {
        source.cancel('Composant démonté')
      }
  },[selectedValue])

  return (
    <>


    <Form formParams = {{
      submit:handleSubmit,
      input : getInputs()
    }}   
    />
    <Select selectParams={{
      name:"title",
      value:"value",
      options:getOptions(),
      handleChange:handleSelectChange}}
    />
      <p>Valeur selectionné : {selectedValue}</p>
      <ul>
        {getData()}
      </ul>
    </>
  )
}

export default App
