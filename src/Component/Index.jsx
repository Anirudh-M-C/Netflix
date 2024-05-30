import React, { useState } from 'react'
import axios from 'axios'

const Index = () => {
    const [state,setState]=useState([])
  return (
    <div>
        <h1>hello</h1>
        <button onClick={()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                console.log(response.data);
                setState(response.data)
            })
        }}>click me</button>
        {state.map((e,i)=>{
            return(
                <div>
                    <h1>{i+1}</h1>
                    <h1>{e.title}</h1>
                    <h4>{e.body}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default Index