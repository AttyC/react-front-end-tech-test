# MMT Digital Front-end Test

Welcome to the MMT Digital Front-end test. This test will hopefully give you a chance to showcase your skills as a developer. The challenge is pretty straightforward - it’s possible to finish this in around two hours. However, we don't mind anything up to 1-2 days (please track how much time you spend working on this).

Once you're done and have committed/pushed your implementation, please email me to let me know you're done (`tim.r@mmtdigital.co.uk`). After the test, we'll invite you in to talk through your code and decisions. Alright, let's do this!

## The challenge

We would like you to re-create the following basket:

![The basket](https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F42384%2Fscreenshots%2F668649%2Fattachments%2F59014%2Fcart_update_large.png)

Here are some rough user stories for you to work to:

*Basket-001*  
**As a** user  
**I want** to view my current basket  
**So that** I can see what I've added  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see all added items and their cost  

*Basket-002*  
**As a** user  
**I want** to change the quantity of a basket item  
**So that** I can decide item totals before purchasing  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see an item quantity next to each item  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see each item's total cost (adjusted for quantity)  

**Given** I am on the basket page  
**When** I change an item quantity  
**Then** the item's total cost is adjusted, in real-time  

*Basket-003*  
**As a** user  
**I want** to view my current basket total  
**So that** I can see what I'm going to have to pay  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see a total cost, accounting for all items and quantities  

*Basket-004*  
**As a** user  
**I want** to remove all items from my basket  
**So that** I can start over  

**Given** I am on the basket page  
**When** I click the "clear" button  
**Then** all items are reset to zero (but remain in the basket)  

## Things we love

* Non-jquery implementations
* Tip-top styling, using mixins and modern techniques
* Well linted, consistent code
* A fully working non-perfect solution, over a beautiful broken one
* Frequent Git use with clear commit messages

## Bonus points

* Accessibility considerations
* Unit testing
* Progressive enhancement considerations
* Next gen JavaScript, ES6+

## Getting started

The easiest way to start the project is using Docker. You can install it here, if you don't already have it: https://www.docker.com/community-edition.

* `docker-compose build`
* `docker-compose up`
* Open up a browser and browse to http://localhost:8080

If you don't want to use Docker or have a particularly old machine (pre-2010 Mac or pre-Windows 10 PC), you can manually run the project:

* Install Node, if you don't have it: https://nodejs.org/en
* `npm install`
* `npm start`
* Open up a browser and browse to http://localhost:8080

## Available Tech

The project is compiled with webpack, and out the box, you should be able to use:

* SCSS
* ES6+
* SVG icons
* React
* jQuery (we recommend not using this, but it's available as a last resort)

If you would like to use another technology, such as Angular, feel free to tweak the config to allow it. Just remember that we are more interested in seeing a working solution at the end of the test.

Note: Any variables or mixins you define globally should also be available throughout your styles. You can thank webpack's magic for that :)

## FAQs

#### Am I allowed to Google stuff
It goes without saying. Please work as you normally would during the day.


#### My js/styles/html doesn't seem to update
Often it's the caching in the browser. Try hard refreshing the browser. In Chrome, open the dev tools, right click on the refresh button and select *Empty Cache and Hard Reload*


#### Something is not working in the build
Try to find a way to fix it, but if you're really stuck - contact the person that set up the test for you.


#### Shall I create branches?
If you normally work with feature branches, we would love to see usage of them. No worries if not.


#### I'm finished early, what now?

Firstly, great work. Here are some enhancements:

* Add VAT calculations
* Add currency choice and conversion rates
* Add a payment step
* Add another theme
* Add a product detail modal for each item
* Find a live API and pull the item's content and title from that
* Incorporate markdown to enable easier content editing
* Optimise for ultimate performance
* Incorporate PWA techniques
