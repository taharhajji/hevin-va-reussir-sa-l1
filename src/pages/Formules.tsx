import Markdown from "../components/Markdown";
import { useLang } from "../i18n/context";
import type { Lang } from "../i18n/context";

type Bilingual = { fr: string; tr: string };

const formulas: { section: Bilingual; emoji: string; items: { label: Bilingual; body: string }[] }[] = [
  {
    section: { fr: "Calculs de base", tr: "Temel hesaplar" },
    emoji: "🧮",
    items: [
      {
        label: { fr: "Taux de variation", tr: "Değişim oranı" },
        body: "$$ TV = \\frac{V_{arrivée} - V_{départ}}{V_{départ}} \\times 100 $$",
      },
      {
        label: { fr: "Coefficient multiplicateur", tr: "Çarpan katsayısı" },
        body: "$$ CM = \\frac{V_{arrivée}}{V_{départ}} = 1 + \\frac{TV}{100} $$",
      },
    ],
  },
  {
    section: { fr: "Comptabilité nationale", tr: "Ulusal muhasebe" },
    emoji: "📊",
    items: [
      {
        label: { fr: "Valeur ajoutée", tr: "Katma değer" },
        body: "$$ VA = P - CI $$",
      },
      {
        label: { fr: "Équilibre Ressources-Emplois", tr: "Kaynak-Kullanım Dengesi" },
        body: "$$ P + M = C + CI + FBCF + X $$",
      },
      {
        label: { fr: "PIB par la dépense", tr: "Harcamayla GSYH" },
        body: "$$ PIB = C + FBCF + (X - M) $$",
      },
      {
        label: { fr: "Solde commercial", tr: "Dış ticaret dengesi" },
        body: "$$ \\text{Solde} = X - M $$",
      },
    ],
  },
  {
    section: { fr: "Déflater le PIB", tr: "GSYH'yi enflasyondan arındırma" },
    emoji: "📐",
    items: [
      {
        label: { fr: "CM volume (PIB réel)", tr: "CM hacim (Reel GSYH)" },
        body: "$$ CM_{volume} = \\frac{CM_{valeur}}{CM_{prix}} $$",
      },
      {
        label: { fr: "PIB réel final", tr: "Son reel GSYH" },
        body: "$$ \\text{PIB réel} = \\frac{\\text{PIB nominal}}{CM_{prix}} $$",
      },
    ],
  },
  {
    section: { fr: "Pouvoir d'achat", tr: "Alım gücü" },
    emoji: "💰",
    items: [
      {
        label: { fr: "Salaire réel", tr: "Reel maaş" },
        body: "$$ \\text{Salaire réel} = \\frac{\\text{Salaire nominal}}{CM_{prix}} $$",
      },
      {
        label: { fr: "Niveau de vie (UC)", tr: "Yaşam standardı (UC)" },
        body: "$$ \\text{NV} = \\frac{\\text{Revenu disponible}}{\\text{Nombre d'UC}} $$",
      },
    ],
  },
  {
    section: { fr: "Consommation & multiplicateur", tr: "Tüketim & çarpan" },
    emoji: "✨",
    items: [
      {
        label: { fr: "Propension moyenne à consommer", tr: "Ortalama tüketim eğilimi" },
        body: "$$ PMC = \\frac{C}{Y} \\times 100 $$",
      },
      {
        label: { fr: "Propension marginale", tr: "Marjinal eğilim" },
        body: "$$ Pmc = \\frac{\\Delta C}{\\Delta Y} $$",
      },
      {
        label: { fr: "Multiplicateur keynésien", tr: "Keynesyen çarpan" },
        body: "$$ k = \\frac{1}{1 - Pmc} $$",
      },
      {
        label: { fr: "Effet sur le revenu", tr: "Gelir üzerindeki etki" },
        body: "$$ \\Delta Y = I \\times k $$",
      },
    ],
  },
  {
    section: { fr: "Banque & Bâle", tr: "Banka & Basel" },
    emoji: "🏦",
    items: [
      {
        label: { fr: "Ratio prudentiel", tr: "İhtiyatlı oran" },
        body: "$$ \\frac{\\text{Fonds propres}}{\\text{Engagements}} \\geq 8\\% $$",
      },
      {
        label: { fr: "Plafond de prêt", tr: "Kredi tavanı" },
        body: "$$ \\text{Engagement max} = \\text{Fonds propres} \\times 12{,}5 $$",
      },
    ],
  },
];

const mnemos: { code: string; title: Bilingual; body: Bilingual }[] = [
  {
    code: "DEMIDE",
    title: { fr: "6 limites à la croissance (Gordon, 2012)", tr: "Büyümenin 6 sınırı (Gordon, 2012)" },
    body: {
      fr: "**D**ette · **E**ducation · **M**ondialisation · **I**négalités · **D**émographie · **E**nergie.",
      tr: "**D**ette (Borç) · **E**ducation (Eğitim) · **M**ondialisation (Küreselleşme) · **I**négalités (Eşitsizlik) · **D**émographie · **E**nergie.",
    },
  },
  {
    code: "CDIM",
    title: { fr: "4 facteurs d'inflation", tr: "Enflasyonun 4 faktörü" },
    body: {
      fr: "**C**oûts · **D**emande · **I**mportée · **M**onétaire (création).",
      tr: "**C**oûts (maliyet) · **D**emande (talep) · **I**mportée (ithal) · **M**onétaire (parasal).",
    },
  },
  {
    code: "SDR",
    title: { fr: "3 conditions BIT pour être chômeur", tr: "İşsiz olmak için 3 ILO koşulu" },
    body: {
      fr: "**S**ans emploi · **D**isponible 2 sem · **R**echerche active 4 sem.",
      tr: "**S**ans emploi (işsiz) · **D**isponible (müsait, 2 hafta) · **R**echerche (arama, 4 hafta).",
    },
  },
  {
    code: "QTR",
    title: { fr: "3 outils anti-empreinte carbone", tr: "Karbon ayak izi azaltmanın 3 aracı" },
    body: {
      fr: "**Q**uotas · **T**axation · **R**églementation.",
      tr: "**Q**uotas (kotalar) · **T**axation (vergi) · **R**églementation (düzenleme).",
    },
  },
  {
    code: "M-SNF-SF-APU-ISBLSM-RDM",
    title: { fr: "6 secteurs institutionnels", tr: "6 kurumsal sektör" },
    body: { fr: "À scander comme un rap.", tr: "Rap gibi tekrarla." },
  },
  {
    code: "SEE",
    title: { fr: "VA partagée entre 3", tr: "KD 3 arasında paylaşılır" },
    body: {
      fr: "**S**alariés · **E**tat · **E**ntreprise (EBE).",
      tr: "**S**alariés (çalışanlar) · **E**tat (devlet) · **E**ntreprise (işletme — EBE).",
    },
  },
  {
    code: "SER",
    title: { fr: "3 composantes IDH", tr: "İGE'nin 3 bileşeni" },
    body: {
      fr: "**S**anté · **E**ducation · **R**evenu (PPA).",
      tr: "**S**anté (sağlık) · **E**ducation (eğitim) · **R**evenu (gelir, SAGP).",
    },
  },
  {
    code: "DREP",
    title: { fr: "4 déterminants de l'investissement", tr: "Yatırımın 4 belirleyicisi" },
    body: {
      fr: "**D**emande · **R**entabilité · prix **R**elatifs · **F**inancement.",
      tr: "**D**emande (talep) · **R**entabilité (kârlılık) · prix **R**elatifs (göreli fiyat) · **F**inancement.",
    },
  },
  {
    code: "RCP",
    title: { fr: "3 logiques d'investissement", tr: "3 yatırım mantığı" },
    body: {
      fr: "**R**emplacement · **C**apacité · **P**roductivité.",
      tr: "**R**emplacement (yenileme) · **C**apacité (kapasite) · **P**roductivité (verimlilik).",
    },
  },
  {
    code: "DDD",
    title: { fr: "Les 3D de Bourguinat (1987)", tr: "Bourguinat'nın 3D'si (1987)" },
    body: {
      fr: "**D**écloisonnement · **D**éréglementation · **D**ésintermédiation.",
      tr: "**D**écloisonnement (sınır kaldırma) · **D**éréglementation (kuralsızlaştırma) · **D**ésintermédiation (aracısızlaştırma).",
    },
  },
  {
    code: "SMF",
    title: { fr: "3 agences de notation", tr: "3 derecelendirme kuruluşu" },
    body: {
      fr: "**S**tandard & Poor's · **M**oody's · **F**itch.",
      tr: "**S**tandard & Poor's · **M**oody's · **F**itch.",
    },
  },
  {
    code: "GNEE",
    title: { fr: "4 phases d'une bulle", tr: "Balonun 4 evresi" },
    body: {
      fr: "**G**estation · **N**aissance · **E**uphorie · **E**clatement.",
      tr: "**G**estation (gebe kalma) · **N**aissance (doğum) · **E**uphorie (coşku) · **E**clatement (patlama).",
    },
  },
  {
    code: "4E",
    title: { fr: "4 fonctions de la monnaie", tr: "Paranın 4 işlevi" },
    body: {
      fr: "**E**change · **E**xpression du prix · **E**pargne · **E**conomie.",
      tr: "**E**change (değişim) · **E**xpression du prix (fiyat ifadesi) · **E**pargne (tasarruf) · **E**conomie (ekonomi).",
    },
  },
  {
    code: "EUR",
    title: { fr: "Bitcoin : 3 critères non remplis", tr: "Bitcoin: 3 karşılanmayan kriter" },
    body: {
      fr: "Pas un instrument d'**E**change · pas une **U**nité de compte · pas une **R**éserve de valeur.",
      tr: "**E**change (değişim) aracı değil · **U**nité (hesap birimi) değil · **R**éserve (değer saklama) değil.",
    },
  },
  {
    code: "VBHB",
    title: { fr: "4 risques cryptos", tr: "4 kripto risk" },
    body: {
      fr: "**V**olatilité · **B**ulle · **H**acking · **B**lanchiment.",
      tr: "**V**olatilité · **B**ulle (balon) · **H**acking · **B**lanchiment (aklama).",
    },
  },
];

const numbers: { label: Bilingual; value: string }[] = [
  { label: { fr: "Plein emploi", tr: "Tam istihdam" }, value: "< 4 %" },
  { label: { fr: "Cible inflation BCE", tr: "AMB enflasyon hedefi" }, value: "2 %" },
  { label: { fr: "Halo autour du chômage France", tr: "Fransa işsizlik halosu" }, value: "≈ 3 millions" },
  { label: { fr: "Demandeurs d'emploi totaux France", tr: "Fransa toplam iş arayan" }, value: "≈ 5,3 millions" },
  { label: { fr: "Chômage 15-24 ans", tr: "15-24 yaş işsizlik" }, value: "≈ 19 %" },
  { label: { fr: "Taux d'investissement entreprises FR", tr: "Şirket yatırım oranı FR" }, value: "21,1 %" },
  { label: { fr: "Taux d'investissement ménages FR", tr: "Hanehalkı yatırım oranı FR" }, value: "8,2 %" },
  { label: { fr: "Prélèvements obligatoires / PIB", tr: "Zorunlu kesinti / GSYH" }, value: "43,2 % (2023)" },
  { label: { fr: "Empreinte carbone FR", tr: "Karbon ayak izi FR" }, value: "9,4 t CO₂ éq/hab" },
  { label: { fr: "Ratio Bâle", tr: "Basel oranı" }, value: "≥ 8 %" },
  { label: { fr: "Monnaie fiduciaire", tr: "İtibari para" }, value: "< 10 %" },
  { label: { fr: "Monnaie scripturale", tr: "Kaydi para" }, value: "> 90 %" },
  { label: { fr: "Bitcoin offre limitée", tr: "Bitcoin sınırlı arz" }, value: "21 millions" },
  { label: { fr: "Loi bancaire (banque universelle)", tr: "Banka yasası (evrensel banka)" }, value: "1984" },
  { label: { fr: "Crise des subprimes", tr: "Subprime krizi" }, value: "2008" },
  { label: { fr: "Création de l'IDH", tr: "İGE'nin oluşumu" }, value: "1990 (PNUD)" },
  { label: { fr: "SMIC horaire brut 2024", tr: "2024 SMIC brüt aylık" }, value: "1 823,03 €/mois" },
  { label: { fr: "UC", tr: "UC" }, value: "1 / 0,5 / 0,3" },
];

function pickB(b: Bilingual, lang: Lang) {
  return b[lang];
}

export default function Formules() {
  const { lang, t } = useLang();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        {t("formulasTitle")}
      </h1>
      <p className="text-slate-600 mb-8">{t("formulasIntro")}</p>

      <section className="grid sm:grid-cols-2 gap-5">
        {formulas.map((f) => (
          <div key={pickB(f.section, lang)} className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{f.emoji}</span>
              <h2 className="font-display text-lg font-bold text-slate-900">{pickB(f.section, lang)}</h2>
            </div>
            <ul className="space-y-3">
              {f.items.map((it, i) => (
                <li key={i}>
                  <p className="text-sm font-semibold text-slate-700 mb-1">{pickB(it.label, lang)}</p>
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
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">{t("mnemoTitle")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mnemos.map((m) => (
            <div key={m.code} className="bg-white border border-slate-200 rounded-xl p-4 card-tilt">
              <p className="font-mono text-brand-700 font-bold text-base">{m.code}</p>
              <p className="font-semibold text-slate-900 text-sm mt-1">{pickB(m.title, lang)}</p>
              <div className="prose-ludic text-slate-600 text-sm mt-1">
                <Markdown>{pickB(m.body, lang)}</Markdown>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">{t("numbersTitle")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {numbers.map((n, i) => (
            <div key={i} className="bg-white border-l-4 border-brand-500 px-4 py-2 rounded-r-xl shadow-sm">
              <p className="text-sm text-slate-600">{pickB(n.label, lang)}</p>
              <p className="font-bold text-slate-900">{n.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
