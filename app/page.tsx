import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-sky-900 via-indigo-900 to-black text-white flex items-center justify-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-12 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center">
            欢迎来到我的世界
          </h1>
          <p className="mt-6 text-center text-lg text-white/80">
            我是 苍穹外卖 — 后端工程师 · 架构与部署爱好者。探索、实现并交付可靠的系统体验。
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/resume">
              <a className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white shadow hover:bg-sky-400 transition">
                进入简历
                <span className="inline-block w-4 h-4 bg-white/30 rounded-full"></span>
              </a>
            </Link>

            <a
              href="https://github.com/w15464"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm text-white/90 hover:bg-white/5 transition"
            >
              查看 GitHub
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70">
            <div className="rounded-lg border border-white/6 p-4">📧 2833574432@qq.com</div>
            <div className="rounded-lg border border-white/6 p-4">📍 中国 · 可远程</div>
          </div>
        </div>
      </div>
    </main>
  );
}
