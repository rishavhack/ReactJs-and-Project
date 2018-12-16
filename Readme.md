# ReactJs

## 1.The smallest React example looks like this:
```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

```

## 2. Introducing JSX
```
const element = <h1>Hello, world!</h1>;
```

This funny tag syntax is neither a string nor HTML.
It is called JSX, and it is a syntax extension to JavaScript.

### Embedding Expressions in JSX

In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:

```
const name = 'Rishav Srivastava';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

You can put any valid JavaScript expression inside the curly braces in JSX. 
For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.
In the example below, we embed the result of calling a JavaScript function, 
formatName(user), into an <h1> element.

```
function formatName(user){
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName : 'Rishav',
	lastName : 'Srivastava'
};

const element = (
	<h1>
	Hello,{formatName(user)}
	</h1>
);
ReactDOM.render(
	element,document.getElementById('root')
);
```

### JSX is an Expression Too

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```
function getGreeting(user){
	if(user){
		return <h1>Hello, {formatName(user)}! </h1>;
	}
	return <h1>Hello, Stranger bhai.</h1>;
}
```

### Specifying Attributes with JSX

```
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUel}></img>;

```

### JSX Represents Object

Babel compiles JSX down to React.createElement() calls.

```
const element = (
	<h1 className="greeting">
    	Hello, world!
  	</h1>
)
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

```

These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.




