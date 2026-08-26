import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  Home,
  Layers,
  MessageSquare,
  Settings,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Алекс Нейро — Vibe Coding Specialist" },
      {
        name: "description",
        content:
          "Быстро собираю MVP, лендинги и AI-продукты с помощью вайбкодинга и современных инструментов.",
      },
      { property: "og:title", content: "Алекс Нейро — Vibe Coding Specialist" },
      {
        property: "og:description",
        content: "Создаю AI-продукты через вайбкодинг: MVP, лендинги и автоматизации.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Проекты", "Услуги", "Процесс", "Отзывы", "Обо мне"];

const STATS = [
  { value: "30+", label: "Проектов" },
  { value: "12+", label: "Довольных клиентов" },
  { value: "95%", label: "Проектов сданы в срок" },
  { value: "4.9/5", label: "Средняя оценка" },
];

function Index() {
  return (
    <div className="dark relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute -left-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-neon-violet/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[26rem] w-[26rem] rounded-full bg-neon-magenta/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-neon-orange/10 blur-[130px]" />

      <header className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8 lg:flex lg:justify-between">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-neon shadow-glow-violet">
            <span className="h-4 w-4 rounded-[4px] bg-background/80" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold">Алекс Нейро</span>
            <span className="block truncate text-xs text-muted-foreground">
              Vibe Coding Specialist
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-gradient-neon px-5 text-sm font-medium text-foreground shadow-glow-violet transition-transform hover:scale-[1.03]"
        >
          Связаться
        </a>
      </header>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <main className="relative grid items-start gap-8 overflow-hidden pb-6 pt-5 sm:gap-10 md:pb-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-6 lg:pt-8">
          <section className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-neon-violet shadow-glow-violet" />
              Вайбкодинг · AI · Продукты
            </span>

            <h1 className="mt-5 text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Создаю AI-продукты
              <span className="mt-1 block bg-gradient-neon bg-clip-text text-transparent">
                через вайбкодинг
              </span>
            </h1>

            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Быстро собираю MVP — лендинги, веб-приложения и автоматизации с помощью AI и современных
              инструментов.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-ember px-6 text-sm font-semibold text-foreground shadow-glow-orange transition-transform hover:scale-[1.03]"
              >
                Посмотреть проекты
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-13 min-h-12 items-center justify-center rounded-full border border-neon-violet/60 bg-neon-violet/10 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-neon-violet/20"
              >
                Связаться
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl font-bold text-neon-violet sm:text-2xl">{stat.value}</dd>
                  <dd className="mt-1 text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <DashboardMockup />
        </main>

        <FeaturedProjects />
        <WhatIDo />
        <HowIWork />
        <CTABlock />
      </div>
    </div>
  );
}

function CTABlock() {
  return (
    <section id="contact" className="py-6 md:py-10">
      <div className="rounded-3xl border border-border bg-card/60 p-6 text-center shadow-glow-violet backdrop-blur sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Давайте создадим AI-продукт
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Выберите удобный способ связи — обсудим задачу и запустим проект.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://t.me/alexneiro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-ember px-6 text-sm font-semibold text-foreground shadow-glow-orange transition-transform hover:scale-[1.03]"
          >
            Написать в Telegram
          </a>
          <a
            href="mailto:hello@alexneiro.ru"
            className="inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-full border border-neon-violet/60 bg-neon-violet/10 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-neon-violet/20"
          >
            Написать на Email
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: "AI-лендинг для SaaS",
      desc: "Продающий лендинг с демо-формой, интеграцией CRM и AI-ассистентом на странице.",
      tags: ["Next.js", "OpenAI", "Tailwind"],
    },
    {
      title: "Дашборд аналитики",
      desc: "Визуализация метрик в реальном времени, импорт данных и автоматические AI-инсайты.",
      tags: ["React", "Supabase", "Recharts"],
    },
    {
      title: "Telegram-бот автоматизации",
      desc: "Бот для сбора заявок, рассылок уведомлений и синхронизации с Google Таблицами.",
      tags: ["Node.js", "Telegram API", "AI"],
    },
  ];

  return (
    <section id="projects" className="py-6 md:py-10">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-neon-orange shadow-glow-orange" />
            Портфолио
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Избранные проекты</h2>
        </div>
        <a
          href="#contact"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-neon-violet/60 bg-neon-violet/10 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-neon-violet/20"
        >
          Обсудить проект
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex min-w-0 flex-col rounded-2xl border border-border bg-card/50 p-5 backdrop-blur transition-transform hover:scale-[1.02]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-neon shadow-glow-violet">
                <ArrowUpRight className="h-5 w-5 text-foreground" />
              </span>
            </div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatIDo() {
  const services = [
    {
      icon: Zap,
      title: "MVP под ключ",
      desc: "От идеи до работающего продукта за дни, а не месяцы — с фокусом на ценность для пользователя.",
    },
    {
      icon: Code2,
      title: "Лендинги и веб-приложения",
      desc: "Быстрая вёрстка, плавные анимации и надёжная интеграция с бэкендом и API.",
    },
    {
      icon: Bot,
      title: "AI-интеграции",
      desc: "Подключаю LLM, чат-ботов, генерацию контента и умную автоматизацию рабочих процессов.",
    },
    {
      icon: Layers,
      title: "Автоматизации",
      desc: "Связываю сервисы между собой, убираю рутину и ускоряю повторяющиеся задачи.",
    },
  ];

  return (
    <section id="services" className="py-6 md:py-10">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-neon-violet shadow-glow-violet" />
          Услуги
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Что я делаю</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Помогаю запускать цифровые продукты быстро и с минимальными издержками — от идеи до
          первых пользователей.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="min-w-0 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon-violet/10">
              <Icon className="h-5 w-5 text-neon-violet" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowIWork() {
  const steps = [
    {
      num: "01",
      title: "Обсуждение",
      desc: "Уточняю цели, аудиторию и ограничения проекта, чтобы выбрать правильный фокус.",
    },
    {
      num: "02",
      title: "Прототип",
      desc: "Создаю структуру и визуальную концепцию для быстрой проверки гипотезы.",
    },
    {
      num: "03",
      title: "Разработка",
      desc: "Вайбкодинг + ручная доводка: фронтенд, бэкенд и все нужные интеграции.",
    },
    {
      num: "04",
      title: "Запуск",
      desc: "Деплой, тестирование и передача результата с инструкциями по поддержке.",
    },
  ];

  return (
    <section id="process" className="py-6 md:py-10">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-neon-mint" />
          Процесс
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Как я работаю</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative min-w-0 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur"
          >
            <span className="text-3xl font-bold text-neon-violet/30">{step.num}</span>
            <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="min-w-0 lg:scale-[0.95] lg:[perspective:1500px]">
      <div className="overflow-hidden rounded-2xl border border-border bg-card/70 shadow-glow-violet backdrop-blur lg:[transform:rotateY(-10deg)_rotateX(4deg)]">
        <div className="grid grid-cols-[auto_minmax(0,1fr)]">
          <aside className="hidden w-40 flex-col gap-1 border-r border-border p-4 sm:flex">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-6 w-6 rounded-md bg-gradient-neon" />
              <span className="truncate text-xs font-semibold">NeiroPanel</span>
            </div>
            {[
              { icon: Home, label: "Главная" },
              { icon: BarChart3, label: "Аналитика", active: true },
              { icon: Users, label: "Пользователи" },
              { icon: Wallet, label: "Финансы" },
              { icon: MessageSquare, label: "Сообщения" },
              { icon: Settings, label: "Настройки" },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${
                  active
                    ? "bg-neon-violet/15 text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </aside>

          <div className="min-w-0 p-4 sm:p-5">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <h2 className="truncate text-sm font-semibold">Аналитика</h2>
              <span className="shrink-0 rounded-full border border-border px-3 py-1 text-[10px] text-muted-foreground">
                Последние 30 дней
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { v: "12,540", d: "+12.5%" },
                { v: "₽1,250,000", d: "+18.2%" },
                { v: "4.21%", d: "+8.7%" },
              ].map((m) => (
                <div key={m.v} className="min-w-0 rounded-xl border border-border bg-background/40 p-2.5">
                  <p className="truncate text-xs font-semibold sm:text-sm">{m.v}</p>
                  <p className="mt-1 text-[10px] text-neon-mint">{m.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-border bg-background/40 p-3">
              <p className="text-[10px] text-muted-foreground">Динамика</p>
              <svg viewBox="0 0 300 90" className="mt-2 h-24 w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="oklch(0.7 0.19 300)" />
                    <stop offset="100%" stopColor="oklch(0.72 0.2 20)" />
                  </linearGradient>
                  <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.7 0.19 300 / 0.45)" />
                    <stop offset="100%" stopColor="oklch(0.7 0.19 300 / 0)" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 70 C 40 60, 60 20, 100 30 S 160 75, 200 45 S 260 10, 300 22 L300 90 L0 90 Z"
                  fill="url(#waveFill)"
                />
                <path
                  d="M0 70 C 40 60, 60 20, 100 30 S 160 75, 200 45 S 260 10, 300 22"
                  fill="none"
                  stroke="url(#wave)"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="flex justify-between text-[9px] text-muted-foreground">
                <span>1 мая</span>
                <span>8 мая</span>
                <span>15 мая</span>
                <span>29 мая</span>
              </div>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background/60 p-3">
                <p className="text-[10px] text-muted-foreground">Build · Код</p>
                <pre className="mt-1 overflow-hidden text-[9px] leading-relaxed text-neon-mint">
{`const product = await
  vibe.generate({
  theme: "neon",
  features: ["ai","speed"]
})`}
                </pre>
              </div>
              <div className="rounded-xl border border-neon-violet/40 bg-neon-violet/10 p-3">
                <p className="text-[10px] font-medium">AI-ассистент</p>
                <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
                  Готово! Дашборд создан. Хочешь добавить график по источникам трафика?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
