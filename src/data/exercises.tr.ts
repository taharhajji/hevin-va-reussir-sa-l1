import type { ExerciseSection } from "./exercises";

export const exerciseSectionsTr: ExerciseSection[] = [
  {
    slug: "va",
    title: "Katma değer",
    emoji: "🎯",
    intro:
      "KD = Üretim − Ara Tüketim'i hesapla.\n\n⚠️ Maaşlar, vergiler, dayanıklı makineler **CI DEĞİLDİR**.",
    formula: "KD = P - CI",
    exercises: [
      {
        id: "va-1",
        title: "Pur Jus",
        emoji: "🍊",
        category: "KD — sanayi",
        prompt:
          "1 milyon şişe 0,50 €'ya satıldı. CI: ambalaj 32 000 + meyve 76 000 + elektrik 7 000. Maaşlar: 120 000.\n\nKD'yi hesapla.",
        hint: "Üretim = miktar × fiyat. Maaşlar CI dışında.",
        steps: [
          "Üretim = 1 000 000 × 0,50 = **500 000 €**",
          "CI = 32 000 + 76 000 + 7 000 = **115 000 €** (maaşlar sayılmaz)",
          "KD = 500 000 − 115 000 = **385 000 €**",
        ],
        answer: "385 000 €",
      },
      {
        id: "va-2",
        title: "Fırıncı",
        emoji: "🥖",
        category: "KD — FBCF/maaş tuzağı",
        prompt:
          "Fırıncı 240 000 € ekmek sattı. Alımlar: 60 000 € un, 18 000 € elektrik, 10 000 € maya, 6 000 € ambalaj. Ödenen maaşlar: 75 000 €. Vergiler: 12 000 €. Fırın alımı: 30 000 € (8 yıl ömür).\n\nKD'yi hesapla.",
        hint: "Fırın (8 yıl) FBCF, CI değil. Maaşlar ve vergiler CI dışında.",
        steps: [
          "CI = un + elektrik + maya + ambalaj = 60 000 + 18 000 + 10 000 + 6 000 = **94 000 €**",
          "Maaşlar (75 000), vergiler (12 000), fırın (30 000 → FBCF) → hepsi **CI dışında**",
          "KD = 240 000 − 94 000 = **146 000 €**",
        ],
        answer: "146 000 €",
      },
      {
        id: "va-3",
        title: "Danışmanlık şirketi",
        emoji: "💼",
        category: "KD — hizmetler",
        prompt:
          "Danışmanlık şirketi. Faturalanan hizmet: 500 000 €. Kira: 60 000 €. Yazılım abonelikleri: 40 000 €. Maaşlar: 200 000 €.\n\nKD'yi hesapla.",
        hint: "Kira ve abonelikler dönem boyunca tüketilir → CI. Maaşlar dışında.",
        steps: [
          "CI = 60 000 + 40 000 = **100 000 €**",
          "Maaşlar CI dışında",
          "KD = 500 000 − 100 000 = **400 000 €**",
        ],
        answer: "400 000 €",
      },
    ],
  },
  {
    slug: "re",
    title: "Kaynak-Kullanım Dengesi",
    emoji: "🧩",
    intro:
      "Temel özdeşlik: **P + M = C + CI + FBCF + X**.\n\nKaynaklar (P + M) = Kullanımlar (C + CI + FBCF + X). Her zaman!",
    formula: "P + M = C + CI + FBCF + X",
    exercises: [
      {
        id: "re-1",
        title: "Voituristan",
        emoji: "🏎️",
        category: "Doğrulama + denge",
        prompt:
          "P = 1 800 ; M = 700 ; C = 1 650 ; CI = 200 ; FBCF = 400 ; X = 250.\n\n1) Dengeyi doğrula. 2) Dış ticaret dengesini hesapla. 3) İhracat ya da ithalatçı net?",
        steps: [
          "Kaynaklar = 1 800 + 700 = **2 500**",
          "Kullanımlar = 1 650 + 200 + 400 + 250 = **2 500** ✓",
          "Dış ticaret dengesi = X − M = 250 − 700 = **−450 → açık**",
          "GSYH = P − CI = 1 600. C + FBCF = 2 050. GSYH < C + FBCF → **net ithalatçı**",
        ],
        answer: "Denge OK. −450 açık. Net ithalatçı ülke.",
      },
      {
        id: "re-2",
        title: "X hesabı",
        emoji: "🔍",
        category: "Eksik değişken",
        prompt:
          "P = 2 000 ; M = 600 ; C = 1 700 ; CI = 250 ; FBCF = 450.\n\nX'i hesapla ve dış ticaret dengesini bul.",
        steps: [
          "P + M = C + CI + FBCF + X",
          "2 000 + 600 = 1 700 + 250 + 450 + X",
          "2 600 = 2 400 + X",
          "**X = 200**",
          "Denge = X − M = 200 − 600 = **−400 → açık**",
        ],
        answer: "X = 200. Denge = −400 → açık.",
      },
      {
        id: "re-3",
        title: "İhracat fazlası ülke",
        emoji: "📤",
        category: "FBCF hesabı",
        prompt:
          "P = 4 000 ; M = 800 ; C = 2 500 ; CI = 500 ; X = 1 200. FBCF ve dengeyi hesapla.",
        steps: [
          "4 000 + 800 = 2 500 + 500 + FBCF + 1 200",
          "4 800 = 4 200 + FBCF",
          "**FBCF = 600**",
          "Denge = X − M = 1 200 − 800 = **+400 → fazla**",
        ],
        answer: "FBCF = 600. Denge = +400 → fazla.",
      },
    ],
  },
  {
    slug: "deflater",
    title: "GSYH'yi enflasyondan arındırma",
    emoji: "📐",
    intro:
      "Nominal GSYH miktar VE enflasyon değişimini karıştırır. Reel GSYH enflasyonu ortadan kaldırır. \n\n**İpucu**: CM fiyat'a **böleriz**, çıkarmayız!",
    formula: "CM_{hacim} = \\frac{CM_{deger}}{CM_{fiyat}}",
    exercises: [
      {
        id: "def-1",
        title: "Basit reel büyüme",
        emoji: "📈",
        category: "Nominal vs reel GSYH",
        prompt:
          "Nominal GSYH 100 (N) → 110 (N+1). N ile N+1 arası enflasyon: %4.\n\nN+1'de reel GSYH ve reel büyüme oranını hesapla.",
        steps: [
          "$CM_{deger} = 110 / 100 = 1{,}10$",
          "$CM_{fiyat} = 1{,}04$",
          "$CM_{hacim} = 1{,}10 / 1{,}04 \\approx 1{,}0577$",
          "N+1 reel GSYH = 110 / 1,04 ≈ **105,77** (N fiyatlarıyla)",
          "Reel büyüme oranı ≈ **+%5,77** (nominal %10'a karşı)",
        ],
        answer: "Reel GSYH ≈ 105,77. Reel büyüme ≈ +%5,77.",
      },
      {
        id: "def-2",
        title: "Reel olarak negatif büyüme",
        emoji: "📉",
        category: "Gizli resesyon",
        prompt:
          "Nominal GSYH: 250 (N) → 260 (N+1). Enflasyon: %6.\n\nReel büyümeyi hesapla.",
        hint: "Enflasyon > nominal değişim ise, reel GSYH düşer!",
        steps: [
          "$CM_{deger} = 260 / 250 = 1{,}04$",
          "$CM_{fiyat} = 1{,}06$",
          "$CM_{hacim} = 1{,}04 / 1{,}06 \\approx 0{,}981$",
          "Reel TV ≈ **−%1,9** → nominal artışa rağmen **reel resesyon**.",
        ],
        answer: "Reel büyüme ≈ −%1,9 → resesyon.",
      },
      {
        id: "def-3",
        title: "2 yıllık ortalama büyüme",
        emoji: "🎯",
        category: "Geometrik",
        prompt:
          "GSYH 2 yılda 1,21 ile çarpılır. **Yıllık ortalama büyüme** nedir?",
        hint: "n yıl için, yıllık CM = (toplam CM)^(1/n). Aritmetik ortalama değil.",
        steps: [
          "$CM_{yillik} = \\sqrt{1{,}21} = 1{,}10$",
          "Yıllık TV = (1,10 − 1) × 100 = yılda **+%10**",
        ],
        answer: "Yılda +%10",
      },
    ],
  },
  {
    slug: "salaire",
    title: "Reel maaş ve alım gücü",
    emoji: "💰",
    intro:
      "**Nominal** maaş bordro üstündedir. **Reel** olan, enflasyona göre düzeltilmiştir.",
    formula:
      "\\text{Son reel maaş} = \\frac{\\text{Son nominal maaş}}{CM_{fiyat}}",
    exercises: [
      {
        id: "sal-1",
        title: "Alım gücü kaybı",
        emoji: "📉",
        category: "Nominal artış < enflasyon",
        prompt:
          "2021'de 2 500 €/ay maaş. 2022'de %2 nominal artış. Enflasyon %6.\n\n2022 reel maaşı hesapla.",
        steps: [
          "2022 nominal maaş = 2 500 × 1,02 = **2 550 €**",
          "2022 reel maaş = 2 550 / 1,06 ≈ **2 405 €**",
          "Reel TV ≈ −%3,8 → **alım gücü kaybı**",
        ],
        answer: "Reel maaş ≈ 2 405 € (kayıp ≈ −%3,8)",
      },
      {
        id: "sal-2",
        title: "Alım gücü kazancı",
        emoji: "📈",
        category: "Artış > enflasyon",
        prompt: "Maaş 1 800 €. %5 nominal artış, %2 enflasyon.\n\nReel maaşı hesapla.",
        steps: [
          "Reel maaş = 1 800 × (1,05 / 1,02) ≈ 1 800 × 1,0294 ≈ **1 853 €**",
          "Kazanç ≈ **+%2,9** alım gücü",
        ],
        answer: "≈ 1 853 €. Kazanç ≈ +%2,9.",
      },
      {
        id: "sal-3",
        title: "Mükemmel endeksleme",
        emoji: "⚖️",
        category: "İstikrar",
        prompt: "%4 nominal artış, %4 enflasyon. Alım gücü değişir mi?",
        steps: [
          "$CM_{reel} = 1{,}04 / 1{,}04 = 1$",
          "→ **Alım gücü değişmez**.",
          "Bu, maaşın enflasyona mükemmel endekslendiği durumdur.",
        ],
        answer: "Alım gücü değişmez.",
      },
    ],
  },
  {
    slug: "uc",
    title: "Yaşam standardı (UC)",
    emoji: "👨‍👩‍👧",
    intro:
      "Geliri toplam kişi sayısına bölmeyiz: bir hane ölçek ekonomisi yapar. INSEE/OECD ölçeği:",
    formula:
      "\\text{Yaşam standardı} = \\frac{\\text{Harcanabilir gelir}}{\\text{UC sayısı}}",
    exercises: [
      {
        id: "uc-1",
        title: "Çift + 2 çocuk",
        emoji: "🏠",
        category: "Standart UC",
        prompt:
          "Çift + 2 çocuk (8 ve 17 yaş). Gelir 50 000 €.\n\nUC başına yaşam standardını hesapla.",
        hint: "1. yetişkin = 1; ≥ 14 yaş diğer = 0,5; < 14 yaş çocuk = 0,3.",
        steps: [
          "UC = 1 (1. yetişkin) + 0,5 (2. yetişkin) + 0,5 (17 yaş ≥ 14) + 0,3 (8 yaş < 14) = **2,3**",
          "Yaşam standardı = 50 000 / 2,3 ≈ **21 739 €/UC**",
        ],
        answer: "≈ 21 739 €/UC",
      },
      {
        id: "uc-2",
        title: "Tek ebeveynli aile",
        emoji: "👩‍👧‍👦",
        category: "Küçük çocuklu UC",
        prompt:
          "1 yetişkin + 3 çocuk (4, 7, 12 yaş). Gelir 30 000 €.\n\nYaşam standardını hesapla.",
        steps: [
          "Tüm çocuklar 14 yaşın altında → her biri 0,3",
          "UC = 1 + 0,3 + 0,3 + 0,3 = **1,9**",
          "Yaşam standardı = 30 000 / 1,9 ≈ **15 789 €/UC**",
        ],
        answer: "≈ 15 789 €/UC",
      },
      {
        id: "uc-3",
        title: "Hane karşılaştırması",
        emoji: "⚖️",
        category: "Ters okuma",
        prompt:
          "A hanesi: 1 yetişkin, gelir 25 000 €. B hanesi: 2 yetişkin + 1 çocuk (10 yaş), gelir 50 000 €.\n\nHangisinin yaşam standardı daha iyi?",
        steps: [
          "A: UC = 1 → yaşam standardı = **25 000 €/UC**",
          "B: UC = 1 + 0,5 + 0,3 = 1,8 → yaşam standardı = 50 000 / 1,8 ≈ **27 778 €/UC**",
          "→ **B daha iyi yaşar**, 1 yerine 3 kişi olmasına rağmen.",
        ],
        answer: "B (27 778 €/UC vs 25 000 €/UC).",
      },
    ],
  },
  {
    slug: "multi",
    title: "Keynesyen çarpan",
    emoji: "✨",
    intro:
      "Çarpan başlangıç harcamasının etkisini büyütür.\n\n⚠️ Formülde **Pmc ondalık olarak** (0,8, %80 değil).",
    formula: "k = \\frac{1}{1 - Pmc} \\quad ; \\quad \\Delta Y = I \\times k",
    exercises: [
      {
        id: "mult-1",
        title: "Çarpan hesabı",
        emoji: "🔢",
        category: "Pmc → k",
        prompt: "Pmc = 0,8. k'yi hesapla.",
        steps: ["k = 1 / (1 − 0,8) = 1 / 0,2 = **5**"],
        answer: "k = 5",
      },
      {
        id: "mult-2",
        title: "Pms'den başlayarak",
        emoji: "🪙",
        category: "Pms → Pmc → k",
        prompt: "Pms = 0,3. Pmc ve k'yi hesapla.",
        steps: [
          "Pmc = 1 − 0,3 = **0,7**",
          "k = 1 / (1 − 0,7) = 1 / 0,3 ≈ **3,33**",
        ],
        answer: "Pmc = 0,7 ; k ≈ 3,33",
      },
      {
        id: "mult-3",
        title: "Kamu siparişi etkisi",
        emoji: "🏗️",
        category: "Dışlama etkisiyle",
        prompt:
          "Devlet 200 Md€ kamu işi sipariş eder. Pmc = 0,75.\n\n1) k'yi hesapla.\n2) GSYH üzerinde maks etki?\n3) Dışlama etkisi teorik etkiyi %60'a indirirse, gerçek etki nedir?",
        steps: [
          "k = 1 / (1 − 0,75) = 1 / 0,25 = **4**",
          "ΔY teorik = 200 × 4 = **800 Md€**",
          "Gerçek etki = 800 × 0,6 = **480 Md€**",
        ],
        answer: "k = 4 ; ΔY = 800 ; gerçek etki = 480 Md€",
      },
      {
        id: "mult-4",
        title: "Ters okuma",
        emoji: "🔄",
        category: "Pmc bul",
        prompt:
          "50 Md€ kamu siparişi 250 Md€ ek GSYH üretir. Pmc nedir?",
        steps: [
          "k = 250 / 50 = **5**",
          "1 / (1 − Pmc) = 5 → 1 − Pmc = 1/5 = 0,2 → **Pmc = 0,8**",
        ],
        answer: "Pmc = 0,8",
      },
    ],
  },
  {
    slug: "bale",
    title: "İhtiyatlı oran (Basel)",
    emoji: "🏦",
    intro:
      "Bankalar yükümlülüklerine (kredi) karşı bir özsermaye yastığı tutmak zorundadır.",
    formula: "\\frac{\\text{Özsermaye}}{\\text{Yükümlülük}} \\geq 8\\%",
    exercises: [
      {
        id: "bale-1",
        title: "Kredi kapasitesi",
        emoji: "💰",
        category: "Tavan hesabı",
        prompt: "Bir bankada 150 M€ özsermaye var. Kredi tavanı nedir?",
        steps: ["150 / 0,08 = **1 875 M€** (veya 150 × 12,5)"],
        answer: "1 875 M€",
      },
      {
        id: "bale-2",
        title: "Ters okuma",
        emoji: "🔄",
        category: "Özsermaye bul",
        prompt:
          "Bir bankanın 4 000 M€ kredisi var. Asgari ne kadar özsermayeye ihtiyacı var?",
        steps: ["Özsermaye = 4 000 × 0,08 = **320 M€**"],
        answer: "320 M€",
      },
      {
        id: "bale-3",
        title: "Para yaratma",
        emoji: "✨",
        category: "Para arzı net etkisi",
        prompt:
          "Hesabına 1 000 € yatırıyorsun. Banka başka bir müşteriye 5 000 € kredi veriyor. Para arzı üzerine net etki?",
        steps: [
          "1 000 € yatırma hiçbir şey yaratmaz: bir transferdir.",
          "5 000 € kredi **yoktan** 5 000 € kaydi para **yaratır**.",
          "Net etki: para arzında **+5 000 €**.",
          "Kredi geri ödendiğinde, para yok edilir.",
        ],
        answer: "+5 000 €",
      },
    ],
  },
];
