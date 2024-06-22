
import { Rnd } from "react-rnd";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import NewWindowModal from "./NewWindowModal";

const StartMenu = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [openModal, setOpenModal] = useState({ paint: false, minesweeper: false });

  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  const openProgramModal = (program) => {
    setOpenModal({ ...openModal, [program]: true });
    setShowStartMenu(false);
  };

  const closeProgramModal = (program) => {
    setOpenModal({ ...openModal, [program]: false });
  };

  return (
    <div className="start-menu">
      <button className={`start-button${showStartMenu ? "-active" : ""}`} onClick={toggleStartMenu}>start</button>
      <div className={`start-menu-dropdown${showStartMenu ? "-show" : ""}`}>
        <div className="title">littlebugbest<span>98</span></div>
        <ul>
          <li className="windows-update">Windows Update</li>
          <hr />
          <li className="programs">Programs<span><IoMdArrowDropright size={18} /></span>
            <div className="programs-container">
              <ul>
                <li className="paint">
                  <button onClick={() => openProgramModal('paint')}>
                    <img src="https://win98icons.alexmeub.com/icons/png/paint_file-0.png" alt="paint icon" />Paint
                  </button>
                </li>
                <li className="minesweeper">
                  <button onClick={() => openProgramModal('minesweeper')}>
                    <img src="https://win98icons.alexmeub.com/icons/png/game_mine_1-1.png" alt="minesweeper icon" />Minesweeper
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li className="documents">Documents</li>
          <li className="settings">Settings</li>
          <li className="help">Help</li>
          <hr />
          <li className="log-off ok">Log Off</li>
          <li className="shut-down ok">Shut Down</li>
        </ul>
      </div>
      <Rnd
        dragHandleClassName="window-toolbar"
        size={{width: '100%'}}
        >
      <NewWindowModal isOpen={openModal.paint} onClose={() => closeProgramModal('paint')} title="JSpaint.exe">
        <iframe
          id='paint'
          src='https://jspaint.app'
          width="100%"
          height="80vh"
          style={{ overflow: "auto" }}
        />
      </NewWindowModal></Rnd>
      {/* <Rnd
        dragHandleClassName="window-toolbar"
        size={{width: '100%'}}>
        <NewWindowModal isOpen={openModal.minesweeper} onClose={() => closeProgramModal('minesweeper')} title="Minesweeper.exe">
      </NewWindowModal></Rnd> */}
    </div>
  );
};

export default StartMenu;
