package models

import (
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Todo struct {
	Id        int64     `gorm:"primaryKey" json:"id"`
	Todo      string    `json:"todo"`
	CreatedAt time.Time `gorm:"autoCreatetime" json:"created_at"`
	IsDone    bool      `json:"done" gorm:"default:false"`
}

var DB *gorm.DB

func init() {
	connector := mysql.Open("db_user:password123@tcp(localhost:3306)/todo?parseTime=true")
	database, err := gorm.Open(connector)

	if err != nil {
		panic(err)
	}
	database.AutoMigrate(&Todo{})
	DB = database
}
