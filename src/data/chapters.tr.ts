import type { Chapter } from "./chapters";

export const chaptersTr: Chapter[] = [
  {
    slug: "ch1",
    number: 1,
    title: "Giriş: büyüme, enflasyon, işsizlik",
    emoji: "🌍",
    hook: "Manşetlere çıkan 3 gösterge.",
    color: "from-rose-400 to-orange-400",
    duration: "20 dk",
    intro:
      "Makroya hoş geldin! Burada bir **ülkenin tamamının ekonomisini**, tek bir büyük organizma gibi inceliyoruz. Üç hayati gösterge: **büyüme** (ülke daha çok mu üretiyor?), **enflasyon** (fiyatlar yükseliyor mu?), **işsizlik** (kaç kişi işsiz?).",
    sections: [
      {
        emoji: "🅼🅼",
        title: "Makro vs Mikro: otopark imgesi",
        body: "**Mikroekonomi** = bir sürücü en hızlı şekilde yer arıyor. **Makroekonomi** = neden tüm otoparkta saat 18'de tıkanıklık yaşanıyor?\n\nBireysel seçimlerin (mikro) toplamı **otomatik olarak** en iyi kolektif sonucu vermez (makro). İki disiplin de aynı temellere dayanır (arz, talep, kâr) ama **farklı modeller** kullanır.",
      },
      {
        emoji: "📈",
        title: "Büyüme: yaygın vs yoğun",
        body: "**Büyüme** = bir dönemde GSYH artışı. Yıllık % değişim olarak ölçülür.\n\n👉 **Yaygın (extensive)**: daha çok üretiriz çünkü **daha çok kaynak** kullanırız (daha fazla fabrika, daha fazla işçi, daha fazla hammadde). 1990-2010 Çin modeli. Sınır: tükenir.\n\n👉 **Yoğun (intensive)**: daha çok üretiriz çünkü **daha verimliyiz** (yenilik, eğitim, organizasyon). İskandinav modeli. Sınır: ciddi Ar-Ge yatırımı gerekir.\n\n⚠️ Büyüme < 0 → **resesyon**. Teknik resesyon = arka arkaya 2 çeyrek düşüş.",
      },
      {
        emoji: "💸",
        title: "Enflasyon: euro daha az değer ettiğinde",
        body: "**Enflasyon** = fiyatlarda **genel ve sürekli** artış (tek bir ürün değil!). Aynı zamanda paranın **alım gücünün düşmesi**: 50 €'yla, eskisinden daha az şey alırsın.\n\n**Ölçüm**: INSEE → temsili sepet üzerinden TÜFE.\n\n**4 nedeni (CDIM)**:\n- **C**oûts (maliyet — pahalı hammaddeler)\n- **D**emande (talep — insanlar üretilenden fazlasını ister)\n- **I**mportée (ithal — euro düşer → ithalat pahalanır)\n- **M**onétaire (parasal — dolaşımda çok para)\n\nAMB (BCE) hedefi = **%2**. Çok fazla enflasyon = zararlı. Yetersiz (deflasyon) = aynı şekilde kötü.",
      },
      {
        emoji: "👷",
        title: "İşsizlik: ILO'nun (BIT) 3 koşulu",
        body: "ILO anlamında işsiz olmak için **3 koşulu birlikte** karşılamalısın (mnemo SDR):\n1. **S**ans emploi (referans haftasında işsiz)\n2. **D**isponible (2 hafta içinde işe başlamaya hazır)\n3. **R**echerche active (son 4 haftada aktif arama)\n\n**Tam istihdam = işsizlik < %4**.\n\n**Halo** = çalışmak isteyen ama 3 koşulu karşılamayan kişiler (Fransa'da ≈ 3 milyon, ILO işsizlerine ek olarak 2,3 M).",
      },
      {
        emoji: "🌳",
        title: "Büyüme vs sürdürülebilir kalkınma",
        body: "Büyüme **negatif dışsallıklar** üretir (kirlilik, kaynak tükenmesi); piyasa bunları kendi başına ödemez.\n\n**Karbon ayak izini azaltmak için 3 araç (QTR)**:\n- **Q**uotas (kotalar): değişim yapılabilen kirletme hakları (dünya emisyonlarının yalnızca ~%12'sini kapsar).\n- **T**axation (vergilendirme): karbon vergisi (sarı yelekliler ↔ yer değiştirme = kırılgan denge).\n- **R**églementation (düzenleme): normlar, yasaklar.\n\n**2 görüş**:\n- *Zayıf sürdürülebilirlik* (neoliberal): teknolojik ilerleme her şeyi kurtarır.\n- *Güçlü sürdürülebilirlik* (ekolojik): doğal sermaye **yeri doldurulamaz**.",
      },
    ],
    keyPoints: [
      "Tam istihdam = işsizlik < %4",
      "AMB enflasyon hedefi = %2",
      "İşsiz olmak için ILO 3 koşulu (SDR) birlikte gerekir",
      "Enflasyonun 4 nedeni: Maliyet, Talep, İthal, Parasal (CDIM)",
      "Yaygın büyüme = miktarlar; yoğun = verimlilik",
      "Kişi başı GSYH (SAGP) = ülke karşılaştırmaları için en iyi gösterge",
    ],
    pieges: [
      "Enflasyon ≠ tek bir ürünün fiyat artışı (genel + sürekli olmalı)",
      "Halo ≠ işsizlik: çalışmak isteyen ama 3 ILO koşulunu karşılamayanlar",
      "Deflasyon, güçlü enflasyon kadar zararlıdır",
      "Teknik resesyon = arka arkaya 2 çeyrek düşüş (1 değil)",
    ],
  },
  {
    slug: "ch2",
    number: 2,
    title: "Ulusal muhasebe ve GSYH",
    emoji: "📊",
    hook: "Bir ülkenin zenginliği nasıl ölçülür.",
    color: "from-blue-400 to-cyan-400",
    duration: "30 dk",
    intro:
      "**Ulusal muhasebe (CN)** bir ülkenin büyük hesap çizelgesidir. Tüm aktörleri **6 sektöre** ayırır ve tüm akışları izler. Yıldız bileşeni: **GSYH**, **3 farklı yöntemle** hesaplanabilir (ve hepsi aynı sonucu verir, yapısal olarak).",
    sections: [
      {
        emoji: "🏛️",
        title: "6 kurumsal sektör",
        body: "Tüm yerleşik ekonomik aktörler **6 kategoriye** sınıflandırılır (ezberlenmesi gerekir):\n\n| # | Sektör | Örnek |\n|---|---|---|\n| 1 | **Hanehalkı** | Sen, ailen |\n| 2 | **SNF** (Mali olmayan şirketler) | Carrefour, Renault |\n| 3 | **SF** (Mali şirketler) | BNP Paribas, AXA |\n| 4 | **APU** (Kamu yönetimleri) | Devlet, sosyal güvenlik, belediye |\n| 5 | **ISBLSM** | Kızılhaç, mahalle derneği |\n| 6 | **Dış dünya** | Tüm yerleşik olmayanlar |\n\n💡 *İpucu*: bir aktör ülkede **1 yıldan fazla yerleşikse**, milliyetinden bağımsız ilk 5'e dahildir.",
      },
      {
        emoji: "🎯",
        title: "Katma Değer: temel kavram",
        body: "$$ \\boxed{KD = P - CI} $$\n\n**Üretim (P)** = aktörün sattığı.\n**Ara tüketimler (CI)** = üretimde **tahrip ettiği veya dönüştürdüğü**: hammadde, enerji, satın alınan hizmetler.\n\n⚠️ **Maaşlar, vergiler ve dayanıklı makineler (FBCF) CI değildir.**\n\nKD 3 yararlanıcı arasında paylaşılır (mnemo SEE):\n- **S**alariés (çalışanlar — brüt maaş)\n- **E**tat (devlet — sosyal primler + üretim vergileri)\n- **E**ntreprise (işletme — EBE = kâr)\n\n**GSYH = yerleşiklerin KD'lerinin toplamı.**",
      },
      {
        emoji: "🧩",
        title: "Kaynak-Kullanım Dengesi",
        body: "**Hafızana kazınması gereken** temel özdeşlik:\n\n$$ \\boxed{P + M = C + CI + FBCF + X} $$\n\n- **Kaynaklar** = giren: yerleşik üretim + ithalat.\n- **Kullanımlar** = çıkan: nihai tüketim + ara tüketim + yatırım + ihracat.\n\nGSYH'yi öne çıkararak (GSYH = P − CI):\n\n$$ \\boxed{GSYH = C + FBCF + (X - M)} $$\n\n**(X − M)** terimi = **dış ticaret dengesi**. Pozitif = fazla, negatif = açık.",
      },
      {
        emoji: "🔢",
        title: "GSYH'nin 3 yolu",
        body: "**Üretim yaklaşımı**: GSYH = Σ yerleşiklerin KD'leri → *zenginlik nereden gelir?*\n\n**Harcama yaklaşımı**: GSYH = C + FBCF + (X − M) → *nasıl kullanılır?*\n\n**Gelir yaklaşımı**: GSYH = Maaşlar + EBE + Karma gelirler + Üretim/ithalat vergileri − Sübvansiyonlar → *kim yararlanır?*\n\nÜçü de muhasebesel olarak **aynı sonucu** verir.",
      },
      {
        emoji: "📐",
        title: "GSYH'yi enflasyondan arındırma: nominal vs reel",
        body: "**Nominal GSYH (değer)**: cari fiyatlar → miktar VE enflasyon değişimini karıştırır.\n**Reel GSYH (hacim)**: bir referans yılının sabit fiyatları → enflasyon etkisi nötr.\n\n3 çarpan katsayısı yöntemi:\n\n$$ CM_d = \\frac{\\text{son nominal GSYH}}{\\text{başlangıç nominal GSYH}} \\quad CM_p = \\frac{\\text{son fiyat}}{\\text{başlangıç fiyatı}} $$\n\n$$ \\boxed{CM_{hacim} = \\frac{CM_d}{CM_p}} $$\n\n💡 *İpucu*: **reel** büyüme = nominal büyümeyi enflasyona **böleriz**, çıkarmayız.",
      },
      {
        emoji: "👨‍👩‍👧",
        title: "FBCF: yatırım nedir?",
        body: "**FBCF** = Brüt Sabit Sermaye Oluşumu = **dayanıklı** varlıklara (>1 yıl) toplam yatırım miktarı.\n\n- **Şirketler ve kamu**: makine, bina, patent, yazılım.\n- **Hanehalkı**: ⚠️ **sadece konut**! Yeni araba almak = nihai tüketim, FBCF değil.\n\n**Şirket yatırım oranı (Fransa)** = FBCF / KD ≈ **%21,1**.\n**Hanehalkı yatırım oranı** = FBCF / Brüt Harcanabilir Gelir ≈ **%8,2**.",
      },
    ],
    keyPoints: [
      "6 kurumsal sektör: Hanehalkı, SNF, SF, APU, ISBLSM, Dış dünya",
      "KD = P − CI (maaş ve vergi dahil değil!)",
      "K-K Dengesi: P + M = C + CI + FBCF + X",
      "GSYH = C + FBCF + (X − M)",
      "GSYH'nin 3 yolu: üretim, harcama, gelir",
      "CM hacim = CM değer / CM fiyat",
    ],
    pieges: [
      "Maaşlar, vergiler, dayanıklı makineler ≠ ara tüketim",
      "Hanehalkı için FBCF = sadece konut (yeni araba = nihai tüketim)",
      "Piyasa dışı üretim ≠ bedava: vergilerle finanse edilir",
      "Nominal'den reel'e geçmek için CM fiyat'a BÖLERİZ (çıkarmayız)",
    ],
  },
  {
    slug: "ch3",
    number: 3,
    title: "Gelir, tüketim, çarpan",
    emoji: "💶",
    hook: "Ekonomide para nasıl dolaşır.",
    color: "from-emerald-400 to-teal-500",
    duration: "35 dk",
    intro:
      "**Gelir** katma değerden çıkar ve 2 aşamada yeniden dağıtılır. Hanehalkı bunu (kısmen) **tüketir** ve gerisini **biriktirir**. Keynes sihirli bir şey keşfetti: yatırılan 1 €, **çarpan** sayesinde birkaç € GSYH üretebilir.",
    sections: [
      {
        emoji: "🔁",
        title: "Birincil vs ikincil gelir",
        body: "**Birincil gelir** = üretime katılarak kazandığın: maaş, kâr, faiz, temettü, kira.\n\n**İkincil gelir** = yeniden dağıtım ile **değiştirilen** birincil gelir:\n1. Senden kesinti yapılır (primler, vergiler).\n2. Yardım ödemeleri verilir (asgari gelir, emeklilik, yardımlar).\n\n**2 mantık**:\n- *Yatay* (sigorta): prim ödersin, sorun olduğunda alırsın. Gelir kriteri yok (işsizlik, emeklilik, hastalık).\n- *Dikey* (yardım): **gelir koşuluna bağlı** olarak alırsın (RSA, APL).\n\n💡 **Net maaş** = brüt − çalışan primleri. **Gelir vergisi DAHA SONRA gelir**.",
      },
      {
        emoji: "🧮",
        title: "Alım gücü: gerçek hissiyat",
        body: "**Nominal maaş** maaş bordrosunda yazandır. Ama önemli olan **reel maaş** (enflasyona göre düzeltilmiş).\n\n$$ \\boxed{\\text{Son reel maaş} = \\frac{\\text{Son nominal maaş}}{CM_{fiyat}}} $$\n\n**Örnek**: 2021'de 2 500 €, %2 artış, %6 enflasyon.\n- 2022 maaşı = 2 500 × 1,02 = 2 550 €\n- 2022 reel maaş = 2 550 / 1,06 ≈ **2 405 €** → **alım gücü kaybı**.",
      },
      {
        emoji: "🛒",
        title: "Keynes'in psikolojik yasası",
        body: '> "İnsanlar gelirleri arttıkça tüketimlerini artırma eğilimindedir, ama gelir artışı kadar değil." — Keynes, 1936.\n\n**3 ana fikir**:\n1. Tüketim **cari gelire** bağlıdır.\n2. ↑ gelir → ↑ tüketim.\n3. **Tüketim artışı < gelir artışı**.\n\nYani: ne kadar çok kazanırsan, değer olarak o kadar çok tüketirsin, ama gelirinin yüzdesi olarak o kadar çok biriktirirsin.\n\n💡 Bu yüzden bir canlandırma politikası **düşük gelirliler** için daha etkilidir (neredeyse hepsini tüketir), yüksek gelirliler için değil (büyük kısmını biriktirir).',
      },
      {
        emoji: "📐",
        title: "Tüketim/tasarruf eğilimleri",
        body: "**Ortalama Tüketim Eğilimi (PMC)** = tüketilen toplam gelir payı:\n$$ PMC = \\frac{C}{Y} \\times 100 $$\n\n**Marjinal Tüketim Eğilimi (Pmc)** = tüketilen her **ek** € payı:\n$$ Pmc = \\frac{\\Delta C}{\\Delta Y} \\times 100 $$\n\nTasarruf için aynı mantık (PMS, Pms).\n\n**Altın kural**: PMC + PMS = %100, ve Pmc + Pms = %100.",
      },
      {
        emoji: "✨",
        title: "Keynesyen çarpan",
        body: "Merkez kavram:\n\n$$ \\boxed{k = \\frac{1}{1 - Pmc}} \\qquad \\Delta Y = I \\times k $$\n\n**Fikir**: Devlet 100 € harcar. Alıcı 100 € alır, bir kısmını (Pmc) tüketir, bu başka birinin geliri olur, vs. Sonsuza kadar bu, başlangıç harcamasının k katı eder.\n\n**Örnek**: Pmc = 0,8 → k = 1/(1 − 0,8) = **5**. 100 M€'luk kamu siparişi kümülatif olarak **500 M€** GSYH üretir.\n\n⚠️ Formülde **Pmc ondalık (0,8 olarak, %80 değil)**.\n\n**Çarpanın 4 sınırı**:\n- Faiz oranlarıyla dışlama etkisi\n- İthalatla dışlama etkisi\n- Beklenen borç yükü → tasarruf\n- Tam istihdam → üretim yerine enflasyon",
      },
      {
        emoji: "🏗️",
        title: "Yatırım: 4 belirleyici (DREP)",
        body: "Bir şirket neden yatırım yapar?\n\n1. **D**emande (talep — gerçek ve eğer sermaye katsayısı yüksekse hızlanma etkisi)\n2. **R**entabilité (beklenen kârlılık — kazanç > maliyet?)\n3. P**R**ix relatif (faktörlerin göreli fiyatı — sermaye pahalı / emek pahalı → ikame)\n4. **F**inancement (finansman — iç = dağıtılmamış kâr; dış = kredi, tahvil)\n\n**3 yatırım mantığı**:\n- *Yenileme*: aşınma / eskime telafisi.\n- *Kapasite*: daha çok üretmek.\n- *Verimlilik / rasyonalizasyon*: **daha azıyla aynı miktarı** üretmek.",
      },
      {
        emoji: "📏",
        title: "Yaşam standardı ve UC",
        body: "Geliri toplam kişi sayısına bölmeyiz: 2 yetişkinlik bir ev, tek yetişkininkinin 2 katı harcamaz (ölçek ekonomileri).\n\n**Tüketim Birimleri (UC)**:\n- 1. yetişkin = **1**\n- ≥ 14 yaş diğer kişi = **0,5**\n- < 14 yaş çocuk = **0,3**\n\n$$ \\text{Yaşam standardı} = \\frac{\\text{Harcanabilir gelir}}{\\text{UC sayısı}} $$\n\n**Örnek**: 2 yetişkin + 8 yaş 1 çocuk, 50 000 €. UC = 1 + 0,5 + 0,3 = 1,8 → yaşam standardı = 50 000 / 1,8 ≈ **27 778 €/UC**.",
      },
    ],
    keyPoints: [
      "PMC + PMS = %100 | Pmc + Pms = %100",
      "k = 1 / (1 − Pmc) — Pmc ondalık olarak!",
      "ΔY = I × k",
      "4 belirleyici: Talep, Kârlılık, göreli Fiyat, Finansman",
      "UC: 1 / 0,5 / 0,3",
      "Net maaş = brüt − çalışan primleri (vergiden önce)",
    ],
    pieges: [
      "Çarpan iki yönlü çalışır: ↓ I → büyütülmüş ↓ GSYH",
      "Verimlilik ≠ rekabet gücü",
      "Yaşam standardı = gelir / UC, kişi sayısı değil",
      "Hanehalkı için FBCF = konut (CH2 hatırlat)",
    ],
  },
  {
    slug: "ch4",
    number: 4,
    title: "Ekonominin finansmanı",
    emoji: "🏦",
    hook: "Bankalar, piyasalar ve 2008 krizi.",
    color: "from-violet-400 to-purple-500",
    duration: "30 dk",
    intro:
      "Paraya ihtiyacı olan aktörler (şirketler, devlet) bunu nasıl elde eder? İki devre: **bankalar aracılığıyla** (dolaylı) veya **piyasalar aracılığıyla** (doğrudan). 1980'lerin reformları ekonomiyi piyasalara çevirdi — yararlarıyla, ama riskleriyle de (2008 subprime).",
    sections: [
      {
        emoji: "🔀",
        title: "2 finansman devresi",
        body: "**Dolaylı devre (aracılı)**: bankana 100 € yatırırsın, banka komşuya borç verir. Kime gittiğini bilmezsin. **Avrupa'da** baskın model.\n\n**Doğrudan devre (aracısız)**: bir şirket tarafından çıkarılan bir tahvil/hisse senedini doğrudan satın alırsın. Paranın nereye gittiğini bilirsin. **ABD'de** baskın model.\n\n| Kriter | Dolaylı | Doğrudan |\n|---|---|---|\n| Aracı | Ticari banka | Mali piyasalar |\n| Alıcıyı tanıyor musun? | Hayır | Evet |\n| Tip | Bilanço aracılığı | Piyasa aracılığı |",
      },
      {
        emoji: "📜",
        title: "Hisse senedi vs Tahvil",
        body: "**Hisse senedi (Action) = MÜLKİYET hakkı**:\n- Şirketin **ortağı** olursun.\n- **Temettü** alırsın (kâr payı).\n- Genel kurulda oy kullanırsın.\n- Geri ödeme yok: şirket var oldukça hisse senedin var.\n\n**Tahvil (Obligation) = ALACAK hakkı**:\n- Şirkete/devlete **borç verirsin**.\n- **Faiz** alırsın (önceden anlaşılmış oran).\n- Vade sonunda **geri öder**.\n- Maks süre: 30 yıl.\n\n💡 *Mnemo*: **A**ction = **A**ssocié (ortak) | **O**bligation = **O**n te doit (sana borçludur).",
      },
      {
        emoji: "🆕🔄",
        title: "Birincil vs ikincil piyasa",
        body: "**Birincil piyasa = YENİ**: yeni bir tahvilin/hissenin çıkarılması. Para doğrudan ihraç edene gider.\n\n**İkincil piyasa = İKİNCİ EL**: yatırımcılar arasında satış. İhraç eden hiçbir şey almaz. Fiyat **borsa kotasyonu** olur, arz/talep tarafından belirlenir.\n\n💡 **Spekülasyon** = ikincil piyasada satın aldığından daha pahalıya satmak.",
      },
      {
        emoji: "🇫🇷",
        title: "Bourguinat'nın 3D'si (1987)",
        body: "80'lerin mali reformları **3 fikre** dayanır (3D):\n\n1. **D**écloisonnement (sınır kaldırma): bankalar ve mali piyasalar arasında sermaye serbest dolaşımı.\n2. **D**éréglementation (kuralsızlaştırma): banka fiyat ve hizmetlerinde kontrollerin kaldırılması.\n3. **D**ésintermédiation (aracısızlaştırma): şirketlerin tahvil yoluyla doğrudan finansmana erişimi (bankaları atlayarak).\n\nBazen eklenen 4. D: **D**ématérialisation (dijitalleşme — piyasaların sayısallaştırılması).\n\n💡 Fransa'da, **1984 banka yasası** → **evrensel banka** (aynı kurum mevduat, kredi, piyasa yapar).",
      },
      {
        emoji: "📉",
        title: "2008 subprime krizi",
        body: "4 aşamada kronoloji:\n\n1. **2002-2007**: ABD'de düşük faizler, hanehalkı borçlanır (bazıları ödeme gücü olmayan = subprime), gayrimenkul balonu.\n2. **2007**: FED faizleri %5'e çıkarır → taksitler patlar → zincirleme iflaslar.\n3. **Yayılma**: alacaklar **menkul kıymetleştirilmişti** (alınıp satılabilir mali tahvillere dönüştürülmüş). Tüm dünya bankalarında vardı → **bulaşma**.\n4. **Eylül 2008**: **Lehman Brothers**'ın iflası → küresel kriz.\n\n**Yanıt**: bankaların kurtarılması, canlandırma planları, ihtiyatlı kuralların sıkılaştırılması (**Basel III**).\n\n⚠️ Menkul kıymetleştirme **neden** değil, **yayılma vektörü**.",
      },
      {
        emoji: "⭐",
        title: "Derecelendirme kuruluşları",
        body: "**3 büyük kuruluş**: **S**tandard & Poor's, **M**oody's, **F**itch (mnemo SMF).\n\n**Ödeme yeteneğini** (geri ödeme kapasitesi) değerlendirirler.\n\n**S&P ölçeği**: AAA > AA > A > BBB > BB > B > CCC > CC > D\n- AAA: maksimum sağlamlık\n- BBB: tatmin edici\n- CCC: ciddi risk\n- D: ödeme yapamama\n\n💡 Not ne kadar düşükse, talep edilen faiz oranı o kadar yüksek.\n\n**Eleştiri**: çıkar çatışmaları (kuruluşlar ihraç edenler tarafından ödenir!) ve 2008'de büyük hatalar.",
      },
    ],
    keyPoints: [
      "2 devre: dolaylı (banka, Avrupa) vs doğrudan (piyasa, ABD)",
      "Hisse = mülkiyet + temettü; Tahvil = alacak + faiz",
      "Birincil piyasa = yeni; ikincil = ikinci el",
      "Bourguinat 3D'si: Décloisonnement, Déréglementation, Désintermédiation",
      "1984 banka yasası: Fransa'da evrensel banka",
      "Basel oranı: özsermaye / yükümlülükler ≥ %8",
    ],
    pieges: [
      "Hisse (sahibi) ≠ Tahvil (alacaklı)",
      "Tahvil sahibi şirketin sahibi DEĞİLDİR",
      "3D Bourguinat'a (1987) aittir, Hicks'e değil (Hicks = borçlanma vs piyasa)",
      "Menkul kıymetleştirme yayılma vektörüdür, 2008'in nedeni değil",
    ],
  },
  {
    slug: "ch5",
    number: 5,
    title: "Para ve merkez bankaları",
    emoji: "🪙",
    hook: "Parayı kim yaratır — ve nasıl kontrol edilir.",
    color: "from-amber-400 to-yellow-500",
    duration: "25 dk",
    intro:
      "Paranın 4 işlevi vardır. 2 biçimde bulunur: **fiduciary/itibari** (madeni para ve banknotlar, < %10) ve **kaydi** (banka mevduatları, > %90). Sürpriz: kaydi parayı esas olarak **ticari bankalar** kredi vererek yaratır — merkez bankası değil!",
    sections: [
      {
        emoji: "🎯",
        title: "Paranın 4 işlevi",
        body: "Para olmadan, çalışma zamanını ekmeğe takas etmek zorunda kalırdın… Fırıncının senin hizmetini istemesi gerekirdi. Takas sistemi = çok kırılgan.\n\n**4 işlev** (mnemo 4E):\n1. **E**change (değişim): işlemleri kolaylaştırmak.\n2. **E**xpression du prix (fiyat ifadesi — hesap birimi).\n3. **E**pargne (tasarruf — zaman içinde değer saklama).\n4. **E**conomie (ekonomi — faaliyeti finanse etmek).\n\nSimgesel işlev de var: para devletin **egemenlik** işaretidir (figürler, dil).",
      },
      {
        emoji: "💵",
        title: "İtibari vs Kaydi",
        body: "**İtibari para** = madeni para (Monnaie de Paris) + banknotlar (Banque de France). Latince *fides* = güven. Yazılı değerinin üretim maliyetiyle ilgisi yok. Fransa'da para arzının **< %10**'u.\n\n**Kaydi para** = banka hesaplarındaki kayıtlar. Çek, kart, transfer, mobil ödemeyle hareket eder. **> %90**.\n\n💡 Cari hesabında 1 000 € varsa, bu **kaydi para**dır — bir kasada kâğıt değil.",
      },
      {
        emoji: "✨",
        title: "Para yaratma (yoktan)",
        body: "Tuhaf bir şey göreceksin:\n\n👉 Bir daire almak için bankandan 200 000 € borç aldığında, **banka bu parayı bir yerde tutmaz**. Bu 200 000 €'yu **yoktan** (ex nihilo) **yaratır**: hesabında kaydi para olarak ortaya çıkarlar. Para arzı artar.\n\n👉 Geri ödediğinde, para **yok edilir**: para arzından kaybolur.\n\n**Genel olarak**, para arzı yaratımlar (yeni krediler) ve yıkımlar (geri ödemeler) arasındaki **denge**ye göre evrilir.\n\n⚠️ **Bu yaratımın 2 sınırı**:\n1. **İhtiyatlı düzenleme (Basel)**: özsermaye / yükümlülükler ≥ **%8**.\n2. Merkez bankasının **para politikası**.",
      },
      {
        emoji: "🏛️",
        title: "AMB'nin 3 işlevi",
        body: "**AMB** (BCE — Avrupa Merkez Bankası) avro bölgesini yönetir (20 ülke).\n\n**3 işlev** (mnemo PRS):\n1. **P**olitique monétaire (para politikası): para miktarını kontrol eder. Ana araç: **politika faizi**.\n2. **R**églementation bancaire (bankacılık düzenlemesi): ihtiyatlı kurallar, kripto/fintech denetimi.\n3. **S**upervision financière (mali denetim): sigortaları, emeklilik fonlarını, iklim/siber riskleri denetler.\n\n**Merkez misyon**: euro'nun **alım gücünü** korumak → **%2 enflasyon hedefi**.",
      },
      {
        emoji: "🎚️",
        title: "Politika faizi: geleneksel araç",
        body: "Bir ticari bankanın nakde ihtiyacı olduğunda merkez bankasından **yeniden finansman** sağlar. **Politika faizi** ödediği faiz oranıdır.\n\n👉 AMB ↑ politika faizi → bankalar ↑ kredi faizi → daha az kredi verilir → daha az talep → ↓ enflasyon. 2022-2023'te gördük.\n\n👉 AMB ↓ politika faizi → tersi → faaliyeti canlandırma.\n\n⚠️ Politika faizi **senin** bankana ödediğin faiz **değil**dir. Toptan faizdir; bankan kendi marjını ekler.",
      },
      {
        emoji: "💉",
        title: "Niceliksel Genişleme: geleneksel olmayan araç",
        body: "**Sorun**: politika faizi zaten %0 olduğunda ve düşürmek için marj kalmadığında ne yapılır? Yeni araçlar icat ederiz.\n\n**Niceliksel Genişleme (QE)**: merkez bankası **mali tahvilleri** (bono) bankalardan **kitlesel olarak satın alır**. Sonuç: bankaların daha çok likiditesi olur → daha çok borç verirler → ekonomi yeniden başlar.\n\nAvro bölgesinde kullanıldı: ülke borç krizi, deflasyon riski, Covid-19.",
      },
      {
        emoji: "₿",
        title: "Kripto: para mı değil mi?",
        body: "**Bitcoin** = kripto değerlemesinin %60'ı. 21 M'la sınırlı arz, merkezsiz, bankasız doğrudan transferler. Ancak:\n\n**Gerçek paranın 3 kriteri** (hatırlatma):\n1. Cari **D**eğişim aracı ❌ (günlük alışveriş için kullanılmaz)\n2. **H**esap birimi ❌ (fiyatları onunla karşılaştırmak imkansız)\n3. **S**aklama değeri ❌ (büyük volatilite)\n\n→ Bitcoin ekonomik anlamda bir para **değil**dir.\n\n**Riskler**: volatilite, balon, hack, kara para aklama.\n\n**Stablecoin'ler**: USD/EUR'a **bağlı** kripto → daha az volatil, ama devletleri endişelendirir (egemen paraya rekabet).\n\n**MNBC**: Merkez Bankası Dijital Parası = projedeki dijital euro, nakde tamamlayıcı.",
      },
    ],
    keyPoints: [
      "Paranın 4 işlevi: Değişim, Fiyat ifadesi, Tasarruf, Ekonomi",
      "İtibari < %10 | Kaydi > %90",
      "Para yaratma = yoktan, ticari bankalar tarafından",
      "2 sınır: Basel (%8) + Merkez bankası para politikası",
      "AMB hedefi: %2 enflasyon",
      "QE = tahvil alımı = 2008 sonrası geleneksel olmayan araç",
    ],
    pieges: [
      "Para yaratma ticari bankalardan gelir, MB'den değil",
      "Politika faizi ≠ bankana ödediğin faiz",
      "Bitcoin ≠ ekonomik anlamda para (3 kriter karşılanmıyor)",
      "QE geleneksel olmayan, 2008 sonrası",
    ],
  },
];
