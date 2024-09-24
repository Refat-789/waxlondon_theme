function isPollAccessibility() {
  
     if(document.querySelector(".Footer__Block--3 ul")){
       $('<li class="Linklist__Item"><a href="#" class="Link Link--primary accessibility-button" data-acsb-custom-trigger="true">Accessibility</a></li>').appendTo(".Footer__Block--3 ul");
    }
    else {
        setTimeout(isPollAccessibility, 25);
    }
};
isPollAccessibility();



var findcookiescript = 0;

  function isPollCokiescriptBanner() {

    const cookieManageWrap = document.querySelector("div#cookiescript_manage_wrap");
    var cookieScriptBadge = document.querySelector("#cookiescript_badge");

    if(cookieManageWrap || cookieScriptBadge){

      // Add the Cookie Settings link
      const footerList = document.querySelector(".Footer__Block--3 ul");
      if (footerList) {
          const listItem = document.createElement("li");
          listItem.className = "Linklist__Item";
  
          const link = document.createElement("a");
          link.href = "#";
          link.className = "Link Link--primary cookie-preference";
          link.textContent = "Cookie Settings";
  
          listItem.appendChild(link);
          footerList.appendChild(listItem);
      }


    var cookieValue = getCookie('CookieScriptConsent');
    
      function getCookie(name) {
          var value = "; " + document.cookie;
          var parts = value.split("; " + name + "=");
          if (parts.length === 2) return parts.pop().split(";").shift();
      }
    
      // Check if cookieValue is undefined or if action property doesn't exist
      if (!cookieValue || !JSON.parse(cookieValue).action) {
          $("body").css("overflow", "hidden");
          $("div#cookiescript_accept, div#cookiescript_reject").on("click", function(){
            $("body").css("overflow", "visible");
          })
          $("div#cookiescript_manage_wrap").on("click", function(){
            $("div#cookiescript_accept, div#cookiescript_reject, div#cookiescript_save").on("click", function(){
              $("body").css("overflow", "visible");
            })
          })
        
      }

       document.addEventListener('click', (event) => {
            if (event.target.matches('.cookie-preference')) {
                event.preventDefault();
                const badge = document.querySelector("#cookiescript_badge");
                if (badge) {
                    badge.click();

                    setTimeout(() => {
                        const settingsButton = document.querySelector("span.clickablecookie-settings");
                        if (settingsButton) {
                            settingsButton.addEventListener("click", () => {
                                document.querySelector("#cookiescript_manage_wrap").click();
                            });
                        }
                    }, 500);
                }
            } 
        });

      // Attach click listener if settings button is already present
        const settingsButton = document.querySelector("span.clickablecookie-settings");
        if (settingsButton) {
            settingsButton.addEventListener("click", () => {
                document.querySelector("#cookiescript_manage_wrap").click();
            });
        }

    }
    else {
      findcookiescript = findcookiescript + 25;
      if(findcookiescript < 40000){
        setTimeout(isPollCokiescriptBanner, 25);
      }
    }
  };
  isPollCokiescriptBanner();



var loopvalue = 0;
function isPollKlaviyoForm() {
  
     if((document.querySelector(".newsletter-popup-section")) && (document.querySelector("li.HorizontalList__Item.Footer__CopyrightName "))){
        var klaviyoformshowed = parseInt(sessionStorage.getItem("klaviyoformshowed"));
        if (klaviyoformshowed == 1) {
          setTimeout(() => {
            $("section.newsletter-popup-section").attr("aria-hidden","false");
          }, 5000);
        }
       else{
         $("section.newsletter-popup-section").addClass("hide-signup-form");
       }
       $("button.NewsletterPopup__Close").on("click", function(){
          sessionStorage.setItem("klaviyoformshowed", 0);
         $("section.newsletter-popup-section").removeClass("hide-signup-form");
        })
    }
    else {
        loopvalue = loopvalue + 25;
        if(loopvalue < 15000){
          setTimeout(isPollKlaviyoForm, 25);
        }
        
         
    }
};
isPollKlaviyoForm();

var loopvalue2 = 0;

function isPollKlaviyoFormUk() {
  
  if (document.querySelector("#cookiescript_buttons")) {
    if (document.cookie.includes("localization=GB")) {

      function handleCookieButtons() {
        const klaviyoFormShowedUk = parseInt(sessionStorage.getItem("klaviyoformshoweduk"));

        if (klaviyoFormShowedUk !== 1 && !document.querySelector(".recommendation-modal__container")) {
          sessionStorage.setItem("klaviyoformshoweduk", 1);
          setTimeout(() => {
            const newsletterPopupSection = document.querySelector("section.newsletter-popup-section");
            if (newsletterPopupSection) {
              newsletterPopupSection.classList.remove("hide-signup-form");
              newsletterPopupSection.setAttribute("aria-hidden", "false");
            }
          }, 5000);
        }
      }

      document.querySelectorAll("#cookiescript_accept, #cookiescript_reject, #cookiescript_save").forEach(function(button) {
        button.addEventListener("click", handleCookieButtons);
      });

      const clickableCookieSettings = document.querySelector("span.clickablecookie-settings");
      if (clickableCookieSettings) {
        clickableCookieSettings.addEventListener("click", function() {
          document.querySelectorAll("#cookiescript_accept, #cookiescript_reject, #cookiescript_save").forEach(function(button) {
            button.addEventListener("click", handleCookieButtons);
          });
        });
      }

    }
  } else {
    loopvalue2 += 25;
    if (loopvalue2 < 25000) {
      setTimeout(isPollKlaviyoFormUk, 25);
    }
  }
}

isPollKlaviyoFormUk();


// Welcome popup
// localization-code
var data_value = "";

$( "footer#section-footer .globele-popup-opener" ).on( "click", function() {
      $("footer#section-footer .disclosure").addClass("show");
      $(".disclosure .CustomSwitcherPopup").css({"margin-top":"0", "filter":"blur(0)", "opacity":"1", "visibility":"visible" });
});

$( "#sidebar-menu .globele-popup-opener" ).on( "click", function() {
      $("#sidebar-menu .disclosure").addClass("show");
      $(".disclosure .CustomSwitcherPopup").css({"margin-top":"0", "filter":"blur(0)", "opacity":"1", "visibility":"visible" });
});


  $("div#welcome-popup-CloseBtn, button.welcome-popup-Controls-save").on("click", function(){
    $(".welcome-popup-section").css("display","none");
    $("button.recommendation-modal__close-button").click();
    sessionStorage.setItem("klaviyoformshowed", 1);
    
  })

  $("button.welcome-popup-Controls-cancel").on("click", function(){
    $("button.recommendation-modal__button--minimal").click();
    $(".welcome-popup-section").css("display","none");

    
    var current_country = $('.recommendation-modal__close-button-container input[name="country_code"]').val();
  
    if ($('select.country-select-box option[value="' + current_country + '"]').length > 0) {
      // Set the selected option to the value of current_country
      $('select.country-select-box').val(current_country);
    
      // To trigger any associated change event (if necessary):
      $('select.country-select-box').trigger('change');
      
      
      $( "select.country-select-box" ).on( "change", function() {
            data_value = this.value;
            $('select.recommendation-modal__selector--flag').val(data_value);
            $('select.recommendation-modal__selector--flag').trigger('change');
        });
    
      $( "button.gl_Controls-button.gl_Controls-save" ).on( "click", function() {
            $(".recommendation-modal__button").click();
            sessionStorage.setItem("klaviyoformshowed", 1);
            
      });
     }
  
      $("div#shopify-section-footer .disclosure").css("display","block").addClass("from-welcome show");
      $("div#shopify-section-footer .disclosure .CustomSwitcherPopup").css({"margin-top":"0", "filter":"blur(0)", "opacity":"1", "visibility":"visible" });
    
    
      $("div#shopify-section-footer .disclosure.from-welcome div#ge_CloseBtn, div#shopify-section-footer .disclosure.from-welcome .gl_Controls-cancel").on("click", function(){
        $("div#shopify-section-footer .disclosure.from-welcome").css("display","none").removeClass("from-welcome show");
        $("button.recommendation-modal__close-button").click();
        sessionStorage.setItem("klaviyoformshowed", 1);
      })

      $( ".disclosure.from-welcome .globale-overlay").not(".disclosure.from-welcome .CustomSwitcherPopup").on( "click", function() {
          setTimeout(() => {
            $("section.newsletter-popup-section").removeClass("hide-signup-form");
            $("section.newsletter-popup-section").attr("aria-hidden","false");
          }, 5000);
      });
    
  })



$( " .globale-overlay").not(".CustomSwitcherPopup").on( "click", function() {
        $(".disclosure").removeClass("show");
        $(".disclosure .CustomSwitcherPopup").css({"margin-top":"40px", "filter":"blur(2px)", "opacity":"0", "visibility":"hidden" });
  });

$( "div#ge_CloseBtn, .gl_Controls-cancel" ).on( "click", function() {
        $(".disclosure").removeClass("show");
        $(".disclosure .CustomSwitcherPopup").css({"margin-top":"40px", "filter":"blur(2px)", "opacity":"0", "visibility":"hidden" });
  });


$( "select.country-select-box" ).on( "change", function() {
        data_value = this.value;
  });


$( "button.gl_Controls-button.gl_Controls-save" ).on( "click", function() {
        
        $('.globale-Popup-Wrapper input[name="country_code"]').val(data_value);
        
        const form = this.closest('form');
        if (form) form.submit();
        $("localization-form.localization-form-wrapper").removeClass("show");
  });


if (window.location.pathname.includes('/pages/aw24-early-access')) {
  document.querySelector('.footer-top').style.display = 'none';
  document.querySelector('footer#section-footer').style.marginTop = '10px';
}




