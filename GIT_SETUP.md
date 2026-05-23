# Spliiice - Git Setup Instructions

## Prerequisites

```bash
# Check if Git is installed
git --version

# Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## Initialize Repository Locally

```bash
# Navigate to the directory with all files
cd spliiice

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Spliiice v1.0.0 - Desktop PWA

- Professional sample slicer and 16-step sequencer
- Dual MIDI modes (Trigger and Sampler)
- Real-time effects chain
- PWA with offline support
- Service Worker caching
- Desktop-optimized UI (mobile redesign planned for v1.1)"
```

## Create GitHub Repository

1. Go to https://github.com/new
2. Create repository:
   - **Repository name**: `spliiice`
   - **Description**: Professional Sample Slicer & Sequencer
   - **Public/Private**: Your choice
   - **Do NOT** initialize with README (we already have one)
   - Click **Create repository**

## Connect and Push to GitHub

```bash
# Add remote (replace with YOUR GitHub URL)
git remote add origin https://github.com/YOUR-USERNAME/spliiice.git

# Rename main branch to match GitHub
git branch -M main

# Push to GitHub
git push -u origin main
```

## Verify Success

```bash
# Check remote configuration
git remote -v

# Should show:
# origin  https://github.com/YOUR-USERNAME/spliiice.git (fetch)
# origin  https://github.com/YOUR-USERNAME/spliiice.git (push)

# Check commit history
git log --oneline

# Should show your initial commit
```

## Enable GitHub Pages (Optional - Free Hosting)

1. Go to your GitHub repo Settings
2. Scroll to **Pages** section
3. **Source**: Select `main` branch, `/root` folder
4. Save
5. Wait ~1 minute
6. Your app will be live at: `https://YOUR-USERNAME.github.io/spliiice/`

## Future Commits

```bash
# Make changes to files
nano index.html  # or use your editor

# Stage changes
git add .
# or specific file:
git add index.html

# Commit
git commit -m "feat: description of changes"

# Push to GitHub
git push origin main
```

## Commit Message Examples

Good commit messages follow this format:

```
<type>: <description>

<body (optional)>

<footer (optional)>
```

**Types**:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style (formatting, missing semicolons, etc)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Build process, dependencies, etc

**Examples**:

```
feat: add mobile responsive waveform display

- Implement CSS media queries for screens < 768px
- Add touch event handlers for waveform interaction
- Adjust canvas sizing for responsive layout
```

```
fix: correct transient sensitivity slider direction

The slider was inverted - 100% was less sensitive than 10%.
Now 100% = very sensitive (detects small transients),
10% = least sensitive (ignores small transients).
```

```
docs: update README with PWA installation instructions
```

## Common Git Commands

```bash
# Check status
git status

# View recent commits
git log --oneline -10

# See differences
git diff

# Undo unstaged changes
git checkout -- filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View remote info
git remote -v

# Create new branch
git checkout -b feature/mobile-ui

# Switch branches
git checkout main

# Merge branch
git merge feature/mobile-ui
```

## If You Make a Mistake

```bash
# Undo last local commit (keep files)
git reset --soft HEAD~1

# Undo last local commit (discard files)
git reset --hard HEAD~1

# Discard local changes
git checkout -- .

# Change last commit message
git commit --amend -m "New message"
```

## Collaboration (For Future)

When collaborating with others:

```bash
# Update your local repo with remote changes
git pull origin main

# Before pushing, always pull first
git pull origin main
git push origin main

# If there are conflicts, Git will tell you
# Edit conflicting files, then:
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

## Setting Up Code Editor (VS Code)

1. Install [VS Code](https://code.visualstudio.com)
2. Open Spliiice folder in VS Code
3. Install extensions:
   - **Git Graph** (by mhutchie) - Visual git history
   - **GitLens** (by GitKraken) - Inline git info
   - **Live Server** (by Ritwick Dey) - Local dev server
4. Use Source Control tab (Ctrl+Shift+G) to manage git

---

**You're all set!** Your Spliiice project is now on GitHub and ready for development! 🚀

