import type { ExerciseSection } from "./exercises";

// Sections supplémentaires d'exercices pour la macro — niveau 2 et thèmes
// non couverts (inflation, inégalités). Concaténées au tableau principal.

export const exerciseSectionsBonus: ExerciseSection[] = [
  {
    slug: "va2",
    title: "Valeur ajoutée — niveau 2",
    emoji: "🎯",
    intro:
      "Cas pratiques plus tordus de calcul de VA, avec mélange CI / FBCF / charges.",
    formula: "VA = P - CI",
    exercises: [
      {
        id: "va2-1",
        title: "Garage Auto+",
        emoji: "🔧",
        category: "VA — services + pièges",
        prompt:
          "Le garage Auto+ a réalisé un CA de 380 000 € (réparations + ventes de pièces). Achats : pièces détachées 95 000 €, peinture 18 000 €, électricité 9 000 €, ramettes administratives 800 €. Salaires : 120 000 €. TVA collectée : 76 000 €. Achat d'un pont élévateur : 14 000 € (durée 8 ans).\n\nCalcule la VA.",
        hint: "TVA collectée n'est ni CI ni produit. Le pont élévateur (8 ans) → FBCF, pas CI.",
        steps: [
          "P = CA = **380 000 €** (la TVA collectée n'entre PAS dans la production)",
          "CI = pièces + peinture + élec + ramettes = 95 000 + 18 000 + 9 000 + 800 = **122 800 €**",
          "Salaires : hors CI ; pont élévateur 8 ans : **FBCF**, hors CI",
          "VA = 380 000 − 122 800 = **257 200 €**",
        ],
        answer: "257 200 €",
      },
      {
        id: "va2-2",
        title: "Restaurant Le Cèdre",
        emoji: "🍽️",
        category: "VA — restauration",
        prompt:
          "Restaurant : 320 000 € de recettes. Achats : aliments 88 000 €, vins 25 000 €, gaz 8 000 €, eau 3 000 €. Loyer du local : 36 000 €. Salaires : 95 000 €. Réparation de la chambre froide : 4 000 €. Achat de mobilier neuf : 12 000 € (durée 10 ans).\n\nCalcule la VA et indique ce qui rentre dans chaque case.",
        hint: "Loyer = service consommé sur la période → CI. Réparation = service → CI. Mobilier durable → FBCF.",
        steps: [
          "CI = aliments + vins + gaz + eau + loyer + réparation = 88 + 25 + 8 + 3 + 36 + 4 = **164 000 €**",
          "Salaires : hors CI",
          "Mobilier 10 ans : **FBCF**, hors CI",
          "VA = 320 000 − 164 000 = **156 000 €**",
        ],
        answer: "156 000 €",
      },
      {
        id: "va2-3",
        title: "Reverse — trouver les CI",
        emoji: "🔁",
        category: "Lecture inverse",
        prompt:
          "Une entreprise a une VA de 240 000 € et a réalisé une production de 600 000 €. Ses salaires sont de 130 000 € et ses impôts de 18 000 €. Quel est le montant de ses CI ? Combien lui reste-t-il en EBE (Excédent Brut d'Exploitation) ?",
        hint: "VA = P − CI ; EBE = VA − salaires − impôts (de production).",
        steps: [
          "CI = P − VA = 600 000 − 240 000 = **360 000 €**",
          "EBE = VA − salaires − impôts = 240 000 − 130 000 − 18 000 = **92 000 €**",
        ],
        answer: "CI = 360 000 € ; EBE = 92 000 €.",
      },
      {
        id: "va2-4",
        title: "Cabinet d'avocats",
        emoji: "⚖️",
        category: "VA — services purs",
        prompt:
          "Honoraires perçus : 1 200 000 €. Loyer du cabinet : 90 000 €. Logiciels juridiques (abonnement annuel) : 35 000 €. Fournitures de bureau : 8 000 €. Salaires : 540 000 €. Cotisations sociales : 220 000 €. Achat d'un nouveau serveur informatique : 15 000 € (durée 4 ans).\n\nCalcule la VA.",
        hint: "Cotisations sociales = pas des CI. Serveur 4 ans = FBCF.",
        steps: [
          "CI = loyer + logiciels + fournitures = 90 000 + 35 000 + 8 000 = **133 000 €**",
          "Salaires + cotisations : hors CI",
          "Serveur 4 ans : **FBCF**, hors CI",
          "VA = 1 200 000 − 133 000 = **1 067 000 €**",
        ],
        answer: "1 067 000 €",
      },
      {
        id: "va2-5",
        title: "Chaîne de production",
        emoji: "🏭",
        category: "VA agrégée (filière)",
        prompt:
          "Une filière a 3 entreprises :\n- A vend 60 (matières premières) → CI = 0\n- B vend 100 (composants) → CI = 60 (achat à A)\n- C vend 200 (produit fini) → CI = 100 (achat à B)\n\nCalcule la VA de chacun et la VA totale de la filière. Compare au prix de vente final.",
        hint: "Somme des VA = prix final — c'est l'idée fondamentale du PIB.",
        steps: [
          "VA(A) = 60 − 0 = **60**",
          "VA(B) = 100 − 60 = **40**",
          "VA(C) = 200 − 100 = **100**",
          "Σ VA = 60 + 40 + 100 = **200 = prix final** ✓",
          "Le PIB est la **somme des VA** des résidents : pas de double comptage.",
        ],
        answer: "VA totale = 200 = prix final.",
      },
    ],
  },
  {
    slug: "re2",
    title: "Équilibre R-E — niveau 2",
    emoji: "🧩",
    intro:
      "Cas pratiques d'équilibre Ressources-Emplois avec calcul de variables manquantes.",
    formula: "P + M = C + CI + FBCF + X",
    exercises: [
      {
        id: "re2-1",
        title: "Calcul du PIB",
        emoji: "🔢",
        category: "PIB par 2 méthodes",
        prompt:
          "Données (Md€) : P = 3 200 ; M = 800 ; C = 1 700 ; CI = 600 ; FBCF = 720 ; X = 980.\n\n1) Vérifie l'équilibre R-E.\n2) Calcule le PIB par les 2 approches (production / dépense).",
        steps: [
          "Ressources = 3 200 + 800 = **4 000**",
          "Emplois = 1 700 + 600 + 720 + 980 = **4 000** ✓",
          "PIB par production = P − CI = 3 200 − 600 = **2 600**",
          "PIB par dépense = C + FBCF + (X − M) = 1 700 + 720 + (980 − 800) = 1 700 + 720 + 180 = **2 600** ✓",
        ],
        answer: "PIB = 2 600. Solde commercial = +180 (excédent).",
      },
      {
        id: "re2-2",
        title: "Importateur ou exportateur ?",
        emoji: "📤📥",
        category: "Diagnostic ouverture",
        prompt:
          "Pays X : PIB = 1 200, C = 800, FBCF = 320, M = 250.\nPays Y : PIB = 2 500, C = 1 600, FBCF = 600, X = 700.\n\nPour chaque pays, calcule X (ou M) et indique s'il est exportateur ou importateur net.",
        steps: [
          "Pays X : PIB = C + FBCF + (X − M) → 1 200 = 800 + 320 + X − 250 → 1 200 = 870 + X → **X = 330**",
          "Pays X : solde = X − M = 330 − 250 = **+80 → exportateur net**",
          "Pays Y : 2 500 = 1 600 + 600 + 700 − M → 2 500 = 2 900 − M → **M = 400**",
          "Pays Y : solde = X − M = 700 − 400 = **+300 → exportateur net**",
        ],
        answer: "X = 330 (excédent +80). Y : M = 400 (excédent +300).",
      },
      {
        id: "re2-3",
        title: "Choc d'importation",
        emoji: "🚢",
        category: "Variation d'une variable",
        prompt:
          "Économie initiale : P = 2 000 ; M = 400 ; C = 1 500 ; CI = 250 ; FBCF = 380 ; X = 270 (équilibre vérifié).\n\nLes importations doublent (M passe à 800), tout le reste constant. Recalcule l'équilibre. Quelle variable doit s'ajuster mécaniquement et de combien ?",
        hint: "Pour rétablir l'équilibre R-E, l'augmentation de M doit être compensée par une variation des emplois.",
        steps: [
          "Avant : 2 000 + 400 = 2 400 = 1 500 + 250 + 380 + 270 = 2 400 ✓",
          "Après hausse de M : ressources = 2 000 + 800 = 2 800. Or les emplois sont restés à 2 400. Ce n'est plus équilibré.",
          "Mécaniquement, **+400 d'imports** doivent finir quelque part : soit en C (consommés), soit en CI, soit en FBCF, soit en X (réexportés).",
          "Hypothèse : si tout va en C → C passe de 1 500 à **1 900**. Si tout va en CI → CI = 650. Etc.",
          "💡 Le surplus d'imports n'est jamais 'perdu' : il est consommé, transformé, ou réexporté.",
        ],
        answer: "+400 sur les emplois (C, CI, FBCF ou X) selon l'usage.",
      },
      {
        id: "re2-4",
        title: "Le cas typique d'examen",
        emoji: "📝",
        category: "Exercice complet",
        prompt:
          "Pays Z (Md€) : Production = 1 800 ; Importations = 600 ; Consommation = 1 350 ; CI = 280 ; FBCF = 420 ; Exportations = 350.\n\n1) Vérifie l'équilibre.\n2) Calcule le PIB.\n3) Calcule le solde commercial.\n4) Indique si le pays est importateur ou exportateur net.\n5) Calcule le taux d'investissement (FBCF/PIB).",
        steps: [
          "1) Ressources = 1 800 + 600 = **2 400**. Emplois = 1 350 + 280 + 420 + 350 = **2 400** ✓",
          "2) PIB = P − CI = 1 800 − 280 = **1 520**",
          "3) Solde = X − M = 350 − 600 = **−250 → déficit**",
          "4) PIB < C + FBCF (1 520 < 1 770) → **importateur net**",
          "5) Taux d'investissement = FBCF / PIB = 420 / 1 520 ≈ **27,6 %**",
        ],
        answer: "PIB = 1 520. Déficit −250. Importateur. Taux invest ≈ 27,6 %.",
      },
      {
        id: "re2-5",
        title: "PIB nominal vs PIB par dépense",
        emoji: "🪞",
        category: "Cohérence des 3 approches",
        prompt:
          "On te donne : C = 850 ; FBCF = 290 ; X = 480 ; M = 520. Tu sais aussi que le total des VA des résidents s'élève à 1 100. Vérifie la cohérence des 3 approches du PIB.",
        steps: [
          "Approche dépense : PIB = C + FBCF + (X − M) = 850 + 290 + (480 − 520) = 850 + 290 − 40 = **1 100**",
          "Approche production : Σ VA = **1 100** (donné)",
          "Les deux approches convergent : 1 100 = 1 100 ✓",
          "💡 C'est la **cohérence comptable** : les 3 approches doivent donner le même PIB.",
        ],
        answer: "PIB = 1 100 (les 2 approches concordent).",
      },
    ],
  },
  {
    slug: "deflater2",
    title: "Déflater le PIB — niveau 2",
    emoji: "📐",
    intro:
      "Cas pratiques de passage nominal ↔ réel, calculs en chaîne sur plusieurs années.",
    formula: "CM_{vol} = \\frac{CM_v}{CM_p}",
    exercises: [
      {
        id: "def2-1",
        title: "Petite croissance, forte inflation",
        emoji: "🥵",
        category: "Croissance réelle vs nominale",
        prompt:
          "PIB nominal : 100 (N) → 112 (N+1). Inflation : 8 %. Calcule la croissance réelle.",
        steps: [
          "CM_v = 1,12 ; CM_p = 1,08",
          "CM_vol = 1,12 / 1,08 ≈ **1,037**",
          "Croissance réelle ≈ **+3,7 %** (vs +12 % nominal)",
          "💡 L'inflation 'mange' presque les 2/3 de la croissance nominale.",
        ],
        answer: "+3,7 % de croissance réelle.",
      },
      {
        id: "def2-2",
        title: "Forte croissance",
        emoji: "🚀",
        category: "Calcul direct",
        prompt:
          "PIB nominal en N = 850. PIB nominal en N+1 = 935. Inflation : 4 %. Calcule le PIB réel en N+1 (en prix de N) et le taux de croissance réel.",
        steps: [
          "PIB réel N+1 = 935 / 1,04 ≈ **899,04**",
          "Croissance réelle = (899,04 − 850) / 850 ≈ **+5,77 %**",
          "Croissance nominale = (935 − 850) / 850 = **+10 %**",
        ],
        answer: "PIB réel N+1 ≈ 899. Croissance réelle ≈ +5,8 %.",
      },
      {
        id: "def2-3",
        title: "Récession masquée",
        emoji: "📉",
        category: "Croissance réelle négative",
        prompt:
          "PIB nominal : 200 (N) → 208 (N+1). Inflation : 6 %. Le pays est-il en croissance ?",
        steps: [
          "CM_v = 1,04 ; CM_p = 1,06",
          "CM_vol = 1,04 / 1,06 ≈ **0,981**",
          "Croissance réelle ≈ **−1,9 %**",
          "→ Bien que le PIB nominal augmente (+4 %), le pays est **en récession en termes réels**.",
        ],
        answer: "Récession : −1,9 % en réel.",
      },
      {
        id: "def2-4",
        title: "Croissance moyenne géométrique",
        emoji: "🎯",
        category: "Sur plusieurs années",
        prompt:
          "Le PIB d'un pays passe de 100 à 144 en 5 ans (en termes réels). Quelle est la croissance annuelle moyenne ?",
        hint: "Croissance annuelle moyenne = (CM total)^(1/n) − 1.",
        steps: [
          "CM total = 144 / 100 = 1,44",
          "CM annuel = 1,44^(1/5) ≈ **1,0760**",
          "Croissance annuelle moyenne ≈ **+7,60 %**",
          "💡 Vérification : 1,076^5 ≈ 1,44 ✓",
        ],
        answer: "≈ +7,6 % par an.",
      },
      {
        id: "def2-5",
        title: "Lecture inverse",
        emoji: "🔁",
        category: "Trouver l'inflation",
        prompt:
          "PIB nominal augmente de +9 %. PIB réel augmente de +3 %. Quelle a été l'inflation ?",
        steps: [
          "CM_v = 1,09 ; CM_vol = 1,03",
          "CM_p = CM_v / CM_vol = 1,09 / 1,03 ≈ **1,0583**",
          "Inflation ≈ **+5,83 %**",
          "💡 Approximation linéaire : 9 % − 3 % = 6 % (proche mais pas exact).",
        ],
        answer: "≈ +5,83 %.",
      },
    ],
  },
  {
    slug: "salaire2",
    title: "Pouvoir d'achat — niveau 2",
    emoji: "💰",
    intro:
      "Cas pratiques pouvoir d'achat avec primes, augmentations annuelles, comparaisons entre années.",
    formula: "\\text{Salaire réel} = \\frac{\\text{Salaire nominal}}{CM_{prix}}",
    exercises: [
      {
        id: "sal2-1",
        title: "Sur 3 ans cumulés",
        emoji: "📅",
        category: "Cumul de variations",
        prompt:
          "Marie gagne 1 800 € en N. Augmentations : +2 % en N+1, +3 % en N+2, +1 % en N+3. Inflation : 1,5 % puis 4 % puis 2 %. Quel est son salaire réel en N+3 (en prix de N) ?",
        hint: "Cumul des CM, jamais addition des taux.",
        steps: [
          "CM nominal cumulé = 1,02 × 1,03 × 1,01 ≈ **1,0612**",
          "CM prix cumulé = 1,015 × 1,04 × 1,02 ≈ **1,0769**",
          "CM réel = 1,0612 / 1,0769 ≈ **0,9854**",
          "Salaire réel N+3 = 1 800 × 0,9854 ≈ **1 774 €** (en prix de N)",
          "→ Perte de pouvoir d'achat de ≈ −1,5 % sur 3 ans.",
        ],
        answer: "≈ 1 774 € → perte de −1,5 % de pouvoir d'achat.",
      },
      {
        id: "sal2-2",
        title: "Smic et inflation",
        emoji: "🏷️",
        category: "Indexation automatique",
        prompt:
          "Le SMIC mensuel brut est de 1 800 €. L'inflation entre janvier et septembre atteint 2,2 %. Le SMIC est revalorisé automatiquement quand l'IPC dépasse 2 % d'inflation cumulée. Quel est le nouveau SMIC après revalorisation, et quel pouvoir d'achat conserve un smicard ?",
        hint: "Indexation = augmentation = inflation observée. Pouvoir d'achat préservé.",
        steps: [
          "Revalorisation = +2,2 % → SMIC = 1 800 × 1,022 ≈ **1 839,60 €**",
          "Salaire réel = 1 839,60 / 1,022 = 1 800 €",
          "→ **Pouvoir d'achat exactement préservé** (indexation totale).",
        ],
        answer: "Nouveau SMIC ≈ 1 839,60 €. Pouvoir d'achat préservé.",
      },
      {
        id: "sal2-3",
        title: "Comparer 2 offres",
        emoji: "⚖️",
        category: "Choix entre 2 jobs",
        prompt:
          "Tu reçois 2 offres :\n- Job A : 28 000 €/an à Paris (coût de la vie indice 110)\n- Job B : 24 000 €/an à Brest (coût de la vie indice 90)\n\nLequel offre le meilleur pouvoir d'achat réel ?",
        hint: "Salaire réel = salaire nominal / indice de prix local.",
        steps: [
          "Job A réel = 28 000 / 1,10 ≈ **25 455 €** (en pouvoir d'achat de référence)",
          "Job B réel = 24 000 / 0,90 ≈ **26 667 €**",
          "→ **Job B** a un pouvoir d'achat supérieur d'environ 1 200 €/an.",
        ],
        answer: "Job B (≈ +1 200 € de pouvoir d'achat).",
      },
      {
        id: "sal2-4",
        title: "Prime exceptionnelle",
        emoji: "🎁",
        category: "Salaire + prime",
        prompt:
          "Yann gagne 2 100 €/mois (12 mois). Il reçoit une prime exceptionnelle de 2 400 € en décembre. Inflation 3 %. L'année dernière il gagnait 2 050 €/mois sans prime. Comment a évolué son revenu annuel réel ?",
        steps: [
          "Revenu nominal cette année = 2 100 × 12 + 2 400 = **27 600 €**",
          "Revenu nominal an dernier = 2 050 × 12 = **24 600 €**",
          "Revenu réel cette année = 27 600 / 1,03 ≈ **26 796 €** (en prix de l'an dernier)",
          "Évolution réelle = (26 796 − 24 600) / 24 600 ≈ **+8,9 %**",
          "→ Forte hausse de pouvoir d'achat malgré l'inflation, grâce à la prime + l'augmentation.",
        ],
        answer: "+8,9 % de revenu réel.",
      },
      {
        id: "sal2-5",
        title: "Décrochage des salaires",
        emoji: "📉",
        category: "Pouvoir d'achat sur 10 ans",
        prompt:
          "En 10 ans, le salaire moyen passe de 2 000 € à 2 400 €. Sur la même période, l'IPC passe de 100 à 132. Le pouvoir d'achat moyen a-t-il augmenté ou diminué ?",
        steps: [
          "CM nominal salaires = 2 400 / 2 000 = **1,20** (= +20 %)",
          "CM prix = 132 / 100 = **1,32** (= +32 %)",
          "CM réel = 1,20 / 1,32 ≈ **0,909** → **−9,1 %** de pouvoir d'achat sur 10 ans",
          "→ Décrochage des salaires : ils n'ont pas suivi l'inflation.",
        ],
        answer: "−9,1 % de pouvoir d'achat sur 10 ans.",
      },
    ],
  },
  {
    slug: "multi2",
    title: "Multiplicateur — niveau 2",
    emoji: "✨",
    intro:
      "Effets en chaîne, plans de relance, cas avec fuites (importations, épargne forte).",
    formula: "k = \\frac{1}{1 - Pmc}",
    exercises: [
      {
        id: "mult2-1",
        title: "Plan de relance massif",
        emoji: "💸",
        category: "Effet sur le PIB",
        prompt:
          "L'État lance un plan de relance de 50 Md€ d'investissements publics. Pmc = 0,7. Calcule l'effet maximum sur le PIB.",
        steps: [
          "k = 1 / (1 − 0,7) = 1 / 0,3 ≈ **3,33**",
          "ΔY = 50 × 3,33 ≈ **166,7 Md€**",
        ],
        answer: "≈ 166,7 Md€ d'augmentation du PIB.",
      },
      {
        id: "mult2-2",
        title: "Effet d'éviction",
        emoji: "⚔️",
        category: "Avec fuite",
        prompt:
          "Plan de 80 Md€ avec Pmc = 0,8. L'effet d'éviction (taux + imports) absorbe 35 % du multiplicateur théorique. Quel est l'effet net sur le PIB ?",
        steps: [
          "k théorique = 1 / 0,2 = **5**",
          "ΔY théorique = 80 × 5 = **400 Md€**",
          "Effet d'éviction : −35 % → effet net = 400 × 0,65 = **260 Md€**",
        ],
        answer: "260 Md€ d'effet net.",
      },
      {
        id: "mult2-3",
        title: "Comparer 2 publics",
        emoji: "👥",
        category: "Stratégie de redistribution",
        prompt:
          "L'État dispose de 30 Md€. Il peut soit :\n- A : les distribuer aux 10 % les plus riches (Pmc = 0,5)\n- B : les distribuer aux 30 % les plus pauvres (Pmc = 0,9)\n\nQuelle option génère le plus d'effet sur le PIB ?",
        steps: [
          "Option A : k = 1 / (1 − 0,5) = 2 → ΔY = 30 × 2 = **60 Md€**",
          "Option B : k = 1 / (1 − 0,9) = 10 → ΔY = 30 × 10 = **300 Md€**",
          "**Option B** rapporte 5 fois plus d'effet sur le PIB.",
          "💡 Justification keynésienne du ciblage des bas revenus : leur Pmc est plus élevée → l'argent circule mieux.",
        ],
        answer: "Option B : 300 Md€ vs 60 Md€ pour l'option A.",
      },
      {
        id: "mult2-4",
        title: "Mécanisme par vagues (avancé)",
        emoji: "🌊",
        category: "Effets cumulés",
        prompt:
          "Pmc = 0,6. L'État dépense 100 M€. Calcule l'effet cumulé après 4 vagues, et compare à la limite k × I.",
        steps: [
          "Vague 1 : 100 M€ (dépense initiale)",
          "Vague 2 : 100 × 0,6 = 60 M€ consommés",
          "Vague 3 : 60 × 0,6 = 36 M€",
          "Vague 4 : 36 × 0,6 = 21,6 M€",
          "Cumul après 4 vagues : 100 + 60 + 36 + 21,6 = **217,6 M€**",
          "Limite (k = 1/0,4 = 2,5) : k × I = 2,5 × 100 = **250 M€**",
          "→ Après 4 vagues, on a déjà capté ≈ 87 % de l'effet total.",
        ],
        answer: "Cumul 4 vagues = 217,6 M€ vs total = 250 M€.",
      },
      {
        id: "mult2-5",
        title: "Pmc négative ?",
        emoji: "🤔",
        category: "Cas limite",
        prompt:
          "Que se passerait-il avec une Pmc = 1 ? Avec une Pmc négative ? Que cela signifierait économiquement ?",
        steps: [
          "**Pmc = 1** : k = 1 / (1−1) = 1 / 0 → **infini**. Tout euro distribué génère un effet illimité. Économiquement, signifie que les ménages consomment 100 % de tout revenu supplémentaire (aucune épargne).",
          "**Pmc négative** : impossible économiquement. Cela voudrait dire qu'on consomme MOINS quand on gagne PLUS, ce qui contredit la loi psychologique de Keynes.",
          "**Pmc = 0** : k = 1 → tout est épargné, pas d'effet multiplicateur.",
          "💡 En pratique, Pmc est toujours dans **]0 ; 1[**, ce qui rend k > 1 et fini.",
        ],
        answer: "Pmc ∈ ]0;1[ → k > 1. Pmc=1 → k infini (théorique).",
      },
    ],
  },
  {
    slug: "inflation",
    title: "Inflation et indices",
    emoji: "🔥",
    intro:
      "Taux d'inflation, indices de prix, calculs en chaîne. **L'inflation = hausse généralisée et durable** des prix.",
    formula: "\\text{TV inflation} = \\frac{IPC_{final} - IPC_{initial}}{IPC_{initial}} \\times 100",
    exercises: [
      {
        id: "infl-1",
        title: "Lecture d'IPC",
        emoji: "📊",
        category: "Taux d'inflation simple",
        prompt:
          "L'IPC base 100 en 2020 atteint 108,5 en 2023. Quelle est l'inflation cumulée entre 2020 et 2023 ?",
        steps: [
          "TV = (108,5 − 100) / 100 × 100 = **+8,5 %**",
          "Inflation cumulée = +8,5 % en 3 ans.",
          "Inflation annuelle moyenne = 1,085^(1/3) − 1 ≈ **+2,75 %/an**",
        ],
        answer: "+8,5 % cumulé ; ≈ +2,75 %/an en moyenne.",
      },
      {
        id: "infl-2",
        title: "Hyperinflation",
        emoji: "🚨",
        category: "Cas extrême",
        prompt:
          "Le Venezuela a connu une inflation mensuelle de 50 % pendant 12 mois consécutifs (2018). Calcule l'inflation annuelle.",
        hint: "CM annuel = (CM mensuel)^12.",
        steps: [
          "CM mensuel = 1,50",
          "CM annuel = 1,50^12 ≈ **129,75**",
          "TV annuel = (129,75 − 1) × 100 ≈ **+12 875 %**",
          "→ Les prix ont été multipliés par **130** en 1 an.",
        ],
        answer: "≈ +12 875 % d'inflation annuelle.",
      },
      {
        id: "infl-3",
        title: "Décélération",
        emoji: "📉",
        category: "Inflation qui ralentit",
        prompt:
          "France : inflation 2022 = 5,2 %, 2023 = 4,9 %, 2024 = 2,0 %. Calcule l'inflation cumulée sur 3 ans et l'érosion totale du pouvoir d'achat.",
        steps: [
          "CM cumulé = 1,052 × 1,049 × 1,02 ≈ **1,1257**",
          "Inflation cumulée = (1,1257 − 1) × 100 ≈ **+12,57 %**",
          "Pouvoir d'achat sur 3 ans : 1 / 1,1257 ≈ 0,888 → **−11,2 %**",
          "→ 1 € de 2022 vaut 0,888 € en 2025.",
        ],
        answer: "+12,57 % cumulé ; −11,2 % de pouvoir d'achat.",
      },
      {
        id: "infl-4",
        title: "Inflation négative (déflation)",
        emoji: "❄️",
        category: "Cas inverse",
        prompt:
          "L'IPC d'un pays passe de 100 à 96 en 2 ans. C'est une déflation. Calcule le taux annuel et explique pourquoi c'est dangereux.",
        steps: [
          "CM total = 96 / 100 = 0,96",
          "CM annuel = 0,96^(1/2) ≈ **0,9798**",
          "Taux annuel ≈ **−2,0 %**",
          "💡 La déflation est dangereuse car :",
          "- Les ménages reportent leurs achats (les prix vont encore baisser)",
          "- Les entreprises voient leurs marges s'éroder",
          "- La dette en termes réels augmente (effet Fisher)",
          "- Spirale dépressive possible (Japon 1990s)",
        ],
        answer: "≈ −2 % par an. Dangereux car cercle vicieux dépressif.",
      },
      {
        id: "infl-5",
        title: "Comparer prix réel sur le temps",
        emoji: "⏳",
        category: "Convertir en prix actuels",
        prompt:
          "En 1980, une baguette coûtait 0,40 €. En 2024, elle coûte 1,20 €. Sur la période, l'IPC a été multiplié par 3,5 (1980 = 100, 2024 = 350). La baguette est-elle devenue plus chère, équivalente ou moins chère en termes réels ?",
        steps: [
          "Prix 1980 en équivalent 2024 = 0,40 × 3,5 = **1,40 €**",
          "Prix réel 2024 = **1,20 €**",
          "→ La baguette est **moins chère en termes réels** qu'en 1980 (−14 %).",
          "💡 La perception 'tout devient cher' est souvent une illusion : on compare nominal sans correction d'inflation.",
        ],
        answer: "−14 % de prix réel. La baguette est devenue moins chère.",
      },
    ],
  },
  {
    slug: "inegalites",
    title: "Inégalités et niveau de vie",
    emoji: "📏",
    intro:
      "Coefficient de Gini, déciles, rapports interdéciles. Mesurer la distribution des revenus.",
    formula:
      "\\text{Rapport interdécile} = \\frac{D9}{D1}",
    exercises: [
      {
        id: "ineg-1",
        title: "Lecture du rapport interdécile",
        emoji: "📈",
        category: "D9/D1",
        prompt:
          "Dans un pays, D1 = 850 €/mois et D9 = 4 250 €/mois. Calcule le rapport interdécile et interprète.",
        steps: [
          "Rapport = D9 / D1 = 4 250 / 850 = **5,0**",
          "Interprétation : le revenu plancher des 10 % les plus riches vaut **5 fois** le revenu plafond des 10 % les plus pauvres.",
          "💡 France 2024 : ≈ 3,5. USA : ≈ 7. Pays scandinaves : ≈ 2,8.",
        ],
        answer: "D9/D1 = 5,0 → inégalités modérées-élevées.",
      },
      {
        id: "ineg-2",
        title: "Niveau de vie et UC",
        emoji: "👨‍👩‍👧",
        category: "Calcul d'UC",
        prompt:
          "Un foyer composé d'un couple + 1 ado de 16 ans + 2 enfants de 8 et 11 ans dispose d'un revenu disponible de 65 000 €. Calcule le niveau de vie par UC.",
        hint: "1 / 0,5 / 0,3 selon âge (1er adulte / autres ≥14 / <14 ans).",
        steps: [
          "1 (1er adulte) + 0,5 (2ème adulte) + 0,5 (16 ans) + 0,3 (8 ans) + 0,3 (11 ans) = **2,6 UC**",
          "Niveau de vie = 65 000 / 2,6 ≈ **25 000 €/UC**",
        ],
        answer: "≈ 25 000 €/UC.",
      },
      {
        id: "ineg-3",
        title: "Comparaison entre 3 ménages",
        emoji: "🏠🏠🏠",
        category: "Classer par niveau de vie",
        prompt:
          "Foyer A : célibataire, 22 000 €.\nFoyer B : couple sans enfant, 38 000 €.\nFoyer C : couple + 3 enfants (3, 7 et 14 ans), 55 000 €.\n\nClasse les 3 par niveau de vie décroissant.",
        steps: [
          "A : UC = 1 → niveau = **22 000 €/UC**",
          "B : UC = 1 + 0,5 = 1,5 → niveau = 38 000 / 1,5 ≈ **25 333 €/UC**",
          "C : UC = 1 + 0,5 + 0,3 + 0,3 + 0,5 (14 ans) = 2,6 → niveau = 55 000 / 2,6 ≈ **21 154 €/UC**",
          "**Classement** : B > A > C",
          "💡 Le foyer C, malgré le revenu le plus élevé, a le niveau de vie le plus bas (charge familiale).",
        ],
        answer: "B (25 333) > A (22 000) > C (21 154).",
      },
      {
        id: "ineg-4",
        title: "Coefficient de Gini",
        emoji: "📐",
        category: "Lecture du Gini",
        prompt:
          "Pays A : Gini = 0,28. Pays B : Gini = 0,42. Pays C : Gini = 0,55. Compare leur niveau d'inégalité et donne des exemples réels.",
        steps: [
          "Gini = 0 → égalité parfaite. Gini = 1 → inégalité maximale.",
          "Pays A (0,28) : faibles inégalités. **Ex : Suède, Norvège, Danemark.**",
          "Pays B (0,42) : inégalités modérées. **Ex : USA, Royaume-Uni, France ≈ 0,30.**",
          "Pays C (0,55) : fortes inégalités. **Ex : Brésil, Afrique du Sud.**",
        ],
        answer: "A < B < C. France ≈ 0,30 (proche A).",
      },
      {
        id: "ineg-5",
        title: "Top 1 % et part du revenu",
        emoji: "💎",
        category: "Concentration des revenus",
        prompt:
          "Le top 1 % d'un pays détient 18 % du revenu national total. Le top 10 % détient 42 %. Calcule la part du revenu national détenue par les 90 % restants et la part du top 1 % au sein du top 10 %.",
        steps: [
          "Part des 90 % les plus pauvres = 100 − 42 = **58 %**",
          "Part du top 1 % au sein du top 10 % = 18 / 42 ≈ **42,9 %**",
          "→ Au sein des 10 % les plus riches, le top 1 % capte presque la moitié du gâteau.",
          "💡 C'est typique des inégalités modernes : la concentration est très forte au sommet.",
        ],
        answer: "90 % captent 58 % ; top 1 % = 43 % du top 10 %.",
      },
    ],
  },
];
