import { deck } from './helpers'

/**
 * Warm-up pack: safe, silly, everyone can play. No dare here should ever be
 * embarrassing enough that someone would rather leave the room.
 */
export const classique = deck('classique', 'cl', [
  // --- Sips & simple actions -------------------------------------------------
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} boit 2 gorgées. Sans raison. La vie est injuste.',
      en: '{p1} drinks 2 sips. No reason. Life is unfair.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} distribue 3 gorgées comme bon lui semble.',
      en: '{p1} hands out 3 sips however they like.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: '{p1} et {p2} trinquent et boivent ensemble. Amitié scellée.',
      en: '{p1} and {p2} clink glasses and drink together. Friendship sealed.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} choisit quelqu'un : vous buvez tous les deux 2 gorgées.",
      en: '{p1} picks someone: you both drink 2 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} fait un compliment sincère à la personne à sa gauche. Si elle rougit, elle boit.',
      en: '{p1} gives a genuine compliment to the person on their left. If they blush, they drink.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} imite un autre joueur. Si personne ne devine qui, {p1} boit 2 gorgées.',
      en: '{p1} imitates another player. If nobody guesses who, {p1} drinks 2 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} raconte la pire excuse qu'il ou elle a déjà utilisée pour annuler un plan.",
      en: '{p1} tells the worst excuse they have ever used to cancel plans.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} montre la dernière photo de sa galerie. Refus = 3 gorgées, et c'est louche.",
      en: '{p1} shows the last photo in their camera roll. Refusing costs 3 sips, and it looks suspicious.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} lit à voix haute son dernier message envoyé. Avec le ton, sinon ça compte pas.',
      en: '{p1} reads out their last sent message. With feeling, or it does not count.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} doit parler avec un accent de son choix jusqu\'à son prochain tour. Sinon, 2 gorgées.',
      en: '{p1} must speak with an accent of their choice until their next turn. Otherwise, 2 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} chante le refrain de la dernière chanson qu\'il ou elle a écoutée. Faux = 2 gorgées.',
      en: '{p1} sings the chorus of the last song they listened to. Off-key = 2 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} choisit un mot interdit pour tout le groupe. Celui qui le dit boit.',
      en: '{p1} picks a forbidden word for the whole group. Whoever says it drinks.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: '{p1} et {p2} échangent de place. {p2} boit une gorgée pour le dérangement.',
      en: '{p1} and {p2} swap seats. {p2} drinks a sip for the inconvenience.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} donne son téléphone à son voisin de droite pendant 2 tours. Refus : 4 gorgées.",
      en: '{p1} hands their phone to the person on their right for 2 turns. Refusing: 4 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} fait deviner un film en mimant. Le premier qui trouve distribue 2 gorgées.',
      en: '{p1} acts out a movie. First to guess hands out 2 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} devient le DJ officiel : la prochaine chanson, c\'est lui ou elle qui la choisit.',
      en: '{p1} becomes the official DJ: they pick the next song.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} annonce son plus gros mensonge de la soirée. Le groupe vote : vrai mensonge = tout le monde boit, sinon {p1} boit 3 gorgées.',
      en: '{p1} confesses their biggest lie of the night. The group votes: real lie = everyone drinks, otherwise {p1} drinks 3 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} refait la démarche de quelqu\'un dans la pièce. Si on reconnaît, la victime boit.',
      en: '{p1} copies someone in the room walking. If we recognise them, the victim drinks.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: '{p1} raconte comment il ou elle a rencontré {p2}. Version romancée obligatoire.',
      en: '{p1} tells the story of how they met {p2}. Dramatic version required.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: '{p1} doit remercier chaleureusement chaque joueur, un par un. Le groupe boit une gorgée à la fin.',
      en: '{p1} warmly thanks every player, one by one. The group drinks a sip at the end.',
    },
  },

  // --- Questions -------------------------------------------------------------
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : quelle est la chose la plus chère que tu aies cassée ? Tu réponds ou tu bois 3 gorgées.',
      en: '{p1}: what is the most expensive thing you have ever broken? Answer or drink 3 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : ton pire souvenir de soirée ? Réponds, ou 3 gorgées.',
      en: '{p1}: your worst party memory? Answer, or 3 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : combien de personnes ici te suivent sur les réseaux et tu ne suis pas en retour ? Une gorgée par personne.',
      en: '{p1}: how many people here follow you but you do not follow back? One sip each.',
    },
  },
  {
    kind: 'question',
    players: 2,
    text: {
      fr: '{p1} : qu\'est-ce que tu changerais chez {p2} ? Sois honnête. {p2} boit si ça pique.',
      en: '{p1}: what would you change about {p2}? Be honest. {p2} drinks if it stings.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : le talent inutile dont tu es le plus fier ? Prouve-le, sinon 2 gorgées.",
      en: '{p1}: the useless talent you are proudest of? Prove it, or 2 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : dernier truc que tu as cherché sur internet ? Montre l\'écran ou bois 4 gorgées.',
      en: '{p1}: last thing you searched online? Show the screen or drink 4 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quelle est la règle que tu enfreins le plus souvent ? Une gorgée par récidive avouée.",
      en: '{p1}: which rule do you break most often? One sip per confessed offence.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : si tu devais partir vivre ailleurs demain, où ? Le groupe vote si c\'est crédible.',
      en: '{p1}: if you had to move away tomorrow, where to? The group votes whether it is believable.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : quel est ton plaisir coupable musical ? Le groupe rigole = 2 gorgées pour toi.',
      en: '{p1}: what is your musical guilty pleasure? If the group laughs, 2 sips for you.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : combien de temps as-tu passé sur ton téléphone aujourd'hui ? Une gorgée par heure.",
      en: '{p1}: how much screen time today? One sip per hour.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : cite trois personnes du groupe dans l'ordre où tu les appellerais en cas d'urgence. Les non-cités boivent.",
      en: '{p1}: name three people here in the order you would call them in an emergency. Those not named drink.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : quel est le pire cadeau que tu aies reçu, et de qui ?',
      en: '{p1}: what is the worst gift you have ever received, and from whom?',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : si le groupe partait en road trip, qui oublierait son passeport ? Cette personne boit 2 gorgées.",
      en: '{p1}: if the group went on a road trip, who would forget their passport? That person drinks 2 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : le mensonge que tu répètes le plus souvent au travail ou en cours ?",
      en: '{p1}: the lie you tell most often at work or school?',
    },
  },

  // --- Duels -----------------------------------------------------------------
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: 'Duel de regard : {p1} contre {p2}. Le premier qui rit ou détourne les yeux boit 3 gorgées.',
      en: 'Staring contest: {p1} versus {p2}. First to laugh or look away drinks 3 sips.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: 'Pierre-feuille-ciseaux : {p1} contre {p2}. Le perdant boit 3 gorgées.',
      en: 'Rock-paper-scissors: {p1} versus {p2}. Loser drinks 3 sips.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: '{p1} et {p2} citent chacun leur tour une marque de voiture. Le premier à bloquer boit 3 gorgées.',
      en: '{p1} and {p2} take turns naming car brands. First to get stuck drinks 3 sips.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: '{p1} et {p2} : bras de fer. Le perdant boit 3 gorgées, le gagnant en distribue 2.',
      en: '{p1} and {p2}: arm wrestle. Loser drinks 3 sips, winner hands out 2.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: '{p1} et {p2} comptent jusqu\'à 3 et montrent un nombre de doigts. Pareil = vous buvez tous les deux.',
      en: '{p1} and {p2} count to 3 and hold up fingers. Same number = you both drink.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: '{p1} et {p2} : celui qui a le plus d\'applications ouvertes sur son téléphone boit 3 gorgées.',
      en: '{p1} and {p2}: whoever has more apps open on their phone drinks 3 sips.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: 'Concours de blagues : {p1} contre {p2}. Le groupe désigne le moins drôle, qui boit 3 gorgées.',
      en: 'Joke-off: {p1} versus {p2}. The group picks the least funny, who drinks 3 sips.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: '{p1} et {p2} : celui qui a le pourcentage de batterie le plus bas boit 2 gorgées. Et va se charger.',
      en: '{p1} and {p2}: lowest battery percentage drinks 2 sips. And goes to charge.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: '{p1} et {p2} font une phrase en alternant un mot chacun. Celui qui casse la phrase boit.',
      en: '{p1} and {p2} build a sentence one word each. Whoever breaks it drinks.',
    },
  },

  // --- Groupe ----------------------------------------------------------------
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Tout le monde qui a déjà menti sur son âge boit 2 gorgées.',
      en: 'Everyone who has ever lied about their age drinks 2 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà fait semblant d'avoir vu un film culte boit.",
      en: 'Everyone who has ever pretended to have seen a classic movie drinks.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Tout le monde qui a son téléphone à la main boit une gorgée. Maintenant.',
      en: 'Everyone holding their phone right now drinks a sip. Right now.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Le dernier à poser son doigt sur son nez boit 3 gorgées. Go.",
      en: 'Last person to put a finger on their nose drinks 3 sips. Go.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Tout le monde qui porte du noir boit 2 gorgées.',
      en: 'Everyone wearing black drinks 2 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Le plus jeune du groupe distribue 3 gorgées. Privilège de la jeunesse.',
      en: 'The youngest in the group hands out 3 sips. Perks of youth.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Le plus vieux du groupe boit 2 gorgées. Respect, mais quand même.',
      en: 'The oldest in the group drinks 2 sips. Respect, but still.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui s'est déjà endormi pendant une soirée boit 3 gorgées.",
      en: 'Everyone who has ever fallen asleep at a party drinks 3 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Tout le monde qui a un ex dans son téléphone boit. Tout le monde qui lui a écrit ce mois-ci boit le double.',
      en: 'Everyone with an ex in their phone drinks. Everyone who texted them this month drinks double.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Levez la main si vous avez déjà pleuré devant un dessin animé. Les mains baissées boivent.',
      en: 'Hands up if you have cried at a cartoon. Hands down drink.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui n'a pas encore parlé depuis le début de la partie boit 2 gorgées.",
      en: 'Everyone who has not spoken yet since the game started drinks 2 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Santé générale : tout le monde boit une gorgée. Ambiance.',
      en: 'Group toast: everyone drinks a sip. Vibes.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Tout le monde qui a déjà été viré ou recalé quelque part boit 2 gorgées. Racontez.',
      en: 'Everyone who has ever been fired or rejected somewhere drinks 2 sips. Tell us.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Chacun pointe la personne qui tient le moins l'alcool. La plus pointée boit 3 gorgées.",
      en: 'Everyone points at whoever holds their drink worst. Most-pointed drinks 3 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Chacun pointe la personne la plus susceptible d'envoyer un message qu'elle regrettera. Elle boit 2 gorgées.",
      en: 'Everyone points at who is most likely to send a text they will regret. They drink 2 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: 'Tour de table : chacun donne un mot pour décrire la soirée. Celui qui hésite boit.',
      en: 'Around the table: everyone gives one word to describe tonight. Whoever hesitates drinks.',
    },
  },

  // --- Règles ----------------------------------------------------------------
  {
    kind: 'rule',
    players: 0,
    duration: 6,
    text: {
      fr: 'Interdiction de dire "oui" et "non". Celui qui le dit boit 2 gorgées.',
      en: 'Nobody may say "yes" or "no". Whoever slips drinks 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 5,
    text: {
      fr: '{p1} est le roi ou la reine. Tout le monde doit dire "Votre Majesté" en lui parlant, sinon 1 gorgée.',
      en: '{p1} is king or queen. Everyone must say "Your Majesty" when speaking to them, or 1 sip.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 5,
    text: {
      fr: 'Interdiction de prononcer un prénom. Utilisez des surnoms. Erreur = 2 gorgées.',
      en: 'No first names allowed. Use nicknames. Slip up = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 4,
    text: {
      fr: 'Quand {p1} boit, tout le monde boit. Pression sociale maximale.',
      en: 'When {p1} drinks, everyone drinks. Maximum peer pressure.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 5,
    text: {
      fr: 'Tout le monde boit de la main non dominante. Oubli = 2 gorgées.',
      en: 'Everyone drinks with their non-dominant hand. Forgetting = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 4,
    text: {
      fr: "{p1} ne peut plus rire. Un sourire visible et c'est 2 gorgées.",
      en: '{p1} may not laugh. A visible smile costs 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 4,
    text: {
      fr: "Personne ne peut poser son verre par terre. Verre au sol = 2 gorgées.",
      en: 'Nobody may put their glass on the floor. Glass down = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 1,
    duration: 5,
    text: {
      fr: '{p1} doit terminer chaque phrase par "et je suis fier de moi". Oubli = 1 gorgée.',
      en: '{p1} must end every sentence with "and I am proud of myself". Forgetting = 1 sip.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 6,
    text: {
      fr: 'Interdiction de montrer du doigt. Utilisez le coude. Sinon, 2 gorgées.',
      en: 'No pointing with fingers. Use your elbow. Otherwise, 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 2,
    duration: 5,
    text: {
      fr: '{p1} et {p2} sont liés : quand l\'un boit, l\'autre boit aussi.',
      en: '{p1} and {p2} are linked: when one drinks, so does the other.',
    },
  },

  // --- Timers ----------------------------------------------------------------
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: '{p1} : cite 10 marques de vêtements en 30 secondes. Échec = 4 gorgées.',
      en: '{p1}: name 10 clothing brands in 30 seconds. Fail = 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: '{p1} : trouve 5 objets bleus dans la pièce avant la fin du chrono. Échec = 3 gorgées.',
      en: '{p1}: find 5 blue objects in the room before time runs out. Fail = 3 sips.',
    },
  },
  {
    kind: 'timer',
    players: 0,
    seconds: 45,
    text: {
      fr: 'Tout le monde : chacun son tour, citez un pays. 45 secondes. Celui qui bloque boit 4 gorgées.',
      en: 'Everyone: take turns naming a country. 45 seconds. Whoever gets stuck drinks 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 20,
    text: {
      fr: '{p1} : fais rire au moins une personne en 20 secondes, sinon 3 gorgées.',
      en: '{p1}: make at least one person laugh in 20 seconds, or 3 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: "{p1} : raconte ta journée en 30 secondes sans t'arrêter de parler. Blanc = 3 gorgées.",
      en: '{p1}: tell us about your day for 30 seconds without stopping. Silence = 3 sips.',
    },
  },
  {
    kind: 'timer',
    players: 2,
    seconds: 30,
    text: {
      fr: '{p1} et {p2} : citez chacun votre tour un animal, sans répétition. 30 secondes. Le premier qui bloque boit 3 gorgées.',
      en: '{p1} and {p2}: take turns naming animals, no repeats. 30 seconds. First to get stuck drinks 3 sips.',
    },
  },

  // --- Mini-jeux -------------------------------------------------------------
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: 'Je n\'ai jamais : {p1} lance. Ceux qui l\'ont déjà fait boivent.',
      en: 'Never have I ever: {p1} starts. Those who have done it drink.',
    },
  },
  {
    kind: 'minigame',
    players: 1,
    text: {
      fr: 'Le baccalauréat express : {p1} choisit une lettre. Chacun donne un prénom qui commence par cette lettre. Le premier qui bloque boit 3 gorgées.',
      en: 'Speed alphabet: {p1} picks a letter. Everyone names a first name starting with it. First to get stuck drinks 3 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: 'Le rythme : tout le monde tape des mains en rythme et cite une ville à tour de rôle. Hors rythme ou répétition = 2 gorgées.',
      en: 'The rhythm: everyone claps a beat and names a city in turn. Off-beat or repeat = 2 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 1,
    text: {
      fr: '{p1} choisit une catégorie (séries, plats, chanteurs). Tour de table jusqu\'à ce que quelqu\'un bloque : 3 gorgées.',
      en: '{p1} picks a category (shows, dishes, singers). Go around until someone gets stuck: 3 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: 'Vote à main levée : qui ferait le meilleur président de ce groupe ? Le perdant du vote boit 3 gorgées.',
      en: 'Show of hands: who would make the best president of this group? The loser of the vote drinks 3 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 2,
    text: {
      fr: '{p1} et {p2} : deux vérités et un mensonge chacun. Celui qui se fait démasquer boit 3 gorgées.',
      en: '{p1} and {p2}: two truths and a lie each. Whoever gets caught drinks 3 sips.',
    },
  },
])
