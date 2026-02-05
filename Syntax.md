# DOM — addEventListener 


---

## 1. Basic Syntax (MEMORIZE)

```js
element.addEventListener("event", callback)
```

```js
button.addEventListener("click", () => {
  console.log("clicked");
});
```

---

## 2. Common Events (DAILY USE)

### Mouse

```js
click
mousedown
mouseup
mouseenter
mouseleave
```

```js
btn.addEventListener("mouseenter", () => {})
```

---

### Keyboard

```js
keydown
keyup
```

```js
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
```

---

### Input / Form

```js
input
change
submit
```

```js
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
```

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

---

## 3. Event Object (VERY IMPORTANT)

```js
button.addEventListener("click", (event) => {
  console.log(event);
});
```

### Most used properties

```js
event.target       // actual clicked element
event.currentTarget // element with listener
event.key          // keyboard key
event.type         // event name
```

---

## 4. Multiple Event Listeners

```js
btn.addEventListener("click", handleClick);
btn.addEventListener("mouseenter", handleHover);

function handleClick() {}
function handleHover() {}
```

---

## 5. removeEventListener (IMPORTANT RULE)

❌ This will NOT work:

```js
btn.removeEventListener("click", () => {})
```

✅ This works:

```js
function handleClick() {
  console.log("clicked");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
```

---

## 6. Event Delegation (🔥 MUST KNOW)

Use when elements are **created dynamically**.

```js
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

With class check:

```js
if (e.target.classList.contains("delete")) {
  e.target.parentElement.remove();
}
```

---

## 7. Prevent Default Behavior

```js
e.preventDefault();
```

Used in:

* form submit
* anchor click

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

---

## 8. One-Time Event Listener

```js
btn.addEventListener("click", () => {
  console.log("once");
}, { once: true });
```

---

## 9. Passive Event (Performance)

```js
window.addEventListener("scroll", handleScroll, { passive: true });
```

---

## 10. Real Mini Patterns (PRACTICE DAILY)

### Toggle class

```js
btn.addEventListener("click", () => {
  box.classList.toggle("active");
});
```

---

### Add element on click

```js
btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
});
```

---

### Input live preview

```js
input.addEventListener("input", (e) => {
  preview.textContent = e.target.value;
});
```

---

## 11. GOLD RULE (Never Forget)

> **Listener is added ONCE — callback runs MANY times**

❌ Don’t add listeners inside listeners

---

## 12. Debug Checklist

* Is element selected correctly?
* Script loaded after DOM?
* Correct event name?
* Callback firing?

```html
<script defer src="script.js"></script>
```

---

## DAILY DRILL (10 mins)

* select button
* add click listener
* log event
* toggle class
* prevent form submit
* use delegation

Repeat until fingers remember.
