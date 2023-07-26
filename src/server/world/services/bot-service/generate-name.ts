const adjectives = [
	// base words
	"Funky",
	"Funny",
	// taken mostly from https://gist.github.com/hugsy/8910dc78d208e40de42deb29e62df913
	"Adventurous",
	"Accurate",
	"Admirable",
	"Advanced",
	"Agile",
	"Amazing",
	"Ancient",
	"Angry",
	"Anxious",
	"Athletic",
	"Average",
	"Awful",
	"Awkward",
	"Basic",
	"Beautiful",
	"Beneficial",
	"Big",
	"Blissful",
	"Boring",
	"Brave",
	"Brilliant",
	"Calm",
	"Caring",
	"Charming",
	"Colossal",
	"Crazy",
	"Cute",
	"Dapper",
	"Defiant",
	"Determined",
	"Dry",
	"Eager",
	"Elegant",
	"Embarassed",
	"Enchanted",
	"Energetic",
	"Enlightened",
	"Enormous",
	"Evil",
	"Exotic",
	"Fabulous",
	"Faithful",
	"Famous",
	"Fancy",
	"Fantastic",
	"Fearless",
	"Flashy",
	"Flawless",
	"Fuzzy",
	"Genuine",
	"Giant",
	"Gigantic",
	"Glorious",
	"Golden",
	"Graceful",
	"Happy",
	"Hasty",
	"Healthy",
	"Heavenly",
	"Honest",
	"Honorable",
	"Huge",
	"Illustrious",
	"Impeccable",
	"Impressive",
	"Incredible",
	"Infamous",
	"Innocent",
	"Intelligent",
	"Interesting",
	"Joyful",
	"Kind",
	"Lovable",
	"Loyal",
	"Luminous",
	"Lustrous",
	"Luxurious",
	"Magnificent",
	"Majestic",
	"Marvelous",
	"Massive",
	"Mysterious",
	"Nautical",
	"Nervous",
	"Noisy",
	"Opulent",
	"Outstanding",
	"Passionate",
	"Peaceful",
	"Pleasant",
	"Powerful",
	"Prestigious",
	"Precious",
	"Proud",
	"Pure",
	"Quick",
	"Quiet",
	"Quintessential",
	"Radiant",
	"Rapid",
	"Rare",
	"Regal",
	"Remarkable",
	"Respectful",
	"Rich",
	"Royal",
	"Scientific",
	"Serene",
	"Serious",
	"Serpentine",
	"Sharp",
	"Shimmering",
	"Shiny",
	"Shocked",
	"Shocking",
	"Shy",
	"Silent",
	"Silky",
	"Silly",
	"Silver",
	"Simple",
	"Sleepy",
	"Small",
	"Smart",
	"Sneaky",
	"Sophisticated",
	"Sparkling",
	"Speedy",
	"Spicy",
	"Striking",
	"Strong",
	"Studious",
	"Stunning",
	"Stupendous",
	"Sunny",
	"Super",
	"Superb",
	"Superior",
	"Surprised",
	"Suspicious",
	"Swift",
	"Terrific",
	"Thunderous",
	"Tremendous",
	"True",
	"Ultimate",
	"Uncommon",
	"Unique",
	"Unknown",
	"Unrivaled",
	"Upbeat",
	"Useful",
	"Valuable",
	"Vast",
	"Venerated",
	"Vibrant",
	"Vicious",
	"Victorious",
	"Vigilant",
	"Vigorous",
	"Vital",
	"Vivid",
	"Warm",
	"Wary",
	"Watchful",
	"Weary",
	"Wild",
	"Wise",
	"Witty",
	"Zealous",
];

const nouns = [
	// base words
	"Rhythm",
	"Viper",
	"Cobra",
	"Python",
	"Snake",
	// taken from https://gist.github.com/atduskgreg/3cf8ef48cb0d29cf151bedad81553a54
	// some subspecies removed, etc.
	"Alligator",
	"Ant",
	"Anteater",
	"Antelope",
	"Armadillo",
	"Baboon",
	"Badger",
	"Bat",
	"Beagle",
	"Bear",
	"Beaver",
	"Bee",
	"Beetle",
	"Bird",
	"Bison",
	"Boar",
	"Bobcat",
	"Buffalo",
	"Bullfrog",
	"Butterfly",
	"Camel",
	"Capybara",
	"Cat",
	"Caterpillar",
	"Catfish",
	"Centipede",
	"Chameleon",
	"Cheetah",
	"Chicken",
	"Chimpanzee",
	"Chinchilla",
	"Chipmunk",
	"Cockroach",
	"Cougar",
	"Cow",
	"Coyote",
	"Crab",
	"Crane",
	"Cuttlefish",
	"Deer",
	"Dingo",
	"Dodo",
	"Dog",
	"Dolphin",
	"Donkey",
	"Dragon",
	"Dragonfly",
	"Drever",
	"Duck",
	"Eagle",
	"Eel",
	"Elephant",
	"Emu",
	"Falcon",
	"Ferret",
	"Fish",
	"Flamingo",
	"Fox",
	"Frog",
	"Gecko",
	"Gerbil",
	"Giraffe",
	"Goat",
	"Goose",
	"Gopher",
	"Gorilla",
	"Grasshopper",
	"Hamster",
	"Hedgehog",
	"Hippopotamus",
	"Horse",
	"Hummingbird",
	"Hyena",
	"Iguana",
	"Jackal",
	"Jaguar",
	"Jellyfish",
	"Kangaroo",
	"Koala",
	"Lemur",
	"Leopard",
	"Lion",
	"Lizard",
	"Llama",
	"Lobster",
	"Lynx",
	"Macaw",
	"Mammoth",
	"Meerkat",
	"Millipede",
	"Mole",
	"Mongoose",
	"Monkey",
	"Moose",
	"Moth",
	"Mouse",
	"Mule",
	"Newt",
	"Ocelot",
	"Octopus",
	"Opossum",
	"Orangutan",
	"Ostrich",
	"Otter",
	"Owl",
	"Oyster",
	"Panther",
	"Parrot",
	"Peacock",
	"Pelican",
	"Penguin",
	"Pig",
	"Piranha",
	"Porcupine",
	"Possum",
	"Prawn",
	"Puffin",
	"Puma",
	"Rabbit",
	"Raccoon",
	"Rat",
	"Rattlesnake",
	"Reindeer",
	"Rhinoceros",
	"Robin",
	"Salamander",
	"Scorpion",
	"Seahorse",
	"Seal",
	"Shark",
	"Sheep",
	"Shrimp",
	"Skunk",
	"Sloth",
	"Snail",
	"Sparrow",
	"Sponge",
	"Squid",
	"Squirrel",
	"Stingray",
	"Swan",
	"Tarantula",
	"Termite",
	"Tiger",
	"Toad",
	"Tortoise",
	"Toucan",
	"Turkey",
	"Turtle",
	"Vulture",
	"Walrus",
	"Warthog",
	"Wasp",
	"Weasel",
	"Whale",
	"Wolf",
	"Woodpecker",
	"Yak",
	"Zebra",
];

export function generateBotName() {
	const adjective = adjectives[math.random(0, adjectives.size() - 1)];
	const noun = nouns[math.random(0, nouns.size() - 1)];

	return `${adjective} ${noun}`;
}
