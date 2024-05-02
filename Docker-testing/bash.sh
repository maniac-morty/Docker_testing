#Define Variables
DOCKER_IMAGE_NAME="darcoder347/saarthak:v1.0"

#Pull the image from Docker Hub
docker pull $DOCKER_IMAGE_NAME

#Run the image
docker run -d -p 5000:5000 $DOCKER_IMAGE_NAME