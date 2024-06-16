# Ecommerce ShopiZon Project

This is an e-commerce project that uses React , JSX and vanilla CSS for implementing the website.
The various pages includes Product Listing Page , Product Detail Page , Cart Page amd Login Page.
Cart page is Auth protected , ie. cannot be accessed before logging in.
The api calls are done using fakeJSON .
 
# Product Listing Page
User can view all the listing prducts that fetched using fake json API call.
User can view each product in detail.
On clicking add to cart for any product , if user is not logged in  , user will be re-directed to Login Page.

# Product Detail Page
Each product can be detailed to view further description on it.
User can add the product to the cart/ visit the cart page from this page too.

# Login Page

Guest Login method is used and token is set for further operations based on the login api called.

# Cart Page
User can add/ remove / increase quantity or decrease quantity of any product that is present inside the cart page.
This  page cannot be visited unless user is not authorized and has a valid token for the current session.

