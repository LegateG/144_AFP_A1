# Task Manager Application

A modern task management application built with **Next.js** and **React** for learning front-end development concepts.

## Features

-  Create, complete, and delete tasks
-  Priority levels (High, Medium, Low)
-  Task statistics and analytics
-  Filter tasks by status
-  Responsive design
-  Modern UI with smooth animations

##  Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

##  Project Structure

\`\`\`
task-manager/
├── components/       # Reusable React components
│   ├── TaskForm.js   # Form for adding tasks
│   ├── TaskItem.js   # Individual task display
│   ├── TaskStats.js  # Statistics component
│   └── Navbar.js     # Navigation bar
├── pages/            # Next.js pages (routes)
│   ├── index.js      # Home page
│   ├── tasks.js      # Tasks management page
│   └── stats.js      # Statistics page
├── styles/           # CSS modules
│   ├── globals.css
│   └── Home.module.css
└── public/           # Static assets
\`\`\`

##  Learning Objectives Demonstrated

1. **Component Creation**: Three functional components with props
2. **State Management**: React hooks (useState, useEffect)
3. **Event Handling**: Button clicks, form submissions, input changes
4. **Conditional Rendering**: Dynamic content based on state
5. **Styling**: CSS Modules for scoped styling
6. **Routing**: Next.js file-based routing

##  Technologies Used

- **Next.js** - React framework
- **React** - UI library
- **CSS Modules** - Scoped styling
- **JavaScript (ES6+)** - Programming language

\`\`\`

---

### 12. `.gitignore`

\`\`\`
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
\`\`\`

---

##  Setup Instructions

### Step 1: Create Next.js App
\`\`\`bash
npx create-next-app@latest task-manager
\`\`\`

When prompted, choose these options:
-  Would you like to use TypeScript? → **Yes**
-  Would you like to use ESLint? → **Yes**
-  Would you like to use Tailwind CSS? → **Yes**
-  Would you like to use `src/` directory? → **No**
-  Would you like to use App Router? → **No** (use Pages Router)
-  Would you like to customize the default import alias? → **No**

### Step 2: Navigate to Project
\`\`\`bash
cd task-manager
\`\`\`

### Step 3: Create Folder Structure
\`\`\`bash
# Create components folder
mkdir components

# Create styles folder (if not already created)
mkdir styles
\`\`\`

### Step 4: Add Project Files

**Delete** the default files created by Next.js:
- Delete everything inside `pages/index.js`
- Delete `pages/api` folder (not needed for this project)
- Delete `styles/Home.module.css` content

**Create** new files in the `components/` folder:
1. `components/TaskForm.js`
2. `components/TaskItem.js`
3. `components/TaskStats.js`
4. `components/Navbar.js`

**Update** files in the `pages/` folder:
1. Replace content in `pages/index.js`
2. Create new `pages/tasks.js`
3. Create new `pages/stats.js`

**Update** files in the `styles/` folder:
1. Replace content in `styles/globals.css`
2. Replace content in `styles/Home.module.css`

**Update** the `README.md` file with the project documentation above.

> 💡 **Tip**: Copy the code from each section above into the corresponding file.

### Step 5: Verify Installation
\`\`\`bash
# Check that all dependencies are installed
npm install
\`\`\`

### Step 6: Run the Development Server
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the Task Manager home page! 🎉

### Step 7: Test the Application
1. Navigate to "My Tasks" page
2. Add a new task with different priorities
3. Mark tasks as complete
4. Filter tasks by status
5. Check the Statistics page

### Step 8: Push to GitHub

\`\`\`bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Task Manager application"

# Create main branch
git branch -M main

# Add your GitHub repository (replace with your actual repo URL)
git remote add origin https://github.com/yourusername/task-manager.git

# Push to GitHub
git push -u origin main
\`\`\`

###  Final Folder Structure

After completing all steps, your project should look like this:

\`\`\`
task-manager/
├── components/
│   ├── TaskForm.js      ✅ NEW
│   ├── TaskItem.js      ✅ NEW
│   ├── TaskStats.js     ✅ NEW
│   └── Navbar.js        ✅ NEW
├── pages/
│   ├── _app.js          (default Next.js file)
│   ├── index.js         ✏️ UPDATED
│   ├── tasks.js         ✅ NEW
│   └── stats.js         ✅ NEW
├── styles/
│   ├── globals.css      ✏️ UPDATED
│   └── Home.module.css  ✏️ UPDATED
├── public/              (default Next.js folder)
├── node_modules/        (auto-generated)
├── .gitignore          (default Next.js file)
├── package.json        (default Next.js file)
├── next.config.js      (default Next.js file)
└── README.md           ✏️ UPDATED
\`\`\`

---