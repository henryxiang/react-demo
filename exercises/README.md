## React JS Example Apps

### Exercise 1

Create a simple tally-counter app with a React stateful component.

Requirements:
- The UI of the app is a button that shows the tally count.
- When the button is left-clicked, the count will increment by 1 and shown in the UI.
- When the button is right-clicked, the counter will be reset to 0.

Implementation Hints:
- User interaction with UI will trigger JavaScript events, which will in turn fire the event-handling callback functions.
- Use event handlers (callback functions) to change the component's state and the state change will trigger the UI updating (React's Virtaul DOM re-rendering).
- Use React's setState() function to change state (do not try to directly mutate the component's state).
- Use event.preventDefault() to prevent "event-bubbling".

### Exercise 2

Add a functionality to the prior tally-counter app to allow user to configure initial count.

Requirements:

- All the requirements of Exercise 1.
- The initial count is configurable by user.

