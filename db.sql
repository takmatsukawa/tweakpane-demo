create table todos (
    id serial primary key,
    title text not null,
    description text not null,
    done boolean not null default false
);

insert into todos (title, description) values ('First todo', 'This is the first todo');