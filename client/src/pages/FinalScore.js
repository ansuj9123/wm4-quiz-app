import React from "react";
import { useNavigate } from "react";
import "./finalscore.css";

function FinalScore() {

    const navigate = useNavigate();

    function handleOnClick(){
        navigate("/");
    }

    function clickMe(){
       navigate("/about"); 
    }

  return (
    <div className="finalScore-container">
        <div className="final-score">
            <button onClick={handleOnClick()} className="score"></button>
        </div>
        <div className="return-to-page">
            <button onClick={clickMe()} className="rtn-quiz"></button>
        </div>

    </div>
  );
}

export default FinalScore;
