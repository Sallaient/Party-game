import { deck } from './helpers'

/**
 * Challenge pack: timers, multi-turn rules and short group games.
 * Heavier on the game engine than on drinking.
 */
export const defis = deck('defis', 'df', [
  // --- Timers ----------------------------------------------------------------
  {
    kind: 'timer',
    players: 1,
    seconds: 60,
    text: {
      fr: '{p1} : tiens la planche pendant 60 secondes. Abandon = 5 gorgées.',
      en: '{p1}: hold a plank for 60 seconds. Give up = 5 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: "{p1} : cite 15 prénoms différents en 30 secondes. Échec = 4 gorgées.",
      en: '{p1}: name 15 different first names in 30 seconds. Fail = 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 45,
    text: {
      fr: "{p1} : convaincs le groupe que tu es sobre. 45 secondes de plaidoirie. Vote à la fin, échec = 4 gorgées.",
      en: '{p1}: convince the group you are sober. 45 seconds of pleading. Vote at the end, fail = 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: '{p1} : fais une pub convaincante pour ta boisson en 30 secondes. Le groupe vote. Échec = 3 gorgées.',
      en: '{p1}: make a convincing ad for your drink in 30 seconds. The group votes. Fail = 3 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 60,
    text: {
      fr: "{p1} : garde les yeux fermés pendant 60 secondes. Le groupe peut tout faire pour te faire ouvrir les yeux (sans te toucher). Ouverture = 4 gorgées.",
      en: '{p1}: keep your eyes closed for 60 seconds. The group can do anything to make you open them (no touching). Opening = 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 2,
    seconds: 45,
    text: {
      fr: '{p1} et {p2} : tenez-vous en équilibre sur un pied. Le premier qui pose le pied boit 4 gorgées.',
      en: '{p1} and {p2}: balance on one foot. First to put a foot down drinks 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: "{p1} : parle 30 secondes d'un sujet imposé par le groupe, sans dire \"euh\". Échec = 4 gorgées.",
      en: '{p1}: talk for 30 seconds on a topic the group picks, without saying "um". Fail = 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 0,
    seconds: 60,
    text: {
      fr: 'Tout le monde : constituez une pyramide de verres, canettes ou objets en 60 secondes. Effondrement = tout le monde boit 2 gorgées.',
      en: 'Everyone: build a pyramid out of glasses, cans or objects in 60 seconds. Collapse = everyone drinks 2 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 45,
    text: {
      fr: '{p1} : apprends une chorégraphie de 5 mouvements au groupe en 45 secondes. Le groupe la refait, ratage = {p1} boit 3 gorgées.',
      en: '{p1}: teach the group a 5-move dance in 45 seconds. The group performs it; failure = {p1} drinks 3 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 20,
    text: {
      fr: "{p1} : trouve dans ton téléphone une photo où tu es ridicule. 20 secondes. Échec = 4 gorgées.",
      en: '{p1}: find a photo on your phone where you look ridiculous. 20 seconds. Fail = 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 0,
    seconds: 30,
    text: {
      fr: "Tout le monde se lève et s'assoit dans l'ordre alphabétique de vos prénoms. 30 secondes. Échec collectif = tout le monde boit 2 gorgées.",
      en: 'Everyone stands and sits in alphabetical order of first names. 30 seconds. Collective failure = everyone drinks 2 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: "{p1} : imite 5 animaux différents en 30 secondes. Le groupe doit tous les deviner, sinon 3 gorgées.",
      en: '{p1}: act out 5 different animals in 30 seconds. The group must guess them all, or 3 sips.',
    },
  },

  // --- Règles persistantes ---------------------------------------------------
  {
    kind: 'rule',
    players: 0,
    duration: 8,
    text: {
      fr: 'Nouvelle règle : personne ne peut dire "je". Erreur = 2 gorgées.',
      en: 'New rule: nobody may say "I". Slip = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 6,
    text: {
      fr: 'Nouvelle règle : avant de boire, il faut annoncer "à la vôtre". Oubli = 2 gorgées supplémentaires.',
      en: 'New rule: before drinking you must announce "cheers". Forgetting = 2 extra sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 6,
    text: {
      fr: "{p1} devient le gardien des règles. Il ou elle peut donner une gorgée à quiconque enfreint une règle active.",
      en: '{p1} becomes the rule keeper. They can hand out a sip to anyone who breaks an active rule.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 6,
    text: {
      fr: 'Nouvelle règle : interdiction de croiser les bras ou les jambes. Repéré = 2 gorgées.',
      en: 'New rule: no crossing arms or legs. Caught = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 5,
    text: {
      fr: '{p1} choisit un geste. Chaque fois que quelqu\'un le fait, cette personne boit une gorgée.',
      en: '{p1} picks a gesture. Every time someone does it, they drink a sip.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 7,
    text: {
      fr: 'Nouvelle règle : tout le monde parle à la troisième personne. "Léa a soif." Erreur = 2 gorgées.',
      en: 'New rule: everyone speaks in the third person. "Alex is thirsty." Slip = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 5,
    text: {
      fr: "{p1} a le pouvoir de veto : une fois pendant cette règle, il ou elle peut annuler une carte et la renvoyer à quelqu'un d'autre.",
      en: '{p1} has veto power: once while this rule lasts, they can cancel a card and pass it to someone else.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 6,
    text: {
      fr: 'Nouvelle règle : chaque question doit recevoir une réponse en forme de question. Erreur = 2 gorgées.',
      en: 'New rule: every question must be answered with a question. Slip = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 2,
    duration: 6,
    text: {
      fr: '{p1} et {p2} sont en guerre froide : ils ne peuvent plus se parler directement. Ils doivent passer par un intermédiaire. Erreur = 2 gorgées.',
      en: '{p1} and {p2} are in a cold war: they may not speak to each other directly. Everything goes through a third party. Slip = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 5,
    text: {
      fr: 'Nouvelle règle : personne ne peut se lever sans annoncer sa destination à voix haute. Oubli = 2 gorgées.',
      en: 'New rule: nobody may stand up without announcing their destination out loud. Forgetting = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 4,
    text: {
      fr: '{p1} est muet. Il ou elle ne communique que par gestes. Un mot prononcé = 3 gorgées.',
      en: '{p1} is mute. They may only communicate with gestures. One word spoken = 3 sips.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 8,
    text: {
      fr: 'Nouvelle règle : le dernier à boire à chaque carte prend une gorgée supplémentaire. Restez vifs.',
      en: 'New rule: the last person to drink on each card takes one extra sip. Stay sharp.',
    },
  },

  // --- Mini-jeux -------------------------------------------------------------
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: 'Le tribunal : {p1} est accusé de crimes contre la soirée. {p2} est procureur, le reste du groupe est jury. Verdict = 4 gorgées pour le condamné.',
      en: 'The courtroom: {p1} is accused of crimes against the party. {p2} prosecutes, the rest are the jury. Verdict = 4 sips for the guilty.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "Le mot de passe : {p1} pense à un mot et donne un indice par tour. Le premier qui trouve distribue 4 gorgées, sinon {p1} boit 4 gorgées.",
      en: 'The password: {p1} thinks of a word and gives one clue per turn. First to guess hands out 4 sips, otherwise {p1} drinks 4 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: 'Le chef d\'orchestre : {p1} sort. Le groupe choisit un meneur qui lance des gestes que tous imitent. {p1} revient et doit le démasquer en 3 essais, sinon 4 gorgées.',
      en: 'The conductor: {p1} steps out. The group picks a leader whose gestures everyone copies. {p1} returns and must spot them in 3 guesses, or 4 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: 'Qui suis-je : le groupe choisit une célébrité pour {p1}, qui pose des questions fermées. Plus de 10 questions = 4 gorgées.',
      en: 'Who am I: the group picks a celebrity for {p1}, who asks yes-or-no questions. More than 10 questions = 4 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "Le cercle des compliments : chacun fait un compliment à son voisin de gauche. Celui qui hésite plus de 3 secondes boit 2 gorgées.",
      en: 'Compliment circle: everyone compliments the person on their left. Anyone who hesitates more than 3 seconds drinks 2 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "Le désaccord : {p1} lance une opinion clivante (ananas sur la pizza, etc.). Le groupe se divise. Le camp minoritaire boit 3 gorgées.",
      en: 'The divide: {p1} states a controversial opinion (pineapple on pizza, etc.). The group splits. The smaller side drinks 3 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: 'Le sosie : chacun désigne le joueur qui lui ressemble le plus. Les paires mutuelles trinquent, les autres boivent 2 gorgées.',
      en: 'The lookalike: everyone points at the player they most resemble. Mutual pairs toast, the rest drink 2 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "Le classement : le groupe classe tous les joueurs du plus au moins susceptible de survivre à une apocalypse. Les trois derniers boivent 2 gorgées.",
      en: 'The ranking: the group ranks all players from most to least likely to survive an apocalypse. The bottom three drink 2 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 2,
    text: {
      fr: '{p1} et {p2} : débat de 60 secondes sur un sujet absurde choisi par le groupe. Le perdant boit 4 gorgées.',
      en: '{p1} and {p2}: a 60-second debate on an absurd topic chosen by the group. The loser drinks 4 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "L'histoire collective : {p1} commence une histoire par une phrase, chacun ajoute la sienne. Celui qui casse le fil boit 3 gorgées.",
      en: 'Collective story: {p1} starts a story with one sentence, everyone adds theirs. Whoever breaks the thread drinks 3 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: 'Le sondage : chacun écrit secrètement le nom de la personne la plus susceptible de finir la soirée en dernier. Révélation simultanée : les noms cités boivent une gorgée par vote.',
      en: 'The poll: everyone secretly writes who is most likely to be last standing tonight. Reveal at once: named players drink one sip per vote.',
    },
  },
  {
    kind: 'minigame',
    players: 1,
    text: {
      fr: "L'interrogatoire : le groupe pose des questions à {p1} pendant une minute. {p1} doit mentir à chaque réponse. Une vérité qui s'échappe = 4 gorgées.",
      en: 'The interrogation: the group questions {p1} for one minute. {p1} must lie in every answer. One truth slipping out = 4 sips.',
    },
  },

  // --- Défis d'action --------------------------------------------------------
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : appelle un contact au hasard et chante-lui joyeux anniversaire. Refus = 5 gorgées.",
      en: '{p1}: call a random contact and sing them happy birthday. Refusing = 5 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : publie une story avec la tête que le groupe te demande. Refus = 4 gorgées.",
      en: '{p1}: post a story pulling whatever face the group demands. Refusing = 4 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} : échange un vêtement avec la personne à ta droite jusqu\'à la fin de la partie. Refus = 4 gorgées.',
      en: '{p1}: swap one item of clothing with the person on your right for the rest of the game. Refusing = 4 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : laisse la personne en face de toi écrire un message à quelqu'un de ton choix depuis ton téléphone. Refus = 5 gorgées.",
      en: '{p1}: let the person opposite you write a message from your phone to someone you choose. Refusing = 5 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : fais 15 pompes ou bois 5 gorgées. Le groupe compte à voix haute.",
      en: '{p1}: do 15 push-ups or drink 5 sips. The group counts out loud.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: '{p1} et {p2} : montez une pub télé improvisée pour un objet de la pièce. Le groupe note. Moins de 5/10 = 3 gorgées chacun.',
      en: '{p1} and {p2}: improvise a TV ad for an object in the room. The group scores it. Under 5/10 = 3 sips each.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : laisse le groupe choisir ton fond d'écran pour le reste de la soirée. Refus = 4 gorgées.",
      en: '{p1}: let the group pick your wallpaper for the rest of the night. Refusing = 4 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : fais un discours de remerciement d'une minute comme si tu venais de gagner un prix. Applaudissements insuffisants = 3 gorgées.",
      en: '{p1}: give a one-minute acceptance speech as if you just won an award. Weak applause = 3 sips.',
    },
  },
])
