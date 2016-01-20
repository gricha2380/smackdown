// version 0.1

var player1 = 
{
		// name: "player1",
		// durability: 4,
		// energy: 1,
		// fighting: 3,
		// intelligence: 3,
		// speed: 3,
		// strength: 3
	};	
	var player2 = 
	{
		// name: "player2",
		// durability: 3,
		// energy: 4,
		// fighting: 5,
		// intelligence: 4,
		// speed: 5,
		// strength: 4
	};



	function setPlayer1Levels(Alias, Name, Durability, Energy, Fighting, Intelligence, Speed, Strength)
	{
		player1.alias = Alias;
		player1.name = Name;
		player1.durability = Durability;
		player1.energy = Energy;
		player1.fighting = Fighting;
		player1.intelligence = Intelligence;
		player1.speed = Speed;
		player1.strength = Strength;
	}

	function setPlayer2Levels(Alias, Name, Durability, Energy, Fighting, Intelligence, Speed, Strength)
	{
		player2.alias = Alias;
		player2.name = Name;
		player2.durability = Durability;
		player2.energy = Energy;
		player2.fighting = Fighting;
		player2.intelligence = Intelligence;
		player2.speed = Speed;
		player2.strength = Strength;
	}




function showVictory()// show victory or ask to choose a player
{


	if(typeof player1.alias === "undefined" || typeof player2.alias === "undefined")
	{
	//document.getElementById('noUsers').setAttribute('class','visible');
	$("#noUsers").fadeIn(90);
}
else
{





	//var data1 = eval("("+ text1 +")");
	
	var mulitipliers = [5, 4, 3, 2, 1, 6];
	var totalFirst = 0, totalSecond = 0, tracker = 0, tracker2 = 0, MP = 0.4, adjustment = 0, min = 0, max = 0;

	//player1.name = text1.characters[0].alias;
	player1.durability = parseInt(player1.durability, 10);
	player1.energy = parseInt(player1.energy, 10);
	player1.fighting = parseInt(player1.fighting, 10);
	player1.intelligence = parseInt(player1.intelligence, 10);
	player1.speed = parseInt(player1.speed, 10);
	player1.strength = parseInt(player1.strength, 10);


	//player2.name = text1.characters[1].alias;
	player2.durability = parseInt(player2.durability, 10);
	player2.energy = parseInt(player2.energy, 10);
	player2.fighting = parseInt(player2.fighting, 10);
	player2.intelligence = parseInt(player2.intelligence, 10);
	player2.speed = parseInt(player2.speed, 10);
	player2.strength = parseInt(player2.strength, 10);
	
	console.log(player1);
	console.log(player2);
	/* Battle Engine-------------------------------------------------------------------- */
	totalFirst = Math.exp(MP * player1.durability) + Math.exp(MP * player1.energy) + Math.exp(MP * player1.fighting) + 
	Math.exp(MP * player1.intelligence) + Math.exp(MP * player1.speed) + Math.exp(MP * player1.strength);

	totalSecond = Math.exp(MP * player2.durability) + Math.exp(MP * player2.energy) + Math.exp(MP * player2.fighting) + 
	Math.exp(MP * player2.intelligence) + Math.exp(MP * player2.speed) + Math.exp(MP * player2.strength);

//Durability--------------------->
if(player1.durability > player2.energy)
{
	adjustment = adjustment + 3;
}
else if(player1.durability < player2.energy)
{
	adjustment = adjustment - 3;
}
else{}

	if(player1.durability > player2.speed)
	{
		adjustment = adjustment + 3;
	}
	else if(player1.durability < player2.speed)
	{
		adjustment = adjustment - 3;
	}
	else{}	
//Energy-------------------------->
if(player1.energy > player2.fighting)
{
	adjustment = adjustment + 3;
}
else if(player1.energy < player2.fighting)
{
	adjustment = adjustment - 3;
}
else{}

	if(player1.energy > player2.strength)
	{
		adjustment = adjustment + 3;
	}
	else if(player1.energy < player2.strength)
	{
		adjustment = adjustment - 3;
	}
	else{}
//fighting--------------------------->
if(player1.fighting > player2.durability)
{
	adjustment = adjustment + 3;
}
else if(player1.fighting < player2.durability)
{
	adjustment = adjustment - 3;
}
else{}

	if(player1.fighting > player2.intelligence)
	{
		adjustment = adjustment + 3;
	}
	else if(player1.fighting < player2.intelligence)
	{
		adjustment = adjustment - 3;
	}
	else{}
//Speed------------------------------->
if(player1.speed > player2.fighting)
{
	adjustment = adjustment + 3;
}
else if(player1.speed < player2.fighting)
{
	adjustment = adjustment - 3;
}
else{}

	if(player1.speed > player2.strength)
	{
		adjustment = adjustment + 3;
	}
	else if(player1.speed < player2.strength)
	{
		adjustment = adjustment - 3;
	}
	else{}
//Strength----------------------------->
if(player1.strength > player2.durability)
{
	adjustment = adjustment + 3;
}
else if(player1.strength < player2.durability)
{
	adjustment = adjustment - 3;
}
else{}

	if(player1.strength > player2.fighting)
	{
		adjustment = adjustment + 3;
	}
	else if(player1.strength < player2.fighting)
	{
		adjustment = adjustment - 3;
	}
	else{}
//Intellegence -------------------------->
//Calculate min and max of fighter 2
min = player2.durability;
max = player2.durability;
for(var holder in player2)
{
	if(typeof player2[holder] === "number")
	{
		if(player2[holder] < min)
		{
			min = player2[holder];
		}
	}

}

for(var holder1 in player2)
{
	if(typeof player2[holder1] === "number")
	{
		if(player2[holder1] > max)
		{
			max = player2[holder1];
		}
	}

}

if(player1.intelligence > min)
{
	adjustment = adjustment + 2;
}
else if(player1.intelligence < max)
{
	adjustment = adjustment - 2;
}

//adjust player 1 score-------------------------------->

totalFirst = totalFirst + adjustment;




console.log("First total: " + totalFirst + "Second Total: " + totalSecond);

if(totalFirst === totalSecond)
{
		//document.getElementById('draw').setAttribute('class','visible');
		$("#draw").fadeIn(90);
	}
	else if (totalFirst > totalSecond)
	{
		document.getElementById("results").innerHTML = player1.alias + " ...";
	}
	else
	{
		document.getElementById("results").innerHTML = player2.alias + " ...";
	}
		//document.getElementById('victory').setAttribute('class','visible');
		$("#victory").fadeIn(90);
	}
}

function hideVictory()
{
	//document.getElementById('victory').setAttribute('class','hidden');
	$("#victory").fadeOut(90);
}
function hideDraw()
{
	//document.getElementById('draw').setAttribute('class','hidden');
	$("#draw").fadeOut(50);
}

function hideNoUsers(){
	$("#noUsers").fadeOut(90);
	//document.getElementById('noUsers').setAttribute('class','hidden');
}


//Player One
function clearP1(){
	$("#playerOneName").select2('val', 'All');
	document.getElementById('heroImg').setAttribute('src', 'img/blank.png');
	clearBars();
	player1="";

}

function clearBars(){
//clear then set Durability

for(var j = 0; j< 6; j++)
{

	//clearing all boxes
	for (var i = 0; i < 7; i++)
	{
		document.getElementsByClassName('box' + j)[i].setAttribute('class','box' + j);
	}	

/*
box0 = dur
box1 = energy
box2 = fighting
box3 = intelligence
box4 = speed
box5 = strength

*/

} //close j loop


//adding one blue fill for each row
for(var k = 0; k<6; k++)

	{document.getElementsByClassName('box' + k)[0].setAttribute('class','box' + k + ' fill');}
}




//Player Two
function clearP2(){
	$("#playerTwoName").select2('val', 'All');
	document.getElementById('heroImg2').setAttribute('src', 'img/blank.png');
	clearBars2();
	player2="";

}

function clearBars2(){
//clear then set Durability

for(var j = 0; j< 6; j++)
{

	//clearing all boxes
	for (var i = 0; i < 7; i++)
	{
		document.getElementsByClassName('boxB' + j)[i].setAttribute('class','boxB' + j);
	}

/*
box0 = dur
box1 = energy
box2 = fighting
box3 = intelligence
box4 = speed
box5 = strength

*/

} //close j loop

//adding one blue fill for each row
for(var k = 0; k<6; k++)

	{document.getElementsByClassName('boxB' + k)[0].setAttribute('class','boxB' + k + ' fill');}
}