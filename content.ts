/**
 * ============================================================
 *  TÄLTHJÄLTARNA — SITE CONTENT
 *  Edit this file to change all text and images on the site.
 * ============================================================
 *
 *  IMAGES
 *  ------
 *  1. Upload your images to your cPanel File Manager under:
 *       public_html/images/
 *  2. Set the path here as:
 *       "/images/your-filename.jpg"
 *  3. Set any path to "" (empty string) to show a placeholder
 *     instead of a broken image.
 *
 *  GOOGLE CALENDAR
 *  ---------------
 *  See the calendarEmbedUrl field in the `booking` section.
 *  Full setup instructions are in src/routes/boka.tsx.
 * ============================================================
 */

export const site = {
  // ── Brand ──────────────────────────────────────────────────
  name: "Tälthjältarna",
  tagline: "Tält som lyfter festen.",
  description:
    "Tälthjältarna hyr ut partytält och evenemangstält i flera storlekar — från " +
    "små trädgårdsfester till stora bröllop och företagsevent. Vi levererar, reser och hämtar.",
  url: "https://talthjaltarna.se",

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: "info@talthjaltarna.se",
    phone: "", // e.g. "+46 70 000 00 00" — leave "" to hide
    area: "Stockholm & omnejd", // your service area
  },
};

// ── Home page ─────────────────────────────────────────────────────────────────
export const home = {
  hero: {
    badge: "Partytältuthyrning",
    heading: "Tält som lyfter",
    headingAccent: "festen",
    body:
      "Tälthjältarna hyr ut partytält och evenemangstält i flera storlekar — från " +
      "små trädgårdsfester till stora bröllop och företagsevent. Vi levererar, reser och hämtar.",
    // Upload a landscape photo to cPanel → /images/hero.jpg
    image: "/images/hero.jpg",
    imageAlt: "Vitt partytält uppställt på sommaräng",
    stats: [
      { value: "2–12 m", label: "Storlekar" },
      { value: "100%", label: "Väderbeständigt" },
      { value: "Lokalt", label: "Levereras" },
    ],
  },

  intro: {
    heading: "Hyr partytält av Tälthjältarna",
    body:
      "Planerar du en utomhusfest, ett bröllop eller ett företagsevent och vill skapa " +
      "en oförglömlig upplevelse? Hos oss hyr du partytält av hög kvalitet som kan anpassas " +
      "till just ditt evenemang. Ett partytält är inte bara skydd mot regn eller sol — " +
      "det är en arena där minnen skapas och en stilren bakgrund till dina foton.",
  },

  useCases: [
    { title: "Bröllop", desc: "Elegant ram för er stora dag, oavsett väder." },
    { title: "Födelsedagar", desc: "Från intima firanden till storslagna kalas." },
    { title: "Företagsevent", desc: "Professionell miljö för kundträffar och fester." },
    { title: "Julbord & högtider", desc: "Värme och stämning även under kalla månader." },
    { title: "Studentfest & möhippa", desc: "Skapa en plats där festen kan ta plats." },
    { title: "Trädgårdsfest", desc: "Förvandla din trädgård till en festlokal." },
  ],

  gallery: {
    heading: "Våra tält i bruk",
    subheading:
      "Här hittar du några exempel på tidigare uppställningar.",
    // Upload portrait/square photos to cPanel → /images/gallery-1.jpg etc.
    // Set to "" to show placeholder instead.
    images: [
      { src: "/images/gallery-1.jpg", alt: "Bröllopstält — sommarkväll" },
      { src: "/images/gallery-2.jpg", alt: "Företagsevent — kvällsbelysning" },
      { src: "/images/gallery-3.jpg", alt: "Trädgårdsfest — 6×12 m" },
    ],
  },

  whyUs: [
    {
      title: "Kvalitet och variation",
      desc:
        "Tält i flera storlekar och utföranden, alla i slitstarkt och väderbeständigt " +
        "material — från 2 till 12 meter.",
    },
    {
      title: "Helhetslösning",
      desc:
        "Inte bara tält — även möbler, belysning, värme och tillbehör som lyfter ditt evenemang.",
    },
    {
      title: "Lokal expertis",
      desc:
        "Vi känner till området och anpassar uppställningen efter dina förutsättningar och väderlek.",
    },
    {
      title: "Flexibilitet",
      desc:
        "Hyr för en dag, en helg eller längre. Vi anpassar oss efter ditt schema och behov.",
    },
  ],
};

// ── Services page ─────────────────────────────────────────────────────────────
export const services = {
  heading: "Tält & tillbehör",
  subheading:
    "Välj rätt tält för ditt evenemang — vi har storlekar från små " +
    "trädgårdstält till stora evenemangstält. Komplettera gärna med tillbehör.",

  tents: [
    {
      size: "3 × 3 m",
      seats: "Upp till 10 gäster",
      desc: "Perfekt för en intim sammankomst eller som komplement.",
      // Upload to cPanel → /images/tent-3x3.jpg
      image: "/images/tent-3x3.jpg",
    },
    {
      size: "4 × 6 m",
      seats: "Upp till 25 gäster",
      desc: "Idealt för mindre trädgårdsfester och familjeträffar.",
      image: "/images/tent-4x6.jpg",
    },
    {
      size: "5 × 10 m",
      seats: "Upp till 50 gäster",
      desc: "Mångsidigt val för födelsedagar och företagsevent.",
      image: "/images/tent-5x10.jpg",
    },
    {
      size: "6 × 12 m",
      seats: "Upp till 75 gäster",
      desc: "Vår populäraste storlek för bröllop och större fester.",
      image: "/images/tent-6x12.jpg",
    },
    {
      size: "8 × 16 m",
      seats: "Upp till 120 gäster",
      desc: "För stora bröllop, julbord och evenemang.",
      image: "/images/tent-8x16.jpg",
    },
    {
      size: "Skräddarsytt",
      seats: "På förfrågan",
      desc: "Större eller speciallösning? Vi hjälper dig planera.",
      image: "", // no image for this one
    },
  ],

  extras: [
    { title: "Golv", desc: "Stabilt och jämnt underlag oavsett terräng." },
    { title: "Belysning", desc: "Ljusslingor och spotlights för rätt stämning." },
    { title: "Värme", desc: "Värmeaggregat så festen kan fortsätta in på kvällen." },
    { title: "Bord & stolar", desc: "Möbler i olika utföranden för dina gäster." },
    { title: "Porslin & glas", desc: "Tallrikar, bestick och glas i kvalitet." },
    { title: "Dansgolv", desc: "Lägg till en yta där festen verkligen tar fart." },
  ],
};

// ── About page ────────────────────────────────────────────────────────────────
export const about = {
  heading: "Lokala hjältar med tält i bagaget",
  body1:
    "Tälthjältarna är ett lokalt företag som hyr ut partytält och " +
    "evenemangstält. Vi vet hur viktigt det är att festen sitter — från " +
    "första uppställning till sista hämtning. Vårt mål är att din dag ska " +
    "bli enkel, snygg och oförglömlig.",
  // Add your own company story here:
  body2:
    "Fyll i din historia här — grundare, hur bolaget startade, " +
    "referenskunder, certifieringar eller annan information ni vill lyfta.",
  // Upload to cPanel → /images/about-team.jpg
  image: "/images/about-team.jpg",
  imageAlt: "Tälthjältarnas team",

  values: [
    { title: "Kvalitet", desc: "Material och rutiner som håller — varje gång." },
    { title: "Service", desc: "Personlig kontakt och flexibla lösningar." },
    { title: "Pålitlighet", desc: "Vi kommer i tid, river i tid, och håller vad vi lovar." },
  ],
};

// ── Booking page ──────────────────────────────────────────────────────────────
export const booking = {
  heading: "Boka ditt tält",
  subheading:
    "Välj en tid som passar dig nedan, så hör vi av oss för att bekräfta " +
    "detaljerna kring tält, leverans och tillbehör.",

  /**
   * GOOGLE CALENDAR APPOINTMENT SCHEDULE EMBED URL
   * ────────────────────────────────────────────────
   * How to set up day/time restrictions and get the embed URL:
   *
   * 1. Go to calendar.google.com (with the Google account you want bookings on)
   * 2. Click "+ Create" → "Appointment schedule"
   * 3. Fill in title, duration (e.g. 30 min for enquiry calls)
   * 4. Click "Next" → set your AVAILABILITY:
   *    - Pick which DAYS OF THE WEEK you take bookings (uncheck days off)
   *    - Set your hours per day (e.g. 09:00–17:00)
   *    - Under "Date-specific hours" you can BLOCK individual dates
   *      (holidays, vacations, already-booked days) — click "Add date"
   * 5. Under "Booking window": set how far in advance people can book
   *    (e.g. "60 days in advance") and minimum notice (e.g. "2 days")
   * 6. Click "Next" → optionally add intake questions
   *    (e.g. "Type of event?", "Number of guests?", "Tent size needed?")
   * 7. Click "Save"
   * 8. On the appointment schedule page, click "Share" → "Embed"
   * 9. Copy the full URL from the iframe src="..." attribute
   * 10. Paste it below between the quotes
   *
   * Example (not real):
   *   "https://calendar.google.com/calendar/appointments/schedules/AcZssZ..."
   */
  calendarEmbedUrl: "",

  fallbackText:
    "Föredrar du att höra av dig direkt? Ring eller mejla oss — se kontaktuppgifter i sidfoten.",
};
