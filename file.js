var books = [
	{
		"title":"Campbell Biology (11th Edition)",
		"image":"./images/CampbellBiology.jpg",
		"price":273.32,
		"author":"Lisa A. Urry, Michael L. Cain, Steven",
		"edition": 11,
		"type":"Hardcover",
		"page_count":1488,
		"publisher": "Pearson",
		"language":"English",
		"isbn_10": "0134093410",
		"isbn_13":"978-013093413",
		"dimensions":"2.1 x 9.3 x 11 inches",
		"weight":"7.6 pounds"
	},
	{
		"title":"Animal Behavior: Mechanisms, Ecology, Evolution",
		"image":"./images/AnimalBehavior.jpg",
		"price":215.33,
		"author":"Lee Drickamer, Stephen Vessey, Elizabeth Jakob",
		"edition": 5,
		"type":"Hardcover",
		"page_count":432,
		"publisher": "McGRaw-Hill Science/Engineering/Math",
		"language":"English",
		"isbn_10": "0070121990",
		"isbn_13":"978-0070121990",
		"dimensions":"8.8 x 0.8 x 11.1 inches",
		"weight":"2.6 pounds"
	},
	{
		"title":"Chemistry: The Central Science (14th Edition)",
		"image":"./images/ChemistryTheCentralScience.jpg",
		"price":313.32,
		"author":"Theodore E. Brown, H. Eugene LeMay, Bruce E. Bursten, Catherine Murphy, Patrick Woodward, Matthew E. Stoltzfus",
		"edition": 14,
		"type":"Hardcover",
		"page_count":1248,
		"publisher": "Pearson; 14 edition (January 14, 2017)",
		"language":"English",
		"isbn_10": "9780134414232",
		"isbn_13":"978-0134414232",
		"dimensions":"11 x 8.7 x 1.7 inches",
		"weight":"5.8 pounds"
	},
	{
		"title":"Single-Variable Calculus, 7th Edition",
		"image":"./images/SingleVariableCalculus7thEdition.jpeg",
		"price":299.95,
		"author":"James Steward",
		"edition": 7,
		"type":"Hardcover",
		"page_count":1368,
		"publisher": "Cengage Learning; 7 edition (2012)",
		"language":"English",
		"isbn_10": "0538497815",
		"isbn_13":"978-05384978172",
		"dimensions":"8.5 x 1.8 x 10 inches",
		"weight":"6.1 pounds"
	},
	{
		"title":"Linear Algebra and Its Applications, 5th Edition",
		"image":"./images/LinearAlgebraAndItsApplications.jpeg",
		"price":206.65,
		"author":"David C. Lay, Steven R. Lay, Judi J. McDonald",
		"edition": 5,
		"type":"Hardcover",
		"page_count":576,
		"publisher": "Pearson; 5 edition (January 3, 2015)",
		"language":"English",
		"isbn_10": "0321982384",
		"isbn_13":"978-0321982384",
		"dimensions":"8.9 x 5.9 x 0.9 inches",
		"weight":"1.3 pounds"
	},
	{
		"title":"Precalculus (10th edition)",
		"image":"./images/Precalculus10thEdition.jpg",
		"price":259.99,
		"author":"Michael Sullivan",
		"edition": 10,
		"type":"Hardcover",
		"page_count":1168,
		"publisher": "Pearson; 10 edition (February 27, 2015)",
		"language":"English",
		"isbn_10": "0321979079",
		"isbn_13":"978-0321979070",
		"dimensions":"8.8 x 1.6 x 11.1 inches",
		"weight":"5.4 pounds"
	},
	{
		"title":"ACTIVE Skills for Reading 3",
		"image":"./images/ActiveSkillsForReading3.jpg",
		"price":55.95,
		"author":"Neil J. Anderson",
		"edition": 3,
		"type":"Paperback",
		"page_count":208,
		"publisher": "Heinle ELT; 3 edition (February 21, 2013)",
		"language":"English",
		"isbn_10": "1133308066",
		"isbn_13":"978-1133308065",
		"dimensions":"8 x 0.2 x 10 inches",
		"weight":"14.1 ounces"
	},
	{
		"title":"The Blue Book of Grammar and Punctuation: An Easy-to-Use Guide with Clear Rules, Real-World Examples, and Reproducible Quizzes,",
		"image":"./images/TheBlueBookGrammarAndPunctuation.jpeg",
		"price":17.95,
		"author":"Jane Straus, Lester Kaufman, Tom Stern",
		"edition": 11,
		"type":"Paperback",
		"page_count":224,
		"publisher": "Wiley; 11 edition (February 10, 2014)",
		"language":"English",
		"isbn_10": "1118785568",
		"isbn_13":"978-1118785560",
		"dimensions":"8.4 x 0.6 x 10.8 inches",
		"weight":"1.2 pounds"
	},
	{
		"title":"Imaginative Writing (4th Edition)",
		"image":"./images/ImaginativeWriting.jpg",
		"price":73.32,
		"author":"Janet Burroway",
		"edition": 4,
		"type":"Paperback",
		"page_count":432,
		"publisher": "Pearson; 4 edition (November 2, 2014)",
		"language":"English",
		"isbn_10": "0134053249",
		"isbn_13":"978-0134053240",
		"dimensions":"8.9 x 5.9 x 0.9 inches",
		"weight":"1.3 pounds"
	},
	{
		"title":"Ways of the World: A Brief Global History with Sources, Combined Volume",
		"image":"./images/WaysOfTheWorld.jpg",
		"price":115.99,
		"author":"Robert W. Strayer",
		"edition": 2,
		"type":"Paperback",
		"page_count":1344,
		"publisher": "Bedford/St. Martin's; Second edition (October 26, 2012)",
		"language":"English",
		"isbn_10": "031258346X",
		"isbn_13":"978-0312583460",
		"dimensions":"7.3 x 1.7 x 9.1 inches",
		"weight":"3.8 pounds"
	},
	{
		"title":"American Government, Essentials Edition",
		"image":"./images/AmericanGovernment.jpg",
		"price":217.95,
		"author":"James Q. Wilson, Jr. John J. DiIulio, Meena Bose",
		"edition": 14,
		"type":"Paperback",
		"page_count":528,
		"publisher": "Wadsworth Publishing; 14 edition (January 1, 2014)",
		"language":"English",
		"isbn_10": "1285195124",
		"isbn_13":"978-1285195124",
		"dimensions":"8.2 x 1 x 11 inches",
		"weight":"2.2 pounds"
	},
	{
		"title":"United States History: Student Edition 2012",
		"image":"./images/UnitedStatesHistory.jpg",
		"price":99.60,
		"author":"Holt McDougal",
		"edition": 1,
		"type":"Hardcover",
		"page_count":1120,
		"publisher": "HOLT MCDOUGAL; 1 edition (December 31, 2010)",
		"language":"English",
		"isbn_10": "0547484283",
		"isbn_13":"978-0547484280",
		"dimensions":"9 x 1.8 x 11.5 inches",
		"weight":"5.4 pounds"
	},
	{
		"title":"Programming the World Wide Web (8th Edition)",
		"image":"./images/ProgrammingTheWorldWideWeb.jpg",
		"price":153.32,
		"author":"Robert W. Sebesta",
		"edition": 8,
		"type":"Paperback",
		"page_count":792,
		"publisher": "Pearson; 8 edition (March 22, 2014)",
		"language":"English",
		"isbn_10": "0133775984",
		"isbn_13":"978-0133775983",
		"dimensions":"7.4 x 1.7 x 9 inches",
		"weight":"2.6 pounds"
	},
	{
		"title":"Designing the User Interface: Strategies for Effective Human-Computer Interaction (6th Edition)",
		"image":"./images/DesigningTheUserInterface.jpg",
		"price":166.65,
		"author":"Ben Shneiderman  (Author), Catherine Plaisant (Author), Maxine Cohen (Author), Steven Jacobs (Author), Niklas Elmqvist (Author), Nicholas Diakopoulos (Author)",
		"edition": 6,
		"type":"Paperback",
		"page_count":616,
		"publisher": "Pearson; 6 edition (April 30, 2016)",
		"language":"English",
		"isbn_10": "9780134380384",
		"isbn_13":"978-0134380384",
		"dimensions":"7.7 x 1.2 x 9.4 inches",
		"weight":"2.2 pounds"
	},
	{
		"title":"Database Management Systems, 3rd Edition",
		"image":"./images/DatabaseManagementSystems.jpg",
		"price":246.43,
		"author":"Raghu Ramakrishnan, Johannes Gehrke",
		"edition": 3,
		"type":"Hardcover",
		"page_count":1104,
		"publisher": "McGraw-Hill; 3rd edition (August 14, 2002)",
		"language":"English",
		"isbn_10": "0072465638",
		"isbn_13":"978-0072465631",
		"dimensions":"7.5 x 1.7 x 9.1 inches",
		"weight":"4.0 pounds"
	},
	{
		"title":"The Annotated Mona Lisa, Third Edition: A Crash Course in Art History from Prehistoric to the Present (Volume 3) (Annotated Series)",
		"image":"./images/TheAnnotatedMonaLisa.jpg",
		"price":29.99,
		"author":"Carol Strickland",
		"edition": 3,
		"type":"Paperback",
		"page_count":232,
		"publisher": "Andrews McMeel Publishing; Revised edition (January 9, 2018)",
		"language":"English",
		"isbn_10": "1449482139",
		"isbn_13":"978-1449482138",
		"dimensions":"8.8 x 0.5 x 10.5 inches",
		"weight":"1.6 pounds"
	},
	{
		"title":"Gardner's Art Through the Ages: A Global History (16th Edition)",
		"image":"./images/GardenersArtThroughTheAges.jpg",
		"price":169.97,
		"author":"Fred S. Kleiner",
		"edition": 16,
		"type":"Hardcover",
		"page_count":1264,
		"publisher": "Cengage Learning; 16 edition (January 1, 2019)",
		"language":"English",
		"isbn_10": "1337630705",
		"isbn_13":"978-1337630702",
		"dimensions":"9.1 x 2.2 x 11.7 inches",
		"weight":"9.4 poundss"
	},
	{
		"title":"Rock and Roll: Its History and Stylistic Development",
		"image":"./images/RockAndRoll.jpg",
		"price":254.81,
		"author":"Joe Stuessy, Scott D. Lipscomb",
		"edition": 7,
		"type":"Paperback",
		"page_count":456,
		"publisher": "Pearson; 7 edition (January 17, 2012)",
		"language":"English",
		"isbn_10": "0205246974",
		"isbn_13":"978-0205246977",
		"dimensions":"9.9 x 0.70 x 8.0 inches",
		"weight":"1.3 poundss"
	},
]

function validatePurchaseForm() {
	var isbn13 = document.getElementById("isbn13").value;
	var quantity = document.getElementById("quantity").value;
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var phoneNo = document.getElementById("phoneNo").value;
	var address = document.getElementById("address").value;
	var aptNo = document.getElementById("aptNo").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var zipCode = document.getElementById("zipCode").value;
	var shipping = document.getElementById("shipping").value;
	var cardnum = document.getElementById("cardnum").value;
	var expDate = document.getElementById("expDate").value;
	var cvv = document.getElementById("cvv").value;
	// tells user what they need to correct in the form purposes
	var alertMessage = "The following entries have invalid input:\n";
	// validating isbn13 number
	let count = 0;
	for (var i = 0; i < books.length; i++) {
		if (books[i].isbn_13 === isbn13) {
			break;
		}
		else {
			count++;
		}
	}
	if (count === books.length) {
		alertMessage += " - ISBN-13 Number\n";
	}
	// validating quantity number
	if (!quantity.match(/^0*[1-9][\d]*$/g)){
		alertMessage += "- Quantity Amount\n";
	}
	// validating firstName string
	if (!firstName.match(/^[a-zA-Z]+(['-][a-zA-Z]+)*$/g)) {
		alertMessage += "- First Name\n";
	}
	// validating lastName string
	if (!lastName.match(/^[a-zA-Z]+([\s'-][a-zA-Z]+)*$/g)) {
		alertMessage += "- Last Name\n";
	}
	// validating email string
	if (!email.match(/^[a-zA-Z0-9]([a-zA-Z0-9]*([\._-][a-zA-Z0-9]+)?)*@[a-zA-Z0-9]([a-zA-Z0-9]*([-][a-zA-Z0-9])?)*\.[a-zA-Z]{2,3}$/g)) {
		alertMessage += "- Email\n";
	}
	// validating phoneNo number
	if (!phoneNo.match(/^1?[2-9][\d]{9}$/g)) {
		alertMessage += "- Phone Number\n";
	}
	// validating address string
	if (!address.match(/^[1-9][\d]{0,4}(\s([1-9][\d]*)*[a-zA-Z]+.?)+$/g)) {
		alertMessage += "- Street Address\n";
	}
	// validating aptNo string
	if (!aptNo.match(/^(\s*|[a-zA-Z0-9]+(-?[a-zA-Z0-9])*)$/g)) {
		alertMessage += "- Apartment Number\n";
	}
	// validating city string
	if (!city.match(/^[a-zA-Z]{3,}([-\s][a-zA-Z]{3,})*$/g)) {
		alertMessage += "- City\n"
	}
	// validating state option
	if (state.match(/^default$/g)) {
		alertMessage += "- State\n";
	}
	// validating zipCode number
	if (!zipCode.match(/^\d{5}(-\d{4})?$/g)){
		alertMessage += "- Zip Code\n";
	}
	// validating shipping string
	if (shipping.match(/^default$/g)){
		alertMessage += "- Shipping Speed\n";
	}
	// validating cardnum number
	if (!cardnum.match(/^[\d]{16}$/g)){
		alertMessage += "- Card Number\n";
	}
	// validating expDate number
	if (!expDate.match(/^((0[5-9]|1[0-2])2[0-4]|(0[1-9]|1[0-2])2[1-4])$/g)){
		alertMessage += "- Credit Card Expiration Date\n";
	}
	// validating cvv number
	if (!cvv.match(/^[\d]{3,4}$/g)){
		alertMessage += "- CVV Number\n";
	}
	if (alertMessage.length > 42) {
		alert(alertMessage);
	}
	else {
		sendEmail(isbn13, quantity.replace(/^0+/,''), firstName, lastName, email, phoneNo, address, aptNo, city, state, zipCode, shipping);
	}
}

function sendEmail(isbn13, quantity, firstName, lastName, email, phoneNo, address, aptNo, city, state, zipCode, shipping) {
	var body = "Thank you for ordering from Off-Da-Hook Flexbooks! Your order details are below:%0A";
	body += "Customer Name: " + firstName+ " " + lastName + "%0A";
	body += "Phone Number: " + phoneNo + "%0A";
	body += "Address: " + address;
	if (aptNo == "") {
		body += ", ";
	}
	else {
		body += ", #" + aptNo + ", ";
	}
	body += city + ", " + state + " " + zipCode + "%0A";
	body += "Book ISBN-13: " + isbn13 + "%0A";
	body += "Quantity: " + quantity + "%0A";
	body += "Type of Shipping: " + shipping + "%0A";
	
  	window.location.href = "mailto:" + email + "?subject=Off-Da-Hook Flexbooks Order Confirmation&body=" + body;
}

function setVar(my_id) {
	sessionStorage.setItem('my_id', my_id)
}

function setData(){
	var data = parseInt(sessionStorage.getItem('my_id'), 10);
	var {title, image, price, author, edition, type, page_count, publisher, language, isbn_10, isbn_13, dimensions, weight} = books[data];

	document.getElementById("title_and_price").innerHTML = "<strong><u>" + title + "</u></strong> - $" + price;
	document.getElementById("image").src = image;
	document.getElementById("description").innerHTML = "<h3><strong>Author:</strong>&emsp; " + author + "</h3>" +
														"<h3><strong>Edition:</strong>&emsp; " + edition + "</h3>" +
														"<h3><strong>Type:</strong>&emsp; " + type + "</h3>" +
														"<h3><strong>Page Count:</strong>&emsp; " + page_count + "</h3>" +
														"<h3><strong>Publisher:</strong>&emsp; " + publisher + "</h3>" +
														"<h3><strong>Lanaguage:</strong>&emsp; " + language + "</h3>" +
														"<h3><strong>ISBN-10:</strong>&emsp; " + isbn_10 + "</h3>" +
														"<h3><strong>ISBN-13:</strong>&emsp; " + isbn_13 + "</h3>" +
														"<h3><strong>Product Dimensions:</strong>&emsp; " + dimensions + "</h3>" +
														"<h3><strong>Shipping Weight:</strong>&emsp; " + weight + "</h3>";
}

	