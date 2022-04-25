import { Route, Routes } from "react-router-dom";
import { Register } from "./Register";
import { Users } from "./Users";

export function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Register />} />
				<Route path='users' element={<Users />} />
			</Routes>
		</>
	);
}
