# Landing Page Project

## Table of Contents

[1.0 Project Description](#description)
[2.0 Implementation](#implementation)
[2.1 Data Driven Content](#data-driven-content)
[2.2 Section Active State](#section-active-state)
[2.3 Navigation Bar](#navigation-bar)
[2.4 Navigation Scrolling](#navigation-scrolling)


## 1.0 Project Description

The project was to build a simple landing page with a data driven sections and navigation. Some dynamic features such as a navigation that can be toggled to be visible and hidden and styling to highlight active content sections were added.

## 2.0 Implementation
Below is a description of how these dynamic components were implemented.

### 2.1 Data Driven Content
All content on the page is dynamically loaded using a data in javascript object. This json-object is meant to mimic what one would be able to get from at very simple CMS.

The json object contains information that is used to create both the sections in the body of the document and also the navigation that allows the user to navigate between them.

### 2.2 Section Active State
Sections are highlighted with an active state when the vertical midpoint of the section is the closest of all sections to a point in th eview point that is 2/3 of the way to the top of the page. 2/3 was chosen because I think a user tends to focus their view around that point on the sreen.

Each sections vertical midpoint position is calculated upon scroll events and compared to the chosen point in order to determine which element should be active. When the determined element is not equal to the currently active element the active class is removed from the current element and added to the determinded target element.

This may not scale well since scroll events are fired on every scroll and quite a few calculations are performed on each event. With only for sections it was not a problem but it will likely become an issue when the number of sections grows.

### 2.3 Navigation Bar
There is a event listener on the navigation bar that triggers a toggle function when the navigation bar is clicked. The event adds or removes a hidden class to the UL element.

There is also a hover state on the navbar that is similar to that of the list items in order to make it conform with the UX. however there is also a hover state on the icon making it grow and take a few extra pixels space in the navigation bar. A very simple bu tdelightful little UX detail.

### 2.4 Navigation Scrolling
Navigation scrolling is implemented by connecting the data-nav attribute with the id of the corresponding section. When a list item is clicked a function is triggered through an event listener that querys to see which element was targeted by the click event and what the data-nav attribute of this element is then it looks up the corresponing section by querying for that id and then sends the user there by smooth scrolling there.
