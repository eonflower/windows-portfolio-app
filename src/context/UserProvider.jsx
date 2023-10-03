import React, { useState, createContext } from 'react'

export const UserContext = createContext()

const UserProvider= (props) => {

	const [toggle, setToggle] = useState(false); // Initialize toggle state

  const minimize = () => {
    setToggle(true); // Toggle the state
  };

	const maximize = () => {
		setToggle(false); // Toggle the state
	}

	return (
		<UserContext.Provider value={{toggle, minimize, maximize}}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserProvider