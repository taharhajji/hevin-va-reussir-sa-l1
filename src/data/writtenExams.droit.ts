// Examens blancs avec rédaction (questions ouvertes), corrigés par
// l'API Grok via la fonction serverless `/api/grade`.

export type WrittenQuestion = {
  id: number;
  /** Sujet à rédiger. Peut être une question ouverte, une mini-dissertation, etc. */
  prompt: string;
  /** Petits indices méthodologiques affichés sous le champ. */
  hint?: string;
  /** Nombre de mots ou de lignes attendues. */
  expected?: string;
  /** Points / barème (sur 5, 10, 20…) — total = somme. */
  maxPoints: number;
  /**
   * Réponse modèle. Sert à l'IA de référence pour évaluer la copie de
   * l'étudiant. Ne JAMAIS afficher avant la correction.
   */
  modelAnswer: string;
};

export type WrittenExam = {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  durationMin: number;
  questions: WrittenQuestion[];
};

export const writtenExamDroit1: WrittenExam = {
  slug: "redaction-1",
  title: "Examen blanc rédaction — Droit des institutions",
  subtitle:
    "5 questions à rédiger en 1h30 — correction IA (Grok) avec retour détaillé.",
  emoji: "✍️",
  durationMin: 90,
  questions: [
    {
      id: 7001,
      prompt:
        "Définissez la notion de **souveraineté** selon Georg Jellinek et expliquez en quoi cette définition est fondamentale pour caractériser un État. Donnez un exemple concret de manifestation de la souveraineté.",
      hint:
        "Mots-clés attendus : « compétence de la compétence », autonomie, pas d'autorité supérieure, État sujet de droit international.",
      expected: "≈ 10-15 lignes",
      maxPoints: 4,
      modelAnswer:
        "Selon Georg Jellinek, la souveraineté est la « compétence de la compétence », c'est-à-dire la capacité d'un État à déterminer lui-même, librement, l'étendue de ses propres compétences. Cette définition est fondamentale car elle distingue l'État des autres entités juridiques : seul un État souverain peut décider de ce qu'il peut ou ne peut pas faire, sans être soumis à une autorité supérieure. Sans souveraineté, pas d'État au sens juridique. Cette définition implique l'égalité juridique entre États (chacun est souverain sur son territoire) et fonde le principe de non-ingérence (Charte ONU 1945). Une manifestation concrète : la décision d'un État de ratifier ou non un traité international, ou de modifier sa propre Constitution sans en référer à un quelconque pouvoir supérieur.",
    },
    {
      id: 7002,
      prompt:
        "Comparez le **modèle états-unien de justice constitutionnelle** (Marbury v. Madison, 1803) et le **modèle européen kelsénien**. Mettez en évidence au moins 3 différences fondamentales.",
      hint:
        "Pense aux 5 critères : concret/abstrait, a posteriori/a priori, inter partes/erga omnes, diffus/concentré, voie d'exception/d'action.",
      expected: "≈ 15-20 lignes",
      maxPoints: 5,
      modelAnswer:
        "Le modèle états-unien, fondé par l'arrêt Marbury v. Madison (1803), repose sur un contrôle CONCRET (le juge se prononce sur l'application de la loi à un cas précis), A POSTERIORI (la loi est déjà en vigueur), INTER PARTES (la décision n'a d'effet qu'entre les parties — autorité relative de la chose jugée), DIFFUS (tout juge peut le faire, jusqu'à la Cour suprême par appel) et exercé par VOIE D'EXCEPTION (un justiciable conteste la loi qu'on lui applique). À l'opposé, le modèle européen kelsénien, théorisé par Hans Kelsen et appliqué d'abord en Autriche, est ABSTRAIT (le juge évalue la loi en elle-même, sans se référer à un cas concret), A PRIORI (avant entrée en vigueur), ERGA OMNES (la décision a effet à l'égard de tous, autorité absolue de la chose jugée), CONCENTRÉ (seule une cour spécialisée comme le Conseil constitutionnel français y est compétente) et exercé par VOIE D'ACTION (recours direct par des autorités de saisine). Le modèle moderne européen a évolué : il maintient les caractéristiques principales (abstrait, erga omnes, concentré) mais ajoute un contrôle a posteriori par la voie de la question préjudicielle (en France : la QPC depuis 2010).",
    },
    {
      id: 7003,
      prompt:
        "Qu'est-ce qu'un **régime parlementaire** ? En quoi se distingue-t-il du régime présidentiel ? Illustrez votre réponse avec un exemple précis pour chaque type.",
      hint:
        "Critère central = la souplesse vs rigidité de la séparation des pouvoirs (moyens de récusation et de collaboration).",
      expected: "≈ 15-20 lignes",
      maxPoints: 4,
      modelAnswer:
        "Le régime parlementaire est caractérisé par une SÉPARATION SOUPLE des pouvoirs : exécutif et législatif disposent de moyens d'action réciproques (collaboration ET récusation). L'exécutif est bicéphale (chef de l'État symbolique + chef de gouvernement responsable politiquement). Le Parlement peut renverser le gouvernement (motion de censure), et l'exécutif peut dissoudre la chambre basse. Exemple : l'Espagne depuis 1978 (Cortes Generales + roi + président du gouvernement, motion de censure constructive). Le régime présidentiel se caractérise au contraire par une SÉPARATION RIGIDE : aucun moyen de récusation politique réciproque. Le Parlement ne peut pas renverser l'exécutif pour des motifs politiques (l'impeachment américain est une responsabilité PÉNALE, pas politique), et l'exécutif ne peut pas dissoudre le Congrès. Mais des contre-pouvoirs existent (« checks and balances » : veto présidentiel, validation des nominations par le Sénat). Exemple : les États-Unis depuis 1787, avec leur Constitution établissant un président monocéphale et un Congrès bicaméral indépendants.",
    },
    {
      id: 7004,
      prompt:
        "Expliquez ce qu'est le **parlementarisme rationalisé** instauré par la Constitution de 1958. Citez et expliquez 3 mesures précises.",
      hint:
        "Pense à : domaine de la loi limité (art. 34), 49.3, création du Conseil constitutionnel, incompatibilité parlementaire/ministérielle…",
      expected: "≈ 15 lignes",
      maxPoints: 4,
      modelAnswer:
        "Le parlementarisme rationalisé est l'ensemble des mesures instaurées par la Constitution de 1958 pour ENCADRER LE POUVOIR LÉGISLATIF et RENFORCER L'EXÉCUTIF, en réaction à l'instabilité chronique des IIIe et IVe Républiques. Trois mesures emblématiques : 1) LE DOMAINE DE LA LOI LIMITÉ (art. 34) — le Parlement ne peut légiférer que dans des matières énumérées ; le reste relève du pouvoir réglementaire (art. 37). 2) L'ARTICLE 49.3 — le gouvernement peut faire adopter un texte sans vote en engageant sa responsabilité ; le texte est adopté sauf si une motion de censure est votée à la majorité absolue dans les 24h. 3) LA CRÉATION DU CONSEIL CONSTITUTIONNEL — initialement conçu comme un « chien de garde de l'exécutif » contre les empiétements du Parlement, il vérifie le respect des règles de procédure et la délimitation loi/règlement. À ces mesures s'ajoutent l'incompatibilité parlementaire/ministérielle (art. 23) et la maîtrise gouvernementale de l'ordre du jour parlementaire.",
    },
    {
      id: 7005,
      prompt:
        "Distinguez **État unitaire décentralisé**, **État fédéral** et **État régional**. À quelle catégorie appartiennent la France, l'Allemagne et l'Espagne ?",
      hint:
        "Critères : niveau de pouvoir politique, partage de souveraineté, existence d'une Constitution propre des entités infra-étatiques.",
      expected: "≈ 15 lignes",
      maxPoints: 3,
      modelAnswer:
        "L'État UNITAIRE DÉCENTRALISÉ comporte un seul niveau de pouvoir politique souverain (l'État central), mais transfère certaines compétences à des collectivités territoriales dotées d'une autonomie. La France est l'exemple type : depuis la loi Defferre du 2 mars 1982 et la révision constitutionnelle du 28 mars 2003 (« la République est décentralisée »), les communes, départements, régions et collectivités à statut particulier disposent de compétences propres mais ne sont PAS souveraines. L'État FÉDÉRAL repose sur trois principes : superposition (deux niveaux de pouvoir politique coexistent), autonomie (chaque État fédéré a sa propre Constitution et ses institutions) et participation (les États fédérés participent à la formation de la volonté fédérale via une chambre haute). L'Allemagne, avec ses 16 Länder et son Bundesrat, en est un exemple. L'État RÉGIONAL est une forme intermédiaire : autonomie politique reconnue à des régions dotées de statuts (proches de constitutions) mais sans souveraineté partagée. L'Espagne, avec ses 17 communautés autonomes (notamment la Catalogne, le Pays basque, la Galice) constitue l'exemple européen le plus connu.",
    },
  ],
};

export const writtenExamsDroit: WrittenExam[] = [writtenExamDroit1];
