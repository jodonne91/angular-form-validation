## Angular - Form Validation

We're going to use Angular to replicate the functionality of some common web components. You are likely able to do this without Angular (even without jQuery, perhaps) but this will start to help you familiarize yourself with how the framework operates and how it wants you to think about code.

### Details

Build code that validates the content of a form.

The form should contain the following fields: name, email, website and message; it should also have a submit button. When the submit button is clicked (or the enter key is pressed), it should validate all of the form fields and show all errors in the form data. 

The validation rules are:

* Name cannot be left empty
* Email cannot be left empty
* Email must contain a "@"
* Website cannot be left empty
* Website must start with "http://"
* Message cannot be left empty

If the form input has no errors, it should alert a "form submitted" message to the user AND `console.log` out the form's data.

Use CSS to style the form to be responsive. `desktop.png` and `mobile.png` are visual mockups. This project has already LESS enabled, so do work using that format in `index.less` -- all code will get automagically compiled into `index.css`.

### Normal Mode

Add the necessary directives in `test.html`, and write code in `index.css`

You'll need to use the following directives:

* `ng-app`
* `ng-controller`
* `ng-submit`
* `ng-model`
* `ng-show`
* `ng-bind`

Information and examples for all of these are available in the [Angular API documentation](https://docs.angularjs.org/api).

### Hard Mode

Use `$scope.$watch` to validate the form as a user is typing in content. The form should show a red left border on the input element (but not any error text) if the input is invalid as the user is typing. Only after they click the submit button should it actually show the error messages.