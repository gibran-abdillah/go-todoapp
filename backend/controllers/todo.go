package controllers

import (
	"go-todo/models"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func ListTodo(c *gin.Context) {
	var todo_list []models.Todo

	models.DB.Find(&todo_list)
	c.JSON(200, todo_list)
}

func Create(c *gin.Context) {
	var todo models.Todo

	if err := c.ShouldBindJSON(&todo); err != nil {
		c.AbortWithError(400, err)
		return
	}
	if result := models.DB.Create(&todo); result.Error != nil {
		c.AbortWithStatusJSON(400, result.Error)
	}
	c.JSON(http.StatusCreated, todo)
}

func Update(c *gin.Context) {
	var todo models.Todo

	var body models.Todo

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.AbortWithStatusJSON(400, gin.H{"message": "param 'id' is not integer"})
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.AbortWithStatusJSON(400, gin.H{"message": "Invalid json!"})
	}
	if result := models.DB.First(&todo, id); result.Error != nil {
		c.AbortWithStatusJSON(http.StatusNotFound, result.Error)
	}

	if body.Todo != "" {
		todo.Todo = body.Todo
	}

	if body.IsDone != todo.IsDone {
		todo.IsDone = body.IsDone
	}

	models.DB.Save(&todo)

	c.JSON(200, gin.H{"message": "updated!"})

}

func Get(c *gin.Context) {
	var todo models.Todo

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.AbortWithStatusJSON(400, gin.H{"message": "param 'id' is not integer"})
		return
	}
	if result := models.DB.First(&todo, id); result.Error != nil {
		c.AbortWithStatusJSON(http.StatusNotFound, result.Error)
		return
	}
	c.JSON(200, todo)
}

func Delete(c *gin.Context) {
	var todo models.Todo

	var id, err = strconv.Atoi(c.Param("id"))

	if err != nil {
		c.AbortWithStatusJSON(400, gin.H{"message": "param 'id' is not integer"})
		return
	}

	if result := models.DB.First(&todo, id); result.Error != nil {
		c.AbortWithStatusJSON(400, result.Error)
		return
	}
	if result := models.DB.Delete(&todo); result.Error != nil {
		c.AbortWithStatusJSON(400, gin.H{"message": "cant delete data :("})
		return
	}
	c.JSON(200, map[string]string{"message": "deleted"})

}
