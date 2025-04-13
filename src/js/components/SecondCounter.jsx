import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const secondCounter =({digitFive, digitFour, digitThree, digitTwo, digitOne}) =>{
    return (
        <div className="container d-flex justify-content-center align-items-center h-50">
            <div className="row text-center">
                <div className="col-2"><FontAwesomeIcon icon={faClock} size="2x" /></div>
                <div className="col-2">{digitFive %10}</div>
                <div className="col-2">{digitFour %10}</div>
                <div className="col-2">{digitThree %10}</div>
                <div className="col-2">{digitTwo %10}</div>
                <div className="col-2">{digitOne %10}</div>
            </div>
        </div>
    )
}

export default secondCounter


