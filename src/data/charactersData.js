import hermione from "../assets/hermoine.jpg";
import dumbledore from "../assets/dumbledore.jpg";
import lily from "../assets/lily.jpg";
import molly from "../assets/molly.jpeg";
import narcissa from "../assets/narcissa.jpeg";
import sirius from "../assets/sirius.jpeg";

const HOGWARTS_HALL =
    "https://image.tmdb.org/t/p/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg";

export { HOGWARTS_HALL };

const charactersData = {
    "Harry Potter": {
        quote: '"The Boy Who Lived"',
        biography: `Harry James Potter is the son of James and Lily Potter. Orphaned as an infant when Lord Voldemort murdered his parents, he was placed with his Muggle relatives the Dursleys. On his eleventh birthday he discovered he was a wizard and enrolled at Hogwarts School of Witchcraft and Wizardry.\n\nThroughout his years at Hogwarts, Harry faced Voldemort and his Death Eaters countless times. His courage, loyalty, and willingness to sacrifice himself ultimately led to Voldemort's defeat in the Battle of Hogwarts in 1998.`,
        wand: "Holly, Phoenix feather, 11 inches",
        patronus: "Stag",
        boggart: "Lord Voldemort / Dementor",
        spells: [
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "The Disarming Charm — Harry's signature spell used to defeat Voldemort." },
            { name: "Expecto Patronum", icon: "auto_awesome", desc: "Conjures a stag Patronus to repel Dementors." },
            { name: "Stupefy", icon: "flash_on", desc: "The Stunning Spell, used extensively throughout duels." },
            { name: "Sectumsempra", icon: "cut", desc: "A dark spell learned from the Half-Blood Prince's textbook." },
        ],
        timeline: [
            { event: "Philosopher's Stone (1991)", desc: "Discovers he is a wizard and defeats Quirrell/Voldemort." },
            { event: "Triwizard Tournament (1994)", desc: "Competes in the deadly tournament and witnesses Voldemort's return." },
            { event: "Battle of Hogwarts (1998)", desc: "Sacrifices himself and ultimately defeats Lord Voldemort." },
        ],
        artefacts: ["The Invisibility Cloak", "Marauder's Map", "Elder Wand (briefly)", "Resurrection Stone"],
        relationships: [
            { role: "Best Friend", name: "Ron Weasley", img: "https://ik.imagekit.io/hpapi/ron.jpg" },
            { role: "Best Friend", name: "Hermione Granger", img: hermione },
            { role: "Mentor", name: "Albus Dumbledore", img: dumbledore },
            { role: "Wife", name: "Ginny Weasley", img: "https://ik.imagekit.io/hpapi/ginny.jpg" },
        ],
    },

    "Hermione Granger": {
        quote: '"The Brightest Witch of Her Age"',
        biography: `Born to Muggle parents, Hermione Jean Granger discovered her magical abilities and was accepted into Hogwarts School of Witchcraft and Wizardry. From her first year, she proved to be an exceptionally gifted student, often mastering spells well ahead of her peers.\n\nHer logic and immense knowledge were pivotal in the defeat of Lord Voldemort. Alongside Harry Potter and Ron Weasley, she navigated the complexities of the wizarding world with courage and an unwavering commitment to justice, notably founding S.P.E.W. to advocate for house-elf rights.`,
        wand: "Vine wood, Dragon heartstring",
        patronus: "Otter",
        boggart: "Professor McGonagall (Failure)",
        spells: [
            { name: "Expecto Patronum", icon: "auto_awesome", desc: "Conjures a silver otter Patronus to repel Dementors." },
            { name: "Wingardium Leviosa", icon: "air", desc: 'The Levitation Charm. She mastered the "swish and flick" in her first year.' },
            { name: "Alohomora", icon: "key", desc: "The Unlocking Charm, used to open locked doors and windows." },
            { name: "Bluebell Flames", icon: "flare", desc: "A specialized fire charm producing waterproof, portable blue flames." },
        ],
        timeline: [
            { event: "Philosopher's Stone (1991)", desc: "Starts her journey at Hogwarts, masters Wingardium Leviosa." },
            { event: "Prisoner of Azkaban (1993)", desc: "Uses the Time-Turner to save Sirius Black and Buckbeak." },
            { event: "Deathly Hallows (1997-1998)", desc: "Destroys Hufflepuff's Cup with a basilisk fang." },
        ],
        artefacts: ["The Time-Turner", "Tales of Beedle the Bard", "Beaded Bag (Undetectable Extension Charm)"],
        relationships: [
            { role: "Best Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Husband", name: "Ron Weasley", img: "https://ik.imagekit.io/hpapi/ron.jpg" },
            { role: "Mentor", name: "Minerva McGonagall", img: "https://ik.imagekit.io/hpapi/mcgonagall.jpg" },
            { role: "Friend", name: "Luna Lovegood", img: "https://ik.imagekit.io/hpapi/luna.jpg" },
        ],
    },

    "Ron Weasley": {
        quote: '"The Loyal Heart of the Trio"',
        biography: `Ronald Bilius Weasley is the sixth child of Arthur and Molly Weasley. Growing up in a large wizarding family, Ron learned to be resourceful despite limited means. His friendship with Harry Potter and Hermione Granger defined his Hogwarts years.\n\nThough often overshadowed by his famous friend, Ron's loyalty, humor, and bravery proved crucial in the hunt for Horcruxes and the final battle against Voldemort.`,
        wand: "Willow, Unicorn hair, 14 inches",
        patronus: "Jack Russell Terrier",
        boggart: "Aragog (Giant Spider)",
        spells: [
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "The Disarming Charm, one of Ron's go-to defensive spells." },
            { name: "Riddikulus", icon: "sentiment_very_satisfied", desc: "Used against Boggarts to make them comical." },
            { name: "Accio", icon: "send", desc: "The Summoning Charm, used to call objects from a distance." },
            { name: "Wingardium Leviosa", icon: "air", desc: "The Levitation Charm learned in first year." },
        ],
        timeline: [
            { event: "Philosopher's Stone (1991)", desc: "Befriends Harry on the Hogwarts Express, helps defeat Quirrell." },
            { event: "Chamber of Secrets (1992)", desc: "Accompanies Harry into the Chamber despite his fear of spiders." },
            { event: "Battle of Hogwarts (1998)", desc: "Fights alongside Harry and Hermione in the final battle." },
        ],
        artefacts: ["Deluminator", "Wizard Chess Set", "Scabbers (rat)"],
        relationships: [
            { role: "Best Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Wife", name: "Hermione Granger", img: hermione },
            { role: "Sister", name: "Ginny Weasley", img: "https://ik.imagekit.io/hpapi/ginny.jpg" },
            { role: "Mother", name: "Molly Weasley", img: molly },
        ],
    },

    "Albus Dumbledore": {
        quote: '"The Greatest Sorcerer in the World"',
        biography: `Albus Percival Wulfric Brian Dumbledore was widely considered the greatest wizard of his age. As Headmaster of Hogwarts, he guided countless students and served as a beacon of hope against dark forces.\n\nHis complex past, including his relationship with Gellert Grindelwald, shaped his philosophy about love being the greatest magic of all. He orchestrated the defeat of Voldemort from beyond the grave through Harry Potter.`,
        wand: "Elder Wand (The Deathstick)",
        patronus: "Phoenix",
        boggart: "The corpse of his sister Ariana",
        spells: [
            { name: "Lumos Maxima", icon: "light_mode", desc: "An extremely powerful light charm to illuminate large areas." },
            { name: "Firestorm", icon: "local_fire_department", desc: "Creates a massive ring of fire to hold back dark creatures." },
            { name: "Prior Incantato", icon: "history", desc: "Forces a wand to reveal its last spell cast." },
            { name: "Apparition", icon: "blur_circular", desc: "Teleportation magic mastered at the highest level." },
        ],
        timeline: [
            { event: "Defeat of Grindelwald (1945)", desc: "Defeats the dark wizard Grindelwald in a legendary duel." },
            { event: "Founding the Order (1970s)", desc: "Creates the Order of the Phoenix to fight Voldemort." },
            { event: "The Horcrux Quest (1996)", desc: "Works with Harry to find and destroy Voldemort's Horcruxes." },
        ],
        artefacts: ["Elder Wand", "Resurrection Stone Ring", "Pensieve"],
        relationships: [
            { role: "Student", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Colleague", name: "Minerva McGonagall", img: "https://ik.imagekit.io/hpapi/mcgonagall.jpg" },
            { role: "Spy", name: "Severus Snape", img: "https://ik.imagekit.io/hpapi/snape.jpg" },
            { role: "Enemy", name: "Lord Voldemort", img: "https://ik.imagekit.io/hpapi/voldemort.jpg" },
        ],
    },

    "Severus Snape": {
        quote: '"Always."',
        biography: `Severus Snape was a complex and deeply misunderstood figure in the Wizarding World. A Half-blood Prince, he was a master of Potions and the Dark Arts, serving as a double agent for Dumbledore against Voldemort.\n\nHis lifelong love for Lily Potter drove every sacrifice he made. Despite appearing villainous, Snape's true loyalty was revealed posthumously — his entire life was dedicated to protecting Harry Potter for Lily's sake.`,
        wand: "Unknown wood, Unknown core",
        patronus: "Doe (for Lily Potter)",
        boggart: "Unknown",
        spells: [
            { name: "Sectumsempra", icon: "cut", desc: "Snape's own invented spell that causes deep lacerations." },
            { name: "Legilimens", icon: "psychology", desc: "Allows the caster to extract thoughts and memories." },
            { name: "Occlumency", icon: "lock", desc: "The art of closing one's mind against Legilimency." },
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "The Disarming Charm — Snape's signature defensive spell." },
        ],
        timeline: [
            { event: "Joins Death Eaters (1970s)", desc: "Falls in with Voldemort's followers before switching sides." },
            { event: "Becomes Double Agent", desc: "Works for Dumbledore while maintaining Voldemort's trust." },
            { event: "Battle of Hogwarts (1998)", desc: "Killed by Nagini; reveals his true loyalty to Lily Potter." },
        ],
        artefacts: ["Half-Blood Prince's Textbook", "Veritaserum", "Wolfsbane Potion"],
        relationships: [
            { role: "Love of His Life", name: "Lily Potter", img: lily },
            { role: "Mentor", name: "Albus Dumbledore", img: dumbledore },
            { role: "Student", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Student", name: "Draco Malfoy", img: "https://ik.imagekit.io/hpapi/draco.jpg" },
        ],
    },

    "Draco Malfoy": {
        quote: '"My father will hear about this."',
        biography: `Draco Lucius Malfoy was born into one of the most prestigious pure-blood wizarding families. Raised with a sense of entitlement and blood supremacy, he became Harry Potter's chief rival at Hogwarts and was sorted into Slytherin.\n\nDespite his early arrogance and cruelty, Draco showed genuine reluctance when ordered by Voldemort to commit murder. His experience during the Second Wizarding War ultimately softened him, and he later raised his son Scorpius with different values.`,
        wand: "Hawthorn, Unicorn hair, 10 inches",
        patronus: "Unknown",
        boggart: "Lord Voldemort",
        spells: [
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "The Disarming Charm, used in the Astronomy Tower confrontation." },
            { name: "Crucio", icon: "warning", desc: "An Unforgivable Curse attempted under pressure from Voldemort." },
            { name: "Serpensortia", icon: "pest_control", desc: "Conjures a snake from the tip of the wand." },
            { name: "Occlumency", icon: "lock", desc: "Mind-closing magic learned to hide thoughts from Voldemort." },
        ],
        timeline: [
            { event: "First Year (1991)", desc: "Becomes Harry's rival; joins Slytherin house." },
            { event: "Marked as Death Eater (1996)", desc: "Receives the Dark Mark and is tasked with killing Dumbledore." },
            { event: "Post-War (1998+)", desc: "Reforms and raises his son Scorpius with better values." },
        ],
        artefacts: ["Vanishing Cabinet", "Dark Mark (branded)", "Elder Wand (briefly)"],
        relationships: [
            { role: "Father", name: "Lucius Malfoy", img: "https://ik.imagekit.io/hpapi/lucius.jpg" },
            { role: "Mother", name: "Narcissa Malfoy", img: narcissa },
            { role: "Rival", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Head of House", name: "Severus Snape", img: "https://ik.imagekit.io/hpapi/snape.jpg" },
        ],
    },

    "Luna Lovegood": {
        quote: '"Things we lose have a way of coming back to us in the end."',
        biography: `Luna Scamander (née Lovegood) was a Ravenclaw student known for her dreamy, eccentric nature and unwavering belief in magical creatures others dismissed. Daughter of Xenophilius Lovegood, she grew up believing in Nargles and Wrackspurts.\n\nDespite being considered odd by many peers, Luna's fierce loyalty and courage made her an invaluable member of Dumbledore's Army. Her ability to see Thestrals reflected her early experience of witnessing her mother's death.`,
        wand: "Unknown wood and core",
        patronus: "Hare",
        boggart: "Unknown",
        spells: [
            { name: "Stupefy", icon: "flash_on", desc: "The Stunning Spell used effectively in the Battle of the Department of Mysteries." },
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "Disarming Charm used during Dumbledore's Army training." },
            { name: "Reducto", icon: "remove_circle", desc: "The Reductor Curse used to blast solid objects apart." },
            { name: "Legilimens", icon: "psychology", desc: "Luna showed remarkable ability in perception and intuition." },
        ],
        timeline: [
            { event: "Joins DA (1995)", desc: "Becomes a member of Dumbledore's Army, proves her combat worth." },
            { event: "Ministry Battle (1996)", desc: "Fights alongside Harry in the Department of Mysteries." },
            { event: "Battle of Hogwarts (1998)", desc: "Fights bravely in the final battle for Hogwarts." },
        ],
        artefacts: ["Spectrespecs", "The Quibbler magazine", "Dirigible Plum earrings"],
        relationships: [
            { role: "Father", name: "Xenophilius Lovegood", img: "https://ik.imagekit.io/hpapi/xenophilius.jpg" },
            { role: "Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Friend", name: "Hermione Granger", img: "https://ik.imagekit.io/hpapi/hermione.jpg" },
            { role: "Friend", name: "Ginny Weasley", img: "https://ik.imagekit.io/hpapi/ginny.jpg" },
        ],
    },

    "Neville Longbottom": {
        quote: '"Why is it always me?"',
        biography: `Neville Frank Longbottom was the only child of Frank and Alice Longbottom, both Aurors who were tortured to insanity by Bellatrix Lestrange. Raised by his stern grandmother, Neville started Hogwarts lacking confidence but harboring immense inner strength.\n\nHis transformation from a timid, forgetful student to a fierce warrior was one of the most profound character arcs in the saga. He ultimately destroyed the final Horcrux — Nagini — with Godric Gryffindor's sword.`,
        wand: "Cherry, Unicorn hair (originally his father's)",
        patronus: "Non-corporeal",
        boggart: "Professor Snape",
        spells: [
            { name: "Herbivicus", icon: "grass", desc: "A charm that causes plants to rapidly bloom and grow." },
            { name: "Stupefy", icon: "flash_on", desc: "Stunning Spell used extensively in the Battle of Hogwarts." },
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "Disarming Charm mastered through Dumbledore's Army training." },
            { name: "Avada Kedavra", icon: "warning", desc: "Faced the killing curse and survived through sheer bravery." },
        ],
        timeline: [
            { event: "First Year (1991)", desc: "Earns Gryffindor the House Cup by standing up to his friends." },
            { event: "Joins DA (1995)", desc: "Blossoms under Harry's teaching and finds his courage." },
            { event: "Battle of Hogwarts (1998)", desc: "Destroys Nagini with the Sword of Gryffindor." },
        ],
        artefacts: ["Sword of Gryffindor", "Mimbulus Mimbletonia plant", "Remembrall"],
        relationships: [
            { role: "Grandmother", name: "Augusta Longbottom", img: "https://ik.imagekit.io/hpapi/neville.jpg" },
            { role: "Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Friend", name: "Hermione Granger", img: "https://ik.imagekit.io/hpapi/hermione.jpg" },
            { role: "Friend", name: "Luna Lovegood", img: "https://ik.imagekit.io/hpapi/luna.jpg" },
        ],
    },

    "Ginny Weasley": {
        quote: '"The thing about growing up with Fred and George is that you sort of start thinking anything is possible."',
        biography: `Ginevra Molly Weasley is the youngest child and only daughter of Arthur and Molly Weasley. In her first year at Hogwarts she was possessed by Tom Riddle's diary Horcrux, an experience that gave her unique insight into Voldemort's mind.\n\nGinny grew into one of the most talented witches of her generation, an excellent Quidditch player and a fierce warrior. She married Harry Potter after the war and became a celebrated Quidditch player for the Holyhead Harpies.`,
        wand: "Yew, Unknown core",
        patronus: "Horse",
        boggart: "Unknown",
        spells: [
            { name: "Bat-Bogey Hex", icon: "pest_control", desc: "Ginny's signature hex, notorious for its effectiveness." },
            { name: "Reductor Curse", icon: "remove_circle", desc: "A powerful curse used in the Department of Mysteries battle." },
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "Disarming Charm used in various battles." },
            { name: "Stupefy", icon: "flash_on", desc: "The Stunning Spell used in the Battle of Hogwarts." },
        ],
        timeline: [
            { event: "First Year (1992)", desc: "Possessed by Tom Riddle's diary; saved by Harry in the Chamber." },
            { event: "Joins DA (1995)", desc: "Becomes a skilled member of Dumbledore's Army." },
            { event: "Battle of Hogwarts (1998)", desc: "Fights alongside her family in the final battle." },
        ],
        artefacts: ["Tom Riddle's Diary (destroyed)", "Quidditch broomstick"],
        relationships: [
            { role: "Husband", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Brother", name: "Ron Weasley", img: "https://ik.imagekit.io/hpapi/ron.jpg" },
            { role: "Mother", name: "Molly Weasley", img: molly },
            { role: "Friend", name: "Hermione Granger", img: hermione },
        ],
    },

    "Sirius Black": {
        quote: '"We\'ve all got both light and dark inside us."',
        biography: `Sirius Black was the last heir of the House of Black, a pure-blood wizarding family. Despite his family's dark leanings, he was sorted into Gryffindor and became best friends with James Potter, Remus Lupin, and Peter Pettigrew — the Marauders.\n\nFalsely imprisoned in Azkaban for twelve years for the betrayal of James and Lily Potter (a crime committed by Pettigrew), Sirius escaped and worked to protect his godson Harry Potter until his tragic death at the Department of Mysteries.`,
        wand: "Unknown wood and core",
        patronus: "Large dog (Grim)",
        boggart: "Lord Voldemort",
        spells: [
            { name: "Animagus Transformation", icon: "pets", desc: "Can transform into a large black dog at will." },
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "Disarming Charm used in various confrontations." },
            { name: "Stupefy", icon: "flash_on", desc: "Stunning spell used in the Department of Mysteries battle." },
            { name: "Reducto", icon: "remove_circle", desc: "The Reductor Curse used in combat." },
        ],
        timeline: [
            { event: "The Marauders Era (1971-1978)", desc: "Forms the Marauders with James, Lupin, and Pettigrew." },
            { event: "Azkaban (1981-1993)", desc: "Wrongfully imprisoned for twelve years for Pettigrew's crime." },
            { event: "Death (1996)", desc: "Falls through the Veil in the Department of Mysteries battle." },
        ],
        artefacts: ["Motorcycle (enchanted)", "Two-way mirror", "12 Grimmauld Place"],
        relationships: [
            { role: "Godson", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Best Friend", name: "James Potter", img: "https://ik.imagekit.io/hpapi/james-potter.jpg" },
            { role: "Friend", name: "Remus Lupin", img: "https://ik.imagekit.io/hpapi/lupin.jpg" },
            { role: "Enemy", name: "Bellatrix Lestrange", img: "https://ik.imagekit.io/hpapi/bellatrix.jpg" },
        ],
    },

    "Remus Lupin": {
        quote: '"It is the quality of one\'s convictions that determines success, not the number of followers."',
        biography: `Remus John Lupin was one of the Marauders and a Defence Against the Dark Arts professor at Hogwarts. Bitten by werewolf Fenrir Greyback as a child, he struggled with his lycanthropy throughout his life, often feeling like an outcast.\n\nDespite the hardships his condition imposed, Lupin became one of the most beloved and skilled Defence professors Hogwarts ever had. He fought bravely in both Wizarding Wars and died alongside his wife Tonks in the Battle of Hogwarts.`,
        wand: "Cypress, Unicorn hair, 10 ¼ inches",
        patronus: "Wolf",
        boggart: "Full Moon / Voldemort",
        spells: [
            { name: "Riddikulus", icon: "sentiment_very_satisfied", desc: "Used against Boggarts; first spell taught to Harry's class." },
            { name: "Expecto Patronum", icon: "auto_awesome", desc: "Teaches Harry to conjure a Patronus against Dementors." },
            { name: "Stupefy", icon: "flash_on", desc: "Stunning Spell used in Order of the Phoenix missions." },
            { name: "Wolfsbane Potion", icon: "science", desc: "Not a spell but a potion that controls his werewolf transformations." },
        ],
        timeline: [
            { event: "The Marauders Era (1971-1978)", desc: "Forms lifelong bonds with James, Sirius, and Pettigrew." },
            { event: "DADA Professor (1993)", desc: "Teaches at Hogwarts and becomes a beloved mentor to Harry." },
            { event: "Battle of Hogwarts (1998)", desc: "Dies alongside Tonks fighting for the wizarding world." },
        ],
        artefacts: ["Marauder's Map (co-creator)", "Wolfsbane Potion supply"],
        relationships: [
            { role: "Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Best Friend", name: "Sirius Black", img: "https://ik.imagekit.io/hpapi/sirius.jpg" },
            { role: "Wife", name: "Nymphadora Tonks", img: "https://ik.imagekit.io/hpapi/tonks.jpg" },
            { role: "Enemy", name: "Fenrir Greyback", img: "https://ik.imagekit.io/hpapi/greyback.jpg" },
        ],
    },

    "Lord Voldemort": {
        quote: '"There is no good and evil. There is only power, and those too weak to seek it."',
        biography: `Tom Marvolo Riddle, known as Lord Voldemort, was the most powerful dark wizard of all time. Born of a Muggle father and a witch mother who died in childbirth, he grew up in a Muggle orphanage before discovering his magical heritage at Hogwarts.\n\nObsessed with immortality and pure-blood supremacy, he split his soul into seven Horcruxes. After being vanquished by the infant Harry Potter in 1981, he spent years as a wraith before regaining his body. His final defeat came at the Battle of Hogwarts in 1998.`,
        wand: "Yew, Phoenix feather, 13.5 inches",
        patronus: "None (incapable of love)",
        boggart: "His own death",
        spells: [
            { name: "Avada Kedavra", icon: "warning", desc: "The Killing Curse — one of the three Unforgivable Curses." },
            { name: "Crucio", icon: "crisis_alert", desc: "The Cruciatus Curse, inflicting unbearable pain on victims." },
            { name: "Nagini Control", icon: "pest_control", desc: "Speaks Parseltongue and controls his snake Nagini telepathically." },
            { name: "Horcrux Creation", icon: "broken_image", desc: "Split his soul into seven pieces to achieve immortality." },
        ],
        timeline: [
            { event: "Hogwarts Years (1938-1945)", desc: "Opens the Chamber of Secrets and frames Hagrid." },
            { event: "First Defeat (1981)", desc: "Killing curse rebounds off baby Harry; reduced to a wraith." },
            { event: "Final Defeat (1998)", desc: "Destroyed by his own rebounding curse in the Battle of Hogwarts." },
        ],
        artefacts: ["Tom Riddle's Diary", "Marvolo Gaunt's Ring", "Slytherin's Locket", "Hufflepuff's Cup", "Ravenclaw's Diadem", "Nagini", "Elder Wand"],
        relationships: [
            { role: "Nemesis", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Opponent", name: "Albus Dumbledore", img: dumbledore },
            { role: "Servant", name: "Bellatrix Lestrange", img: "https://ik.imagekit.io/hpapi/bellatrix.jpg" },
            { role: "Servant", name: "Severus Snape", img: "https://ik.imagekit.io/hpapi/snape.jpg" },
        ],
    },

    "Bellatrix Lestrange": {
        quote: '"I killed Sirius Black! I killed Sirius Black!"',
        biography: `Bellatrix Lestrange (née Black) was one of Voldemort's most devoted and dangerous Death Eaters. A pure-blood witch from the Noble House of Black, she enthusiastically tortured Frank and Alice Longbottom to insanity using the Cruciatus Curse.\n\nFanatically loyal to Voldemort, Bellatrix was imprisoned in Azkaban for fourteen years before escaping. She killed Sirius Black and many others before finally being defeated by Molly Weasley in the Battle of Hogwarts.`,
        wand: "Walnut, Dragon heartstring, 12¾ inches (unyielding)",
        patronus: "Unknown",
        boggart: "Unknown",
        spells: [
            { name: "Cruciatus", icon: "crisis_alert", desc: "Her favourite Unforgivable Curse, used to torture the Longbottoms." },
            { name: "Avada Kedavra", icon: "warning", desc: "The Killing Curse; used to murder Sirius Black." },
            { name: "Fiendfyre", icon: "local_fire_department", desc: "Cursed fire that seeks out living targets." },
            { name: "Legilimency", icon: "psychology", desc: "Expert at invading minds and extracting information." },
        ],
        timeline: [
            { event: "Joins Death Eaters (1970s)", desc: "Becomes Voldemort's most devoted follower." },
            { event: "Azkaban (1981-1996)", desc: "Imprisoned for torturing the Longbottoms; escapes in mass breakout." },
            { event: "Battle of Hogwarts (1998)", desc: "Killed by Molly Weasley during the final battle." },
        ],
        artefacts: ["Hufflepuff's Cup (kept in her vault)", "Dark Mark"],
        relationships: [
            { role: "Master", name: "Lord Voldemort", img: "https://ik.imagekit.io/hpapi/voldemort.jpg" },
            { role: "Cousin", name: "Sirius Black", img: sirius },
            { role: "Sister", name: "Narcissa Malfoy", img: narcissa },
            { role: "Nemesis", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
        ],
    },

    "Rubeus Hagrid": {
        quote: '"Yer a wizard, Harry."',
        biography: `Rubeus Hagrid is the half-giant Keeper of Keys and Grounds at Hogwarts. Expelled in his third year after being falsely blamed for opening the Chamber of Secrets, he was allowed to remain at Hogwarts by Dumbledore and raised magical creatures.\n\nHagrid was Harry's first connection to the wizarding world, delivering his Hogwarts letter and introducing him to the magical world. His fierce loyalty to Dumbledore and love for dangerous creatures defined his character throughout the saga.`,
        wand: "Oak, 16 inches (broken; kept in pink umbrella)",
        patronus: "Unknown",
        boggart: "Voldemort",
        spells: [
            { name: "Wingardium Leviosa", icon: "air", desc: "Basic levitation charm performed with his broken wand." },
            { name: "Blast-Ended Skrewt Care", icon: "pets", desc: "Raises dangerous magical creatures with extraordinary affection." },
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "Basic defensive charm retained from his brief time at Hogwarts." },
            { name: "Duckin' spells", icon: "shield", desc: "Natural resistance to many spells due to his giant heritage." },
        ],
        timeline: [
            { event: "Expelled (1943)", desc: "Wrongly blamed for opening the Chamber; wand destroyed." },
            { event: "Delivers Harry (1991)", desc: "Brings Harry his Hogwarts letter and introduces him to magic." },
            { event: "Battle of Hogwarts (1998)", desc: "Fights alongside students and faculty in the final battle." },
        ],
        artefacts: ["Pink umbrella (hidden wand)", "Flying motorcycle (borrowed from Sirius)", "Norbert the Dragon (egg)"],
        relationships: [
            { role: "Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Mentor", name: "Albus Dumbledore", img: dumbledore },
            { role: "Friend", name: "Hermione Granger", img: hermione },
            { role: "Friend", name: "Ron Weasley", img: "https://ik.imagekit.io/hpapi/ron.jpg" },
        ],
    },

    "Minerva McGonagall": {
        quote: '"Why is it that whenever something happens, it is always you three?"',
        biography: `Minerva McGonagall was Deputy Headmistress and Transfiguration professor at Hogwarts, as well as Head of Gryffindor House. A registered Animagus, she could transform into a tabby cat at will.\n\nKnown for her stern demeanor hiding a deep compassion for her students, McGonagall fought in both Wizarding Wars. She became Headmistress after Snape's death and was known as one of the most formidable witches of her era.`,
        wand: "Fir, Dragon heartstring, 9½ inches",
        patronus: "Tabby cat",
        boggart: "Unknown",
        spells: [
            { name: "Animagus Transformation", icon: "pets", desc: "Can transform into a tabby cat — a registered Animagus." },
            { name: "Piertotum Locomotor", icon: "smart_toy", desc: "Brings the stone suits of armour in Hogwarts to life." },
            { name: "Transfiguration", icon: "autorenew", desc: "Master of Transfiguration — can transform objects and creatures." },
            { name: "Protego Maxima", icon: "shield", desc: "Casts immensely powerful protective enchantments over Hogwarts." },
        ],
        timeline: [
            { event: "Joins Hogwarts Staff (1956)", desc: "Begins her long tenure as Transfiguration professor." },
            { event: "First Wizarding War", desc: "Fights against Voldemort and his Death Eaters." },
            { event: "Battle of Hogwarts (1998)", desc: "Leads the defense of Hogwarts, animating the castle's statues." },
        ],
        artefacts: ["Tabby cat form", "Hogwarts house points system"],
        relationships: [
            { role: "Student", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Headmaster", name: "Albus Dumbledore", img: dumbledore },
            { role: "Colleague", name: "Severus Snape", img: "https://ik.imagekit.io/hpapi/snape.jpg" },
            { role: "Student", name: "Hermione Granger", img: hermione },
        ],
    },

    "Cedric Diggory": {
        quote: '"For a Hufflepuff, you sure are brave."',
        biography: `Cedric Diggory was a Hufflepuff student celebrated for his exceptional talent, integrity, and handsome appearance. As the Hogwarts Champion in the Triwizard Tournament, he competed with fairness and honor — refusing advantages that might be considered cheating.\n\nHis untimely death at the hands of Peter Pettigrew on Voldemort's orders marked one of the darkest moments in the saga, serving as the catalyst for the Second Wizarding War. His bravery and fairness made him universally admired.`,
        wand: "Ash, Unicorn hair, 12¼ inches",
        patronus: "Unknown",
        boggart: "Unknown",
        spells: [
            { name: "Conjunctivitis Curse", icon: "visibility_off", desc: "Used against the dragon in the Triwizard Tournament's first task." },
            { name: "Expelliarmus", icon: "auto_fix_high", desc: "The Disarming Charm — used alongside Harry in the graveyard." },
            { name: "Accio", icon: "send", desc: "The Summoning Charm, used in the Triwizard Tournament." },
            { name: "Impervius", icon: "water_drop", desc: "A charm that repels water; useful in the lake task." },
        ],
        timeline: [
            { event: "Quidditch Match (1993)", desc: "Defeats Gryffindor in Quidditch but offers a rematch after Harry faints." },
            { event: "Triwizard Champion (1994)", desc: "Selected as Hogwarts Champion and competes with fairness." },
            { event: "Death in the Graveyard (1995)", desc: "Murdered by Pettigrew on Voldemort's orders: 'Kill the spare.'" },
        ],
        artefacts: ["Triwizard Cup (portkey)", "Hufflepuff champion badge"],
        relationships: [
            { role: "Co-Champion", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Father", name: "Amos Diggory", img: "https://ik.imagekit.io/hpapi/cedric.jpg" },
            { role: "Girlfriend", name: "Cho Chang", img: "https://ik.imagekit.io/hpapi/cho.jpg" },
        ],
    },

    "Fred Weasley": {
        quote: '"Honestly woman, you call yourself our mother?"',
        biography: `Frederick Weasley was one half of the legendary Weasley twins, inseparable from his brother George. Together they were Hogwarts' most celebrated pranksters, responsible for countless magical jokes and legendary chaos.\n\nFred and George founded Weasleys' Wizard Wheezes, a wildly successful joke shop in Diagon Alley. Fred's death in the Battle of Hogwarts during an explosion caused one of the saga's most devastating emotional moments.`,
        wand: "Unknown wood and core",
        patronus: "Unknown (presumed magpie)",
        boggart: "Unknown",
        spells: [
            { name: "Extendable Ears", icon: "hearing", desc: "Invented magical listening devices to eavesdrop on conversations." },
            { name: "Portable Swamp", icon: "water", desc: "Created a real swamp in Hogwarts corridor to defy Umbridge." },
            { name: "Fireworks Jinx", icon: "celebration", desc: "Launched spectacular Weasley fireworks throughout Hogwarts." },
            { name: "Shield Hat Charm", icon: "shield", desc: "Invented Shield Hats later used by the Ministry of Magic." },
        ],
        timeline: [
            { event: "Hogwarts Pranksters", desc: "Become legendary for their jokes and chaos throughout school." },
            { event: "Leave Hogwarts (1996)", desc: "Dramatically exit Hogwarts on broomsticks defying Umbridge." },
            { event: "Battle of Hogwarts (1998)", desc: "Dies in an explosion during the battle, aged 20." },
        ],
        artefacts: ["Weasleys' Wizard Wheezes products", "Extendable Ears", "Portable Swamp"],
        relationships: [
            { role: "Twin", name: "George Weasley", img: "https://ik.imagekit.io/hpapi/george.jpg" },
            { role: "Brother", name: "Ron Weasley", img: "https://ik.imagekit.io/hpapi/ron.jpg" },
            { role: "Mother", name: "Molly Weasley", img: molly },
            { role: "Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
        ],
    },

    "George Weasley": {
        quote: '"You are the better-looking one."',
        biography: `George Weasley was one half of the iconic Weasley twins. Inseparable from his twin Fred, George was known for his humor, inventiveness, and entrepreneurial spirit. Together they co-founded Weasleys' Wizard Wheezes.\n\nAfter Fred's death in the Battle of Hogwarts, George struggled deeply but ultimately continued their joke shop legacy, naming his first son Fred in his brother's honor. His ability to find laughter even in darkness was his greatest magic.`,
        wand: "Unknown wood and core",
        patronus: "Unknown (presumed magpie)",
        boggart: "Unknown",
        spells: [
            { name: "Extendable Ears", icon: "hearing", desc: "Co-invented magical listening devices with Fred." },
            { name: "Portable Swamp", icon: "water", desc: "Co-created a swamp in Hogwarts to defy Umbridge." },
            { name: "Decoy Detonators", icon: "device_unknown", desc: "Invented small devices that create diversions." },
            { name: "Peruvian Instant Darkness Powder", icon: "dark_mode", desc: "Creates impenetrable darkness for quick escapes." },
        ],
        timeline: [
            { event: "Hogwarts Pranksters", desc: "Becomes legendary alongside Fred for magical mischief." },
            { event: "Battle of Seven Potters (1997)", desc: "Loses his ear to Snape's Sectumsempra during the escape." },
            { event: "Post-War (1998+)", desc: "Continues Weasleys' Wizard Wheezes in Fred's memory." },
        ],
        artefacts: ["Weasleys' Wizard Wheezes products", "Extendable Ears"],
        relationships: [
            { role: "Twin", name: "Fred Weasley", img: "https://ik.imagekit.io/hpapi/fred.jpg" },
            { role: "Brother", name: "Ron Weasley", img: "https://ik.imagekit.io/hpapi/ron.jpg" },
            { role: "Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Mother", name: "Molly Weasley", img: molly },
        ],
    },

    "Dobby": {
        quote: '"Dobby has no master. Dobby is a free elf!"',
        biography: `Dobby was a house-elf who served the Malfoy family until Harry Potter tricked Lucius Malfoy into freeing him by presenting him with a sock. Despite a rocky first meeting where Dobby tried to prevent Harry from returning to Hogwarts, he became one of Harry's most devoted friends.\n\nHis fierce loyalty, bravery, and love of freedom made him extraordinary among house-elves. He died heroically saving Harry and his friends from Malfoy Manor, and was buried by Harry with full honors.`,
        wand: "None",
        patronus: "None",
        boggart: "Unknown",
        spells: [
            { name: "Apparition", icon: "blur_circular", desc: "Can Apparate and Disapparate freely, even in Hogwarts." },
            { name: "Hover Charm", icon: "air", desc: "Levitated Aunt Petunia's pudding to get Harry in trouble." },
            { name: "Blasting Spell", icon: "bolt", desc: "Powerful defensive magic used to protect Harry at Malfoy Manor." },
            { name: "Elf Magic", icon: "auto_awesome", desc: "Can perform powerful wandless magic unique to house-elves." },
        ],
        timeline: [
            { event: "Warns Harry (1992)", desc: "Tries to prevent Harry returning to Hogwarts; causes chaos." },
            { event: "Freed by Harry (1992)", desc: "Harry tricks Lucius into freeing Dobby with a sock." },
            { event: "Death at Malfoy Manor (1998)", desc: "Struck by Bellatrix's knife while rescuing Harry. Dies free." },
        ],
        artefacts: ["Mismatched socks (symbol of freedom)", "Harry's old socks"],
        relationships: [
            { role: "Best Friend", name: "Harry Potter", img: "https://ik.imagekit.io/hpapi/harry.jpg" },
            { role: "Former Master", name: "Lucius Malfoy", img: "https://ik.imagekit.io/hpapi/lucius.jpg" },
            { role: "Friend", name: "Hermione Granger", img: hermione },
        ],
    },
};

export default charactersData;