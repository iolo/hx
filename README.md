hx
==

> Make **HyperText** great again!

Minimal Proof of Concept implementation of [HTMX](https://htmx.org/).

## Getting Started

1. Prepare HTML files
(The following files are already located in the `sample/getting-started` directory.)

* `get.html` : partial page for GET request
```html
<p><strong>GET response</strong></p>
```

* `post.html` : partial page for POST request
```html
<p><strong>POST response</strong></p>
```

* `index.html` : initial full page
```html
<!doctype html>
<html>
<head>
<script src="hx.js" defer></script>
</head>
<body>

<a hx-get"/get.html" hx-target="#result" hx-swap="innerHTML">GET</a>

<form hx-post="/post.html" hx-target="#result" hx-swap="innerHTML">
  <button type="submit">POST</button>
</form>

<div id="result"></div>

</body>
</html>
```

2. Start the server

```
$ npx serve ./samples/getting-started
```

3. Open the browser

```
$ open http://localhost:5000
```

Open the `Web Insepector` &raquo; `Network` and reload page and then see what happens.


## More Examples

* TODO: Java + Spring Boot + Thymeleaf
* TODO: Nodejs + Expressjs + EJS
* TODO: Python + Django + Jinja2
* TODO: use with [React](https://react.dev/) CSR
* TODO: use with [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/)


## References

- [HTMX](https://htmx.org/)
- [Build Modern Webapp with Clasic Web Skills - HTMX](https://www.slideshare.net/slideshow/htmx-2024/274315966)(Korean)

---
May the **SOURCE** be with you...
