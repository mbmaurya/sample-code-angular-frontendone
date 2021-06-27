### This section acts as a main view of the app and holds important components and elements.

List of the components and elements held by the center pane is listed below:

1. Header
   This elements is a section with a class name of "header". It remains constant across different views.

   The header contains the following elements:

   1. Toggle button: This element is a button that toggles the display of the left pane in mobile devices. This element is visible only on tablet and mobile devices.

   2. Date: This element is a division that displays the current date in the following format: "dd MMM yyyy, 'EEEE" which results in this "27 Jun 2021, Sunday".

   3. Search: This element is a division that adds a search feature to the app.

   4. Profile: This element is a button that toggles the right pane in mobile devices. This element is visible only on tablet and mobile devices.

2. Body
   This element is a section that holds the unordered list of components to display with respect to the tabs clicked in the left pane. Below is the list of the components and their workings:

   1. Dashboard: This is a component that holds various elements of the app's user and acts as a single point of the user's interaction with the app.

   2. Classes: This is a component that holds details of the subjects undertaken by the user. This component is not developed for this sample version of the app.

   3. Resources: This component holds different types of resources saved by the user. This component is not developed for this sample version of the app.

   4. Plan: This component displays the type of subscription undertaken by the user. This component is not developed for this sample version of the app.

   5. Chat: This component has a chat feature to communicate with different authors of the courses undertaken by the user and his/her colleagues. This component is not developed for this sample version of the app.

   6. Settings: This component contains different types of settings for the user and the app like profile, privacy, display, etc. This component is not developed for the sample version of the app.

The components view changes according to the tab selected by the user on the left pane but the header remains constant throughout the views. This pane takes 100% of the device width on resolutions below 1300px covering all types of tablets and mobile devices.
