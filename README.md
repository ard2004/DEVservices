# About
**"A project by which users can transfer files across the devices"**

## version 1:
- A simple html form to upload file and express to handle backend

### **working plan for version 1** -:
 - Install NodeJS in your machine
 - download the project to your system:  
 ```git clone git@github.com:captain-Arvoy/DEVservices.git``` 
 - go to the DEVservices directory and run  
 ```npm install``` command 
 - run ```npm run dev```


# FAQ
Q) How to debug the error "Error: listen EADDRINUSE: address already in use :::8001"  
**(soln):**  
```lsof -i :8001 -t```  
```kill -9 [the process id]```
