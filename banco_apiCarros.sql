create database ApiCarros

use ApiCarros


create table carros (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)
);


insert into carros (modelo, placa) values ('Toyota Etios','Emo1564');
insert into carros (modelo, placa) values ('Honda Civic','Emo1584');

select * from carros