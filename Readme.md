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
3. Our Welcome component returns a <h1 tag>Hello, Rishav</h1 tag> element as the result.
4. React DOM efficiently updates the DOM to match <h1 tag>Hello, Rishav</h1 tag>.


## 5.State and Lifecycle


In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second

We can start by encapsulating how the clock looks:
```
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.
Ideally we want to write this once and have the Clock update itself:
```
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
To implement this, we need to add “state” to the Clock component.
State is similar to props, but it is private and fully controlled by the component.

### Converting a Function to a Class

You can convert a function component like Clock to a class in five steps:
1. Create an ES6 class, with the same name, that extends React.Component.
2. Add a single empty method to it called render().
3. ove the body of the function into the render() method.
4. Replace props with this.props in the render() body.
5. Delete the remaining empty function declaration.


```
class Clock extends React.Component{
	render(){
		return(
			<div>
				<h1>Hello, World</h1>
				<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}
```
Clock is now defined as a class rather than a function.
The render method will be called each time an update happens, but as long as we render <Clock /> into the same DOM node, only a single instance of the Clock class will be used. This lets us use additional features such as local state and lifecycle methods.

### Adding Local State to a Class

We will move the date from props to state in three steps:
1.Replace this.props.date with this.state.date in the render() method:
2.Add a class constructor that assigns the initial this.state:
3.Remove the date prop from the <Clock /> element:

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

Next, we’ll make the Clock set up its own timer and update itself every second.


### Adding Lifecycle Methods to a Class

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

We can declare special methods on the component class to run some code when a component mounts and unmounts:

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
These methods are called “lifecycle methods”.
The componentDidMount() method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

```
 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 ```
We will tear down the timer in the componentWillUnmount() lifecycle method:
```
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```
Finally, we will implement a method called tick() that the Clock component will run every second.
It will use this.setState() to schedule updates to the component local state:

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

Let’s quickly recap what’s going on and the order in which the methods are called:
1. When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
2. React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.
3. When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
4. Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
5. If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.





## 6.Handling Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

1.React events are named using camelCase, rather than lowercase.
2.With JSX you pass a function as the event handler, rather than a string.
For example, the HTML:
```
<button onclick="activateLasers()">
  Activate Lasers
</button>
```
is slightly different in React:

```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:
```
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:

```
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.


You can use an arrow function in the callback:
 ```
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```

The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.


### Passing Arguments to Event Handlers

Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.
In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.


## 7.Conditional Rendering

```
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

### Inline If with Logical && Operator

```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```


## 8.Lists and Keys

Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:
```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); //[2, 4, 6, 8, 10]
```

### Rendering Multiple Components
You can build collections of elements and include them in JSX using curly braces {}.
Below, we loop through the numbers array using the JavaScript map() function. We return a <li> element for each item. Finally, we assign the resulting array of elements to listItems:
  ```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```
We include the entire listItems array inside a <ul> element, and render it to the DOM:
```
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```
When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements. We’ll discuss why it’s important in the next section.
Let’s assign a key to our list items inside numbers.map() and fix the missing key issue.

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
### Keys
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

### Forms


