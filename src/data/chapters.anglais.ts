import type { Chapter } from "./chapters";

// Cours « Anglais par la culture » — révisions express avant l'examen.
// Le contenu est en anglais (langue d'examen) avec des aides en français
// (traductions, résumés, mots-clés) directement intégrées.

export const chaptersAnglais: Chapter[] = [
  {
    slug: "ch1",
    number: 1,
    title: "Media: press, TV & polarization",
    emoji: "📰",
    hook: "Press barons, Murdoch, fake news, echo chambers.",
    color: "from-rose-400 to-orange-400",
    duration: "20 min",
    intro:
      "Who owns the news, and how do they shape opinion? **Press barons** (= magnats de la presse) like **Rupert Murdoch** built media empires that influence elections and political polarization. The Internet revolution promised democracy, but social media also created **echo chambers** (= chambres d'écho) and spread **fake news** faster than the truth.\n\n💡 *En français* : un média ce n'est pas neutre — qui le possède détermine ce qu'on y lit. Murdoch est l'exemple typique : il a soutenu Thatcher, Blair, Trump… ses journaux ont influencé les élections.",
    sections: [
      {
        emoji: "🗞️",
        title: "The British and American printed press",
        body: "**UK press** is split between :\n- **Broadsheets / quality press** = presse sérieuse : *The Times, The Guardian, The Daily Telegraph, The Financial Times*.\n- **Tabloids / popular press** = presse populaire (sensationnaliste) : *The Sun, The Daily Mirror, The Daily Mail*.\n\n**US main newspapers** : *The New York Times, The Wall Street Journal, The Washington Post, USA Today*.\n\n💡 *Vocab* : a **broadsheet** = grand format sérieux ; a **tabloid** = petit format sensationnaliste.",
      },
      {
        emoji: "📺",
        title: "TV in the UK and US",
        body: "**UK** :\n- The first TV channel was the **BBC** (1936). BBC One, Two, Three… are **public ownership** (financée par redevance).\n- ITV = **private ownership**. Channel 4 = **public** but **no public funding**.\n- Sky News, Virgin TV = paid **subscription services**.\n\n**US** uses different vocabulary :\n- *\"Over-the-air\"* = free-to-air (gratuit, antenne).\n- *\"Commercial vs non-commercial networks\"* (= au lieu de \"public/private\").\n- **The Big 4 commercial networks** : ABC, CBS, NBC, FOX.\n- **PBS** = main **non-commercial** network (350 channels), funded by donations & government. Voted **most trustworthy** institution in the US for 15 years.\n\n**US cable news** :\n- **CNN** (1980, Ted Turner, owned by Warner) = liberal.\n- **FOX News** (1996, Rupert Murdoch) = conservative, pro-Republican.\n- **MSNBC** (1996, NBC) = liberal, pro-Democrat — *\"the left-leaning counterpart to Fox News\"*.",
      },
      {
        emoji: "👑",
        title: "Rupert Murdoch — the most powerful press baron",
        body: "Born in Australia, Murdoch built a global media empire over 60 years.\n\n**Key dates to remember** :\n- **1969** : buys *The Sun* in London, turns it from broadsheet to **tabloid**.\n- **1981** : buys *The Times* and *Sunday Times* with Thatcher's help.\n- **1985** : becomes US citizen, buys 20th Century-Fox.\n- **1986** : creates **Fox Broadcasting** (The Simpsons, X-Files…).\n- **1996** : launches **Fox News Channel** (now major US cable news).\n- **2007** : buys *The Wall Street Journal*.\n- **2019** : sells most of 21st Century Fox to Disney for $71 billion.\n- **2023** : retires. His son **Lachlan** takes over.\n\n**Political influence — examples** :\n- **1992 UK election** : *The Sun* claimed *\"It was the Sun wot won it\"* (= le Sun a fait gagner) for John Major.\n- **1997** : *The Sun* backs Tony Blair.\n- **2009** : backs David Cameron.\n- **2016** : Fox News supports Donald Trump.\n\n💡 *En français* : Murdoch utilise ses journaux comme un outil politique — il soutient les candidats qui lui sont utiles commercialement, et exerce une **\"political character assassination\"** (assassinat politique) contre ses cibles.",
      },
      {
        emoji: "⚖️",
        title: '"Watchdog" vs "lapdog" media',
        body: "**Watchdog media** = journalisme de surveillance (\"chien de garde\") qui contrôle le pouvoir.\n**Lapdog media** = média soumis (\"chien de manchon\") qui flatte le pouvoir.\n\n**Chomsky & Herman** identified **5 editorial filters** that shape mass media content (mnemo for memory) :\n1. **Size, Ownership and Profit orientation** (taille, propriété, rentabilité)\n2. **Advertising** (la pub influence le contenu)\n3. **Sourcing** (qui sont les sources : élites, gouvernement…)\n4. **Flaks** (= attaques, intimidations contre les médias indépendants)\n5. **War on terror** (or \"anti-communism\" originally) = idéologie de peur",
      },
      {
        emoji: "🌐",
        title: "Social media, echo chambers & polarization",
        body: '**"Legacy media" (old media)** = TV, radio, newspapers — pre-Internet.\n**"New media"** = computers, Internet, social platforms.\n\n**Marshall McLuhan (1964)** : *« The medium is the message »* (= le média est le message). Le canal compte autant que le contenu.\n\n**Echo chambers** = chambres d\'écho : on ne voit que des opinions similaires aux nôtres → **confirmation bias** (= biais de confirmation).\n\n**Polarization** = polarisation = sharp division of opinion. The US has become **deeply polarized** since the 1980s — Democrats and Republicans are split on guns, abortion, immigration, climate change.\n\n**Fake news** spreads **faster** than real news. Examples of conspiracy theories :\n- **Flat earthers** (= platistes)\n- **Birthers** (Obama not born in US)\n- **QAnon**\n- **2020 fraud allegations** → **Capitol attack on January 6th, 2021**.\n\n💡 *En français* : les algorithmes des réseaux sociaux nous montrent ce qui nous plaît → on s\'enferme dans une bulle → la société se polarise.\n\n**Obama on Murdoch** (2023) : *« Rupert Murdoch fuelled polarisation of society »* (= a alimenté la polarisation).',
      },
    ],
    keyPoints: [
      "Press barons = magnats de la presse (Rupert Murdoch is THE example)",
      "Broadsheets (quality press) ≠ Tabloids (popular press, sensationalist)",
      "UK : BBC = public; ITV/Sky/Channel 5 = private. Channel 4 = public but no public funding",
      "US : Big 4 commercial networks = ABC, CBS, NBC, FOX. PBS = non-commercial",
      "FOX News (1996, Murdoch) = conservative ; CNN = liberal ; MSNBC = liberal",
      "Murdoch's empire : Sun (1969), Times (1981), Fox News (1996), WSJ (2007)",
      "Chomsky's 5 filters : Ownership, Advertising, Sourcing, Flaks, War on terror",
      "Echo chambers + confirmation bias + algorithms → polarization",
      "Capitol attack = January 6th, 2021",
      "Obama : Murdoch fuelled polarization",
    ],
    pieges: [
      "« Tabloid » ≠ « broadsheet » — tabloid is sensationalist, broadsheet is serious",
      "Channel 4 in the UK is PUBLIC ownership but receives NO public funding",
      "PBS is non-commercial AND not-for-profit — different from BBC",
      "CNN is owned by Warner ≠ Fox owned by Murdoch — don't mix up",
      "« The medium is the message » = Marshall McLuhan, 1964 (not McCarthy!)",
    ],
  },
  {
    slug: "ch2",
    number: 2,
    title: "Mass culture & soft power",
    emoji: "🎬",
    hook: "Hollywood, Taylor Swift, soft power.",
    color: "from-violet-400 to-pink-500",
    duration: "20 min",
    intro:
      "Mass culture (= culture de masse) is the popular culture spread through media : films, music, sports, fashion, branding. The **English-speaking world dominates global pop culture** because English is the world's **lingua franca** (= langue de communication mondiale).\n\nThis cultural dominance is a tool of **soft power** (Joseph Nye) : the ability to influence other countries through **attraction**, not force.\n\n💡 *En français* : les USA n'ont pas seulement la puissance militaire (\"hard power\") — ils ont aussi la puissance culturelle (\"soft power\"). Hollywood, Netflix, Taylor Swift sont des armes de séduction.",
    sections: [
      {
        emoji: "🌍",
        title: "English as a cultural transmitter",
        body: "Key facts to remember :\n\n- English is the world's **most widely spoken language** : ~1.5 billion speakers (only ~400M native).\n- English accounts for **60% of world internet content**.\n- English is the **lingua franca** of pop culture and the global economy.\n- All **100 most influential science journals** publish in English.\n\n💡 English is not just communication — it's a **cultural bridge** that lets ideas travel across borders.",
      },
      {
        emoji: "🎭",
        title: "The 7 pillars of anglophone mass culture",
        body: "Memorize these 7 areas (mnemo : *Films, Music, Arts, Sports, Theme parks, Fashion, Branding*) :\n\n1. **Film industry** : *Hollywood* (USA), *Bollywood* (India, English-speaking), *Nollywood* (Nigeria).\n2. **Music** : Grammy Awards, Oscars, BRIT Awards.\n3. **Arts and performing arts** : Broadway, West End theatres.\n4. **Sports** :\n   - Canada : **hockey, lacrosse**\n   - UK : **rugby, soccer**\n   - USA : **baseball, basketball, football** (Super Bowl)\n   - **Iconic athletes** = transmit cultural values.\n5. **Theme parks** : Disney, Universal Studios.\n6. **Fashion** : New York and London as fashion capitals. Magazines : *Vogue, Harper's Bazaar, Elle*. **Blue jeans** = a global staple (= un classique mondial).\n7. **Branding & advertising** : English logos, taglines, ad campaigns spread English-language consumerism worldwide.\n\n**Conclusion** : pop culture icons become **\"living commodities\"** (= marchandises vivantes). Celebrities act as **influencers shaping consumer behavior**.",
      },
      {
        emoji: "🎤",
        title: "Case study: Taylor Swift",
        body: 'Taylor Swift = a **curated product of America\'s soft power machinery** (= produit fabriqué de la machinerie du soft power américain).\n\n**Cultural ambassador** :\n- Pop culture as **social mirror** (= miroir social).\n- Pop culture and politics = **mutually beneficial relationship**.\n- *Quote* : *« A meme is not an argument. It\'s an idea with emotion behind it »* (Dr Brian Ott).\n\n**The "Taylor Swift effect"** :\n- Her presence at NFL Kansas City Chiefs games → **+7% viewership** (= audience).\n- **Fanbase expansion** : Chiefs fanbase grew **+30 to 40%**.\n- **Eras Tour fans** spent on average **$1,300** in local economies (travel, food, merch).\n\n**Her activism** : she has used her voice to encourage voter registration and progressive causes.\n\n**Identity model** : Taylor Swift = a "creative product" ; identities are **cultural commodities**.',
      },
      {
        emoji: "🌟",
        title: "Soft power: Joseph Nye's concept",
        body: '**Soft power** (Joseph S. Nye) :\n\n> *« A country\'s ability to influence the preferences and behaviours of various actors in the international arena (states, corporations, communities, publics etc.) through **attraction or persuasion** rather than **coercion**. »*\n\n💡 *En français* : le soft power = obtenir ce qu\'on veut sans utiliser la force, par séduction culturelle/idéologique.\n\n**Global Soft Power Index** measures countries on :\n- Business & Trade\n- International Relations\n- Education & Science\n- Culture & Heritage\n- Governance\n- Media & Communication\n- Sustainability\n- People & Values\n\n**US soft power in the 21st century** :\n- **Erosion** under Trump (2017-2021) : confrontational politics damaged US image. The US **lost its 1st rank** in 2021 (recovered under Biden).\n- Internal divisions, social disparities, partisan divide weaken US soft power.\n\n**UK soft power** :\n- **Cultural diplomacy, sport, "Britishness", British monarchy, English language**.\n- Exports of UK programmes, music, books.\n\n**Canada\'s soft power** :\n- **Multiculturalism** as key asset.\n- Cultural exports : Drake, Céline Dion, the Toronto International Film Festival (TIFF).\n- Progressive policies enhance international image.\n\n**Emerging soft power players** :\n- **China** : Confucius Institutes, economic diplomacy, CGTN media. *Limit* : political system limits soft power.\n- **South Korea** : K-pop (BTS, Blackpink), K-dramas, *Squid Game* — biggest non-English hit.\n- **Middle East (UAE, Qatar, Saudi Arabia)** : mega-events (Expo 2020, FIFA World Cup 2022), investments in tourism, sports, media.',
      },
    ],
    keyPoints: [
      "English = world lingua franca, ~1.5B speakers, 60% of internet content",
      "7 pillars : Film, Music, Arts, Sports, Theme parks, Fashion, Branding",
      "Soft power = Joseph Nye = influence through attraction, not coercion",
      "Bollywood = India ; Nollywood = Nigeria ; Hollywood = USA",
      "Taylor Swift = soft power machinery / cultural ambassador",
      "Eras Tour fans spent ~$1,300 each in local economies",
      "Trump eroded US soft power (lost 1st rank in 2021, recovered under Biden)",
      "K-pop, K-dramas, Squid Game = South Korean soft power",
    ],
    pieges: [
      "Soft power = ATTRACTION/persuasion, not coercion (≠ hard power = military force)",
      "Joseph NYE coined the term, not McLuhan or Chomsky",
      "Squid Game broke records for a NON-English hit (don't say English-speaking)",
      "Bollywood is in India, not Bangladesh or Pakistan",
      "Channel 4 is public ownership but no public funding",
    ],
  },
  {
    slug: "ch3",
    number: 3,
    title: "International relations",
    emoji: "🌐",
    hook: "Commonwealth, Five Eyes, NATO, hot topics.",
    color: "from-blue-400 to-cyan-500",
    duration: "20 min",
    intro:
      "The English-speaking world has a **disproportionately large role** in the current international system. Many global institutions were built under **British and American leadership**. The \"core\" 5 English-speaking states (US, UK, Canada, Australia, New Zealand) have particularly close ties.\n\n💡 *En français* : 5 pays anglophones forment un noyau dur (\"core\") : USA, UK, Canada, Australie, Nouvelle-Zélande. Ils partagent renseignement, défense, valeurs.",
    sections: [
      {
        emoji: "🏛️",
        title: "Key alliances and institutions",
        body: "**Sigles à connaître par cœur** :\n\n- **Commonwealth** : 56 countries, mostly former British colonies, headed by the British monarch. Cultural and political cooperation.\n- **NATO** = North Atlantic Treaty Organization (1949) : military alliance USA + UK + Europe + Canada vs USSR (now Russia).\n- **\"The Special Relationship\"** : the close US-UK political/military bond since WWII.\n- **Five Eyes** = intelligence-sharing alliance : **USA, UK, Canada, Australia, New Zealand**. *To remember : 5 pays = 5 yeux*.\n- **AUKUS** (2021) : security pact between **A**ustralia, **UK**, **US**. Mainly nuclear submarines.\n- **QUAD** : **Quad**rilateral Security Dialogue : US, Japan, India, Australia. Goal : *\"Free and Open Indo-Pacific\"*.\n- **OECD** = Organisation for Economic Cooperation and Development.\n- **UN** = United Nations (1945).\n- **G7 / G20** : economic clubs.\n- **BRICS** : **B**razil, **R**ussia, **I**ndia, **C**hina, **S**outh Africa — explicit challenge to US-UK-led order.\n- **Non-Aligned Movement** : countries that refused to side with US or USSR during Cold War (India was a leader).\n\n💡 *En français* : retenir surtout NATO, Five Eyes, AUKUS, QUAD, BRICS — ce sont les acronymes les plus susceptibles de tomber.",
      },
      {
        emoji: "🇨🇦",
        title: "The Hardeep Singh Nijjar case (2023)",
        body: "A real-world example of **sovereignty** issues.\n\n**Sovereignty** = a state's authority to govern itself, free from external interference. Founding principle since the **Peace of Westphalia (1648)** and the **UN Charter (1945)**.\n**Non-intervention** = no state should intervene in another's internal affairs.\n\n**The story** :\n- **Hardeep Singh Nijjar** = a Canadian citizen, **Sikh activist** (calls for **Khalistan**, an independent Sikh state).\n- **18 June 2023** : assassinated outside a Sikh temple in **Surrey, British Columbia, Canada**.\n- Canada claims India ordered the killing.\n- Canada **expels an Indian diplomat** in September 2023 (India retaliates).\n- **October 2024** : 6 more diplomats expelled.\n\n**Why it matters** :\n- Canada has **770,000 Sikhs**, the largest Sikh diaspora outside India.\n- Sikh separatism is a sensitive issue for India.\n- This breach of sovereignty is a **challenge to the rules-based international order**.\n\n**Different responses** :\n- **Canada** : vocal, public condemnation. Suspended trade negotiations.\n- **USA** : subtle, behind-the-scenes warnings. (USA is more careful — India is key in QUAD.)\n\n💡 *En français* : un activiste sikh canadien a été assassiné par les services indiens (selon le Canada). Le Canada a réagi fortement, les USA plus prudemment car ils ont besoin de l'Inde face à la Chine.",
      },
      {
        emoji: "🧠",
        title: "Theories of international relations",
        body: 'Three main schools — to memorize :\n\n1. **Realism** : States are the main actors. The system is **anarchic** (no global government). Each state acts for its own **survival**. Alliances form to **balance power**, can change quickly.\n\n2. **Liberal Internationalism (idealism)** : **Ideologies** define IR. Liberal democratic states are natural allies against threats. Culture and identity matter (who is in the "liberal world"), but they aren\'t determining.\n\n3. **Critical IR** (Marxist, feminist, post-colonial) : States are NOT the main actors — **classes or social groups** are. The system is defined by **capitalist hegemony**, **patriarchy**, or other socio-economic forces.',
      },
      {
        emoji: "⚔️",
        title: "Civilizational divides — Huntington & the Anglosphere",
        body: '**Samuel Huntington (1993)** : *« The Clash of Civilizations »* (= choc des civilisations). After the Cold War, conflicts will happen between **civilizations** (Western, Islamic, Confucian, etc.), not between states or ideologies.\n\n**Global North / Global South** : a divide that aligns with old colonial power vs colonized states.\n\n**The Anglosphere** : a concept from early-2000s right-wing British intellectuals → revived in **post-Brexit UK**. Idea : the 5 English-speaking core countries form a natural cultural-political bloc.\n\n**Two anglophone worlds** :\n- **Settler colonies** (industrialized, Global North) : US, UK, Canada, Australia, New Zealand, Ireland.\n- **Exploitation colonies** (developing, Global South) : India, South Africa, Nigeria, Caribbean.\n\n**Warnings** about these theories :\n- Treating liberalism as something "Western" or "English" is **essentializing** (= rendre essentiel par culture/origine).\n- **Stuart Hall — *« The West and the Rest »* (1992)** : critical reflection needed.\n\n**Conclusion** :\n- Nuance is important.\n- The "English-speaking world" is **one element among many**.\n- The **strong version** of "civilizational links shape the world system" is an **exaggeration** and risks **problematic essentialization**.',
      },
    ],
    keyPoints: [
      "Five Eyes = USA, UK, Canada, Australia, New Zealand (intelligence)",
      "AUKUS (2021) = Australia + UK + USA — nuclear submarines",
      "QUAD = US, Japan, India, Australia (Indo-Pacific)",
      "BRICS = Brazil, Russia, India, China, South Africa — challenges Western order",
      "Sovereignty = Peace of Westphalia, 1648 ; UN Charter, 1945",
      "Nijjar assassination = June 18, 2023, Surrey, British Columbia",
      "770,000 Sikhs in Canada (largest diaspora outside India)",
      "Realism / Liberal Internationalism / Critical IR = 3 theories",
      "Huntington 1993 = Clash of Civilizations",
      'Stuart Hall 1992 = "The West and the Rest"',
    ],
    pieges: [
      "AUKUS = Australia + UK + US ONLY (no Canada, no NZ — those are in Five Eyes)",
      "Nijjar was assassinated in Canada (Surrey, BC), not in India",
      "Realism vs idealism : realism says STATES are main actors ; idealism says IDEOLOGIES",
      "Don't confuse Five Eyes (intel) with NATO (military)",
      "Khalistan = the Sikh independent state, not Pakistan",
    ],
  },
  {
    slug: "ch4",
    number: 4,
    title: "Economics in the English-speaking world",
    emoji: "💵",
    hook: "Bretton Woods, dollar, neoliberalism.",
    color: "from-emerald-400 to-teal-500",
    duration: "20 min",
    intro:
      "The English-speaking world (especially **US and UK**) is the **center of the history of capitalism**. From the Industrial Revolution to today's tech giants, US-UK have shaped the global economic order through institutions like the **IMF, World Bank, WTO**, and the dominance of the **US dollar**.\n\n💡 *En français* : capitalisme moderne = produit anglo-américain. La livre sterling (UK) et le dollar (US) ont successivement dominé le monde. Aujourd'hui c'est encore le dollar qui règne.",
    sections: [
      {
        emoji: "🏭",
        title: "US/UK as the center of capitalism",
        body: '**Stages of US-UK capitalism** :\n\n1. **Enclosure Movement** (UK, 16th-18th century) : privatization of common lands.\n2. **Industrial Revolution** (UK, 1760-1840) : factories, mass production, urbanization.\n3. **Global trade** (UK Empire, 19th century).\n4. **Fordist production paradigm** (US, early 20th century) : assembly line, mass consumption.\n5. **Welfare State** (post-WWII) : social safety net, government intervention.\n6. **Aerospace, petrochemicals, communications, IT** (US, 20th century).\n7. **Neoliberalism** (1980s onwards) : **Thatcher / Reagan**, deregulation, free markets.\n8. **Post-industrialization** (1990s+) : services, finance dominate over manufacturing.\n9. **Globalization, Internet, AI** (today).\n\n**Service industries dominate** :\n- **UK** : 82% of GDP = retail, hospitality, finance, health, education.\n- **US** : 80% of GDP, with more manufacturing and agriculture left.\n\n**Global finance capitals** :\n- **Wall Street** (New York).\n- **The City** (London).',
      },
      {
        emoji: "🤝",
        title: "Bretton Woods system & institutions",
        body: '**Bretton Woods Conference (July 1944)** : created the post-WWII economic order.\n\n**Key features** :\n- **Dollar/gold convertibility** at $35/ounce. The dollar = the anchor of the system.\n- **Ended in 1971** when Nixon terminated dollar/gold convertibility.\n- **Promotion of international trade** via stable, convertible currencies — this principle remains today.\n\n**Bretton Woods institutions** :\n- **IMF** (International Monetary Fund) — Washington, DC.\n- **World Bank** — Washington, DC.\n- **WTO** (World Trade Organization, 1995) — unofficially Bretton Woods.\n\n**The Washington Consensus** (1990s/early 2000s) : a set of free-market policies pushed by IMF and World Bank :\n- Privatization\n- Deregulation\n- Trade liberalization\n- Fiscal discipline\n\n💡 *En français* : Bretton Woods (1944) = la conférence qui a fondé l\'ordre économique d\'après-guerre, dominé par le dollar. Ses institutions (FMI, Banque mondiale) sont à Washington.',
      },
      {
        emoji: "💲",
        title: "US scale & dollar dominance",
        body: '**The US — key facts to memorize** :\n- **Largest economy** by GDP since the early 20th century (~$29 trillion today).\n- **Largest consumer** : consumer spending = **68%** of the economy.\n- **Largest stock exchanges** : NYSE + NASDAQ = **42% of global market capitalization**.\n- **Top destination for immigration** : 46.6 million foreign-born (= **19% of world migration**).\n- **Highest investments in R&D** : $789 billion (next : Japan ~$125B). 3.46% of GDP.\n- **Largest oil and natural gas producer**.\n- **Highest defense spending** : $900 billion.\n- **121 of the world\'s 500 biggest corporations** are HQ\'d in the US.\n- **Dollar = world\'s reserve currency**.\n\n**Dollar dominance** :\n- **80% of world trade** is dollar-denominated.\n- **59% of global foreign exchange reserves** are in dollars.\n- Other major reserve currencies (IMF) : Euro, British pound, Japanese yen, Chinese renminbi, Australian dollar, Canadian dollar, Swiss franc.\n\n**BRICS challenge** :\n- **India** : 5th largest GDP (3rd by PPP), but low GDP/capita (141st in world).\n- **South Africa** : largest African economy, mostly natural resources, high poverty.\n- Both are in **G20**.',
      },
      {
        emoji: "🌍",
        title: "Australia: front line of climate change",
        body: "Australia is a paradox : **export-oriented economy** based on **coal and gas**, but on the **front line of climate change**.\n\n**Coal & politics** :\n- Coal mining = **3.8 workers per 1,000**.\n- All mining = **2.2% of employment**, but **13.6% of GDP** (20% with mining services).\n- Mining = **historically and culturally significant**.\n- **Nearly half of all exports**.\n\n**Climate impacts** :\n- Pacific Islands face **existential threat** from rising sea levels.\n- **2022 Bushfires**, continued coral reef bleaching.\n\n**Climate-friendly leadership efforts** :\n- **2050 Net-zero emissions promise**.\n- **June 2022** : Australia raised its emission reduction target to **43% below 2005 levels by 2030**.\n- **2021 Quadrilateral Security Dialogue** added climate as priority.\n\nBut **2022** : 69 new coal projects + 49 new oil/gas projects in pipeline.\n\n**Even alternative energy depends on mining** :\n- Australia is the **world's largest producer of lithium**.\n- Has **the largest known uranium reserves**.",
      },
      {
        emoji: "📉",
        title: "End of the neoliberal consensus?",
        body: "**Height of the neoliberal moment (1980s-1990s)** :\n- **Thatcher (UK) / Reagan (US)** = liberalize, privatize, deregulate.\n- **Clinton / Blair** = « Third Way », continue globalization with social tweaks.\n- **WTO** founded 1995.\n- **Washington Consensus**.\n- **Supply-side economics** = « trickle-down » : tax cuts for the rich → growth for everyone.\n\n**Challenges to neoliberalism** :\n\n**1. Inequality** : kept rising since the 1980s.\n\n**2. The 2007-8 financial crisis (« Great Recession »)** :\n- Caused by **US banks taking too much risk with subprime mortgages**.\n- US government **bailout** essentially **protected financial markets** (« too big to fail »).\n- Demonstrated **failure of pure free-market** logic.\n\n**3. Citizens United v. FEC (2010)** :\n- US Supreme Court ruling.\n- Money spent on elections = **« speech »** protected by 1st Amendment.\n- → Rise of **Super PACs** (= unlimited spending in support of candidates).\n- Money in politics linked to inequality.\n\n**4. Occupy Wall Street (2011)** :\n- Protest movement against the slow, unequal recovery from the recession.\n- Slogan : *« We are the 99% »*.\n\n**5. New tariffs and industrial policies** :\n- **Trump tariffs** : still supply-side (tax cuts), but **challenges to globalized trade**, goal = protecting US manufacturing.\n- **Covid-19 recovery** : demand-side policies.\n- **Biden investments** : American Rescue Plan, Bipartisan Infrastructure Law, **CHIPS and Science Act**, **Inflation Reduction Act** = demand-side, infrastructure, manufacturing, worker/union protections.\n\n💡 *En français* : depuis 40 ans, le néolibéralisme (Thatcher/Reagan) dominait. Mais après la crise de 2008 et l'inégalité croissante, on revient à des politiques plus interventionnistes (Biden, droits de douane, investissements industriels).",
      },
    ],
    keyPoints: [
      "Bretton Woods = 1944, established dollar dominance + IMF + World Bank",
      "Bretton Woods ended in 1971 (end of dollar/gold convertibility)",
      "WTO created 1995",
      "US GDP ≈ $29 trillion, largest in world",
      "Dollar = 80% of world trade, 59% of global reserves",
      "UK GDP : 82% services ; US GDP : 80% services",
      "Wall Street + The City = global finance capitals",
      "2007-8 crisis = subprime mortgages, government bailouts (« too big to fail »)",
      "Citizens United (2010) = money = speech",
      "Occupy Wall Street = 2011",
      "Australia : 13.6% GDP from mining, 50% of exports",
      "Biden's Inflation Reduction Act = post-neoliberal industrial policy",
    ],
    pieges: [
      "Bretton Woods (1944) ≠ end of Bretton Woods (1971) — both important",
      "WTO is officially separate from Bretton Woods (1995)",
      "Neoliberalism = Thatcher/Reagan, NOT Roosevelt or Keynes",
      "Citizens United decided MONEY = SPEECH, not the opposite",
      "Australia is a major lithium and uranium producer (key for green tech)",
      "Trump tariffs are PROTECTIONIST, but tax cuts are still supply-side",
    ],
  },
];
