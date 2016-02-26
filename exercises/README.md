## Learning React JS Exercises


### Exercise 1 
<a href="http://jsbin.com/cigebonuhi/edit?html,js,output" target="_blank">(JsBin Link)</a>

Create a simple tally-counter app with a React stateful component.

Requirements:
- The UI of the app is a button that shows the tally count.
- When the button is left-clicked, the count will increment by 1 and the updated count will be shown in the UI.
- When the button is right-clicked, the counter will be reset to 0.

Implementation Hints:
- User interaction with UI will trigger JavaScript events, which will in turn fire the event-handling callback functions.
- Use event handlers (callback functions) to change the component's state and the state change will trigger the UI updating (React's Virtaul DOM re-rendering).
- Use React's setState() function to change state (do not try to directly mutate the component's state).
- Use event.preventDefault() to prevent "event-bubbling".


### Exercise 2 
<a href="http://jsbin.com/maboxuyaja/edit?html,js,output" target="_blank">(JsBin Link)</a>

Add a functionality to the prior tally-counter app to allow user to configure initial count.

Requirements:
- All the requirements of Exercise 1.
- The initial count is configurable by user.

Implementation Hints:
- Props are used to take data from outside of component. Changes of props will cause re-rendering of component
- Props values can also be used to initialize component state.


### Exercise 3 
<a href="http://jsbin.com/gujalameso/edit?html,js,console,output" target="_blank">(JsBin Link)</a>

Develop a React app that has a group of counters and calculates the sum of all counters' tally.

Requirements:
- A Counter component can be added dynamically to the UI by clicking on a button.
- Another button to allow user to remove all counters.
- Each Counter component can increment and reset its own count independently.
- A Summary component that keeps track of the total of all counters' count.

Implementation Hints:
- Archetect the app with a bunch of stateless components and one stateful container component which keeps track of application state.
- Bind application state to stateless components' props.
- Focus on application state in stead of UI (state change -> props change -> UI re-rendering).
- Stateless components can use callback functions, which are also bind to its props, to change application state.

### Excercise 4
<a href="http://jsbin.com/saxiwunefi/edit?html,js,output" target="_blank">(JsBin Link)</a>

Develop a Todo app that meets the following requirements:
- An input component to allow user add to todo items
- Show a list of Todo components that represent the todo items
- A click on the Todo component will change its status from 'Active' to 'Finished', or vice versa
- Right-clicking on a Todo component will delete its represented todo item
- A Filter component that will show todos based on their status: 'All', 'Active', or 'Finished'

Implementation Hints:
- Archetect the app with a bunch of stateless components and one stateful container component which keeps track of application state.
- Bind application state to stateless components' props.
- Focus on application state in stead of UI (state change -> props change -> UI re-rendering).
- Stateless components can use callback functions, which are also bind to its props, to change application state.

### Excercise 5
<a href="http://jsbin.com/mukofidiha/edit?html,js,output" target="_blank">(JsBin Link)</a>

Given a partially finished Kowledge Base app, enhance it by adding the following functionality:
- Allow user to create new knowledge base article
- Allow user to edit an article and save the changes made
- Allow user to delete an existing article from the knowlege base

Implementation Hints:
- Focus on application state in stead of UI (state change -> props change -> UI re-rendering).
- Utilize the "onChange" event on input elements update the application state with the input values.

