module.exports = {
    "up": "CREATE TABLE `dev`.`sas_accounts` (`id` int AUTO_INCREMENT,`title` varchar(255) NOT NULL,`type` varchar(255) NOT NULL,`deleted` tinyint NOT NULL DEFAULT '0', PRIMARY KEY (id));",
    "down": "DROP TABLE `dev`.`sas_accounts`;"
}