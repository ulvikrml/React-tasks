import React from 'react'

const Question = ({data, questionHandler, isOpen}) => {
    const activeHandler = () => {
        questionHandler(data.id);
    }

    return (
        <div>
            <p>{data.title}</p>
            <button onClick={activeHandler}>btn</button>
            {isOpen && <p>{data.info}</p>}
        </div>
    )
}

export default Question;