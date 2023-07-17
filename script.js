window.onload = function() {
    // Get the character element
    var character = document.getElementById("character");

    // Set initial position and velocity
    var x = 0; // X-coordinate
    var y = 0; // Y-coordinate
    var vx = 3; // X velocity
    var vy = 3; // Y velocity

    // Update the character's position on each frame
    function updatePosition() {
      x += vx;
      y += vy;

      // Reverse the direction if the character reaches the viewport boundaries
      if (x + character.offsetWidth >= window.innerWidth || x <= 0) {
        vx *= -1;
      }
      if (y + character.offsetHeight >= window.innerHeight || y <= 0) {
        vy *= -1;
      }

      // Apply the new position to the character element
      character.style.left = x + "px";
      character.style.top = y + "px";

      // Request the next frame
      requestAnimationFrame(updatePosition);
    }

    // Start the animation
    updatePosition();
  };