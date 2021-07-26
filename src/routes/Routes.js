import React from "react";
import { Switch, Route } from "react-router-dom";

import {
	HomeComponent,
	DesignsComponent,
	
} from "components";

export const Routes = (props) => (
	<Switch>
		<Route exact path="/" component={HomeComponent} />
		<Route path="/home" component={HomeComponent} />
		<Route exact path="/designs" component={DesignsComponent} />
		
	
	</Switch>
);

export default Routes;
