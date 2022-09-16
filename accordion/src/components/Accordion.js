import React, {useState} from 'react'
import questions from '../data';
import Question from './Question';

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false)
    const questionHandler = (isActiveID) => {
        if(isOpen === isActiveID){
            return setIsOpen(null);
        }
        setIsOpen(isActiveID);
    }
    return (
        <div>
            {questions.map(question => {
                return <Question key={question.id} data={question} isOpen={isOpen === question.id} questionHandler={questionHandler}/>
            })}
        </div>
    )
}

export default Accordion;