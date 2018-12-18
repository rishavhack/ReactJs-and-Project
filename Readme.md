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












