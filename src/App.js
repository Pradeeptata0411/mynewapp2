
import './App.css';
import Idcard from './Components/Idcard';
import Navbar from './Components/Navbar';
import {  Routes, Route} from 'react-router';
import Calculator from './Components/Calculator';
import Feedback from './Components/Feedback';
import { useEffect,useState } from 'react'; 
function App() { 
  const current = new Date(); 
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`; 
  let year=current.getFullYear() 
  const [feedback,setFeedback]=useState([]) 
const ele=()=> 
{ 
  {feedback.map((e)=>{ 
    return ( 
    <Feedback name={e.name} comment={e.comment}/> 
  );})} 
} 
   
  useEffect(()=>{ 
 const getFeedback=async () =>{ 
const feedbackFromServer=await fetchFeedback() 
setFeedback(feedbackFromServer)  
} 
  getFeedback() 
},[]) 
const fetchFeedback=async()=>{ 
  const res=await fetch('http://localhost:5000/feedback') 
  const data=await res.json() 
  return data 
} 
  return ( 
    <div className='App'> 
   <Navbar></Navbar>
    <Routes> 
    <Route path='Idcard' element={<Idcard/>}/>
  <Route path='Calculator' element={<Calculator/>}/>
      <Route path='Feedback' element={feedback.map((e)=>{ 
    return ( 
    <Feedback name={e.name} comment={e.comment}/> 
  );})}/> 
     </Routes> 
    </div>
  ); 
} 
export default App;