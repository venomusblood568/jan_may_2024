JavaScript DOM Methods Cheat Sheet
==================================

A cheat sheet outlining commonly used JavaScript methods for working with HTML elements.

1\. innerHTML
-------------

Returns or sets the HTML content (including tags) of an element.

javascriptCopy code

`var element = document.getElementById("example");
var htmlContent = element.innerHTML;`

2\. textContent
---------------

Returns or sets the text content (excluding HTML tags) of an element.

javascriptCopy code

`var element = document.getElementById("example");
var textContent = element.textContent;`

3\. innerText
-------------

Similar to `textContent`, but returns the visible text within an element.

javascriptCopy code

`var element = document.getElementById("example");
var innerText = element.innerText;`

4\. querySelector
-----------------

Returns the first element that matches a specified CSS selector within the document.

javascriptCopy code

`var element = document.querySelector(".example-class");`

5\. querySelectorAll
--------------------

Returns a NodeList containing all elements that match a specified CSS selector within the document.

javascriptCopy code

`var elements = document.querySelectorAll(".example-class");`

6\. getAttribute
----------------

Returns the value of a specified attribute of an element.

javascriptCopy code

`var element = document.getElementById("example");
var attributeValue = element.getAttribute("data-example");`

7\. setAttribute
----------------

Sets the value of a specified attribute of an element.

javascriptCopy code

`var element = document.getElementById("example");
element.setAttribute("data-example", "new value");`

These methods are commonly used in web development to manipulate HTML content and interact with the DOM (Document Object Model). Ensure to handle user-generated content carefully to prevent security vulnerabilities like cross-site scripting (XSS).
