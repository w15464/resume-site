如何替换占位 resume.pdf

步骤：

1. 在本地生成或准备好你的 PDF 简历（例如 resume-final.pdf）。
2. 将文件重命名为 resume.pdf。
3. 将文件复制到项目的 `public/` 目录：

   cp /path/to/resume.pdf projects/resume-site/public/resume.pdf

4. 重启开发服务器（如果在运行中）：

   npm run dev

现在访问简历页面并点击“下载 PDF”按钮将获取你上传的文件。
