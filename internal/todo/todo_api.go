package todo

import (
	"context"
	"fmt"
	"log"

	"github.com/takmatsukawa/tweakpane-demo/internal/app"
)

type TodoHandler struct {
	app *app.App
}

func NewTodoHandler(app *app.App) *TodoHandler {
	return &TodoHandler{app: app}
}

func (h *TodoHandler) Create() error {

	todos := make([]Todo, 0)
	err := h.app.DB().NewSelect().Model(&Todo{}).Scan(context.Background(), &todos)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(todos)

	return nil
}
