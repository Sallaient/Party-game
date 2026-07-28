import { deck } from './helpers'

/**
 * Hardcore pack (18+): bigger dares, heavier drinking, more chaos.
 * Amounts stay in sips rather than "finish the bottle" — the app shows a
 * safety reminder when this pack is on.
 */
export const hardcore = deck('hardcore', 'hc', [
  // --- Grosses gorgées -------------------------------------------------------
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} boit 6 gorgées. Pas de négociation.',
      en: '{p1} drinks 6 sips. No negotiation.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} distribue 8 gorgées. Tyrannie totale.',
      en: '{p1} hands out 8 sips. Total tyranny.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: '{p1} et {p2} : cul sec de ce qui reste dans votre verre. Le plus lent en reprend 3.',
      en: '{p1} and {p2}: down whatever is left in your glass. The slower one takes 3 more sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : bois autant de gorgées que le nombre de joueurs. Merci d'être venus si nombreux.",
      en: '{p1}: drink as many sips as there are players. Thanks for the big turnout.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : bois une gorgée pour chaque lettre de ton prénom. Les prénoms courts ont gagné la vie.",
      en: '{p1}: drink one sip per letter of your first name. Short names win at life.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : choisis. Soit tu bois 8 gorgées, soit tu laisses le groupe choisir un gage pour toi.",
      en: '{p1}: choose. Either drink 8 sips, or let the group pick a dare for you.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} désigne {p2} comme sa victime : {p2} boit à chaque fois que {p1} boit, jusqu'à la fin de la partie.",
      en: '{p1} names {p2} their victim: {p2} drinks every time {p1} drinks, for the rest of the game.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : ferme les yeux et pointe quelqu'un au hasard. Cette personne boit 6 gorgées.",
      en: '{p1}: close your eyes and point at random. That person drinks 6 sips.',
    },
  },
  {
    kind: 'action',
    players: 0,
    text: {
      fr: 'Cascade : {p1} commence à boire, le suivant démarre quand {p1} a commencé, et ainsi de suite. Personne ne s\'arrête avant celui d\'avant.',
      en: 'Waterfall: {p1} starts drinking, the next player starts when {p1} does, and so on. Nobody stops before the person before them.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : tu as 10 secondes pour trouver une excuse valable de ne pas boire 6 gorgées. Le groupe vote. Refusée = 8 gorgées.",
      en: '{p1}: you have 10 seconds to find a valid excuse not to drink 6 sips. The group votes. Rejected = 8 sips.',
    },
  },

  // --- Gages lourds ----------------------------------------------------------
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : le groupe écrit un message et tu l'envoies à la personne de leur choix dans ton téléphone. Refus = 10 gorgées.",
      en: '{p1}: the group writes a message and you send it to whoever they pick in your phone. Refusing = 10 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : donne ton téléphone déverrouillé à ton voisin pendant 60 secondes. Refus = 8 gorgées.",
      en: '{p1}: hand your unlocked phone to your neighbour for 60 seconds. Refusing = 8 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : appelle la dernière personne de ton journal d'appels et dis-lui que tu penses à elle. Refus = 8 gorgées.",
      en: '{p1}: call the last person in your call log and tell them you are thinking about them. Refusing = 8 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : le groupe choisit ta photo de profil pour les 24 prochaines heures. Refus = 8 gorgées.",
      en: '{p1}: the group picks your profile picture for the next 24 hours. Refusing = 8 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : révèle un secret que personne ici ne connaît, ou bois 8 gorgées. Le groupe juge si ça vaut le coup.",
      en: '{p1}: reveal a secret nobody here knows, or drink 8 sips. The group judges whether it counts.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : mets-toi debout sur une chaise et déclare ta flamme à un objet de la pièce. Refus = 6 gorgées.",
      en: '{p1}: stand on a chair and declare your love to an object in the room. Refusing = 6 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : laisse le groupe fouiller ta galerie photo pendant 30 secondes. Refus = 10 gorgées.",
      en: '{p1}: let the group scroll your photo gallery for 30 seconds. Refusing = 10 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : imite quelqu'un du groupe jusqu'à ce qu'on devine. Chaque tour sans réponse = 2 gorgées.",
      en: '{p1}: imitate someone here until we guess. Each round without an answer = 2 sips.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} : dis à {p2} ce que tu penses vraiment de sa dernière décision de vie. Sans filtre. Sinon, 8 gorgées.",
      en: '{p1}: tell {p2} what you really think of their latest life decision. No filter. Otherwise, 8 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : chante une chanson complète debout, a cappella, jusqu'à ce que le groupe te dise stop. Refus = 8 gorgées.",
      en: '{p1}: stand up and sing a full song a cappella until the group says stop. Refusing = 8 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : mélange une gorgée de la boisson de chaque joueur et bois-la. Refus = 10 gorgées de la tienne.",
      en: '{p1}: mix one sip of every player\'s drink and down it. Refusing = 10 sips of your own.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : le groupe te pose trois questions. Tu dois répondre honnêtement. Une esquive = 5 gorgées.",
      en: '{p1}: the group asks you three questions. You must answer honestly. One dodge = 5 sips.',
    },
  },

  // --- Questions brutales ----------------------------------------------------
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quelle est la chose la plus illégale que tu aies faite ? Refus = 6 gorgées.",
      en: '{p1}: what is the most illegal thing you have ever done? Refusing = 6 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : qui, dans cette pièce, t'a le plus déçu ? Refus = 6 gorgées.",
      en: '{p1}: who in this room has disappointed you the most? Refusing = 6 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quel est le pire truc que tu aies dit dans le dos de quelqu'un ici ? Refus = 8 gorgées.",
      en: '{p1}: what is the worst thing you have said behind someone here\'s back? Refusing = 8 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : classe les joueurs du plus au moins fiable. Assume à voix haute. Le dernier boit 5 gorgées.",
      en: '{p1}: rank the players from most to least reliable. Say it out loud. The last one drinks 5 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : combien d'argent as-tu sur ton compte, à 100 près ? Refus = 6 gorgées.",
      en: '{p1}: how much money is in your account, to the nearest hundred? Refusing = 6 sips.',
    },
  },
  {
    kind: 'question',
    players: 2,
    text: {
      fr: "{p1} : quelle est la chose que tu n'as jamais osé dire à {p2} ? Dis-la maintenant ou bois 8 gorgées.",
      en: '{p1}: what have you never dared tell {p2}? Say it now or drink 8 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quel est ton plus gros regret ? Le groupe boit 2 gorgées en solidarité.",
      en: '{p1}: what is your biggest regret? The group drinks 2 sips in solidarity.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : as-tu déjà trahi la confiance de quelqu'un ici ? Une gorgée par personne concernée.",
      en: '{p1}: have you ever betrayed the trust of someone here? One sip per person involved.',
    },
  },

  // --- Duels & groupe --------------------------------------------------------
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: '{p1} contre {p2} : course de gorgées, 5 chacun. Le perdant en reprend 5.',
      en: '{p1} versus {p2}: sip race, 5 each. The loser takes 5 more.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: "{p1} et {p2} : concours d'insultes créatives et gentilles. Le groupe désigne le perdant, qui boit 6 gorgées.",
      en: '{p1} and {p2}: creative but friendly insult contest. The group picks the loser, who drinks 6 sips.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: "{p1} et {p2} : celui qui a le plus de photos dans sa galerie boit 6 gorgées. Vérification obligatoire.",
      en: '{p1} and {p2}: whoever has more photos in their gallery drinks 6 sips. Verification required.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: "{p1} et {p2} : chacun révèle un truc gênant sur l'autre. Le groupe vote le pire, la victime boit 6 gorgées.",
      en: '{p1} and {p2}: each reveals something embarrassing about the other. The group votes the worst, the victim drinks 6 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà vomi à cause de l'alcool boit 5 gorgées. Souvenez-vous de vos limites.",
      en: 'Everyone who has ever thrown up from drinking drinks 5 sips. Remember your limits.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà perdu son téléphone en soirée boit 5 gorgées.",
      en: 'Everyone who has ever lost their phone at a party drinks 5 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà menti à ses parents sur une soirée boit 4 gorgées. Donc tout le monde.",
      en: 'Everyone who has lied to their parents about a night out drinks 4 sips. So, everyone.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Chacun pointe la personne qui va le plus regretter demain. Une gorgée par doigt pointé, ×2.",
      en: 'Everyone points at who will regret tomorrow the most. One sip per finger pointed, ×2.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Le dernier à finir son verre boit 5 gorgées de plus. Rythme imposé.",
      en: 'The last to finish their drink takes 5 more sips. Pace imposed.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà pleuré en soirée boit 5 gorgées. On ne juge pas. Un peu.",
      en: 'Everyone who has cried at a party drinks 5 sips. No judgement. A little.',
    },
  },
  {
    kind: 'group',
    players: 1,
    text: {
      fr: 'Tout le monde boit 3 gorgées. Sauf {p1}, qui en boit 6 parce que la vie est cruelle.',
      en: 'Everyone drinks 3 sips. Except {p1}, who drinks 6 because life is cruel.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Vote à main levée : qui triche le plus à ce jeu ? Le gagnant boit 6 gorgées.",
      en: 'Show of hands: who cheats the most at this game? The winner drinks 6 sips.',
    },
  },

  // --- Règles & timers -------------------------------------------------------
  {
    kind: 'rule',
    players: 1,
    duration: 6,
    text: {
      fr: '{p1} est le dictateur : pendant 6 tours, il ou elle peut doubler les gorgées de n\'importe quelle carte.',
      en: '{p1} is the dictator: for 6 turns they may double the sips on any card.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 6,
    text: {
      fr: 'Nouvelle règle : toutes les gorgées sont doublées. Bon courage.',
      en: 'New rule: all sips are doubled. Good luck.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 5,
    text: {
      fr: 'Nouvelle règle : interdit de reposer son verre sur une table. Repéré = 4 gorgées.',
      en: 'New rule: no putting your glass down on a table. Caught = 4 sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 5,
    text: {
      fr: "{p1} ne peut plus refuser un gage pendant 5 tours. Les refus coûtent le double.",
      en: '{p1} may not refuse a dare for 5 turns. Refusals cost double.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 8,
    text: {
      fr: 'Nouvelle règle : celui qui parle de la règle boit 3 gorgées. Y compris maintenant.',
      en: 'New rule: whoever talks about the rule drinks 3 sips. Including now.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 60,
    text: {
      fr: "{p1} : finis ton verre avant la fin du chrono, ou bois 6 gorgées de plus. Vas-y à ton rythme.",
      en: '{p1}: finish your drink before the timer ends, or take 6 more sips. Go at your own pace.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: "{p1} : trouve trois raisons de ne pas boire ce soir. En 30 secondes. Le groupe vote, échec = 6 gorgées.",
      en: '{p1}: give three reasons not to drink tonight. In 30 seconds. The group votes, fail = 6 sips.',
    },
  },
  {
    kind: 'timer',
    players: 0,
    seconds: 30,
    text: {
      fr: "Tout le monde : dernier à toucher le sol avec les deux mains boit 6 gorgées. Chrono lancé.",
      en: 'Everyone: last to touch the floor with both hands drinks 6 sips. Timer running.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "Le procès : le groupe désigne le pire joueur de la soirée. Il ou elle boit 8 gorgées et choisit la prochaine règle.",
      en: 'The trial: the group names the worst player of the night. They drink 8 sips and choose the next rule.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "La roulette : chacun met un doigt sur la table. {p1} compte jusqu'à 3 et vous levez tous un doigt ou pas. Ceux qui font pareil que {p1} boivent 5 gorgées.",
      en: 'The roulette: everyone puts a finger on the table. {p1} counts to 3 and you all raise a finger or not. Everyone matching {p1} drinks 5 sips.',
    },
  },
])
