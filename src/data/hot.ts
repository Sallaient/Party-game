import { deck } from './helpers'

/**
 * Hot pack (18+): flirty and suggestive, never explicit.
 * Every physical dare has a stated way out, because "pass" has to stay free.
 */
export const hot = deck('hot', 'ht', [
  // --- Questions -------------------------------------------------------------
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : quel est ton plus gros red flag en rencard ? Réponds ou bois 4 gorgées.',
      en: '{p1}: what is your biggest dating red flag? Answer or drink 4 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : raconte ton pire premier rendez-vous. Si le groupe grimace, tout le monde boit.",
      en: '{p1}: tell us about your worst first date. If the group winces, everyone drinks.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quel est le compliment qui te fait le plus d'effet ? Réponds ou 4 gorgées.",
      en: '{p1}: which compliment gets to you the most? Answer or 4 sips.',
    },
  },
  {
    kind: 'question',
    players: 2,
    text: {
      fr: "{p1} : cite trois qualités de {p2} qui pourraient te faire craquer. Refus = 4 gorgées.",
      en: '{p1}: name three things about {p2} that could win you over. Refusing = 4 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : as-tu déjà eu un crush sur quelqu'un présent ce soir ? Tu peux répondre par un clin d'œil ou boire 5 gorgées.",
      en: '{p1}: have you ever had a crush on someone here tonight? You may answer with a wink or drink 5 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quel est le message le plus osé que tu aies envoyé ? Version résumée acceptée. Refus = 4 gorgées.",
      en: '{p1}: what is the boldest message you have ever sent? Summary accepted. Refusing = 4 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: '{p1} : à quel âge as-tu eu ton premier baiser, et avec quel niveau de catastrophe ?',
      en: '{p1}: how old were you at your first kiss, and how much of a disaster was it?',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quelle est la chose la plus romantique qu'on ait faite pour toi ? Le groupe juge. Trop fade = 3 gorgées.",
      en: '{p1}: what is the most romantic thing anyone has done for you? The group judges. Too bland = 3 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : ton dealbreaker absolu ? Ceux qui cochent la case boivent 3 gorgées.",
      en: '{p1}: your absolute dealbreaker? Anyone guilty of it drinks 3 sips.',
    },
  },
  {
    kind: 'question',
    players: 2,
    text: {
      fr: "{p1} : sur une échelle de 1 à 10, à quel point {p2} est-il ou elle ton type ? Une gorgée par point manquant, pour {p2}.",
      en: '{p1}: on a scale of 1 to 10, how much is {p2} your type? {p2} drinks one sip per missing point.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quel est ton plus gros mensonge raconté à un ex ? Refus = 4 gorgées.",
      en: '{p1}: what is the biggest lie you told an ex? Refusing = 4 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : combien de personnes ici pourraient te draguer avec succès ? Le chiffre suffit. Une gorgée par personne.",
      en: '{p1}: how many people here could successfully flirt with you? The number is enough. One sip per person.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : ta technique de drague la plus embarrassante ? Fais-la sur quelqu'un du groupe. Refus = 4 gorgées.",
      en: '{p1}: your most embarrassing flirting move? Try it on someone here. Refusing = 4 sips.',
    },
  },
  {
    kind: 'question',
    players: 1,
    text: {
      fr: "{p1} : quel est le truc le plus improbable qui te fait craquer chez quelqu'un ?",
      en: '{p1}: what is the most unlikely thing that makes you fall for someone?',
    },
  },

  // --- Actions ---------------------------------------------------------------
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} murmure quelque chose à l'oreille de {p2}. Si {p2} rougit, tout le monde boit 2 gorgées.",
      en: '{p1} whispers something in {p2}\'s ear. If {p2} blushes, everyone drinks 2 sips.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: '{p1} fait un compliment très, très appuyé à {p2}. Si {p2} ne trouve rien à répondre, {p2} boit 3 gorgées.',
      en: '{p1} gives {p2} a very, very heavy compliment. If {p2} has no comeback, {p2} drinks 3 sips.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} et {p2} : regard intense pendant 15 secondes, sans un mot. Le premier qui craque boit 4 gorgées.",
      en: '{p1} and {p2}: intense eye contact for 15 seconds, not a word. First to crack drinks 4 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : envoie un message de drague ridicule à un contact au hasard. Refus = 5 gorgées.",
      en: '{p1}: send a ridiculous flirty message to a random contact. Refusing = 5 sips.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} : donne un massage d'épaules de 20 secondes à {p2}. Si l'un des deux refuse, il boit 3 gorgées.",
      en: '{p1}: give {p2} a 20-second shoulder massage. If either says no, they drink 3 sips.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : imite la façon dont tu dragues quand tu as trop bu. Le groupe note sur 10. Moins de 5 = 3 gorgées.",
      en: '{p1}: demonstrate how you flirt when you have had too much. The group scores out of 10. Under 5 = 3 sips.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} : décris {p2} en trois mots, dont un que tu n'oserais pas dire sobre.",
      en: '{p1}: describe {p2} in three words, one of which you would not dare say sober.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : lis à voix haute ton dernier message reçu d'une personne qui te plaît. Refus = 5 gorgées.",
      en: '{p1}: read out the last message you got from someone you like. Refusing = 5 sips.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} et {p2} : slow de 20 secondes au milieu de la pièce. Refus = 4 gorgées chacun.",
      en: '{p1} and {p2}: 20-second slow dance in the middle of the room. Refusing = 4 sips each.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : choisis la personne du groupe avec qui tu partirais en week-end. Explique. Les autres boivent 1 gorgée de jalousie.",
      en: '{p1}: pick who here you would go away for a weekend with. Explain. Everyone else drinks 1 jealous sip.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} : raconte à {p2} le scénario du film romantique dont vous seriez les héros. {p2} note la fin.",
      en: '{p1}: pitch {p2} the rom-com you two would star in. {p2} rates the ending.',
    },
  },
  {
    kind: 'action',
    players: 1,
    text: {
      fr: "{p1} : fais ton meilleur regard séducteur à la caméra frontale. Screenshot obligatoire, sinon 3 gorgées.",
      en: '{p1}: give your best seductive look to the front camera. Screenshot required, or 3 sips.',
    },
  },
  {
    kind: 'action',
    players: 2,
    text: {
      fr: "{p1} et {p2} : échangez un secret à voix basse. Personne d'autre ne doit entendre. Refus = 4 gorgées.",
      en: '{p1} and {p2}: swap a secret in a whisper. Nobody else may hear. Refusing = 4 sips.',
    },
  },

  // --- Duels & groupe --------------------------------------------------------
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: '{p1} contre {p2} : concours de phrases de drague. Le groupe désigne la pire, qui boit 4 gorgées.',
      en: '{p1} versus {p2}: pick-up line contest. The group picks the worst, who drinks 4 sips.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: "{p1} et {p2} : celui qui a le plus de conversations non lues sur ses applis boit 4 gorgées.",
      en: '{p1} and {p2}: whoever has more unread conversations in their apps drinks 4 sips.',
    },
  },
  {
    kind: 'duel',
    players: 2,
    text: {
      fr: "{p1} et {p2} : celui qui a eu le plus de rendez-vous ratés cette année distribue 4 gorgées. Vous avez le droit de mentir.",
      en: '{p1} and {p2}: whoever had more failed dates this year hands out 4 sips. Lying allowed.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà envoyé un message qu'il regrette encore boit 3 gorgées.",
      en: 'Everyone who has sent a message they still regret drinks 3 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà stalké un ex cette semaine boit 3 gorgées. On sait.",
      en: 'Everyone who has stalked an ex this week drinks 3 sips. We know.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà embrassé quelqu'un présent dans cette pièce boit 4 gorgées. Silence gênant garanti.",
      en: 'Everyone who has kissed someone in this room drinks 4 sips. Awkward silence guaranteed.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Chacun pointe la personne la plus susceptible de partir accompagnée ce soir. La plus pointée boit 3 gorgées.",
      en: 'Everyone points at who is most likely to leave with someone tonight. Most-pointed drinks 3 sips.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Chacun pointe le plus grand dragueur du groupe. Une gorgée par doigt pointé.",
      en: 'Everyone points at the group\'s biggest flirt. One sip per finger pointed.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui est célibataire boit 2 gorgées. Tout le monde qui ne l'est pas en boit 3. Personne n'est épargné.",
      en: 'Everyone single drinks 2 sips. Everyone taken drinks 3. Nobody is spared.',
    },
  },
  {
    kind: 'group',
    players: 0,
    text: {
      fr: "Tout le monde qui a déjà menti sur ses sentiments boit 3 gorgées.",
      en: 'Everyone who has ever lied about their feelings drinks 3 sips.',
    },
  },

  // --- Règles & timers -------------------------------------------------------
  {
    kind: 'rule',
    players: 1,
    duration: 5,
    text: {
      fr: '{p1} doit appeler tout le monde "mon amour" jusqu\'à la fin de cette règle. Oubli = 2 gorgées.',
      en: '{p1} must call everyone "my love" until this rule ends. Forgetting = 2 sips.',
    },
  },
  {
    kind: 'rule',
    players: 2,
    duration: 5,
    text: {
      fr: '{p1} et {p2} sont en couple pour les 5 prochains tours. Toute dispute publique = 2 gorgées chacun.',
      en: '{p1} and {p2} are a couple for the next 5 turns. Any public argument = 2 sips each.',
    },
  },
  {
    kind: 'rule',
    players: 0,
    duration: 6,
    text: {
      fr: 'Nouvelle règle : chaque compliment doit être rendu, sinon celui qui reste muet boit 2 gorgées.',
      en: 'New rule: every compliment must be returned, otherwise whoever stays silent drinks 2 sips.',
    },
  },
  {
    kind: 'timer',
    players: 1,
    seconds: 30,
    text: {
      fr: "{p1} : sors trois phrases de drague en 30 secondes. Le groupe doit rire au moins une fois, sinon 4 gorgées.",
      en: '{p1}: deliver three pick-up lines in 30 seconds. The group must laugh at least once, or 4 sips.',
    },
  },
  {
    kind: 'timer',
    players: 2,
    seconds: 30,
    text: {
      fr: '{p1} : convaincs {p2} de sortir avec toi en 30 secondes. Échec = 4 gorgées pour toi.',
      en: '{p1}: convince {p2} to go out with you in 30 seconds. Fail = 4 sips for you.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "Action ou vérité : {p1} choisit. Le groupe décide du gage. Refus = 5 gorgées, toujours possible.",
      en: 'Truth or dare: {p1} chooses. The group sets it. Refusing = 5 sips, always an option.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "Je n'ai jamais, version chaude : {p1} lance. Ceux qui l'ont fait boivent 2 gorgées.",
      en: 'Never have I ever, spicy edition: {p1} starts. Those who have done it drink 2 sips.',
    },
  },
  {
    kind: 'minigame',
    players: 0,
    text: {
      fr: "Le marché : chacun annonce ce qu'il échangerait contre un rendez-vous parfait. Le moins convaincant boit 3 gorgées.",
      en: 'The trade: everyone says what they would give up for a perfect date. The least convincing drinks 3 sips.',
    },
  },
])
