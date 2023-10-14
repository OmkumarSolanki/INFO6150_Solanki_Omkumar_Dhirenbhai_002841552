
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
	Use of #{} for dynamic css creation like javascript. I have used it in all my flex and grid containers. As I have givem names of the classes similar i.e. one, two, three, four, five, six.... So by just passing a list in each I can access all of them.
Used: _Config.scss Line No: 33, 50, 55, 74

5. Placeholder Selectors (%)
	They are created by % sign and we can use extend so that the css property applies there. Basically we can create a templete and utilize it whenever we needed by using extend. I have used it for making a template of header.
Used: _Header.scss Line No: 3, 19

6. Mixin 
	it is basically a reusable block of code that we can include to get the css properties. We cab use @include to use it. We can pack a set of css values and apply them in multiple places. We can also pass arguments in it. I used a parameter to select the background color and then by the back ground color we need to decide that we need to use while or black color of the text. It is paired with a functionn set-text-color. I used in every component for grid and flex.
Used: _Config.scss Line No: 23

7. Functions
	We can do anything inside functions eg calculation, color manipultion, calculating some inbuilt functions and process the data. I used to set the text color for the containers of flex and grid. 
Used: _Config.scss Line No: 15

Extra Features
1. Implemented Hidden Declarations
	you can decide which property to add in your scss code by creating a variable and assigning the value to false and true. if the value is true then the condition in the if statement would run. I creatred a variable border-available and assign it to true. then I used it in flex class object to show border
Used: _Styles.scss Line No: 209
	
2. Sass built-in functions
	SASS provides a lot of built-in functions for performing math calc. I am using the math.div(x/y) function for calulationg the exact value and then using the percentage function to get percentage from it. I have also used lightness to calculate if the color is dark.
Used: _Styles.scss Line No: 205
      _Config.scss Line No: 16
	
3. SassScript Expressions
	This expression is used to perform various operations such as multiplying a variable. I used it to multiply a variable that changes border radius. I multipied by 20 to make it circle in flex element.
Used:  _Styles.scss Line No: 190
	
4. Using MAP and Lists 
	Sass has various data structures and algorithms. I am using the List and MAP to give different colors to different containers. I am storing data in list and then taking the data using map.
Used: _Styles.scss Line No: 171, 184, 188, 194, 198

5. CSS Selectors (&)
	I have used this css selector in nested loops. This helps me to access the parent name by just writing a & insted of writing the full name. I used at many places to put the hover property on it. 
Used _Config.scss Line No: 42, 66, 85
     _Header.scss Line No: 12, 26

6. if else
	I have used the if else loop inside the function to calculate the lightness of the color and modify data accordingly. 
Used _Config.scss Line No: 16


