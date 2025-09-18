$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0, 0, 10, 0);
    createPlatform(300, 650, 100, 50, "red");
    createPlatform(600, 550, 115, 50, "Blue");
    createPlatform(800, 500, 100, 50, "green");
    createPlatform(600, 400, 100, 50, "red");
    createPlatform(0, 500, 100, 50, "purple");
    createPlatform(400, 300, 30, 50, "cyan");
    createPlatform(600, 200, 30, 50, "dark green");
    createPlatform(800, 300, 50, 10, "cyan");
    createPlatform(900, 300, 30, 90, "cyan");
    createPlatform(900, 390, 130, 40, "cyan");
    createPlatform(1000, 300, 30, 90, "cyan");
    createPlatform(1000, 300, 100, 10, "cyan");
    createPlatform(1100, 300, 30, 200, "cyan");
    createPlatform(1100, 500, 100, 20, "cyan");
    createPlatform(1200, 390, 30, 190, "pink");
    createPlatform(800, 250, 30, 100, "pink");
    createPlatform(1200, 400, 100, 10, "yelow");
    createPlatform(1300, 700, 100, 10, "blue");
    // TODO 3 - Create Collectables
    createCollectable("steve", 1140, 450);
    createCollectable("diamond", 600, 500, 0.5, 0.7);
    createCollectable("grace", 400, 299);
    createCollectable("database", 1300, 600);
    // TODO 4 - Create Cannons
    createCannon("top", 200, 990);
    createCannon("right", 300, 2000);
    createCannon("top", 799, 1400);
    createCannon("top", 1220, 1990);
    createCannon("right", 790, 100);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
