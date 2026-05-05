import type { ExerciseSection } from "./exercises";

// Sections supplémentaires d'exercices gestion — niveau 2 et thèmes ciblés.

export const exerciseSectionsGestionBonus: ExerciseSection[] = [
  {
    slug: "cr-bilan2",
    title: "Compte de Résultat & Bilan — niveau 2",
    emoji: "📊",
    intro:
      "Cas pratiques classiques de partiel : présenter un CR ou un bilan à partir d'une liste d'opérations.",
    formula: "\\text{Total Actif} = \\text{Total Passif}",
    exercises: [
      {
        id: "g-cr-1",
        title: "SARL DAVEL",
        emoji: "🥩",
        category: "Compte de résultat",
        prompt:
          "SARL DAVEL — Boucherie. Données de l'exercice N (en €) :\n- Achats de marchandises : 220 000\n- Achats de matières premières : 198 000\n- Entretien et réparations : 12 000\n- Locations : 7 200\n- IS : 6 400\n- Rémunération du personnel : 22 500\n- Charges de sécurité sociale : 9 200\n- Participation versée aux salariés : 2 000\n- Ventes de produits finis : 480 000\n- Ventes de marchandises : 278 930\n- Revenus des placements : 370\n\nCalcule le résultat de l'exercice.",
        hint: "Total Charges = somme de toutes les charges, y compris IS et participation.",
        steps: [
          "Charges d'exploitation = 220 000 + 198 000 + 12 000 + 7 200 + 22 500 + 9 200 = **468 900**",
          "Total Charges = 468 900 + 6 400 (IS) + 2 000 (participation) = **477 300**",
          "Total Produits = 480 000 + 278 930 + 370 = **759 300**",
          "Résultat de l'exercice = 759 300 − 477 300 = **+282 000 € (bénéfice)**",
        ],
        answer: "Bénéfice de 282 000 €.",
      },
      {
        id: "g-cr-2",
        title: "Trois résultats à calculer",
        emoji: "🧮",
        category: "Décomposition du résultat",
        prompt:
          "Données : CA = 850 ; Charges d'exploitation = 720 ; Produits financiers = 14 ; Charges financières = 28 ; Produits exceptionnels = 32 ; Charges exceptionnelles = 12 ; IS = 35.\n\nCalcule : 1) résultat d'exploitation, 2) résultat financier, 3) résultat exceptionnel, 4) résultat net.",
        steps: [
          "1) Résultat d'exploitation = 850 − 720 = **+130**",
          "2) Résultat financier = 14 − 28 = **−14**",
          "3) Résultat exceptionnel = 32 − 12 = **+20**",
          "Résultat avant IS = 130 − 14 + 20 = **+136**",
          "4) Résultat net = 136 − 35 = **+101**",
        ],
        answer: "Exploitation +130 ; Financier −14 ; Exceptionnel +20 ; Net +101.",
      },
      {
        id: "g-cr-3",
        title: "Bilan d'ouverture",
        emoji: "🆕",
        category: "Création SAS",
        prompt:
          "M. Durand crée la SAS NEXT le 1ᵉʳ juillet N avec ces apports :\n- Bâtiment 240 000 €\n- Matériel 25 000 €\n- Stock matières premières 14 000 €\n- 21 000 € sur compte bancaire\n- Le bâtiment a été partiellement financé par un emprunt de 50 000 €\n\nCalcule le capital social et présente le bilan d'ouverture.",
        steps: [
          "Total apports en nature = 240 000 + 25 000 + 14 000 = **279 000 €**",
          "Apports en numéraire = **21 000 €**",
          "Total brut = 300 000 € − Emprunt 50 000 = **Capital social 250 000 €**",
          "Bilan d'ouverture (au 01/07/N) :",
          "Actif : Bâtiment 240 000 + Matériel 25 000 + Stock 14 000 + Banque 21 000 = **300 000**",
          "Passif : Capital 250 000 + Emprunt 50 000 = **300 000** ✓",
        ],
        answer: "Capital social = 250 000 € ; Total bilan = 300 000 €.",
      },
      {
        id: "g-cr-4",
        title: "Capital à retrouver",
        emoji: "🔍",
        category: "Lecture inverse",
        prompt:
          "Au 31/12/N, on connaît : Total Actif = 580 000 €. Côté passif on a : Réserves = 25 000, Résultat de l'exercice = 8 000, Emprunts = 120 000, Fournisseurs = 64 000, Dettes fiscales = 18 000.\n\nCalcule le capital social.",
        hint: "Capital = Total Actif − Réserves − Résultat − Toutes les dettes.",
        steps: [
          "Total dettes = 120 + 64 + 18 = **202 000 €**",
          "Capitaux propres = Total Actif − Dettes = 580 − 202 = **378 000 €**",
          "Capital = Capitaux propres − Réserves − Résultat = 378 − 25 − 8 = **345 000 €**",
        ],
        answer: "Capital social = 345 000 €.",
      },
      {
        id: "g-cr-5",
        title: "Affaire en péril ?",
        emoji: "🚨",
        category: "Diagnostic financier",
        prompt:
          "SARL TopFood :\n- Actif Immobilisé = 180 000\n- Actif Circulant = 90 000\n- Capital = 100 000\n- Réserves = 0\n- Résultat = −60 000 (perte)\n- Emprunts = 130 000\n- Fournisseurs = 100 000\n\nVérifie l'égalité du bilan et donne ton diagnostic en 2 phrases.",
        steps: [
          "Total Actif = 180 + 90 = **270 000**",
          "Total Passif = (100 + 0 − 60) + 130 + 100 = 40 + 130 + 100 = **270 000** ✓",
          "Diagnostic : la perte de 60 k€ a quasiment englouti les capitaux propres (40 k€ restant). L'entreprise est très fragile : si elle perd encore l'an prochain, elle se retrouvera en **situation nette négative** → procédure d'alerte / risque de cessation de paiement.",
        ],
        answer:
          "Bilan équilibré à 270 000 €, mais capitaux propres très faibles (40 k€) : alerte rouge.",
      },
    ],
  },
  {
    slug: "ecritures2",
    title: "Écritures comptables — niveau 2",
    emoji: "✏️",
    intro:
      "Cas concrets : passage des écritures avec calcul de la TVA et choix du bon compte.",
    formula: "\\text{EMPLOIS (débit)} = \\text{RESSOURCES (crédit)}",
    exercises: [
      {
        id: "g-ec-1",
        title: "Achat à crédit avec TVA",
        emoji: "🛒",
        category: "Facture fournisseur",
        prompt:
          "Achat de matières premières à crédit : 8 000 € HT, TVA 20 %. Passe l'écriture comptable.",
        steps: [
          "TVA = 8 000 × 0,20 = **1 600 €**",
          "TTC = 8 000 + 1 600 = **9 600 €**",
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 601 Achats matières premières | 8 000 | |\n| 44566 TVA déductible | 1 600 | |\n| 401 Fournisseur | | 9 600 |",
        ],
        answer: "601 + 44566 D ; 401 C 9 600 €.",
      },
      {
        id: "g-ec-2",
        title: "Vente à crédit avec remise",
        emoji: "🏷️",
        category: "Facture client",
        prompt:
          "Vente de marchandises à crédit : Brut HT 5 000 €, remise 10 %, TVA 20 %. Passe l'écriture.",
        hint: "Net commercial = Brut × (1 − remise). TVA sur net commercial.",
        steps: [
          "Net commercial = 5 000 × 0,90 = **4 500 € HT**",
          "TVA = 4 500 × 0,20 = **900 €**",
          "Net à payer TTC = 4 500 + 900 = **5 400 €**",
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 411 Client | 5 400 | |\n| 707 Ventes marchandises | | 4 500 |\n| 44571 TVA collectée | | 900 |",
        ],
        answer: "411 D 5 400 ; 707 C 4 500 ; 44571 C 900.",
      },
      {
        id: "g-ec-3",
        title: "Achat avec escompte",
        emoji: "💰",
        category: "Réduction financière",
        prompt:
          "Facture : Brut HT 6 000, remise 5 %, escompte 2 %, TVA 20 %, payée par chèque.\n\nCalcule le net à payer et passe l'écriture (sans détailler l'escompte au compte 765 pour simplifier).",
        steps: [
          "Net commercial = 6 000 × 0,95 = **5 700**",
          "Escompte = 5 700 × 0,02 = **114**",
          "Net financier = 5 700 − 114 = **5 586 €**",
          "TVA = 5 586 × 0,20 = **1 117,20 €**",
          "Net à payer = 5 586 + 1 117,20 = **6 703,20 €**",
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 607 Achats marchandises | 5 586 | |\n| 44566 TVA déductible | 1 117,20 | |\n| 512 Banque | | 6 703,20 |",
        ],
        answer: "Net à payer = 6 703,20 € ; 607 + 44566 D ; 512 C.",
      },
      {
        id: "g-ec-4",
        title: "Encaissement client",
        emoji: "🏦",
        category: "Règlement",
        prompt:
          "Le client X règle sa facture de 4 800 € TTC par virement bancaire. Passe l'écriture.",
        steps: [
          "Le virement diminue la créance et augmente la banque.",
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 512 Banque | 4 800 | |\n| 411 Client | | 4 800 |",
        ],
        answer: "512 D 4 800 ; 411 C 4 800.",
      },
      {
        id: "g-ec-5",
        title: "Paiement fournisseur immo",
        emoji: "🏗️",
        category: "404 vs 401",
        prompt:
          "L'entreprise paie par chèque sa dette envers un fournisseur d'immobilisation : 18 000 €. Passe l'écriture.",
        hint: "Pour un fournisseur d'immo, on utilise 404 (pas 401).",
        steps: [
          "| Compte | Débit | Crédit |\n|---|---|---|\n| 404 Fournisseur d'immobilisation | 18 000 | |\n| 512 Banque | | 18 000 |",
          "💡 404 et 401 sont 2 comptes différents pour des raisons d'analyse — distinguer les dettes liées à l'investissement de celles liées à l'exploitation courante.",
        ],
        answer: "404 D 18 000 ; 512 C 18 000.",
      },
      {
        id: "g-ec-6",
        title: "Paie complète",
        emoji: "👷",
        category: "Bordereau de paie",
        prompt:
          "Bulletin de paie : salaire brut 3 000 €, cotisations salariales 660 €, cotisations patronales 900 €. L'entreprise comptabilise la paie le 27 du mois et paie les cotisations le 10 du mois suivant.\n\nPasse les 3 écritures.",
        steps: [
          "**1. Comptabilisation du salaire (27/M)** :",
          "| 641 Rémunération du personnel | 3 000 | |\n| 421 Personnel — rémunérations dues | | 2 340 |\n| 43 Sécurité sociale et autres organismes | | 660 |",
          "**2. Charges patronales (27/M)** :",
          "| 645 Charges de sécurité sociale | 900 | |\n| 43 Sécurité sociale et autres organismes | | 900 |",
          "**3. Paiement des cotisations à l'URSSAF (10/M+1)** :",
          "| 43 Sécurité sociale et autres organismes | 1 560 | |\n| 512 Banque | | 1 560 |",
        ],
        answer: "641 + 645 = charges (3 900) ; 43 = dette (1 560) ; 421 = net (2 340).",
      },
    ],
  },
  {
    slug: "tva-gestion",
    title: "TVA — calculs ciblés",
    emoji: "💸",
    intro:
      "Beaucoup d'exercices sur la TVA : calcul du net, calcul de la TVA à décaisser, taux variables.",
    formula: "\\text{TVA à décaisser} = \\text{TVA collectée} - \\text{TVA déductible}",
    exercises: [
      {
        id: "g-tva-1",
        title: "Du HT au TTC",
        emoji: "➕",
        category: "Calcul direct",
        prompt:
          "Une facture indique 1 250 € HT. Quelle TVA et quel TTC à 20 % ? Et à 5,5 % ? Et à 10 % ?",
        steps: [
          "À 20 % : TVA = 1 250 × 0,20 = **250** ; TTC = **1 500 €**",
          "À 10 % : TVA = 125 ; TTC = **1 375 €**",
          "À 5,5 % : TVA = 68,75 ; TTC = **1 318,75 €**",
        ],
        answer: "TTC = 1 500 / 1 375 / 1 318,75 € selon le taux.",
      },
      {
        id: "g-tva-2",
        title: "Du TTC au HT",
        emoji: "➖",
        category: "Calcul inverse",
        prompt:
          "Tu as une facture TTC à 1 200 € avec une TVA à 20 %. Quel est le HT ? Quelle est la TVA ?",
        hint: "HT = TTC / (1 + taux). TVA = TTC − HT.",
        steps: [
          "HT = 1 200 / 1,20 = **1 000 €**",
          "TVA = 1 200 − 1 000 = **200 €**",
          "Vérification : 1 000 × 0,20 = 200 ✓",
        ],
        answer: "HT = 1 000 € ; TVA = 200 €.",
      },
      {
        id: "g-tva-3",
        title: "TVA à décaisser",
        emoji: "🏛️",
        category: "Bilan mensuel",
        prompt:
          "Sur le mois d'avril :\n- Ventes HT = 24 000 € (TVA 20 %)\n- Achats HT = 16 000 € (TVA 20 %)\n- Achat d'un ordinateur HT = 1 200 € (TVA 20 %, achat d'immo)\n\nQuelle TVA à reverser à l'État ?",
        hint: "Tout achat avec TVA déductible compte (immo via 44562, achats via 44566).",
        steps: [
          "TVA collectée (44571) = 24 000 × 0,20 = **4 800 €**",
          "TVA déductible (44566) = 16 000 × 0,20 = **3 200 €**",
          "TVA déductible sur immo (44562) = 1 200 × 0,20 = **240 €**",
          "TVA à décaisser = 4 800 − 3 200 − 240 = **1 360 €**",
        ],
        answer: "1 360 € à reverser à l'État.",
      },
      {
        id: "g-tva-4",
        title: "Crédit de TVA",
        emoji: "♻️",
        category: "Cas inverse",
        prompt:
          "Sur le mois de mai : TVA collectée = 2 800 €, TVA déductible = 4 200 €. Que se passe-t-il ?",
        steps: [
          "Différence = 2 800 − 4 200 = **−1 400 €**",
          "→ **Crédit de TVA** : l'entreprise a payé plus de TVA qu'elle n'en a collectée.",
          "Options : reporter le crédit sur la déclaration suivante, ou demander le remboursement à l'État.",
        ],
        answer: "Crédit de TVA = 1 400 €.",
      },
      {
        id: "g-tva-5",
        title: "Mixe de taux",
        emoji: "🥗",
        category: "Plusieurs taux",
        prompt:
          "Restaurant : ventes du mois en TTC :\n- Plats à emporter (TVA 5,5 %) = 8 440 € TTC\n- Restauration sur place (TVA 10 %) = 22 000 € TTC\n- Boissons alcoolisées (TVA 20 %) = 3 600 € TTC\n\nCalcule le HT total et la TVA collectée totale.",
        hint: "HT = TTC / (1 + taux). Calcule pour chaque ligne séparément.",
        steps: [
          "Plats à emporter HT = 8 440 / 1,055 = **8 000 €** ; TVA = 440 €",
          "Restauration HT = 22 000 / 1,10 = **20 000 €** ; TVA = 2 000 €",
          "Alcool HT = 3 600 / 1,20 = **3 000 €** ; TVA = 600 €",
          "Total HT = 8 000 + 20 000 + 3 000 = **31 000 €**",
          "Total TVA collectée = 440 + 2 000 + 600 = **3 040 €**",
        ],
        answer: "HT total = 31 000 € ; TVA collectée = 3 040 €.",
      },
      {
        id: "g-tva-6",
        title: "TVA et marge bénéficiaire",
        emoji: "📈",
        category: "Calcul croisé",
        prompt:
          "Une entreprise achète des produits à 50 € HT et les revend 80 € HT (TVA 20 %). Sur 100 ventes, calcule : marge brute, TVA collectée, TVA déductible, TVA à décaisser.",
        steps: [
          "Marge brute par unité = 80 − 50 = **30 € HT**",
          "Marge brute totale (100 unités) = 100 × 30 = **3 000 €**",
          "TVA collectée totale = 100 × 80 × 0,20 = **1 600 €**",
          "TVA déductible totale = 100 × 50 × 0,20 = **1 000 €**",
          "TVA à décaisser = 1 600 − 1 000 = **600 €**",
          "💡 La TVA à décaisser est exactement 20 % de la marge HT (600 = 3 000 × 0,20).",
        ],
        answer: "Marge 3 000 € ; TVA à décaisser 600 €.",
      },
    ],
  },
  {
    slug: "amortissements2",
    title: "Amortissements — niveau 2",
    emoji: "📉",
    intro:
      "Plans d'amortissement, prorata temporis, VNC à différentes dates.",
    formula:
      "\\text{Annuité} = \\frac{\\text{Valeur d'origine}}{\\text{Durée}}",
    exercises: [
      {
        id: "g-am-1",
        title: "Plan d'amortissement complet",
        emoji: "🚚",
        category: "Tableau d'amortissement",
        prompt:
          "Un camion est acheté 36 000 € HT le 1ᵉʳ janvier N. Durée d'utilisation : 6 ans. Trace le plan d'amortissement linéaire complet.",
        steps: [
          "Annuité = 36 000 / 6 = **6 000 €/an**",
          "| Année | Annuité | Cumul | VNC |\n|---|---|---|---|\n| N | 6 000 | 6 000 | 30 000 |\n| N+1 | 6 000 | 12 000 | 24 000 |\n| N+2 | 6 000 | 18 000 | 18 000 |\n| N+3 | 6 000 | 24 000 | 12 000 |\n| N+4 | 6 000 | 30 000 | 6 000 |\n| N+5 | 6 000 | 36 000 | 0 |",
        ],
        answer: "Annuité 6 000. VNC en N+3 = 12 000 ; en N+5 = 0.",
      },
      {
        id: "g-am-2",
        title: "Prorata temporis",
        emoji: "📅",
        category: "Acquisition en cours d'année",
        prompt:
          "Acquisition d'un matériel : 24 000 € HT le 1ᵉʳ avril N. Durée 4 ans. Calcule l'annuité de l'année N (prorata).",
        hint: "Du 1er avril au 31 décembre = 9 mois sur 12.",
        steps: [
          "Annuité pleine = 24 000 / 4 = **6 000 €/an**",
          "Prorata pour N = 6 000 × 9/12 = **4 500 €**",
          "Pour les années N+1 à N+3 = 6 000 € chaque année",
          "Pour N+4 (dernière), prorata = 6 000 × 3/12 = **1 500 €**",
          "Vérification : 4 500 + 6 000 × 3 + 1 500 = 24 000 ✓",
        ],
        answer: "Annuité N = 4 500 €. Bien achevé sur 5 années partielles.",
      },
      {
        id: "g-am-3",
        title: "VNC à mi-parcours",
        emoji: "⏳",
        category: "Calcul VNC",
        prompt:
          "Une machine de 50 000 € HT, durée 10 ans, acquise au 01/01/N.\n\n1) VNC au 31/12/N+3 ?\n2) VNC au 31/12/N+7 ?\n3) Quand la VNC tombe-t-elle à 5 000 € ?",
        steps: [
          "Annuité = 50 000 / 10 = **5 000 €/an**",
          "1) 4 années passées (N à N+3) → cumul = 20 000 ; VNC = **30 000 €**",
          "2) 8 années passées → cumul = 40 000 ; VNC = **10 000 €**",
          "3) 5 000 € de VNC → cumul = 45 000 € → 9 années passées → fin de N+8",
        ],
        answer: "VNC N+3 = 30 000 ; N+7 = 10 000. VNC = 5 000 fin N+8.",
      },
      {
        id: "g-am-4",
        title: "Cession en cours de vie",
        emoji: "💱",
        category: "Vente d'immo",
        prompt:
          "Une voiture achetée 18 000 € HT le 01/01/N (durée 5 ans) est vendue 7 000 € HT le 31/12/N+2. Calcule la VNC à la cession et la plus-value (ou moins-value).",
        steps: [
          "Annuité = 18 000 / 5 = **3 600 €/an**",
          "3 années écoulées (N à N+2) → cumul = 10 800 €",
          "VNC = 18 000 − 10 800 = **7 200 €**",
          "Prix de vente = 7 000 €",
          "Plus / moins value = Prix − VNC = 7 000 − 7 200 = **−200 € (moins-value)**",
        ],
        answer: "VNC = 7 200 € ; moins-value de 200 €.",
      },
      {
        id: "g-am-5",
        title: "Amortir ou pas ?",
        emoji: "🤔",
        category: "Distinction immo",
        prompt:
          "Pour chacun de ces biens, indique : (A) amortissable ou non et (B) catégorie d'immobilisation.\n\n1. Terrain agricole 80 000 €\n2. Logiciel comptable 4 000 € (utilisation 3 ans)\n3. Brevet 50 000 € (validité 20 ans)\n4. Bâtiment 250 000 €\n5. Caisse de la boutique 800 €\n6. Voiture de société 22 000 €",
        steps: [
          "1. **Terrain** : NON amortissable (durée illimitée). Immo CORPORELLE.",
          "2. **Logiciel** : amortissable sur 3 ans. Immo INCORPORELLE.",
          "3. **Brevet** : amortissable sur 20 ans (durée juridique). Immo INCORPORELLE.",
          "4. **Bâtiment** : amortissable (souvent 20-50 ans). Immo CORPORELLE.",
          "5. **Caisse** : pas une immo (mobilier de faible valeur, charge directe).",
          "6. **Voiture** : amortissable sur 4-5 ans. Immo CORPORELLE.",
        ],
        answer: "Voir détails. Terrain ≠ amortissable, le reste oui.",
      },
    ],
  },
  {
    slug: "salaires-gestion",
    title: "Paie & coût employeur",
    emoji: "👷",
    intro:
      "Salaire net, brut, super-brut, distribution charges. Très demandé en partiel.",
    formula:
      "\\text{Coût employeur} = \\text{Brut} \\times (1 + \\text{taux patronal})",
    exercises: [
      {
        id: "g-sal-1",
        title: "Du brut au net",
        emoji: "💵",
        category: "Calcul net",
        prompt:
          "Salarié : brut mensuel 2 800 €. Cotisations salariales totales = 22 % du brut. Calcule le net à payer.",
        steps: [
          "Cotisations salariales = 2 800 × 0,22 = **616 €**",
          "Net = 2 800 − 616 = **2 184 €**",
        ],
        answer: "Net = 2 184 €.",
      },
      {
        id: "g-sal-2",
        title: "Coût total employeur",
        emoji: "🏢",
        category: "Super-brut",
        prompt:
          "Salaire brut 3 200 €. Charges patronales = 30 % du brut. Calcule le coût total pour l'employeur.",
        steps: [
          "Charges patronales = 3 200 × 0,30 = **960 €**",
          "Coût employeur = 3 200 + 960 = **4 160 €**",
          "💡 L'employeur paie 4 160 € pour que le salarié reçoive son brut de 3 200.",
        ],
        answer: "Coût total = 4 160 €.",
      },
      {
        id: "g-sal-3",
        title: "Coin fiscal",
        emoji: "📐",
        category: "Indicateur clé",
        prompt:
          "Brut 2 500 € ; cotisations salariales 22 % ; cotisations patronales 30 %. Calcule le coin fiscal (% du coût employeur qui ne va pas dans la poche du salarié).",
        hint: "Coin fiscal = (Coût employeur − Net) / Coût employeur.",
        steps: [
          "Cotisations salariales = 2 500 × 0,22 = 550 → Net = 1 950 €",
          "Charges patronales = 2 500 × 0,30 = 750",
          "Coût employeur = 2 500 + 750 = 3 250 €",
          "Coin fiscal = (3 250 − 1 950) / 3 250 = 1 300 / 3 250 ≈ **40,0 %**",
          "💡 Pour 1 € qui va au salarié, l'employeur paie 1,67 €.",
        ],
        answer: "Coin fiscal ≈ 40 %.",
      },
      {
        id: "g-sal-4",
        title: "Augmentation de salaire",
        emoji: "📈",
        category: "Effet net",
        prompt:
          "L'employeur veut augmenter le salaire net du salarié de 100 €/mois. Cotisations salariales = 22 %. De combien doit augmenter le brut ? Et quel sera le surcoût employeur (charges patronales 30 %) ?",
        hint: "Pour +100 € net, il faut +X brut tel que X × 0,78 = 100.",
        steps: [
          "Brut nécessaire : 100 / (1 − 0,22) = 100 / 0,78 ≈ **128,21 € de brut en plus**",
          "Surcoût employeur = 128,21 × 1,30 = **166,67 €**",
          "💡 Pour donner 100 € net en plus, l'employeur paie 166,67 € en plus. Le coin fiscal mange 40 % de l'effort.",
        ],
        answer: "Brut +128,21 € ; coût employeur +166,67 €.",
      },
      {
        id: "g-sal-5",
        title: "Bordereau pour 5 salariés",
        emoji: "👥",
        category: "Masse salariale",
        prompt:
          "Une PME de 5 salariés, tous payés 2 400 € brut/mois. Cotisations salariales 22 %, patronales 30 %.\n\nCalcule pour le mois :\n1) Salaires nets totaux\n2) Cotisations URSSAF totales (sal + pat)\n3) Coût total employeur",
        steps: [
          "Salaire net unitaire = 2 400 × 0,78 = 1 872 €",
          "1) Salaires nets totaux = 5 × 1 872 = **9 360 €**",
          "Cotisations salariales totales = 5 × (2 400 × 0,22) = 5 × 528 = 2 640 €",
          "Cotisations patronales totales = 5 × (2 400 × 0,30) = 5 × 720 = 3 600 €",
          "2) URSSAF totales = 2 640 + 3 600 = **6 240 €**",
          "3) Coût employeur total = 5 × 2 400 × 1,30 = **15 600 €**",
          "Vérification : 9 360 + 6 240 = 15 600 ✓",
        ],
        answer: "Net 9 360 ; URSSAF 6 240 ; coût total 15 600 €.",
      },
    ],
  },
  {
    slug: "balances",
    title: "Balance et clôture",
    emoji: "⚖️",
    intro:
      "Balance des comptes, vérification de l'égalité débit = crédit, passage du grand-livre au CR + bilan.",
    formula: "\\text{Total Débits} = \\text{Total Crédits}",
    exercises: [
      {
        id: "g-bal-1",
        title: "Balance — vérifier l'égalité",
        emoji: "✅",
        category: "Lecture balance",
        prompt:
          "Balance partielle :\n\n| Compte | Débit | Crédit |\n|---|---|---|\n| 101 Capital | | 100 000 |\n| 215 Matériel | 32 500 | |\n| 411 Clients | 18 000 | |\n| 401 Fournisseurs | | 25 000 |\n| 512 Banque | 9 500 | |\n| 607 Achats | 65 000 | |\n| 707 Ventes | | 92 000 |\n| 641 Salaires | 12 000 | |\n| 44571 TVA col. | | 2 800 |\n| 44566 TVA déd. | 1 600 | |\n| Caisse | 1 200 | |\n\nLa balance est-elle équilibrée ?",
        hint: "Total débits doit = total crédits.",
        steps: [
          "Total débits = 32 500 + 18 000 + 9 500 + 65 000 + 12 000 + 1 600 + 1 200 = **139 800 €**",
          "Total crédits = 100 000 + 25 000 + 92 000 + 2 800 = **219 800 €**",
          "→ **Pas équilibrée**. Différence = 80 000 €.",
          "💡 Probablement un compte oublié (Réserves ? Résultat ?) ou un montant erroné. À l'examen on signale et on propose une correction.",
        ],
        answer: "Pas équilibrée : écart de 80 000 €.",
      },
      {
        id: "g-bal-2",
        title: "Du grand-livre au CR",
        emoji: "📒",
        category: "Production CR",
        prompt:
          "À partir de la balance ci-dessus (en supposant qu'elle est équilibrée), identifie quels comptes vont au compte de résultat (CR) et quels comptes vont au bilan.",
        steps: [
          "**Comptes de bilan** (classes 1 à 5) :",
          "- 101 Capital → Passif",
          "- 215 Matériel → Actif immobilisé",
          "- 411 Clients → Actif circulant",
          "- 401 Fournisseurs → Passif (dettes)",
          "- 512 Banque → Actif circulant",
          "- 44571 / 44566 → comptes de tiers (État, dans le bilan)",
          "- Caisse (530) → Actif circulant",
          "**Comptes de gestion** (classes 6 et 7) :",
          "- 607 Achats → Charges (CR)",
          "- 707 Ventes → Produits (CR)",
          "- 641 Salaires → Charges (CR)",
        ],
        answer: "Bilan : 101, 215, 411, 401, 512, 44571, 44566, 530. CR : 607, 707, 641.",
      },
      {
        id: "g-bal-3",
        title: "Calcul du résultat depuis la balance",
        emoji: "📊",
        category: "Production résultat",
        prompt:
          "À partir de la balance ci-dessous, calcule le résultat de l'exercice :\n\n- 607 Achats marchandises (D) = 80 000\n- 641 Rémunération du personnel (D) = 35 000\n- 613 Locations (D) = 12 000\n- 661 Charges d'intérêts (D) = 2 500\n- 707 Ventes marchandises (C) = 145 000\n- 76 Produits financiers (C) = 800",
        steps: [
          "Total Charges = 80 000 + 35 000 + 12 000 + 2 500 = **129 500 €**",
          "Total Produits = 145 000 + 800 = **145 800 €**",
          "Résultat = 145 800 − 129 500 = **+16 300 € (bénéfice)**",
        ],
        answer: "Bénéfice de 16 300 €.",
      },
      {
        id: "g-bal-4",
        title: "Clôture des comptes",
        emoji: "🔒",
        category: "Procédure",
        prompt:
          "Énonce les 5 grandes étapes de la clôture des comptes en fin d'exercice.",
        steps: [
          "**1.** Inventaire physique des stocks et des biens.",
          "**2.** Régularisations : amortissements, provisions, charges et produits constatés d'avance.",
          "**3.** Établir la **balance avant inventaire** puis **après inventaire** (balance des soldes).",
          "**4.** Arrêter le **compte de résultat** : déterminer le résultat net.",
          "**5.** Établir le **bilan de clôture** + l'annexe : situation patrimoniale finale.",
          "💡 Ces 5 étapes sont l'aboutissement de toute l'année comptable.",
        ],
        answer:
          "Inventaire → régularisations → balance → CR → bilan + annexe.",
      },
      {
        id: "g-bal-5",
        title: "Erreur dans le journal",
        emoji: "🐛",
        category: "Détection d'erreur",
        prompt:
          "Au journal, on a passé une écriture : 401 Fournisseur (D) 1 200 / 512 Banque (C) 2 100. La balance ne sera pas équilibrée. De combien et quoi corriger ?",
        steps: [
          "Débit = 1 200 vs Crédit = 2 100 → différence = **900 €**",
          "L'écriture est asymétrique : il y a soit une erreur sur le montant débité, soit le compte crédité.",
          "**Correction possible 1** : ajuster 401 à 2 100 € (si paiement intégral).",
          "**Correction possible 2** : ajuster 512 à 1 200 € (si seul ce montant a été décaissé).",
          "Il faut **revenir à la pièce justificative** (relevé bancaire vs facture) pour trancher.",
        ],
        answer: "Écart de 900 € → revenir à la pièce justificative pour corriger.",
      },
    ],
  },
];
