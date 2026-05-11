import type { Chapter } from "./chapters";

// Linguistique anglaise (LEA L2). 8 CM condensés pour partiel express.
// Format : explications courtes + exemples + erreurs à éviter.

export const chaptersLinguistique: Chapter[] = [
  {
    slug: "ch1",
    number: 1,
    title: "Ordre des mots — SVO",
    emoji: "🔤",
    hook: "Anglais = ordre RIGIDE. 9 exceptions à connaître.",
    color: "from-rose-400 to-orange-400",
    duration: "15 min",
    intro:
      "L'anglais a un ordre **fixe SVO** (Sujet-Verbe-Objet). Le français est beaucoup plus flexible. L'anglais dépend de la **POSITION** des mots, pas des terminaisons.",
    sections: [
      {
        emoji: "1️⃣",
        title: "Structure de base SVO",
        body: "**S + V + O** :\n- I (S) like (V) this book (O).\n- She (S) reads (V) a lot.\n\n**Verbes d'état** (be, seem, look) → suivis d'un **attribut**, pas d'un objet :\n- She is **happy** ✓\n- ~~She is happiness~~ ✗\n\n💡 *Règle d'or* : anglais = position fixe ; français = ordre flexible.",
      },
      {
        emoji: "❌",
        title: "Négation",
        body: "**Structure** : **S + auxiliaire + NOT + V + compléments**.\n- I **do not** like it.\n- She **is not** ready.\n\n💡 *À l'inverse du français*, l'anglais n'admet **PAS** d'inversion sujet-verbe dans la négation simple.",
      },
      {
        emoji: "🔄",
        title: "Les 9 cas où SVO change",
        body: "1. **Impératif** : pas de sujet. *Sit down. Open the door.*\n2. **Exclamatif** : pas de verbe. *What a pity! How beautiful!*\n3. **THERE + BE** : *There is a problem. There are many people.*\n4. **Groupe prépositionnel au début** → inversion (soutenu). *On the table lay a book.*\n5. **Négation/restriction au début** → inversion **obligatoire**. *Never have I seen this. Not only is she smart...*\n6. **Reprise avec auxiliaire** : *I passed → So did she.*\n7. **AS / THAN** → inversion possible. *Better than do experts.*\n8. **Conditionnel sans IF** (soutenu) : *Had I known... = If I had known.*\n9. **Mise en relief (cleft)** : *It is John who called. What I want is peace.*\n\n💡 *À retenir* : surtout les inversions après **négation au début** (5) et **questions**.",
      },
    ],
    keyPoints: [
      "Base = S + V + O",
      "Anglais = ordre FIXE, français = ordre FLEXIBLE",
      "Négation : S + AUX + NOT + V",
      "9 exceptions à SVO (surtout : impératif, There+be, négation au début, cleft)",
      "Verbes d'état → attribut, pas objet (She is happy)",
    ],
    pieges: [
      "Pas d'inversion sujet/verbe en négation simple (≠ français)",
      "Verbes d'état (be, seem) → ATTRIBUT, pas objet",
      "« Never » au début → INVERSION obligatoire : Never have I seen…",
      "Conditionnel sans IF = inversion : Had I known…",
    ],
  },
  {
    slug: "ch2",
    number: 2,
    title: "La négation",
    emoji: "🚫",
    hook: "UNE seule négation en anglais. Auxiliaire OBLIGATOIRE.",
    color: "from-blue-400 to-cyan-500",
    duration: "15 min",
    intro:
      "L'anglais utilise **UNE seule négation** par phrase. Si pas d'auxiliaire dans la phrase, on ajoute **DO/DOES/DID**.",
    sections: [
      {
        emoji: "🔧",
        title: "Formation : S + AUX + NOT + V",
        body: "**Verbe simple** → ajouter DO/DOES/DID :\n- I **don't** like it.\n- He **didn't** come.\n\n**Auxiliaire déjà présent** (be, have, modal) → on le garde :\n- She **is not** ready.\n- They **can't** go.",
      },
      {
        emoji: "🆚",
        title: "NO vs NOT",
        body: "**NOT** = dans le **verbe** :\n- I **do not** agree.\n\n**NO** = dans le **groupe nominal** :\n- I have **no** idea.\n\n💡 Nuance : *I'm not a chef* (factuel) vs *I'm no chef* (insistance).",
      },
      {
        emoji: "1️⃣",
        title: "UNE seule négation (TRÈS IMPORTANT)",
        body: "✅ Correct :\n- Nobody came.\n- I didn't see **anything**.\n\n❌ Faux :\n- ~~I didn't see something~~\n- ~~Nobody didn't come~~\n\n**Règle SOME / ANY / NO** :\n- I saw **something**. (positif)\n- I didn't see **anything**. (négatif)\n- I saw **nothing**. (négatif intégré)",
      },
      {
        emoji: "🔻",
        title: "Mots négatifs et semi-négatifs",
        body: "**Négatifs directs** : no one / nobody, nothing, never.\n\n**Semi-négatifs** (comptent comme négation !) :\n- rarely, hardly, seldom, barely\n\n💡 *Conséquence* : si tu utilises *hardly*, tu n'ajoutes pas d'autre négation.",
      },
      {
        emoji: "📚",
        title: "Préfixes/suffixes négatifs (vocab)",
        body: "**Préfixes** : un- (unhappy), in-/im-/il-/ir- (impossible), dis- (disagree), non- (non-smoking), mis- (misunderstand), anti- (anti-war).\n\n**Suffixe** : -less (hopeless, useless).\n\n**Antonymes** : happy/sad, light/dark.",
      },
      {
        emoji: "🌐",
        title: "Différences FR/EN (traduction)",
        body: "Le français utilise **beaucoup plus** de négations. L'anglais préfère les **tournures positives**.\n\n**Exemples de traduction inversée** :\n- *Remember* → N'oublie pas\n- *It's easy* → Ce n'est pas difficile\n- *You're welcome* → Il n'y a pas de quoi\n- *It's not bad* → C'est bien (litote)\n- *It is not uncommon* → Il n'est pas rare",
      },
    ],
    keyPoints: [
      "1 seule négation par phrase",
      "DO/DOES/DID obligatoire si pas d'auxiliaire",
      "SOME (positif) / ANY (négation/question) / NO (négation intégrée)",
      "Semi-négatifs (hardly, rarely, seldom) = comptent comme négation",
      "Préfixes : un-, in-, dis-, non-, mis- | Suffixe : -less",
    ],
    pieges: [
      "Double négation = INTERDITE (pas comme en français)",
      "« I didn't see nothing » → FAUX. Dire « I didn't see anything »",
      "Hardly = négation, donc « hardly never » est FAUX",
      "Ain't = familier/vulgaire, à ÉVITER en examen",
      "NOT modifie un verbe, NO modifie un nom",
    ],
  },
  {
    slug: "ch3",
    number: 3,
    title: "Discours direct vs indirect",
    emoji: "💬",
    hook: "Backshift des temps. Pas d'inversion en DI.",
    color: "from-emerald-400 to-teal-500",
    duration: "15 min",
    intro:
      "Le **discours direct** rapporte les paroles exactes (guillemets). Le **discours indirect** les rapporte avec **changements de temps, pronoms, indicateurs**.",
    sections: [
      {
        emoji: "🔁",
        title: "Transformation DD → DI",
        body: "**Structure** : S + verbe de parole + **that** + phrase\n\n- DD : *She said: \"I am tired.\"*\n- DI : *She said **that she was tired**.*\n\n💡 « that » peut disparaître à l'oral.\n\n**Verbes de parole courants** : say, tell, ask.",
      },
      {
        emoji: "⏪",
        title: "Backshift (changement de temps)",
        body: "**Règles** :\n- présent → passé : *I am* → he said he **was**\n- futur → conditionnel : *I will go* → he said he **would** go\n- present perfect → past perfect\n- prétérit → past perfect\n\n**Pronoms** : *I* → *he/she* ; *my* → *his/her*.\n\n**Indicateurs de temps** : *now* → *then* ; *today* → *that day* ; *tomorrow* → *the next day*.",
      },
      {
        emoji: "❓",
        title: "Questions au discours indirect",
        body: "**⚠️ Pas d'inversion en DI !**\n\n**Questions ouvertes (WH)** : WH + S + V (PAS d'inversion)\n- *« Where are you? »* → He asked **where I was**. (~~where was I~~)\n\n**Questions fermées (oui/non)** : **if / whether** + S + V\n- *« Do you like coffee? »* → He asked **if I liked coffee**.",
      },
      {
        emoji: "🤔",
        title: "IF vs WHETHER",
        body: "Souvent interchangeables, mais **WHETHER obligatoire** dans 4 cas :\n1. Avec un **choix** : *whether A or B*\n2. Avec un **infinitif** : *whether to go*\n3. **Au début de phrase** : *Whether you like it or not*\n4. **Après préposition** : *about whether...*",
      },
    ],
    keyPoints: [
      "DD = guillemets, DI = that + phrase",
      "Backshift : présent → passé, futur → would, perfect → past perfect",
      "Adapter pronoms (I → he/she) et indicateurs (now → then)",
      "Questions DI : PAS d'inversion",
      "Question ouverte : WH + S + V | Question fermée : if/whether",
    ],
    pieges: [
      "« He asked where was she » → FAUX (pas d'inversion en DI)",
      "Whether obligatoire après préposition (about whether…)",
      "« that » optionnel à l'oral mais sûr à l'écrit",
      "WH + S + V (l'auxiliaire disparaît dans la question indirecte)",
    ],
  },
  {
    slug: "ch4",
    number: 4,
    title: "Les temps grammaticaux",
    emoji: "⏰",
    hook: "Seulement 2 vrais temps : présent + prétérit. Le reste = aspects.",
    color: "from-violet-400 to-purple-500",
    duration: "20 min",
    intro:
      "En anglais, il n'y a en réalité que **2 temps grammaticaux** : **présent** et **prétérit**. Le reste se construit avec des **aspects** (BE+ING, HAVE+EN) et des **auxiliaires** (will).",
    sections: [
      {
        emoji: "🧩",
        title: "Les 4 formes principales",
        body: "1. **Présent simple** : faits généraux, habitudes. *I work every day. She likes coffee.*\n2. **Prétérit simple** : action passée terminée. *I went there yesterday.*\n3. **BE + ING** (progressif) : action en cours. *She is working now.*\n4. **HAVE + EN** (perfect) : lien avec le présent. *I have finished.*\n\n💡 Le **perfect** se combine avec progressif → *I have been working* (action qui dure).",
      },
      {
        emoji: "📍",
        title: "Present perfect vs prétérit",
        body: "**Present perfect** (HAVE + EN) : action passée **avec lien au présent**.\n- Souvent avec **since / for**.\n- *I have lived here for 5 years.* (j'y vis encore)\n\n**Prétérit** : action passée **terminée**, déconnectée du présent.\n- *I lived in Paris in 2020.* (c'est fini)\n\n💡 *Piège* : « I forget » = j'ai oublié (présent anglais ≠ présent français).",
      },
      {
        emoji: "🔮",
        title: "Pas de vrai futur en anglais",
        body: "On utilise :\n- **WILL** + base verbale : *I will go.*\n- **Présent simple** (programmé) : *The train leaves at 8.*\n- **BE + ING** (prévu, certain) : *I am leaving tomorrow.*\n- **Be going to** (intention) : *I am going to study.*",
      },
      {
        emoji: "📜",
        title: "Imparfait français — comment traduire ?",
        body: "Pas de correspondance directe. Options :\n- **WAS / WERE + ING** : *I was working* (action en cours)\n- **USED TO** : habitude révolue. *I used to live here.*\n- **WOULD** : habitude fréquentative. *Every morning, we would leave early.*",
      },
      {
        emoji: "❓",
        title: "Hypothèse / non-réel",
        body: "**Prétérit utilisé pour exprimer l'hypothèse**, pas le passé :\n- *If I were you...* (situation imaginaire)\n- *I wish I had more time.*\n\n💡 « were » à toutes les personnes en hypothèse soutenue (subjonctif fossile).",
      },
    ],
    keyPoints: [
      "2 temps : présent + prétérit",
      "BE + ING = action en cours (aspect progressif)",
      "HAVE + EN = lien avec le présent (aspect perfect)",
      "Pas de vrai futur : will / présent / BE+ING / be going to",
      "Imparfait FR ≠ un seul temps EN (was+ing / used to / would)",
      "If I were you = hypothèse (prétérit, pas passé)",
    ],
    pieges: [
      "Present perfect ≠ passé simple en français",
      "Prétérit anglais = passé COMPOSÉ français le plus souvent",
      "« I forget » = j'ai oublié (pas j'oublie)",
      "Used to + base verbale (pas to + ing)",
      "Subjonctif imaginaire : were à toutes les personnes",
    ],
  },
  {
    slug: "ch5",
    number: 5,
    title: "« Il y a » — toutes les traductions",
    emoji: "📍",
    hook: "There is/are ≠ AGO ≠ FOR ≠ SINCE. Piège classique d'examen.",
    color: "from-amber-400 to-yellow-500",
    duration: "15 min",
    intro:
      "« Il y a » a plusieurs sens en français. **Chacun se traduit différemment** en anglais. C'est un piège classique d'examen.",
    sections: [
      {
        emoji: "📦",
        title: "1) Existence : THERE IS / THERE ARE",
        body: "Pour poser l'**existence** d'un objet, lieu, situation.\n\n**Singulier** : *There is a problem.*\n**Pluriel** : *There are two people.*\n\n**Autres temps** : *There was, There were, There will be, There could be...*\n\n**Sujet coordonné** : l'accord se fait avec l'élément le plus proche :\n- *There **is** a book and two pens.*\n- *There **are** two pens and a book.*\n\n**Forme interrogative** : *Is there a book? Will there be a meeting?*\n\n💡 « THERE » est un **sujet vide** (*dummy subject*). Le vrai sujet est après.",
      },
      {
        emoji: "🕰️",
        title: "2) Temps passé : AGO",
        body: "**Il y a + durée = durée + AGO** (sert à dater un moment passé)\n\n- *Il y a une heure* → **one hour ago**\n- *Il y a deux semaines* → **two weeks ago**\n- *Le train est parti il y a 10 min* → *The train left **ten minutes ago**.*\n\n💡 **AGO va TOUJOURS APRÈS** la durée, pas devant.\n\n❌ *There is one week ago* → FAUX.\n✅ *One week ago* → correct.",
      },
      {
        emoji: "⏳",
        title: "3) Durée : FOR (action qui continue)",
        body: "**Il y a... que (action qui dure) = present perfect + FOR**\n\n- *Il y a 3 ans que je travaille ici* → ***I've been working here for three years.***\n- *Il y a 2 jours que je ne dors plus* → *I haven't been sleeping for two days.*\n\n💡 On utilise le **present perfect continu** car l'action **continue jusqu'au présent**.",
      },
      {
        emoji: "🔚",
        title: "4) Événement terminé : AGO (action ponctuelle)",
        body: "**Il y a... que (événement passé fini) = AGO**\n\n- *Il y a 3 ans que j'ai quitté la ville* → ***I left the city three years ago.***\n- *Il y a 6 mois qu'il est rentré* → *He came back six months ago.*\n\n💡 La différence avec FOR : ici c'est un **événement ponctuel**, pas une durée.",
      },
      {
        emoji: "🔄",
        title: "5) IT IS / HAS BEEN... SINCE",
        body: "Autre traduction possible pour « il y a... que » :\n\n- *Il y a 3 ans que j'ai quitté la ville* → *It has been three years **since** I left the city.*\n\n⚠️ **Attention aux phrases négatives** :\n❌ *It has been two days since I haven't slept.*\n✅ *It has been two days since I last slept.*\n✅ *I haven't been sleeping for two days.*",
      },
      {
        emoji: "🗨️",
        title: "Cas particuliers / idiomatiques",
        body: "- *Il y a du monde !* → ***It's crowded in here!***\n- *Il y a de quoi rire* → *It's enough to make you laugh.*\n- *Il y a des gens qui...* → ***Some** people...* (avec **some** souvent)\n  - *Il y a des banquiers malhonnêtes.* → *Some bankers are dishonest.*",
      },
    ],
    keyPoints: [
      "Existence = There is / There are",
      "Temps passé = AGO (toujours APRÈS la durée)",
      "Action qui dure = present perfect + FOR",
      "Événement passé fini = AGO",
      "It has been X since I last…",
      "« Il y a des gens qui » = Some people…",
    ],
    pieges: [
      "« There is two hours ago » → FAUX (mélange)",
      "AGO va APRÈS la durée : « ten minutes ago », jamais « ago ten minutes »",
      "FOR avec present perfect continu pour les actions qui durent",
      "SINCE négatif demande « I last slept », pas « I haven't slept »",
      "Avec sujet coordonné : accord avec le plus PROCHE",
    ],
  },
  {
    slug: "ch6",
    number: 6,
    title: "Modalité — pouvoir, devoir, conseil",
    emoji: "🔑",
    hook: "Modaux invariables, suivis de la base verbale SANS « to ».",
    color: "from-cyan-400 to-blue-500",
    duration: "20 min",
    intro:
      "Les **modaux** expriment capacité, possibilité, permission, obligation, probabilité, conseil. Ils sont **invariables** et suivis de la **base verbale sans « to »**.",
    sections: [
      {
        emoji: "🚨",
        title: "Règles fondamentales",
        body: "1. **Invariables** : pas de conjugaison. *I can, she can, they can* — jamais « cans ».\n2. **Suivis de la base verbale SANS « to »** :\n   - ✅ *She can swim.*\n   - ❌ ~~She can to swim.~~",
      },
      {
        emoji: "💪",
        title: "Capacité : CAN / COULD / BE ABLE TO",
        body: "**CAN** : capacité générale, présent. *My son can swim.*\n\n**COULD** : capacité au passé (générale). *When she was younger, she could read a book in 30 min.*\n\n**BE ABLE TO** : équivalent souple, utilisable à tous les temps.\n\n⚠️ **Réussite ponctuelle au passé** → **was/were able to** (PAS could) :\n- ✅ *The plane **was able to** take off.*\n- ❌ ~~The plane could take off.~~ (pour une réussite précise)\n\n💡 **À la forme négative**, *could* reste possible : *The plane couldn't take off.*",
      },
      {
        emoji: "🤝",
        title: "Permission : MAY / CAN / BE ALLOWED TO",
        body: "- **MAY** : permission formelle. *May I leave the table?*\n- **CAN** : permission familière. *Can I go to the bathroom?*\n- **BE ALLOWED TO** : être autorisé. *You're allowed to drive at 16 in the US.*",
      },
      {
        emoji: "📏",
        title: "Obligation : MUST / HAVE TO / NEED TO",
        body: "- **MUST** : obligation forte (souvent interne, morale). *You must go to bed.*\n- **HAVE TO** : obligation externe / pratique. *I have to wake up early.*\n- **NEED TO** : nécessité. *We need to leave early.*\n\n⚠️ **MUST n'a pas de passé**. On utilise **had to** :\n- ✅ *Yesterday I **had to** go.*\n- ❌ ~~Yesterday I must had to go.~~",
      },
      {
        emoji: "⛔",
        title: "Interdiction",
        body: "- **MUSTN'T** : interdiction forte. *You mustn't smoke here.*\n- **CAN'T** : impossibilité / interdiction. *You can't enter here.*\n- **MAY NOT** : interdit (formel). *Students may not enter the lab.*",
      },
      {
        emoji: "📊",
        title: "Probabilité — gradient",
        body: "Du plus probable au moins probable :\n\n- **MUST** be → très probable. *This must be Jenny.* (Cela doit être Jenny)\n- **SHOULD** be → probable. *This should be Jenny.*\n- **MAY** be → possible.\n- **MIGHT / COULD** be → possibilité faible.\n- **SHOULDN'T** be → peu probable.\n- **CAN'T / COULDN'T** be → impossible. *This can't be Jenny.*",
      },
      {
        emoji: "💡",
        title: "Conseil : SHOULD / OUGHT TO",
        body: "- **SHOULD** : conseil personnel, subjectif. *You should apologize.*\n- **OUGHT TO** : similaire, parfois plus moral. *You ought to help people in need.*\n\n**Négatif** : *You shouldn't ignore the rules. You ought not to ignore the rules.*",
      },
    ],
    keyPoints: [
      "Modaux invariables + base verbale SANS to",
      "CAN = capacité ; BE ABLE TO = équivalent à tous les temps",
      "Réussite ponctuelle passée = was/were able to (PAS could)",
      "MUST n'a pas de passé → utiliser had to",
      "Gradient probabilité : must > should > may > might/could > can't",
      "SHOULD / OUGHT TO = conseil",
      "MUSTN'T = interdiction forte | NEEDN'T = absence de nécessité",
    ],
    pieges: [
      "« She can to swim » → FAUX (pas de « to » après modal)",
      "« Yesterday I must go » → FAUX. Dire « had to go »",
      "Réussite passée précise : was able to (NOT could)",
      "Must past = had to (must n'a pas de forme passée)",
      "* (astérisque dans le cours) = forme agrammaticale",
    ],
  },
  {
    slug: "ch7",
    number: 7,
    title: "Le conditionnel",
    emoji: "🎯",
    hook: "WOULD + base verbale. Pas « would to ».",
    color: "from-yellow-400 to-amber-500",
    duration: "20 min",
    intro:
      "Le conditionnel anglais se forme avec **WOULD + base verbale**. Il exprime supposition, politesse, futur dans le passé, préférence, conseil, regret, habitude passée, et a un usage **journalistique** spécifique.",
    sections: [
      {
        emoji: "🏗️",
        title: "Formation",
        body: "**Structure** : S + **WOULD** + base verbale\n\n- I would come.\n- She would stay.\n- They would travel.\n\n⚠️ Pas de « to » après would.\n- ❌ ~~I would to come.~~\n- ✅ *I would come.*",
      },
      {
        emoji: "🔮",
        title: "1) Supposition / condition",
        body: "**Structure** :\n- **FR** : Si + imparfait → conditionnel\n- **EN** : **If + prétérit → would + base verbale**\n\n- *If I **had** money, I **would travel**.*\n- *If you **invited** me, I **would come**.*\n\n💡 En anglais soutenu/ancien : *should* peut remplacer would. *I should like you to come* = I would like you to come.",
      },
      {
        emoji: "🫖",
        title: "2) Politesse : WOULD LIKE",
        body: "- ***Would you like** a cup of tea?* → Voudriez-vous une tasse de thé ?\n- *Would you like to come?*",
      },
      {
        emoji: "⏭️",
        title: "3) Futur dans le passé (DI)",
        body: "Très important en **discours indirect** :\n\n- DD : *He said: \"I **will** help you.\"*\n- DI : *He said he **would** help me.*\n\n→ Il a dit qu'il m'aiderait.",
      },
      {
        emoji: "💛",
        title: "4) Préférence : WOULD RATHER",
        body: "**Préférer faire** : would rather + base verbale\n- *I would rather come.*\n\n**Préférer que quelqu'un fasse** : would rather + sujet + **prétérit**\n- *I would rather you came.*\n\n**Exemples utiles** :\n- *I'd rather not say anything.*\n- *Would you rather stay here?*\n- *He'd rather read than talk.*",
      },
      {
        emoji: "🎯",
        title: "5) Conseil : SHOULD / OUGHT TO / HAD BETTER",
        body: "**SHOULD** : conseil personnel. *You should stay here.*\n**OUGHT TO** : conseil moral. *You ought to finish your work.*\n**HAD BETTER** : conseil fort / avertissement. *You'd better leave him alone.*\n\n⚠️ **had better n'est PAS un vrai conditionnel** : c'est un faux passé. Pas de pluriel temporel, pas de « to ».\n- ❌ ~~You had better to go.~~\n- ✅ *You had better go.*",
      },
      {
        emoji: "💔",
        title: "6) Regret / reproche : conditional perfect",
        body: "**Would/should + HAVE + participe passé**\n\n- *She **would have said** something if she had known.* → Elle aurait dit qu… si elle avait su.\n- *He **should have gone** before.* → Il aurait dû partir avant.",
      },
      {
        emoji: "🔁",
        title: "7) WOULD fréquentatif (habitude passée)",
        body: "**WOULD** peut exprimer une **habitude dans le passé** = imparfait français.\n\n- *Every morning, we **would** leave home early.* → Tous les matins, nous quittions la maison tôt.\n- *When he was young, he **would** spend all his money on books.*",
      },
      {
        emoji: "📰",
        title: "8) Conditionnel journalistique",
        body: "En français, le conditionnel sert à exprimer **l'incertitude** (info non vérifiée).\n\n⚠️ En anglais, on n'utilise **PAS** would ici. À la place :\n- **COULD / MIGHT** : *A storm **could** hit the coast tonight.*\n- **Voix passive journalistique** : *The president **is said to** be about to resign.*\n\n**Différence importante** :\n- *is said **to consider*** → envisagerait actuellement (simultané)\n- *is said **to have considered*** → aurait envisagé auparavant (antériorité)",
      },
    ],
    keyPoints: [
      "WOULD + base verbale (pas « would to »)",
      "If + prétérit → would + V (supposition)",
      "Politesse : would like",
      "Futur dans le passé : would (en DI)",
      "Préférence : would rather + base / would rather + sujet + prétérit",
      "Conseil fort : had better + base (sans « to »)",
      "WOULD fréquentatif = imparfait français (habitude)",
      "Journalistique : COULD/MIGHT ou is said to + V (pas would)",
    ],
    pieges: [
      "« I would to come » → FAUX",
      "« You had better to go » → FAUX (had better + base verbale, pas to)",
      "Conditionnel journalistique = COULD/MIGHT en anglais (pas would)",
      "Aurait + PP (regret) = should have + PP",
      "« I would rather you come » → FAUX. Dire « you CAME » (prétérit)",
    ],
  },
  {
    slug: "ch8",
    number: 8,
    title: "Les pronoms",
    emoji: "👤",
    hook: "Pas de redoublement du sujet. Traduire « on » = 7 options.",
    color: "from-pink-400 to-rose-500",
    duration: "20 min",
    intro:
      "Les pronoms anglais sont **plus simples** qu'en français (une seule forme complément pour COD/COI/après préposition), mais **« on »** se traduit de 7 façons différentes.",
    sections: [
      {
        emoji: "👥",
        title: "Pronoms sujets (I, you, he, she, it, we, they)",
        body: "**Fonction sujet** : *I know. He has lost his keys. They are leaving.*\n\n**Après IT IS / IT WAS** :\n- Soutenu : *It is **he** who pays the bill. It is **I** who pay.*\n- Familier : *It's **him** that pays. It's **me** that pays.*\n\n**Combinaison nom + pronom** (registre soutenu) :\n- ✅ *My sister and **he** were late.*\n- ✅ *John and **I** met two years ago.*\n- Familier : *him and my sister, John and me.*",
      },
      {
        emoji: "🚫",
        title: "⚠️ PAS de redoublement du sujet",
        body: "Le français redouble (*Moi, je pense…*), l'anglais **NE LE FAIT PAS** :\n\n- ❌ ~~His sister, she knows.~~\n- ✅ *His sister knows.*\n- ❌ ~~Sport it's good.~~\n- ✅ *Sport is good.*\n- ❌ ~~Him he understood.~~\n- ✅ *Even he understood.*",
      },
      {
        emoji: "🎯",
        title: "Pronoms compléments (me, you, him, her, it, us, them)",
        body: "**Une seule forme** pour COD, COI, après préposition.\n\n- COD : *I see **her**.*\n- COI : *I'll speak **to her**.*\n- Après préposition : *You can't go **without her**.*",
      },
      {
        emoji: "🔄",
        title: "Verbes à double complément",
        body: "**Avec TO** : give, send, show, explain, lend, promise.\n**Avec FOR** : buy, order.\n\n**Place du pronom** : COD avant COI introduit par TO/FOR.\n- ✅ *She sent **it to her**.*\n- ❌ ~~She sent her it.~~",
      },
      {
        emoji: "🎭",
        title: "YOU = tu / vous / on (groupe général)",
        body: "**YOU** peut être :\n- Tu / vous : *You can do it.*\n- **« On » général** : *You can never tell.* → On ne sait jamais.\n\n**Expressions familières** : *you guys, y'all* (US). Ne pas traduire littéralement.",
      },
      {
        emoji: "🤴",
        title: "WE / US — usages spéciaux",
        body: "- **WE inclusif** : *We went to the cinema.*\n- **WE généralisation** : *We all make mistakes.* → On fait tous des erreurs.\n- **Royal WE** : *\"We disagree,\" said the Queen.*\n- **WE académique** : *In this essay, we will show...*",
      },
      {
        emoji: "👥",
        title: "THEY — usages élargis",
        body: "1. **Pluriel** : *The guests said they needed rooms.*\n2. **Noms collectifs** : *The government / the police / the family* peuvent être repris par THEY.\n3. **Généralité** : *They say that veganism is a fad.* → On dit que…\n4. **Personne inconnue** (singulier) : *Someone could hear us and they might tell our parents.*\n5. **THEY épicène** (non-binaire) : *Kae Tempest released a new album. **They** are a famous artist.*",
      },
      {
        emoji: "🌐",
        title: "HE / SHE / IT",
        body: "- **Personnes** : HE / SHE.\n- **Objets** : toujours **IT** (même si genre en français).\n  - *a car* → it (pas she)\n  - *a computer* → it\n- **Exceptions affectives** : un bateau, une voiture chouchou, un animal de compagnie peuvent prendre SHE.",
      },
      {
        emoji: "🎲",
        title: "Le pronom IT — multifonction",
        body: "1. **Objet** : *My car? **It** is green.*\n2. **Reprise d'une phrase** : *Chuck is getting married. **It** is incredible!*\n3. **Tags** : *That's good news, **isn't it**?*\n4. **Impersonnel** :\n   - Temps : *It's raining.*\n   - Heure : *What time is it?*\n   - Distance : *How far is it from London?*\n   - Date : *It's Sunday.*",
      },
      {
        emoji: "🎩",
        title: "ONE — formel, « on »",
        body: "Pronom indéfini **très formel**. Équivalent de « on / les gens ».\n\n- *One must rest sometimes.*\n- *One never knows.*\n\n**ONE'S** = déterminant possessif de ONE.\n- *Do **one's** best* → faire de son mieux.\n- Adapté au vrai sujet : *I will do **my** best.*",
      },
      {
        emoji: "🌟",
        title: "Comment traduire « ON » — 7 options",
        body: "« On » ne se traduit **PAS toujours pareil**. Choisir selon le contexte :\n\n1. **Passif** (le plus fréquent) : *On parle anglais.* → ***English is spoken.***\n   - Verbes au passif : say, believe, think, report, know, expect.\n2. **SOMEONE/SOMEBODY** (personne inconnue) : *On vous demande au téléphone.* → *Someone is asking for you.*\n3. **PEOPLE** (les gens en général) : *On a peur de l'inconnu.* → *People are afraid of the unknown.*\n4. **ONE** (vérité générale, proverbe) : *On ne sait jamais.* → *One never knows.*\n5. **THEY** (groupe extérieur) : *On dit qu'il va partir.* → *They say he will leave.*\n6. **WE** (inclusif) : *On est allé à Londres.* → *We went to London.*\n7. **YOU** (interlocuteur implicite) : *On ne dirait pas qu'elle a 70 ans.* → *You wouldn't think she's 70.*",
      },
    ],
    keyPoints: [
      "Une seule forme complément (me, him, her, us, them) pour COD/COI/préposition",
      "Pas de redoublement du sujet en anglais",
      "Verbes à double complément : COD avant COI (with to/for)",
      "Les objets = IT (toujours)",
      "THEY peut être singulier (personne inconnue, épicène)",
      "ONE = très formel pour « on »",
      "7 façons de traduire « on » : passif, someone, people, one, they, we, you",
    ],
    pieges: [
      "« His sister, she knows » → FAUX (pas de redoublement)",
      "« She sent her it » → FAUX. Dire « She sent it to her »",
      "« The car, she is beautiful » → FAUX. C'est IT pour un objet",
      "« One must allow yourself rest » → FAUX. Dire « oneself »",
      "« On parle anglais » → English IS SPOKEN (passif), pas « we speak english »",
    ],
  },
];
