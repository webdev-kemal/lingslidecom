const words = [
  {
    title: "émousser",
    ranking: "421",
    phrases: [
      "se volvio para adelgazar un poco de mas",
      "ademas, se decidio a adelgazar sin ambargo",
    ],
    synonyms: ["amincir", "minorar"],
    antonyms: ["asd"],
    concurrences: ["asd"],
    meanings: ["asd"],
    in_english: "asd",
    register_difficulty: "familiar, any",
    type: "verb",
    verb_participe: "asd",
    verb_group: "regular",
    prefix: "de",
    suffix: "ion",
    gender: "feminine",
    expressions: ["a", "b"],
  },
  {
    title: "mépriser",
    phrases: [
      "Il ne faut pas mépriser les opinions différentes.",
      "Ses paroles pleines de mépris ont blessé profondément.",
    ],
    synonyms: ["dédaigner", "contemner"],
    antonyms: ["respecter", "admirer"],
    concurrences: ["acte de mépris", "regard méprisant"],
    meanings: {
      primary:
        "Manifester un sentiment de dédain, de dégoût ou de dévalorisation envers quelque chose ou quelqu'un.",
      secondary:
        "Peut également signifier ignorer délibérément ou sous-estimer la valeur ou l'importance de quelque chose.",
    },
    in_english: "To scorn, to disdain",
    register_difficulty: "familiar, any",
    type: "verb",
    verb_participe: "méprisé",
    verb_group: "regular",
    prefix: "null", // Assuming no prefix
    suffix: "null", // Assuming no suffix
    gender: "null", // Assuming no gender
    idioms: [
      "Mépriser quelqu'un du haut de sa suffisance",
      "Le mépris peut engendrer des conflits.",
    ],
  },
  {
    title: "frivolité",
    phrases: [
      "Sa vie était marquée par la frivolité et la légèreté.",
      "Certaines personnes confondent l'humour avec la frivolité.",
    ],
    synonyms: ["légèreté", "superficialité"],
    antonyms: ["sérieux", "profondeur"],
    concurrences: ["comportement frivole", "attitude légère"],
    meanings: {
      primary:
        "Caractère, attitude ou comportement marqué par la légèreté, la superficialité et le manque de sérieux.",
      secondary: null,
    },
    in_english: "Frivolity; Lightness, lack of seriousness",
    register_difficulty: "familiar, any",
    type: "noun",
    verb_participe: "null", // Assuming it's a noun
    verb_group: "null", // Assuming it's a noun
    prefix: "null", // Assuming no prefix
    suffix: "ité", // Assuming it ends with "ité"
    gender: "null", // Assuming no gender
    idioms: [
      "Éviter la frivolité dans les décisions importantes",
      "La frivolité peut parfois cacher des préoccupations plus profondes.",
    ],
  },
  {
    title: "retenue",
    phrases: [
      "Elle a fait preuve de retenue dans ses commentaires.",
      "La retenue d'impôts sera déduite de votre salaire.",
    ],
    synonyms: ["modération", "discrétion"],
    antonyms: ["impulsivité", "exagération"],
    concurrences: ["avoir de la retenue", "manquer de retenue"],
    meanings: {
      primary:
        "Qualité de modération, de discrétion ou de retenir ses émotions et ses actions.",
      secondary:
        "Peut également faire référence à une somme déduite ou retenue, notamment dans le contexte financier ou fiscal.",
    },
    in_english: "Restraint, moderation; Deduction, withholding",
    register_difficulty: "familiar, any",
    type: "noun",
    verb_participe: "null", // Assuming it's a noun
    verb_group: "null", // Assuming it's a noun
    prefix: "null", // Assuming no prefix
    suffix: "ue", // Assuming it ends with "ue"
    gender: "null", // Assuming no gender
    idioms: [
      "Faire preuve de retenue face à la critique",
      "La retenue d'impôts est calculée en fonction du revenu.",
    ],
  },
  {
    title: "tremper",
    ranking: 150, // Replace with the appropriate numerical ranking
    phrases: [
      "Il faut tremper le pain dans la soupe.",
      "Les aciers peuvent être trempés pour augmenter leur dureté.",
    ],
    synonyms: ["immerger", "plonger"],
    antonyms: ["essorer", "sécher"],
    concurrences: ["tremper dans l'eau", "tremper dans l'huile"],
    meanings: [
      "Plonger quelque chose dans un liquide; traiter un matériau comme l'acier avec un procédé spécifique pour lui conférer certaines propriétés, comme la dureté.",
    ],
    in_english: "To soak; To quench (steel)",
    register_difficulty: "familiar, any",
    type: "verb",
    verb_participe: "trempé",
    verb_group: "regular",
    prefix: "null", // Assuming no prefix
    suffix: "null", // Assuming no suffix
    gender: "null", // Assuming no gender
    idioms: ["Tremper son pain dans la soupe", "Tremper sa plume dans l'encre"],
  },
  {
    title: "sollicitude",
    ranking: 600, // Replace with the appropriate numerical ranking
    phrases: [
      "Il a montré une grande sollicitude envers ses collègues malades.",
      "La sollicitude de la mère était évidente dans chaque geste.",
    ],
    synonyms: ["attention", "bienveillance"],
    antonyms: ["indifférence", "négligence"],
    concurrences: ["sollicitude envers autrui", "sollicitude maternelle"],
    meanings: [
      "Un sentiment d'attention, de prévenance et de bienveillance envers autrui; manifestation de préoccupation et de soin.",
    ],
    in_english: "Solicitude, care, concern",
    register_difficulty: "formal, literary",
    type: "noun",
    verb_participe: "null", // Assuming it's a noun
    verb_group: "null", // Assuming it's a noun
    prefix: "null", // Assuming no prefix
    suffix: "null", // Assuming no suffix
    gender: "null", // Assuming no gender
    idioms: [
      "Montrer de la sollicitude envers les autres",
      "La sollicitude d'un ami sincère",
    ],
  },
  {
    title: "pétulance",
    ranking: 800, // Replace with the appropriate numerical ranking
    phrases: [
      "Sa pétulance était contagieuse; elle égayait toute la pièce.",
      "Il a montré une pétulance enfantine lors de la fête.",
    ],
    synonyms: ["entrain", "vivacité"],
    antonyms: ["apathie", "indifférence"],
    concurrences: ["énergie débordante", "enthousiasme"],
    meanings: [
      "Caractère vif, enjoué, souvent associé à une énergie débordante et à un enthousiasme enfantin.",
    ],
    in_english: "Liveliness, exuberance",
    register_difficulty: "formal, literary",
    type: "noun",
    verb_participe: "null", // Assuming it's a noun
    verb_group: "null", // Assuming it's a noun
    prefix: "null", // Assuming no prefix
    suffix: "null", // Assuming no suffix
    gender: "null", // Assuming no gender
    idioms: [
      "Sa pétulance illuminait la pièce.",
      "On admire sa pétulance contagieuse.",
    ],
  },
  {
    title: "calomnier",
    ranking: 700, // Replace with the appropriate numerical ranking
    phrases: [
      "Il ne faut pas calomnier sans preuves.",
      "Les rumeurs peuvent calomnier la réputation de quelqu'un.",
    ],
    synonyms: ["diffamer", "médiser"],
    antonyms: ["louer", "vanter"],
    concurrences: ["diffamation", "rumeur"],
    meanings: [
      "Faire une fausse accusation dans le but de nuire à la réputation de quelqu'un.",
    ],
    in_english: "To slander, to defame",
    register_difficulty: "formal",
    type: "verb",
    verb_participe: "calomnié",
    verb_group: "regular",
    prefix: "null", // Assuming no prefix
    suffix: "null", // Assuming no suffix
    gender: "null", // Assuming no gender
    idioms: [
      "Calomnier à tort et à travers ne mènera qu'à des ennuis.",
      "La calomnie est souvent le dernier recours des faibles.",
    ],
  },
  {
    title: "ériger",
    phrases: [
      "Ils ont décidé d'ériger un monument en l'honneur des héros de la guerre.",
      "La ville a été fondée en érigeant un fort sur la côte.",
    ],
    //make these green
    synonyms: ["élever", "construire"],
    //make these red bg badge
    antonyms: ["démolir", "détruire"],
    concurrences: ["ériger un monument", "ériger une structure"],
    meanings: {
      primary:
        "Élever, construire, fonder quelque chose de manière imposante ou significative, souvent en référence à des monuments, des structures, ou des institutions.",
      secondary: null,
    },
    in_english: "To erect, to build",
    register_difficulty: "formal, any",
    type: "verb",
    verb_participe: "érigé",
    verb_group: "regular",
    prefix: "null", // Assuming no prefix
    suffix: "null", // Assuming no suffix
    gender: "null", // Assuming no gender
    idioms: [
      "Ériger un mémorial pour commémorer les événements historiques",
      "La société a été fondée en érigeant des principes forts.",
    ],
    nominal_form: null,
  },
  {
    title: "discrétion",
    phrases: [
      "Il a agi avec discrétion pour ne pas attirer l'attention.",
      "La discrétion est souvent appréciée dans les affaires confidentielles.",
    ],
    synonyms: ["prudence", "réservé"],
    antonyms: ["indiscrétion", "ostentation"],
    concurrences: ["faire preuve de discrétion", "garder la discrétion"],
    meanings: {
      primary:
        "Qualité de celui qui agit avec prudence, réserve, et qui sait préserver la confidentialité ou le secret.",
      secondary: null,
    },
    in_english: "Discretion",
    register_difficulty: "formal, any",
    type: "noun",
    verb_participe: "null", // Assuming it's a noun
    verb_group: "null", // Assuming it's a noun
    prefix: "null", // Assuming no prefix
    suffix: "tion", // Assuming it ends with "tion"
    gender: "null", // Assuming no gender
    idioms: [
      "Faire preuve de discrétion dans les affaires professionnelles",
      "La discrétion est parfois plus puissante que l'ostentation.",
    ],
  },
];

export default words;
