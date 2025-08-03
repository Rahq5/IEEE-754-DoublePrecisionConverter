
# Phase 1 : requirements
# introduction 
This Readme file is to share with you all of my ideas , plannings , etc... 
so any developer can (including me) can enhance or add features.

# Purpose 
the purpose of this project is to enter a number then returned in IEEE 754 format double precision 

# How?
the user will run the program and enter a number with a limited scope (scope will be discussed later) and outputs a 64 bits.

# Process flow 
here's a deeper description of how the process will go (also check diagram in phase 2)
1. user runs a program 
2. user enters a number and clicks Enter
3. the project will take the number and do it's calculations 
4. returns a template showing the result , looks like :
	1. Original number (int) : showing input number from user
	2. Sign section (String): positive or negative  
	3. Exponent_binary  (String): showing exponent after addition in binary 
	4. Exponent_number  (int):  showing exponent after addition in decimal
	5. mantissa_binary (String) : significand extraction without padding 
	6. final result(String) : the binary representation with padding to 64 bits
	7. message to use(String): message for user for some cases (inaccuracy , exceptions ,...)

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
		- building String blocks
		- parsing (importing)
	  
- **business logic** 
	- define : this module will have all core algorithms for project including:
		- algorithms calculation
		- exceptions 
		- parsing (export)
		  
	**note:** the reason of separating modules is to achieve two ideas:
	1. separation of concerns
	2. to include skill of parsing between modules in node.js


---
# Phase 2: Planning and Designing project


## System Architecture Diagram
  here I will show the high-level view of the project and simple communications between modules and components.
  ![system architechture diagram](numberEncoderFlowProcessDiagram.drawio.png)

### Notes and Assumptions
- .validationInput() function is a validating input point , not just an if-condition

---
# Phase 3: Deploying
 in this section i will show you how to run the program.

## Requirements:
 - Node.js downloaded on your device
 - Repository downloaded on you device
 - any terminal or code editor
## Tutorial
1. Download the repo from my Github page 
   here's the link: https://github.com/Rahq5/IEEE-754-DoublePrecisionConverter

2. Export file, you will get :
	1. readme file
	2. ProjectCode folder :
		1. Logic.js
		2. UserInterface.js
		   
3. Run using this commands
```
cd .\ProjectCode\

node .\UserInterface.js
```

---
# Phase 4 : Maintenance

Here i will show all features , bugs , notes that may be added or fixed fix\add  
# notes to check
- check validation if node.js can validate boolean inputs (will counted as 1 or 0)
- add validation for null & undefined types to be rejected 
- project maybe inaccurate in subnormal numbers like close-to-zero cases ~0.00001

# Incoming features
-  nothing to add until this moment :(


# to work on & errors to fix 
- when 0 is entered  , both of exponent_binary and exponent_bias prints "undefined" value
  
- when printing a number and shown result then on second attempt inputs a bad value like "hello" , will print past value result instead of invalid input msg 
  
- showing msg of applying formula on "formula" field