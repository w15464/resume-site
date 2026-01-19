"use client";

import { useState } from "react";
import Link from "next/link";

type Tab = "about" | "skills" | "projects" | "contact";

export default function ResumePage() {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
            <div>
              <h1 className="text-2xl font-bold">苍穹外卖 · 简历</h1>
              <p className="text-sm text-white/90">后端工程师 · 系统与部署方向</p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/">
                <a className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition">返回</a>
              </Link>
            </div>
          </div>

          <div className="p-6 md:flex md:gap-6">
            <aside className="md:w-1/3">
              <nav className="space-y-3">
                <button
                  onClick={() => setTab("about")}
                  className={`w-full text-left rounded-lg px-4 py-3 transition ${tab === "about" ? "bg-sky-50 border border-sky-200" : "hover:bg-gray-50"}`}
                >
                  关于我
                </button>
                <button
                  onClick={() => setTab("skills")}
                  className={`w-full text-left rounded-lg px-4 py-3 transition ${tab === "skills" ? "bg-sky-50 border border-sky-200" : "hover:bg-gray-50"}`}
                >
                  技能与技术栈
                </button>
                <button
                  onClick={() => setTab("projects")}
                  className={`w-full text-left rounded-lg px-4 py-3 transition ${tab === "projects" ? "bg-sky-50 border border-sky-200" : "hover:bg-gray-50"}`}
                >
                  项目与经验
                </button>
                <button
                  onClick={() => setTab("contact")}
                  className={`w-full text-left rounded-lg px-4 py-3 transition ${tab === "contact" ? "bg-sky-50 border border-sky-200" : "hover:bg-gray-50"}`}
                >
                  联系方式
                </button>
              </nav>

              <div className="mt-6 text-xs text-gray-500">
                点击左侧按钮查看相应模块。页面简洁、可扩展，用于快速展示核心信息。
              </div>
            </aside>

            <section className="mt-6 md:mt-0 md:flex-1">
              <div className="rounded-lg border border-gray-100 bg-white p-6 fade-up">
                <div className="flex items-center justify-between">
                  <div />
                  <div className="flex gap-3">
                    <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noreferrer">下载 PDF</a>
                    <a href="/resume.txt" className="rounded-full px-4 py-2 border text-sm hover:bg-gray-50 transition">下载 文本</a>
                  </div>
                </div>
                {tab === "about" && (
                  <div>
                    <h2 className="text-xl font-semibold">关于我</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      我喜欢构建稳定可观测的后端系统，关注工程化与部署流程。熟悉 Linux、容器化与 CI/CD，擅长将需求拆解为可交付的工程任务。
                    </p>
                  </div>
                )}

                {tab === "skills" && (
                  <div>
                    <h2 className="text-xl font-semibold">技能与技术栈</h2>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                      <li>语言：JavaScript/TypeScript, Python, C++</li>
                      <li>后端：Node.js, Express, FastAPI</li>
                      <li>数据库：PostgreSQL, Redis</li>
                      <li>部署：Docker, GitHub Actions, Vercel</li>
                      <li>工具：Git, Linux, Nginx</li>
                      <li>观念：可观测性、日志与监控、性能优化</li>
                    </ul>
                  </div>
                )}

                {tab === "projects" && (
                  <div>
                    <h2 className="text-xl font-semibold">项目与经验</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[{
                            title: '个人简历站 / 部署流程',
                            body: '使用 Next.js 搭建前端，配置 GitHub Actions 与 Vercel 完成 CI/CD，页面使用 Tailwind CSS 美化样式并支持渐变主题。',
                            foot: '职责：项目结构搭建、CI/CD 流水线、线上部署与监控'
                          },{
                            title: '后端工程实战 / 服务化',
                            body: '实现过小型 CRUD 服务，包含数据库设计（PostgreSQL）、接口编写、单元测试与容器化部署（Docker）。',
                            foot: '成效：提高服务可用性并编写基础监控脚本'
                          },{
                            title: '性能与优化',
                            body: '对关键路径进行性能分析，优化数据库索引与缓存策略，降低了部分接口 30% 的响应时间。',
                            foot: ''
                          }].map((pr, idx) => (
                            <div key={idx} className="flip-wrapper relative">
                              <div className={`flip-card rounded-md border p-4 bg-white relative`} data-idx={idx}>
                                <div className="flip-card-face flip-card-front">
                                  <h3 className="font-medium">{pr.title}</h3>
                                  <p className="text-sm text-gray-600 mt-1">{pr.body}</p>
                                  {pr.foot && <p className="mt-2 text-xs text-gray-500">{pr.foot}</p>}
                                  <div className="mt-3 flex gap-2">
                                    <button className="rounded-md px-3 py-1 text-sm border hover:bg-gray-50 transition" onClick={(e:any)=>{
                                      const card = (e.currentTarget.closest('.flip-wrapper') as HTMLElement)!.querySelector('.flip-card') as HTMLElement;
                                      card.classList.add('is-flipped');
                                    }}>查看详情</button>
                                    <button className="rounded-md px-3 py-1 text-sm border hover:bg-gray-50 transition">演示</button>
                                  </div>
                                </div>
                                <div className="flip-card-face flip-card-back rounded-md border p-4 bg-white">
                                  <h3 className="font-medium">{pr.title} — 详情</h3>
                                  <p className="text-sm text-gray-600 mt-1">更详细的信息可在此处展开，例如实现要点、使用的技术栈与成果量化数据。</p>
                                  <div className="mt-3 flex gap-2">
                                    <button className="rounded-md px-3 py-1 text-sm border hover:bg-gray-50 transition" onClick={(e:any)=>{
                                      const card = (e.currentTarget.closest('.flip-wrapper') as HTMLElement)!.querySelector('.flip-card') as HTMLElement;
                                      card.classList.remove('is-flipped');
                                    }}>返回</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                  </div>
                )}

                {tab === "contact" && (
                  <div>
                    <h2 className="text-xl font-semibold">联系方式</h2>
                    <ul className="mt-3 text-gray-700">
                      <li>📧 2833574432@qq.com</li>
                      <li>GitHub: <a href="https://github.com/w15464" target="_blank" rel="noreferrer" className="text-sky-600 underline">w15464</a></li>
                    </ul>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
