
# Phase 1 : requirements
# introduction 
in this note i will but all of my thoughts to build up the project 

# Purpose 
the purpose of this project is to enter a number and will returned in IEEE 754 format 

# How?
the user will run the program and enter a number with a limited scope (scope will be discussed later) and outputs a 64 bits.

# Process flow 
here's a deeper description of how the process will go 
1. user runs a program 
2. user enters a number and clicks Enter
3. the project will take the number and do it's calculations 
4. returns result with these extra details
	1. message to use(String): message for user for some cases (inaccuracy , exceptions ,...)
	2. sign section (String): positive or negative  
	3. exponent section (String): Bias addition 
	4. mantissa (String) : significand extraction without padding "in Decimal not binary"
	5. final result(String) : the binary representation with padding to 64 bits
	6. original number (int) : number entered by user 

# Scope
here all what the program cannot handle and may cause a bad response
- non-numeric inputs
- exponent notations : 
	  - 1000 is valid 
	  - 1e+3 isn't valid
- empty inputs :
	- clicking enter without typing anything
	- spaces
	
	**note**: numbers scopes are skipped because there's no possible way if user inputs number above (1.8 * 10^308) in numerical and without notations !
# Components
the whole project will have two modules will be shown below

- **Interface** 
	- define: this module will be the interface to the project including:
		- greeting page 
		- parsing (importing)
	  
- **business logic** 
	- define : this module will have all core algorithms for project including:
		- algorithms calculation
		- exceptions 
		- parsing (export)
		  
	**note:** the reason of separating modules is to achieve two ideas:
	1. separation of concerns
	2. Ability to include and use the parsing between modules skill


---
# Phase 2: building logic (notes)




# notes to check
- check validation if js can validate boolean inputs or not (will counted as 1 or 0)
- add validation to null & undefined types to be rejected 
- add section in string message to be the result of extracted binary 64bits using the mantissa formula
- project maybe inaccurate in subnormal numbers like close-to-zero cases ~0.00001

# Remaining
- link modules
- add input on interface 
- validation
- revise your code 
  
 
