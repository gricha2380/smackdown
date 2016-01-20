function battle()
{
	

	var angel = 
	{
		durability: 4,
		energy: 1,
		fighting: 3,
		intelligence: 3,
		speed: 3,
		strength: 3
	};

	var spiderman = 
	{
		durability: 3,
		energy: 4,
		fighting: 5,
		intelligence: 4,
		speed: 5,
		strength: 4
	};

	var mulitipliers = [5, 4, 3, 2, 1, 6];
	var totalFirst = 0, totalSecond = 0, tracker = 0;

	
	for(var holder in angel)
	{
		totalFirst = totalFirst + angel[holder] * mulitipliers[tracker];
		tracker++;
	}
	tracker = 0;

	for(var holder2 in spiderman)
	{
		totalSecond = totalSecond + spiderman[holder2] * mulitipliers[tracker];
		tracker++;
	}

	if(totalFirst > totalSecond)
	{
		document.getElementById("results").innerHTML = "Angle Wins!";
	}
	else
	{
		document.getElementById("results").innerHTML = "Spider-Man Wins!";
	}
	
}; 

