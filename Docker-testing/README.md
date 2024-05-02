# RapidFort Project Documentation

This documentation outlines the necessary steps and details of the project required to accomplish the given objectives.

## Project Overview

The primary objective of this project is to develop a web server that enables users to upload files and retrieve information about the uploaded files. The project encompasses the following tasks:

1. **Establish a REST API Server:** Develop a REST API server capable of supporting file uploads and providing comprehensive file information.

2. **API Definition:** Precisely define the REST API endpoints and methods (GET, POST) to facilitate both file uploading and retrieval of information.

3. **Incorporate a User-Friendly UI:** Enhance user experience by implementing a basic web-based user interface, facilitating effortless file uploads and information retrieval.

4. **Implement GitHub Action for Docker Build:** Automate the Docker container building process using GitHub Actions or an equivalent CI/CD pipeline.

5. **Execute Container Launch via Bash Script:** Create a Bash script for initiating the Docker container.

6. **Develop Kubernetes Manifest Files:** Formulate Kubernetes manifest files to proficiently deploy and manage the web server application within a Kubernetes cluster.

## API Definition

The REST API endpoints are explicitly defined as follows:

- **POST / :** This endpoint accepts file uploads and responds with the necessary output, employing the "express-fileupload" library.
- **GET / :** Utilized to initialize the server with a fundamental HTML file named 'index.html,' encompassing both file-upload functionality and a simplistic UI.

## GitHub Repository

The entire project is stored within a GitHub repository: [https://github.com/SaarthakMarkandey/RapidFortTask](https://github.com/SaarthakMarkandey/RapidFortTask)

This repository incorporates the following components:

- Source code for index.html
- server.js serving as the backend for this Node.js application
- Dockerfile for orchestrating the Docker container construction
- GitHub Actions configuration file for automating Docker builds (.github/workflows/docker-image.yml)
- Bash script for effortlessly running the Docker container
- Kubernetes manifest files aimed at deploying the application within a Kubernetes cluster

## Usage Instructions

### Using bash:

1. Begin by cloning the GitHub repository: `git clone https://github.com/SaarthakMarkandey/RapidFortTask`
2. Navigate to the project directory: `cd your-dir`
3. Execute the Bash script to initiate the Docker container: `./run-container.sh`
4. Access the application by visiting: `http://localhost:5000`
5. Leverage the user interface to seamlessly upload files and access information.

### Using Kubernetes (minikube on a local system):

1. Commence by cloning the GitHub repository: `https://github.com/SaarthakMarkandey/RapidFortTask`
2. Navigate to the project directory: `cd your-dir`
3. Initiate Kubernetes via minikube. (If you haven't already, install minikube and start Kubernetes using the command: `minikube start`)
4. Apply the Deployment manifest using kubectl: `kubectl apply -f deployment.yaml`
5. Deploy the service using the manifest file: `kubectl apply -f service.yaml`
   
6. Access the web application by executing: `minikube service express-api`

## Additional Achievements

- The GitHub repository is configured to automatically trigger Docker container builds upon any new commits to the main branch, effectively utilizing GitHub Actions pipeline. This process dynamically updates the Docker image within the darkcoder347 repository on DockerHub.
- The Docker container can be effortlessly launched using the provided Bash script.
- The project encompasses Kubernetes manifest files, streamlining the deployment and management of the application within a Kubernetes cluster.

## Deployment on Google Cloud

- The application is successfully deployed on the Google Cloud platform, leveraging the designated Docker image. The hosted application is accessible at: [http://35.239.111.107:5000/](http://35.239.111.107:5000/)
- The deployment is facilitated through Kubernetes clusters, ensuring scalability and streamlined maintenance.
- The utilized Docker image originates from the DockerHub repository: darkcoder347/saarthak:v1.0.

## Conclusion

In conclusion, this project stands as a testament to the development of a straightforward web server, driven by REST API principles. This architecture seamlessly facilitates file uploads and the retrieval of pertinent information. By adhering to the comprehensive guidelines outlined within this documentation, you can effortlessly deploy the application on your local machine, harness the power of Docker for effective containerization, and extend your capabilities by venturing into Kubernetes deployment for unparalleled scalability and adept management.
