import React from "react";
import "../css/ComingSoon.css"

const ComingSoon = () => {
  return (
    <>
      <div className="ComingSoon" id="coming-soon">
        <p className="ComingSoonSectionTitle" id="section-title">Coming Soon</p>

        <ul className="ComingSoonList" id="coming-soon-list">
          <li className="ComingSoonListItem">Tanhaji - the Unsung Warrior</li>
          <li className="ComingSoonListItem">Like a Boss</li>
          <li className="ComingSoonListItem">Underwater</li>
          <li className="ComingSoonListItem">Untouchable</li>
        </ul>
      </div>
    </>
  );
};

export default ComingSoon;
