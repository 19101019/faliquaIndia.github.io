import React from "react";
import { HeaderComponent, FooterComponent} from "components";

const DefaultLayout = ({children}) => {
  return (
    <div>
    	<HeaderComponent />
    	<div className="my-5 pt-3">
		  	{children}
    	</div>
    	<FooterComponent />
     
    </div>
  );
};

export default DefaultLayout;
