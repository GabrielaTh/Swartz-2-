## JavaScript

### Variables and data
Saving data is really important when we're writing code. Thankfully, Javascript can do it !
Let's ask for the user's first name.

```js
var first_name = prompt('Hello dear friend, could I have your first name ?');
```
A small popup will appear and we'll be asked gently for our first_name. Input yours and press OK.
The first name that you wrote is now saved. It can be referenced by `first_name`.
You can recall what have entered writing the word `first_name` in the console. You should see you name appear right beneath !
You created a variable, exciting isn't it ?

### Variables
Think of a variable like a drawer with a name attached.
You can come when you want to see what's inside of the drawer and look inside. If we have multiple drawers it is easier to find the content thanks to the attached name glued on it.
The value can be almost anything. In `first_name` we stocked letters, also called : a String. We can also stock numbers and a lot of other types of data.
A variable respectfully has a name and a value.

They are the best way to save data and you'll use them a lot. There's two parts of variable creation ; the declaration and the initialization.
Once the variable is created, we can assign it a value.

### Declaration
The declaration is the fact to declare that a variable exists. To go back to the drawer metaphor, it's like choosing an empty drawer in a big house and put a label on it.
To declare a variable, use the keyword `var` like so :
```js
var prenom;
var age;
```
Did you notice the semi-colon ? `;` ?
Almost all lines in JavaScript end with a semi-colon.

### Initialization
Initializing is the fact of giving a value to a variable for the first time. The value can change later, but its initialized just once.
We initialize a variable by using the `=` sign. You can read it like this: the value of the variable to the left should be the value that is on its right. 

`var nom = "Tom";`
"Tom" is a string of characters, a collection of letters. A string is surrounded with double or single quoutes.

`var age = 20;`
The value 20 is only a number, so we don't use quotes.

### Assigning
Like said before you can update the value of a variable as many times as you want.
That's called assigning, and it ressembles a lot like initializing.

You can use the equals sign, but we don't need the var keyword because we already declared the variable.

Like this:

```js
nom = "Andy";
age = 43;
```
Only do this if you declared `name` and `age` using the var keyword beforehand.

### Doing math
Variables can be used to save string but also numbers (for example). We're going to focus here only on numbers.

How many fruits ?
In the console, we're going to create two variables.
One is going to be an amount of apples we've got, the other is an amount of pears.
```js
var apples = 5,
pears = 10;
```
This creates variables.
But there is only one keyword var? 
Yes, it's a shorthand to declare and initialize multiple variables at the same time.
By using the keywords var one time seperating the new variables with a comma you can save time.
Now we're going to use these two variables to know the number of total fruits.
```js
var piecesOfFruit = apples + pears;
```
Here's something new! We are asking the browser to find the sum on the right before assigning the result to `piecesOfFruit`.
We don't add up the names of variables, we add up the values that's within the variables. The browser knows.
When it sees variables like these, it understands that you want to do something with the values. It's going to look for the value of each variable and make the addition.
The sum is called `piecesOfFruit` and not `pieces of fruit` because the name of a variable cannot contain whitespaces.

You also noticed that each start of a word is capitalized.
We're noticing a convention of what is called camel case or "writing a camels back". You can call a variable as you want but `pIeCEsOFfRuiT` is kind of ugly isn't it?
trick : You will spend more time reading your code than writing.
It's that much more important that you're confident of its readability.

### Seperation of fruits
Let's say you want to share your fruits between three people.
How many fruits would each receive ?
```
var piecesForEachPerson = piecesOfFruit / 3;
```
How luck are we to have JavaScript.
Else we'd need a calculator.
We use a `/` to indicate a division : divise the variable to the left with the number on the right.

### Priorities and operators
To make sums, you can use different symbols: addition `+`, subsctraction `-`, division `/` and multiplication `*`.
Math symbols are called operators. You should know that, like a calculator, symbols are executed in a particular order.
This order is called the priority of operators. Operators between paratheses are calculated first, then the multiplications and divisions, lastly additions and substractions.

Here's an example step by step :
```
(10 + 2) / 2 + 4 * 2
```

The part in parantheses is processed first. So this becomes ...
```
12 / 2 + 4 * 2
```
Which makes ...
```
6 + 4 * 2
```

If multiple operators are of the same order of priority, they are evaluated from left to right.
The multiplication is the highest priority so it is executed first.
This corresponds with ...
```
6 + 8
```

This will give the final value :
```
=> 14
```

Woohoo !


Declarations ES6

- var 
- let
- const 
- class

...
