(a) npm i --save bootstrap
(b) import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
1.App.js: The main component where routing is defined using React Router. It includes routes for the product list, product detail, search, and cart pages.

2.Header.js: Component for the website header, including navigation links, search functionality, and a cart icon with the item count.

3.Footer.js: Component for the website footer, which appears only on the homepage.

4.ProductList.js: Component to display a list of products. It includes cards for each product with an image, title, description, and an "Add to cart" button.

5.ProductDetail.js: Component to display details of a specific product. It includes the product image, title, description, and an "Add to cart" button. It also shows related products.

6.Cart.js: Component to display the items in the cart. It allows users to remove items from the cart, clear the entire cart, and proceed to checkout.

7.SearchItem.js: Component to handle product search functionality. It filters products based on the search term provided in the URL.

8.Data.js: Contains sample data for products.

React: Importing React and other necessary modules.
useEffect: Utilizing the useEffect hook to perform side effects in functional components.
useState: Utilizing the useState hook to manage component state.
useParams: Using the useParams hook from React Router to extract parameters from the URL.
items: Importing sample data containing product information.
SearchItem: Functional component to handle product search functionality.
filterData: State variable to store the filtered data based on the search term.
useEffect: Triggering the effect to filter data whenever the search term changes.
filteredData: Function to filter items based on the search term.
ProductList: Rendering the ProductList component with filtered data passed as props.
export default: Exporting the SearchItem component as the default export.

Header: Component responsible for displaying the header section of the website.
useLocation: Hook from React Router to get the current location.
useNavigate: Hook from React Router to get navigation function.
useState: Hook to manage state in functional components.
handleSubmit: Function to handle the form submission when searching for a product.
filterByCategory: Function to filter products by category.

addToCart: Function to add a product to the cart.
ToastContainer: Component to display notifications when a product is added to the cart.
ratingIndices: Array of indices where the rating stars should be displayed.
cancelIndices: Array of indices where the discounted price should be displayed.

Footer: Component responsible for displaying the footer section of the website.

items: Array containing objects representing product data.
Each object in the items array represents a product with properties such as id, category, title, imgSrc, amazonLink, and description.

Cart: Functional component to display the items in the shopping cart.
removeFromCart: Function to remove an item from the cart based on its productId.