export type Exercise = {
  id: string;
  title: string;
  emoji: string;
  category: string;
  prompt: string; // markdown
  hint?: string;
  steps: string[]; // each step is markdown for the solution
  answer: string;
};

export type ExerciseSection = {
  slug: string;
  title: string;
  emoji: string;
  intro: string;
  formula?: string;
  exercises: Exercise[];
};

export const exerciseSections: ExerciseSection[] = [
  {
    slug: "va",
    title: "Valeur ajoutée",
    emoji: "🎯",
    intro: "Calcule la VA = Production − Consommations Intermédiaires.\n\n⚠️ Salaires, impôts, machines durables ne sont **PAS** des CI.",
    formula: "VA = P - CI",
    exercises: [
      {
        id: "va-1",
        title: "Pur Jus",
        emoji: "🍊",
        category: "VA — industrie",
        prompt:
          "1 million de bouteilles vendues à 0,50 €. CI : emballages 32 000 + fruits 76 000 + électricité 7 000. Salaires : 120 000.\n\nCalcule la VA.",
        hint: "Production = quantité × prix. Salaires hors CI.",
        steps: [
          "Production = 1 000 000 × 0,50 = **500 000 €**",
          "CI = 32 000 + 76 000 + 7 000 = **115 000 €** (les salaires ne comptent pas)",
          "VA = 500 000 − 115 000 = **385 000 €**",
        ],
        answer: "385 000 €",
      },
      {
        id: "va-2",
        title: "Boulanger",
        emoji: "🥖",
        category: "VA — piège FBCF/salaires",
        prompt:
          "Le boulanger a vendu pour 240 000 € de pains. Achats : 60 000 € de farine, 18 000 € d'électricité, 10 000 € de levure, 6 000 € d'emballages. Salaires versés : 75 000 €. Impôts : 12 000 €. Achat d'un four : 30 000 € (durée de vie 8 ans).\n\nCalcule la VA.",
        hint: "Le four (8 ans) est de la FBCF, pas une CI. Salaires et impôts hors CI.",
        steps: [
          "CI = farine + électricité + levure + emballages = 60 000 + 18 000 + 10 000 + 6 000 = **94 000 €**",
          "Salaires (75 000), impôts (12 000), four (30 000 → FBCF) → tous **hors CI**",
          "VA = 240 000 − 94 000 = **146 000 €**",
        ],
        answer: "146 000 €",
      },
      {
        id: "va-3",
        title: "Société de conseil",
        emoji: "💼",
        category: "VA — services",
        prompt:
          "Société de conseil. Prestations facturées : 500 000 €. Loyers : 60 000 €. Abonnements logiciels : 40 000 €. Salaires : 200 000 €.\n\nCalcule la VA.",
        hint: "Loyers et abonnements sont consommés sur la période → CI. Salaires hors CI.",
        steps: [
          "CI = 60 000 + 40 000 = **100 000 €**",
          "Salaires hors CI",
          "VA = 500 000 − 100 000 = **400 000 €**",
        ],
        answer: "400 000 €",
      },
    ],
  },
  {
    slug: "re",
    title: "Équilibre Ressources-Emplois",
    emoji: "🧩",
    intro:
      "Identité fondamentale : **P + M = C + CI + FBCF + X**.\n\nRessources (P + M) = Emplois (C + CI + FBCF + X). Toujours !",
    formula: "P + M = C + CI + FBCF + X",
    exercises: [
      {
        id: "re-1",
        title: "Voituristan",
        emoji: "🏎️",
        category: "Vérification + solde",
        prompt:
          "P = 1 800 ; M = 700 ; C = 1 650 ; CI = 200 ; FBCF = 400 ; X = 250.\n\n1) Vérifie l'équilibre. 2) Calcule le solde commercial. 3) Pays exportateur ou importateur net ?",
        steps: [
          "Ressources = 1 800 + 700 = **2 500**",
          "Emplois = 1 650 + 200 + 400 + 250 = **2 500** ✓",
          "Solde commercial = X − M = 250 − 700 = **−450 → déficit**",
          "PIB = P − CI = 1 600. C + FBCF = 2 050. PIB < C + FBCF → **importateur net**",
        ],
        answer: "Équilibre OK. Déficit de −450. Pays importateur net.",
      },
      {
        id: "re-2",
        title: "Calcul de X",
        emoji: "🔍",
        category: "Variable manquante",
        prompt:
          "P = 2 000 ; M = 600 ; C = 1 700 ; CI = 250 ; FBCF = 450.\n\nCalcule X et déduis le solde commercial.",
        steps: [
          "P + M = C + CI + FBCF + X",
          "2 000 + 600 = 1 700 + 250 + 450 + X",
          "2 600 = 2 400 + X",
          "**X = 200**",
          "Solde = X − M = 200 − 600 = **−400 → déficit**",
        ],
        answer: "X = 200. Solde = −400 → déficit.",
      },
      {
        id: "re-3",
        title: "Pays excédentaire",
        emoji: "📤",
        category: "Calcul de FBCF",
        prompt:
          "P = 4 000 ; M = 800 ; C = 2 500 ; CI = 500 ; X = 1 200. Calcule FBCF et le solde.",
        steps: [
          "4 000 + 800 = 2 500 + 500 + FBCF + 1 200",
          "4 800 = 4 200 + FBCF",
          "**FBCF = 600**",
          "Solde = X − M = 1 200 − 800 = **+400 → excédent**",
        ],
        answer: "FBCF = 600. Solde = +400 → excédent.",
      },
    ],
  },
  {
    slug: "deflater",
    title: "Déflater le PIB",
    emoji: "📐",
    intro:
      "Le PIB nominal mélange variation des quantités ET de l'inflation. Le PIB réel élimine l'inflation. \n\n**Astuce** : on **divise** par le CM prix, on ne soustrait pas !",
    formula: "CM_{volume} = \\frac{CM_{valeur}}{CM_{prix}}",
    exercises: [
      {
        id: "def-1",
        title: "Croissance réelle simple",
        emoji: "📈",
        category: "PIB nominal vs réel",
        prompt:
          "PIB nominal de 100 (N) → 110 (N+1). Inflation entre N et N+1 : 4 %.\n\nCalcule le PIB réel en N+1 et le taux de croissance réel.",
        steps: [
          "$CM_{valeur} = 110 / 100 = 1{,}10$",
          "$CM_{prix} = 1{,}04$",
          "$CM_{volume} = 1{,}10 / 1{,}04 \\approx 1{,}0577$",
          "PIB réel N+1 = 110 / 1,04 ≈ **105,77** (en prix de N)",
          "Taux de croissance réel ≈ **+5,77 %** (vs +10 % nominal)",
        ],
        answer: "PIB réel ≈ 105,77. Croissance réelle ≈ +5,77 %.",
      },
      {
        id: "def-2",
        title: "Croissance négative en réel",
        emoji: "📉",
        category: "Récession masquée",
        prompt:
          "PIB nominal : 250 (N) → 260 (N+1). Inflation : 6 %.\n\nCalcule la croissance réelle.",
        hint: "Si inflation > variation nominale, le PIB réel baisse !",
        steps: [
          "$CM_{valeur} = 260 / 250 = 1{,}04$",
          "$CM_{prix} = 1{,}06$",
          "$CM_{volume} = 1{,}04 / 1{,}06 \\approx 0{,}981$",
          "TV réel ≈ **−1,9 %** → **récession en termes réels** malgré une hausse nominale.",
        ],
        answer: "Croissance réelle ≈ −1,9 % → récession.",
      },
      {
        id: "def-3",
        title: "Croissance moyenne sur 2 ans",
        emoji: "🎯",
        category: "Géométrique",
        prompt:
          "Le PIB est multiplié par 1,21 sur 2 ans. Quelle est la **croissance annuelle moyenne** ?",
        hint: "Pour n années, CM annuel = (CM total)^(1/n). Ce n'est pas la moyenne arithmétique.",
        steps: [
          "$CM_{annuel} = \\sqrt{1{,}21} = 1{,}10$",
          "TV annuel = (1,10 − 1) × 100 = **+10 %** par an",
        ],
        answer: "+10 % par an",
      },
    ],
  },
  {
    slug: "salaire",
    title: "Salaire réel & pouvoir d'achat",
    emoji: "💰",
    intro:
      "Le salaire **nominal** est sur ta fiche de paie. Le **réel** est ajusté de l'inflation.",
    formula: "\\text{Salaire réel final} = \\frac{\\text{Salaire nominal final}}{CM_{prix}}",
    exercises: [
      {
        id: "sal-1",
        title: "Perte de pouvoir d'achat",
        emoji: "📉",
        category: "Hausse nominale < inflation",
        prompt:
          "Salaire 2 500 €/mois en 2021. Hausse nominale 2 % en 2022. Inflation 6 %.\n\nCalcule le salaire réel 2022.",
        steps: [
          "Salaire nominal 2022 = 2 500 × 1,02 = **2 550 €**",
          "Salaire réel 2022 = 2 550 / 1,06 ≈ **2 405 €**",
          "TV réel ≈ −3,8 % → **perte de pouvoir d'achat**",
        ],
        answer: "Salaire réel ≈ 2 405 € (perte ≈ −3,8 %)",
      },
      {
        id: "sal-2",
        title: "Gain de pouvoir d'achat",
        emoji: "📈",
        category: "Hausse > inflation",
        prompt:
          "Salaire 1 800 €. Hausse nominale 5 %, inflation 2 %.\n\nCalcule le salaire réel.",
        steps: [
          "Salaire réel = 1 800 × (1,05 / 1,02) ≈ 1 800 × 1,0294 ≈ **1 853 €**",
          "Gain ≈ **+2,9 %** de pouvoir d'achat",
        ],
        answer: "≈ 1 853 €. Gain ≈ +2,9 %.",
      },
      {
        id: "sal-3",
        title: "Indexation parfaite",
        emoji: "⚖️",
        category: "Stabilité",
        prompt: "Hausse nominale 4 %, inflation 4 %. Le pouvoir d'achat évolue-t-il ?",
        steps: [
          "$CM_{réel} = 1{,}04 / 1{,}04 = 1$",
          "→ **Pouvoir d'achat inchangé**.",
          "C'est la situation où le salaire est parfaitement indexé sur l'inflation.",
        ],
        answer: "Pouvoir d'achat inchangé.",
      },
    ],
  },
  {
    slug: "uc",
    title: "Niveau de vie (UC)",
    emoji: "👨‍👩‍👧",
    intro: "On ne compare pas les revenus à l'effectif brut : un foyer fait des économies d'échelle. Échelle INSEE/OCDE :",
    formula: "\\text{Niveau de vie} = \\frac{\\text{Revenu disponible}}{\\text{Nombre d'UC}}",
    exercises: [
      {
        id: "uc-1",
        title: "Couple + 2 enfants",
        emoji: "🏠",
        category: "UC standard",
        prompt:
          "Couple + 2 enfants (8 et 17 ans). Revenu 50 000 €.\n\nCalcule le niveau de vie par UC.",
        hint: "1ᵉʳ adulte = 1 ; autre ≥ 14 ans = 0,5 ; enfant < 14 ans = 0,3.",
        steps: [
          "UC = 1 (1er adulte) + 0,5 (2e adulte) + 0,5 (ado 17 ans ≥ 14) + 0,3 (enfant 8 ans < 14) = **2,3**",
          "Niveau de vie = 50 000 / 2,3 ≈ **21 739 €/UC**",
        ],
        answer: "≈ 21 739 €/UC",
      },
      {
        id: "uc-2",
        title: "Famille monoparentale",
        emoji: "👩‍👧‍👦",
        category: "UC avec jeunes enfants",
        prompt:
          "1 adulte + 3 enfants (4, 7, 12 ans). Revenu 30 000 €.\n\nCalcule le niveau de vie.",
        steps: [
          "Tous les enfants ont moins de 14 ans → 0,3 chacun",
          "UC = 1 + 0,3 + 0,3 + 0,3 = **1,9**",
          "Niveau de vie = 30 000 / 1,9 ≈ **15 789 €/UC**",
        ],
        answer: "≈ 15 789 €/UC",
      },
      {
        id: "uc-3",
        title: "Comparaison de foyers",
        emoji: "⚖️",
        category: "Lecture inverse",
        prompt:
          "Foyer A : 1 adulte, revenu 25 000 €. Foyer B : 2 adultes + 1 enfant (10 ans), revenu 50 000 €.\n\nLequel a le meilleur niveau de vie ?",
        steps: [
          "A : UC = 1 → niveau de vie = **25 000 €/UC**",
          "B : UC = 1 + 0,5 + 0,3 = 1,8 → niveau de vie = 50 000 / 1,8 ≈ **27 778 €/UC**",
          "→ **B vit mieux**, malgré 3 personnes au lieu de 1.",
        ],
        answer: "B (27 778 €/UC vs 25 000 €/UC).",
      },
    ],
  },
  {
    slug: "multi",
    title: "Multiplicateur keynésien",
    emoji: "✨",
    intro:
      "Le multiplicateur amplifie l'effet d'une dépense initiale.\n\n⚠️ **Pmc en valeur décimale** dans la formule (0,8 et pas 80 %).",
    formula: "k = \\frac{1}{1 - Pmc} \\quad ; \\quad \\Delta Y = I \\times k",
    exercises: [
      {
        id: "mult-1",
        title: "Calcul du multiplicateur",
        emoji: "🔢",
        category: "Pmc → k",
        prompt: "Pmc = 0,8. Calcule k.",
        steps: ["k = 1 / (1 − 0,8) = 1 / 0,2 = **5**"],
        answer: "k = 5",
      },
      {
        id: "mult-2",
        title: "À partir de Pms",
        emoji: "🪙",
        category: "Pms → Pmc → k",
        prompt: "Pms = 0,3. Calcule Pmc et k.",
        steps: [
          "Pmc = 1 − 0,3 = **0,7**",
          "k = 1 / (1 − 0,7) = 1 / 0,3 ≈ **3,33**",
        ],
        answer: "Pmc = 0,7 ; k ≈ 3,33",
      },
      {
        id: "mult-3",
        title: "Effet d'une commande publique",
        emoji: "🏗️",
        category: "Avec effet d'éviction",
        prompt:
          "L'État commande 200 Md€ de travaux publics. Pmc = 0,75.\n\n1) Calcule k.\n2) Effet maximal sur le PIB ?\n3) Avec effet d'éviction réduisant à 60 % du théorique, quel est l'effet réel ?",
        steps: [
          "k = 1 / (1 − 0,75) = 1 / 0,25 = **4**",
          "ΔY théorique = 200 × 4 = **800 Md€**",
          "Effet réel = 800 × 0,6 = **480 Md€**",
        ],
        answer: "k = 4 ; ΔY = 800 ; effet réel = 480 Md€",
      },
      {
        id: "mult-4",
        title: "Lecture inverse",
        emoji: "🔄",
        category: "Trouver Pmc",
        prompt:
          "Une commande publique de 50 Md€ génère 250 Md€ de PIB supplémentaire. Quelle est la Pmc ?",
        steps: [
          "k = 250 / 50 = **5**",
          "1 / (1 − Pmc) = 5 → 1 − Pmc = 1/5 = 0,2 → **Pmc = 0,8**",
        ],
        answer: "Pmc = 0,8",
      },
    ],
  },
  {
    slug: "bale",
    title: "Ratio prudentiel (Bâle)",
    emoji: "🏦",
    intro:
      "Les banques doivent garder un coussin de fonds propres face à leurs engagements (prêts).",
    formula: "\\frac{\\text{Fonds propres}}{\\text{Engagements}} \\geq 8\\%",
    exercises: [
      {
        id: "bale-1",
        title: "Capacité de prêt",
        emoji: "💰",
        category: "Calcul du plafond",
        prompt: "Une banque a 150 M€ de fonds propres. Quel est le plafond de ses prêts ?",
        steps: ["150 / 0,08 = **1 875 M€** (ou 150 × 12,5)"],
        answer: "1 875 M€",
      },
      {
        id: "bale-2",
        title: "Lecture inverse",
        emoji: "🔄",
        category: "Trouver les fonds propres",
        prompt:
          "Une banque a 4 000 M€ de prêts en cours. De combien de fonds propres a-t-elle besoin au minimum ?",
        steps: ["Fonds propres = 4 000 × 0,08 = **320 M€**"],
        answer: "320 M€",
      },
      {
        id: "bale-3",
        title: "Création monétaire",
        emoji: "✨",
        category: "Effet net sur la masse monétaire",
        prompt:
          "Tu déposes 1 000 € sur ton compte. La banque accorde un crédit de 5 000 € à un autre client. Effet net sur la masse monétaire ?",
        steps: [
          "Le dépôt de 1 000 € ne crée rien : c'est un transfert.",
          "Le crédit de 5 000 € **crée** 5 000 € de monnaie scripturale **ex nihilo**.",
          "Effet net : **+5 000 €** sur la masse monétaire.",
          "Quand le crédit sera remboursé, la monnaie sera détruite.",
        ],
        answer: "+5 000 €",
      },
    ],
  },
];

import { exerciseSectionsTr } from "./exercises.tr";
export const exerciseSectionsByLang = { fr: exerciseSections, tr: exerciseSectionsTr } as const;
