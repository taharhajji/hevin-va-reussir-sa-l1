import Markdown from "../components/Markdown";

const formulas = [
  {
    section: "Calculs de base",
    emoji: "🧮",
    items: [
      { label: "Taux de variation", body: "$$ TV = \\frac{V_{arrivée} - V_{départ}}{V_{départ}} \\times 100 $$" },
      { label: "Coefficient multiplicateur", body: "$$ CM = \\frac{V_{arrivée}}{V_{départ}} = 1 + \\frac{TV}{100} $$" },
    ],
  },
  {
    section: "Comptabilité nationale",
    emoji: "📊",
    items: [
      { label: "Valeur ajoutée", body: "$$ VA = P - CI $$" },
      { label: "Équilibre Ressources-Emplois", body: "$$ P + M = C + CI + FBCF + X $$" },
      { label: "PIB par la dépense", body: "$$ PIB = C + FBCF + (X - M) $$" },
      { label: "Solde commercial", body: "$$ \\text{Solde} = X - M $$" },
    ],
  },
  {
    section: "Déflater le PIB",
    emoji: "📐",
    items: [
      { label: "CM volume (PIB réel)", body: "$$ CM_{volume} = \\frac{CM_{valeur}}{CM_{prix}} $$" },
      { label: "PIB réel final", body: "$$ \\text{PIB réel} = \\frac{\\text{PIB nominal}}{CM_{prix}} $$" },
    ],
  },
  {
    section: "Pouvoir d'achat",
    emoji: "💰",
    items: [
      { label: "Salaire réel", body: "$$ \\text{Salaire réel} = \\frac{\\text{Salaire nominal}}{CM_{prix}} $$" },
      { label: "Niveau de vie (UC)", body: "$$ \\text{NV} = \\frac{\\text{Revenu disponible}}{\\text{Nombre d'UC}} $$" },
    ],
  },
  {
    section: "Consommation & multiplicateur",
    emoji: "✨",
    items: [
      { label: "Propension moyenne à consommer", body: "$$ PMC = \\frac{C}{Y} \\times 100 $$" },
      { label: "Propension marginale", body: "$$ Pmc = \\frac{\\Delta C}{\\Delta Y} $$" },
      { label: "Multiplicateur keynésien", body: "$$ k = \\frac{1}{1 - Pmc} $$" },
      { label: "Effet sur le revenu", body: "$$ \\Delta Y = I \\times k $$" },
    ],
  },
  {
    section: "Banque & Bâle",
    emoji: "🏦",
    items: [
      { label: "Ratio prudentiel", body: "$$ \\frac{\\text{Fonds propres}}{\\text{Engagements}} \\geq 8\\% $$" },
      { label: "Plafond de prêt", body: "$$ \\text{Engagement max} = \\text{Fonds propres} \\times 12{,}5 $$" },
    ],
  },
];

const mnemos = [
  { code: "DEMIDE", title: "6 limites à la croissance (Gordon, 2012)", body: "**D**ette · **E**ducation · **M**ondialisation · **I**négalités · **D**émographie · **E**nergie." },
  { code: "CDIM", title: "4 facteurs d'inflation", body: "**C**oûts · **D**emande · **I**mportée · **M**onétaire (création)." },
  { code: "SDR", title: "3 conditions BIT pour être chômeur", body: "**S**ans emploi · **D**isponible 2 sem · **R**echerche active 4 sem." },
  { code: "QTR", title: "3 outils anti-empreinte carbone", body: "**Q**uotas · **T**axation · **R**églementation." },
  { code: "M-SNF-SF-APU-ISBLSM-RDM", title: "6 secteurs institutionnels", body: "À scander comme un rap." },
  { code: "SEE", title: "VA partagée entre 3", body: "**S**alariés · **E**tat · **E**ntreprise (EBE)." },
  { code: "SER", title: "3 composantes IDH", body: "**S**anté · **E**ducation · **R**evenu (PPA)." },
  { code: "DREP", title: "4 déterminants de l'investissement", body: "**D**emande · **R**entabilité · prix **R**elatifs · **F**inancement." },
  { code: "RCP", title: "3 logiques d'investissement", body: "**R**emplacement · **C**apacité · **P**roductivité." },
  { code: "DDD", title: "Les 3D de Bourguinat (1987)", body: "**D**écloisonnement · **D**éréglementation · **D**ésintermédiation." },
  { code: "SMF", title: "3 agences de notation", body: "**S**tandard & Poor's · **M**oody's · **F**itch." },
  { code: "GNEE", title: "4 phases d'une bulle", body: "**G**estation · **N**aissance · **E**uphorie · **E**clatement." },
  { code: "4E", title: "4 fonctions de la monnaie", body: "**E**change · **E**xpression du prix · **E**pargne · **E**conomie." },
  { code: "EUR", title: "Bitcoin : 3 critères non remplis", body: "Pas un instrument d'**E**change · pas une **U**nité de compte · pas une **R**éserve de valeur." },
  { code: "VBHB", title: "4 risques cryptos", body: "**V**olatilité · **B**ulle · **H**acking · **B**lanchiment." },
];

const numbers = [
  { label: "Plein emploi", value: "< 4 %" },
  { label: "Cible inflation BCE", value: "2 %" },
  { label: "Halo autour du chômage France", value: "≈ 3 millions" },
  { label: "Demandeurs d'emploi totaux France", value: "≈ 5,3 millions" },
  { label: "Chômage 15-24 ans", value: "≈ 19 %" },
  { label: "Taux d'investissement entreprises FR", value: "21,1 %" },
  { label: "Taux d'investissement ménages FR", value: "8,2 %" },
  { label: "Prélèvements obligatoires / PIB", value: "43,2 % (2023)" },
  { label: "Empreinte carbone FR", value: "9,4 t CO₂ éq/hab" },
  { label: "Ratio Bâle", value: "≥ 8 %" },
  { label: "Monnaie fiduciaire", value: "< 10 %" },
  { label: "Monnaie scripturale", value: "> 90 %" },
  { label: "Bitcoin offre limitée", value: "21 millions" },
  { label: "Loi bancaire (banque universelle)", value: "1984" },
  { label: "Crise des subprimes", value: "2008" },
  { label: "Création de l'IDH", value: "1990 (PNUD)" },
  { label: "SMIC horaire brut 2024", value: "1 823,03 €/mois" },
  { label: "UC", value: "1 / 0,5 / 0,3" },
];

export default function Formules() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        📐 Formulaire & mnémo
      </h1>
      <p className="text-slate-600 mb-8">
        Toutes les formules au même endroit, plus les acronymes pour ne rien oublier le jour J.
      </p>

      <section className="grid sm:grid-cols-2 gap-5">
        {formulas.map((f) => (
          <div key={f.section} className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{f.emoji}</span>
              <h2 className="font-display text-lg font-bold text-slate-900">{f.section}</h2>
            </div>
            <ul className="space-y-3">
              {f.items.map((it, i) => (
                <li key={i}>
                  <p className="text-sm font-semibold text-slate-700 mb-1">{it.label}</p>
                  <div className="bg-brand-50 rounded-lg p-2 text-center">
                    <Markdown>{it.body}</Markdown>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">🎒 Mémo-techniques</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mnemos.map((m) => (
            <div
              key={m.code}
              className="bg-white border border-slate-200 rounded-xl p-4 card-tilt"
            >
              <p className="font-mono text-brand-700 font-bold text-base">{m.code}</p>
              <p className="font-semibold text-slate-900 text-sm mt-1">{m.title}</p>
              <div className="prose-ludic text-slate-600 text-sm mt-1">
                <Markdown>{m.body}</Markdown>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">🔢 Chiffres à retenir</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {numbers.map((n, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-brand-500 px-4 py-2 rounded-r-xl shadow-sm"
            >
              <p className="text-sm text-slate-600">{n.label}</p>
              <p className="font-bold text-slate-900">{n.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
