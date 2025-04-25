# Day 8: Deep Dive into Event Delegation in JavaScript – Smarter Event Handling with Less Code 🚀

Event Delegation is a powerful technique in JavaScript where a single event listener is added to a **parent element** to manage events triggered by its **child elements**.  
It takes full advantage of **event bubbling**, allowing cleaner, more performant code.

---

## 🧠 What is Event Delegation?

When an event is fired on a child element, it bubbles up to its parents. Using this behavior, we attach one listener on the parent and detect what child was interacted with.

---

## ✅ Why Use Event Delegation?

- 🔁 **Handles Dynamic Elements** (even added after page load)
- ⚡ **Improves Performance** (fewer event listeners)
- 🧼 **Simplifies Code** (centralized logic)

---

## 🧪 Example 1: Handling List Item Clicks

```html
<ul id="fruits">
  <li>🍎 Apple</li>
  <li>🍌 Banana</li>
  <li>🍊 Orange</li>
</ul>
