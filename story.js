// 1. Declare variables and capture input.
let noun = prompt("Please type a noun"); 
let verb = prompt("Please type a verb");
let adjective = prompt("Please type an adjective"); 



// 2. Combine the input with other words to create a story.
let story = `<p>There once was a ${noun} that liked to ${verb} but was very ${adjective}.</p>`; 

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;