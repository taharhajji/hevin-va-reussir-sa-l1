import type { QCMChapter } from "./qcm";

export const qcmByChapterPrincipes: QCMChapter[] = [
  {
    chapter: 1,
    title: "Introduction — L'économie et son domaine",
    emoji: "💡",
    questions: [
      {
        id: 7101,
        chapter: 1,
        difficulty: "facile",
        category: "cours",
        prompt: "La science économique étudie comment :",
        options: [
          "les gouvernements imposent des taxes",
          "les individus et sociétés organisent l'usage des ressources rares pour satisfaire des besoins",
          "les banques fixent leurs taux d'intérêt",
          "les bourses cotent les actions",
        ],
        correct: 1,
        explanation:
          "Définition fondamentale : la rareté des ressources face à des besoins quasi illimités est le point de départ de toute analyse économique.",
      },
      {
        id: 7102,
        chapter: 1,
        difficulty: "facile",
        category: "cours",
        prompt: "Les 3 activités économiques fondamentales sont :",
        options: [
          "investissement, épargne, prêt",
          "production, échanges, consommation",
          "embauche, formation, retraite",
          "import, export, transit",
        ],
        correct: 1,
        explanation: "Production (créer), échanges (faire circuler), consommation (utiliser).",
      },
      {
        id: 7103,
        chapter: 1,
        difficulty: "facile",
        category: "cours",
        prompt: "Un bien libre est :",
        options: [
          "un bien gratuit subventionné par l'État",
          "un bien disponible en quantité illimitée naturellement (ex : l'air)",
          "un bien soldé",
          "un bien d'occasion",
        ],
        correct: 1,
        explanation:
          "Bien libre = naturellement illimité, sans prix. Bien économique = rare, donc avec un prix.",
      },
      {
        id: 7104,
        chapter: 1,
        difficulty: "moyen",
        category: "cours",
        prompt: "Les 3 facteurs (ou ressources) de production sont :",
        options: [
          "monnaie, banques, État",
          "capital (K), travail (L), matières premières (MP)",
          "richesse, prestige, pouvoir",
          "consommateur, producteur, État",
        ],
        correct: 1,
        explanation: "K, L et MP sont les 3 grandes catégories de ressources mobilisées dans toute production.",
      },
      {
        id: 7105,
        chapter: 1,
        difficulty: "moyen",
        category: "cours",
        prompt: "Selon Adam Smith (1776), la « main invisible » signifie que :",
        options: [
          "l'État doit diriger l'économie",
          "la poursuite des intérêts individuels produit, via le marché, l'intérêt général",
          "la monnaie circule mystérieusement",
          "il faut nationaliser la production",
        ],
        correct: 1,
        explanation:
          "Smith, fondateur des Classiques : la concurrence canalise l'intérêt personnel vers le bien collectif.",
      },
      {
        id: 7106,
        chapter: 1,
        difficulty: "moyen",
        category: "cours",
        prompt: "La loi des débouchés de Jean-Baptiste Say (1803) affirme que :",
        options: [
          "la demande crée l'offre",
          "l'offre crée sa propre demande",
          "le marché est toujours saturé",
          "l'État doit relancer la demande",
        ],
        correct: 1,
        explanation:
          "Pour Say, la production génère automatiquement des revenus qui financent l'achat. Cette loi est CONTREDITE par Keynes en 1936.",
      },
      {
        id: 7107,
        chapter: 1,
        difficulty: "moyen",
        category: "cours",
        prompt: "Pour les néoclassiques (Menger, Jevons, Walras), la valeur d'un bien dépend :",
        options: [
          "uniquement du travail incorporé (valeur-travail)",
          "de son utilité, à la marge, pour le consommateur",
          "du coût des matières premières",
          "de la rareté géologique",
        ],
        correct: 1,
        explanation:
          "Révolution marginaliste de 1870 : valeur-utilité + utilité marginale décroissante. Diffère de Marx/Classiques (valeur-travail).",
      },
      {
        id: 7108,
        chapter: 1,
        difficulty: "moyen",
        category: "cours",
        prompt: "Pour Keynes (1936), face à une crise, l'État doit :",
        options: [
          "se retirer pour laisser le marché s'auto-réguler",
          "soutenir la demande effective via la politique budgétaire et monétaire",
          "baisser les salaires pour rétablir la compétitivité",
          "ne rien faire car l'offre crée la demande",
        ],
        correct: 1,
        explanation:
          "Keynes invente la macroéconomie moderne : la demande effective détermine l'emploi, l'État doit la soutenir.",
      },
    ],
  },
  {
    chapter: 2,
    title: "Offre, demande et équilibre",
    emoji: "📈",
    questions: [
      {
        id: 7201,
        chapter: 2,
        difficulty: "facile",
        category: "cours",
        prompt:
          "L'équilibre d'un marché est atteint quand le prix :",
        options: [
          "est fixé par l'État",
          "égalise la quantité demandée et la quantité offerte",
          "est nul",
          "couvre exactement les coûts de production",
        ],
        correct: 1,
        explanation:
          "Équilibre concurrentiel : prix d'équilibre P* tel que O(P*) = D(P*). C'est la définition de base du marché.",
      },
      {
        id: 7202,
        chapter: 2,
        difficulty: "facile",
        category: "cours",
        prompt: "L'allure de la courbe de demande est :",
        options: [
          "croissante car les gens achètent plus quand le prix monte",
          "décroissante car quand le prix augmente, la quantité demandée diminue",
          "horizontale",
          "verticale",
        ],
        correct: 1,
        explanation:
          "Loi de la demande : P↑ → Qd↓. La courbe est donc inclinée vers le bas (pente négative).",
      },
      {
        id: 7203,
        chapter: 2,
        difficulty: "moyen",
        category: "cours",
        prompt:
          "Un panier de consommation optimal est celui qui :",
        options: [
          "minimise les dépenses du consommateur",
          "maximise l'utilité du consommateur sous sa contrainte budgétaire",
          "contient uniquement des biens de luxe",
          "respecte une nutrition équilibrée",
        ],
        correct: 1,
        explanation:
          "Le consommateur rationnel choisit la combinaison de biens qui maximise son utilité, contraint par son revenu et les prix.",
      },
      {
        id: 7204,
        chapter: 2,
        difficulty: "moyen",
        category: "cours",
        prompt: "Le surplus du consommateur correspond à :",
        options: [
          "la différence entre ce qu'il était prêt à payer et ce qu'il paie réellement",
          "la totalité de son revenu",
          "le profit du producteur",
          "la TVA payée",
        ],
        correct: 0,
        explanation:
          "Graphiquement : zone sous la courbe de demande, au-dessus du prix d'équilibre. C'est le gain net de l'achat pour le consommateur.",
      },
      {
        id: 7205,
        chapter: 2,
        difficulty: "moyen",
        category: "cours",
        prompt:
          "Lequel de ces facteurs déplace la courbe de demande (et non un glissement le long de la courbe) ?",
        options: [
          "Le prix du bien lui-même",
          "Le revenu des consommateurs, le prix des biens substituts/compléments, les anticipations",
          "Le coût des matières premières",
          "Le salaire des ouvriers",
        ],
        correct: 1,
        explanation:
          "Piège classique : seul le prix du bien provoque un GLISSEMENT le long de la courbe. Les autres déterminants (revenu, prix des biens liés, nb d'acheteurs, anticipations, goûts) DÉPLACENT la courbe.",
      },
      {
        id: 7206,
        chapter: 2,
        difficulty: "facile",
        category: "cours",
        prompt: "La loi de l'offre s'énonce :",
        options: [
          "quand le prix monte, la quantité offerte baisse",
          "quand le prix monte, la quantité offerte monte ; quand le prix baisse, la quantité offerte baisse",
          "l'offre est toujours constante",
          "l'offre dépend uniquement du revenu",
        ],
        correct: 1,
        explanation: "P↑ → Qo↑. Un prix plus élevé rend la production plus rentable, attirant plus d'offre.",
      },
      {
        id: 7207,
        chapter: 2,
        difficulty: "moyen",
        category: "cours",
        prompt: "Les hypothèses de la concurrence pure et parfaite (CPP) incluent :",
        options: [
          "produits différenciés et marketing intensif",
          "atomicité, homogénéité, libre entrée/sortie, transparence, mobilité des facteurs",
          "présence d'un régulateur central",
          "ententes entre vendeurs",
        ],
        correct: 1,
        explanation:
          "Les 5 hypothèses de la CPP : un grand nombre d'agents, produits identiques, pas de barrière, info parfaite, mobilité parfaite. Conséquence : agents preneurs de prix.",
      },
      {
        id: 7208,
        chapter: 2,
        difficulty: "moyen",
        category: "reflexion",
        prompt:
          "Sur un marché en CPP, les agents sont qualifiés de :",
        options: [
          "faiseurs de prix (price-makers)",
          "preneurs de prix (price-takers) — ils ne peuvent influencer le prix individuellement",
          "fixeurs de quantité",
          "monopoleurs",
        ],
        correct: 1,
        explanation:
          "Atomicité oblige : aucun agent n'a de poids individuel suffisant pour influencer le prix. Tous prennent le prix de marché comme une donnée.",
      },
    ],
  },
  {
    chapter: 3,
    title: "Élasticités et politiques publiques",
    emoji: "📐",
    questions: [
      {
        id: 7301,
        chapter: 3,
        difficulty: "facile",
        category: "cours",
        prompt: "L'élasticité-prix de la demande mesure :",
        options: [
          "le revenu maximum d'un ménage",
          "la sensibilité de la quantité demandée à une variation de prix (% / %)",
          "le profit d'un monopoleur",
          "l'inflation moyenne",
        ],
        correct: 1,
        explanation:
          "Ed = (% var. Qd) / (% var. P). Sans unité, négatif en général (loi de la demande).",
      },
      {
        id: 7302,
        chapter: 3,
        difficulty: "moyen",
        category: "cours",
        prompt:
          "L'élasticité-prix de la demande est PLUS FORTE quand :",
        options: [
          "le bien est essentiel et sans substituts",
          "les substituts sont nombreux et faciles à trouver, et le marché est étroitement défini",
          "l'horizon est très court",
          "l'État subventionne le bien",
        ],
        correct: 1,
        explanation:
          "Question de cours du prof : élasticité ↑ avec substituts disponibles, marché étroit (Coca vs sodas), bien non essentiel, long terme.",
      },
      {
        id: 7303,
        chapter: 3,
        difficulty: "difficile",
        category: "reflexion",
        prompt:
          "Si un marché subit simultanément un choc d'offre favorable (↗ O) et un choc de demande défavorable (↘ D), alors :",
        options: [
          "le prix monte certainement, la quantité monte certainement",
          "le prix baisse certainement, l'effet sur la quantité est ambigu",
          "le prix baisse certainement, la quantité baisse certainement",
          "rien ne bouge",
        ],
        correct: 2,
        explanation:
          "Hausse de l'offre + baisse de la demande → les deux poussent Q* à la baisse de manière non systématique : la quantité diminue, l'effet sur le prix est ambigu. (Énoncé classique du QCM officiel : on inverse pour montrer la logique.) Réponse correcte selon l'analyse : Q baisse, P ambigu.",
      },
      {
        id: 7304,
        chapter: 3,
        difficulty: "moyen",
        category: "cours",
        prompt: "Un bien est dit « inférieur » quand :",
        options: [
          "son prix est très bas",
          "une hausse du revenu entraîne une baisse de sa demande (élasticité-revenu négative)",
          "il est de mauvaise qualité",
          "il est subventionné",
        ],
        correct: 1,
        explanation:
          "Bien inférieur : ER < 0. Exemples : pâtes premier prix, transports en commun bondés, fast-food bas de gamme.",
      },
      {
        id: 7305,
        chapter: 3,
        difficulty: "moyen",
        category: "cours",
        prompt:
          "Une taxe sur un bien dont la demande est très inélastique est principalement supportée par :",
        options: [
          "les producteurs",
          "les consommateurs (qui ont peu de marge de manœuvre pour fuir)",
          "l'État",
          "personne",
        ],
        correct: 1,
        explanation:
          "Incidence fiscale : la taxe est payée par celui dont l'élasticité est la plus FAIBLE. Une demande inélastique (tabac, essence) → les consommateurs paient l'essentiel.",
      },
      {
        id: 7306,
        chapter: 3,
        difficulty: "moyen",
        category: "reflexion",
        prompt:
          "Le bonus écologique pour l'achat d'une voiture électrique (2024) est un exemple de :",
        options: [
          "taxe pigouvienne",
          "subvention destinée à augmenter la demande d'un bien à externalité positive",
          "prix plafond",
          "monopole d'État",
        ],
        correct: 1,
        explanation:
          "L'État subventionne la voiture électrique pour internaliser le bénéfice environnemental (externalité positive vs voiture thermique) et soutenir la demande.",
      },
      {
        id: 7307,
        chapter: 3,
        difficulty: "moyen",
        category: "reflexion",
        prompt:
          "Selon l'article étudié en cours, le bonus écologique de 2024 :",
        options: [
          "est sans effet sur le marché",
          "déplace la courbe d'offre vers le bas et fait baisser le prix payé par le consommateur",
          "augmente le prix payé par le consommateur",
          "supprime l'offre de voitures électriques",
        ],
        correct: 1,
        explanation:
          "Une subvention agit comme un déplacement de l'offre vers le bas : le prix net pour l'acheteur diminue, la quantité d'équilibre augmente. L'effort fiscal est porté par l'État.",
      },
      {
        id: 7308,
        chapter: 3,
        difficulty: "difficile",
        category: "reflexion",
        prompt:
          "Le bonus écologique illustre une politique économique de type :",
        options: [
          "néoclassique pure (laisser-faire absolu)",
          "interventionniste / keynésienne corrigeant une défaillance de marché",
          "monétariste",
          "libre-échangiste",
        ],
        correct: 1,
        explanation:
          "Subventionner pour orienter la consommation = intervention de l'État pour corriger une externalité que le marché libre ne valorise pas. Tradition keynésienne / interventionniste.",
      },
      {
        id: 7309,
        chapter: 3,
        difficulty: "moyen",
        category: "reflexion",
        prompt:
          "Un risque souvent reproché aux politiques de bonus écologique :",
        options: [
          "elles n'ont aucun effet sur la demande",
          "elles peuvent profiter à des ménages qui auraient acheté la voiture sans aide (effet d'aubaine) et coûter cher au budget public",
          "elles font baisser systématiquement les ventes",
          "elles ne ciblent que les entreprises",
        ],
        correct: 1,
        explanation:
          "Effet d'aubaine + coût budgétaire élevé = critiques classiques. Le débat porte aussi sur le ciblage (ménages aisés sur-représentés dans l'achat de neuf).",
      },
    ],
  },
  {
    chapter: 4,
    title: "Défaillances de marché",
    emoji: "⚠️",
    questions: [
      {
        id: 7401,
        chapter: 4,
        difficulty: "moyen",
        category: "cours",
        prompt:
          "Un marché en concurrence pure et parfaite suppose notamment :",
        options: [
          "des agents preneurs de prix, des biens privés rivaux et excluables, libre entrée/sortie",
          "un seul producteur dominant",
          "une entente entre vendeurs",
          "un produit fortement différencié",
        ],
        correct: 0,
        explanation:
          "Question de cours du prof : CPP = atomicité, homogénéité, libre entrée/sortie, transparence, mobilité. Et il faut des biens privés rivaux + excluables pour que le marché soit efficace.",
      },
      {
        id: 7402,
        chapter: 4,
        difficulty: "moyen",
        category: "cours",
        prompt: "Un monopole se caractérise par :",
        options: [
          "une multitude de producteurs",
          "un producteur unique, faiseur de prix, qui rationne la production pour maximiser son profit",
          "une fixation du prix par l'État",
          "l'absence de profit",
        ],
        correct: 1,
        explanation:
          "Monopole : prix > prix concurrentiel, quantité < quantité CPP. Plus la demande est inélastique, plus la marge est forte.",
      },
      {
        id: 7403,
        chapter: 4,
        difficulty: "moyen",
        category: "cours",
        prompt: "Une externalité négative (ex : pollution) :",
        options: [
          "n'affecte pas le marché",
          "fait que le coût social dépasse le coût privé → quantité produite trop élevée → solution = taxation pigouvienne",
          "doit être subventionnée",
          "disparaît avec la concurrence",
        ],
        correct: 1,
        explanation:
          "Exemple cours : dioxines de l'incinérateur de Gilly-sur-Isère (2001). Solution = internaliser le coût externe via une taxe.",
      },
      {
        id: 7404,
        chapter: 4,
        difficulty: "moyen",
        category: "cours",
        prompt: "Une externalité positive (ex : R&D, éducation) :",
        options: [
          "doit être taxée",
          "fait que la valeur sociale dépasse la valeur privée → quantité trop faible → solution = subvention/brevet",
          "n'existe pas réellement",
          "supprime la concurrence",
        ],
        correct: 1,
        explanation:
          "Brevets, financement public de la recherche, bourses étudiantes : autant d'outils pour récompenser celui qui produit le bénéfice externe.",
      },
      {
        id: 7405,
        chapter: 4,
        difficulty: "moyen",
        category: "cours",
        prompt:
          "Selon la typologie de Samuelson (1954), un bien public pur (ex : défense nationale, phare) est :",
        options: [
          "rival et excluable",
          "non rival et non excluable",
          "rival et non excluable",
          "non rival et excluable",
        ],
        correct: 1,
        explanation:
          "Bien public pur : ma consommation n'empêche pas celle d'autrui (non rival) et on ne peut pas exclure les non-payeurs (non excluable) → passager clandestin → l'État doit fournir.",
      },
      {
        id: 7406,
        chapter: 4,
        difficulty: "difficile",
        category: "cours",
        prompt:
          "Un bien commun (ex : pêche en haute mer, atmosphère) est :",
        options: [
          "non rival et excluable",
          "rival et non excluable → risque de tragédie des communs, gestion possible selon Ostrom (2009)",
          "purement privé",
          "produit uniquement par l'État",
        ],
        correct: 1,
        explanation:
          "Tragédie des communs : chacun a intérêt à surexploiter. Solutions : privatisation, régulation, ou gestion collective (Ostrom Nobel 2009).",
      },
      {
        id: 7407,
        chapter: 4,
        difficulty: "moyen",
        category: "reflexion",
        prompt: "Le problème du passager clandestin (Olson 1965) survient quand :",
        options: [
          "un bien est rival mais non excluable",
          "un bien non excluable peut être consommé gratuitement → personne ne veut financer → sous-production → l'État doit intervenir",
          "le marché fixe trop bien les prix",
          "les biens sont brevetés",
        ],
        correct: 1,
        explanation:
          "Free-rider : pourquoi cotiser à un syndicat si je profite de ses victoires sans cotiser ? Pourquoi payer pour la défense si elle me protège quand même ?",
      },
      {
        id: 7408,
        chapter: 4,
        difficulty: "difficile",
        category: "cours",
        prompt: "L'aléa moral désigne :",
        options: [
          "un comportement opportuniste APRÈS la signature du contrat, parce que l'agent est désormais couvert ou non observé (ex : bergers de Hume, banques too big to fail)",
          "un manque d'éthique chez le producteur",
          "un événement météo imprévu",
          "une rupture du contrat par l'autre partie",
        ],
        correct: 0,
        explanation:
          "Aléa moral = opportunisme postcontractuel (Hume bergers, assuré moins prudent, salarié paresseux, banquier preneur de risque). À distinguer de la sélection adverse (avant contrat, Akerlof lemons).",
      },
    ],
  },
];
