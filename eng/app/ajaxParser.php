<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

	class ajaxParser {

		public function __construct(){
			include('database.php');
			$this->db = new Database();
			$this->dataPost = $_POST;		
		}


		public function parsePost(){			
			switch($this->dataPost['type']){
				case 'emailForNews':	
					if($this->db->save('news', $this->dataPost['email'])) {
						$result = 'true';
					} else {
						$result = 'false';
					}
					echo json_encode($result);
					break;
				case 'emailVolunteer':
					if($this->db->save('volunteer', $this->dataPost['email'])) {
						$result = 'true';
					} else {
						$result = 'false';
					}
					echo json_encode($result);
					break;
			}
		}

	}

	$obj = new ajaxParser();
	$obj->parsePost();

?>