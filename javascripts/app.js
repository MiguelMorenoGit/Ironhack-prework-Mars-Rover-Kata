// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[],  
}

// ======================

function limitMoon(i,j){

  if(i<0 || i>moonGrid.length || j<0 || j>moonGrid.length)
  {
    console.log("!!!! FUERA de los LIMITES !!!!");
    return true;
  }
}

/* // para una Luna esferica sin limites
function infiniteMoon(i,j) { 
  

}
*/

function obstacle (i,j){
  if ( moonGrid[i][j] === "R"){
    console.log("!!!! hay un OBSTACULO delante !!!!");
    return true;
  }
}

var moonGrid = [
  [null,null,"R",null,null,null,null,null,null,null],
  [null,null,null,"R",null,null,null,"R",null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,"R",null],
  ["R",null,null,null,null,null,"R",null,null,null],
  [null,null,"R",null,null,null,null,null,null,null],
  [null,null,null,null,"R",null,null,null,null,null],
  [null,null,null,null,null,null,null,"R",null,null],
  [null,null,"R",null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,"R"],
]

function turnLeft(rover){

  switch (rover.direction){
    case "N" :
    rover.direction = "W"
    break;
    case "W" :
    rover.direction = "S"
    break;
    case "S" :
    rover.direction = "E"
    break;
    default :
    rover.direction = "N"
    break;  
  } 
  console.log("turnLeft was called! the rover direction is " + rover.direction);
}

function turnRight(rover){

  switch (rover.direction){
    case "N" :
    rover.direction = "E"
    break;
    case "E" :
    rover.direction = "S"
    break;
    case "S" :
    rover.direction = "W"
    break;
    default :
    rover.direction = "N"
    break;  
  } 
  console.log("turnRight was called! the rover direction is " + rover.direction);
}

function moveForward(rover){

  var i = rover.y;
  var j = rover.x;

  if (rover.direction === "N"){
      i = (i - 1); 
  } else if (rover.direction === "S"){
      i = (i + 1);
  } else if (rover.direction === "E"){
      j = (j + 1);
  } else if (rover.direction === "W"){
      j = (j - 1);
  }

  //Movimiento si no hay una roca
  if(!obstacle(i,j) && !limitMoon(i,j)){

    rover.y = i;
    rover.x = j;

    rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
    console.log("moveForward was called! the rover position is ( " + rover.x + "," + rover.y + " )" );
  }

}

function moveBackward(rover){

  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");

  var i = rover.y;
  var j = rover.x;

  if (rover.direction === "N"){
      i = (i + 1); 
  } else if (rover.direction === "S"){
      i = (i - 1);
  } else if (rover.direction === "E"){
      j = (j - 1);
  } else if (rover.direction === "W"){
      j = (j + 1);
  }

  //Movimiento si no hay una roca
  if(!obstacle(i,j) && !limitMoon(i,j)){
    rover.y = i;
    rover.x = j;

    rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
    console.log("moveBackward was called! the rover position is ( " + rover.x + "," + rover.y + " )" );
  }
}

function commands(command = ""){
  for (var i = 0 ;i < command.length ; i++){
    switch (command[i]) {
      case "f":
      moveForward(rover)
      break;
      case "r":
      turnRight(rover)
      break;
      case "l":
      turnLeft(rover)
      break;
      case "b":
      moveBackward(rover)
      break;

      default :
      console.log(" please,for to move the rover select f (forward) b (backward) l (turn left) r ( turn right)" )
      break;
    }
  }
}


commands("rffrffflbbrflffffffp")

console.log("current direction = " + rover.direction)
console.log("current position = " + "(" + rover.x + "," + rover.y + ")")
console.log(rover.travelLog)
