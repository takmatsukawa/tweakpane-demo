package app

import (
	"database/sql"
	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/pgdialect"
	"github.com/uptrace/bun/driver/pgdriver"
	"sync"
)

type App struct {
	dbOnce sync.Once
	db     *bun.DB
}

func New() *App {
	return &App{}
}

func (a *App) DB() *bun.DB {
	a.dbOnce.Do(func() {
		dsn := "postgres://postgres:postgres@localhost:5432/example?sslmode=disable"
		sqldb := sql.OpenDB(pgdriver.NewConnector(pgdriver.WithDSN(dsn)))

		a.db = bun.NewDB(sqldb, pgdialect.New())
	})
	return a.db
}
