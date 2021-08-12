# Card Checklist

## Basics

- [ ] Change the \<title> and \<h1 id="header"> to the appropriate event name
- [ ] Ensure jquery is imported in the header and js/base.js is imported at the bottom
- [ ] All titles should be capitalized
- [ ] All \<h2> and \<h3> headers should have an id of the same name in lowercase with hyphens. For \<h3> specifically, add the parent header id first to avoid confusion
- [ ] Add a newline in the code for all the blocks of \<h2> and \<h3> content for readability

## How collapsing works

This website uses jquery to toggle content under \<h2> headers.

Here is the structure for a collapsible header and content:

```html
<h2>(-) Some header</h2>
<br>
<div>
    <p>Content here</p>
</div>
<br>
```

- [ ] Every \<h2> header with collapsible content MUST start with (-)
- [ ] There MUST be a \<br> between the header and the collapsible content contained in the \<div>
- [ ] There MUST be an empty \<div> to contain the collapsible content
- [ ] The \<br> at the end is optional

This is convoluted because j_nac is bad at Javascript and is waiting for someone else to come along and solve all the problems.
