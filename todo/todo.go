package todo

import (
	"github.com/uptrace/bun"
)

type Todo struct {
	bun.BaseModel `bun:""`

	ID          int    `bun:",pk,autoincrement"`
	Title       string `bun:",notnull"`
	Description string `bun:",notnull"`
	Done        bool   `bun:",notnull,default:false"`
}
