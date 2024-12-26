import React, { useContext, useState } from 'react'
import "./component.css"
import { Link, useLocation } from 'react-router-dom';
const TestPage = () => {
    const testData = useLocation();
    console.log("test page data ", testData?.state)
    const data = testData?.state;
    const [currentItem, setCurrentItem] = useState(0);
    var item = 0;
    const [userAnswer, setUserAnswer] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const handleOptionAnswer = (option) => {
        console.log("sdqqwe ,",option)
        setUserAnswer([...userAnswer, option])
        const nextQuestion = currentItem + 1;
        if(nextQuestion < data.quizData.length)
        {
            setCurrentItem(nextQuestion)
        }
        else{
            setShowResult(true);
            handleResult();
        }
    }
    const handleResult =()=>{
        let score = 0;
        userAnswer.forEach((answer,index)=>{
            if(answer === data?.quizData[index].answer)
            {
                score++;
            }
        })
        return score
    }
    console.log(userAnswer)

    return (
        <div className='test-page-container'>
            <div className="test-header">
                <p className='test-title'>{data.title}</p>
                <div className="time-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                    <p>Time Left</p>
                </div>
            </div>
            {showResult ? (
                <div className="show-result-container">
                    <div className="result-content">
                        <p className='result-text p-tag'>Thank You</p>
                        <p>Your score is {handleResult()} / {data.quizData.length}</p>
                        <Link className='button-four' to="/">Dashboard</Link>
                        
                    </div>
                </div>
            ) : (
                <div className="test-container">
                    <p className='question-id'>Question {data?.quizData[currentItem].id}</p>
                    <p className='question-title p-tag'>{data?.quizData[currentItem]?.question}</p>
                    {data?.quizData[currentItem]?.options.map((op, index) => {
                        return (
                            <div className="option-container" key={index}>
                                <button className='test-option' onClick={() => { handleOptionAnswer(op) }}>{op}</button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default TestPage
