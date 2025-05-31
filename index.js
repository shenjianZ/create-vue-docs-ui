#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    const destDir = path.dirname(dest)
    fs.mkdirSync(destDir, { recursive: true })
    fs.copyFileSync(src, dest)
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function isEmpty(path) {
  const files = fs.readdirSync(path)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    if (file === '.git') {
      continue
    }
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}

function formatTargetDir(targetDir) {
  return targetDir?.trim().replace(/\/+$/g, '')
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(projectName)
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z\d\-~]+/g, '-')
}

async function init() {
  const argTargetDir = process.argv[2]
  let targetDir = argTargetDir || 'my-vue-docs-project'
  
  const getProjectName = () =>
    targetDir === '.' ? path.basename(path.resolve()) : targetDir

  let result = {}

  try {
    // Simple prompts simulation (in a real CLI, you'd use a library like enquirer)
    result.projectName = getProjectName()
    result.packageName = toValidPackageName(result.projectName)
    
    console.log(`\n🚀 Creating Vue Docs UI project in ${targetDir}...`)
    
  } catch (cancelled) {
    console.log(cancelled.message)
    return
  }

  const { projectName, packageName } = result

  const root = path.join(process.cwd(), targetDir)

  if (fs.existsSync(root)) {
    if (!isEmpty(root)) {
      console.log(`\n❌ Error: Target directory "${targetDir}" is not empty.`)
      console.log('Please choose a different directory or remove the existing files.')
      process.exit(1)
    } else {
      emptyDir(root)
    }
  }

  console.log(`\n📁 Scaffolding project in ${root}...`)

  const templateDir = path.resolve(__dirname, 'template')
  
  const write = (file, content) => {
    const targetPath = path.join(root, file)
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }

  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8')
  )

  pkg.name = packageName

  write('package.json', JSON.stringify(pkg, null, 2) + '\n')

  console.log(`\n✅ Done! Created ${projectName} at ${root}`)
  console.log('\n📚 Get started with:')
  console.log(`\n  cd ${targetDir}`)
  console.log('  npm install')
  console.log('  npm run dev')
  console.log('\n🎉 Your Vue Docs UI project is ready!')
  console.log('\n📖 Documentation: https://github.com/shenjianZ/vue-docs-ui')
  console.log('🐛 Issues: https://github.com/shenjianZ/vue-docs-ui/issues')
}

init().catch((e) => {
  console.error(e)
}) 