import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Курсы", href: "#directions" },
  { label: "Преподаватели", href: "#teachers" },
  { label: "Отзывы", href: "#reviews" },
];

const DIRECTIONS = [
  {
    tag: "7–10 лет",
    title: "Scratch",
    subtitle: "Создание игр и анимаций",
    desc: "Дети создают собственные игры и мультфильмы без строчки кода — через блоки и логику",
    color: "#FFD600",
    icon: "🎮",
  },
  {
    tag: "10–14 лет",
    title: "Python",
    subtitle: "Программирование с нуля",
    desc: "Первый настоящий язык: пишем программы, решаем задачи, делаем первые проекты",
    color: "#3DFFD0",
    icon: "🐍",
  },
  {
    tag: "12–16 лет",
    title: "Web",
    subtitle: "Сайты и приложения",
    desc: "HTML, CSS, JavaScript — создаём настоящие сайты, которые работают в интернете",
    color: "#FF6B9D",
    icon: "🌐",
  },
  {
    tag: "14–17 лет",
    title: "AI & Data",
    subtitle: "Искусственный интеллект",
    desc: "Машинное обучение, нейросети, работа с данными — профессии будущего уже сегодня",
    color: "#FFD600",
    icon: "🧠",
  },
  {
    tag: "13–17 лет",
    title: "Unity",
    subtitle: "Разработка игр 2D/3D",
    desc: "Создаём игры на профессиональном движке Unity — от идеи до готового продукта",
    color: "#3DFFD0",
    icon: "🕹️",
  },
  {
    tag: "8–13 лет",
    title: "Роботы",
    subtitle: "Робототехника",
    desc: "Собираем и программируем роботов — соединяем физику, механику и код",
    color: "#FF6B9D",
    icon: "🤖",
  },
];

const TEACHERS = [
  { name: "Алексей Громов", role: "Python & AI", exp: "8 лет", emoji: "👨‍💻" },
  { name: "Марина Светлова", role: "Scratch & Дизайн", exp: "5 лет", emoji: "👩‍🎨" },
  { name: "Дмитрий Козлов", role: "Web & Frontend", exp: "6 лет", emoji: "👨‍🚀" },
  { name: "Ольга Нечаева", role: "Робототехника", exp: "4 года", emoji: "👩‍🔬" },
];

const ACHIEVEMENTS = [
  { num: "1200+", label: "выпускников" },
  { num: "47", label: "наград на олимпиадах" },
  { num: "96%", label: "рекомендуют нас" },
  { num: "5 лет", label: "на рынке" },
];

const PRICING = [
  {
    name: "СТАРТ",
    price: "3 900",
    features: ["4 занятия в месяц", "1 час каждое", "Онлайн или очно", "Доступ к материалам"],
    highlight: false,
  },
  {
    name: "ПРОГРЕСС",
    price: "6 900",
    features: ["8 занятий в месяц", "1.5 часа каждое", "Онлайн или очно", "Домашние задания", "Отчёты для родителей"],
    highlight: true,
  },
  {
    name: "ПРОФИ",
    price: "11 900",
    features: ["Безлимит занятий", "Индивидуальный план", "Менторство 1 на 1", "Подготовка к олимпиадам", "Портфолио"],
    highlight: false,
  },
];

const REVIEWS = [
  { name: "Светлана К.", child: "сын, 11 лет", text: "Максим за 3 месяца сделал свою первую игру! Показывал всем одноклассникам. Невероятно горжусь." },
  { name: "Андрей В.", child: "дочь, 13 лет", text: "Прошли два курса — Scratch и Python. Учителя объясняют понятно, ребёнок в восторге." },
  { name: "Наталья М.", child: "сын, 9 лет", text: "Никита сначала не хотел идти. Теперь сам просит дополнительные уроки. Магия какая-то!" },
  { name: "Игорь Р.", child: "дочь, 15 лет", text: "Настя выиграла региональную олимпиаду по программированию. Без Квантастики это было бы невозможно." },
];

const MARQUEE_ITEMS = [
  "Научим вашего ребёнка создавать игры, сайты и приложения с нуля",
  "Научим вашего ребёнка создавать игры, сайты и приложения с нуля",
  "Научим вашего ребёнка создавать игры, сайты и приложения с нуля",
  "Научим вашего ребёнка создавать игры, сайты и приложения с нуля",
];

export default function Index() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatForm, setChatForm] = useState({ name: "", phone: "", question: "" });
  const [chatSent, setChatSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkOpen, setCheckOpen] = useState(false);
  const [checkForm, setCheckForm] = useState({ region: "", city: "", school: "" });
  const [checkSent, setCheckSent] = useState(false);

  const handleCheckSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckSent(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChatSent(true);
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  type Dot = { top: string; left?: string; right?: string; size: number; color: string };
  const dots: Dot[] = [
    { top: "22%", left: "54%", size: 10, color: "#FFD600" },
    { top: "65%", left: "8%", size: 8, color: "#FFD600" },
    { top: "80%", left: "92%", size: 6, color: "#3DFFD0" },
    { top: "40%", right: "5%", size: 7, color: "#FFD600" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--q-bg)", fontFamily: "'Russo One', sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
        css-bg="rgba(26,21,96,0.95)">
        <div style={{ background: "rgba(26,21,96,0.97)" }}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="font-russo text-2xl tracking-[0.2em] uppercase"
              style={{ color: "var(--q-yellow)", letterSpacing: "0.15em" }}>
              КВАНТАСТИКА
            </a>

            {/* Nav links */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map(l => (
                <button key={l.href} onClick={() => scrollTo(l.href)}
                  className="text-white/80 hover:text-white transition-colors font-nunito font-bold text-sm tracking-wider uppercase">
                  {l.label}
                </button>
              ))}
              <button onClick={() => setCheckOpen(true)}
                className="font-nunito font-bold text-sm tracking-wider uppercase px-4 py-2 transition-all"
                style={{ color: "var(--q-yellow)", border: "1px solid rgba(255,214,0,0.4)", background: "rgba(255,214,0,0.07)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,214,0,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,214,0,0.07)")}>
                🔍 Проверить школу
              </button>
            </div>

            {/* Right: phones + user */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="font-nunito text-right text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                <div>Отдел продаж: <span className="text-white font-bold">+7 (981) 962-15-85</span></div>
                <div>Звонок в школу: <span className="text-white font-bold">+7 (495) 148-58-11</span></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center font-russo text-sm flex-shrink-0"
                  style={{ background: "var(--q-yellow)", color: "#1a1560" }}>
                  ВО
                </div>
                <div className="text-left">
                  <div className="font-russo text-xs text-white leading-tight">Валиев О.Ю.</div>
                  <div className="font-nunito text-xs font-bold leading-tight" style={{ color: "rgba(255,214,0,0.7)" }}>Преподаватель</div>
                </div>
              </div>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ background: "var(--q-bg2)", borderTop: "1px solid rgba(255,255,255,0.1)" }}
            className="lg:hidden px-6 pb-6 space-y-4">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="block w-full text-left py-2 text-white font-nunito font-bold tracking-wider uppercase">
                {l.label}
              </button>
            ))}
            <button onClick={() => { setMenuOpen(false); setChatOpen(true); }}
              className="btn-primary w-full py-3 text-sm tracking-wider justify-center">
              ЗАПИСАТЬСЯ <Icon name="ArrowUpRight" size={16} />
            </button>
          </div>
        )}
      </nav>

      {/* ── MARQUEE STRIP (under nav) ── */}
      <div className="pt-20">
        <div style={{ background: "#120e50", borderBottom: "1px solid rgba(255,214,0,0.2)", borderTop: "1px solid rgba(255,214,0,0.2)" }}
          className="py-2.5 overflow-hidden">
          <div className="animate-marquee flex gap-0 whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0">
                {MARQUEE_ITEMS.map((t, j) => (
                  <span key={j} className="font-russo text-sm tracking-widest px-8"
                    style={{ color: "var(--q-yellow)" }}>
                    {t} <span style={{ color: "rgba(255,214,0,0.4)" }}>/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--q-bg)", minHeight: "90vh" }}>
        <div className="grid-bg absolute inset-0 pointer-events-none" />

        {/* Decorative dots */}
        {dots.map((d, i) => (
          <div key={i} className="absolute rounded-full animate-float pointer-events-none"
            style={{
              top: d.top, left: d.left, right: d.right,
              width: d.size, height: d.size,
              background: d.color,
              animationDelay: `${i * 0.8}s`,
              boxShadow: `0 0 12px ${d.color}`,
            }} />
        ))}

        {/* Decorative code symbols top-right */}
        <div className="absolute top-12 right-8 text-right pointer-events-none hidden lg:block"
          style={{ color: "rgba(61,255,208,0.4)", fontFamily: "monospace", fontSize: "18px", lineHeight: "1.8" }}>
          <div>{"{"}</div>
          <div className="ml-4">{"}/>"}</div>
          <div>{"<div>"}</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 animate-slide-up">
            {/* Giant hero text */}
            <h1 className="font-russo leading-[0.9] mb-0" style={{ color: "var(--q-yellow)" }}>
              <div className="text-[clamp(4rem,11vw,9rem)] tracking-tight">ОНЛАЙН-ШКОЛА</div>
              <div className="text-[clamp(2.8rem,7.5vw,7rem)] tracking-tight">ПРОГРАММИРОВАНИЯ</div>
              <div className="text-[clamp(3.5rem,10vw,8.5rem)] tracking-tight"
                style={{ color: "var(--q-yellow)", WebkitTextStroke: "0px" }}>
                КВАНТАСТИКА
              </div>
            </h1>
          </div>

          {/* Right side illustration placeholder */}
          <div className="hidden lg:flex flex-shrink-0 w-72 items-center justify-center relative">
            <div style={{
              width: 260, height: 260,
              border: "2px solid rgba(61,255,208,0.3)",
              background: "rgba(61,255,208,0.04)",
              position: "relative",
            }} className="animate-float">
              {/* Isometric code block illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div style={{ color: "rgba(61,255,208,0.6)", fontFamily: "monospace", fontSize: 13, lineHeight: 1.6 }}>
                  <div style={{ color: "var(--q-yellow)" }}>{"function learn() {"}</div>
                  <div className="ml-4" style={{ color: "#3DFFD0" }}>{"code();"}</div>
                  <div className="ml-4" style={{ color: "#FF6B9D" }}>{"create();"}</div>
                  <div className="ml-4" style={{ color: "#FFD600" }}>{"repeat();"}</div>
                  <div style={{ color: "var(--q-yellow)" }}>{"}"}</div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4" style={{ borderTop: "2px solid var(--q-yellow)", borderLeft: "2px solid var(--q-yellow)" }} />
              <div className="absolute -top-1 -right-1 w-4 h-4" style={{ borderTop: "2px solid var(--q-yellow)", borderRight: "2px solid var(--q-yellow)" }} />
              <div className="absolute -bottom-1 -left-1 w-4 h-4" style={{ borderBottom: "2px solid var(--q-yellow)", borderLeft: "2px solid var(--q-yellow)" }} />
              <div className="absolute -bottom-1 -right-1 w-4 h-4" style={{ borderBottom: "2px solid var(--q-yellow)", borderRight: "2px solid var(--q-yellow)" }} />
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="relative max-w-7xl mx-auto px-6 pb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="font-nunito font-bold text-base leading-snug"
              style={{ color: "var(--q-yellow)", maxWidth: 260 }}>
              Запишитесь на бесплатный<br />вводный урок
            </div>
            <button onClick={() => setChatOpen(true)}
              className="btn-primary px-10 py-4 text-base tracking-widest animate-glow-pulse">
              ЗАПИСАТЬСЯ <Icon name="ArrowUpRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ background: "#120e50", borderTop: "1px solid rgba(255,214,0,0.15)", borderBottom: "1px solid rgba(255,214,0,0.15)" }}
        className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="text-center">
              <div className="font-russo text-4xl mb-1" style={{ color: "var(--q-yellow)" }}>{a.num}</div>
              <div className="font-nunito text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>{a.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIRECTIONS ── */}
      <section id="directions" className="py-20 px-6 relative" style={{ background: "var(--q-bg)" }}>
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="section-tag mb-4">Направления</div>
            <h2 className="font-russo text-4xl sm:text-5xl text-white yellow-line">
              НАШИ КУРСЫ
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.08)" }}>
            {DIRECTIONS.map((d, i) => (
              <div key={i} className="q-card p-8 cursor-pointer group relative overflow-hidden"
                style={{ background: "var(--q-bg2)" }}>
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
                  style={{ background: d.color, opacity: 0.3 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")} />

                <div className="text-3xl mb-4">{d.icon}</div>
                <div className="font-nunito text-xs font-bold tracking-widest mb-2 uppercase"
                  style={{ color: d.color }}>
                  {d.tag}
                </div>
                <div className="font-russo text-2xl text-white mb-1">{d.title}</div>
                <div className="font-nunito text-sm font-bold mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {d.subtitle}
                </div>
                <p className="font-nunito text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {d.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 font-nunito text-sm font-bold transition-all group-hover:gap-3"
                  style={{ color: d.color }}>
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHERS ── */}
      <section id="teachers" className="py-20 px-6" style={{ background: "#120e50" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="section-tag mb-4">Команда</div>
            <h2 className="font-russo text-4xl sm:text-5xl text-white yellow-line">ПРЕПОДАВАТЕЛИ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((t, i) => (
              <div key={i} className="q-card p-6 text-center group"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-16 h-16 mx-auto flex items-center justify-center text-4xl mb-4"
                  style={{ border: "1px solid rgba(255,214,0,0.3)", background: "rgba(255,214,0,0.05)" }}>
                  {t.emoji}
                </div>
                <div className="font-russo text-base text-white mb-1">{t.name}</div>
                <div className="font-nunito text-sm font-bold mb-2" style={{ color: "var(--q-teal)" }}>{t.role}</div>
                <div className="font-nunito text-xs font-bold px-3 py-1 inline-block"
                  style={{ color: "var(--q-yellow)", border: "1px solid rgba(255,214,0,0.3)", background: "rgba(255,214,0,0.05)" }}>
                  Опыт: {t.exp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 px-6 relative" style={{ background: "var(--q-bg)" }}>
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="section-tag mb-4">Стоимость</div>
            <h2 className="font-russo text-4xl sm:text-5xl text-white yellow-line">ТАРИФЫ</h2>
            <p className="font-nunito font-bold mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Первое занятие — бесплатно
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <div key={i} className="relative p-8 flex flex-col"
                style={{
                  background: p.highlight ? "rgba(255,214,0,0.08)" : "rgba(255,255,255,0.04)",
                  border: p.highlight ? "1px solid rgba(255,214,0,0.6)" : "1px solid rgba(255,255,255,0.1)",
                }}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-russo text-xs px-4 py-1"
                    style={{ background: "var(--q-yellow)", color: "#1a1560" }}>
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                {/* Corner accents for highlighted */}
                {p.highlight && <>
                  <div className="absolute -top-px -left-px w-5 h-5" style={{ borderTop: "2px solid var(--q-yellow)", borderLeft: "2px solid var(--q-yellow)" }} />
                  <div className="absolute -top-px -right-px w-5 h-5" style={{ borderTop: "2px solid var(--q-yellow)", borderRight: "2px solid var(--q-yellow)" }} />
                  <div className="absolute -bottom-px -left-px w-5 h-5" style={{ borderBottom: "2px solid var(--q-yellow)", borderLeft: "2px solid var(--q-yellow)" }} />
                  <div className="absolute -bottom-px -right-px w-5 h-5" style={{ borderBottom: "2px solid var(--q-yellow)", borderRight: "2px solid var(--q-yellow)" }} />
                </>}

                <div className="font-russo text-lg mb-4" style={{ color: p.highlight ? "var(--q-yellow)" : "rgba(255,255,255,0.7)" }}>
                  {p.name}
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="font-russo text-5xl" style={{ color: p.highlight ? "var(--q-yellow)" : "white" }}>{p.price}</span>
                  <span className="font-nunito text-sm font-bold mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>₽/мес</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-3 font-nunito text-sm font-semibold"
                      style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span style={{ color: "var(--q-yellow)", flexShrink: 0 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setChatOpen(true)}
                  className={`w-full py-3.5 font-russo text-sm tracking-widest ${p.highlight ? "btn-primary" : "btn-outline"}`}>
                  ЗАПИСАТЬСЯ <Icon name="ArrowUpRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 px-6" style={{ background: "#120e50" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="section-tag mb-4">Родители о нас</div>
            <h2 className="font-russo text-4xl sm:text-5xl text-white yellow-line">ОТЗЫВЫ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="q-card p-6 flex flex-col"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "var(--q-yellow)", fontSize: 16 }}>★</span>
                  ))}
                </div>
                <p className="font-nunito text-sm font-semibold leading-relaxed flex-1 mb-5"
                  style={{ color: "rgba(255,255,255,0.7)" }}>
                  «{r.text}»
                </p>
                <div>
                  <div className="font-russo text-sm text-white">{r.name}</div>
                  <div className="font-nunito text-xs font-bold" style={{ color: "var(--q-teal)" }}>{r.child}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-20 px-6 relative" style={{ background: "var(--q-bg)" }}>
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag mb-4">Контакты</div>
              <h2 className="font-russo text-4xl sm:text-5xl text-white mb-8 yellow-line">СВЯЖИТЕСЬ С НАМИ</h2>
              <div className="space-y-5">
                {[
                  { label: "Отдел продаж", val: "+7 (981) 962-15-85" },
                  { label: "Звонок в школу", val: "+7 (495) 148-58-11" },
                  { label: "Email", val: "hello@kvantastika.ru" },
                  { label: "Адрес", val: "г. Москва, ул. Технологическая, д. 12" },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-1 h-6 mt-0.5 flex-shrink-0" style={{ background: "var(--q-yellow)" }} />
                    <div>
                      <div className="font-nunito text-xs font-bold uppercase tracking-wider mb-0.5"
                        style={{ color: "rgba(255,255,255,0.4)" }}>{c.label}</div>
                      <div className="font-russo text-base text-white">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 relative"
              style={{ background: "rgba(255,214,0,0.05)", border: "1px solid rgba(255,214,0,0.2)" }}>
              {/* Corner decorations */}
              <div className="absolute -top-px -left-px w-6 h-6" style={{ borderTop: "2px solid var(--q-yellow)", borderLeft: "2px solid var(--q-yellow)" }} />
              <div className="absolute -top-px -right-px w-6 h-6" style={{ borderTop: "2px solid var(--q-yellow)", borderRight: "2px solid var(--q-yellow)" }} />
              <div className="absolute -bottom-px -left-px w-6 h-6" style={{ borderBottom: "2px solid var(--q-yellow)", borderLeft: "2px solid var(--q-yellow)" }} />
              <div className="absolute -bottom-px -right-px w-6 h-6" style={{ borderBottom: "2px solid var(--q-yellow)", borderRight: "2px solid var(--q-yellow)" }} />

              <h3 className="font-russo text-2xl mb-2" style={{ color: "var(--q-yellow)" }}>БЕСПЛАТНЫЙ УРОК</h3>
              <p className="font-nunito font-semibold text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                Запишитесь прямо сейчас — первое занятие полностью бесплатно
              </p>
              <button onClick={() => setChatOpen(true)}
                className="btn-primary w-full py-4 text-sm tracking-widest justify-center">
                ЗАПИСАТЬСЯ <Icon name="ArrowUpRight" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0d0a3d", borderTop: "1px solid rgba(255,214,0,0.15)" }}
        className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-russo text-xl tracking-[0.15em]" style={{ color: "var(--q-yellow)" }}>
            КВАНТАСТИКА
          </span>
          <span className="font-nunito text-xs font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2024 Квантастика. Все права защищены.
          </span>
          <div className="flex gap-6">
            {["ВКонтакте", "Telegram", "WhatsApp"].map(s => (
              <a key={s} href="#"
                className="font-nunito text-xs font-bold transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── FLOATING CHAT BUTTON ── */}
      <button onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center animate-chat-bounce"
        style={{
          background: "var(--q-yellow)",
          color: "#1a1560",
          boxShadow: "0 0 20px rgba(255,214,0,0.5)",
        }}
        title="Задать вопрос">
        <Icon name="MessageCircle" size={22} />
      </button>

      {/* ── CHAT MODAL ── */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(13,10,61,0.85)", backdropFilter: "blur(8px)" }}
          onClick={e => e.target === e.currentTarget && setChatOpen(false)}>
          <div className="w-full max-w-md animate-slide-up relative"
            style={{ background: "var(--q-bg2)", border: "1px solid rgba(255,214,0,0.3)" }}>
            {/* Corner accents */}
            <div className="absolute -top-px -left-px w-5 h-5" style={{ borderTop: "2px solid var(--q-yellow)", borderLeft: "2px solid var(--q-yellow)" }} />
            <div className="absolute -top-px -right-px w-5 h-5" style={{ borderTop: "2px solid var(--q-yellow)", borderRight: "2px solid var(--q-yellow)" }} />
            <div className="absolute -bottom-px -left-px w-5 h-5" style={{ borderBottom: "2px solid var(--q-yellow)", borderLeft: "2px solid var(--q-yellow)" }} />
            <div className="absolute -bottom-px -right-px w-5 h-5" style={{ borderBottom: "2px solid var(--q-yellow)", borderRight: "2px solid var(--q-yellow)" }} />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div>
                <div className="font-russo text-base" style={{ color: "var(--q-yellow)" }}>ЗАДАТЬ ВОПРОС</div>
                <div className="font-nunito text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Ответим в течение 15 минут
                </div>
              </div>
              <button onClick={() => { setChatOpen(false); setChatSent(false); }}
                className="text-white/50 hover:text-white transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="p-6">
              {chatSent ? (
                <div className="text-center py-8 animate-bounce-in">
                  <div className="text-5xl mb-4">✅</div>
                  <div className="font-russo text-xl mb-2" style={{ color: "var(--q-yellow)" }}>ОТЛИЧНО!</div>
                  <p className="font-nunito font-semibold text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Мы получили ваш вопрос и свяжемся в ближайшее время!
                  </p>
                  <button onClick={() => { setChatSent(false); setChatForm({ name: "", phone: "", question: "" }); }}
                    className="btn-outline mt-6 px-6 py-2.5 text-sm tracking-wider">
                    ЕЩЁ ВОПРОС
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: "Ваше имя", key: "name", placeholder: "Например: Анна", type: "text" },
                    { label: "Телефон", key: "phone", placeholder: "+7 (___) ___-__-__", type: "tel" },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block font-nunito text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: "rgba(255,255,255,0.5)" }}>{f.label}</label>
                      <input type={f.type} required placeholder={f.placeholder}
                        value={chatForm[f.key as keyof typeof chatForm]}
                        onChange={e => setChatForm(p => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full px-4 py-3 font-nunito font-semibold text-sm text-white outline-none transition-colors"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          borderRadius: 0,
                        }}
                        onFocus={e => (e.target.style.borderColor = "rgba(255,214,0,0.6)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-nunito text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: "rgba(255,255,255,0.5)" }}>Ваш вопрос</label>
                    <textarea placeholder="Сколько стоит курс? Какой возраст подходит?..." rows={3}
                      value={chatForm.question}
                      onChange={e => setChatForm(p => ({ ...p, question: e.target.value }))}
                      className="w-full px-4 py-3 font-nunito font-semibold text-sm text-white outline-none transition-colors resize-none"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: 0,
                      }}
                      onFocus={e => (e.target.style.borderColor = "rgba(255,214,0,0.6)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                  <button type="submit"
                    className="btn-primary w-full py-4 text-sm tracking-widest justify-center">
                    ОТПРАВИТЬ <Icon name="ArrowUpRight" size={16} />
                  </button>
                  <p className="font-nunito text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      {/* ── CHECK SCHOOL MODAL ── */}
      {checkOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(13,10,61,0.9)", backdropFilter: "blur(10px)" }}
          onClick={e => e.target === e.currentTarget && (setCheckOpen(false), setCheckSent(false))}>
          <div className="w-full max-w-xl animate-slide-up relative"
            style={{ background: "var(--q-bg2)", border: "1px solid rgba(255,214,0,0.35)" }}>

            {/* Corner accents */}
            {["-top-px -left-px border-t-2 border-l-2", "-top-px -right-px border-t-2 border-r-2",
              "-bottom-px -left-px border-b-2 border-l-2", "-bottom-px -right-px border-b-2 border-r-2"].map((cls, i) => (
              <div key={i} className={`absolute w-5 h-5 ${cls}`} style={{ borderColor: "var(--q-yellow)" }} />
            ))}

            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div>
                <div className="font-russo text-xl" style={{ color: "var(--q-yellow)" }}>
                  🔍 ПРОВЕРИТЬ ШКОЛУ
                </div>
                <div className="font-nunito text-xs font-semibold mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Найдите вашу школу в базе Квантастики
                </div>
              </div>
              <button onClick={() => { setCheckOpen(false); setCheckSent(false); }}
                className="text-white/40 hover:text-white transition-colors ml-4">
                <Icon name="X" size={22} />
              </button>
            </div>

            <div className="px-8 py-8">
              {checkSent ? (
                <div className="text-center py-6 animate-bounce-in">
                  <div className="text-5xl mb-4">✅</div>
                  <div className="font-russo text-xl mb-2" style={{ color: "var(--q-yellow)" }}>НАЙДЕНО!</div>
                  <p className="font-nunito font-semibold text-sm mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {checkForm.school && <>Школа: <span className="text-white font-bold">«{checkForm.school}»</span><br /></>}
                    {checkForm.city && <>{checkForm.city}, </>}{checkForm.region}
                  </p>
                  <p className="font-nunito text-sm mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Данная школа работает с платформой Квантастика
                  </p>
                  <button onClick={() => { setCheckSent(false); setCheckForm({ region: "", city: "", school: "" }); }}
                    className="btn-outline mt-6 px-6 py-2.5 text-sm tracking-wider">
                    ПРОВЕРИТЬ ЕЩЁ
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCheckSubmit} className="space-y-5">
                  {/* Region */}
                  <div>
                    <label className="block font-nunito text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.45)" }}>
                      Область / Регион <span style={{ color: "var(--q-yellow)" }}>*</span>
                    </label>
                    <input type="text" required placeholder="Например: Московская область"
                      value={checkForm.region}
                      onChange={e => setCheckForm(p => ({ ...p, region: e.target.value }))}
                      className="w-full px-5 py-4 font-nunito font-semibold text-base text-white outline-none transition-colors placeholder:text-white/25"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 0 }}
                      onFocus={e => (e.target.style.borderColor = "rgba(255,214,0,0.7)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block font-nunito text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.45)" }}>
                      Населённый пункт <span style={{ color: "var(--q-yellow)" }}>*</span>
                    </label>
                    <input type="text" required placeholder="Например: Химки"
                      value={checkForm.city}
                      onChange={e => setCheckForm(p => ({ ...p, city: e.target.value }))}
                      className="w-full px-5 py-4 font-nunito font-semibold text-base text-white outline-none transition-colors placeholder:text-white/25"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 0 }}
                      onFocus={e => (e.target.style.borderColor = "rgba(255,214,0,0.7)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>

                  {/* School */}
                  <div>
                    <label className="block font-nunito text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.45)" }}>
                      № школы или название <span style={{ color: "var(--q-yellow)" }}>*</span>
                    </label>
                    <input type="text" required placeholder="Например: 47 или «Гимназия №3»"
                      value={checkForm.school}
                      onChange={e => setCheckForm(p => ({ ...p, school: e.target.value }))}
                      className="w-full px-5 py-4 font-nunito font-semibold text-base text-white outline-none transition-colors placeholder:text-white/25"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 0 }}
                      onFocus={e => (e.target.style.borderColor = "rgba(255,214,0,0.7)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>

                  <button type="submit"
                    className="btn-primary w-full py-4 text-sm tracking-widest justify-center mt-2">
                    НАЙТИ ШКОЛУ <Icon name="Search" size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}