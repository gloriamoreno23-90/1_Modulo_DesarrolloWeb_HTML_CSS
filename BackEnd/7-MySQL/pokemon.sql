Select * From pokemon
Select Name, Type1, Type2 From pokemon
Select * From pokemon where Type1 like 'Fire' OR Type2 like 'Fire'
Select * From pokemon where Speed > 90
Select * From pokemon order by Total desc
Select * From pokemon where Legendary like 'True'
Select Name, Type1, Type2 From pokemon where Generation = 2
Select * From pokemon where Defense > 70 and (Type1 like 'Grass' OR Type2 like 'Grass')
Select * From pokemon where Attack between 50 and 70
Select count(*) as cantidad from pokemon
Select Avg(Total) from pokemon
Select * from pokemon where (Type1 like 'Water' or Type2 like 'Water') and Total > 400
Select Name, Type1, Type2 from pokemon where name like 'C%'
Select * from pokemon where Generation = 3 and Legendary like 'False'
Select * from pokemon where name like '%Mega%'
