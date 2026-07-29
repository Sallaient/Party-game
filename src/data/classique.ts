import { deck } from './helpers'

/**
 * The deck. Cards carrying a `reveal` hide their answer behind a tap, so the
 * person holding the phone cannot read it out by accident.
 * Rule cards without a `duration` last the whole game.
 */
export const classique = deck('classique', 'cl', [
  // --- Culture générale ------------------------------------------------------
  {
    kind: 'question',
    text: {
      fr: '{p1} : trouve la distance Samoreau – Grenoble à 50 km près, ou bois 2 gorgées.',
      en: '{p1}: guess the distance from Samoreau to Grenoble within 50 km, or drink 2 sips.',
    },
    reveal: { fr: '519 km', en: '519 km' },
  },
  {
    kind: 'question',
    text: {
      fr: "{p1} : en quelle année le mariage pour tous a-t-il été légalisé ? Bonne réponse, tu distribues 2 gorgées. Mauvaise réponse, tu en bois le double, parce qu'on n'aime pas les homophobes ici.",
      en: '{p1}: what year was same-sex marriage legalised in France? Right answer, hand out 2 sips. Wrong answer, drink double, because we do not like homophobes around here.',
    },
    reveal: {
      fr: '2013. Bonus de 2 gorgées à distribuer si la date exacte tombe : le 12 février 2013.',
      en: '2013. Bonus 2 sips to hand out for the exact date: 12 February 2013.',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : donne la capitale de la Finlande et distribue 2 gorgées. Sinon, bois-en 2.',
      en: '{p1}: name the capital of Finland and hand out 2 sips. Otherwise, drink 2.',
    },
    reveal: { fr: 'Helsinki', en: 'Helsinki' },
  },
  {
    kind: 'minigame',
    text: {
      fr: "Le premier à donner l'année de naissance de Mélenchon distribue 3 gorgées et remporte le titre de gaucho d'or.",
      en: 'First to name the year Mélenchon was born hands out 3 sips and takes home the Golden Lefty award.',
    },
    reveal: { fr: '1951', en: '1951' },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : cite 3 dinosaures, ou bois 3 gorgées.',
      en: '{p1}: name 3 dinosaurs, or drink 3 sips.',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : cite les dates de naissance de tout le monde. 1 gorgée par erreur.',
      en: '{p1}: recite everyone\'s birthday. 1 sip per mistake.',
    },
  },

  // --- Questions perso -------------------------------------------------------
  {
    kind: 'question',
    text: {
      fr: '{p1} : raconte-nous ton pire mensonge et laisse le groupe décider de ta punition.',
      en: '{p1}: tell us your worst lie and let the group decide your punishment.',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : quel est le compliment que tu as reçu qui t\'a fait le plus plaisir ? S\'il vient de quelqu\'un ici, cette personne distribue 2 gorgées.',
      en: '{p1}: what is the best compliment you have ever received? If it came from someone here, they hand out 2 sips.',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : à quel âge as-tu eu ton premier baiser, et avec qui ?',
      en: '{p1}: how old were you at your first kiss, and who was it with?',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : raconte-nous la dernière fois que tu as eu honte.',
      en: '{p1}: tell us about the last time you were embarrassed.',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : partage-nous quelque chose qui te rend fier ou fière en ce moment.',
      en: '{p1}: share something you are proud of right now.',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : cite trois personnes ici dans l\'ordre où tu les appellerais en cas d\'urgence. Les non-cités boivent 2 gorgées.',
      en: '{p1}: name three people here in the order you would call them in an emergency. Those not named drink 2 sips.',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : partage-nous ton ou ta celebrity crush. Si la majorité n\'est pas d\'accord, tu bois 2 gorgées.',
      en: '{p1}: share your celebrity crush. If the majority disagrees, you drink 2 sips.',
    },
  },

  // --- Duels -----------------------------------------------------------------
  {
    kind: 'duel',
    text: {
      fr: '{p1} et {p2} comptent jusqu\'à 3 et affichent un nombre avec une main. Si c\'est le même, vous buvez tous les deux ce nombre en gorgées.',
      en: '{p1} and {p2} count to 3 and hold up a number on one hand. Same number, you both drink that many sips.',
    },
  },
  {
    kind: 'duel',
    text: {
      fr: '{p1} et {p2} se tiennent sur un pied. Le premier qui pose l\'autre pied boit 3 gorgées.',
      en: '{p1} and {p2} balance on one foot. First to put the other foot down drinks 3 sips.',
    },
  },

  // --- Gages -----------------------------------------------------------------
  {
    kind: 'action',
    text: {
      fr: '{p1} : raconte de manière très romancée comment tu as rencontré {p2}.',
      en: '{p1}: tell the story of how you met {p2}, as romantically as you can.',
    },
  },
  {
    kind: 'action',
    text: {
      fr: '{p1} : remercie chaleureusement chaque joueur, personnellement. Ensuite, tout le monde boit une gorgée d\'émotion.',
      en: '{p1}: thank every player warmly and personally. Then everyone drinks one emotional sip.',
    },
  },
  {
    kind: 'action',
    text: {
      fr: '{p1} : donne 2 € à la personne à ta droite, ou bois 5 gorgées.',
      en: '{p1}: give €2 to the person on your right, or drink 5 sips.',
    },
  },
  {
    kind: 'action',
    text: {
      fr: '{p1} : au prochain tour, fais un tunnel rapide sur le sujet que tu veux.',
      en: '{p1}: on the next turn, launch into a quick rant about whatever you like.',
    },
  },
  {
    kind: 'question',
    text: {
      fr: '{p1} : raconte-nous en détail ton dernier caca, ou bois 2 gorgées.',
      en: '{p1}: describe your last poo in detail, or drink 2 sips.',
    },
  },
  {
    kind: 'action',
    text: {
      fr: '{p1} : bois ton body count en gorgées.',
      en: '{p1}: drink one sip per person on your body count.',
    },
  },
  {
    kind: 'action',
    text: {
      fr: '{p1} : sors de la pièce, change un détail de ta tenue et reviens. Le premier qui trouve distribue 4 gorgées.',
      en: '{p1}: leave the room, change one detail of your outfit and come back. First to spot it hands out 4 sips.',
    },
  },
  {
    kind: 'action',
    text: {
      fr: '{p1} : choisis une couleur. Le premier qui touche un objet de cette couleur distribue 5 gorgées.',
      en: '{p1}: pick a colour. First to touch an object of that colour hands out 5 sips.',
    },
  },
  {
    kind: 'action',
    text: {
      fr: '{p1} : mime une personne présente dans la pièce. Le premier qui trouve distribue 4 gorgées.',
      en: '{p1}: mime someone in this room. First to guess hands out 4 sips.',
    },
  },

  // --- Chronos ---------------------------------------------------------------
  {
    kind: 'timer',
    seconds: 60,
    text: {
      fr: "Interrogatoire : pendant 1 minute, tout le monde pose des questions à {p1}, qui ne doit donner que des réponses fausses. 3 gorgées par vérité qui s'échappe.",
      en: 'Interrogation: for one minute, everyone questions {p1}, who may only give false answers. 3 sips for every truth that slips out.',
    },
  },
  {
    kind: 'timer',
    seconds: 60,
    text: {
      fr: 'Pictionary time ! {p1} fait deviner une action en dessinant. Le premier qui trouve distribue 3 gorgées. Personne au bout d\'une minute : {p1} boit 3 gorgées.',
      en: 'Pictionary time! {p1} draws an action for the group to guess. First to get it hands out 3 sips. Nobody after a minute: {p1} drinks 3 sips.',
    },
  },
  {
    kind: 'timer',
    seconds: 60,
    text: {
      fr: "{p1} : mime une personne célèbre, sans aucun son. Le premier qui trouve distribue 4 gorgées. Personne au bout d'une minute : tu bois 4 gorgées.",
      en: '{p1}: mime a famous person, without a single sound. First to guess hands out 4 sips. Nobody after a minute: you drink 4 sips.',
    },
  },

  // --- Mini-jeux -------------------------------------------------------------
  {
    kind: 'minigame',
    text: {
      fr: 'Tour de table : chacun dit un mot pour décrire la soirée. Celui qui hésite ou répète boit 2 gorgées. {p1} commence.',
      en: 'Around the table: everyone says one word to describe tonight. Whoever hesitates or repeats drinks 2 sips. {p1} starts.',
    },
  },
  {
    kind: 'minigame',
    text: {
      fr: 'Mot secret : {p1} pense à un mot et donne un indice par tour. Le premier qui trouve distribue 4 gorgées.',
      en: 'Secret word: {p1} thinks of a word and gives one clue per turn. First to guess hands out 4 sips.',
    },
  },
  {
    kind: 'minigame',
    text: {
      fr: '{p1} : mets une musique. Le premier qui trouve le titre et l\'artiste distribue 3 gorgées.',
      en: '{p1}: play a song. First to name the title and the artist hands out 3 sips.',
    },
  },
  {
    kind: 'minigame',
    text: {
      fr: '« Dans ma valise, il y a… » — {p1} commence. Le perdant boit 3 gorgées.',
      en: '"In my suitcase, there is…" — {p1} starts. The loser drinks 3 sips.',
    },
  },
  {
    kind: 'minigame',
    text: {
      fr: 'À tour de rôle, dites en moins de 3 secondes un mot en rapport avec le précédent. Celui qui perd boit 3 gorgées. {p1} commence.',
      en: 'Take turns saying a word related to the previous one, in under 3 seconds. Whoever loses drinks 3 sips. {p1} starts.',
    },
  },

  // --- Règles ----------------------------------------------------------------
  {
    kind: 'rule',
    text: {
      fr: "{p1}, tu es désormais lié(e) avec {p2} ! À chaque fois que l'un boit, il trinque avec l'autre, qui boit la même chose.",
      en: '{p1}, you are now bound to {p2}! Every time one of you drinks, you clink glasses and the other drinks the same.',
    },
  },
  {
    kind: 'rule',
    text: {
      fr: '{p1} doit appeler tout le monde « mon amour » jusqu\'à nouvel ordre. 2 gorgées par oubli.',
      en: '{p1} must call everyone "my love" until further notice. 2 sips per slip.',
    },
  },
  {
    kind: 'rule',
    duration: 5,
    text: {
      fr: 'La prochaine personne qui consulte son téléphone boit 4 gorgées. Celui qui lit les cartes est exempté, évidemment.',
      en: 'The next person to check their phone drinks 4 sips. Whoever is reading the cards is exempt, obviously.',
    },
  },
  {
    kind: 'rule',
    duration: 6,
    text: {
      fr: 'Ni oui ni non ! 2 gorgées à chaque erreur.',
      en: 'No saying yes or no! 2 sips for every slip.',
    },
  },
  {
    kind: 'rule',
    text: {
      fr: '{p1} choisit un mot interdit jusqu\'à la fin de la partie, sous peine de pénalité ultime.',
      en: '{p1} picks a forbidden word for the rest of the game, on pain of the ultimate penalty.',
    },
  },
  {
    kind: 'rule',
    text: {
      fr: "Si un joueur arrive à faire boire dans son verre à un autre sans que celui-ci ne le remarque, la victime devra finir le verre.",
      en: 'If a player gets someone else to drink from their glass without noticing, the victim has to finish the glass.',
    },
  },

  // --- Tout le monde ---------------------------------------------------------
  {
    kind: 'group',
    text: {
      fr: 'Levez la main si vous avez déjà pleuré devant un dessin animé. Les mains baissées boivent 2 gorgées.',
      en: 'Hands up if you have ever cried at a cartoon. Hands down drink 2 sips.',
    },
  },
  {
    kind: 'group',
    text: {
      fr: "Si tout le monde décide de partir en voyage, qui oublie son passeport et regarde l'avion partir ?",
      en: 'If everyone went travelling together, who forgets their passport and watches the plane leave?',
    },
  },
  {
    kind: 'group',
    text: {
      fr: 'Entre {p1} et {p2}, qui est le plus susceptible de finir en prison ? Cette personne boit 2 gorgées.',
      en: 'Between {p1} and {p2}, who is most likely to end up in prison? That person drinks 2 sips.',
    },
  },
  {
    kind: 'group',
    text: {
      fr: "Dans un film, entre {p1} et {p2}, qui serait l'antagoniste ? Et de quoi parle le film ? Le grand méchant distribue 3 gorgées.",
      en: 'In a movie, between {p1} and {p2}, who would be the villain? And what is the movie about? The bad guy hands out 3 sips.',
    },
  },
  {
    kind: 'group',
    text: {
      fr: 'Tous ceux qui ont déjà fait un test sur internet pour connaître leur orientation sexuelle boivent 5 gorgées. Vous êtes gay.',
      en: 'Everyone who has ever taken an online quiz to find out their sexual orientation drinks 5 sips. You are gay.',
    },
  },
  {
    kind: 'group',
    text: {
      fr: 'Tour de pierre-feuille-ciseaux : tout le monde affronte son voisin de gauche. Les perdants boivent 2 gorgées.',
      en: 'Rock-paper-scissors round: everyone plays the person on their left. Losers drink 2 sips.',
    },
  },

  // --- Qui est le plus susceptible de… ---------------------------------------
  {
    kind: 'group',
    text: {
      fr: "Qui est le plus susceptible de participer à un jeu télé, de perdre lamentablement et d'insulter le présentateur ? Votez tous en même temps, le plus désigné boit 2 gorgées.",
      en: 'Who is most likely to go on a game show, lose miserably and insult the host? Everyone votes at once, the most-picked drinks 2 sips.',
    },
  },
  {
    kind: 'group',
    text: {
      fr: "Qui est le plus susceptible de partir en mission pour sauver la France et d'aller enfin dire ses quatre vérités à Manu Macron ? Votez tous en même temps, le plus désigné distribue 3 gorgées. On compte sur toi.",
      en: 'Who is most likely to go on a mission to save France and finally give Manu Macron a piece of their mind? Everyone votes at once, the most-picked hands out 3 sips. We are counting on you.',
    },
  },
  {
    kind: 'group',
    text: {
      fr: "Qui est le plus susceptible de se réveiller nu(e) au milieu du désert, sans savoir où il est ni comment il en est arrivé là ? Votez tous en même temps. Le plus désigné ne boit pas, car il s'agirait d'arrêter : c'est une intervention.",
      en: 'Who is most likely to wake up naked in the middle of the desert, with no idea where they are or how they got there? Everyone votes at once. The most-picked does not drink, because it is time to stop: this is an intervention.',
    },
  },
  {
    kind: 'group',
    text: {
      fr: 'Qui est le plus susceptible d\'oublier son prénom ? Votez tous en même temps, le plus désigné boit 2 gorgées.',
      en: 'Who is most likely to forget their own first name? Everyone votes at once, the most-picked drinks 2 sips.',
    },
  },
  {
    kind: 'group',
    text: {
      fr: 'Qui tient le moins l\'alcool ? Votez tous en même temps, le plus désigné boit 3 gorgées pour prouver le contraire.',
      en: 'Who holds their drink worst? Everyone votes at once, the most-picked drinks 3 sips to prove you wrong.',
    },
  },
])
