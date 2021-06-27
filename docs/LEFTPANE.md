### The left-pane component acts as a sidebar to the left of the app.

The elements inside left-pane component and their working are defined below:

1. Logo:
   This element is defined as a section with a class name of "logo", it holds an SVG element which is the logo of the app and a text defined inside a span tag.

2. Tabs:
   This element is defined as a section with a class name of "tabs". It holds a list of links each containing an SVG icon and a route that switches the view of the center pane. On click, each element passes a unique value which helps determine the app to load a particular view in the center-pane and also add an "active" class name to the list.

3. CTA:
   This element is defined as a section with a class name of "CTA". It holds some text, an image and a button to upgrade the user's account to a pro version.

The left-pane acts as a sidebar and therefore gets hidden on mobile devices to give space to center space and can be viewed by clicking the hamburger icon inside the center pane.
