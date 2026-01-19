export default function Home() {
  const projects = [
    {
      title: "项目 1：XXX",
      desc: "我做了什么 + 解决了什么问题 + 结果（用一句话讲清楚）",
      link: "https://github.com/yourname/xxx",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "项目 2：XXX",
      desc: "一句话价值描述（最好带可量化结果）",
      link: "https://demo.com",
      tech: ["React", "Node.js"],
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Wang</h1>
        <p className="text-lg text-gray-600">
          全栈 / 数据 / AI 工程方向。这里是我的简历与作品集。
        </p>

        <div className="flex flex-wrap gap-3 text-sm">
          <a className="underline" href="mailto:yourname@example.com">Email</a>
          <a className="underline" href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline" href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">技能</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Java / Spring Boot（若有） · Next.js · Node.js · SQL · 数据分析/爬虫（若有） · Linux/WSL
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">项目</h2>
        <div className="mt-4 space-y-4">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.link && (
                  <a className="text-sm underline" href={p.link} target="_blank" rel="noreferrer">
                    Link
                  </a>
                )}
              </div>
              <p className="mt-2 text-gray-700">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">经历</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>经历条目 1：你做了什么、产出是什么</li>
          <li>经历条目 2：你负责什么、体现能力点</li>
        </ul>
      </section>

      <footer className="mt-14 text-sm text-gray-500">
        © {new Date().getFullYear()} Wang · Built with Next.js
      </footer>
    </main>
  );
}
