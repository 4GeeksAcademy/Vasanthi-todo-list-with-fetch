import React from "react";

import UserList from "./userList";

//create your first component
const Home = () => {

	return (
		<div className="text-center todo-wrapper">
			<UserList />
		</div>
	);
};

export default Home;
