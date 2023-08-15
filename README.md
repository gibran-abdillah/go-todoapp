# Go-To do

## To Do List App build with Golang and Reactjs 

### About 

As I dive into Golang and ReactJS for the first time, I want to keep things interesting on my learning journey. So, I've decided to learn by creating some practical apps. This way, I hope to make learning enjoyable and engaging while gaining valuable experience in the process.


### Preview
[![Watch the video](https://github.com/gibran-abdillah/quiz-app/assets/70421698/9d928a07-ce4d-4a03-9092-a76b37e26c4b)](https://github-production-user-asset-6210df.s3.amazonaws.com/70421698/260694047-89267f29-8b83-4e77-aac3-6806b4362d74.mp4)

### Set up 

#### For backend 
- Add your credentials database to ```backend/models/todo.go```
```go
// change the credentials with your own!
connector := mysql.Open("db_user:password123@tcp(localhost:3306)/todo?parseTime=true")
```
- go to backend directory
```sh 
cd backend
```
- Add your credentials database to ```backend/models/todo.go```
```go
// change the credentials with your own!
connector := mysql.Open("db_user:password123@tcp(localhost:3306)/todo?parseTime=true")
```

- Build the golang app 

```sh
go build . 
```

- Run the golang app 

```
./go-todo
```

### For Frontend
- Go to 'frontend' directory
```sh
cd frontend
```
- Install the packages 
```sh
npm install 
```
- Start the server 
```
npm start 
```

### Finalization

After all steps are completed, you can check the browser at ```http://localhost:3000```

### Screenshots 
![Screenshot 2023-08-15 180007](https://github.com/gibran-abdillah/quiz-app/assets/70421698/9d928a07-ce4d-4a03-9092-a76b37e26c4b)

![Screenshot 2023-08-15 180007](https://github.com/gibran-abdillah/quiz-app/assets/70421698/90a6fc17-da97-447e-86f4-cde2eb10b604)
