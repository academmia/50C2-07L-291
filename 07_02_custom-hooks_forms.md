
## 07_02_custom-hooks_forms

- vom simplifica codul din fomrularele de adaugare

- Observam ca ProjectForm si TaskForm sunt similare

- Putem extrage logica comuna in hook separat

---

> ### 1. Create Custom Hook for form event handlers

 - `cb` - callback, is passed into the custom Hook from the component. 
    - it gets called whenever the form submits.

---

> ### 2. Use hook

- vom importa si conecta componenta cu custom hook-ul creat


---

> ### 3. Refactor form to use state and handlers from hook

- refactor add function to ES5 
    - (e utilizata inainte de definire - avem nevoie de hoisting aici)

- trebuie sa dam nume input-urilor, altfel handleChange nu functioneaza
    - ev.target.name va fi undefined



---

>> ### INFO

https://reactjs.org/docs/events.html

The SyntheticEvent is pooled. This means that the SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked. This is for performance reasons. As such, you cannot access the event in an asynchronous way.

If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.


```js
function onClick(event) {
  console.log(event); // => nullified object.
  console.log(event.type); // => "click"
  const eventType = event.type; // => "click"

  setTimeout(function() {
    console.log(event.type); // => null
    console.log(eventType); // => "click"
  }, 0);

  // Won't work. this.state.clickEvent will only contain null values.
  this.setState({clickEvent: event});

  // You can still export event properties.
  this.setState({eventType: event.type});
}
```
