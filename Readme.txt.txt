Docker Repo and Notes

IntroDuction
First image from docker hub 
	1. hello-world 
	2. busy-box
	
	
commands 

 docker ps -all 
 logs all the activity that happened with docker

 //accessing docker terminal
 winpty docker exec -it 0937ee5d6f58 bash 	
 
 winpty is used to access on windows terminal
 
 c + d to exit this terminal to the your bash terminal
 
 Stop Container image
 Some Commands
 docker stop "id" recommended
 docker kill "id" 
 