import React, { Fragment } from 'react';

import Answer from './Answer';





const Answers = (props) => {




    return (  

           <Fragment>
        <Answer letter="a"  answer={props.question.answer_a} dispatch={props.dispatch} selected={props.currentAnswer === "a"}/>
        <Answer letter="b"  answer={props.question.answer_b} dispatch={props.dispatch} selected={props.currentAnswer === "b"}/>
        <Answer letter="c"  answer={props.question.answer_c} dispatch={props.dispatch} selected={props.currentAnswer === "c"}/>
        <Answer letter="d"  answer={props.question.answer_d} dispatch={props.dispatch} selected={props.currentAnswer === "d"}/>
 
        </Fragment>
    );
}
 
export default Answers ;