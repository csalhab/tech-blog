DROP DATABASE IF EXISTS techblog_db;

CREATE DATABASE techblog_db;

USE techblog_db;

select * from post;
select * from user;

select * from post
where user_id = 1;

select post.id, post.title, post.content, post.user_id, user.username from post
INNER JOIN user ON user.id = post.user_id;