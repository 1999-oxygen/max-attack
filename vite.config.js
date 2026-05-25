import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Allows GitHub Pages deployments to live under /<repo-name>/ while keeping local base "/"
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
  plugins: [react()],
})
