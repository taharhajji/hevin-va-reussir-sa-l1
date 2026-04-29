export type Section = {
  title: string;
  body: string;
  emoji?: string;
};

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  emoji: string;
  hook: string;
  color: string;
  duration: string;
  intro: string;
  sections: Section[];
  keyPoints: string[];
  pieges: string[];
};

import { chaptersTr } from "./chapters.tr";

export const chapters: Chapter[] = [
  {
    slug: "ch1",
    number: 1,
    title: "Introduction : croissance, inflation, chômage",
    emoji: "🌍",
    hook: "Les 3 indicateurs qui font les gros titres.",
    color: "from-rose-400 to-orange-400",
    duration: "20 min",
    intro:
      "Bienvenue en macro ! Ici on regarde l'économie d'un **pays entier** comme un seul gros organisme. Trois indicateurs vitaux : la **croissance** (le pays produit-il plus ?), l'**inflation** (les prix montent-ils ?), le **chômage** (combien de personnes sans boulot ?).",
    sections: [
      {
        emoji: "🅼🅼",
        title: "Macro vs Micro : l'image du parking",
        body: "**Microéconomie** = un automobiliste cherche sa place le plus vite possible. **Macroéconomie** = pourquoi y a-t-il un embouteillage à 18h dans tout le parking ? \n\nLa somme des choix individuels (micro) ne donne **pas** automatiquement le meilleur résultat collectif (macro). Les deux disciplines partagent les mêmes briques (offre, demande, profit) mais utilisent des **modèles différents**.",
      },
      {
        emoji: "📈",
        title: "Croissance : extensive vs intensive",
        body: "La **croissance** = augmentation du PIB sur une période. Mesurée par sa variation en % chaque année.\n\n👉 **Extensive** : on produit plus parce qu'on utilise **plus de ressources** (plus d'usines, plus d'ouvriers, plus de matières premières). Modèle Chine 1990-2010. Limite : ça finit par s'épuiser.\n\n👉 **Intensive** : on produit plus parce qu'on est **plus efficace** (innovation, formation, organisation). Modèle Scandinavie. Limite : il faut investir lourd en R&D.\n\n⚠️ Croissance < 0 → **récession**. Récession technique = 2 trimestres consécutifs de baisse.",
      },
      {
        emoji: "💸",
        title: "Inflation : quand l'euro pèse moins",
        body: "**Inflation** = hausse **généralisée et durable** des prix (pas un seul produit !). C'est aussi une baisse du **pouvoir d'achat de la monnaie** : avec 50 €, tu achètes moins qu'avant.\n\n**Mesure** : INSEE → IPC (Indice des Prix à la Consommation) sur un panier représentatif.\n\n**4 causes (mnémo CDIM)** :\n- **C**oûts (matières premières chères)\n- **D**emande (les gens veulent plus que ce qu'on produit)\n- **I**mportée (l'euro baisse → les imports coûtent plus cher)\n- **M**onétaire (trop de monnaie en circulation)\n\nCible BCE = **2 %**. Trop d'inflation = nocif. Pas assez (déflation) = aussi mauvais.",
      },
      {
        emoji: "👷",
        title: "Chômage : les 3 conditions BIT",
        body: "Pour être chômeur **au sens du BIT** (Bureau International du Travail), il faut **les 3 conditions ensemble** (mnémo SDR) :\n1. **S**ans emploi durant la semaine de référence\n2. **D**isponible pour bosser sous 2 semaines\n3. **R**echerche active sur les 4 dernières semaines\n\n**Plein emploi = chômage < 4 %**.\n\n**Halo** = personnes qui veulent bosser mais ne cochent pas les 3 cases (≈ 3 millions en France, en plus des 2,3 M de chômeurs BIT).",
      },
      {
        emoji: "🌳",
        title: "Croissance vs développement durable",
        body: "La croissance crée des **externalités négatives** (pollution, épuisement des ressources) que le marché ne paye pas tout seul.\n\n**3 outils pour réduire l'empreinte carbone (mnémo QTR)** :\n- **Q**uotas carbone : droits à polluer échangeables (mais ça ne couvre que ~12 % des émissions mondiales).\n- **T**axation : taxe carbone (gilets jaunes ↔ délocalisations = équilibre fragile).\n- **R**églementation : normes, interdictions.\n\n**2 visions** :\n- *Soutenabilité faible* (néolibérale) : le progrès technique sauvera tout.\n- *Soutenabilité forte* (écologiste) : le capital naturel est **irremplaçable**.",
      },
    ],
    keyPoints: [
      "Plein emploi = chômage < 4 %",
      "Cible BCE inflation = 2 %",
      "3 conditions BIT (SDR) cumulatives pour être chômeur",
      "4 facteurs d'inflation : Coûts, Demande, Importée, Monétaire (CDIM)",
      "Croissance extensive = quantités ; intensive = productivité",
      "PIB par habitant en PPA = meilleur indicateur pour comparer",
    ],
    pieges: [
      "Inflation ≠ hausse du prix d'un seul produit (il faut généralisé + durable)",
      "Halo ≠ chômage : ce sont ceux qui veulent bosser mais ratent les 3 conditions BIT",
      "Une déflation est aussi mauvaise qu'une inflation forte",
      "Récession technique = 2 trimestres consécutifs de baisse, pas 1",
    ],
  },
  {
    slug: "ch2",
    number: 2,
    title: "Comptabilité nationale & PIB",
    emoji: "📊",
    hook: "Comment mesurer la richesse d'un pays.",
    color: "from-blue-400 to-cyan-400",
    duration: "30 min",
    intro:
      "La **comptabilité nationale (CN)** est la grande feuille de calcul d'un pays. Elle range tous les acteurs en **6 secteurs** et trace tous les flux. L'agrégat star : le **PIB**, qu'on peut calculer de **3 façons** différentes (et qui donnent toutes le même nombre, par construction).",
    sections: [
      {
        emoji: "🏛️",
        title: "Les 6 secteurs institutionnels",
        body: "Tous les acteurs économiques résidents sont rangés en **6 cases** (à apprendre par cœur) :\n\n| # | Secteur | Exemple |\n|---|---|---|\n| 1 | **Ménages** | Toi, ta famille |\n| 2 | **SNF** (Sociétés Non Financières) | Carrefour, Renault |\n| 3 | **SF** (Sociétés Financières) | BNP Paribas, AXA |\n| 4 | **APU** (Administrations Publiques) | État, Sécu, mairie |\n| 5 | **ISBLSM** | Croix-Rouge, asso de quartier |\n| 6 | **Reste du monde** | Tous les non-résidents |\n\n💡 *Astuce* : un agent **résident** depuis plus d'1 an dans le pays compte dans les 5 premiers, peu importe sa nationalité.",
      },
      {
        emoji: "🎯",
        title: "La Valeur Ajoutée : le concept central",
        body: "$$ \\boxed{VA = P - CI} $$\n\n**Production (P)** = ce que l'agent vend.\n**Consommations Intermédiaires (CI)** = ce qu'il a **détruit ou transformé** dans la production : matières premières, énergie, services achetés.\n\n⚠️ **Salaires, impôts, et machines durables (FBCF) ne sont PAS des CI.**\n\nLa VA se partage entre 3 bénéficiaires (mnémo SEE) :\n- **S**alariés (salaires bruts)\n- **E**tat (cotisations + impôts production)\n- **E**ntreprise (EBE = profits)\n\n**PIB = somme des VA des résidents.**",
      },
      {
        emoji: "🧩",
        title: "L'Équilibre Ressources-Emplois",
        body: "L'identité fondamentale qu'il faut **graver dans ta mémoire** :\n\n$$ \\boxed{P + M = C + CI + FBCF + X} $$\n\n- **Ressources** = ce qui entre : production résidente + importations.\n- **Emplois** = ce qui sort : conso finale + conso intermédiaire + investissement + exportations.\n\nEn faisant apparaître le PIB (PIB = P − CI), on obtient :\n\n$$ \\boxed{PIB = C + FBCF + (X - M)} $$\n\nLe terme **(X − M)** = **solde commercial**. Positif = excédentaire, négatif = déficitaire.",
      },
      {
        emoji: "🔢",
        title: "Le PIB de 3 façons",
        body: "**Approche production** : PIB = Σ VA des résidents → *d'où vient la richesse ?*\n\n**Approche dépense** : PIB = C + FBCF + (X − M) → *comment est-elle utilisée ?*\n\n**Approche revenus** : PIB = Salaires + EBE + Revenus mixtes + Impôts production/imports − Subventions → *qui en profite ?*\n\nLes 3 donnent toujours le **même résultat** par construction comptable.",
      },
      {
        emoji: "📐",
        title: "Déflater le PIB : nominal vs réel",
        body: "**PIB nominal (en valeur)** : prix courants → mélange variation des quantités ET de l'inflation.\n**PIB réel (en volume)** : prix constants d'une année de référence → effet inflation neutralisé.\n\nMéthode des 3 coefficients multiplicateurs :\n\n$$ CM_v = \\frac{\\text{PIB nominal final}}{\\text{PIB nominal initial}} \\quad CM_p = \\frac{\\text{prix final}}{\\text{prix initial}} $$\n\n$$ \\boxed{CM_{volume} = \\frac{CM_v}{CM_p}} $$\n\n💡 *Astuce* : croissance **réelle** = on **divise** la croissance nominale par l'inflation, on ne soustrait pas.",
      },
      {
        emoji: "👨‍👩‍👧",
        title: "FBCF : qu'est-ce qui compte comme investissement ?",
        body: "**FBCF** = Formation Brute de Capital Fixe = montant total des investissements en **actifs durables** (utilisés > 1 an).\n\n- **Entreprises et APU** : machines, bâtiments, brevets, logiciels.\n- **Ménages** : ⚠️ **uniquement le logement** ! Acheter une voiture neuve = consommation finale, pas de la FBCF.\n\n**Taux d'investissement entreprises (France)** = FBCF / VA ≈ **21,1 %**.\n**Taux d'investissement ménages** = FBCF / RDB ≈ **8,2 %**.",
      },
    ],
    keyPoints: [
      "6 secteurs institutionnels : Ménages, SNF, SF, APU, ISBLSM, Reste du monde",
      "VA = P − CI (sans inclure salaires ni impôts !)",
      "Équilibre R-E : P + M = C + CI + FBCF + X",
      "PIB = C + FBCF + (X − M)",
      "3 approches du PIB : production, dépense, revenus",
      "CM volume = CM valeur / CM prix",
    ],
    pieges: [
      "Salaires, impôts, machines durables ≠ consommations intermédiaires",
      "Pour les ménages, FBCF = logement seulement (la voiture neuve = conso finale)",
      "Production non marchande ≠ gratuite : c'est financé par les impôts",
      "Pour passer du nominal au réel, on DIVISE par CM prix (pas soustrait)",
    ],
  },
  {
    slug: "ch3",
    number: 3,
    title: "Revenu, consommation, multiplicateur",
    emoji: "💶",
    hook: "Comment circule l'argent dans l'économie.",
    color: "from-emerald-400 to-teal-500",
    duration: "35 min",
    intro:
      "Le **revenu** sort de la valeur ajoutée et se redistribue en 2 étapes. Les ménages le **consomment** (en partie) et **épargnent** (le reste). Keynes a découvert un truc magique : 1 € investi peut générer **plusieurs €** de PIB grâce au **multiplicateur**.",
    sections: [
      {
        emoji: "🔁",
        title: "Revenu primaire vs secondaire",
        body: "**Revenu primaire** = ce que tu gagnes en participant à la production : salaire, profit, intérêts, dividendes, loyers.\n\n**Revenu secondaire** = revenu primaire **modifié** par la redistribution :\n1. On te prélève (cotisations, impôts).\n2. On te verse des prestations (RSA, retraite, allocations).\n\n**2 logiques** :\n- *Horizontale* (assurance) : tu cotises, tu touches en cas de pépin. Pas de critère de revenu (chômage, retraite, maladie).\n- *Verticale* (assistance) : tu touches sous **condition de ressources** (RSA, APL).\n\n💡 **Salaire net** = brut − cotisations salariales. **L'impôt sur le revenu vient APRÈS**.",
      },
      {
        emoji: "🧮",
        title: "Pouvoir d'achat : la vraie sensation",
        body: "Le **salaire nominal** est ce qui est écrit sur ta fiche de paie. Mais ce qui compte, c'est le **salaire réel** (ajusté de l'inflation).\n\n$$ \\boxed{\\text{Salaire réel final} = \\frac{\\text{Salaire nominal final}}{CM_{prix}}} $$\n\n**Exemple** : 2 500 € en 2021, hausse de 2 %, inflation 6 %.\n- Salaire 2022 = 2 500 × 1,02 = 2 550 €\n- Salaire réel 2022 = 2 550 / 1,06 ≈ **2 405 €** → **perte de pouvoir d'achat**.",
      },
      {
        emoji: "🛒",
        title: "Loi psychologique de Keynes",
        body: '> "Les hommes tendent à accroître leur consommation à mesure que le revenu croît, mais pas d\'une quantité aussi grande que l\'accroissement du revenu." — Keynes, 1936.\n\n**3 idées clés** :\n1. La conso dépend du **revenu courant**.\n2. ↑ revenu → ↑ conso.\n3. **Le supplément de conso est < supplément de revenu**.\n\nDonc : plus tu gagnes, plus tu consommes en valeur, mais en pourcentage de ton revenu, tu épargnes davantage.\n\n💡 C\'est pour ça qu\'une politique de relance est plus efficace si elle vise les **bas revenus** (qui consomment quasi tout) que les hauts revenus (qui épargnent une grosse part).',
      },
      {
        emoji: "📐",
        title: "Propensions à consommer / épargner",
        body: "**Propension Moyenne à Consommer (PMC)** = part du revenu total consommée :\n$$ PMC = \\frac{C}{Y} \\times 100 $$\n\n**Propension marginale à Consommer (Pmc)** = part de chaque € **supplémentaire** consommée :\n$$ Pmc = \\frac{\\Delta C}{\\Delta Y} \\times 100 $$\n\nMême logique pour l'épargne (PMS, Pms).\n\n**Règle d'or** : PMC + PMS = 100 %, et Pmc + Pms = 100 %.",
      },
      {
        emoji: "✨",
        title: "Le multiplicateur keynésien",
        body: "Le concept central :\n\n$$ \\boxed{k = \\frac{1}{1 - Pmc}} \\qquad \\Delta Y = I \\times k $$\n\n**Idée** : l'État dépense 100 €. Le destinataire reçoit 100 €, en consomme une fraction (Pmc), qui devient le revenu de quelqu'un d'autre, etc. À l'infini, ça donne k fois la dépense initiale.\n\n**Exemple** : Pmc = 0,8 → k = 1/(1 − 0,8) = **5**. Une commande publique de 100 M€ génère **500 M€** de PIB en cumul.\n\n⚠️ **Pmc en valeur décimale (0,8 et pas 80 %)** dans la formule.\n\n**4 limites du multiplicateur** :\n- Effet d'éviction par les taux d'intérêt\n- Effet d'éviction par les importations\n- Fardeau de la dette anticipé → épargne\n- Plein emploi → inflation à la place de la production",
      },
      {
        emoji: "🏗️",
        title: "Investissement : 4 déterminants (DREP)",
        body: "Pourquoi une entreprise investit-elle ?\n\n1. **D**emande (réelle, et effet d'accélération si coefficient de capital élevé)\n2. **R**entabilité anticipée (rendements > coûts ?)\n3. P**R**ix relatif des facteurs (capital cher / travail cher → on substitue)\n4. **F**inancement (interne = profits non distribués ; externe = prêts, titres)\n\n**3 logiques d'investissement** :\n- *Remplacement* : compenser usure / obsolescence.\n- *Capacité* : produire plus.\n- *Productivité / rationalisation* : produire **autant avec moins**.",
      },
      {
        emoji: "📏",
        title: "Niveau de vie et UC",
        body: "On ne compare pas les revenus à nombre brut de personnes : un foyer de 2 adultes ne dépense pas 2× plus qu'un seul adulte (économies d'échelle).\n\n**Unités de Consommation (UC)** :\n- 1ᵉʳ adulte = **1**\n- Autre personne ≥ 14 ans = **0,5**\n- Enfant < 14 ans = **0,3**\n\n$$ \\text{Niveau de vie} = \\frac{\\text{Revenu disponible}}{\\text{Nombre d'UC}} $$\n\n**Exemple** : 2 adultes + 1 enfant de 8 ans avec 50 000 €. UC = 1 + 0,5 + 0,3 = 1,8 → niveau de vie = 50 000 / 1,8 ≈ **27 778 €/UC**.",
      },
    ],
    keyPoints: [
      "PMC + PMS = 100 % | Pmc + Pms = 100 %",
      "k = 1 / (1 − Pmc) — Pmc en décimale !",
      "ΔY = I × k",
      "4 déterminants : Demande, Rentabilité, prix Relatif, Financement",
      "UC : 1 / 0,5 / 0,3",
      "Salaire net = brut − cotisations salariales (avant impôt)",
    ],
    pieges: [
      "Le multiplicateur joue dans les 2 sens : ↓ I → ↓ PIB amplifié",
      "Productivité ≠ compétitivité",
      "Niveau de vie = revenu / UC, pas / nombre de personnes",
      "Pour les ménages, FBCF = logement (rappel CH2)",
    ],
  },
  {
    slug: "ch4",
    number: 4,
    title: "Le financement de l'économie",
    emoji: "🏦",
    hook: "Banques, marchés, et la crise de 2008.",
    color: "from-violet-400 to-purple-500",
    duration: "30 min",
    intro:
      "Comment les agents qui ont besoin d'argent (entreprises, État) en obtiennent-ils ? Deux circuits : **par les banques** (indirect) ou **par les marchés** (direct). Les réformes des années 1980 ont basculé l'économie vers les marchés — avec des bénéfices, mais aussi des risques (subprimes 2008).",
    sections: [
      {
        emoji: "🔀",
        title: "Les 2 circuits de financement",
        body: "**Circuit indirect (intermédié)** : tu déposes 100 € à ta banque, qui prête à un voisin. Tu ne sais pas à qui. Modèle dominant en **Europe**.\n\n**Circuit direct (désintermédié)** : tu achètes toi-même un titre (action, obligation) émis par une entreprise. Tu sais où va ton argent. Modèle dominant aux **États-Unis**.\n\n| Critère | Indirect | Direct |\n|---|---|---|\n| Intermédiaire | Banque commerciale | Marchés financiers |\n| Tu connais le destinataire ? | Non | Oui |\n| Type | Intermédiation de bilan | Intermédiation de marché |",
      },
      {
        emoji: "📜",
        title: "Action vs Obligation",
        body: "**Action = titre de PROPRIÉTÉ** :\n- Tu deviens **copropriétaire** de l'entreprise.\n- Tu touches des **dividendes** (part des profits).\n- Tu votes en AG.\n- Pas de remboursement : tant que la société existe, ton action existe.\n\n**Obligation = titre de CRÉANCE** :\n- Tu **prêtes** de l'argent à l'entreprise / l'État.\n- Tu touches des **intérêts** (taux convenu d'avance).\n- L'émetteur **rembourse** à l'échéance.\n- Durée max : 30 ans.\n\n💡 *Mnémo* : **A**ction = **A**ssocié | **O**bligation = **O**n te doit.",
      },
      {
        emoji: "🆕🔄",
        title: "Marché primaire vs secondaire",
        body: "**Marché primaire = NEUF** : émission d'un nouveau titre. L'argent va directement à l'émetteur.\n\n**Marché secondaire = OCCASION** : revente entre investisseurs. L'émetteur ne touche rien. Le prix devient le **cours boursier**, fixé par offre/demande.\n\n💡 La **spéculation** = revendre sur le secondaire plus cher qu'on a payé.",
      },
      {
        emoji: "🇫🇷",
        title: "Les 3D de Bourguinat (1987)",
        body: "Les réformes financières des années 80 reposent sur **3 idées** (les 3D) :\n\n1. **D**écloisonnement : libre circulation des capitaux entre banques et marchés.\n2. **D**éréglementation : suppression des contrôles sur prix et services bancaires.\n3. **D**ésintermédiation : accès direct des entreprises au financement par titres (sans passer par les banques).\n\nUn 4ᵉ D parfois ajouté : **D**ématérialisation (numérisation des marchés).\n\n💡 En France, **loi bancaire de 1984** → **banque universelle** (un même établissement fait dépôts, crédits, marchés).",
      },
      {
        emoji: "📉",
        title: "Crise des subprimes (2008)",
        body: "Chronologie en 4 étapes :\n\n1. **2002-2007** : taux bas aux USA, ménages s'endettent (parfois non solvables = subprimes), bulle immobilière.\n2. **2007** : la FED remonte ses taux à 5 % → mensualités explosent → faillites en chaîne.\n3. **Propagation** : les créances avaient été **titrisées** (transformées en titres financiers échangeables). Toutes les banques mondiales en avaient → **contagion**.\n4. **Septembre 2008** : faillite de **Lehman Brothers** → crise mondiale.\n\n**Réponse** : sauvetage des banques, plans de relance, durcissement des règles prudentielles (**Bâle III**).\n\n⚠️ La titrisation n'est pas la **cause** mais le **vecteur de propagation**.",
      },
      {
        emoji: "⭐",
        title: "Agences de notation",
        body: "**3 agences** dominent : **S**tandard & Poor's, **M**oody's, **F**itch (mnémo SMF).\n\nElles évaluent la **solvabilité** (capacité à rembourser).\n\n**Échelle S&P** : AAA > AA > A > BBB > BB > B > CCC > CC > D\n- AAA : solidité maximale\n- BBB : correct\n- CCC : risque sérieux\n- D : défaut de paiement\n\n💡 Plus la note est basse, plus le taux d'intérêt exigé est élevé.\n\n**Critique** : conflits d'intérêts (les agences sont payées par les émetteurs eux-mêmes !) et erreurs massives en 2008.",
      },
    ],
    keyPoints: [
      "2 circuits : indirect (banques, Europe) vs direct (marchés, USA)",
      "Action = propriété + dividendes ; Obligation = créance + intérêts",
      "Marché primaire = neuf ; secondaire = occasion",
      "3D de Bourguinat : Décloisonnement, Déréglementation, Désintermédiation",
      "Loi bancaire de 1984 : banque universelle en France",
      "Ratio Bâle : fonds propres / engagements ≥ 8 %",
    ],
    pieges: [
      "Action (propriétaire) ≠ Obligation (créancier)",
      "Le détenteur d'obligation n'est PAS propriétaire",
      "Les 3D sont de Bourguinat (1987), pas Hicks (Hicks = endettement vs marchés)",
      "La titrisation est un vecteur de propagation, pas la cause de 2008",
    ],
  },
  {
    slug: "ch5",
    number: 5,
    title: "Monnaie & banques centrales",
    emoji: "🪙",
    hook: "Qui crée l'argent — et comment on le contrôle.",
    color: "from-amber-400 to-yellow-500",
    duration: "25 min",
    intro:
      "La monnaie a 4 fonctions. Elle existe sous 2 formes : **fiduciaire** (pièces et billets, < 10 %) et **scripturale** (dépôts bancaires, > 90 %). Surprise : c'est principalement **les banques commerciales** qui créent la monnaie scripturale en accordant des crédits — pas la banque centrale !",
    sections: [
      {
        emoji: "🎯",
        title: "Les 4 fonctions de la monnaie",
        body: "Sans monnaie, tu serais obligé d'échanger ton temps de travail contre du pain… Le boulanger doit vouloir ton service en échange. Système troc = trop fragile.\n\n**4 fonctions** (mnémo 4E) :\n1. **E**change : faciliter les transactions.\n2. **E**xpression du prix (unité de compte).\n3. **E**pargne (réserve de valeur dans le temps).\n4. **E**conomie : financer l'activité.\n\nFonction symbolique aussi : la monnaie est un signe de **souveraineté** de l'État (effigies, langue).",
      },
      {
        emoji: "💵",
        title: "Fiduciaire vs Scripturale",
        body: "**Monnaie fiduciaire** = pièces (Monnaie de Paris) + billets (Banque de France). Du latin *fides* = confiance. Sa valeur affichée n'a rien à voir avec son coût de production. **< 10 %** de la masse monétaire en France.\n\n**Monnaie scripturale** = écritures dans les comptes bancaires. Mobilisée par chèques, cartes, virements, paiements mobiles. **> 90 %**.\n\n💡 Quand tu as 1 000 € sur ton compte courant, c'est de la **monnaie scripturale** — pas du papier dans un coffre.",
      },
      {
        emoji: "✨",
        title: "La création monétaire (ex nihilo)",
        body: "Tu vas voir un truc bizarre :\n\n👉 Quand tu empruntes 200 000 € à ta banque pour acheter un appart, **la banque ne prend pas l'argent dans une réserve quelque part**. Elle **crée** ces 200 000 € **à partir de rien** (ex nihilo) : ils apparaissent en monnaie scripturale sur ton compte. La masse monétaire augmente.\n\n👉 Quand tu rembourses, la monnaie est **détruite** : elle disparaît de la masse monétaire.\n\n**Globalement**, la masse monétaire évolue selon le **solde** entre créations (nouveaux crédits) et destructions (remboursements).\n\n⚠️ **2 limites à cette création** :\n1. **Réglementation prudentielle (Bâle)** : ratio fonds propres / engagements ≥ **8 %**.\n2. **Politique monétaire** de la banque centrale.",
      },
      {
        emoji: "🏛️",
        title: "Les 3 fonctions de la BCE",
        body: "La **BCE** (Banque Centrale Européenne) gère la zone euro (20 pays).\n\n**3 fonctions** (mnémo PRS) :\n1. **P**olitique monétaire : contrôle la quantité de monnaie. Outil principal : **taux directeurs**.\n2. **R**églementation bancaire : règles prudentielles, encadrement crypto/fintech.\n3. **S**upervision financière : surveille assurances, fonds de pension, risques climat/cyber.\n\n**Mission centrale** : maintenir le **pouvoir d'achat de l'euro** → cible **2 % d'inflation**.",
      },
      {
        emoji: "🎚️",
        title: "Taux directeur : l'outil conventionnel",
        body: "Quand une banque commerciale a besoin de cash, elle se **refinance** auprès de la BC. Le **taux directeur** est le taux qu'elle paie.\n\n👉 BCE ↑ taux directeur → banques ↑ taux de crédit → moins de crédits accordés → moins de demande → ↓ inflation. C'est ce qu'on a vu en 2022-2023.\n\n👉 BCE ↓ taux directeur → l'inverse → relance de l'activité.\n\n⚠️ Le taux directeur **n'est pas** le taux que **toi** tu payes à ta banque. C'est le taux de gros ; ta banque ajoute sa marge.",
      },
      {
        emoji: "💉",
        title: "Quantitative Easing : l'outil non conventionnel",
        body: "**Problème** : que fait-on quand le taux directeur est déjà à 0 % et qu'il n'y a plus de marge pour le baisser ? On invente de nouveaux outils.\n\n**Quantitative Easing (QE)** : la BC **rachète massivement des titres financiers** (obligations) aux banques. Résultat : les banques ont plus de liquidités → elles prêtent plus → l'économie repart.\n\nUtilisé en zone euro pour : crise des dettes souveraines, risque de déflation, Covid-19.",
      },
      {
        emoji: "₿",
        title: "Cryptos : monnaie ou pas ?",
        body: "**Bitcoin** = 60 % de la valorisation crypto. Offre limitée à 21 M, décentralisé, transferts directs sans banque. Mais :\n\n**3 critères d'une vraie monnaie** (rappel) :\n1. Moyen d'**E**change courant ❌ (pas utilisé pour acheter du quotidien)\n2. **U**nité de compte ❌ (impossible de comparer les prix avec)\n3. **R**éserve de valeur ❌ (volatilité énorme)\n\n→ Le bitcoin **n'est pas** une monnaie au sens économique.\n\n**Risques** : volatilité, bulle, hacking, blanchiment.\n\n**Stablecoins** : crypto **indexé** sur USD/EUR → moins volatil, mais inquiète les États (concurrence à la monnaie souveraine).\n\n**MNBC** : Monnaie Numérique de BC = euro numérique en projet, complémentaire au cash.",
      },
    ],
    keyPoints: [
      "4 fonctions monnaie : Échange, Expression du prix, Épargne, Économie",
      "Fiduciaire < 10 % | Scripturale > 90 %",
      "Création monétaire = ex nihilo, par les banques commerciales",
      "2 limites : Bâle (8 %) + politique monétaire BC",
      "Cible BCE : 2 % d'inflation",
      "QE = rachat de titres = outil non conventionnel post-2008",
    ],
    pieges: [
      "La création monétaire vient des banques commerciales, pas de la BC",
      "Taux directeur ≠ taux que tu paies à ta banque",
      "Bitcoin ≠ monnaie au sens économique (3 critères non remplis)",
      "Le QE est non conventionnel, post-2008",
    ],
  },
];

export const chaptersByLang = { fr: chapters, tr: chaptersTr } as const;
