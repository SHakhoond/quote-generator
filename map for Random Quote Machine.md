1--user story:
		As a user I  should can click a button to show me a new random quote.
		and also with pressing the button I can tweet out quote,

2-- I found I can use my quotes into a Arrar and show them at random or use an API to get quotes

first step is making my HTML 
	1-- I will start with a section and footer(it;s optional); 
	my section'll have a className EX "main-container" wiyh 
			H1 and P for some description of my random quotes;
			than I'll countniue with div=className "";
			2 <P> tag with diffranece className((it's just for desingning)
			and next buttun part here I need id name 
			and 
			<a> for tweeting and inside the a button

			last one is footer 


third step is Javascript holy ,,,,
	so I have two options: use my array  or find a url I can use 
	I should create a function to get object from my API to use the data
	i was thinking if I didn't know that how's the author  what should I do, I think I can make if condition if the author is empthy chenge it to Unknown
	also I have to generate a random quote when the page finishes loading
	whan user click button, there is a funtion that call the API or my array of quote to get the data
	in the tweeter part I'll create a var to hold a string to be   