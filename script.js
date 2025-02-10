let coins = 0;
let isSpinning = false;
let currentJoke = null; // Store the current random joke

// Array of jokes
const completeJokeList = [
    { joke: "I told my computer I needed a break, and now it won't stop sending me beach wallpapers.", answer: "Haha!" },
    { joke: "Why don't scientists trust atoms? Because they make up everything!", answer: "So true!" },
    { joke: "What do you call fake spaghetti? An impasta!", answer: "Pasta joke!" },
    { joke: "Why did the scarecrow win an award? Because he was outstanding in his field!", answer: "Classic!" },
    { joke: "Why did the bicycle fall over? Because it was two-tired!", answer: "So punny!" },
    { joke: "Have you heard about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!", answer: "Haha!" },
    { joke: "What do you call a belt made of watches? A waist of time!", answer: "Get it?" },
    { joke: "Why was the math book sad? Because it had too many problems.", answer: "Witty!" },
    { joke: "What did one wall say to the other wall? I'll meet you at the corner!", answer: "Cornered!" },
    { joke: "Why don't skeletons fight each other? They don't have the guts!", answer: "Scary funny!" },
  { joke: "I told my computer I needed a break, and now it won't stop sending me beach wallpapers.", answer: "Haha!" },
    { joke: "Why don't scientists trust atoms? Because they make up everything!", answer: "So true!" },
    { joke: "What do you call fake spaghetti? An impasta!", answer: "Pasta joke!" },
    { joke: "Why did the scarecrow win an award? Because he was outstanding in his field!", answer: "Classic!" },
    { joke: "Why did the bicycle fall over? Because it was two-tired!", answer: "So punny!" },
    { joke: "Have you heard about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!", answer: "Haha!" },
    { joke: "What do you call a belt made of watches? A waist of time!", answer: "Get it?" },
    { joke: "Why was the math book sad? Because it had too many problems.", answer: "Witty!" },
    { joke: "What did one wall say to the other wall? I'll meet you at the corner!", answer: "Cornered!" },
    { joke: "Why don't skeletons fight each other? They don't have the guts!", answer: "Scary funny!" },
    // Add more jokes to complete 200...
    { joke: "I would avoid the sushi if I were you. It’s a little fishy!", answer: "Seafood humor!" },
    { joke: "What do you call cheese that isn't yours? Nacho cheese!", answer: "Classic!" },
    { joke: "Why can't you give Elsa a balloon? Because she will let it go!", answer: "Frozen fun!" },
    { joke: "What do you get when you cross a snowman with a vampire? Frostbite!", answer: "Cold and creepy!" },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", answer: "Fore!" },
    { joke: "Why did the chicken join a band? Because it had the drumsticks!", answer: "Rock on!" },
    { joke: "Why did the tomato turn red? Because it saw the salad dressing!", answer: "Veggie humor!" },
    { joke: "Why did the computer go to the doctor? It had a virus!", answer: "Add some bytes!" },
    { joke: "Why don't eggs tell each other secrets? Because they might crack up!", answer: "Egg-cellent!" },
    { joke: "Why was the broom late? It swept in!", answer: "Cleaning up!" },
    { joke: "Why don't some couples go to the gym? Because some relationships don't work out!", answer: "Gym humor!" },
    { joke: "Did you hear about the claustrophobic astronaut? He just needed a little space!", answer: "Out of this world!" },
    { joke: "Why was the big cat disqualified from the race? Because it was a cheetah!", answer: "Run fast!" },
    { joke: "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels!", answer: "Baking humor!" },
    { joke: "What do you get from a pampered cow? Spoiled milk!", answer: "Moo-vin' on!" },
    { joke: "What do you call a factory that makes good products? A satisfactory!", answer: "Workplace humor!" },
    { joke: "Did you hear about the kid napping? He went right to sleep!", answer: "Kids and naps!" },
    { joke: "What do you get when a dinosaur crashes his car? Tyrannosaurus wrecks!", answer: "Dino-mite!" },
    { joke: "Why did the cookie cry? Because its mom was a wafer (away for) so long!", answer: "Crunchy humor!" },
    { joke: "What did the janitor say when he jumped out of the closet? Supplies!", answer: "Coming out!" },
    // ... continue adding jokes until you reach 200
];

// Here are more jokes to fill in the total to 200. You can add them to the jokeList array.
const additionalJokes = [
    { joke: "I'm reading a book on anti-gravity. It's impossible to put down!", answer: "Light reading!" },
    { joke: "What do you call a cow with no legs? Ground beef!", answer: "Meaty joke!" },
    { joke: "What did the ocean say to the beach? Nothing, it just waved!", answer: "Wave hello!" },
    { joke: "Why did the girl bring a ladder to the bar? Because she heard the drinks were on the house!", answer: "Climbing high!" },
    { joke: "Why do bicycles fall over? Because they are two-tired!", answer: "Rolling funny!" },
    { joke: "What did the dentist say to the golfer? You have a hole in one!", answer: "Golf joke!" },
    { joke: "What do you call a bear with no teeth? A gummy bear!", answer: "Sweet!" },
    { joke: "Why don’t skeletons ever go trick or treating? Because they have no body to go with!", answer: "Bony humor!" },
    { joke: "What did the fish say when it hit the wall? Dam!", answer: "Funny fish!" },
    { joke: "Why can't you hear a pterodactyl going to the bathroom? Because the 'P' is silent!", answer: "Dino jokes!" },
    // ... more jokes ...
    // Add more jokes as needed...
];

// Spin button functionality
document.getElementById('spinButton').onclick = function() {
    if (isSpinning) return;
    isSpinning = true;

    const wheel = document.getElementById('wheel');
    const randomDegrees = Math.floor(Math.random() * 360) + 720; // Spin at least 2 full rotations
    wheel.style.transform = `rotate(${randomDegrees}deg)`;

    // Determine coin amount after the spin finishes
    setTimeout(() => {
        const degrees = randomDegrees % 360;
        let coin = 0;

        if (degrees < 60) { coin = 10; }
        else if (degrees < 120) { coin = 20; }
        else { coin = 30; }

        coins += coin;
        document.getElementById('coinCount').innerText = coins;
        isSpinning = false;
    }, 4000); // Timeout should match the transition duration
};

// Redeem button functionality
document.getElementById('redeemButton').onclick = function() {
    const code = document.getElementById('redeemCode').value;
    if (code === "REDEEM10") { coins += 10; }
    else if (code === "REDEEM20") { coins += 20; }
    else if (code === "REDEEM30") { coins += 30; }

    document.getElementById('coinCount').innerText = coins;
    document.getElementById('redeemCode').value = ''; // Reset the input
};

// Reveal joke functionality
document.getElementById('revealJoke').onclick = function() {
    if (coins >= 10) { // Cost to reveal a joke
        currentJoke = completeJokeList[Math.floor(Math.random() * completeJokeList.length)];
        document.getElementById('joke').innerText = currentJoke.joke; // Display the joke
        document.getElementById('answer').innerText = ""; // Reset the answer display
        document.getElementById('revealAnswerBtn').style.display = 'inline-block'; // Show reveal answer button
        coins -= 10; // Deduct coin cost
        document.getElementById('coinCount').innerText = coins;
    } else {
        alert("Not enough coins to reveal a joke!");
    }
};

// Chat functionality (simplified)
document.getElementById('chatSendButton').onclick = function() {
    const user = document.getElementById('chatUser').value.trim();
    const message = document.getElementById('chatBox').value.trim();

    if (user && message) {
        document.getElementById('chatOutput').innerHTML += `<p><strong>${user}:</strong> ${message}</p>`;
        document.getElementById('chatBox').value = ''; // Reset chat input
    }
};


