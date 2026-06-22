import type { ExerciseSection } from "./exercises";

export const exerciseSectionsPrincipes: ExerciseSection[] = [
  {
    slug: "elasticites",
    title: "Élasticités",
    emoji: "📐",
    intro:
      "L'élasticité = variation **en %** d'une variable / variation **en %** d'une autre. Toujours raisonner en pourcentages, jamais en unités.",
    formula: "E = \\frac{\\Delta Q / Q}{\\Delta P / P}",
    exercises: [
      {
        id: "elast-1",
        title: "Élasticité-prix de la demande",
        emoji: "💸",
        category: "Élasticité-prix",
        prompt:
          "Le prix d'un bien passe de **10 €** à **12 €**. La quantité demandée passe de **200** à **170** unités.\n\nCalcule l'élasticité-prix de la demande et dis si elle est élastique ou inélastique.",
        hint: "Calcule d'abord les deux variations en %, puis fais le rapport. Le signe est normalement négatif.",
        steps: [
          "Variation du prix : (12 − 10) / 10 = **+20 %**",
          "Variation de la quantité : (170 − 200) / 200 = −30/200 = **−15 %**",
          "Ed = (−15 %) / (+20 %) = **−0,75**",
          "|Ed| = 0,75 **< 1** → demande **inélastique** (la quantité réagit peu au prix).",
        ],
        answer: "Ed = −0,75 → demande inélastique",
      },
      {
        id: "elast-2",
        title: "Élasticité-revenu (le piège du bien inférieur)",
        emoji: "💰",
        category: "Élasticité-revenu",
        prompt:
          "Le revenu d'un ménage augmente de **1 500 €** à **1 800 €**. Sa consommation de pâtes premier prix passe de **50** à **45** paquets.\n\nCalcule l'élasticité-revenu et qualifie le bien.",
        hint: "ER = % variation de la demande / % variation du revenu. Attention au signe !",
        steps: [
          "Variation du revenu : (1 800 − 1 500) / 1 500 = **+20 %**",
          "Variation de la demande : (45 − 50) / 50 = **−10 %**",
          "ER = (−10 %) / (+20 %) = **−0,5**",
          "ER **< 0** → c'est un **bien inférieur** : quand le revenu monte, on en consomme moins.",
        ],
        answer: "ER = −0,5 → bien inférieur",
      },
      {
        id: "elast-3",
        title: "Élasticité croisée",
        emoji: "🧈",
        category: "Élasticité croisée",
        prompt:
          "Le prix du **beurre** augmente de **10 %**. La demande de **margarine** augmente alors de **8 %**.\n\nCalcule l'élasticité-prix croisée et dis si les deux biens sont substituts ou compléments.",
        hint: "Exy = % variation de la demande de X / % variation du prix de Y. Le signe donne la nature du lien.",
        steps: [
          "Exy = (+8 %) / (+10 %) = **+0,8**",
          "Exy **> 0** → quand le prix du beurre monte, on achète plus de margarine.",
          "Les deux biens sont donc des **substituts** (mémo : Positif = Pareils).",
        ],
        answer: "Exy = +0,8 → biens substituts",
      },
    ],
  },
  {
    slug: "equilibre",
    title: "Équilibre de marché",
    emoji: "⚖️",
    intro:
      "L'équilibre se trouve là où **offre = demande**. On résout l'égalité Qd = Qo pour trouver le prix d'équilibre P*, puis on réinjecte pour trouver la quantité Q*.",
    formula: "Q_d(P^*) = Q_o(P^*)",
    exercises: [
      {
        id: "eq-1",
        title: "Trouver le prix et la quantité d'équilibre",
        emoji: "🎯",
        category: "Équilibre — calcul",
        prompt:
          "Sur un marché : **Demande** Qd = 120 − 3P et **Offre** Qo = −30 + 2P (P en €).\n\nTrouve le prix d'équilibre P* et la quantité d'équilibre Q*.",
        hint: "Pose Qd = Qo et résous pour P, puis remplace dans l'une des deux équations.",
        steps: [
          "On pose Qd = Qo : 120 − 3P = −30 + 2P",
          "120 + 30 = 2P + 3P → 150 = 5P → **P\\* = 30 €**",
          "Q\\* = 120 − 3 × 30 = 120 − 90 = **30 unités**",
          "Vérification avec l'offre : Qo = −30 + 2 × 30 = −30 + 60 = 30 ✓",
        ],
        answer: "P* = 30 € et Q* = 30 unités",
      },
      {
        id: "eq-2",
        title: "Effet d'un choc d'offre défavorable",
        emoji: "📉",
        category: "Équilibre — choc",
        prompt:
          "Reprenons Qd = 120 − 3P. À la suite d'une **hausse des coûts**, l'offre devient Qo = −50 + 2P.\n\nQuel est le nouvel équilibre ? Le prix et la quantité ont-ils monté ou baissé par rapport à P* = 30, Q* = 30 ?",
        hint: "Même méthode : Qd = nouvelle Qo. Puis compare avec l'équilibre initial.",
        steps: [
          "120 − 3P = −50 + 2P → 170 = 5P → **P\\* = 34 €**",
          "Q\\* = 120 − 3 × 34 = 120 − 102 = **18 unités**",
          "Le prix **monte** (30 → 34) et la quantité **baisse** (30 → 18).",
          "Logique : un choc d'offre défavorable déplace l'offre vers la gauche → prix↑, quantité↓.",
        ],
        answer: "P* = 34 €, Q* = 18 → prix↑, quantité↓",
      },
    ],
  },
  {
    slug: "surplus",
    title: "Surplus du consommateur et du producteur",
    emoji: "🎁",
    intro:
      "Les surplus se calculent comme des **aires de triangles**. Surplus du consommateur = aire sous la demande au-dessus de P*. Surplus du producteur = aire au-dessus de l'offre sous P*.",
    formula: "SC = \\tfrac{1}{2} \\times Q^* \\times (P_{max} - P^*)",
    exercises: [
      {
        id: "surplus-1",
        title: "Calcul des surplus à l'équilibre",
        emoji: "📐",
        category: "Surplus — aires",
        prompt:
          "On reprend Qd = 120 − 3P et Qo = −30 + 2P, avec l'équilibre **P* = 30, Q* = 30**.\n\n1) Quel est le prix maximum que le consommateur est prêt à payer (prix d'arrêt de la demande) ?\n2) Quel est le prix minimum de l'offre ?\n3) Calcule le surplus du consommateur, du producteur, puis le surplus total.",
        hint: "Prix d'arrêt de la demande = P quand Qd = 0. Prix minimum de l'offre = P quand Qo = 0.",
        steps: [
          "Prix max (Qd = 0) : 0 = 120 − 3P → P = **40 €**",
          "Prix min (Qo = 0) : 0 = −30 + 2P → P = **15 €**",
          "Surplus consommateur = ½ × Q\\* × (40 − 30) = ½ × 30 × 10 = **150**",
          "Surplus producteur = ½ × Q\\* × (30 − 15) = ½ × 30 × 15 = **225**",
          "Surplus total = 150 + 225 = **375**",
        ],
        answer: "SC = 150, SP = 225, Surplus total = 375",
      },
    ],
  },
  {
    slug: "optimum",
    title: "Optimum du consommateur",
    emoji: "🧮",
    intro:
      "À l'optimum, le consommateur égalise l'utilité marginale **par euro dépensé** sur chaque bien. Sinon, il peut améliorer son sort en réallouant son budget.",
    formula: "\\frac{Um_x}{P_x} = \\frac{Um_y}{P_y}",
    exercises: [
      {
        id: "opt-1",
        title: "Suis-je à l'optimum ?",
        emoji: "🍕",
        category: "Optimum — diagnostic",
        prompt:
          "Léa consomme des pizzas et des sodas. Pour la dernière unité : **Um(pizza) = 12**, **P(pizza) = 3 €** ; **Um(soda) = 8**, **P(soda) = 2 €**.\n\nEst-elle à l'optimum ? Sinon, que doit-elle faire ?",
        hint: "Compare Um/P pour chaque bien.",
        steps: [
          "Pizza : Um/P = 12 / 3 = **4**",
          "Soda : Um/P = 8 / 2 = **4**",
          "Les deux rapports sont **égaux** (4 = 4) → Léa **est déjà à l'optimum**.",
          "Chaque euro dépensé lui rapporte la même utilité, quel que soit le bien : aucune réallocation n'améliore son sort.",
        ],
        answer: "Oui, elle est à l'optimum (Um/P = 4 pour les deux biens)",
      },
      {
        id: "opt-2",
        title: "Réallouer le budget",
        emoji: "📊",
        category: "Optimum — réallocation",
        prompt:
          "Pour la dernière unité : **Um(X) = 30**, **P(X) = 5 €** ; **Um(Y) = 16**, **P(Y) = 4 €**.\n\nLe consommateur est-il à l'optimum ? Vers quel bien doit-il réorienter sa consommation ?",
        hint: "Le bien dont le rapport Um/P est le plus ÉLEVÉ rapporte plus par euro → on en consomme davantage.",
        steps: [
          "Bien X : Um/P = 30 / 5 = **6**",
          "Bien Y : Um/P = 16 / 4 = **4**",
          "6 ≠ 4 → **pas à l'optimum**.",
          "Le bien X rapporte plus par euro (6 > 4) → il faut **consommer plus de X et moins de Y**.",
          "En consommant plus de X, Um(X) baisse (utilité marginale décroissante) jusqu'à ce que les rapports s'égalisent.",
        ],
        answer: "Pas à l'optimum → consommer plus de X (Um/P = 6 > 4)",
      },
    ],
  },
  {
    slug: "marx",
    title: "Marx : plus-value et taux de profit",
    emoji: "⚒️",
    intro:
      "Chez Marx, la valeur d'une marchandise s'écrit **V = c + v + pl** (capital constant + capital variable + plus-value). On en déduit le taux d'exploitation et le taux de profit.",
    formula: "\\text{taux de plus-value} = \\frac{pl}{v} \\quad ; \\quad \\text{taux de profit} = \\frac{pl}{c+v}",
    exercises: [
      {
        id: "marx-1",
        title: "Le taux de plus-value (exploitation)",
        emoji: "⏱️",
        category: "Plus-value",
        prompt:
          "Un ouvrier travaille **8 heures** par jour. Son salaire ne couvre en réalité que **5 heures** de travail (le reste finance le capital variable v).\n\nQuelle est la plus-value (surtravail) et le taux de plus-value ?",
        hint: "Le surtravail = heures travaillées non payées. Taux de plus-value = pl / v.",
        steps: [
          "Travail nécessaire (payé, v) = 5 h ; surtravail (plus-value, pl) = 8 − 5 = **3 h**",
          "Taux de plus-value = pl / v = 3 / 5 = **0,6 = 60 %**",
          "Interprétation : l'ouvrier travaille 60 % de temps en plus de ce que couvre son salaire — c'est le taux d'exploitation selon Marx.",
        ],
        answer: "Plus-value = 3 h ; taux de plus-value = 60 %",
      },
      {
        id: "marx-2",
        title: "Taux de profit vs taux d'exploitation",
        emoji: "🏭",
        category: "Taux de profit",
        prompt:
          "Une entreprise : capital constant **c = 200**, capital variable **v = 100**, plus-value **pl = 80**.\n\nCalcule le taux de plus-value et le taux de profit. Pourquoi diffèrent-ils ?",
        hint: "Taux de plus-value = pl/v ; taux de profit = pl/(c+v).",
        steps: [
          "Taux de plus-value = pl / v = 80 / 100 = **80 %**",
          "Taux de profit = pl / (c + v) = 80 / (200 + 100) = 80 / 300 ≈ **26,7 %**",
          "Le taux de profit est plus faible car il rapporte la plus-value à **tout** le capital avancé (c + v), pas seulement au travail.",
          "💡 Marx : quand c augmente (mécanisation), le taux de profit tend à baisser → « baisse tendancielle du taux de profit ».",
        ],
        answer: "Taux de plus-value = 80 % ; taux de profit ≈ 26,7 %",
      },
    ],
  },
  {
    slug: "biens",
    title: "Classer les biens & défaillances",
    emoji: "⚠️",
    intro:
      "On classe les biens selon **deux critères** (Samuelson 1954) : la **rivalité** (ma conso prive-t-elle autrui ?) et l'**excluabilité** (peut-on empêcher l'accès ?). Puis on identifie la défaillance et le remède.",
    formula: "\\text{Rivalité} \\times \\text{Excluabilité} \\Rightarrow 4 \\text{ types de biens}",
    exercises: [
      {
        id: "biens-1",
        title: "À chaque bien son type",
        emoji: "🗂️",
        category: "Typologie de Samuelson",
        prompt:
          "Classe chacun de ces biens (privé / de club / commun / public pur) :\n\n1) une **glace** · 2) la **défense nationale** · 3) un abonnement **Netflix** · 4) la **pêche en haute mer**.",
        hint: "Pour chaque bien, demande-toi : est-il rival ? est-il excluable ?",
        steps: [
          "**Glace** : rivale (si je la mange, plus personne) + excluable (il faut payer) → **bien privé**",
          "**Défense nationale** : non rivale + non excluable (protège tout le monde) → **bien public pur**",
          "**Netflix** : non rival (mon visionnage n'empêche pas le tien) + excluable (abonnement) → **bien de club**",
          "**Pêche en haute mer** : rivale (un poisson pêché en moins) + non excluable → **bien commun** (risque de tragédie des communs)",
        ],
        answer: "Privé / Public pur / De club / Commun",
      },
      {
        id: "biens-2",
        title: "Externalité : diagnostic et remède",
        emoji: "💉",
        category: "Externalités",
        prompt:
          "Pour chacune, dis si l'externalité est positive ou négative, et quel remède l'État peut utiliser :\n\n1) une **usine** rejette des fumées toxiques · 2) un particulier se fait **vacciner**.",
        hint: "Externalité négative → coût social > coût privé. Positive → valeur sociale > valeur privée.",
        steps: [
          "**Usine** : externalité **négative** (coût social > coût privé, surproduction). Remède : **taxe pigouvienne** (ou réglementation, ou négociation de Coase).",
          "**Vaccination** : externalité **positive** (protège aussi les autres, valeur sociale > valeur privée, sous-production). Remède : **subvention** (vaccin gratuit/remboursé).",
          "Principe général : on **internalise** l'externalité — faire payer celui qui nuit, récompenser celui qui profite à la collectivité.",
        ],
        answer: "1) négative → taxe ; 2) positive → subvention",
      },
    ],
  },
];
