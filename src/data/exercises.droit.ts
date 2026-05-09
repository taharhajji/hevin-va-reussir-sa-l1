import type { ExerciseSection } from "./exercises";

// Méthodologie juridique adaptée au niveau L2 LEA (introductive,
// accessible). Privilégie la clarté plutôt que la profondeur dogmatique.

export const exerciseSectionsDroit: ExerciseSection[] = [
  {
    slug: "diss-methodo",
    title: "Méthodologie de la dissertation",
    emoji: "✍️",
    intro:
      "Une dissertation juridique = analyser un sujet en répondant à une **problématique** dans un **plan en 2 parties / 2 sous-parties**. Pas besoin d'être un théoricien : structure + clarté = bonne note.",
    exercises: [
      {
        id: "diss-1",
        title: "Décortiquer un sujet",
        emoji: "🔍",
        category: "Étape 1 — comprendre la question",
        prompt:
          "Sujet : « La souveraineté de l'État est-elle absolue ? »\n\nIdentifie : 1) les **mots-clés** à définir, 2) le **type de sujet** (descriptif vs comparatif vs dialectique), 3) les **bornes** (temporelles, géographiques, théoriques).",
        hint: "Le mot 'absolue' suggère un débat → sujet dialectique (oui/non).",
        steps: [
          "**Mots-clés** : *souveraineté* (Jellinek = « compétence de la compétence »), *État* (territoire + population + pouvoir souverain), *absolue* (sans limite).",
          "**Type** : sujet **dialectique** → on confronte 2 thèses opposées dans un plan en 2 parties.",
          "**Bornes** : depuis Westphalie 1648 (cadre moderne), avec un focus contemporain (Union européenne, droits de l'homme).",
          "💡 *Astuce LEA* : pose-toi simplement la question « **on me demande quoi exactement ?** » et reformule.",
        ],
        answer:
          "Sujet dialectique. Mots-clés à définir : souveraineté, État, absolue. Bornes modernes (Westphalie → aujourd'hui).",
      },
      {
        id: "diss-2",
        title: "Trouver la problématique",
        emoji: "❓",
        category: "Étape 2 — formuler la question centrale",
        prompt:
          "À partir du même sujet (« La souveraineté de l'État est-elle absolue ? »), propose une **problématique** en une seule phrase qui guidera toute la dissertation.",
        hint:
          "Une problématique reformule le sujet en y ajoutant une **tension** ou un **enjeu**.",
        steps: [
          "Repère la tension : la souveraineté = principe absolu **mais** elle se heurte à des limites (UE, droit international, droits de l'homme).",
          "Reformule la tension en question : *« Dans quelle mesure la souveraineté étatique, pourtant définie comme absolue par Jellinek, demeure-t-elle un principe pleinement opérant face aux contraintes contemporaines ? »*",
          "💡 Plus simplement, en LEA : *« La souveraineté est-elle vraiment toujours absolue aujourd'hui ? »* — ça suffit.",
        ],
        answer:
          "« Dans quelle mesure la souveraineté étatique demeure-t-elle absolue dans le contexte contemporain ? »",
      },
      {
        id: "diss-3",
        title: "Construire un plan en 2 parties",
        emoji: "🏗️",
        category: "Étape 3 — structurer la réponse",
        prompt:
          "Toujours sur le même sujet, propose un **plan détaillé** en 2 parties / 2 sous-parties (I/A/B et II/A/B).",
        hint:
          "Pour un sujet dialectique : **I = thèse (oui)** + **II = antithèse (mais)**. Souvent en LEA : I théorique + II pratique.",
        steps: [
          "**I. La souveraineté, principe absolu en théorie**",
          "  — A. Une définition fondatrice (Jellinek, Bodin, Westphalie)",
          "  — B. Les conséquences juridiques (égalité entre États, non-ingérence)",
          "**II. Une souveraineté limitée en pratique**",
          "  — A. Les limites internes (Constitution, droits fondamentaux, contrôle de constitutionnalité)",
          "  — B. Les limites externes (UE, ONU, droit international, mondialisation)",
          "💡 *Conseil LEA* : 2 parties suffisent. Ne cherche pas à faire 3 parties — c'est mal vu en droit.",
        ],
        answer:
          "I (théorie : absolue) / II (pratique : limitée). 2 sous-parties chacune.",
      },
      {
        id: "diss-4",
        title: "Rédiger l'introduction (les 4 étapes)",
        emoji: "📝",
        category: "Étape 4 — l'intro structurée",
        prompt:
          "Une introduction de dissertation juridique a **4 parties obligatoires**. Liste-les dans l'ordre, avec la longueur indicative.",
        hint:
          "Mnémo : **Accroche → Définitions → Problématique → Annonce du plan**.",
        steps: [
          "**1. Accroche** (2-3 lignes) : citation, actualité, anecdote historique. *Ex : « Selon Bodin (1576), 'la souveraineté est puissance absolue et perpétuelle'... »*",
          "**2. Définition des termes du sujet** (5-8 lignes) : on définit chaque mot-clé du sujet.",
          "**3. Problématique** (1-2 lignes) : la question centrale, formulée comme une vraie interrogation.",
          "**4. Annonce du plan** (2 lignes) : *« Pour répondre, nous étudierons d'abord [I], puis [II]. »*",
          "💡 Une intro = ~1 page. Ne pas écrire toute l'histoire de la pensée juridique.",
        ],
        answer: "Accroche → Définitions → Problématique → Annonce du plan.",
      },
      {
        id: "diss-5",
        title: "La transition entre les parties",
        emoji: "🌉",
        category: "Étape 5 — entre I et II",
        prompt:
          "Entre la fin de la partie I et le début de la partie II, on rédige une **transition**. Comment la construire en 2-3 phrases ?",
        steps: [
          "**Phrase 1** : résume ce qui a été démontré en I. *« Si la souveraineté apparaît effectivement comme un principe fondateur absolu... »*",
          "**Phrase 2** : amène le contraste / nuance. *« ...elle se heurte cependant à des limites internes et externes qu'il convient désormais d'examiner. »*",
          "💡 Transition courte = mieux. Pas besoin de paraphraser tout I.",
        ],
        answer:
          "2-3 phrases : résumé de I + amorce de II.",
      },
      {
        id: "diss-6",
        title: "Conclure simplement",
        emoji: "🎯",
        category: "Étape 6 — la conclusion",
        prompt:
          "Comment construire une bonne conclusion juridique ?",
        hint: "**Synthèse** + **ouverture** = formule classique.",
        steps: [
          "**1. Synthèse** (3-4 lignes) : reprendre la réponse à la problématique en intégrant les apports de I et II.",
          "**2. Ouverture** (2 lignes) : élargir vers un sujet connexe sans être hors-sujet. *Ex : « Cette tension entre souveraineté absolue et limites contemporaines se retrouve aujourd'hui dans le débat sur la ratification du Pacte mondial pour les migrations... »*",
          "⚠️ NE PAS introduire d'idées nouvelles dans la conclusion. NE PAS répéter mot pour mot l'intro.",
        ],
        answer: "Synthèse + ouverture. Pas d'idées nouvelles.",
      },
    ],
  },
  {
    slug: "cas-pratique",
    title: "Méthodologie du cas pratique",
    emoji: "⚖️",
    intro:
      "Le cas pratique = on te donne une situation, tu dois **dire ce que dit le droit**. La méthode tient en 3 mots : **Faits → Droit → Application**.",
    exercises: [
      {
        id: "cp-1",
        title: "Identifier les faits pertinents",
        emoji: "🎯",
        category: "Étape 1 — résumer la situation",
        prompt:
          "Énoncé : *« Le 15 mars 2024, la commune de Saint-Martin a adopté un arrêté interdisant la baignade sur sa plage. M. Dupont, habitant, considère que cet arrêté est illégal car le maire ne respecte pas le principe de proportionnalité. Il souhaite contester l'arrêté. »*\n\nIdentifie les **faits pertinents** (= ceux qui ont une portée juridique).",
        hint: "Ignore les détails inutiles. Garde QUI fait QUOI et POURQUOI.",
        steps: [
          "**Acteurs** : la commune (autorité administrative) + M. Dupont (administré).",
          "**Acte** : arrêté municipal interdisant la baignade.",
          "**Date** : 15 mars 2024 (importante pour les délais de recours).",
          "**Problème** : possible violation du principe de proportionnalité.",
          "**Volonté de l'administré** : contester l'arrêté.",
          "💡 La date d'adoption est ESSENTIELLE pour calculer le délai de recours (2 mois en contentieux administratif).",
        ],
        answer:
          "Arrêté municipal du 15/03/2024 interdisant la baignade — un administré (M. Dupont) veut le contester pour disproportion.",
      },
      {
        id: "cp-2",
        title: "Trouver la règle de droit applicable",
        emoji: "📚",
        category: "Étape 2 — la majeure",
        prompt:
          "Toujours sur le même cas, quelle est la **règle de droit** que M. Dupont peut invoquer ?",
        hint:
          "Pense au **bloc de constitutionnalité** + à la jurisprudence administrative classique.",
        steps: [
          "Le maire dispose d'un **pouvoir de police municipale** (CGCT, art. L. 2212-2).",
          "Mais ce pouvoir est encadré par le **principe de proportionnalité** (CE, *Benjamin*, 19 mai 1933 — l'arrêt classique).",
          "Une mesure de police doit être **nécessaire, adaptée et proportionnée**.",
          "💡 *Astuce LEA* : tu n'es pas obligé(e) de citer l'année exacte du jurisprudence — citer le nom de l'arrêt suffit.",
        ],
        answer:
          "Pouvoir de police municipale + principe de proportionnalité (CE, Benjamin, 1933).",
      },
      {
        id: "cp-3",
        title: "Appliquer la règle aux faits",
        emoji: "🔗",
        category: "Étape 3 — la mineure & la conclusion",
        prompt:
          "Toujours le même cas. Comment **appliquer la règle de droit aux faits** et conclure ?",
        steps: [
          "**Application** : la mesure consiste en une interdiction TOTALE de la baignade. Pour respecter la proportionnalité, le maire doit avoir prouvé : (a) un danger réel, (b) qu'aucune mesure moins restrictive n'aurait suffi.",
          "Si l'arrêté n'est pas justifié par un danger précis (algues, courants…) ou si une simple **mise en garde** aurait suffi, alors **l'interdiction est disproportionnée**.",
          "**Conclusion** : M. Dupont peut faire un **recours pour excès de pouvoir** devant le **tribunal administratif** dans les 2 mois suivant la publication de l'arrêté.",
          "💡 Le schéma final = **Majeure (la règle) + Mineure (les faits) + Conclusion (la solution juridique)**.",
        ],
        answer:
          "Recours pour excès de pouvoir au TA, dans les 2 mois — pour disproportion.",
      },
      {
        id: "cp-4",
        title: "Mini cas pratique complet",
        emoji: "📋",
        category: "Mise en pratique",
        prompt:
          "Cas : *« Le préfet du Var refuse à un journaliste l'accès à un meeting public au motif que celui-ci a écrit des articles critiques sur la majorité. Le journaliste souhaite contester. »*\n\nApplique la méthode F-D-A (Faits / Droit / Application).",
        hint:
          "Pense à la **liberté de la presse** (DDHC art. 11) + au **principe d'égalité**.",
        steps: [
          "**Faits** : préfet (autorité de l'État) + journaliste (administré) + refus discriminatoire d'accès à un meeting public.",
          "**Droit** : 1) **Liberté d'expression** (DDHC 1789 art. 11, valeur constitutionnelle depuis CC 1971), 2) **Principe d'égalité** (DDHC 1789 art. 6), 3) **Détournement de pouvoir** (motif politique pour une décision administrative).",
          "**Application** : le motif de refus (« critique de la majorité ») est un motif **politique** sans rapport avec l'ordre public → **détournement de pouvoir** + **violation de la liberté de la presse**.",
          "**Conclusion** : recours pour excès de pouvoir devant le TA, suspension possible en référé-liberté (art. L. 521-2 CJA).",
        ],
        answer:
          "Détournement de pouvoir + violation de la liberté de la presse. Recours en excès de pouvoir + référé-liberté.",
      },
    ],
  },
  {
    slug: "fiche-arret",
    title: "Méthodologie de la fiche d'arrêt",
    emoji: "📄",
    intro:
      "Une fiche d'arrêt = un **résumé structuré** d'une décision de justice. Toujours **5 cases** : Faits / Procédure / Prétentions / Question de droit / Solution.",
    exercises: [
      {
        id: "fa-1",
        title: "Les 5 rubriques par cœur",
        emoji: "🗂️",
        category: "Structure",
        prompt:
          "Cite dans l'ordre les **5 rubriques** d'une fiche d'arrêt et explique brièvement le contenu de chacune.",
        hint:
          "Mnémo facile : **F-P-P-Q-S** (Faits, Procédure, Prétentions, Question, Solution).",
        steps: [
          "**1. Faits** : que s'est-il passé dans la vraie vie ? (avant l'intervention de la justice)",
          "**2. Procédure** : qui a saisi quel juge ? Qui a fait appel ? Cassation ?",
          "**3. Prétentions des parties** : qu'est-ce que chaque partie demande ?",
          "**4. Question de droit** (la plus importante) : *« Le juge devait-il décider que… ? »* (formulée comme une question abstraite)",
          "**5. Solution** : ce qu'a décidé la juridiction + le motif principal.",
          "💡 Une fiche = 1 page maximum. Ne pas recopier l'arrêt.",
        ],
        answer: "F-P-P-Q-S : Faits / Procédure / Prétentions / Question / Solution.",
      },
      {
        id: "fa-2",
        title: "Reformuler la question de droit",
        emoji: "❔",
        category: "L'étape difficile",
        prompt:
          "Imagine un arrêt où la Cour de cassation a jugé : *« Un employeur peut licencier un salarié qui a refusé d'appliquer une nouvelle organisation, dès lors que cette nouvelle organisation relève de son pouvoir de direction. »*\n\nReformule la **question de droit** au format abstrait.",
        hint:
          "La question doit commencer par « **Le refus...** » ou « **Le fait que...** » et finir par « **constitue-t-il/elle... ?** ».",
        steps: [
          "Identifier l'opposition : refus d'un salarié vs pouvoir de direction de l'employeur.",
          "Formuler abstraitement : *« Le refus d'un salarié d'appliquer une nouvelle organisation décidée par l'employeur dans le cadre de son pouvoir de direction constitue-t-il une cause réelle et sérieuse de licenciement ? »*",
          "💡 La question est **abstraite** (pas le nom des parties) et formulée **comme une vraie question** (avec un point d'interrogation).",
        ],
        answer:
          "« Le refus d'un salarié d'appliquer une nouvelle organisation relevant du pouvoir de direction constitue-t-il une cause de licenciement ? »",
      },
      {
        id: "fa-3",
        title: "Distinguer décision / motif",
        emoji: "🎯",
        category: "Solution structurée",
        prompt:
          "Dans la rubrique **Solution**, on note 2 choses. Lesquelles ?",
        steps: [
          "**1. La décision** : *« La Cour de cassation casse l'arrêt »* OU *« la Cour de cassation rejette le pourvoi »*.",
          "**2. Le motif principal** : *« au motif que… »* — la phrase-clé qui explique POURQUOI.",
          "💡 Le motif est souvent introduit par : *« Mais attendu que... »* ou *« Vu l'article X... »*.",
        ],
        answer: "1) Décision (cassation / rejet) + 2) motif principal.",
      },
    ],
  },
  {
    slug: "definitions-cles",
    title: "Définitions clés à maîtriser",
    emoji: "📖",
    intro:
      "Pour la dissertation comme pour le cas pratique, il faut **savoir définir les termes** clés. Voici un échantillon des plus demandés en partiel.",
    exercises: [
      {
        id: "def-1",
        title: "Définir : Constitution",
        emoji: "📜",
        category: "Définition",
        prompt: "Donne une définition courte (3-4 lignes) de la **Constitution**.",
        steps: [
          "**Définition** : *La Constitution est la norme suprême d'un État. Elle organise les pouvoirs publics, fixe la procédure d'adoption des autres normes et garantit les droits fondamentaux. Elle constitue le contrat social fondateur de la communauté politique.*",
          "💡 Mots-clés à utiliser : *norme suprême*, *organise les pouvoirs*, *droits fondamentaux*.",
        ],
        answer:
          "Norme suprême qui organise les pouvoirs et garantit les droits fondamentaux.",
      },
      {
        id: "def-2",
        title: "Définir : Souveraineté",
        emoji: "👑",
        category: "Définition",
        prompt: "Définis la **souveraineté** en t'appuyant sur Jellinek.",
        steps: [
          "**Définition** : *La souveraineté est, selon Georg Jellinek, « la compétence de la compétence » — c'est-à-dire la capacité d'un État à déterminer librement l'étendue de ses propres compétences, sans être soumis à une autorité supérieure.*",
          "💡 Toujours citer Jellinek + la formule entre guillemets.",
        ],
        answer:
          "Compétence de la compétence (Jellinek) — pas d'autorité supérieure.",
      },
      {
        id: "def-3",
        title: "Définir : État de droit",
        emoji: "⚖️",
        category: "Définition",
        prompt: "Définis l'**État de droit**.",
        steps: [
          "**Définition** : *L'État de droit est un État dans lequel toutes les autorités publiques (et les particuliers) sont soumises au respect du droit, lui-même hiérarchisé. La Constitution étant la norme suprême, toutes les autres normes doivent lui être conformes.*",
          "Inclut souvent le respect des droits fondamentaux (acception moderne).",
        ],
        answer:
          "État dans lequel toutes les autorités sont soumises au droit hiérarchisé.",
      },
      {
        id: "def-4",
        title: "Définir : Séparation des pouvoirs",
        emoji: "🔱",
        category: "Définition",
        prompt: "Définis la **séparation des pouvoirs** (Montesquieu).",
        steps: [
          "**Définition** : *Principe selon lequel les 3 pouvoirs (législatif, exécutif, judiciaire) doivent être exercés par 3 autorités distinctes et indépendantes, afin d'éviter l'arbitraire (Montesquieu, De l'esprit des lois, 1748).*",
          "Citation marquante : *« Pour qu'on ne puisse abuser du pouvoir, il faut que par la disposition des choses, le pouvoir arrête le pouvoir. »*",
        ],
        answer:
          "Trois pouvoirs séparés et indépendants pour éviter l'arbitraire.",
      },
      {
        id: "def-5",
        title: "Définir : Pouvoir constituant",
        emoji: "🛠️",
        category: "Définition",
        prompt: "Distingue **pouvoir constituant originaire** et **dérivé**.",
        steps: [
          "**Originaire** : pouvoir d'adopter une nouvelle Constitution **sans respecter** la procédure de l'ancienne. Rupture juridique, souvent dans un contexte révolutionnaire.",
          "**Dérivé** : pouvoir de **modifier** une Constitution existante en respectant sa procédure de révision (en France : article 89).",
          "💡 La distinction se fait sur **la rupture ou non**, pas sur l'ampleur de la modification.",
        ],
        answer:
          "Originaire = rupture / Dérivé = respect de la procédure existante.",
      },
    ],
  },
];
