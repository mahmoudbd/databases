Exercise 1 : Normalization   
                                                         


                                     I made an exercise chart AS PDF , please check it


+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
| member_id | member_name   | member_address | dinner_id | dinner_date | venue_code | venue_description | food_code | food_description |
+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
|         1 | Amit          | 325 Max park   | D00001001 | 2020-03-15  | B01        | Grand Ball Room   | C1, C2    | Curry, Cake      |
|         2 | Ben           | 24 Hudson lane | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1, C2    | Soup, Cake       |
|         3 | Cristina      | 516 6th Ave    | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1, C2    | Soup, Cake       |
|         4 | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
|         5 | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
|         6 | Fatima        | 56 8th Ave     | D00001004 | 2020-03-20  | B04        | Mama's Kitchen    | F1, M1    | Falafal, Mousse  |
|         7 | Gabor         | 54 Vivaldi St  | D00001005 | 2020-02-20  | B05        | Hungry Hungary    | G1, P2    | Goulash, Pasca   |
|         8 | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+





How can you convert the table into 1NF ?
•	Rule 1 : Single valued attributes (each column should have atomic value, no multiple values)
•	Rule 2 : Attribute domain should not change
•	Rule 3 : Unique names for attributes / columns
•	Rule 4 : Order does not matter







member_id	member_name   	member_address	 dinner_id	dinner_date	venue_code	venue_description   food_code	     food_description
1	          Amit	         325 Max park    D00001001	2020-03-15  	B01	         Grand Ball Room        C1	             Curry
1	          Amit	         325 Max park    D00001001	2020-03-15  	B01	         Grand Ball Room        C2	             Cake
2	          Ben	         24 Hudson lane  D00001002	2020-03-15  	B02	         Zoku Roof Top     	S1	             Soup
2	          Ben	         24 Hudson lane  D00001002	2020-03-15  	B02	         Zoku Roof Top     	C2	             Cake
3	        Cristina	516 6th Ave    	 D00001002	2020-03-15  	B02	         Zoku Roof Top     	S1	             Soup
3	        Cristina	516 6th Ave      D00001002	2020-03-15  	B02	         Zoku Roof Top     	C2	             Cake
4	         Dan 	         89 John St      D00001003	2020-03-20  	B03	         Goat Farm         	P1	             Pie
4	         Dan 	         89 John St      D00001003	2020-03-20  	B03	         Goat Farm         	T1	             Tea
4	         Dan           	89 John St     	 D00001003	2020-03-20  	B03	         Goat Farm         	M1	            Mousse
5	         Ema	        91 Pixar St    	 D00001003	2020-03-20  	B03	         Goat Farm         	P1	             Pie
5	         Ema	        91 Pixar St    	 D00001003	2020-03-20  	B03	         Goat Farm         	T1	             Tea
5	         Ema	        91 Pixar St    	 D00001003	2020-03-20  	B03	         Goat Farm         	M1	           Mousse
6	        Fatima	        56 8th Ave     	 D00001004	2020-03-20  	B04	         Mama's Kitchen    	F1	          Falafal
6	        Fatima	        56 8th Ave     	 D00001004	2020-03-20  	B04	         Mama's Kitchen    	M1	           Mousse
7	        Gabor	       54 Vivaldi St	 D00001005 	2020-02-20  	B05	         Hungry Hungary    	G1	          Goulash
7	        Gabor	       54 Vivaldi St	 D00001005 	2020-02-20  	B05	         Hungry Hungary    	P2	           Pasca
8	        Hema 	       9 Peter St     	 D00001003	2020-03-20  	B03	         Goat Farm         	P1	            Pie
8	        Hema 	       9 Peter St     	 D00001003	2020-03-20  	B03	         Goat Farm         	T1	            Tea
8	        Hema 	       9 Peter St     	 D00001003	2020-03-20  	B03	         Goat Farm         	M1	          Mousse






2-What are the super, candidate, primary keys ?
Create a primary key to member_id so

Primary key 
member_id 

Super key 
{member_name |  mamber _address  | dinner_id - food_code}

Candidate key  
{ member_name |  mamber _address}
{ member_name |  food_code  }




1-	What are the potential relationships between different possible tables ?

2-	How can you convert the table into 2NF ?

       The table should be in the First Normal Form.
       There should be no Partial Dependency.

3-	How can you convert the table into 3NF ?


                                                                             
                    Tables Planned


First Table


member_id  
P_K     member_name   	member_address
1	Amit	         325 Max park   
2	Ben	         24 Hudson lane 
3	Cristina	516 6th Ave    
4	Dan 	        89 John St     
5	Ema	        91 Pixar St    
6	Fatima	        56 8th Ave     
7	Gabor	       54 Vivaldi St
8	Hema 	       9 Peter St     


second Table

dinner_id 
  P_K	       dinner_date  venue_code	venue_description
D00001001	2020-03-15  	B01	Grand Ball Room   
D00001002	2020-03-15  	B02	Zoku Roof Top     
D00001003	2020-03-20	B03	Goat Farm         
D00001004	2020-03-20	B04	Mama's Kitchen    
D00001005	2020-03-20  	B05	Hungry Hungary    


Third Table 


food_no
P_K	food_code  food_description
101	C1	       Curry
102	C2	       Cake
103	S1	       Soup
104	P1	       Pie
105	P2	       Pasca
106	T1	       Tea
107	M1	       Mousse
108	F1	       Falafal
109	G1	       Goulash


Forth Table 

member_id      	                                                 food_no                                    dinner_id 
  	                                                             
F_k  references  first table  (member_id)	F_k  references  second table  (dinner_id)	F_k  references  thired table  (food_no)



