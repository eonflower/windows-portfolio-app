import { useState } from "react";

const StartMenu = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);

  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  }

  return (
    <div className="start-menu">
      <button className={`start-button${showStartMenu ? "-active" : ""}`} onClick={toggleStartMenu}>start</button>
      <div className={`start-menu-dropdown${showStartMenu ? "-show" : ""}`}>
      <div className="title">littlebugbest<span>98</span></div>
      <ul>
        <li className="windows-update">Windows Update</li>
        <hr />
        <li className="programs">Programs</li>
        <li className="favorites">Favorites</li>
        <li className="documents">Documents</li>
        <li className="settings">Settings</li>
        <li className="find">Find</li>
        <li className="help">Help</li>
        <li className="run">Run...</li>
        <hr />
        <li className="log-off ok">Log Off</li>
        <li className="shut-down ok">Shut Down...</li>
      </ul>
      </div>
    </div>
  );
}

export default StartMenu;
