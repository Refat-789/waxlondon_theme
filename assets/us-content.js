
var flag = 0;

	function isPollFnemtyvalue() {
      
      if (document.cookie.includes("localization=US") || document.cookie.includes("localization=CA")) {
            function isPollFnusproduct() {
              if (document.querySelectorAll(".ProductForm__AddSize").length > 0) {
                
                document.querySelector('.ProductForm__AddSize').textContent = "Add to cart";

                var width = window.innerWidth;
                if (width <= 641) {
                  var btn = document.querySelector(".ProductForm__AddSize");

                  var element = document.querySelector(".ProductForm__Variants");
                  if(element.classList.contains("gift-card-layout")){
                    btn.addEventListener("click", function() {
                      this.textContent = "Please select an amount";
                    })
                  }
                  else{
                    btn.addEventListener("click", function() {
                      this.textContent = "Please select a size";
                    })
                  }


                }   
                else {
                  var btn = document.querySelector(".ProductForm__AddSize");
                  btn.addEventListener("mouseout", function() {
                    this.textContent = "Add to cart";
                  })
                }


                var button = document.querySelector('.SizeSwatchList');
                button.addEventListener('click', event => {

                    setTimeout(function() {
                      if(document.querySelector('.ProductForm__AddToCart span')){
                        document.querySelector('.ProductForm__AddToCart span').textContent = "Add to cart";
                      }
                    }, 1);
                });

                   
            
              } else {
                  flag = flag + 25;
                if(flag < 5000){
                  setTimeout(isPollFnusproduct, 25);
                }
              }
            };
            isPollFnusproduct();

        
            function isPollFnussidecart() {
              if (document.querySelectorAll("#sidebar-cart").length > 0) {
                
                document.querySelector('#sidebar-cart .Drawer__Title').textContent = "Cart";
                var element = document.querySelector('#sidebar-cart');
                  element.classList.add("us-canada-local");

              } else {
                  flag = flag + 25;
                if(flag < 5000){
                  setTimeout(isPollFnussidecart, 25);
                }
              }
            };
            isPollFnussidecart();

        function isPollFnussidecartempty() {
          if (document.querySelectorAll("#sidebar-cart .Drawer__Main .Cart__Empty").length > 0) {
            
            document.querySelector('#sidebar-cart .Drawer__Main .Cart__Empty.Heading.u-h5').textContent = "Your cart is empty";


          } else {
              flag = flag + 25;
            if(flag < 5000){
              setTimeout(isPollFnussidecartempty, 25);
            }
          }
        };
        isPollFnussidecartempty();
        
      }
    };
	isPollFnemtyvalue();



