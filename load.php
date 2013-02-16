<?php
	include 'connection.php';
	mysql_selectdb("rara7752_multiversegroup");
	
	if ( !empty($_POST['page']) || !empty($_POST['type']) ) {
		$page = $_POST['page'];
		$type = $_POST['type'];
		
		$sql = "SELECT * FROM tblpagecontent WHERE page = '" . $page . "' AND type = '" . $type . "';";
		mysql_query('SET CHARACTER SET utf8');
		$result = mysql_query($sql);
		
		$return = array();
		while( $row = mysql_fetch_array($result) ) {
			$return['page'] = $row[0];
			if ( $row[2] == 'image' ) {
				$return['content'] = explode(',', $row[1]);
			} else {
				$return['content'] = $row[1];
			}
			$return['type'] = $row[2];
		}
		echo json_encode($return);
	}
?>