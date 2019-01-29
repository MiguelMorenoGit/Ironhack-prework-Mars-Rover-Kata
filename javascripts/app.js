// Rover Object Goes Here
// ======================

var moonGrid = [ // he realizado uan matriz de 10 filas y 11 columnas
  [null,null,"R",null,null,null,null,null,null,"R",null],
  [null,null,null,"R",null,null,null,"R",null,null,null],
  [null,null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,"R",null,null],
  ["R",null,null,null,null,null,"R",null,null,null,null],
  [null,null,"R",null,null,null,null,null,null,null,null],
  [null,null,null,null,"R",null,null,null,null,null,null],
  [null,null,null,null,null,null,null,"R",null,null,null],
  [null,null,"R",null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,"R",null],
]

var rover = {
  name: "ROVER 1",
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[],  
}

var rover2 = {
  name: "ROVER 2",
  direction: "N",
  x : moonGrid[0].length -1, // esta es la manera de optener el numero de columnas de una fila
  y : moonGrid.length -1,     // asi obtenemos el numero de filas el -1 es poque el contadopr lenmght empieza por 1, la posicion de una array empieza por 0
  travelLog:[],
}

// ======================

function limitMoon(i,j){

  if(i<0 || i>=moonGrid.length || j<0 || j>=moonGrid[i].length)
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
  } else if ( j === rover2.x && i === rover2.y ){ // añadimos en la funcion obstaculo la posibuilidad de que el obsatuclo sea otro rover
    console.log("!!!! hay otro ROVER delante !!!!");
    return true;
  }
}


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
  console.log("turnLeft was called! the " + rover.name + " direction is " + rover.direction);
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
  console.log("turnRight was called! the " + rover.name + " direction is " + rover.direction);
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

    rover.travelLog.push("(" + rover.x + "," + rover.y + ")");

    rover.y = i;
    rover.x = j;

    
    console.log("moveForward was called! the " + rover.name + " position is ( " + rover.x + "," + rover.y + " )" );
  }

}

function moveBackward(rover){


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

    rover.travelLog.push("(" + rover.x + "," + rover.y + ")");

    rover.y = i;
    rover.x = j;

    
    console.log("moveBackward was called! the " + rover.name + " position is ( " + rover.x + "," + rover.y + " )" );
  }
}
function changeRover (player){
  if (player = rover){
    player = rover2;
  } else {
    player = rover;
  }
}
function commands(command = ""){
var  player = rover
  for (var i = 0 ;i < command.length ; i++){
    if ( (i+1) % 2 == 0 ){ player = rover2 }
    else {player = rover} 
    switch (command[i]) {
      case "f":
      moveForward(player)
      changeRover()
      break;
      case "r":
      turnRight(player)
      break;
      case "l":
      turnLeft(player)
      break;
      case "b":
      moveBackward(player)
      changeRover()
      break;

      default :
      console.log(" please,for to move the " + rover.name + " select f (forward) b (backward) l (turn left) r ( turn right)" )
      break;
    }
    
    
  }
}



commands("rffrffflbbrflfffffffrflffffffff")

console.log("current direction = " + rover.direction)
console.log("rover1 current position = " + "(" + rover.x + "," + rover.y + ")")
console.log(rover.travelLog)
console.log("rover2 current position = " + "(" + rover2.x + "," + rover2.y + ")")
console.log(moonGrid[0].length)
