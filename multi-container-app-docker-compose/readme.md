# Run the multi-container application with Docker Compose
#  To Install Docker
1 curl -fsSL https://get.docker.com -o install-docker.sh
2 sudo sh install-docker.sh
# To Install Docker Compose 
Sudo apt-get install docker-compose or yum install docker-compose
# To run the multi-container application 
docker-compose up -d 
# Verify the Containers are running or not 
docker ps 
![Screenshot (46)](https://github.com/user-attachments/assets/3252513f-88da-4902-b763-c7150e71955d)
# Acees the application 
# Local Machine:
If you're running the application locally, you can access it via localhost (127.0.0.1) on port 5000. Open your browser and go to: http://127.0.0.1:5000
# EC2 Instance: 
If the application is hosted on an AWS EC2 instance with a public IP, replace localhost with your EC2's public IP address. For example, if the EC2 public IP is 12.34.56.78, access the application using: http://12.34.56.78:5000
![Screenshot (48)](https://github.com/user-attachments/assets/6321a94c-50d6-4235-aab2-83e7b7a90c99)
# Connecting to the Database:
Your application is now running with both web and database containers. You can connect to the PostgreSQL database using pgAdmin or any database viewer application.
**pgAdmin or DB Viewer:** Use the container’s IP or hostname, along with the PostgreSQL credentials (e.g., username, password, and port) defined in your docker-compose.yml or environment variables.
![Screenshot (50)](https://github.com/user-attachments/assets/a7801a88-8db3-4d6e-b82d-4a1104bce1e7)
![Screenshot (51)](https://github.com/user-attachments/assets/b1cedc1a-78af-4920-b32f-a47ebe036151)
![Screenshot (52)](https://github.com/user-attachments/assets/53852ce1-c427-4102-aafb-34cd85129ee3)


