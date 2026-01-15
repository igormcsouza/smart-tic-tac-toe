# Smart Tic-Tac-Toe

An interactive Tic-Tac-Toe game demonstrating **Reinforcement Learning** concepts in a simple, approachable way. Play against an AI that uses strategic decision-making to challenge your skills!

## What You'll Learn

This project is perfect for understanding how AI can learn and make decisions in game environments. You'll explore:

- **Reinforcement Learning (RL)** fundamentals through epsilon-greedy strategy
- How AI balances **exploration** (trying new moves) vs **exploitation** (using known good strategies)
- Why Tic-Tac-Toe is ideal for AI learning (small state space with only 765 unique positions after symmetries)
- Modern web development with **TypeScript**, **React**, and **Next.js**

## Why Reinforcement Learning for Games?

Reinforcement Learning is particularly effective for games because:

- **Pattern Recognition**: AI learns to recognize winning patterns and blocking strategies
- **Decision Making**: The AI evaluates each move and learns optimal strategies over time
- **Adaptability**: By adjusting the exploration rate, you can control how "creative" or "strategic" the AI plays

In this implementation, the AI uses an **epsilon-greedy approach**:
- High exploration rate (e.g., 1.0) → AI experiments with random moves (great for learning)
- Low exploration rate (e.g., 0.0) → AI uses its best strategic moves (optimal play)
- Balanced rate (e.g., 0.5) → Mix of experimentation and strategy

## Why Tic-Tac-Toe?

Tic-Tac-Toe is an excellent starting point for AI experimentation:

- **Manageable Complexity**: Only 765 unique game positions (after accounting for rotations/reflections)
- **Clear Win Conditions**: Easy to define success/failure states
- **Fast Learning**: The small state space allows AI to quickly learn effective strategies
- **Observable Results**: You can immediately see and understand the AI's decision-making

This makes it perfect for learning AI concepts without getting overwhelmed by complexity!

## Technologies Used

This project is built with modern JavaScript/TypeScript technologies:

- **[Next.js](https://nextjs.org/)** - React framework for production-ready web applications
- **[React](https://reactjs.org/)** - Component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better code quality
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
