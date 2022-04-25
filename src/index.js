import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./Components/App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Index() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}

root.render(<Index />);
