import React,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import FormTitle from './components/qustionTitle/FormTitle';
import Qustion from './components/qustion/Qustion';
import './App.css';

function App() {
const [data, setData] = useState([])
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [submit, setSubmit] = useState({})


const formSubmit = (event) => {
  event.preventDefault();
  var data = new FormData(event.target);
  let formObject = Object.fromEntries(data.entries());
  console.log(formObject);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formObject)
  };

  fetch("http://localhost:8000/answers",requestOptions).then(response => response.json())
  .then(data => console.log({success:true})).catch(err=>console.log(err))
  window.location.reload(false);
}

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'React POST Request Example' })
};


useEffect(()=> {
    const data = fetch("http://localhost:8000/questions").then(res => 
    {
      if (!res.ok) {
        throw Error("could not fetch the data from that sorce")
      }
      return res.json();
    })
      .then(data => 
        {
        setData(data);
        setLoading(false);//there is no loading but if the qustion file was large we need!!
        setError(false);
        // console.log("this is fetch function");
      console.log(data);
    }).catch((err) => 
    { 
      console.log(err);
      setError(true)
    });
  },[]);

  return (
    <div className="App">
        <FormTitle/>
        <form onSubmit={formSubmit}>
        {  
         error? <h1>the sorce not found</h1>:data.map((item) =>(<Qustion qustion={item.question} type={item.type} requre={item.requre} id={item.id} answer={item.answares} key={item.id} />))
        }
        <div className="submit-right">
          <input className="submit-button" type="submit" value="Submit" />
        </div>
        </form>
    </div>
  );
}

export default App;
