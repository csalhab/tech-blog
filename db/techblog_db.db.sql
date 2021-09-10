DROP DATABASE IF EXISTS techblog_db;

CREATE DATABASE techblog_db;

USE techblog_db;

select * from posts;
select * from user;

select * from posts
where user_id = 1;

select posts.id, posts.title, posts.content, posts.user_id, user.username from posts
INNER JOIN user ON user.id = posts.user_id;