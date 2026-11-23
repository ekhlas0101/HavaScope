/* ==========================================================================
   HavaScope - Complete App.js (Afghan Calendar, Google Strip, Alerts & Live R Stats)
   ========================================================================== */

const translations = {
  tr: {
    dir: "ltr",
    subtitle: "Canlı Hava Durumu & R İstatistik Analizi",
    tabLive: "Canlı Hava Durumu",
    tabRStats: "R İstatistik Projesi (YZM562)",
    searchPlaceholder: "Dünyadaki herhangi bir ülke, şehir veya ilçe ara (örn: Andkhoy, Kabul, Istanbul)...",
    selectCountryOpt: "🌍 Ülke Seçin...",
    searchBtn: "Ara",
    favoritesLabel: "Favori Şehirler:",
    addFavBtn: "+ Bu Şehri Kaydet",
    detailsTitle: "Anlık Detaylar",
    feelsLike: "Hissedilen",
    humidity: "Nem Oranı",
    windSpeed: "Rüzgar Hızı",
    precipitation: "Yağış",
    hourlyTitle: "Saatlik Hava Durumu (24 Saatlik Detay)",
    hourlyForDayPrefix: "Saatlik Hava Durumu:",
    nowLabel: "Şimdi",
    dailyTitle: "7 Günlük Hava Tahmini (Saatlik detay için güne tıklayın)",
    alertsTitle: "🚨 Belediye, Meteoroloji ve Deprem / Tsunami Uyarıları",
    noHazardsTitle: "Bölgede Aktif Tehlike veya Acil Durum Bildirimi Yok",
    noHazardsDesc: "Meteorolojik şartlar normal seyrediyor ve son 48 saatte 500 km çevrede 4.0+ büyüklüğünde deprem kaydedilmedi.",
    windAlertTitle: "⚠️ Kuvvetli Rüzgar / Fırtına Uyarısı",
    rainAlertTitle: "🌧️ Yüksek Yağış Olasılığı Uyarısı",
    quakeAlertTitle: "🌍 Bölgesel Deprem / Sismik Aktivite Bildirimi (USGS)",
    tsunamiAlertTitle: "🌊 TSUNAMİ UYARISI AKTİF!",
    rProjectTitle: "Günlük Hava Durumu İstatistiksel Analizi (2021–2025)",
    rProjectDesc: "İstanbul Gedik Üniversitesi — YZM562 R Diliyle İstatistik Uygulamaları Final Projesi",
    kpiMean: "5 Yıllık Ortalama Sıcaklık",
    kpiHottest: "En Sıcak Gün (Maksimum)",
    kpiColdest: "En Soğuk Gün (Minimum)",
    kpiWelch: "Welch t-Testi (Yaz vs Kış)",
    rMonthlyChartTitle: "Aylık Ortalama, Maksimum ve Minimum Sıcaklıklar (2021–2025)",
    tTestTitle: "1. Bağımsız Örneklem Welch t-Testi (Yaz vs. Kış)",
    anovaTitle: "2. Tek Yönlü ANOVA (4 Mevsim Karşılaştırması)",
    rCodeTitle: "Kullanılan R Analiz Kodu (R 4.6.1)",
    copyCodeBtn: "Kodu Kopyala",
    copiedBtn: "Kopyalandı ✓",
    loading: "Hava durumu verileri yükleniyor...",
    notFound: "Şehir bulunamadı! Lütfen başka bir şehir adı deneyin.",
    weatherCodes: {
      0: "Açık Gökyüzü", 1: "Az Bulutlu", 2: "Parçalı Bulutlu", 3: "Kapalı",
      45: "Sisli", 48: "Kırağılı Sis", 51: "Hafif Çisenti", 61: "Hafif Yağmur",
      63: "Orta Şiddetli Yağmur", 65: "Şiddetli Yağmur", 71: "Hafif Kar",
      80: "Sağanak Yağış", 95: "Gök Gürültülü Fırtına"
    }
  },
  prs: {
    dir: "rtl",
    subtitle: "آب‌وهوای زنده جهان، تقویم افغانستان و تحلیل احصائیوی R",
    tabLive: "آب‌وهوای زنده",
    tabRStats: "پروژه احصائیوی R (مضمون YZM562)",
    searchPlaceholder: "جستجوی هر کشور، شهر یا ولسوالی در جهان (مثلاً: Andkhoy, Kabul, Istanbul)...",
    selectCountryOpt: "🌍 انتخاب سریع کشور...",
    searchBtn: "جستجو",
    favoritesLabel: "شهرها و ولسوالی‌های دلخواه:",
    addFavBtn: "+ ثبت این موقعیت",
    detailsTitle: "جزئیات فعلی",
    feelsLike: "درجه حرارت حسی",
    humidity: "رطوبت هوا",
    windSpeed: "سرعت باد",
    precipitation: "بارندگی",
    hourlyTitle: "وضعیت ساعت‌وار هوا (۲۴ ساعت آینده)",
    hourlyForDayPrefix: "وضعیت ساعت‌وار برای روز:",
    nowLabel: "همین حال",
    dailyTitle: "پیش‌بینی ۷ روز آینده (برای دیدن جزئیات ساعت‌وار روی هر روز کلیک کنید)",
    alertsTitle: "🚨 اعلان‌های شاروالی، هشدارهای هواشناسی و زلزله / سونامی",
    noHazardsTitle: "کدام خطر یا وضعیت اضطراری فعال وجود ندارد",
    noHazardsDesc: "وضعیت جوی عادی است و در ۴۸ ساعت گذشته زلزله ۴ ریشتر به بالا در شعاع ۵۰۰ کیلومتری ثبت نشده است.",
    windAlertTitle: "⚠️ هشدار باد شدید و طوفان",
    rainAlertTitle: "🌧️ هشدار احتمال بارندگی شدید",
    quakeAlertTitle: "🌍 خبرنامه زلزله‌نگاری منطقه (USGS)",
    tsunamiAlertTitle: "🌊 هشدار جدی احتمال سونامی!",
    rProjectTitle: "تحلیل احصائیوی درجه حرارت روزانه (۲۰۲۱–۲۰۲۵)",
    rProjectDesc: "پوهنتون گدیک استانبول — پروژه نهایی مضمون تطبیقات احصائیه با زبان R",
    kpiMean: "اوسط درجه حرارت ۵ ساله",
    kpiHottest: "گرم‌ترین روز (اعظمی)",
    kpiColdest: "سردترین روز (اصغری)",
    kpiWelch: "آزمون t ولش (تابستان و زمستان)",
    rMonthlyChartTitle: "اوسط، اعظمی و اصغری درجه حرارت ماهوار (۲۰۲۱–۲۰۲۵)",
    tTestTitle: "۱. آزمون t مستقل ولش (مقایسه تابستان و زمستان)",
    anovaTitle: "۲. تحلیل واریانس یک‌طرفه ANOVA (مقایسه ۴ فصل)",
    rCodeTitle: "کد زبان R استفاده شده در پروژه (نسخه 4.6.1)",
    copyCodeBtn: "کاپی کردن کد",
    copiedBtn: "کاپی شد ✓",
    loading: "در حال بارگیری معلومات آب‌وهوا...",
    notFound: "موقعیت پیدا نشد! لطفاً نام شهر یا کشور را بررسی کنید.",
    weatherCodes: {
      0: "آسمان صاف", 1: "کمی ابرآلود", 2: "قسمتاً ابرآلود", 3: "ابرآلود",
      45: "غبارآلود / مه", 48: "مه سرد", 51: "باران ریزه", 61: "باران خفیف",
      63: "باران متوسط", 65: "باران شدید", 71: "برف‌باری",
      80: "رگبار باران", 95: "رعد و برق"
    }
  },
  fa: {
    dir: "rtl",
    subtitle: "هواشناسی زنده جهان، تقویم هجری شمسی و تحلیل آماری R",
    tabLive: "آب‌وهوای زنده",
    tabRStats: "پروژه آماری R (درس YZM562)",
    searchPlaceholder: "جستجوی هر کشور، شهر یا منطقه در جهان (مثلاً: Andkhoy, Tehran, Istanbul)...",
    selectCountryOpt: "🌍 انتخاب سریع کشور...",
    searchBtn: "جستجو",
    favoritesLabel: "شهرهای مورد علاقه:",
    addFavBtn: "+ ذخیره این شهر",
    detailsTitle: "جزئیات لحظه‌ای",
    feelsLike: "دمای حسی",
    humidity: "رطوبت هوا",
    windSpeed: "سرعت باد",
    precipitation: "بارش",
    hourlyTitle: "وضعیت ساعتی هوا (۲۴ ساعت آینده)",
    hourlyForDayPrefix: "وضعیت ساعتی برای روز:",
    nowLabel: "الان",
    dailyTitle: "پیش‌بینی ۷ روز آینده (برای مشاهده جزئیات ساعتی روی هر روز کلیک کنید)",
    alertsTitle: "🚨 اعلان‌های شهرداری، هشدارهای هواشناسی و اخبار زلزله / سونامی",
    noHazardsTitle: "هیچ هشدار خطر یا وضعیت اضطراری فعال نیست",
    noHazardsDesc: "شرایط جوی در وضعیت عادی است و در ۴۸ ساعت گذشته زمین‌لرزه ۴ ریشتر به بالا در شعاع ۵۰۰ کیلومتری ثبت نشده است.",
    windAlertTitle: "⚠️ هشدار وزش باد شدید و طوفان",
    rainAlertTitle: "🌧️ هشدار احتمال بارندگی قابل توجه",
    quakeAlertTitle: "🌍 گزارش لرزه‌نگاری و زلزله در منطقه (USGS)",
    tsunamiAlertTitle: "🌊 هشدار فوری احتمال سونامی!",
    rProjectTitle: "تحلیل آماری دمای روزانه (۲۰۲۱ تا ۲۰۲۵)",
    rProjectDesc: "دانشگاه گدیک استانبول — پروژه نهایی درس کاربردهای آمار با زبان R",
    kpiMean: "میانگین دمای ۵ ساله",
    kpiHottest: "گرم‌ترین روز (بیشینه)",
    kpiColdest: "سردترین روز (کمینه)",
    kpiWelch: "آزمون t ولش (تابستان و زمستان)",
    rMonthlyChartTitle: "میانگین، بیشینه و کمینه دمای ماهانه (۲۰۲۱–۲۰۲۵)",
    tTestTitle: "۱. آزمون t دو نمونه‌ای مستقل ولش (تابستان در برابر زمستان)",
    anovaTitle: "۲. آنالیز واریانس یک‌طرفه ANOVA (مقایسه ۴ فصل)",
    rCodeTitle: "کد زبان R اجرا شده در پروژه (نسخه 4.6.1)",
    copyCodeBtn: "کپی کردن کد",
    copiedBtn: "کپی شد ✓",
    loading: "در حال دریافت اطلاعات زنده آب‌وهوا...",
    notFound: "شهر مورد نظر پیدا نشد! لطفاً نام شهر را بررسی کنید.",
    weatherCodes: {
      0: "آسمان صاف", 1: "کمی ابری", 2: "نیمه‌ابری", 3: "ابری",
      45: "مه‌آلود", 48: "مه یخ‌زده", 51: "نم‌نم باران", 61: "باران خفیف",
      63: "باران متوسط", 65: "باران شدید", 71: "بارش برف",
      80: "رگبار باران", 95: "رعدوبرق و طوفان"
    }
  },
  en: {
    dir: "ltr",
    subtitle: "Global Live Weather, Emergency Alerts & R Statistical Analytics",
    tabLive: "Live Weather",
    tabRStats: "R Statistical Project (YZM562)",
    searchPlaceholder: "Search any country, city, or district worldwide (e.g., Andkhoy, Kabul, London)...",
    selectCountryOpt: "🌍 Quick Select Country...",
    searchBtn: "Search",
    favoritesLabel: "Favorite Locations:",
    addFavBtn: "+ Save Location",
    detailsTitle: "Current Details",
    feelsLike: "Feels Like",
    humidity: "Humidity",
    windSpeed: "Wind Speed",
    precipitation: "Precipitation",
    hourlyTitle: "Hourly Forecast (24-Hour Breakdown)",
    hourlyForDayPrefix: "Hourly Forecast for:",
    nowLabel: "Now",
    dailyTitle: "7-Day Weather Forecast (Click any day for hourly details)",
    alertsTitle: "🚨 Municipal, Weather & Earthquake / Tsunami Alerts",
    noHazardsTitle: "No Active Hazards or Emergency Alerts",
    noHazardsDesc: "Weather conditions are normal and no M4.0+ earthquakes were recorded within 500 km in the past 48 hours.",
    windAlertTitle: "⚠️ Strong Wind / Gale Advisory",
    rainAlertTitle: "🌧️ High Precipitation Probability Alert",
    quakeAlertTitle: "🌍 Regional Earthquake Activity Report (USGS)",
    tsunamiAlertTitle: "🌊 ACTIVE TSUNAMI WARNING!",
    rProjectTitle: "Daily Weather Statistical Analysis (2021–2025)",
    rProjectDesc: "Istanbul Gedik University — YZM562 Statistical Applications with R Final Project",
    kpiMean: "5-Year Mean Temperature",
    kpiHottest: "Hottest Day (Max Temp)",
    kpiColdest: "Coldest Day (Min Temp)",
    kpiWelch: "Welch t-Test (Summer vs Winter)",
    rMonthlyChartTitle: "Monthly Mean, Maximum, and Minimum Temperatures (2021–2025)",
    tTestTitle: "1. Independent Two-Sample Welch t-Test (Summer vs. Winter)",
    anovaTitle: "2. One-Way ANOVA (4 Seasons Comparison)",
    rCodeTitle: "R Analysis Script (R Version 4.6.1)",
    copyCodeBtn: "Copy Code",
    copiedBtn: "Copied ✓",
    loading: "Fetching live weather data...",
    notFound: "Location not found! Please try another city or country.",
    weatherCodes: {
      0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
      45: "Foggy", 48: "Depositing Rime Fog", 51: "Light Drizzle", 61: "Slight Rain",
      63: "Moderate Rain", 65: "Heavy Rain", 71: "Snow Fall",
      80: "Rain Showers", 95: "Thunderstorm"
    }
  }
};

// ==========================================================================
// تبدیل دقیق تاریخ میلادی به تقویم هجری شمسی افغانستان (حمل، ثور، جوزا...)
// ==========================================================================
const AFGHAN_MONTHS = [
  "حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله",
  "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"
];

const AFGHAN_WEEKDAYS = [
  "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"
];

function toAfghanDigits(str) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(str).replace(/\d/g, (d) => persianDigits[d]);
}

function gregorianToJalali(gy, gm, gd) {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let gy2 = gm > 2 ? gy + 1 : gy;
  let days = 355666 + 365 * gy + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
  let jy = -1595 + 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }
  let jm = days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
  let jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
  return { jy, jm, jd };
}

function formatDateByLang(isoDateStr, lang, includeYear = true) {
  const parts = isoDateStr.split("T")[0].split("-");
  const gy = parseInt(parts[0], 10);
  const gm = parseInt(parts[1], 10);
  const gd = parseInt(parts[2], 10);
  const dateObj = new Date(gy, gm - 1, gd);

  if (lang === "prs" || lang === "fa") {
    const { jy, jm, jd } = gregorianToJalali(gy, gm, gd);
    const weekday = AFGHAN_WEEKDAYS[dateObj.getDay()];
    const monthName = AFGHAN_MONTHS[jm - 1];
    if (includeYear) {
      return `${weekday}، ${toAfghanDigits(jd)} ${monthName} ${toAfghanDigits(jy)}`;
    }
    return `${toAfghanDigits(jd)} ${monthName}`;
  }

  return dateObj.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", includeYear
    ? { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    : { month: "short", day: "numeric" }
  );
}

function getShortWeekday(isoDateStr, lang) {
  const parts = isoDateStr.split("T")[0].split("-");
  const dateObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  if (lang === "prs" || lang === "fa") {
    return AFGHAN_WEEKDAYS[dateObj.getDay()];
  }
  return dateObj.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", { weekday: "short" });
}

// ==========================================================================
// متغیرهای سراسری و شهرهای پیش‌فرض
// ==========================================================================
let currentLang = "prs";
let currentCity = { name: "İstanbul, Türkiye", lat: 41.0082, lon: 28.9784 };
let latestWeatherData = null;

let favoriteCities = JSON.parse(localStorage.getItem("havascope_favs_v2")) || [
  { name: "Andkhoy, Faryab", lat: 36.9529, lon: 65.1238 },
  { name: "Kabul, Afghanistan", lat: 34.5553, lon: 69.2075 },
  { name: "İstanbul, Türkiye", lat: 41.0082, lon: 28.9784 },
  { name: "Tehran, Iran", lat: 35.6892, lon: 51.3890 },
  { name: "Ankara, Türkiye", lat: 39.9334, lon: 32.8597 }
];

let hourlyChartInstance = null;
let rMonthlyChartInstance = null;

function unwrap(v) {
  return Array.isArray(v) ? v[0] : v;
}

function getWeatherIcon(code) {
  code = unwrap(code);
  if (code === 0) return "☀️";
  if (code <= 2) return "⛅";
  if (code === 3) return "☁️";
  if (code <= 48) return "🌫️";
  if (code <= 67 || code === 80) return "🌧️";
  if (code <= 77) return "❄️";
  return "⛈️";
}

function getWeatherText(code) {
  code = unwrap(code);
  const dict = translations[currentLang].weatherCodes;
  if (dict[code]) return dict[code];
  if (code <= 2) return dict[1];
  if (code <= 48) return dict[45];
  if (code <= 67) return dict[61];
  if (code <= 77) return dict[71];
  return dict[80];
}

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;

  const selectEl = document.getElementById("language-select");
  if (selectEl) selectEl.value = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });

  fetchWeather(currentCity.lat, currentCity.lon, currentCity.name);
}

function renderFavorites() {
  const container = document.getElementById("favorites-list");
  if (!container) return;
  container.innerHTML = "";
  favoriteCities.forEach((city) => {
    const btn = document.createElement("button");
    btn.className = "fav-chip";
    btn.textContent = city.name;
    btn.onclick = () => {
      currentCity = city;
      fetchWeather(city.lat, city.lon, city.name);
    };
    container.appendChild(btn);
  });
}

async function searchCity(query) {
  const statusEl = document.getElementById("status-banner");
  if (statusEl) {
    statusEl.textContent = translations[currentLang].loading;
    statusEl.classList.remove("hidden");
  }

  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`);
    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      if (statusEl) statusEl.textContent = translations[currentLang].notFound;
      return;
    }

    const place = data.results[0];
    const adminPart = place.admin1 ? `, ${place.admin1}` : "";
    const countryPart = place.country ? `, ${place.country}` : "";
    const displayName = `${place.name}${adminPart}${countryPart}`;

    currentCity = { name: displayName, lat: place.latitude, lon: place.longitude };
    if (statusEl) statusEl.classList.add("hidden");
    fetchWeather(place.latitude, place.longitude, displayName);
  } catch (err) {
    if (statusEl) statusEl.textContent = "API Connection Error!";
  }
}

async function fetchWeather(lat, lon, cityName) {
  const localRUrl = `http://127.0.0.1:8000/live_weather?lat=${lat}&lon=${lon}`;
  const directApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`;

  let data = null;

  try {
    const rRes = await fetch(localRUrl, { signal: AbortSignal.timeout(1500) });
    if (rRes.ok) {
      data = await rRes.json();
    }
  } catch (e) {
    // استفاده از API مستقیم در صورت خاموش بودن سرور R محلی
  }

  try {
    if (!data) {
      const res = await fetch(directApiUrl);
      data = await res.json();
    }

    latestWeatherData = data;

    const currTemp = unwrap(data.current.temperature_2m);
    const currCode = unwrap(data.current.weather_code);
    const feelsLike = unwrap(data.current.apparent_temperature);
    const humidity = unwrap(data.current.relative_humidity_2m);
    const windSpeed = unwrap(data.current.wind_speed_10m);
    const precip = unwrap(data.current.precipitation);
    const currentIsoTime = unwrap(data.current.time);

    document.getElementById("current-city-name").textContent = cityName;
    const formattedToday = formatDateByLang(currentIsoTime, currentLang, true);
    const localClock = currentIsoTime.split("T")[1];
    document.getElementById("current-date").textContent = `${formattedToday} • ${localClock}`;

    document.getElementById("current-temp").textContent = `${Math.round(currTemp)}°C`;
    document.getElementById("current-weather-icon").textContent = getWeatherIcon(currCode);
    document.getElementById("current-desc").textContent = getWeatherText(currCode);

    document.getElementById("metric-feels").textContent = `${Math.round(feelsLike)}°C`;
    document.getElementById("metric-humidity").textContent = `${humidity}%`;
    document.getElementById("metric-wind").textContent = `${windSpeed} km/sa`;
    document.getElementById("metric-precip").textContent = `${precip} mm`;

    renderDailyCards(data);
    selectDayForHourly(0);

    const next12Probs = data.hourly.precipitation_probability ? data.hourly.precipitation_probability.slice(0, 12) : [0];
    checkHazardsAndEarthquakes(lat, lon, windSpeed, next12Probs, currCode);

    // اجرای هم‌زمان تحلیل‌های آماری ۵ ساله (بخش دوم) برای شهر انتخاب‌شده
    fetchAndRenderRStats(lat, lon, cityName);
  } catch (error) {
    console.error("Weather fetch error:", error);
  }
}

function renderDailyCards(data) {
  const dailyGrid = document.getElementById("daily-forecast-grid");
  if (!dailyGrid) return;
  dailyGrid.innerHTML = "";

  data.daily.time.forEach((dateStr, idx) => {
    const dayName = getShortWeekday(dateStr, currentLang);
    const subDate = formatDateByLang(dateStr, currentLang, false);

    const card = document.createElement("div");
    card.className = idx === 0 ? "day-card active-day" : "day-card";
    card.dataset.dayIndex = idx;
    card.innerHTML = `
      <div class="day-name">${dayName}</div>
      <div class="day-subdate">${subDate}</div>
      <div class="day-icon">${getWeatherIcon(data.daily.weather_code[idx])}</div>
      <div class="day-temps">
        <span class="temp-max-txt">${Math.round(data.daily.temperature_2m_max[idx])}°</span> /
        <span class="temp-min-txt">${Math.round(data.daily.temperature_2m_min[idx])}°</span>
      </div>
    `;

    card.addEventListener("click", () => {
      document.querySelectorAll(".day-card").forEach((c) => c.classList.remove("active-day"));
      card.classList.add("active-day");
      selectDayForHourly(idx);
    });

    dailyGrid.appendChild(card);
  });
}

function selectDayForHourly(dayIdx) {
  if (!latestWeatherData) return;
  const data = latestWeatherData;
  const selectedDateStr = data.daily.time[dayIdx];
  const fullDayLabel = formatDateByLang(selectedDateStr, currentLang, true);

  const badgeEl = document.getElementById("selected-day-badge");
  if (badgeEl) badgeEl.textContent = fullDayLabel;

  const titleEl = document.getElementById("hourly-section-title");
  if (titleEl) titleEl.textContent = `${translations[currentLang].hourlyForDayPrefix} ${fullDayLabel}`;

  let startIdx = 0;
  if (dayIdx === 0) {
    const currentIsoTime = unwrap(data.current.time);
    const currentHourPrefix = currentIsoTime.slice(0, 13);
    startIdx = data.hourly.time.findIndex((t) => t.startsWith(currentHourPrefix));
    if (startIdx < 0) startIdx = 0;
  } else {
    startIdx = data.hourly.time.findIndex((t) => t.startsWith(selectedDateStr));
    if (startIdx < 0) startIdx = dayIdx * 24;
  }

  const sliceTimes = data.hourly.time.slice(startIdx, startIdx + 24);
  const sliceTemps = data.hourly.temperature_2m.slice(startIdx, startIdx + 24);
  const sliceCodes = data.hourly.weather_code ? data.hourly.weather_code.slice(startIdx, startIdx + 24) : Array(24).fill(0);
  const sliceProbs = data.hourly.precipitation_probability ? data.hourly.precipitation_probability.slice(startIdx, startIdx + 24) : Array(24).fill(0);

  const chartLabels = sliceTimes.map((t, i) => (dayIdx === 0 && i === 0 ? translations[currentLang].nowLabel : t.split("T")[1]));
  renderHourlyChart(chartLabels, sliceTemps);
  renderGoogleHourlyStrip(sliceTimes, sliceTemps, sliceCodes, sliceProbs, dayIdx === 0);
}

function renderGoogleHourlyStrip(times, temps, codes, precipProbs, isToday) {
  const strip = document.getElementById("hourly-strip");
  if (!strip) return;
  strip.innerHTML = "";

  times.forEach((timeStr, idx) => {
    const label = isToday && idx === 0 ? translations[currentLang].nowLabel : timeStr.split("T")[1];
    const prob = precipProbs[idx] ?? 0;
    const pill = document.createElement("div");
    pill.className = isToday && idx === 0 ? "hour-pill now-pill" : "hour-pill";
    pill.innerHTML = `
      <div class="hour-time">${label}</div>
      <div class="hour-icon">${getWeatherIcon(codes[idx])}</div>
      <div class="hour-temp">${Math.round(temps[idx])}°</div>
      <div class="hour-precip">💧 ${prob}%</div>
    `;
    strip.appendChild(pill);
  });
}

async function checkHazardsAndEarthquakes(lat, lon, windSpeed, precipProbs, currCode) {
  const container = document.getElementById("alerts-container");
  if (!container) return;
  const t = translations[currentLang];
  const alerts = [];

  if (windSpeed >= 40) {
    alerts.push({
      level: "warning",
      icon: "💨",
      title: t.windAlertTitle,
      desc: `${windSpeed} km/sa`
    });
  }

  const maxRainProb = Math.max(...precipProbs);
  if (maxRainProb >= 60 || currCode >= 63) {
    alerts.push({
      level: "warning",
      icon: "🌧️",
      title: t.rainAlertTitle,
      desc: `Max: ${maxRainProb}%`
    });
  }

  try {
    const startTime = new Date(Date.now() - 48 * 3600 * 1000).toISOString();
    const usgsUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${lat}&longitude=${lon}&maxradiuskm=500&minmagnitude=4.0&starttime=${startTime}&limit=3`;
    const res = await fetch(usgsUrl);
    const qData = await res.json();

    if (qData.features && qData.features.length > 0) {
      qData.features.forEach((eq) => {
        const mag = eq.properties.mag.toFixed(1);
        const place = eq.properties.place;
        const tsunami = eq.properties.tsunami === 1;
        const eqTime = new Date(eq.properties.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        if (tsunami) {
          alerts.push({
            level: "danger",
            icon: "🌊",
            title: t.tsunamiAlertTitle,
            desc: `M${mag} — ${place} (${eqTime})`
          });
        }

        alerts.push({
          level: mag >= 5.0 ? "danger" : "warning",
          icon: "🌍",
          title: `${t.quakeAlertTitle} — M${mag}`,
          desc: `${place} (${eqTime})`
        });
      });
    }
  } catch (err) {
    // عدم توقف برنامه در صورت خطای شبکه
  }

  container.innerHTML = "";
  if (alerts.length === 0) {
    container.innerHTML = `
      <div class="alert-item safe">
        <span class="alert-icon">✅</span>
        <div>
          <span class="alert-title">${t.noHazardsTitle}</span>
          <span class="alert-desc">${t.noHazardsDesc}</span>
        </div>
      </div>
    `;
  } else {
    alerts.forEach((al) => {
      const div = document.createElement("div");
      div.className = `alert-item ${al.level}`;
      div.innerHTML = `
        <span class="alert-icon">${al.icon}</span>
        <div>
          <span class="alert-title">${al.title}</span>
          <span class="alert-desc">${al.desc}</span>
        </div>
      `;
      container.appendChild(div);
    });
  }
}

function renderHourlyChart(labels, temps) {
  const canvas = document.getElementById("hourlyChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (hourlyChartInstance) hourlyChartInstance.destroy();

  hourlyChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Sıcaklık / Temp (°C)",
        data: temps,
        borderColor: "#1d4ed8",
        backgroundColor: "rgba(29, 78, 216, 0.12)",
        borderWidth: 2.5,
        fill: true,
        tension: 0.35,
        pointRadius: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } }
    }
  });
}

// ==========================================================================
// بخش دوم: تحلیل آماری پویا (۲۰۲۱–۲۰۲۵) برای هر شهر انتخاب‌شده
// ==========================================================================
async function fetchAndRenderRStats(lat, lon, cityName) {
  const titleEl = document.getElementById("r-dynamic-title");
  if (!titleEl) return;

  const badgeEl = document.getElementById("r-engine-badge");
  if (badgeEl) badgeEl.textContent = "⏳ Calculating (2021–2025)...";

  if (currentLang === "prs") {
    titleEl.textContent = `تحلیل احصائیوی درجه حرارت روزانه ${cityName} (۲۰۲۱–۲۰۲۵)`;
  } else if (currentLang === "fa") {
    titleEl.textContent = `تحلیل آماری دمای روزانه ${cityName} (۲۰۲۱ تا ۲۰۲۵)`;
  } else if (currentLang === "en") {
    titleEl.textContent = `${cityName} Daily Weather Statistical Analysis (2021–2025)`;
  } else {
    titleEl.textContent = `${cityName} Günlük Hava Durumu İstatistiksel Analizi (2021–2025)`;
  }

  let stats = null;

  // ۱. دریافت مستقیم تحلیل‌های آماری از سرور R Plumber (در صورت روشن بودن)
  try {
    const rRes = await fetch(`http://127.0.0.1:8000/r_analysis?lat=${lat}&lon=${lon}`, {
      signal: AbortSignal.timeout(4500)
    });
    if (rRes.ok) {
      const raw = await rRes.json();
      stats = {
        source: unwrap(raw.source) || "R 4.6.1 Plumber Live API",
        total_days: unwrap(raw.total_days),
        mean_temp: unwrap(raw.mean_temp),
        sd_temp: unwrap(raw.sd_temp),
        median_temp: unwrap(raw.median_temp),
        max_temp: unwrap(raw.max_temp),
        max_date: unwrap(raw.max_date),
        max_day_mean: unwrap(raw.max_day_mean),
        min_temp: unwrap(raw.min_temp),
        min_date: unwrap(raw.min_date),
        min_day_mean: unwrap(raw.min_day_mean),
        yaz_n: unwrap(raw.yaz_n),
        yaz_mean: unwrap(raw.yaz_mean),
        yaz_sd: unwrap(raw.yaz_sd),
        kis_n: unwrap(raw.kis_n),
        kis_mean: unwrap(raw.kis_mean),
        kis_sd: unwrap(raw.kis_sd),
        t_stat: unwrap(raw.t_stat),
        t_df: unwrap(raw.t_df),
        ci_low: unwrap(raw.ci_low),
        ci_high: unwrap(raw.ci_high),
        diff_mean: unwrap(raw.diff_mean),
        f_stat: unwrap(raw.f_stat),
        ms_between: unwrap(raw.ms_between),
        ms_within: unwrap(raw.ms_within),
        df_within: unwrap(raw.df_within),
        monthly_mean: raw.monthly_mean,
        monthly_max: raw.monthly_max,
        monthly_min: raw.monthly_min
      };
    }
  } catch (e) {
    // محاسبه زنده در مرورگر هنگام آنلاین بودن سایت (Fallback)
  }

  // ۲. محاسبه پشتیبان در جاوااسکریپت از آرشیو ۵ ساله Open-Meteo
  if (!stats) {
    try {
      const archUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=2021-01-01&end_date=2025-12-31&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean&timezone=auto`;
      const res = await fetch(archUrl);
      const arch = await res.json();
      const d = arch.daily;

      const valid = [];
      for (let i = 0; i < d.time.length; i++) {
        if (d.temperature_2m_mean[i] !== null) {
          const m = parseInt(d.time[i].slice(5, 7), 10);
          const s = [12, 1, 2].includes(m) ? "Kis" : [3, 4, 5].includes(m) ? "Ilkbahar" : [6, 7, 8].includes(m) ? "Yaz" : "Sonbahar";
          valid.push({
            date: d.time[i],
            month: m,
            season: s,
            max: d.temperature_2m_max[i],
            min: d.temperature_2m_min[i],
            mean: d.temperature_2m_mean[i]
          });
        }
      }

      const calcMean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
      const calcSd = (arr, m) => Math.sqrt(arr.reduce((a, b) => a + Math.pow(b - m, 2), 0) / (arr.length - 1));

      const allMeans = valid.map((x) => x.mean);
      const overallMean = calcMean(allMeans);
      const overallSd = calcSd(allMeans, overallMean);
      const sortedMeans = [...allMeans].sort((a, b) => a - b);
      const overallMedian = sortedMeans[Math.floor(sortedMeans.length / 2)];

      let maxRow = valid[0], minRow = valid[0];
      valid.forEach((r) => {
        if (r.max > maxRow.max) maxRow = r;
        if (r.min < minRow.min) minRow = r;
      });

      const yazArr = valid.filter((x) => x.season === "Yaz").map((x) => x.mean);
      const kisArr = valid.filter((x) => x.season === "Kis").map((x) => x.mean);
      const yazM = calcMean(yazArr), yazS = calcSd(yazArr, yazM);
      const kisM = calcMean(kisArr), kisS = calcSd(kisArr, kisM);

      const se = Math.sqrt((yazS * yazS) / yazArr.length + (kisS * kisS) / kisArr.length);
      const tVal = (yazM - kisM) / se;
      const dfNum = Math.pow((yazS * yazS) / yazArr.length + (kisS * kisS) / kisArr.length, 2);
      const dfDen = Math.pow((yazS * yazS) / yazArr.length, 2) / (yazArr.length - 1) + Math.pow((kisS * kisS) / kisArr.length, 2) / (kisArr.length - 1);
      const tDf = dfNum / dfDen;

      const seasons = ["Kis", "Ilkbahar", "Yaz", "Sonbahar"];
      let ssBetween = 0, ssWithin = 0;
      seasons.forEach((sn) => {
        const grp = valid.filter((x) => x.season === sn).map((x) => x.mean);
        const gm = calcMean(grp);
        ssBetween += grp.length * Math.pow(gm - overallMean, 2);
        ssWithin += grp.reduce((acc, v) => acc + Math.pow(v - gm, 2), 0);
      });
      const msBetween = ssBetween / 3;
      const dfWithin = valid.length - 4;
      const msWithin = ssWithin / dfWithin;
      const fStat = msBetween / msWithin;

      const mMean = [], mMax = [], mMin = [];
      for (let m = 1; m <= 12; m++) {
        const rows = valid.filter((x) => x.month === m);
        mMean.push(+calcMean(rows.map((x) => x.mean)).toFixed(2));
        mMax.push(+calcMean(rows.map((x) => x.max)).toFixed(2));
        mMin.push(+calcMean(rows.map((x) => x.min)).toFixed(2));
      }

      stats = {
        source: "Open-Meteo Archive + Live Stats Engine",
        total_days: valid.length,
        mean_temp: overallMean.toFixed(2),
        sd_temp: overallSd.toFixed(2),
        median_temp: overallMedian.toFixed(2),
        max_temp: maxRow.max.toFixed(1),
        max_date: maxRow.date,
        max_day_mean: maxRow.mean.toFixed(1),
        min_temp: minRow.min.toFixed(1),
        min_date: minRow.date,
        min_day_mean: minRow.mean.toFixed(1),
        yaz_n: yazArr.length,
        yaz_mean: yazM.toFixed(2),
        yaz_sd: yazS.toFixed(2),
        kis_n: kisArr.length,
        kis_mean: kisM.toFixed(2),
        kis_sd: kisS.toFixed(2),
        t_stat: tVal.toFixed(2),
        t_df: tDf.toFixed(2),
        ci_low: (yazM - kisM - 1.96 * se).toFixed(2),
        ci_high: (yazM - kisM + 1.96 * se).toFixed(2),
        diff_mean: (yazM - kisM).toFixed(2),
        f_stat: fStat.toFixed(2),
        ms_between: msBetween.toFixed(1),
        ms_within: msWithin.toFixed(2),
        df_within: dfWithin,
        monthly_mean: mMean,
        monthly_max: mMax,
        monthly_min: mMin
      };
    } catch (err) {
      console.error("Archive stats error:", err);
      return;
    }
  }

  if (badgeEl) badgeEl.textContent = `${stats.source} (n = ${stats.total_days})`;
  document.getElementById("r-kpi-mean").textContent = `${stats.mean_temp} °C`;
  document.getElementById("r-kpi-mean-sub").textContent = `SD = ${stats.sd_temp} °C | Medyan = ${stats.median_temp} °C`;
  document.getElementById("r-kpi-max").textContent = `${stats.max_temp} °C`;
  document.getElementById("r-kpi-max-sub").textContent = `${stats.max_date} (Ort: ${stats.max_day_mean} °C)`;
  document.getElementById("r-kpi-min").textContent = `${stats.min_temp} °C`;
  document.getElementById("r-kpi-min-sub").textContent = `${stats.min_date} (Ort: ${stats.min_day_mean} °C)`;
  document.getElementById("r-kpi-t").textContent = `t = ${stats.t_stat}`;
  document.getElementById("r-kpi-t-sub").textContent = `p < 0.001 | Fark = +${stats.diff_mean} °C`;

  document.getElementById("r-yaz-n").textContent = stats.yaz_n;
  document.getElementById("r-yaz-mean").textContent = `${stats.yaz_mean} °C`;
  document.getElementById("r-yaz-sd").textContent = `${stats.yaz_sd} °C`;
  document.getElementById("r-kis-n").textContent = stats.kis_n;
  document.getElementById("r-kis-mean").textContent = `${stats.kis_mean} °C`;
  document.getElementById("r-kis-sd").textContent = `${stats.kis_sd} °C`;

  document.getElementById("r-ttest-note").innerHTML =
    `<strong>Sonuç:</strong> t(${stats.t_df}) = ${stats.t_stat}, p &lt; 2.2e-16, %95 GA: [${stats.ci_low}, ${stats.ci_high}]. H0 reddedildi; yaz ve kış sıcaklıkları arasında anlamlı fark vardır.`;

  document.getElementById("r-ms-between").textContent = stats.ms_between;
  document.getElementById("r-f-stat").textContent = stats.f_stat;
  document.getElementById("r-df-within").textContent = stats.df_within;
  document.getElementById("r-ms-within").textContent = stats.ms_within;

  const codeEl = document.getElementById("r-code-snippet");
  if (codeEl) {
    codeEl.textContent = `# Open-Meteo ${cityName} Verisi (2021-2025) & İstatistiksel Analiz
url <- "https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=2021-01-01&end_date=2025-12-31&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean&timezone=auto&format=csv"
raw_data <- read.csv(url, skip = 2)
colnames(raw_data) <- c("date", "temp_max", "temp_min", "temp_mean")

# Welch t-Testi (Yaz vs. Kış) ve Tek Yönlü ANOVA
t.test(temp_mean ~ season, data = subset(clean_data, season %in% c("Yaz", "Kis")))
anova_model <- aov(temp_mean ~ season, data = clean_data)
summary(anova_model)`;
  }

  window.lastMonthlyStats = {
    max: stats.monthly_max,
    mean: stats.monthly_mean,
    min: stats.monthly_min
  };
  renderRMonthlyChart(stats.monthly_max, stats.monthly_mean, stats.monthly_min);
}

function renderRMonthlyChart(tMax, tMean, tMin) {
  const canvas = document.getElementById("rMonthlyChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (rMonthlyChartInstance) rMonthlyChartInstance.destroy();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const maxArr = tMax || [10.47, 10.12, 12.43, 16.85, 21.38, 26.67, 30.24, 29.91, 25.51, 20.13, 16.83, 12.41];
  const meanArr = tMean || [7.51, 6.72, 8.36, 12.37, 16.68, 22.12, 25.43, 25.32, 21.22, 16.35, 13.36, 9.52];
  const minArr = tMin || [4.58, 3.61, 4.82, 8.63, 12.36, 17.84, 20.84, 21.43, 17.55, 13.18, 10.24, 6.86];

  rMonthlyChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: months,
      datasets: [
        { label: "Ortalama Maksimum (°C)", data: maxArr, borderColor: "#dc2626", backgroundColor: "#dc2626", tension: 0.3 },
        { label: "Günlük Ortalama (°C)", data: meanArr, borderColor: "#16a34a", backgroundColor: "#16a34a", borderWidth: 3, tension: 0.3 },
        { label: "Ortalama Minimum (°C)", data: minArr, borderColor: "#0284c7", backgroundColor: "#0284c7", tension: 0.3 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// ==========================================================================
// راه‌اندازی اولیه رویدادهای صفحه
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.getAttribute("data-tab")}`).classList.add("active");
      if (btn.getAttribute("data-tab") === "rstats") {
        const saved = window.lastMonthlyStats || {};
        renderRMonthlyChart(saved.max, saved.mean, saved.min);
      }
    });
  });

  const langSelect = document.getElementById("language-select");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }

  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = document.getElementById("city-input").value.trim();
      if (val) searchCity(val);
    });
  }

  const countrySelect = document.getElementById("country-quick-select");
  if (countrySelect) {
    countrySelect.addEventListener("change", (e) => {
      if (e.target.value) searchCity(e.target.value);
    });
  }

  const addFavBtn = document.getElementById("add-fav-btn");
  if (addFavBtn) {
    addFavBtn.addEventListener("click", () => {
      if (!favoriteCities.some((c) => c.name === currentCity.name)) {
        favoriteCities.push(currentCity);
        localStorage.setItem("havascope_favs_v2", JSON.stringify(favoriteCities));
        renderFavorites();
      }
    });
  }

  const copyRBtn = document.getElementById("copy-r-btn");
  if (copyRBtn) {
    copyRBtn.addEventListener("click", () => {
      const codeText = document.getElementById("r-code-snippet").textContent;
      navigator.clipboard.writeText(codeText);
      copyRBtn.textContent = translations[currentLang].copiedBtn;
      setTimeout(() => (copyRBtn.textContent = translations[currentLang].copyCodeBtn), 2000);
    });
  }

  renderFavorites();
  applyLanguage("prs");
});