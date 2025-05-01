# AI Safety Incident Dashboard

A modern, responsive dashboard for tracking and managing AI safety incidents. Built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 Real-time incident tracking and management
- 🔍 Advanced filtering and sorting capabilities
- 📱 Fully responsive design
- 🔐 Severity-based incident categorization
- 📝 Detailed incident reporting form

## Tech Stack

- React 18
- JavaScript
- Tailwind CSS
- Vite (Build tool)
- Lucide React (Icons)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-safety-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Design Decisions

- **Component Architecture**: Modular components designed for reusability and maintainability
- **State Management**: Custom hooks for incident data management, avoiding unnecessary complexity of external state libraries
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Type Safety**: Comprehensive TypeScript types for incident data and component props

## Development Challenges

- Implementing an intuitive filtering system while maintaining performance
- Balancing feature richness with clean, maintainable code
- Creating a responsive layout that works well across all device sizes
- Managing complex state for incident filtering and sorting

## Project Structure

```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── types/         # JavaScript type definitions
├── utils/         # Utility functions
└── data/          # Mock data for development
```
