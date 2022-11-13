import {useState} from 'react'
import './App.css';

function App() {
  var [date, setDate] = useState()
  const [output, setOutput] = useState()
  const enabled = date!==''

  const handleSubmit=()=>{

    reverseDate()
  }

 
  


  const reverseDate = () =>{
    let dob = date.split('-')
    let newDOB = dob[2]+dob[1]+dob[0] //changing yyyy-mm-dd to dd-mm-yyyy format
    newDOB = newDOB.split('')
    let reverseDOB = newDOB.slice().reverse()
    reverseDOB = reverseDOB.join('')
    newDOB = newDOB.join('')

    checkPalindrome(newDOB, reverseDOB)
  }

  const checkPalindrome=(dob, reverseDOB)=>{
    if(dob === reverseDOB){
      setOutput("Your birthday is a palindrome 🙂")
    }
    else{
      setOutput("Your birthday is not a palindrome 🙁 ")
    }
  }

  return (
    <>
    <h1>Palindrome Birthday 🎂</h1>
    <div className='container'>

    <label htmlFor='birthday'>Enter your date of birth and we'll tell if it's a palindrome or not.</label><br/>
    <input type='date'  id='birthday' onChange={(e)=>setDate(e.target.value)} /><br />
    <button type='submit' onClick={()=>handleSubmit()} disabled={!enabled}>Submit</button>

    <div className='output'>{output}</div>
    </div>
    
    </>
  );
}

export default App;
