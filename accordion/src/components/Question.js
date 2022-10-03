import React from 'react'
import './Question.css'

const Question = ({data, questionHandler, isOpen}) => {
    const activeHandler = () => {
        questionHandler(data.id);
    }

    return (
        <div className='question-card'>
            <div className="question-header">
            <p className='question-title'>{data.title}</p>
            <button className='btn' onClick={activeHandler}><span>{isOpen? '-' : '+'}</span></button>
            </div>
            {isOpen && <p className='question-answer'>{data.info}</p>}
        </div>
    )
}

export default Question;