export default function Home() {
  const projects = [
    {
      title: "个人简历站 / 作品集网站",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
      content: [
        "从 0 搭建 Web 项目结构，配置本地开发环境",
        "使用 Git 进行版本管理并推送至 GitHub",
        "通过 Vercel 完成自动构建与公网部署",
        "获得可访问的线上地址，用于项目展示",
      ],
      result: "成功完成从本地开发到公网部署的完整工程闭环",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-14 text-gray-900">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">苍穹外面</h1>
        <p className="text-lg text-gray-700">
          后端工程方向 · 关注系统运行、部署与工程完整性
        </p>
        <p className="text-gray-600">
          具备从本地开发到公网部署的完整项目实践经验，熟悉 Linux / Node.js /
          Web 工程基本流程。
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <span>📧 2833574432@qq.com</span>
          <a
            href="https://github.com/w15464"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">能力概览</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
          <li>能够在 Linux / WSL 环境中完成 Node.js 项目开发与运行</li>
          <li>理解前后端分离、构建流程与部署流程</li>
          <li>使用 Git / GitHub 进行版本管理与代码协作</li>
          <li>具备基础的 Web 服务、接口与系统工程意识</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">项目经历</h2>

        {projects.map((p) => (
          <div
            key={p.title}
            className="mt-6 rounded-2xl border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>

            <div className="mt-2 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              {p.content.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              <strong>结果：</strong>
              {p.result}
            </p>
          </div>
        ))}
      </section>

      {/* Current */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">当前状态</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          正在继续深入后端方向，计划补充数据库（PostgreSQL）、接口设计与后台
          CRUD 项目，逐步完善完整后端系统能力。
        </p>
      </section>

      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} 苍穹外面 · Built with Next.js
      </footer>
    </main>
  );
}
