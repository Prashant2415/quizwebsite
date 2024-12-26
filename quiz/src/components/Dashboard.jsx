import React from 'react'
import { MockData } from '../commonComponents/MockData'
import file from "../images/file.png"
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const data = MockData;
    console.log(data)

    const navigate = useNavigate();
    const handleQuizData = (quizData) =>{
      console.log("Quiz Data ",quizData)
      navigate("/testPage",{state: quizData})
    }

    return (
    <div className='dashboard-container'>
      <h1 className='title'>Mock Tests</h1>
      <div className="card-container">
        {data.map((d,index)=>{
            return(
                <div className="card">
                    <div className="card-image-container">
                        <img className='card-image' src={file} alt="card image" />
                    </div>
                    <div className="card-content">
                        <p className='card-title'>{d.title}</p>
                        <button className='button-three' onClick={()=>{handleQuizData(d)}}>Take Test</button>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Dashboard
