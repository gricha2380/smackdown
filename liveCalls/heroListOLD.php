<?php
/* THIS IS FOR THE MAIN PAGE COURSE SEARCH */
require("config.inc.php");
require("Database.class.php");

//get the q parameter from URL
//$q=$_GET["q"];
$term = $_GET['term'];
$result = array();
//lookup all links from the xml file if length of q>0
if (strlen($term)>0){
	
		array_push($result, array("id"=>"-1", "text"=>"School not Selected"));
	
	}else{

			// create the $db ojbect
			$db = new Database($config['server'], $config['user'], $config['pass'], $config['database'], $config['tablePrefix']);

			// connect to the server
			if($db->connect()){

				// $q=mysql_real_escape_string($q);
				$term=mysql_real_escape_string($term);
				$term = str_replace(" ", "",$term);
				/*
				//json test
				$terms = explode(' ', $term);
				$bits = "";
				$x = 0;
				foreach ($terms as $term2) {
					if($x>0){
						$bits .= "%$term2%";
					}else{
						$bits .= "%$term2%";
					}
					$x++;
				}
				*/
				

				$sql = "SELECT * FROM characterinfo WHERE name like '%$term%' OR alias like '%$term%'"; 
				$sql = $db->query($sql); 
				if($sql){
				if (mysql_num_rows($sql) > 0) {  //if query returns something
					while ($x = mysql_fetch_assoc($sql)){
						
						array_push($result, array("id"=>$x["id"], "thumbnail"=>$x["thumbnail"],"durability"=>$x["durability"],"energy"=>$x["energy"],"fighting"=>$x["fighting"],"intelligence"=>$x["intelligence"],"speed"=>$x["speed"],"strength"=>$x["strength"],"description"=>$x["description"],"alias"=>$x["alias"])); //
					}
				}else{	
						array_push($result, array("id"=>"-1", "thumbnail"=>"../img/blank.png","durability"=>"1","energy"=>"1","fighting"=>"1","intelligence"=>"1","speed"=>"1","strength"=>"1","description"=>"1","alias"=>"1")); //
				}	
						}else{	
				array_push($result, array("id"=>"-1", "text"=>"No results"));
				}
			
			}else{
					array_push($result, array("id"=>"-1", "text"=>"Could not connect"));
			}
	}
	
	echo "{\"results\":" . json_encode($result) . "}";    
  
}


?>