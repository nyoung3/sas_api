module.exports = {
    "up": "CREATE TABLE `dev`.`sas_users` (`id` int NOT NULL AUTO_INCREMENT,`email` varchar(255) DEFAULT '',`password` text NOT NULL,`user_group_id` int,`username` varchar(255) NOT NULL, PRIMARY KEY (id));",
    "down": "DROP TABLE `dev`.`sas_users`;"
}