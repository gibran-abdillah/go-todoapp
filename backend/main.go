package main

import (
	"fmt"
	"go-todo/controllers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	fmt.Println("I'm the first!")
}
func main() {

	router := gin.Default()

	cors := cors.New(
		cors.Config{
			AllowOrigins: []string{"*"},
			AllowMethods: []string{"PUT", "DELETE", "POST", "GET"},
			AllowHeaders: []string{"Origin"},
		},
	)
	router.Use(cors)

	router.Use()

	router.GET("/api/tasks", controllers.ListTodo)
	router.POST("/api/tasks", controllers.Create)

	router.PUT("/api/tasks/:id", controllers.Update)
	router.GET("/api/tasks/:id", controllers.Get)
	router.DELETE("/api/tasks/:id", controllers.Delete)
	//fmt.Println("Hello world", todo)
	router.Run()
}
