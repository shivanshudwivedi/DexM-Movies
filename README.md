# Libre

## Application nature and purpose

Our webiste will suggest a variety of services to its users, who will be people fond of reading books. 
1. It will allow its users to search a book and find infromation about it, including its name, author, genre, and the year it was written. 
2. It will allow to search the books read by a specific user. 
3. It will allow to see the ratings of all books given by a specific user. 

## Contributors

1. Anahit Avagyan 
2. Armen Nanayan 

## The estimated modules

- Module 1   -  Given the book id, provides information about that book. 
- Module 2   -  a) Given a book id, provides the book along with its rating, 
                b) Given a user id, provides the books and their ratings given by that user. 
- Module 3   -  Given user id, provides the list of the books read by that user along with the information about those books and                             the ratings that the user provided for each of them.  

## Languages and Frameworks 

1. Java
2. SpringBoot
3. Python
4. HTML/CSS
5. Flask
3. Kubernetes
4. Docker

## General description of the UI with the primary actions
The user will be able to 
1. Get information about a specific book 
2. See the rating of a specific book 
3. See the list of books and the ratings for each of them provided by a specific user 
5. See the books that a user read along with the information about those books and the ratings that the user provided for each of them

## Running the app in Kubernetes 
To run the app in Kubernetes, you should have Docker for Desktop installed.  
1. To clone the project to your local machine, use the following command:
```sh
git clone https://github.com/anahitavagyan/415-Project-New-Idea.git
```
2. The folder K8s contains all the necessary YAML files. To create all the necessary deployments, services and the configmap, run the following command:  
```sh
kubectl apply -f K8s
```
3. To check if all the components are up and running, use the following command:
```sh
kubectl get all
```
4. Once they all are ready, go to http://localhost:30105

## Running the app on GKE
1. Assuming that the repository is public (which is not the case, it is private now), to clone it to your GKE Cluster, use the following command:
```sh
git clone https://github.com/anahitavagyan/415-Project-New-Idea.git
```
2. If you cloned the repository previously, to make sure you are running the latest version of it, run the following command:
```sh
git pull
```
3. Chnage the directory to the project by running:
```sh
cd 415-Project-New-Idea
```
4. The folder K8s contains all the necessary YAML files. To create all the necessary deployments, services and the configmap, run the following command:  
```sh
kubectl apply -f K8s
```
5. To check if all the components are up and running, use the following command:
```sh
kubectl get all
```
6. We must tell the GKE cloud firewall that traffic through the NodePort number should be allowed. To open a port through the firewall, use the following command:
```sh
gcloud compute firewall-rules create my-rule1 --allow tcp:30105
```
7. To find the External IP address of one of your nodes, run the following command:
```sh
kubectl get nodes -o wide
```
8. To see the application, open your browser and type http://EXTERNAL_IP:30105 replacing the EXTERNAL_IP with one of the node External IPs found in the previous step.  

## Libre Architecture 
![The Architecture of the Libre app.](https://github.com/anahitavagyan/415-Project-New-Idea/blob/main/Libre%20Architecture.png)
