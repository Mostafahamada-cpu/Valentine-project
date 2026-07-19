const fs = require('fs');

// --- 1. Generate 50 Love Letters ---
const salutations = ["My dearest,", "To my everything,", "My love,", "Darling,", "To the love of my life,", "My sweet angel,", "To my soulmate,", "My beautiful one,", "To my forever,", "My precious love,"];
const openings = [
    "Every time I think of you, my heart skips a beat.",
    "I was just sitting here thinking about how incredibly lucky I am to have you.",
    "Words can barely express the depth of my feelings for you.",
    "You are the first thing on my mind when I wake up and the last before I sleep.",
    "Finding you was the greatest surprise of my life.",
    "I look at you and still can't believe you are mine.",
    "You have brought so much light and joy into my world.",
    "There is a peace I feel when I am with you that I've never known before.",
    "I wanted to take a moment to tell you just how much you mean to me.",
    "Sometimes I catch myself smiling just because you crossed my mind."
];
const bodies1 = [
    "Your smile is my favorite sight in the whole world.",
    "The way you laugh makes all my worries fade away.",
    "I admire your strength, your kindness, and your beautiful heart.",
    "Every moment we share becomes a treasured memory.",
    "You understand me in ways no one else ever could.",
    "Your touch brings me comfort and your voice is my favorite sound.",
    "I love the way you see the world, and I love experiencing it with you.",
    "You inspire me to be a better person every single day.",
    "With you, the ordinary moments become extraordinary adventures.",
    "You are my safe haven, my confidant, and my greatest adventure."
];
const bodies2 = [
    "I promise to always stand by your side, through every storm and every sunshine.",
    "I can't wait to see what our future holds, as long as it's together.",
    "My love for you grows stronger with every passing second.",
    "I will always choose you, a hundred lifetimes over.",
    "Thank you for being you, and for loving me the way you do.",
    "I am endlessly fascinated by you and completely devoted to you.",
    "You are my home, no matter where we are in the world.",
    "I look forward to making a million more memories with you.",
    "Loving you is the easiest and most natural thing I have ever done.",
    "You are everything I never knew I was looking for."
];
const closings = ["Forever yours,", "With all my love,", "Eternally,", "Always and forever,", "With my whole heart,", "Yours truly,", "Endlessly yours,", "Love always,", "Yours forever,", "With deepest love,"];

const demoLetters = [];
for (let i = 0; i < 50; i++) {
    const s = salutations[Math.floor(Math.random() * salutations.length)];
    const o = openings[Math.floor(Math.random() * openings.length)];
    const b1 = bodies1[Math.floor(Math.random() * bodies1.length)];
    const b2 = bodies2[Math.floor(Math.random() * bodies2.length)];
    const c = closings[Math.floor(Math.random() * closings.length)];
    demoLetters.push(`${s}\n\n${o} ${b1} ${b2}\n\n${c}`);
}

// --- 2. Generate 100 Reasons I Love You ---
const reasonStarts = ["I love ", "I adore ", "I'm obsessed with ", "I cherish "];
const reasonMiddles = [
    "how you always know how to make me smile",
    "the way your eyes light up when you talk about your passions",
    "your incredible sense of humor",
    "the warmth of your hugs after a long day",
    "how supportive you are of my dreams",
    "the way you sing in the car",
    "your kindness towards strangers",
    "how you remember the little details about me",
    "the cute faces you make when you're concentrating",
    "how safe I feel when I'm in your arms",
    "your adventurous spirit",
    "the way you look at me across a crowded room",
    "how you can always calm my anxiety",
    "your beautiful mind",
    "the way you hold my hand",
    "how we can talk for hours about nothing",
    "your unwavering patience",
    "the sound of your laugh",
    "how you always steal the blankets but I don't mind",
    "the way you make coffee in the morning",
    "how you encourage me to step out of my comfort zone",
    "your gentle touch",
    "how we can be completely silly together",
    "the way you treat my friends and family",
    "how you make everyday tasks feel like fun dates"
];
const demoReasons = [];
let reasonIndex = 0;
while (demoReasons.length < 100) {
    for (let i = 0; i < reasonStarts.length && demoReasons.length < 100; i++) {
        for (let j = 0; j < reasonMiddles.length && demoReasons.length < 100; j++) {
            demoReasons.push(reasonStarts[i] + reasonMiddles[j]);
        }
    }
}
demoReasons.sort(() => Math.random() - 0.5);

// --- 3. Generate 50 Our Stories ---
const storyEvents = ["Our First Date", "When We Met", "The Beach Trip", "That Rainy Afternoon", "Our First Anniversary", "Meeting the Parents", "That Crazy Road Trip", "The Surprise Party", "Our Favorite Concert", "That Late Night Walk"];
const storyDetails = [
    "I was so nervous, but the moment I saw you, everything felt right.",
    "We ended up talking until the sun came up. I didn't want the night to end.",
    "It didn't go according to plan, but it was perfectly imperfect.",
    "I remember looking at you and realizing I was falling completely in love.",
    "We laughed so hard my stomach hurt. Best day ever.",
    "You held my hand and suddenly the whole world faded away.",
    "It was in that quiet moment I knew you were the one.",
    "Despite the chaos around us, all I could focus on was your smile.",
    "A memory I will cherish for the rest of my life.",
    "It was the beginning of our greatest adventure."
];
const icons = ["🌟", "🏖️", "🚗", "☕", "🎉", "✈️", "🎡", "🍕", "🎬", "🎵", "🌙", "❤️"];
const demoStories = [];
for (let i = 0; i < 50; i++) {
    const year = 2018 + Math.floor(Math.random() * 6);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[Math.floor(Math.random() * months.length)];
    const day = Math.floor(Math.random() * 28) + 1;
    
    const event = storyEvents[Math.floor(Math.random() * storyEvents.length)];
    const detail = storyDetails[Math.floor(Math.random() * storyDetails.length)];
    
    demoStories.push({
        icon: icons[Math.floor(Math.random() * icons.length)],
        date: `${month} ${day}, ${year}`,
        text: `${event}: ${detail}`
    });
}

// --- 4. Generate 100 Quizzes ---
const quizTemplates = [
    { q: "Where did we first meet?", opts: ["At a coffee shop", "Through friends", "At work/school", "Online"], correct: 1 },
    { q: "What is my favorite flower?", opts: ["Roses", "Sunflowers", "Tulips", "Peonies"], correct: 0 },
    { q: "Which song reminds me of you the most?", opts: ["Perfect by Ed Sheeran", "All of Me by John Legend", "Just the Way You Are", "A Thousand Years"], correct: 3 },
    { q: "What is my go-to comfort food?", opts: ["Pizza", "Ice Cream", "Pasta", "Burgers"], correct: 2 },
    { q: "Where was our first vacation together?", opts: ["The Beach", "The Mountains", "A New City", "A Cabin in the Woods"], correct: 0 },
    { q: "What's my biggest pet peeve?", opts: ["Loud chewing", "Being late", "Bad drivers", "Clutter"], correct: 1 },
    { q: "Who said 'I love you' first?", opts: ["I did", "You did", "We said it at the same time", "Still waiting!"], correct: 0 },
    { q: "What is my dream travel destination?", opts: ["Paris", "Tokyo", "Maldives", "New York"], correct: 2 },
    { q: "What movie can I watch over and over?", opts: ["The Notebook", "Pride and Prejudice", "A Walk to Remember", "About Time"], correct: 1 },
    { q: "What do I love most about you?", opts: ["Your smile", "Your sense of humor", "Your kindness", "Everything!"], correct: 3 }
];
const demoQuizzes = [];
while (demoQuizzes.length < 100) {
    quizTemplates.forEach(template => {
        if(demoQuizzes.length < 100) {
            const options = [...template.opts];
            const correctText = options[template.correct];
            options.sort(() => Math.random() - 0.5);
            const newCorrectIndex = options.indexOf(correctText);
            
            demoQuizzes.push({
                question: template.q,
                options: options,
                correctIndex: newCorrectIndex + 1
            });
        }
    });
}

// --- 5. Generate 100 Songs ---
const songTitles = ["Perfect", "All of Me", "Thinking Out Loud", "A Thousand Years", "Just the Way You Are", "Make You Feel My Love", "Can't Help Falling in Love", "At Last", "You Are the Reason", "Shallow"];
const songArtists = ["Ed Sheeran", "John Legend", "Ed Sheeran", "Christina Perri", "Bruno Mars", "Adele", "Elvis Presley", "Etta James", "Calum Scott", "Lady Gaga & Bradley Cooper"];
const demoSongs = [];
for (let i = 0; i < 100; i++) {
    const idx = i % songTitles.length;
    demoSongs.push({
        title: songTitles[idx] + (i >= songTitles.length ? ` (Remix ${i})` : ''),
        artist: songArtists[idx],
        url: "https://open.spotify.com/track/1234567890" 
    });
}
demoSongs.sort(() => Math.random() - 0.5);

// Write to file
const output = \`
// Auto-generated Demo Data
const DEMO_LETTERS = \${JSON.stringify(demoLetters, null, 2)};
const DEMO_REASONS = \${JSON.stringify(demoReasons, null, 2)};
const DEMO_STORIES = \${JSON.stringify(demoStories, null, 2)};
const DEMO_QUIZZES = \${JSON.stringify(demoQuizzes, null, 2)};
const DEMO_SONGS = \${JSON.stringify(demoSongs, null, 2)};
\`;

fs.writeFileSync('C:/Users/hamad/.gemini/antigravity/scratch/Memora/Love card/demo-data.js', output);
console.log('Demo data generated successfully!');
