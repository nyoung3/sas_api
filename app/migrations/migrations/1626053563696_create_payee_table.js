module.exports = {
    "up": "CREATE TABLE `dev`.`sas_payees` (`id` int AUTO_INCREMENT,`title` varchar(255),`user_id` int, PRIMARY KEY (id));",
    "down": "DROP TABLE `dev`.`sas_payees`;"
}