import { useState, useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Modal from "./NewWindowModal";
import { Rnd } from "react-rnd";


const StartMenu = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [openProgramModal, setOpenProgramModal] = useState(false);

	const openModal = () => {
		setOpenProgramModal(true);
    setShowStartMenu(false);
	};

	const closeModal = () => {
		setOpenProgramModal(false);
	};

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
          <li className="programs">Programs<span><IoMdArrowDropright size={18} />
          </span>
            <div className="programs-container">
              <ul>
                <li className="paint">
                <button onClick={openModal}>
                <img src="https://win98icons.alexmeub.com/icons/png/paint_file-0.png" alt="paint icon" />Paint</button></li>
                <li className="minesweeper">
                  <img src="https://win98icons.alexmeub.com/icons/png/game_mine_1-1.png" alt="minesweeper icon" />Minesweeper</li>
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
			<Modal isOpen={openProgramModal} onClose={closeModal} title={'JSpaint.exe'}>
      <iframe
      id='paint'
      src={'https://jspaint.app'}
      width="100%"
      style={{
        overflow: "auto",
      }}
    />
			</Modal>
      </Rnd>
    </div>
  );
}

export default StartMenu;
