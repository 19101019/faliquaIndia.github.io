import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/Routes";
import { DefaultLayout } from "components";

function App() {
  return (
    <div>
			
			<Router>
				<DefaultLayout>
					<Routes />
				</DefaultLayout>
			</Router>
    </div>
  );
}

export default App;
