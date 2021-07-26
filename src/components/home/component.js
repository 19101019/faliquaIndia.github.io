

function HomeComponent(props) {
  return (
    <div className="container-fluid">
      <div className="section-one-wrapper">
        <div className="row align-items-center">
          <div className="col-12 col-sm-5 left-block">
            <h1 className="header">
             About Us <br/> <div className="h4 py-2 fs-600"> FliquaIndia for everyone</div>
    	    	</h1>
            <div className="description">
            At FliqaIndia it is our squad, creativity and enthusiasm which we believe is
at our competitive edge. Our staff is committed to giving you a quality of
which you are sincerely worthy. We will have tailored Photography &
designing services as effective and hospitable as possible, extremely
adaptable and accessible to your needs. We also seek and take on
innovative new ventures and collaborate alongside you to crack the
mould and push the norms beyond your expectations.  </div>
    	       </div>
          <div className="col-12 col-sm-7 right-block">
            <img src={require("assets/svgs/homepage_3.png").default} alt="1" />
          </div>
        </div>
      </div>
    
     
   
      <div className="section-five-wrapper text-center d-none d-sm-block">
      </div>
    </div>
  );
};

export default HomeComponent;
