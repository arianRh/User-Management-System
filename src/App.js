import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "./Components/Register";
import { Users } from "./Components/Users";

export function App() {
	const [users, setUsers] = useState([]);

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Register setUsers={setUsers} users={users} />}
				/>
				<Route path='users' element={<Users users={users} />} />
			</Routes>
		</>
	);
}
