<?php
/* THIS IS FOR THE MAIN PAGE COURSE SEARCH */
require("config.inc.php");
require("Database.class.php");

//get the q parameter from URL
$q=$_GET["q"];
$term = $_GET['term'];
$result = array();


function debug_to_console( $data ) {

    if ( is_array( $data ) )
        $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
    else
        $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";

    echo $output;
}

debug_to_console($term);

//lookup all links from the xml file if length of q>0
if (strlen($q)>0){
	if (!isset($_GET['q']) || $_GET['q'] == 'undefined' || empty($q) || $q=="" || $q=="0" || $q < 0){
	
		array_push($result, array("id"=>"-1", "text"=>"School not Selected"));
	
	}else{

			// create the $db ojbect
			$db = new Database($config['server'], $config['user'], $config['pass'], $config['database'], $config['tablePrefix']);

			// connect to the server
			if($db->connect()){

				$q=mysql_real_escape_string($q);
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
				if (mysql_num_rows($sql) > 0) { 
					while ($x = mysql_fetch_assoc($sql)){
						
						array_push($result, array("id"=>$x["id"], "text"=>$x["class_name"] . " - " . $x["class_title"]));
					}
				}else{	
						array_push($result, array("id"=>"-1", "text"=>"No results"));
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