import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <button type="button" class="btn btn-info">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </button>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
