import type { Lang } from '../types'

/** UI copy. Card content lives in src/data and is localized separately. */
export const STRINGS = {
  appName: { fr: 'Soirée', en: 'Soirée' },
  tagline: {
    fr: 'Un téléphone. Toute la table. Aucune pitié.',
    en: 'One phone. The whole table. No mercy.',
  },

  play: { fr: 'Jouer', en: 'Play' },
  continue: { fr: 'Continuer', en: 'Continue' },
  back: { fr: 'Retour', en: 'Back' },
  next: { fr: 'Suivant', en: 'Next' },
  done: { fr: 'Terminé', en: 'Done' },
  cancel: { fr: 'Annuler', en: 'Cancel' },
  save: { fr: 'Enregistrer', en: 'Save' },
  delete: { fr: 'Supprimer', en: 'Delete' },
  close: { fr: 'Fermer', en: 'Close' },

  // Home
  homeStart: { fr: 'Commencer', en: 'Start' },
  homePlayers: { fr: 'Joueurs', en: 'Players' },
  homePacks: { fr: 'Modes de jeu', en: 'Game packs' },
  homeCustom: { fr: 'Mes cartes', en: 'My cards' },
  homeSettings: { fr: 'Réglages', en: 'Settings' },
  homeHowTo: { fr: 'Comment on joue ?', en: 'How does it work?' },
  howToBody: {
    fr: "Posez le téléphone au milieu de la table. Une personne lit la carte à voix haute, le groupe exécute, puis on tape pour passer à la suivante. Les prénoms des joueurs apparaissent directement dans les cartes.",
    en: 'Put the phone in the middle of the table. One person reads the card out loud, the group does it, then tap for the next one. Player names appear right inside the cards.',
  },
  howToSafety: {
    fr: "Personne n'est obligé de faire quoi que ce soit : passer une carte est toujours une option. Buvez responsable, hydratez-vous, et ne conduisez pas.",
    en: 'Nobody has to do anything: skipping a card is always allowed. Drink responsibly, stay hydrated, and do not drive.',
  },

  // Players
  playersTitle: { fr: 'Qui joue ce soir ?', en: 'Who is playing tonight?' },
  playersSubtitle: {
    fr: 'Ajoutez au moins 2 joueurs. Leurs prénoms apparaîtront dans les cartes.',
    en: 'Add at least 2 players. Their names will show up inside the cards.',
  },
  playersPlaceholder: { fr: 'Prénom', en: 'First name' },
  playersAdd: { fr: 'Ajouter', en: 'Add' },
  playersNeedTwo: { fr: 'Il faut au moins 2 joueurs.', en: 'You need at least 2 players.' },
  playersDuplicate: { fr: 'Ce prénom est déjà pris.', en: 'That name is already taken.' },
  // Counted nouns, paired singular/plural. French takes the singular for 0 and
  // 1 ("0 joueur"), English only for 1 ("0 players").
  unitPlayerOne: { fr: 'joueur', en: 'player' },
  unitPlayerMany: { fr: 'joueurs', en: 'players' },
  unitPackOne: { fr: 'mode', en: 'pack' },
  unitPackMany: { fr: 'modes', en: 'packs' },
  unitCardOne: { fr: 'carte', en: 'card' },
  unitCardMany: { fr: 'cartes', en: 'cards' },

  // Packs
  packsTitle: { fr: 'Modes de jeu', en: 'Game packs' },
  packsSubtitle: {
    fr: 'Choisissez un ou plusieurs paquets. Les cartes sont mélangées ensemble.',
    en: 'Pick one or more packs. Their cards get shuffled together.',
  },
  packsNeedOne: { fr: 'Choisissez au moins un mode.', en: 'Pick at least one pack.' },
  packsEmptyCustom: {
    fr: 'Aucune carte perso pour le moment.',
    en: 'No custom cards yet.',
  },
  // Game
  gameTapToContinue: { fr: 'Touchez pour la suite', en: 'Tap for the next card' },
  gameRules: { fr: 'Règles en cours', en: 'Active rules' },
  gameTurnsLeft: { fr: 'tours', en: 'turns' },
  gameWholeGame: { fr: 'toute la partie', en: 'whole game' },
  gameReveal: { fr: 'Voir la réponse', en: 'Reveal the answer' },
  gameAnswer: { fr: 'Réponse', en: 'Answer' },
  gameQuit: { fr: 'Quitter la partie', en: 'Quit game' },
  gameQuitConfirm: {
    fr: 'Quitter la partie en cours ?',
    en: 'Quit the current game?',
  },
  gameCardCount: { fr: 'Carte', en: 'Card' },
  gameStartTimer: { fr: 'Lancer le chrono', en: 'Start timer' },
  gameTimerDone: { fr: "Temps écoulé !", en: "Time's up!" },
  gameSkip: { fr: 'Passer', en: 'Skip' },
  gameEmptyDeck: {
    fr: "Aucune carte jouable avec ces réglages. Ajoutez un mode ou des joueurs.",
    en: 'No playable cards with these settings. Add a pack or more players.',
  },

  // Card kind labels
  kindAction: { fr: 'Action', en: 'Action' },
  kindQuestion: { fr: 'Question', en: 'Question' },
  kindDuel: { fr: 'Duel', en: 'Duel' },
  kindGroup: { fr: 'Tout le monde', en: 'Everyone' },
  kindRule: { fr: 'Nouvelle règle', en: 'New rule' },
  kindTimer: { fr: 'Chrono', en: 'Timer' },
  kindMinigame: { fr: 'Mini-jeu', en: 'Mini game' },

  // Custom cards
  customTitle: { fr: 'Mes cartes', en: 'My cards' },
  customSubtitle: {
    fr: "Écrivez vos propres cartes. Utilisez {p1}, {p2} pour insérer des prénoms au hasard.",
    en: 'Write your own cards. Use {p1}, {p2} to drop in random player names.',
  },
  customNew: { fr: 'Nouvelle carte', en: 'New card' },
  customEdit: { fr: 'Modifier la carte', en: 'Edit card' },
  customTextLabel: { fr: 'Texte de la carte', en: 'Card text' },
  customTextPlaceholder: {
    fr: '{p1} boit 3 gorgées et raconte pourquoi.',
    en: '{p1} drinks 3 sips and explains why.',
  },
  customKindLabel: { fr: 'Type', en: 'Type' },
  customRevealLabel: { fr: 'Réponse (optionnel)', en: 'Answer (optional)' },
  customRevealPlaceholder: {
    fr: 'Cachée derrière un bouton pendant la partie.',
    en: 'Hidden behind a button during the game.',
  },
  customDurationHint: {
    fr: 'Laissez à 0 pour une règle qui dure toute la partie.',
    en: 'Leave at 0 for a rule that lasts the whole game.',
  },
  customDurationLabel: { fr: 'Durée (tours)', en: 'Duration (turns)' },
  customSecondsLabel: { fr: 'Chrono (secondes)', en: 'Timer (seconds)' },
  customInsertName: { fr: 'Insérer un prénom', en: 'Insert a name' },
  customEmpty: {
    fr: "Vous n'avez pas encore écrit de carte. C'est le moment.",
    en: 'You have not written a card yet. Now is the time.',
  },
  customNeedText: { fr: 'Écrivez le texte de la carte.', en: 'Write the card text.' },
  customDeleteConfirm: { fr: 'Supprimer cette carte ?', en: 'Delete this card?' },
  customPlaceholderHint: {
    fr: 'Les cartes perso ne sont pas traduites : elles apparaissent telles quelles.',
    en: 'Custom cards are not translated: they appear exactly as written.',
  },

  // Settings
  settingsTitle: { fr: 'Réglages', en: 'Settings' },
  settingsPrefs: { fr: 'Préférences', en: 'Preferences' },
  settingsLang: { fr: 'Langue', en: 'Language' },
  settingsHaptics: { fr: 'Vibrations', en: 'Haptics' },
  settingsHapticsHint: {
    fr: 'Petite vibration à chaque nouvelle carte.',
    en: 'A short buzz on every new card.',
  },
  settingsReset: { fr: 'Tout réinitialiser', en: 'Reset everything' },
  settingsResetConfirm: {
    fr: 'Effacer joueurs, cartes perso et réglages ?',
    en: 'Erase players, custom cards and settings?',
  },
  settingsInstall: { fr: "Installer l'application", en: 'Install the app' },
  settingsInstallHint: {
    fr: "Ajoutez Soirée à votre écran d'accueil pour jouer hors ligne.",
    en: 'Add Soirée to your home screen to play offline.',
  },
  settingsAbout: { fr: 'À propos', en: 'About' },
  settingsAboutBody: {
    fr: "Jeu de soirée hors ligne. Aucune donnée ne quitte votre téléphone.",
    en: 'An offline party game. No data ever leaves your phone.',
  },
} as const

export type StringKey = keyof typeof STRINGS

export function tr(key: StringKey, lang: Lang): string {
  return STRINGS[key][lang]
}
