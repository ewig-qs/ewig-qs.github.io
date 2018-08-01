function active(e) {
    /*
      e = e || window.event;
      var src = e.target || e.srcElement;
      */
  
      if (e.id === "home_a") {
          if (e.className === "inactive")
          {
            e.className = "active";
            x = document.getElementById("about_a");
            x.className = "inactive";
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }
      }
      else if (e.id === "about_a") {
          if (e.className === "inactive")
          {
            e.className = "active";
            x = document.getElementById("home_a");
            x.className = "inactive";
          }
      }
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
      if (mySidebar.style.display === 'block') {
          mySidebar.style.display = 'none';
      } else {
          mySidebar.style.display = 'block';
      }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }
  