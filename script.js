document.addEventListener("DOMContentLoaded", function() {
    // Function to update carousel images based on parameter
    function updateCarouselImages(imageLinks) {
      // Update image sources in the carousel
      for (let i = 0; i < imageLinks.length; i++) {
        document.getElementById("image" + (i + 1)).src = imageLinks[i];
      }
    }
  
    // Example: Array of image links
    const imageLinksSet1 = [
      "https://images.unsplash.com/photo-1556474688-479399d655d1?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670176447319-c5622f2fb996?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1445368794737-0cf251429ca0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541343672885-9be56236302a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
  
    const imageLinksSet2 = [
      "https://example.com/image1_set2.jpg",
      "https://example.com/image2_set2.jpg",
      "https://example.com/image3_set2.jpg",
      "https://example.com/image4_set2.jpg"
    ];
  
    // Example: Retrieve parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('param'); // Assuming 'param' is the parameter indicating which set of images to display
  
    // Update carousel images based on parameter
    switch (param) {
      case "set1":
        updateCarouselImages(imageLinksSet1);
        break;
      case "set2":
        updateCarouselImages(imageLinksSet2);
        break;
      // Add more cases for additional sets of image links
      default:
        // Default set of image links
        updateCarouselImages(imageLinksSet1); // Default to set1
        break;
    }
  });
  