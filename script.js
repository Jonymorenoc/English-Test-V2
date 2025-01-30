/*************************************************************
 * 1. LESSON DATA (6 lessons total, each 15 exercises)
 *    - Conjunctions (15) -> multiple-choice
 *    - Question Words (15) -> multiple-choice
 *    - Can/Can't (15) -> multiple-choice
 *    - Present Progressive (?) puzzle (renamed from old "progressive")
 *    - Negative Progressive puzzle
 *    - Affirmative Present Progressive puzzle (new)
 *************************************************************/
const lessons = {
  /***********************
   * 1) Conjunctions (15)
   ***********************/
  conjunctions: {
    title: "🔗 Conjunctions Practice",
    emoji: "🧩",
    explanation:
      `<div class="explanation">
        <h3>Connecting Words Fun! 🌉</h3>
        <p><strong>AND</strong> joins ideas<br>
        <strong>OR</strong> shows choice<br>
        <strong>BUT</strong> shows contrast</p>
      </div>`,
    lessonTip:
      `<p>Tip: Use <strong>AND</strong> to connect similar things, 
       <strong>OR</strong> to choose, and <strong>BUT</strong> to show contrast.</p>`,
    exercises: [
      {q: "Zebras are black ___ white 🦓", o: ["and", "or", "but"], a: "and", tip: "AND connects two similar ideas."},
      {q: "Do you want pancakes ___ waffles? 🥞", o: ["and", "or", "but"], a: "or", tip: "OR presents a choice between options."},
      {q: "I want ice cream, ___ I'm full 🍦", o: ["but", "or", "and"], a: "but", tip: "BUT shows a contrast."},
      {q: "Do you prefer a book, table ___ shelf? 📚", o: ["or", "and", "but"], a: "or", tip: "OR presents a choice."},
      {q: "Baby is hungry ___ tired 👶", o: ["and", "but", "or"], a: "and", tip: "AND connects two states."},
      {q: "The TV is broken ___ they want to watch 📺", o: ["but", "and", "or"], a: "but", tip: "BUT shows a contrast."},
      {q: "The baseball bat is missing ___ it's not fun ⚾", o: ["but", "or", "and"], a: "but"},
      {q: "Do you like apples ___ oranges? 🍎🍊", o: ["or", "and", "but"], a: "or"},
      {q: "It is sunny ___ raining? 🌞🌧️", o: ["but", "and", "or"], a: "but"},
      {q: "Would you like pizza ___ pasta? 🍕🍝", o: ["and", "or", "but"], a: "and"},
      {q: "Do you want milk ___ juice? 🥛🧃", o: ["or", "but", "and"], a: "or"},
      {q: "Dogs ___ cats get along well 🐶🐱", o: ["and", "but", "or"], a: "and"},
      {q: "Tea ___ coffee? ☕🍵", o: ["and", "but", "or"], a: "or"},
      {q: "He is tall ___ strong 💪", o: ["and", "but", "or"], a: "and"},
      {q: "She wanted to play, ___ it was raining ☔", o: ["and", "but", "or"], a: "but"}
    ]
  },

  /***********************
   * 2) Question Words (15)
   ***********************/
  questionWords: {
    title: "❓ Question Words",
    emoji: "🔍",
    explanation:
      `<div class="explanation">
        <h3>Asking Questions 🕵️‍♀️</h3>
      </div>`,
    lessonTip:
      `<p>Tip: 
      <strong>WHO</strong> → People<br>
      <strong>WHERE</strong> → Places<br>
      <strong>WHEN</strong> → Time<br>
      <strong>WHAT</strong> → Things<br>
      <strong>WHY</strong> → Reasons</p>`,
    exercises: [
      {q: "___ is crying? 😢", o: ["Who", "Why", "Where"], a: "Who", tip: "WHO = a person."},
      {q: "___ is your backpack? 🎒", o: ["Where", "What", "When"], a: "Where"},
      {q: "___ is she doing? 📚", o: ["What", "Who", "Why"], a: "What"},
      {q: "___ is in the kitchen? 👨🍳", o: ["Who", "Where", "When"], a: "Who"},
      {q: "___ is your birthday? 🎂", o: ["When", "What", "Why"], a: "When"},
      {q: "___ is your teacher? 👩🏫", o: ["Who", "Where", "What"], a: "Who"},
      {q: "___ is the park? 🌳", o: ["Where", "When", "Why"], a: "Where"},
      {q: "___ is lunch time? 🕛", o: ["When", "What", "Who"], a: "When"},
      {q: "___ is the sky blue? 🌌", o: ["Why", "Where", "How"], a: "Why"},
      {q: "___ are you going to school? 🚌", o: ["Where", "Why", "Who"], a: "Where"},
      {q: "___ is your favorite color? 🎨", o: ["What", "When", "Who"], a: "What"},
      {q: "___ do you like pizza? 🍕", o: ["Why", "Where", "Who"], a: "Why"},
      {q: "___ is your birthday celebration? 🎉", o: ["When", "What", "Who"], a: "When"},
      {q: "___ are we playing today? 🎮", o: ["What", "When", "Why"], a: "What"},
      {q: "___ is the library? 📚", o: ["Where", "When", "Who"], a: "Where"}
    ]
  },

  /***********************
   * 3) Can/Can't (15)
   ***********************/
  canCant: {
    title: "🐾 Can/Can't",
    emoji: "🦁",
    explanation:
      `<div class="explanation">
        <h3>Animal Abilities 🦸‍♂️</h3>
      </div>`,
    lessonTip:
      `<p>Tip: 
      <strong>CAN</strong> = an ability.<br>
      <strong>CAN'T</strong> = not possible.</p>`,
    exercises: [
      {q: "Seals ___ clap 🦭", o: ["can", "can't"], a: "can", tip: "Seals have flippers to clap."},
      {q: "Cows ___ speak 🐮", o: ["can't", "can"], a: "can't"},
      {q: "Parrots ___ talk 🦜", o: ["can", "can't"], a: "can"},
      {q: "Bees ___ hide 🐝", o: ["can't", "can"], a: "can't"},
      {q: "Spiders ___ spin webs 🕷️", o: ["can", "can't"], a: "can"},
      {q: "Whales ___ land on the beach 🐳", o: ["can't", "can"], a: "can't"},
      {q: "Goats ___ sing songs 🐐", o: ["can't", "can"], a: "can't"},
      {q: "Dolphins ___ click sounds 🐬", o: ["can", "can't"], a: "can"},
      {q: "Frogs ___ jump high 🐸", o: ["can", "can't"], a: "can"},
      {q: "Fish ___ walk on land 🐠", o: ["can't", "can"], a: "can't"},
      {q: "Bats ___ see in the dark 🦇", o: ["can", "can't"], a: "can"},
      {q: "Pigs ___ fly in the sky 🐷", o: ["can't", "can"], a: "can't"},
      {q: "Kangaroos ___ hop far 🦘", o: ["can", "can't"], a: "can"},
      {q: "Snakes ___ have legs 🐍", o: ["can't", "can"], a: "can't"},
      {q: "Eagles ___ soar high 🦅", o: ["can", "can't"], a: "can"}
    ]
  },

  /********************************************
   * 4) Present Progressive (?)
   *    (renamed from old "progressive")
   *    puzzle approach, 15 items
   ********************************************/
  progressiveQuestion: {
    title: "🔄 Present Progressive (?)",
    emoji: "❓",
    explanation:
      `<div class="explanation">
        <h3>Right Now Actions (Questions)</h3>
        <p>Use <strong>Am/Is/Are</strong> + verb(ing) + ?<br>
        Example: "She <u>is playing</u> → Is she playing?"</p>
      </div>`,
    lessonTip:
      `<p>Tip: 
      This is the question form. 
      Put <strong>am/is/are</strong> before the subject + verb(ing).</p>`,
    exercises: [
      // 15 puzzle items (the old progressive)
      {
        q: "He is working → ? 💼",
        words: ["Is", "he", "working", "?"],
        distractors: ["are", "mom", "table", "jump"],
      },
      {
        q: "We are eating → ? 🍽️",
        words: ["Are", "we", "eating", "?"],
        distractors: ["is", "cat", "play", "sleep"],
      },
      {
        q: "You are running → ? 🏃‍♀️",
        words: ["Are", "you", "running", "?"],
        distractors: ["car", "milk", "dog", "am"],
      },
      // ... keep 15 total ...
      {
        q: "They are watching → ? 📺",
        words: ["Are", "they", "watching", "?"],
        distractors: ["sing", "milk", "am", "mom"],
      }
    ]
  },

  /********************************************
   * 5) Negative Progressive => puzzle (15)
   ********************************************/
  negativeProgressive: {
    title: "🚫 Negative Progressive",
    emoji: "🙅‍♂️",
    explanation:
      `<div class="explanation">
        <h3>Saying "Not Now"</h3>
        <p>Add <strong>not</strong> after am/is/are<br>
        Example: "They <u>are not</u> watching."</p>
      </div>`,
    lessonTip:
      `<p>Tip: Insert <strong>not</strong> after <strong>am/is/are</strong> for a negative statement.</p>`,
    exercises: [
      // 15 puzzle items
      {
        q: "They are watching TV →",
        words: ["They", "are", "not", "watching", "TV"],
        distractors: ["banana", "?", "car", "run"],
      },
      // ...
      {
        q: "Frogs are swimming →",
        words: ["Frogs", "are", "not", "swimming"],
        distractors: ["banana", "am", "sing", "is"],
      }
    ]
  },

  /************************************************
   * 6) Affirmative Present Progressive => puzzle (15)
   ************************************************/
  affirmativeProgressive: {
    title: "✅ Affirmative Present Progressive",
    emoji: "💡",
    explanation:
      `<div class="explanation">
        <h3>Right Now Actions (Affirmative)</h3>
        <p>Form sentences with: <strong>Subject + am/is/are + verb+ing</strong></p>
      </div>`,
    lessonTip:
      `<p>Tip:
      Use <strong>Subject + am/is/are + verb(ing)</strong> for a positive/affirmative statement.</p>`,
    exercises: [
      // 15 puzzle items for Affirmative
      {
        q: "He is working.",
        words: ["He", "is", "working"],
        distractors: ["are", "they", "banana", "jump"]
      },
      {
        q: "We are eating.",
        words: ["We", "are", "eating"],
        distractors: ["I", "mom", "milk", "am"]
      },
      {
        q: "She is playing.",
        words: ["She", "is", "playing"],
        distractors: ["why", "dog", "are", "table"]
      },
      {
        q: "They are watching TV.",
        words: ["They", "are", "watching", "TV."],
        distractors: ["is", "dad", "jump", "milk"]
      },
      {
        q: "I am cooking.",
        words: ["I", "am", "cooking"],
        distractors: ["are", "bird", "toys", "mom"]
      },
      {
        q: "Brother is drawing.",
        words: ["Brother", "is", "drawing"],
        distractors: ["are", "milk", "play", "toy"]
      },
      {
        q: "Sisters are dancing.",
        words: ["Sisters", "are", "dancing"],
        distractors: ["is", "car", "why", "jump"]
      },
      {
        q: "Mom is reading.",
        words: ["Mom", "is", "reading"],
        distractors: ["cat", "milk", "are", "they"]
      },
      {
        q: "Kids are sleeping.",
        words: ["Kids", "are", "sleeping"],
        distractors: ["I", "she", "toy", "dad"]
      },
      {
        q: "Dad is working.",
        words: ["Dad", "is", "working"],
        distractors: ["milk", "play", "are", "jump"]
      },
      {
        q: "Bird is singing.",
        words: ["Bird", "is", "singing"],
        distractors: ["mom", "why", "are", "sleep"]
      },
      {
        q: "We are running.",
        words: ["We", "are", "running"],
        distractors: ["am", "it", "milk", "sing"]
      },
      {
        q: "He is helping.",
        words: ["He", "is", "helping"],
        distractors: ["jump", "are", "banana", "mom"]
      },
      {
        q: "They are learning.",
        words: ["They", "are", "learning"],
        distractors: ["dad", "I", "milk", "why"]
      },
      {
        q: "I am drawing.",
        words: ["I", "am", "drawing"],
        distractors: ["are", "bird", "toy", "car"]
      }
    ]
  }
};

/*************************************************************
 * 2. Shuffle helper
 *************************************************************/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/*************************************************************
 * 3. Initialize Menu
 *************************************************************/
document.addEventListener("DOMContentLoaded", initMenu);

function initMenu() {
  const menuGrid = document.querySelector(".menu-grid");
  menuGrid.innerHTML = "";

  // Create a button for each lesson
  for (let key in lessons) {
    const lesson = lessons[key];
    const button = document.createElement("button");
    button.classList.add("menu-btn");
    button.innerHTML = `
      <div style="text-align:center;">
        <div style="font-weight:bold;">${lesson.emoji} ${lesson.title}</div>
      </div>
    `;
    button.setAttribute("data-lesson", key);
    button.setAttribute("aria-label", lesson.title);
    menuGrid.appendChild(button);
  }

  // Add click events
  document.querySelectorAll(".menu-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showLesson(btn.getAttribute("data-lesson"));
    });
  });
}

/*************************************************************
 * 4. Show a Lesson
 *************************************************************/
function showLesson(lessonKey) {
  const lesson = lessons[lessonKey];
  const welcomeSection = document.querySelector(".welcome");
  const lessonSection = document.querySelector(".lesson-section");

  welcomeSection.classList.remove("active");
  lessonSection.classList.add("active");
  lessonSection.style.display = "block";

  // Build exercises
  // We'll handle puzzle vs. multiple-choice vs. text in the mapping
  lessonSection.innerHTML = `
    <button class="back-btn">⬅️ Back</button>
    <h2>${lesson.title}</h2>
    ${lesson.explanation || ""}
    <div class="exercises">
      ${lesson.exercises
        .map((ex, idx) => {
          // Puzzle-based lessons
          const puzzleLessons = ["progressiveQuestion","negativeProgressive","affirmativeProgressive"];
          if (puzzleLessons.includes(lessonKey) && ex.words) {
            return buildPuzzleExercise(ex, idx);
          }

          // multiple-choice
          if (ex.o) {
            shuffleArray(ex.o);
            return `
              <div class="exercise-card" data-exercise-index="${idx}">
                <p>${ex.q}</p>
                <div class="options-grid">
                  ${ex.o
                    .map(opt => `<button class="option-btn" data-answer="${opt.toLowerCase()}">${opt}</button>`)
                    .join("")}
                </div>
                <div class="feedback" style="display:none;"></div>
              </div>
            `;
          }
          // text input
          if (ex.t === "text") {
            return `
              <div class="exercise-card" data-exercise-index="${idx}">
                <p>${ex.q}</p>
                <div class="options-grid">
                  <input type="text" class="text-input" placeholder="Type your answer">
                  <button class="submit-btn">Submit</button>
                </div>
                <div class="feedback" style="display:none;"></div>
              </div>
            `;
          }
          // fallback
          return `
            <div class="exercise-card" data-exercise-index="${idx}">
              <p>${ex.q}</p>
              <div class="feedback" style="display:none;"></div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;

  // Back button
  document.querySelector(".back-btn").addEventListener("click", () => {
    lessonSection.classList.remove("active");
    lessonSection.style.display = "none";
    welcomeSection.classList.add("active");
    hideTipPanel();
  });

  // Show tip panel for this lesson
  const tipHtml = lesson.lessonTip || "<p>No tips available.</p>";
  showTipPanel(tipHtml);

  // Attach listeners
  attachExerciseListeners(lessonKey);
}

/*************************************************************
 * 5. Build Puzzle for puzzle-based lessons
 *************************************************************/
function buildPuzzleExercise(ex, idx) {
  // combine words + distractors, randomize
  const allWords = [...ex.words, ...(ex.distractors || [])];
  shuffleArray(allWords);

  return `
    <div class="exercise-card" data-exercise-index="${idx}">
      <p>${ex.q}</p>
      <div class="word-puzzle">
        <div class="chosen-words"></div>
        <div class="available-words">
          ${allWords
            .map(w => `<button class="word-btn" data-word="${w}">${w}</button>`)
            .join("")}
        </div>
        <button class="submit-puzzle-btn">Submit</button>
        <div class="feedback" style="display:none;"></div>
      </div>
    </div>
  `;
}

/*************************************************************
 * 6. Attach listeners for multiple-choice, text, puzzle
 *************************************************************/
function attachExerciseListeners(lessonKey) {
  const lesson = lessons[lessonKey];
  const puzzleLessons = ["progressiveQuestion","negativeProgressive","affirmativeProgressive"];
  const lessonSection = document.querySelector(".lesson-section");

  // If it's puzzle-based, attach puzzle logic
  if (puzzleLessons.includes(lessonKey)) {
    attachPuzzleListeners(lesson);
  }

  // multiple-choice
  lessonSection.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const exData = lesson.exercises[exIndex];
      const correctAnswer = exData.a.trim().toLowerCase();
      const userAnswer = btn.dataset.answer.trim().toLowerCase();

      feedback.style.display = "block";
      if (userAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct! 🎉<br><span class="tip">${exData.tip || ""}</span>`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        // disable
        exerciseCard.querySelectorAll(".option-btn").forEach((b) => {
          b.disabled = true;
          b.style.opacity = "0.6";
        });
      } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer is: "${exData.a}".<br>
          <span class="tip">${exData.tip || ""}</span>
          <button class="try-again-btn">Try Again</button>`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        // try again
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          exerciseCard.querySelectorAll(".option-btn").forEach((b) => {
            b.disabled = false;
            b.style.opacity = "1";
          });
        });
      }
    });
  });

  // text input
  lessonSection.querySelectorAll(".submit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const exerciseCard = btn.closest(".exercise-card");
      const feedback = exerciseCard.querySelector(".feedback");
      const input = exerciseCard.querySelector(".text-input");
      const exIndex = parseInt(exerciseCard.getAttribute("data-exercise-index"));
      const exData = lesson.exercises[exIndex];
      const correctAnswer = exData.a.trim().toLowerCase();

      if (!input) return;
      feedback.style.display = "block";
      const userAnswer = input.value.trim().toLowerCase();

      if (!userAnswer) {
        feedback.innerHTML = "❗ Please type an answer.";
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        return;
      }

      if (userAnswer === correctAnswer) {
        feedback.innerHTML = `✅ Correct! 🎉<br><span class="tip">${exData.tip || ""}</span>`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        // disable input
        input.disabled = true;
        btn.disabled = true;
        input.style.opacity = "0.6";
        btn.style.opacity = "0.6";
      } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer is: "${exData.a}".<br>
          <span class="tip">${exData.tip || ""}</span>
          <button class="try-again-btn">Try Again</button>`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        // try again
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          input.disabled = false;
          btn.disabled = false;
          input.style.opacity = "1";
          btn.style.opacity = "1";
          input.value = "";
        });
      }
    });
  });
}

/*************************************************************
 * 7. Puzzle Listeners
 *************************************************************/
function attachPuzzleListeners(lesson) {
  document.querySelectorAll(".word-puzzle").forEach((puzzleDiv, idx) => {
    const chosenDiv = puzzleDiv.querySelector(".chosen-words");
    const availableDiv = puzzleDiv.querySelector(".available-words");
    const submitBtn = puzzleDiv.querySelector(".submit-puzzle-btn");
    const feedback = puzzleDiv.querySelector(".feedback");

    const correctWords = lesson.exercises[idx].words;

    // click on available => move to chosen
    availableDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("word-btn")) {
        const word = e.target.dataset.word;
        const chosenSpan = document.createElement("span");
        chosenSpan.classList.add("chosen-word");
        chosenSpan.style.margin = "0.5rem";
        chosenSpan.style.padding = "0.7rem 1rem";
        chosenSpan.style.background = "#eee";
        chosenSpan.style.borderRadius = "5px";
        chosenSpan.style.cursor = "pointer";
        chosenSpan.dataset.word = word;
        chosenSpan.textContent = word;
        chosenDiv.appendChild(chosenSpan);

        // hide original
        e.target.style.display = "none";
      }
    });

    // click on chosen => remove => re-show in available
    chosenDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("chosen-word")) {
        const word = e.target.dataset.word;
        const matchBtn = availableDiv.querySelector(`.word-btn[data-word="${word}"]`);
        if (matchBtn) matchBtn.style.display = "inline-block";
        e.target.remove();
      }
    });

    // Submit puzzle
    submitBtn.addEventListener("click", () => {
      feedback.style.display = "block";
      const chosenWordsArr = Array.from(chosenDiv.querySelectorAll(".chosen-word")).map(span => span.dataset.word);

      if (arraysEqual(chosenWordsArr, correctWords)) {
        feedback.innerHTML = `✅ Correct! Great job!`;
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        submitBtn.disabled = true;
      } else {
        feedback.innerHTML = `
          ❌ Incorrect!<br>
          The correct answer is: "${correctWords.join(" ")}".
          <br><button class="try-again-btn">Try Again</button>
        `;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        feedback.querySelector(".try-again-btn").addEventListener("click", () => {
          feedback.style.display = "none";
          feedback.innerHTML = "";
          chosenDiv.innerHTML = "";
          // re-show
          availableDiv.querySelectorAll(".word-btn").forEach(btn => {
            btn.style.display = "inline-block";
          });
        });
      }
    });
  });
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/*************************************************************
 * 8. Tip Panel (collapsible)
 *************************************************************/
const tipPanel = document.getElementById("tip-panel");
const tipToggleBar = document.getElementById("tip-toggle-bar");
const tipToggleText = document.getElementById("tip-toggle-text");
const tipContent = document.getElementById("tip-content");

/** 
 * Show the tip panel for the current lesson, 
 * starting in a closed state (only bar visible). 
 */
function showTipPanel(lessonTipHtml) {
  tipPanel.classList.remove("open", "closed");
  tipPanel.classList.add("closed");
  tipPanel.style.display = "block"; // ensure visible

  // Fill in the tip content
  tipContent.innerHTML = lessonTipHtml;

  tipToggleText.textContent = "Show Tip";
  tipToggleBar.addEventListener("click", toggleTipPanel);
}

/** Hide the tip panel entirely */
function hideTipPanel() {
  tipPanel.classList.remove("open", "closed");
  tipPanel.style.display = "none";
  tipToggleBar.removeEventListener("click", toggleTipPanel);
}

/** Toggle between open/closed states */
function toggleTipPanel() {
  if (tipPanel.classList.contains("closed")) {
    tipPanel.classList.remove("closed");
    tipPanel.classList.add("open");
    tipToggleText.textContent = "Hide Tip";
  } else {
    tipPanel.classList.remove("open");
    tipPanel.classList.add("closed");
    tipToggleText.textContent = "Show Tip";
  }
}
