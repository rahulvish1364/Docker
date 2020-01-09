Docker Repo and Notes

IntroDuction
First image from docker hub 
	1. hello-world 
	2. busy-box
	
	
commands 

 docker ps -all 
 logs all the processes/image that are running in the docker 

 //accessing docker terminal
 winpty docker exec -it 0937ee5d6f58 bash 	
 
 winpty is used to access on windows terminal
 
 c + d to exit this terminal to the your bash terminal
 
 Stop Container image
 Some Commands		
 docker stop "id" recommended
 docker kill "id" 
 
 // Caching about command
 
 Accessing container shell
 
 winpty docker exec -it "CONTAINER ID" sh
 
 
 Each commands is a step in image creation.
 Commands are cached and next any image is created then that cached container is used in which that command is running
so it make the image creation process insanely fast. Because it won't be creating the image from the scratch. 
 
 // Naming docker containers
 
 We can give the container while creating it with the Dockerfile.
 docker build -t rahul/mymongo:latest .
 
 // . in the end is important
 
 rahul any username / name of your container 
 
 running container with the name
 
 docker run rahul/mymongo
 
 or 
 docker run rahul/mymongo:latest
 
 it doest'nt matter if you give tag name
 in case you want to run or build any perticular version you can give the version while creating.
 
 
 
--------------------------------------- Next Step Learning ------------------------------------------------
Creating the Node app

Adding node see dockerfile

then build using docker build -t rahul/nodeapp .


docker run rahul/nodeapp

this will run app in the container on given port eg 8000

docker run -p 8000:8000 rahul/nodeapp

first port your machine code
second port is container which can connected to your port

Performance improvement can be done by adding the pakage.json file first and then copying the new code in the working directory.

