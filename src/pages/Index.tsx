import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Направления", href: "#directions" },
  { label: "О школе", href: "#about" },
  { label: "Преподаватели", href: "#teachers" },
  { label: "Достижения", href: "#achievements" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const DIRECTIONS = [
  { emoji: "🤖", title: "Scratch и создание игр", age: "7–10 лет", color: "#5B3FCC", bg: "#EBE8FF", desc: "Дети создают анимации и игры в визуальной среде Scratch без единой строчки кода" },
  { emoji: "🐍", title: "Python для начинающих", age: "10–14 лет", color: "#1DB8A0", bg: "#D5F5EF", desc: "Первый настоящий язык программирования — учимся решать задачи и писать скрипты" },
  { emoji: "🌐", title: "Web-разработка", age: "12–16 лет", color: "#FF6B9D", bg: "#FFE8F2", desc: "HTML, CSS и JavaScript — создаём сайты и приложения с нуля" },
  { emoji: "🧠", title: "Искусственный интеллект", age: "14–17 лет", color: "#E8A400", bg: "#FFF8DC", desc: "Обучаем нейросети, работаем с данными и строим умные системы" },
  { emoji: "🎮", title: "Unity — разработка игр", age: "13–17 лет", color: "#5B3FCC", bg: "#EBE8FF", desc: "Профессиональная разработка 2D/3D игр на движке Unity и C#" },
  { emoji: "🔧", title: "Робототехника", age: "8–13 лет", color: "#1DB8A0", bg: "#D5F5EF", desc: "Собираем и программируем роботов — от простых конструкций до сложных механизмов" },
];

const TEACHERS = [
  { name: "Алексей Громов", role: "Основатель, Python & AI", exp: "8 лет опыта", emoji: "👨‍💻" },
  { name: "Марина Светлова", role: "Scratch & Геймдизайн", exp: "5 лет опыта", emoji: "👩‍🎨" },
  { name: "Дмитрий Козлов", role: "Web & Frontend", exp: "6 лет опыта", emoji: "👨‍🚀" },
  { name: "Ольга Нечаева", role: "Робототехника", exp: "4 года опыта", emoji: "👩‍🔬" },
];

const ACHIEVEMENTS = [
  { num: "1200+", label: "выпускников", emoji: "🎓" },
  { num: "47", label: "наград на олимпиадах", emoji: "🏆" },
  { num: "96%", label: "родителей рекомендуют нас", emoji: "❤️" },
  { num: "5 лет", label: "на рынке образования", emoji: "⭐" },
];

const PRICING = [
  {
    name: "Старт",
    price: "3 900",
    color: "#5B3FCC",
    bg: "#EBE8FF",
    features: ["4 занятия в месяц", "1 час каждое", "Онлайн или очно", "Доступ к материалам"],
    popular: false,
  },
  {
    name: "Прогресс",
    price: "6 900",
    color: "#1DB8A0",
    bg: "#D5F5EF",
    features: ["8 занятий в месяц", "1.5 часа каждое", "Онлайн или очно", "Домашние задания", "Отчёты для родителей"],
    popular: true,
  },
  {
    name: "Профи",
    price: "11 900",
    color: "#FF6B9D",
    bg: "#FFE8F2",
    features: ["Безлимит занятий", "Индивидуальный план", "Менторство 1 на 1", "Подготовка к олимпиадам", "Портфолио проектов"],
    popular: false,
  },
];

const REVIEWS = [
  { name: "Светлана К.", child: "сын 11 лет", text: "Максим за 3 месяца сделал свою первую игру! Он был так горд — показывал всем одноклассникам. Спасибо Квантастике!", rating: 5 },
  { name: "Андрей В.", child: "дочь 13 лет", text: "Прошли уже два курса — Scratch и Python. Учителя замечательные, всегда объясняют понятно и с энтузиазмом.", rating: 5 },
  { name: "Наталья М.", child: "сын 9 лет", text: "Никита сначала не хотел идти, думал что скучно. Теперь сам просит дополнительные уроки! Магия какая-то.", rating: 5 },
  { name: "Игорь Р.", child: "дочь 15 лет", text: "Настя выиграла региональную олимпиаду по программированию. Без Квантастики это было бы невозможно.", rating: 5 },
];

const FLOATING = ["⭐", "🚀", "💡", "🎯", "🔮", "⚡", "🌟", "🎮"];

export default function Index() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatForm, setChatForm] = useState({ name: "", phone: "", question: "" });
  const [chatSent, setChatSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChatSent(true);
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-nunito bg-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl animate-wiggle inline-block">🧠</span>
            <span className="font-russo text-xl text-q-purple tracking-wider uppercase">Квантастика</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-sm font-bold text-gray-600 hover:text-q-violet transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-q-teal rounded-full transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
            <button onClick={() => setChatOpen(true)} className="btn-primary px-5 py-2.5 text-sm">
              Записаться
            </button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-q-purple">
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-q-light px-4 pb-4 space-y-2 shadow-lg">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="block w-full text-left py-2 font-bold text-gray-700 hover:text-q-violet">
                {l.label}
              </button>
            ))}
            <button onClick={() => { setMenuOpen(false); setChatOpen(true); }}
              className="btn-primary w-full px-5 py-2.5 text-sm">
              Записаться бесплатно
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #C8EDEA 0%, #D5CCFF 50%, #EBE8FF 100%)" }}>
        <div className="pixel-bg absolute inset-0 opacity-40" />
        <div className="stars-bg absolute inset-0" />

        {FLOATING.map((el, i) => (
          <div key={i}
            className={`absolute text-2xl md:text-3xl select-none pointer-events-none ${i % 2 === 0 ? "animate-float" : "animate-float2"}`}
            style={{ left: `${8 + (i * 12) % 84}%`, top: `${10 + (i * 17) % 70}%`, animationDelay: `${i * 0.6}s`, opacity: 0.65 }}>
            {el}
          </div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="animate-slide-up">
            <div className="section-tag mb-6">🚀 Школа программирования для детей</div>
            <h1 className="font-russo text-4xl sm:text-5xl xl:text-6xl leading-tight text-q-purple mb-6">
              ОТКРОЙ МИР<br />
              <span style={{ color: "var(--q-violet)" }}>ТЕХНОЛОГИЙ</span><br />
              <span style={{ background: "linear-gradient(135deg, #1DB8A0, #5B3FCC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                ВМЕСТЕ С НАМИ!
              </span>
            </h1>
            <p className="text-lg text-gray-600 font-semibold mb-8 max-w-lg leading-relaxed">
              Квантастика — игровая школа, где дети от 7 до 17 лет учатся программировать,
              создавать игры и строить будущее через практику и творчество
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setChatOpen(true)} className="btn-primary px-8 py-4 text-lg">
                🎮 Записаться бесплатно
              </button>
              <button onClick={() => scrollTo("#directions")} className="btn-teal px-8 py-4 text-lg">
                Направления →
              </button>
            </div>
            <div className="mt-10 flex items-center gap-8 flex-wrap">
              {[["7–17", "лет"], ["6", "направлений"], ["1200+", "учеников"]].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-russo text-2xl text-q-violet">{n}</div>
                  <div className="text-sm text-gray-500 font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center animate-float">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, #5B3FCC, #1DB8A0)" }} />
              <img
                src="https://cdn.poehali.dev/projects/447cdf21-ede9-440a-b225-e8c4bde91d6f/files/48e6136d-aa19-4380-b718-da6d1fb926bc.jpg"
                alt="Дети программируют"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                style={{ border: "4px solid rgba(91,63,204,0.3)" }}
              />
              <div className="absolute -top-4 -right-4 bg-q-yellow text-q-purple rounded-2xl px-4 py-2 font-russo text-sm shadow-lg animate-wiggle">
                🏆 Топ-школа 2024
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐⭐⭐⭐⭐</span>
                  <div>
                    <div className="font-russo text-xs text-q-purple">4.9 / 5.0</div>
                    <div className="text-xs text-gray-500">327 отзывов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-q-violet opacity-70">
          <span className="text-sm font-bold">Листай вниз</span>
          <div className="animate-bounce"><Icon name="ChevronDown" size={24} /></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-q-purple py-3 overflow-hidden">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 shrink-0">
              {["🤖 Scratch", "🐍 Python", "🌐 Web", "🧠 AI", "🎮 Unity", "🔧 Роботы",
                "⭐ Олимпиады", "🚀 Стартапы", "💡 Проекты", "🏆 Победы"].map(t => (
                <span key={t} className="text-white font-russo text-sm tracking-widest">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DIRECTIONS */}
      <section id="directions" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 mx-auto w-fit">🎯 Направления</div>
            <h2 className="font-russo text-3xl sm:text-4xl text-q-purple mb-4">ЧЕМ МЫ ЗАНИМАЕМСЯ</h2>
            <p className="text-gray-500 font-semibold max-w-xl mx-auto">
              Выбери направление — мы подберём курс под возраст и уровень подготовки
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIRECTIONS.map((d, i) => (
              <div key={i} className="card-hover rounded-3xl p-6 cursor-pointer group"
                style={{ background: d.bg, border: `2px solid ${d.color}30` }}>
                <div className="text-4xl mb-4">{d.emoji}</div>
                <div className="font-russo text-lg mb-2" style={{ color: d.color }}>{d.title}</div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 text-white"
                  style={{ background: d.color }}>
                  {d.age}
                </span>
                <p className="text-gray-600 text-sm font-semibold leading-relaxed">{d.desc}</p>
                <div className="mt-4 flex items-center gap-1 font-bold text-sm group-hover:gap-3 transition-all"
                  style={{ color: d.color }}>
                  Подробнее <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #EBE8FF 0%, #D5F5EF 100%)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-tag mb-6">🏫 О школе</div>
            <h2 className="font-russo text-3xl sm:text-4xl text-q-purple mb-6">
              ПОЧЕМУ РОДИТЕЛИ<br />ВЫБИРАЮТ НАС?
            </h2>
            <div className="space-y-4">
              {[
                ["🎯", "Игровой формат обучения", "Дети учатся через создание реальных проектов — игр, сайтов, роботов"],
                ["👩‍🏫", "Опытные педагоги", "Преподаватели с практическим опытом в IT и педагогическим образованием"],
                ["📍", "Онлайн и очно", "Выбирай удобный формат — занятия проходят как в классах, так и дистанционно"],
                ["🔄", "Гибкое расписание", "Подбираем время занятий под загруженность ребёнка в школе"],
              ].map(([emoji, title, desc]) => (
                <div key={title as string} className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm">
                  <span className="text-2xl flex-shrink-0">{emoji}</span>
                  <div>
                    <div className="font-bold text-q-purple">{title}</div>
                    <div className="text-sm text-gray-500 font-semibold mt-1">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/447cdf21-ede9-440a-b225-e8c4bde91d6f/files/3767cea9-51f0-47d0-9d03-186d2565c731.jpg"
              alt="Обучение в Квантастике"
              className="rounded-3xl shadow-2xl w-full object-cover animate-float2"
              style={{ border: "4px solid rgba(91,63,204,0.2)" }}
            />
            <div className="absolute -bottom-6 -right-6 bg-q-yellow rounded-2xl p-4 shadow-xl animate-bounce-in">
              <div className="font-russo text-q-purple text-sm">5 лет опыта</div>
              <div className="text-xs text-gray-600 font-semibold">обучения детей</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section id="teachers" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 mx-auto w-fit">👩‍🏫 Преподаватели</div>
            <h2 className="font-russo text-3xl sm:text-4xl text-q-purple mb-4">НАША КОМАНДА</h2>
            <p className="text-gray-500 font-semibold">IT-специалисты с призванием учить детей</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((t, i) => (
              <div key={i} className="card-hover text-center rounded-3xl p-8 border-2 border-q-light bg-white">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-4"
                  style={{ background: "linear-gradient(135deg, #EBE8FF, #D5F5EF)", boxShadow: "0 0 20px rgba(91,63,204,0.2)" }}>
                  {t.emoji}
                </div>
                <div className="font-russo text-q-purple text-base mb-1">{t.name}</div>
                <div className="text-q-teal font-bold text-sm mb-3">{t.role}</div>
                <span className="inline-block bg-q-light text-q-violet text-xs font-bold px-3 py-1 rounded-full">
                  {t.exp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-20 px-4 sm:px-6 bg-q-purple">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 text-sm font-bold mb-4">
              🏆 Достижения
            </div>
            <h2 className="font-russo text-3xl sm:text-4xl text-white mb-4">НАШИ РЕЗУЛЬТАТЫ</h2>
            <p className="text-white/70 font-semibold">Цифры, которыми мы гордимся</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className="text-center rounded-3xl p-8"
                style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
                <div className="text-4xl mb-3">{a.emoji}</div>
                <div className="font-russo text-4xl text-q-yellow mb-2">{a.num}</div>
                <div className="text-white/80 font-bold">{a.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="font-russo text-xl text-white text-center mb-8">🏅 Победы на олимпиадах</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                ["2023", "🥇 1 место", "Олимпиада «КодFest», г. Москва"],
                ["2024", "🥈 2 место", "Всероссийская по робототехнике"],
                ["2024", "🥇 1 место", "Региональный хакатон школьников"],
              ].map(([year, medal, name]) => (
                <div key={name} className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-q-yellow font-russo text-sm mb-1">{year}</div>
                  <div className="text-white font-russo text-lg mb-1">{medal}</div>
                  <div className="text-white/70 text-xs font-semibold">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 mx-auto w-fit">💎 Тарифы</div>
            <h2 className="font-russo text-3xl sm:text-4xl text-q-purple mb-4">ВЫБЕРИ СВОЙ ПЛАН</h2>
            <p className="text-gray-500 font-semibold">Первое занятие — бесплатно!</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 items-stretch">
            {PRICING.map((p, i) => (
              <div key={i} className={`relative rounded-3xl p-8 card-hover flex flex-col ${p.popular ? "scale-105 shadow-2xl" : "border-2"}`}
                style={p.popular
                  ? { background: `linear-gradient(135deg, ${p.color}, ${p.color}CC)`, border: "none" }
                  : { background: p.bg, borderColor: `${p.color}30` }}>
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-q-yellow text-q-purple font-russo text-sm px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    ⭐ Популярный
                  </div>
                )}
                <div className={`font-russo text-xl mb-2 ${p.popular ? "text-white" : ""}`}
                  style={!p.popular ? { color: p.color } : {}}>
                  {p.name}
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`font-russo text-4xl ${p.popular ? "text-white" : ""}`}
                    style={!p.popular ? { color: p.color } : {}}>
                    {p.price}
                  </span>
                  <span className={`text-sm font-bold mb-2 ${p.popular ? "text-white/80" : "text-gray-500"}`}>₽/мес</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-sm font-semibold ${p.popular ? "text-white" : "text-gray-600"}`}>
                      <span>✅</span> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setChatOpen(true)}
                  className={`w-full py-3 rounded-2xl font-russo text-sm transition-all hover:scale-105 ${p.popular ? "bg-white text-q-violet" : "text-white"}`}
                  style={!p.popular ? { background: p.color } : {}}>
                  Выбрать план
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #EBE8FF, #D5F5EF)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 mx-auto w-fit">💬 Отзывы</div>
            <h2 className="font-russo text-3xl sm:text-4xl text-q-purple mb-4">ЧТО ГОВОРЯТ РОДИТЕЛИ</h2>
            <p className="text-gray-500 font-semibold">Реальные истории наших учеников</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl p-6 shadow-sm flex flex-col">
                <div className="flex mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <span key={j} className="text-q-yellow text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-5 flex-1">«{r.text}»</p>
                <div>
                  <div className="font-bold text-q-purple">{r.name}</div>
                  <div className="text-q-teal text-xs font-bold">{r.child}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 mx-auto w-fit">📍 Контакты</div>
            <h2 className="font-russo text-3xl sm:text-4xl text-q-purple mb-4">МЫ РЯДОМ</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { emoji: "📍", title: "Адрес", info: "г. Москва, ул. Технологическая, д. 12", sub: "Метро: Технопарк" },
              { emoji: "📞", title: "Телефон", info: "+7 (495) 000-00-00", sub: "Пн–Пт: 9:00–20:00" },
              { emoji: "✉️", title: "Email", info: "hello@kvantastika.ru", sub: "Ответим в течение часа" },
            ].map(c => (
              <div key={c.title} className="card-hover text-center rounded-3xl p-8 bg-q-light">
                <div className="text-4xl mb-4">{c.emoji}</div>
                <div className="font-russo text-q-purple mb-2">{c.title}</div>
                <div className="font-bold text-gray-800 mb-1">{c.info}</div>
                <div className="text-sm text-gray-500">{c.sub}</div>
              </div>
            ))}
          </div>
          <div className="text-center rounded-3xl p-12"
            style={{ background: "linear-gradient(135deg, #3D2C8D, #5B3FCC)" }}>
            <h3 className="font-russo text-2xl sm:text-3xl text-white mb-4">🚀 ГОТОВ НАЧАТЬ?</h3>
            <p className="text-white/80 font-semibold mb-8 max-w-md mx-auto">
              Запишись на бесплатное пробное занятие — и твой ребёнок влюбится в программирование!
            </p>
            <button onClick={() => setChatOpen(true)}
              className="px-10 py-4 bg-q-yellow text-q-purple font-russo text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
              🎮 Записаться бесплатно
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-q-purple text-white py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <span className="font-russo tracking-wider">КВАНТАСТИКА</span>
          </div>
          <div className="text-white/60 text-sm font-semibold">© 2024 Квантастика. Все права защищены.</div>
          <div className="flex gap-4">
            {["ВКонтакте", "Telegram", "WhatsApp"].map(s => (
              <a key={s} href="#" className="text-white/60 hover:text-q-yellow transition-colors text-sm font-bold">{s}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* CHAT BUTTON */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full text-white shadow-2xl flex items-center justify-center text-2xl animate-chat-bounce"
        style={{ background: "linear-gradient(135deg, #5B3FCC, #1DB8A0)", boxShadow: "0 0 25px rgba(91,63,204,0.5)" }}
        title="Задать вопрос">
        💬
      </button>

      {/* CHAT MODAL */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(61,44,141,0.6)", backdropFilter: "blur(6px)" }}
          onClick={e => e.target === e.currentTarget && setChatOpen(false)}>
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl animate-slide-up overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4"
              style={{ background: "linear-gradient(135deg, #3D2C8D, #5B3FCC)" }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-russo text-white">Задать вопрос</div>
                  <div className="text-white/70 text-xs">Ответим в течение 15 минут</div>
                </div>
              </div>
              <button onClick={() => { setChatOpen(false); setChatSent(false); }}
                className="text-white/70 hover:text-white transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="p-6">
              {chatSent ? (
                <div className="text-center py-8 animate-bounce-in">
                  <div className="text-6xl mb-4">🎉</div>
                  <div className="font-russo text-q-purple text-xl mb-2">Отлично!</div>
                  <p className="text-gray-600 font-semibold">Мы получили ваш вопрос и свяжемся в ближайшее время!</p>
                  <button onClick={() => { setChatSent(false); setChatForm({ name: "", phone: "", question: "" }); }}
                    className="mt-6 btn-primary px-6 py-2.5 text-sm">
                    Задать ещё вопрос
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Ваше имя</label>
                    <input type="text" required placeholder="Например: Анна"
                      value={chatForm.name}
                      onChange={e => setChatForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full rounded-2xl border-2 border-q-light px-4 py-3 font-semibold text-gray-800 outline-none focus:border-q-violet transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Телефон</label>
                    <input type="tel" required placeholder="+7 (___) ___-__-__"
                      value={chatForm.phone}
                      onChange={e => setChatForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full rounded-2xl border-2 border-q-light px-4 py-3 font-semibold text-gray-800 outline-none focus:border-q-violet transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Ваш вопрос</label>
                    <textarea placeholder="Сколько стоит курс? Какой возраст подходит?..."
                      rows={3}
                      value={chatForm.question}
                      onChange={e => setChatForm(p => ({ ...p, question: e.target.value }))}
                      className="w-full rounded-2xl border-2 border-q-light px-4 py-3 font-semibold text-gray-800 outline-none focus:border-q-violet transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3.5 text-base">
                    🚀 Отправить вопрос
                  </button>
                  <p className="text-xs text-gray-400 text-center font-semibold">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
