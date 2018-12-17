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
formatName(user), into an h1 element.


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
);

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


## 3.Rendering Elements

### Rendering an Element into the DOM

Let’s say there is a <div> somewhere in your HTML file:
```
<div id="root"></div>
```
We call this a “root” DOM node because everything inside it will be managed by React DOM.
Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.
To render a React element into a root DOM node, pass both to ReactDOM.render():
```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### Updating the Rendered Element

React elements are immutable. Once you create an element, you can’t change its children or attributes. 
With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().
Consider this ticking clock example:
It calls ReactDOM.render() every second from a setInterval() callback.
```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

### React Only Updates What’s Necessary
React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
You can verify by inspecting the last example with the browser tools:

## 4. Components and Props

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

### Function and Class Components

The simplest way to define a component is to write a JavaScript function:

```
function Welcome(props){
	return <h1>Hello, {props.name} </h1>
}
```

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components ***“function components”*** because they are literally JavaScript functions.

In ES6 to define a component:
```
class Welcome extends React.Component{
	render() {
		return <h1>Hello, {this.props.name} </h1>
	}
}
```

The above two components are equivalent from React’s point of view

### Rendering a Component

However, elements can also represent user-defined components:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Rishav" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
Let’s recap what happens in this example:
1. We call ReactDOM.render() with the <Welcome name="Rishav" /> element.
2. React calls the Welcome component with {name: 'Rishav'} as the props.
3. Our Welcome component returns a <h1>Hello, Rishav</h1> element as the result.
4. React DOM efficiently updates the DOM to match <h1>Hello, Rishav</h1>.
