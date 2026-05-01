import type { ExerciseSection } from "./exercises";

export const exerciseSectionsGestion: ExerciseSection[] = [
  {
    slug: "compte-resultat",
    title: "Compte de Résultat",
    emoji: "📈",
    intro:
      "Calcule le résultat = Total Produits − Total Charges. **3 niveaux** : exploitation, financier, exceptionnel.",
    formula: "\\text{Résultat} = \\text{Total Produits} - \\text{Total Charges}",
    exercises: [
      {
        id: "cr-1",
        title: "EURL Moulay (cas du cours)",
        emoji: "🏫",
        category: "CR de service",
        prompt:
          "EURL Moulay (auto-école) — Exercice N :\n- Achats de carburant : 24 000\n- Fournitures de bureau : 6 000\n- Loyers : 16 000\n- Impôts et taxes : 900\n- Salaires : 76 000\n- Dotations aux amortissements véhicules : 7 000\n- Intérêts d'emprunts : 900\n- Prestations de services : 122 000\n\nPrésente le compte de résultat et calcule le résultat.",
        hint: "Charges d'exploitation, financières, exceptionnelles. Le seul élément financier est les intérêts d'emprunts.",
        steps: [
          "Charges d'exploitation = 24 000 + 6 000 + 16 000 + 900 + 76 000 + 7 000 = **129 900**",
          "Charges financières = 900 (intérêts d'emprunts)",
          "Charges exceptionnelles = 0",
          "Total Charges = 129 900 + 900 = **130 800**",
          "Produits d'exploitation = 122 000 (prestations de services)",
          "Total Produits = **122 000**",
          "Résultat = 122 000 − 130 800 = **−8 800 (perte)**",
        ],
        answer: "Perte de 8 800 €",
      },
      {
        id: "cr-2",
        title: "Profil rentable",
        emoji: "💰",
        category: "Calcul de résultat",
        prompt:
          "Société de conseil : CA = 250 000 ; Achats = 30 000 ; Salaires + cotisations = 120 000 ; Loyer = 24 000 ; Impôts et taxes = 6 000 ; Intérêts d'emprunts = 4 000 ; Produits financiers = 1 500.\n\nCalcule le résultat d'exploitation et le résultat net (avant IS).",
        steps: [
          "Charges d'exploitation = 30 000 + 120 000 + 24 000 + 6 000 = **180 000**",
          "Résultat d'exploitation = 250 000 − 180 000 = **70 000**",
          "Résultat financier = 1 500 − 4 000 = **−2 500**",
          "Résultat net (avant IS) = 70 000 − 2 500 = **67 500**",
        ],
        answer: "Résultat exploitation : 70 000. Résultat net avant IS : 67 500.",
      },
      {
        id: "cr-3",
        title: "Distinction des 3 niveaux",
        emoji: "🎯",
        category: "Classification",
        prompt:
          "Classe ces opérations en 3 catégories (exploitation / financière / exceptionnelle) :\n\n1. Vente de marchandises : 100 000\n2. Achat de matières premières : 40 000\n3. Intérêts perçus sur placements : 2 000\n4. Plus-value sur cession d'un véhicule : 5 000\n5. Salaires : 30 000\n6. Intérêts d'emprunts : 3 000\n7. Pénalités fiscales : 800\n8. Loyer : 12 000",
        steps: [
          "**Exploitation** : 1 (produit), 2, 5, 8 (charges)",
          "**Financière** : 3 (produit), 6 (charge)",
          "**Exceptionnelle** : 4 (produit), 7 (charge)",
        ],
        answer:
          "Expl. : 1, 2, 5, 8 / Fin. : 3, 6 / Excep. : 4, 7.",
      },
    ],
  },
  {
    slug: "bilan",
    title: "Bilan",
    emoji: "⚖️",
    intro:
      "Total Actif = Total Passif. Place chaque élément au bon endroit.",
    formula: "\\text{Total Actif} = \\text{Total Passif}",
    exercises: [
      {
        id: "bil-1",
        title: "SAS Raoul (cas du cours)",
        emoji: "🏗️",
        category: "Bilan d'ouverture + clôture",
        prompt:
          "SAS Raoul créée le 1ᵉʳ juillet N avec :\n- Bâtiment : 240 000\n- Matériel : 25 000\n- Stock matières premières : 14 000\n- Banque : 21 000\n- Emprunt : 50 000\n\nAu 31 décembre N : Bâtiment 228 000 ; Matériel 22 500 ; Camionnette 26 000 ; Stock MP 8 000 ; Stock PF 7 000 ; Créances 5 000 ; Banque 3 500 ; Capital inchangé ; Emprunt 45 000 ; Fournisseurs 12 000 ; Dettes fiscales 4 000.\n\n1) Calcule le capital social. 2) Calcule le résultat de l'exercice.",
        hint: "Capital = Apports nets de l'emprunt. Résultat tel que Total Actif = Total Passif.",
        steps: [
          "Apports : 240 000 + 25 000 + 14 000 + 21 000 = **300 000**",
          "Emprunt à déduire : 50 000",
          "**Capital = 300 000 − 50 000 = 250 000**",
          "Total Actif (31/12) = 228 000 + 22 500 + 26 000 + 8 000 + 7 000 + 5 000 + 3 500 = **300 000**",
          "Capitaux propres = Total Actif − Dettes = 300 000 − (45 000 + 12 000 + 4 000) = 300 000 − 61 000 = **239 000**",
          "Résultat = Capitaux propres − Capital − Réserves = 239 000 − 250 000 − 0 = **−11 000 (perte)**",
        ],
        answer: "Capital = 250 000. Résultat = −11 000 (perte).",
      },
      {
        id: "bil-2",
        title: "Calcul du capital",
        emoji: "💼",
        category: "Capital social",
        prompt:
          "M. Dupont crée une SARL avec :\n- Apports en nature : véhicule 12 000 + matériel 8 000\n- Apports en numéraire : 30 000 sur un compte bancaire\n- Le véhicule a été financé partiellement par un emprunt de 5 000\n\nQuel est le capital social ?",
        steps: [
          "Apports en nature = 12 000 + 8 000 = **20 000**",
          "Apports en numéraire = **30 000**",
          "Total apports = 50 000",
          "− Emprunt = 5 000",
          "**Capital social = 50 000 − 5 000 = 45 000 €**",
        ],
        answer: "45 000 €",
      },
      {
        id: "bil-3",
        title: "Place chaque élément",
        emoji: "🧩",
        category: "Actif vs passif",
        prompt:
          "Indique pour chaque élément s'il va à l'**actif** ou au **passif**, et précise la sous-catégorie :\n\n1. Brevet\n2. Stock de marchandises\n3. Emprunt bancaire\n4. Capital social\n5. Banque (solde positif)\n6. Créances clients\n7. Dettes fournisseurs\n8. Bâtiment\n9. Réserves\n10. Caisse",
        steps: [
          "1. **Actif immobilisé incorporel** (brevet)",
          "2. **Actif circulant** (stock)",
          "3. **Passif — Dettes** (emprunt)",
          "4. **Passif — Capitaux propres** (capital)",
          "5. **Actif circulant** (disponibilités)",
          "6. **Actif circulant** (créances)",
          "7. **Passif — Dettes** (fournisseurs)",
          "8. **Actif immobilisé corporel** (bâtiment)",
          "9. **Passif — Capitaux propres** (réserves)",
          "10. **Actif circulant** (disponibilités)",
        ],
        answer: "Voir détail dans la méthode.",
      },
    ],
  },
  {
    slug: "ecritures",
    title: "Écritures comptables",
    emoji: "✏️",
    intro:
      "Pour chaque opération : trouve les comptes à débiter et créditer. Souviens-toi : EMPLOIS = RESSOURCES.",
    formula: "\\text{EMPLOIS (débit)} = \\text{RESSOURCES (crédit)}",
    exercises: [
      {
        id: "ec-1",
        title: "Apports d'un dirigeant",
        emoji: "💼",
        category: "Création d'entreprise",
        prompt:
          "M. Vincent apporte pour créer son EURL :\n- Numéraire 4 000 € sur compte bancaire\n- Véhicule (occasion) évalué 6 000 €\n\nÉcriture comptable ?",
        steps: [
          "Apport en numéraire : 512 Banque débit 4 000",
          "Apport en nature : 2182 Matériel de transport débit 6 000",
          "Capital crédité du total : 101 Capital crédit 10 000",
          "**Écriture** :",
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 512 Banque | 4 000 | |\n| 2182 Matériel de transport | 6 000 | |\n| 101 Capital | | 10 000 |",
        ],
        answer: "Voir la méthode.",
      },
      {
        id: "ec-2",
        title: "Achat fournitures à crédit",
        emoji: "📋",
        category: "Achat à crédit",
        prompt:
          "Achat de fournitures de bureau à crédit : 165 € HT, TVA 20 %.\nÉcriture comptable ?",
        hint: "Fournitures de bureau = charge (606 Achats non stockés). Crédit = 401 Fournisseur.",
        steps: [
          "606 Achats non stockés débit : **165 €** (HT)",
          "44566 TVA déductible débit : **33 €** (165 × 0,20)",
          "401 Fournisseur crédit : **198 €** (TTC)",
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 606 Achats non stockés | 165 | |\n| 44566 TVA déductible | 33 | |\n| 401 Fournisseur | | 198 |",
        ],
        answer: "606 + 44566 D ; 401 C 198 €.",
      },
      {
        id: "ec-3",
        title: "Vente comptant",
        emoji: "💸",
        category: "Vente",
        prompt:
          "Vente de produits finis : 1 200 € HT, TVA 20 %, encaissée par virement bancaire.\nÉcriture ?",
        steps: [
          "Total TTC = 1 200 × 1,20 = **1 440 €**",
          "512 Banque débit : 1 440",
          "701 Ventes de produits finis crédit : 1 200 (HT)",
          "44571 TVA collectée crédit : 240 (TVA)",
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 512 Banque | 1 440 | |\n| 701 Ventes produits finis | | 1 200 |\n| 44571 TVA collectée | | 240 |",
        ],
        answer: "512 D 1 440 ; 701 C 1 200 ; 44571 C 240.",
      },
      {
        id: "ec-4",
        title: "Paye d'un salarié",
        emoji: "👷",
        category: "Salaire",
        prompt:
          "Salaire brut 2 000 € ; cotisations salariales 440 € ; cotisations patronales 600 €.\n\nÉcritures comptables (en 2 temps) ?",
        steps: [
          "**1. Comptabilisation du salaire (au 27 du mois)** :\n| Compte | Débit | Crédit |\n|---|---|---|\n| 641 Rémunération du personnel | 2 000 | |\n| 421 Personnel — rémunérations dues | | 1 560 |\n| 43 Sécu sociale et autres organismes | | 440 |",
          "**2. Charges patronales (même date)** :\n| Compte | Débit | Crédit |\n|---|---|---|\n| 645 Charges de sécurité sociale | 600 | |\n| 43 Sécu sociale et autres organismes | | 600 |",
          "**3. Paiement des cotisations à l'URSSAF (le 10 du mois suivant)** :\n| Compte | Débit | Crédit |\n|---|---|---|\n| 43 Sécu sociale et autres organismes | 1 040 | |\n| 512 Banque | | 1 040 |",
        ],
        answer: "641 + 645 = charges, 43 = dette envers organismes, 512 = paiement.",
      },
      {
        id: "ec-5",
        title: "Achat d'immobilisation",
        emoji: "🏗️",
        category: "Immobilisation à crédit",
        prompt:
          "Achat d'une machine industrielle : 50 000 € HT, TVA 20 %, à crédit.\nÉcriture ?",
        hint: "Attention : 404 Fournisseur d'immobilisation (≠ 401) et 44562 TVA déductible sur immo (≠ 44566).",
        steps: [
          "215 Matériel industriel débit : **50 000** (HT)",
          "44562 TVA déductible sur immobilisations débit : **10 000**",
          "404 Fournisseur d'immobilisation crédit : **60 000** (TTC)",
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 215 Matériel industriel | 50 000 | |\n| 44562 TVA déductible immo | 10 000 | |\n| 404 Fournisseur d'immobilisation | | 60 000 |",
        ],
        answer: "215 + 44562 D ; 404 C 60 000.",
      },
    ],
  },
  {
    slug: "tva",
    title: "TVA et factures",
    emoji: "💸",
    intro:
      "Réductions, taux de TVA, calcul du Net à payer. **Ordre** : Brut HT → réductions commerciales → réduction financière → TVA → Net.",
    formula:
      "\\text{TVA à décaisser} = \\text{TVA collectée} - \\text{TVA déductible}",
    exercises: [
      {
        id: "tva-1",
        title: "Facture avec remise",
        emoji: "🧾",
        category: "Net à payer simple",
        prompt:
          "Brut HT = 6 910 € ; Remise 15 % ; TVA 19,6 %. Calcule le Net à payer.",
        steps: [
          "Remise = 6 910 × 0,15 = **1 036,50 €**",
          "Net commercial HT = 6 910 − 1 036,50 = **5 873,50 €**",
          "TVA = 5 873,50 × 0,196 = **1 151,21 €**",
          "Net à payer = 5 873,50 + 1 151,21 = **7 024,71 €**",
        ],
        answer: "Net à payer ≈ 7 024,71 €",
      },
      {
        id: "tva-2",
        title: "Facture avec remise + escompte",
        emoji: "📝",
        category: "Net à payer avec escompte",
        prompt:
          "Brut HT = 4 000 € ; Remise 5 % ; Escompte 2 % ; TVA 20 %. Calcule le Net à payer.",
        hint: "L'escompte (réduction financière) s'applique APRÈS les réductions commerciales et AVANT la TVA.",
        steps: [
          "Net commercial = 4 000 × 0,95 = **3 800 €**",
          "Escompte = 3 800 × 0,02 = **76 €**",
          "Net financier = 3 800 − 76 = **3 724 €**",
          "TVA = 3 724 × 0,20 = **744,80 €**",
          "Net à payer = 3 724 + 744,80 = **4 468,80 €**",
        ],
        answer: "Net à payer = 4 468,80 €",
      },
      {
        id: "tva-3",
        title: "TVA à décaisser",
        emoji: "🏛️",
        category: "Calcul mensuel",
        prompt:
          "Sur le mois de mars : Ventes HT = 80 000 € (TVA 20 %). Achats HT = 50 000 € (TVA 20 %). Quelle TVA à reverser à l'État ?",
        steps: [
          "TVA collectée = 80 000 × 0,20 = **16 000 €**",
          "TVA déductible = 50 000 × 0,20 = **10 000 €**",
          "TVA à décaisser = 16 000 − 10 000 = **6 000 €**",
        ],
        answer: "6 000 € à reverser à l'État",
      },
      {
        id: "tva-4",
        title: "Crédit de TVA",
        emoji: "♻️",
        category: "Cas particulier",
        prompt:
          "TVA collectée = 4 000 € ; TVA déductible = 7 000 €. Que se passe-t-il ?",
        steps: [
          "4 000 − 7 000 = **−3 000 €**",
          "L'entreprise a payé plus de TVA qu'elle n'en a collectée.",
          "→ **Crédit de TVA** : reportable sur la déclaration suivante OU remboursable par l'État sous conditions.",
        ],
        answer: "Crédit de TVA de 3 000 € (à reporter ou se faire rembourser).",
      },
    ],
  },
  {
    slug: "amortissement",
    title: "Amortissements",
    emoji: "📉",
    intro: "Amortissement linéaire = constatation comptable de la dépréciation. **Ne sort pas de cash**.",
    formula:
      "\\text{Annuité} = \\frac{\\text{Valeur d'origine}}{\\text{Durée de vie}}",
    exercises: [
      {
        id: "am-1",
        title: "Annuité simple",
        emoji: "🚗",
        category: "Amortissement linéaire",
        prompt:
          "Achat d'un véhicule utilitaire 24 000 € HT. Durée de vie 5 ans. Calcule l'annuité d'amortissement et la VNC après 3 ans.",
        steps: [
          "Annuité = 24 000 / 5 = **4 800 €/an**",
          "Amortissements cumulés sur 3 ans = 4 800 × 3 = **14 400 €**",
          "VNC après 3 ans = 24 000 − 14 400 = **9 600 €**",
        ],
        answer: "Annuité = 4 800 € ; VNC après 3 ans = 9 600 €.",
      },
      {
        id: "am-2",
        title: "Tableau d'amortissement",
        emoji: "📋",
        category: "Sur 4 ans",
        prompt:
          "Matériel informatique 6 000 € HT, durée 3 ans. Trace le tableau d'amortissement.",
        steps: [
          "Annuité = 6 000 / 3 = **2 000 €/an**",
          "| Année | Annuité | Cumul | VNC |\n|---|---|---|---|\n| 1 | 2 000 | 2 000 | 4 000 |\n| 2 | 2 000 | 4 000 | 2 000 |\n| 3 | 2 000 | 6 000 | 0 |",
          "Au bout de 3 ans, le bien est intégralement amorti (VNC = 0), même s'il continue d'exister physiquement.",
        ],
        answer: "Annuité 2 000. VNC : 4000 → 2000 → 0.",
      },
      {
        id: "am-3",
        title: "Choix de durée",
        emoji: "🎯",
        category: "Réflexion",
        prompt:
          "Une entreprise achète un bâtiment à 500 000 € HT. Quelle durée d'amortissement raisonnable, et quelle annuité ? Que peut-on dire de l'effet sur la trésorerie ?",
        steps: [
          "Durée typique : **20-50 ans**. Prenons 25 ans.",
          "Annuité = 500 000 / 25 = **20 000 €/an**",
          "Effet : la charge réduit le résultat (et donc l'IS), mais **ne sort pas de cash**.",
          "→ L'amortissement crée une **capacité d'autofinancement** : économie d'impôt sans décaissement.",
        ],
        answer: "Annuité = 20 000 €/an pour 25 ans. Génère de la CAF.",
      },
    ],
  },
  {
    slug: "salaire-charges",
    title: "Paye et coût employeur",
    emoji: "👥",
    intro:
      "Salaire net = brut − cotisations salariales. Coût employeur = brut + cotisations patronales.",
    formula: "\\text{Coût employeur} = \\text{Brut} + \\text{Cotisations patronales}",
    exercises: [
      {
        id: "sal-1",
        title: "Du brut au net",
        emoji: "💰",
        category: "Salaire mensuel",
        prompt:
          "Brut 2 800 € ; cotisations salariales 22 % du brut. Calcule le net.",
        steps: [
          "Cotisations salariales = 2 800 × 0,22 = **616 €**",
          "Net = 2 800 − 616 = **2 184 €**",
        ],
        answer: "Net = 2 184 €",
      },
      {
        id: "sal-2",
        title: "Coût total employeur",
        emoji: "🏢",
        category: "Charges patronales",
        prompt:
          "Brut 3 200 € ; cotisations salariales 22 % ; cotisations patronales 30 %. Calcule le net et le coût total employeur.",
        steps: [
          "Cotisations salariales = 3 200 × 0,22 = 704 → **Net = 2 496 €**",
          "Cotisations patronales = 3 200 × 0,30 = 960",
          "**Coût employeur = 3 200 + 960 = 4 160 €**",
          "💡 L'employeur paie 4 160 €, le salarié reçoit 2 496 €. La différence (1 664 €) part dans les caisses sociales.",
        ],
        answer: "Net = 2 496 € ; coût employeur = 4 160 €.",
      },
      {
        id: "sal-3",
        title: "Coin fiscal",
        emoji: "📊",
        category: "Réflexion",
        prompt:
          "Avec un brut de 2 500 € et un coût employeur de 3 250 €, quel est le « coin fiscal » (% du coût employeur qui ne va pas dans la poche du salarié) ?",
        hint: "Coin fiscal = (Coût employeur − Net salarial) / Coût employeur.",
        steps: [
          "On ne donne pas directement le net. Si cotisations salariales = 22 % :",
          "Net = 2 500 × 0,78 = 1 950 €",
          "Coin fiscal = (3 250 − 1 950) / 3 250 = 1 300 / 3 250 ≈ **40 %**",
          "→ 40 % de ce que paie l'employeur ne va pas au salarié (sécu, retraite, chômage).",
        ],
        answer: "≈ 40 % de coin fiscal.",
      },
    ],
  },
];
