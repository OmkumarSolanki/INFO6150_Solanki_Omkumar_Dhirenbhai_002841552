
1. Variables
	like any other programming languages, SASS also has variables and it can be used multiple times. It increases the readibility and editability. when we need to edit a value, we need to change at only one location and it affects the whole projects. 
Used: _Config.scss Line No: 4-13. 

2. Custom Properties
	It allows us to create a very different declaration for css. we can create it and use it by using var. Created font-style and border radius variable with the help of Custom Properties. I am using it for giving border radius in the Courses Offered and Used the font style variable in all grid and flex elements
Used: _Config.scss Line No: 38, 40, 62, 81

3. Nesting
	If a element is the children of a bigger element, then we can write them inside the loop to give specific css. I have used in all my grid and flex components for styling different internal components and to position them at desired position. 
Used: _Config.scss Line No: 32, 49, 54, 73
      _header.scss Line No: 12, 26
      _Style.scss Line No: 14, 76, 127, 178

4. Interpolation
	Use of #{} for dynamic css creation like javascript

5. Placeholder Selectors (%)
	They are created by % sign and we can use extend so that the css property applies there.

6. Mixin 
	it is basically a reusable block of code that we can include to get the css properties

7. Functions
	We can do anything inside functions eg calculation, color manipultion, calculating some inbuilt functions and process the data

Extra Features
1. Implemented Hidden Declarations
	you can decide which property to add in your scss code by creating a variable and assigning the value to false and true. if the value is true then the condition in the if statement would run.
	
2. Sass built-in functions
	SASS provides a lot of built-in functions for performing math calc. I am using the math.div(x/y) function for calulationg the exact value and then using the percentage function to get percentage from it. I have also used lightness to calculate if the color is dark.
	
3. SassScript Expressions
	This expression is used to perform various operations such as multiplying a variable. I used it to multiply a variable that changes border radius.
	
4. Using MAP and Lists 
	Sass has various data structures and algorithms. I am using the List and MAP to give different colors to different containers.

5. CSS Selectors (&)
	I have used this css selector in nested loops. This allows us to make very complex and to the point css selectors

6. if else
	I have used the if else loop inside the function to calculate the lightness of the color and modify data accordingly.


