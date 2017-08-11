

Feature: loginGmail

@Regression
Scenario Outline:  Successful login 
  Given I am on Gmail login page
   When I enter username as <username> 
   And I enter password as <password>
   Then Login should be successful 
  
		Examples:
		|	username		                |	password		|
		|	agarwalpr12@gmail.com 		|	priya1994		|	
		|	agarwalay12@gmail.com		|	ayushi1994    |


@Smoke
 Scenario Outline: Bad login 
  Given I am on Gmail login page
   When I enter username as <username>
   And I enter password as <password>
   Then Login should be Fail 
   
		Examples:
		|	username		                |	password		|
		|	srishti.13it066@abes.ac.in 		|	apple			|	
		|	srishtidrolia44@gmail.com		|	gdfda  	    |