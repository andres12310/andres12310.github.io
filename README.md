#URL Of Our Website
- http://circinus-16.ics.uci.edu:8080/project1/home.html

#Team Members
- Andres Garcia Roman (19936980)
- Angela Do (86236858)
- Andy Yang (32972683) 
- Ukwa Akkum (68576133)

#General Layout/Design of Website
- the link above takes you to the home page. Here you can see a section on best seller books. We also have another section calles "Flex Your Knowledge" which are books that are recomended for the reader to check out. 
- From here, you have 3 options:
	- you can either click on any book in the home page which will take you directly to the item page where you can view product details as well as fill out the purchase form.
	- you can go to the Books page where you can view the whole list of books that are available in our website, which is a total of 18 books. You can browse through all the books or sort books by clicking on one of the categories displayed on the left side. 
	You can go to the About page, where you can learn about our business, what we sell, as well as get information about the co-founders of this website. 


#Where In The Website Are Requirements Satisfied?
- Requirement 1
	- Everything for this requirement is located in the About Page as well as a special thanks to our helpful sources.
- Requirement 2
	- It is fulfilled when you go to the Books page, which shows you the list of all of the books that are available in our website, which is 18 books in total.
- Requirement 3
	- It is fulfilled when you go to the Books page, which shows you the list of all of the books that are available in our website. Each book has an image. 
- Requirement 4
	- It is fulfilled when you go to the Books page, where each item product table cell contains the title of the book, author(s), and the price. 
- Requirement 5
	- It is fulfilled when you go to the Books page. Whether you are viewing all books, or you are in a speicifc category of books, clicking on any image will send you to another page where the product is diplayed with more information, such as edition number of the book, page count, publisher, and product dimensions. 
- Requirement 6
	- It is fulfilled when you click on the image of any item. It takes you to another page where the product is displayed along with more information about the product. It also has a form. This form contains the product identifier (which is the "Textbook ISBN-13" field), quantity, first name, last name, phone number, shipping address, shipping method (e.g., overnight, 2-days expedited, 6-days ground), and credit card information. 
	- Help was provided by: https://www.w3schools.com/howto/howto_css_checkout_form.asp.
- Requirement 7
	- This is fulfilled when you click "Submit" in the form after gilling out all the fields of the form. It should open up your default email client, depending on what computer you're using. 
- Requirement 8
	- The form we've provided has placeholders that suggest the proper formatting for the user. Most checking was done by regular expression. There must be an input for every part of the purchase form aside from Apt/Ste number. If a user inputs a value that does not match the regular expression or proper restrictions placed by the code, an alert window will pop up with the invalid value(s). Checking was helped using: https://regexr.com/. The following is a walk-through of validation:
		- ISBN-13 has a strict format, where the user can copy the ISBN-13 from the product information and paste it there. If the system cannot find the ISBN-13 number in our database, an alert window will pop up. 
		- Quantity is checked by regular expression. Leading zeroes are ignored. Helped was provided by: https://flaviocopes.com/how-to-trim-leading-zero-number/.
		- First and last name are checked by regular expression. Hyphens and apostrophes are accepted symbols.
		- Email is needs an alpha character to start and option of one period, one underscore, or many alpha characters after it. It also needs the '@', valid domain address with a period and proper top-level domain (TLD). Formatting was helped by these rules and restrictions: https://help.xmatters.com/ondemand/trial/valid_email_format.htm.
		- Phone number can start with a one but must have area codes that are values two through nine with eight more digits trailing after.
		- Address is based on US addresses only. It must start with a number that can go up to five digits. Street names can start with numbers or letters and can be multiple words.
		- Apt/Ste Number is optional and accepts digits and letters.
		- City can be multiple strings with lengths of three or more that can have hyphens.
		- If a state is not selected, the alert window will pop up. Formatting for the select box was provided by: https://www.freeformatter.com/usa-state-list-html-select.html#stateiso.
		- Zip Code can either be five digits or five digits with a hyphen and four trailing digits.
		- If shipping speed is not selected, the alert window will pop up.
		- Card number must be 16-digits.
		- Expiration date can only be dates starting from May 2020 until December 2024.
		- CVV can either be three or four digits.

- Requirement 9
	- Some of the many stylistic properties that we used are the following:
		- We give our website a background image which occupies the entire web page
		- For the title of our website, we style it by centering it and giving it a certain width to occupy the page. 
		- We style the "Home", "Books" and "about US" tabs so that they are aligned next to each other in  a row.
		- When you hover over "Home", "Book", or "About US", we change the text color to a light yellow and the background color to black for the tab that we are hovering over. 
		- When you click on "Home", "Book", or "About US", we change the text color to white and the background color to black for the tab that we are currently on. 
		- When we hover over an image, the item expands and when you move the mouse away from the image, it returns back to normal
		- When you hover over an image, we style it so that a drop down menu appears that lists the different categories of books that we have. 
		- When we are in the Books page, you can switch across different book categories. The text color will switch to a grey color and the background color will change to black, depending on the category that you clicked on and are currently on. 
		- In the "About Page" we style the text to be green or a pink/brown color in order to fit the background image. 
		- We style each product cell so that they are the same width and height, and give the cell a border. 
- Requirement 10
	- We provide tracking of mouse movement when you are in the Books page and you are browsing all the books that we have in our website. When you hover over an image, the image will get bigger. When you move the mouse away from the image, the image returns to normal.
- Requirement 11
	- Our names and studentID are at the very bottom of the Home page. 
