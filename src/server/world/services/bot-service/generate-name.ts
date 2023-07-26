const adjectives = [
	// base words
	"Funky",
	"Funny",
	// taken from https://gist.github.com/hugsy/8910dc78d208e40de42deb29e62df913
	// modified/shortened with a python script
	"Adventurous",
	"Accurate",
	"Admirable",
	"Adored",
	"Advanced",
	"Agile",
	"Agreeable",
	"Amazing",
	"Ancient",
	"Angry",
	"Anxious",
	"Arid",
	"Athletic",
	"Attached",
	"Automatic",
	"Average",
	"Awful",
	"Awkward",
	"Beautiful",
	"Beneficial",
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