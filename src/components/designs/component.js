import React, { useEffect } from "react";

const ParentComponent = (props) => {
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);


	function debounce(func, wait = 20, immediate = true) {
		var timeout;
		return function() {
		  var context = this,
			args = arguments;
		  var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		  };
		  var callNow = immediate && !timeout;
		  clearTimeout(timeout);
		  timeout = setTimeout(later, wait);
		  if (callNow) func.apply(context, args);
		};
	  }
	  
	  const sliderImages = document.querySelectorAll('.slide-in');
	  
	  function checkSlide(e) {
		sliderImages.forEach(sliderImage => {
		  // halfway through the image
		  const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
		  // bottom of the image
		  const imageBottom = sliderImage.offsetTop + sliderImage.height;
		  const isHalfShown = slideInAt > sliderImage.offsetTop;
		  const isNotScrolledPast = window.scrollY < imageBottom;
		  if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		  } else {
			sliderImage.classList.remove('active');
		  }
	  
		  console.log(slideInAt);
		});
	  }
	  
	  window.addEventListener('scroll', debounce(checkSlide));
  return (
		<div>
		<div className="site-wrap">
			<h1>What is logo designs</h1>
			<p>
			Logo design is all about creating the perfect visual brand mark for a company.
			 Depending on the type, a logo usually consists of a symbol or brandmark and a logotype, along with a tagline.
		
A logo is a graphic mark, emblem, symbol, or stylized name used to identify a company, organization,
 product, or brand. It may take the form of an abstract or figurative design, or it may present as a 
 stylized version of the company's name if it has sufficient brand recognition.</p>

 <p>A good logo is distinctive, appropriate, practical, graphic and simple in form, and it conveys the 
 owner's intended message. A concept or “meaning” is usually behind an effective logo, and it communicates 
 the intended message.</p><br></br>
		<div className="buttons">
		<p>
        <span><a className=" btn-1 " href="/">Start design</a> </span></p>
		<p>
        <span><a className=" btn-2 " href="/">Get a quote</a> </span></p>
		</div>
		</div>

	</div>

  );
};

export default ParentComponent;
