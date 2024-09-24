if(performance.navigation.type == 2) {
  breadcrumbData = [];
  window.sessionStorage.setItem("breadcrumb", JSON.stringify(breadcrumbData));
  // breadcrumbProductData = [];
  // window.sessionStorage.setItem("breadcrumbproduct", JSON.stringify(breadcrumbProductData));
}


$(document).click(function(event) {
  if ($(event.target).is("a")) {
    if ($(event.target).closest(".ProductItem").length==0 && $(event.target).closest("#section-header nav.Header__MainNav").length==0 && $(event.target).closest("#sidebar-menu .Drawer__Main").length==0) {
        
        breadcrumbData = [];
        window.sessionStorage.setItem("breadcrumb", JSON.stringify(breadcrumbData));
    }
  }
});
  
  
  
  
  var storedBreadcrumb = JSON.parse(sessionStorage.getItem("breadcrumb"));
  // var storedBreadcrumb  = storedBreadcrumbt[storedBreadcrumbt.length-1];
  if(storedBreadcrumb != null && storedBreadcrumb.length != 0 )
    {
    var i;
    for (i = 0; i < storedBreadcrumb.length; i++) {
        var storedBreadcrumbName = storedBreadcrumb[i].name;
        var storedBreadcrumburl = storedBreadcrumb[i].url;
        $('<li class="item"><a href="' +storedBreadcrumburl+ '" > <span>></span> ' +storedBreadcrumbName+  ' </a></li>').insertAfter(".breadcrumb .item.first-item");

        }
    }
    else {
      if($( "body" ).hasClass( "template-collection" )){
          var page_header = $("header.PageHeader h1").text();
          var page_url = window.location.pathname;
          $('<li class="item direct-access-item"><a href="' +page_url+ '" > <span>></span> ' +page_header+  ' </a></li>').insertAfter(".breadcrumb .item.first-item");
          
          var breadcrumbData = [];
          breadcrumbData.push(
              {
              name: page_header,
              url: page_url
              }
          );
          window.sessionStorage.setItem("breadcrumb", JSON.stringify(breadcrumbData));
            }

    }
  // var storedBreadcrumbproduct = JSON.parse(sessionStorage.getItem("breadcrumbproduct"));
  // if($( "body" ).hasClass( "template-product" )){
  //   if(storedBreadcrumbproduct !== null && storedBreadcrumbproduct.length != 0 )
  //   {
  //     var i;
  //     for (i = 0; i < storedBreadcrumbproduct.length; i++) {
  //         var storedBreadcrumbproductName = storedBreadcrumbproduct[i].name;
  //         $('<li class="item"><p> <span>></span> ' +storedBreadcrumbproductName+  ' </p></li>').insertAfter(".breadcrumb .item:last-child");
  //       }
  //   }
  //   else {
  //         var page_header = $(".Product__Info h1").text();
  //         $('<li class="item direct-access-item"><p> <span>></span> ' +page_header+  ' </p></li>').insertAfter(".breadcrumb .item:last-child");
  //         var breadcrumbProductData = [];
  //         breadcrumbProductData.push(
  //             {
  //             name: page_header
  //             }
  //         );
  //         window.sessionStorage.setItem("breadcrumbproduct", JSON.stringify(breadcrumbProductData));

  //   }
  // }


  // var storedBreadcrumbproduct = JSON.parse(sessionStorage.getItem("breadcrumbproduct"));
  if($( "body" ).hasClass( "template-product" )){
    var page_header = $(".Product__Info h1").text();
    $('<li class="item direct-access-item"><p> <span>></span> ' +page_header+  ' </p></li>').insertAfter(".breadcrumb .item:last-child");
    // var breadcrumbProductData = [];
    // breadcrumbProductData.push(
    //     {
    //     name: page_header
    //     }
    // );
    // window.sessionStorage.setItem("breadcrumbproduct", JSON.stringify(breadcrumbProductData));
  }


  var breadcrumbtotalData =[];

  var breadcrumbData = [];
  // var breadcrumbProductData = [];
  $('#section-header nav.Header__MainNav a').on('click', function() {
    var clicked_list = $(this).text();
    if($(this).find("span").length)
    {
      clicked_list = $(this).find('span').text();
    }
    if($(this).find("p").length)
    {
      clicked_list = $(this).find('p').text();
    }
    var clicked_list_url = $(this).attr('href');
    var clicked_list_parent = $(this).closest(".HorizontalList__Item").find("a").first().text();
    if($(this).closest(".HorizontalList__Item").find("a").first().find("span").length)
    {
      clicked_list_parent = $(this).closest(".HorizontalList__Item").find("a").first().find('span').text();
    }
    var clicked_list_parent_url = $(this).closest(".HorizontalList__Item").find("a").first().attr('href');
    if(clicked_list_url != "#" ){
      breadcrumbData = [];
      // breadcrumbProductData = [];
      if( clicked_list == clicked_list_parent)
      { 
        breadcrumbData.push(
          {
          name: clicked_list,
          url: clicked_list_url,
          }
        );
      }
      else
      {
        
        breadcrumbData.push(
          {
          name: clicked_list,
          url: clicked_list_url,
          },
          {
          name: clicked_list_parent,
          url: clicked_list_parent_url,
          }
        );
      }

      if(JSON.parse(sessionStorage.getItem("breadcrumbtotal")) !=null)
      {

        breadcrumbtotalData = JSON.parse(sessionStorage.getItem("breadcrumbtotal"));
      }
      breadcrumbtotalData.push(
        {
        data: breadcrumbData,
        }
      );
      
      
      
    window.sessionStorage.setItem("breadcrumb", JSON.stringify(breadcrumbData));
    window.sessionStorage.setItem("breadcrumbtotal", JSON.stringify(breadcrumbtotalData));
    // window.sessionStorage.setItem("breadcrumbproduct", JSON.stringify(breadcrumbProductData));
    }
  }) 

  
  $('#sidebar-menu .Drawer__Main a.Link--primary').on('click', function() {
    var clicked_list = $(this).text();
    var clicked_list_url = $(this).attr('href');
    var clicked_list_parent = $(this).closest(".Collapsible").find(".Collapsible__Button.Link--primary").text().trim();
    if($(this).closest(".Collapsible.main-menu").length)
    {
      clicked_list_parent = $(this).closest(".Collapsible.main-menu").find(".Collapsible__Button").first().text().trim();
    }
    
    var clicked_list_parent_url = "#";
    if(clicked_list_url != "#" ){
      breadcrumbData = [];
      // breadcrumbProductData = [];
      if( clicked_list == clicked_list_parent)
      { 
        breadcrumbData.push(
          {
          name: clicked_list,
          url: clicked_list_url,
          }
        );
      }
      else
      {
        breadcrumbData.push(
          {
          name: clicked_list,
          url: clicked_list_url,
          },
          {
          name: clicked_list_parent,
          url: clicked_list_parent_url,
          }
        );
      }

      if(JSON.parse(sessionStorage.getItem("breadcrumbtotal")) !=null)
      {

        breadcrumbtotalData = JSON.parse(sessionStorage.getItem("breadcrumbtotal"));
      }
      breadcrumbtotalData.push(
        {
        data: breadcrumbData,
        }
      );
      
      
      
    window.sessionStorage.setItem("breadcrumb", JSON.stringify(breadcrumbData));
    window.sessionStorage.setItem("breadcrumbtotal", JSON.stringify(breadcrumbtotalData));
    // window.sessionStorage.setItem("breadcrumbproduct", JSON.stringify(breadcrumbProductData));
    }
  }) 


// var flag = 0;

// function isPollFnproductTile() {
//   if (document.querySelectorAll(".ProductItem__Title a").length > 0) {

//     $(document).on("click",".ProductItem",function() {
//       var product_title = $(this).find(".ProductItem__Title a").text();
//       breadcrumbProductData = [];
//       breadcrumbProductData.push(
//           {
//           name: product_title
//           }
//       );
//       window.sessionStorage.setItem("breadcrumbproduct", JSON.stringify(breadcrumbProductData));
//     });

//   } else {
//     flag = flag + 25;
//     if(flag < 5000){
//        setTimeout(isPollFnproductTile, 25);
//     }
//   }
// };
// isPollFnproductTile();


$('#shopify-section-footer a').on('click', function() {
  breadcrumbData = [];
  window.sessionStorage.setItem("breadcrumb", JSON.stringify(breadcrumbData));
})


if($( "body" ).hasClass( "template-index" )){
  breadcrumbData = [];
  window.sessionStorage.setItem("breadcrumb", JSON.stringify(breadcrumbData));
  // breadcrumbProductData = [];
  // window.sessionStorage.setItem("breadcrumbproduct", JSON.stringify(breadcrumbProductData));
}

