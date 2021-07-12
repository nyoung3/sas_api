module.exports = {
    "up": "CREATE TABLE `dev`.`sas_transactions` (`id` serial,`desc` varchar(255),`payee_id` int,`amount` float, PRIMARY KEY (id));",
    "down": "DROP TABLE `dev`.`sas_transactions`;"
}