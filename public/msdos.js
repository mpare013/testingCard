document.addEventListener("DOMContentLoaded", function () {
    const msdosContents = document.querySelector(".msdosContents");
  
    const commands = {
      grtng: [
        "Hello! What can I do for you today?",
        "Hi! You're looking really cute today, what can I help you with?",
        "Hey! Hope you're having a great day, what can I do for you?"
      ],
      wthr: [
        "Tomorrow looks like a sunny day with a chance of rain.",
        "Cloudy with a chance of meatballs.",
        "Hot and humid tomorrow!",
        "Expect strong winds, try not to get blown away.",
        "Sunny and clear skies all day!",
        "Sunny, don't forget your sunscreen.",
      ],
      dinr: [
        "How about tacos? Protein, veggies, grain, and dairy. So good and so healthy.",
        "Sushi: the stars’ way of saying 'you deserve soy sauce spills'.",
        "Mac & cheese... it's your comfort food destiny.",
        "Pizza date! If you look around here, maybe you'll find a pizza recipe somewhere.",
        "Pasta. Not just regular pasta, add a bunch of veggies and protein. Enjoy with some garlic bread on the side.",
      ],
      dte: [
        "Try a new videogame together. Get some snacks and blankets and just enjoy eachother's company.",
        "Go for a walk, set up a picnic, and surprise each other with a treat you think they'll love.",
        "Watch a movie together and share some snacks. Just a relaxed night in, enjoying each other's company.",
        "Go to the dollar store and find an activity to do together. This could be a puzzle, pottery, or painting. The universe can sense you both need some bonding and alone time together.",
        "Cook dinner together. Pick a new recipe, gather the ingredients, and enjoy making something new together in the kitchen.",
        "Wine and cheese night. Pick up a few different types of wine and cheese, and have your own mini tasting session at home.",
        "DIY pizza night. Get some pizza dough, toppings, and make your own custom pizzas. Have fun with it, and enjoy!",
        "Go on a hike. Find a local trail and enjoy a hike, taking in the views and spending some time outdoors.",
        "Have a themed dinner night. Choose a theme (like Mexican, Italian, or sushi) and prepare or order food that fits.",
        "Have a spa night. Set the mood with candles, relaxing music, and face masks. Give each other massages or treat yourselves to a full pampering session.",
      ]
    };
  
    const zodiacFortunes = {
      aries: ["Your bold energy will open new doors.", "Burnout creeps in fast. Take a walk, not a sprint, today.", "A quick decision puts you ahead. Trust your instincts."],
      taurus: [" Consistency matters more than big gestures right now. Stay consistent, stay steady.", "Stick to your routine, it's more powerful than you think.", "Comfort leads to clarity. Make space for both today."],
      gemini: ["Restlessness isn’t a flaw. Channel it into something useful.", "You’re craving connection, but don’t rush the words — let curiosity lead the conversation today.", "Your mind’s in overdrive. Take a moment to unplug — clarity often shows up when you’re not looking."],
      cancer: ["Someone close wants more of your time — don’t underestimate the power of simply being present.", "Something cozy will bring unexpected joy.", "Stay behind the scenes today; quiet observation will reveal something useful."],
      leo: ["You were born to shine. Someone's watching — give them a show.", "Confidence suits you — wear it like your favorite jacket.", "A compliment you give today will echo back to you."],
      virgo: ["Details matter. One small step today leads to something big.", "Perfection isn’t the goal — progress is.", "You've reached a fork in the road...pick it up.'"],
      libra: ["Balance is beautiful. Say yes to the thing you’ve been hesitating on.", "Someone close needs your fairness today.", "Find harmony in your space — a little tidy time, a big mood boost."],
      scorpio: ["Your mystery is magnetic. Just don’t ghost the people who love you.", "A long-term plan begins to take shape—stay strategic, not reactive.", "Romance lives in the small moments.  Don’t wait for the perfect moment — create it."],
      sagittarius: ["Adventure calls — even if it’s just trying a new cereal.", "Risk has its rewards, but timing is everything. Wait for the green light.", "Take one bold step — the rest will follow with joy."],
      capricorn: ["Your ambition will pay off. Stay consistent and don’t skip sleep.", "Structure leads to strength. Lean into your habits.", "A breakthrough is coming — and you’ve earned it."],
      aquarius: ["Think different. Someone will appreciate your weird today.", "The future you imagine is possible, start small — it will lead to big things.", "Act on the idea you've been sitting on."],
      pisces: ["Dream big, but write things down to keep yourself accountable.", "Your sensitivity is a gift — use it to lift someone today.", "Get lost in imagination — it’ll bring real-world results."]
    };
  
    let waitingForZodiac = false;
  
    function handleCommand(event) {
      if (event.key === "Enter") {
        const input = event.target;
        const userInput = input.value.trim().toLowerCase();
        input.disabled = true;
  
        const output = document.createElement("div");
        output.className = "msdosMessage";
  
        if (waitingForZodiac) {
          const fortunes = zodiacFortunes[userInput];
          if (fortunes) {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            output.textContent = `Your fortune: ${fortunes[randomIndex]}`;
          } else {
            output.textContent = `'${userInput}' is not a valid zodiac sign. Enter 'frtn' to try again.`;
          }
          waitingForZodiac = false;
        } else {
          if (userInput === "frtn") {
            output.textContent = "What is your zodiac sign?";
            waitingForZodiac = true;
          } else if (commands[userInput]) {
            const responses = commands[userInput];
            const response = Array.isArray(responses)
              ? responses[Math.floor(Math.random() * responses.length)]
              : responses;
            output.textContent = response;
          } else {
            output.textContent = `'${userInput}' is not recognized as an internal or external command.`;
          }
        }
  
        msdosContents.appendChild(document.createElement("br"));
        msdosContents.appendChild(output);
  
        const newLine = document.createElement("div");
        newLine.className = "msdosMessage";
        newLine.innerHTML = `C:\\Users\\MS-DOS><input type="text" class="commandInput" autocomplete="off">`;
        msdosContents.appendChild(newLine);
  
        const newInput = newLine.querySelector("input");
        newInput.focus();
        newInput.addEventListener("keydown", handleCommand);
      }
    }
  

    const initialInput = document.querySelector(".commandInput");
    initialInput.addEventListener("keydown", handleCommand);
  });