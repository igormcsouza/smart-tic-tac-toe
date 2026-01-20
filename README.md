# Smart Tic-Tac-Toe

An interactive Tic-Tac-Toe game demonstrating **Reinforcement Learning** concepts in a simple, approachable way. Play against an AI that uses strategic decision-making to challenge your skills!

## What You'll Learn

This project is perfect for understanding how AI can learn and make decisions in game environments. You'll explore:

- **Reinforcement Learning (RL)** fundamentals through epsilon-greedy strategy
- How AI balances **exploration** (trying new moves) vs **exploitation** (using known good strategies)
- Why Tic-Tac-Toe is ideal for AI learning (small state space with only 765 unique positions after symmetries)
- Modern web development with **TypeScript**, **React**, and **Next.js**

## Why Reinforcement Learning for Games?

Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by interacting with an environment and receiving feedback in the form of rewards or penalties. Unlike supervised learning where the model learns from labeled examples, RL agents learn through trial and error, discovering which actions lead to the best outcomes. This makes RL particularly powerful for scenarios where the optimal strategy isn't known in advance but must be discovered through experience.

RL has achieved remarkable success in gaming, demonstrating superhuman performance in complex games. Perhaps the most famous example is DeepMind's AlphaGo, which in 2016 defeated Lee Sedol, one of the world's best Go players, in a historic match. This was considered a major milestone in AI because Go's complexity (with more possible positions than atoms in the universe) was thought to be beyond computer capabilities for decades. RL's ability to learn patterns, develop strategies, and adapt to different playing styles makes it ideal for game environments where decision-making and long-term planning are crucial.

## Why Tic-Tac-Toe?

Tic-Tac-Toe is an excellent starting point for AI experimentation:

- **Manageable Complexity**: Only 765 unique game positions (after accounting for rotations/reflections)
- **Clear Win Conditions**: Easy to define success/failure states
- **Fast Learning**: The small state space allows AI to quickly learn effective strategies
- **Observable Results**: You can immediately see and understand the AI's decision-making

This makes it perfect for learning AI concepts without getting overwhelmed by complexity!

### Solving Tic-Tac-Toe with RL

In reinforcement learning, we solve Tic-Tac-Toe by teaching the AI through a reward system. The AI receives positive rewards for moves that lead to winning positions (like completing three in a row) and negative rewards for moves that result in losses or allow the opponent to win. Over many games, the AI learns to associate certain board positions and moves with good or bad outcomes. This reward-based learning helps the AI discover winning strategies, defensive blocking moves, and optimal opening plays without being explicitly programmed with game rules or strategies—it learns purely from experience and feedback.

## Technologies Used

This project is built with modern JavaScript/TypeScript technologies:

- **[Next.js](https://nextjs.org/)** - React framework for production-ready web applications
- **[React](https://reactjs.org/)** - Component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better code quality
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Building and Contributing

Want to build this project locally or make changes? Here's what you need to know:

**Project Structure:**
- `pages/index.tsx` - Main game page and state management
- `components/board.tsx` - Game board logic and AI implementation
- `components/controlarea.tsx` - Game controls and settings UI
- `components/square.tsx` - Individual square component
- `styles/` - Global styles and Tailwind configuration

**Making Changes:**
- To modify the AI strategy, edit the `getBestMove()` function in `components/board.tsx`
- To adjust the UI/styling, update the Tailwind classes in the component files
- To change game rules or win conditions, modify `calculateWinner()` in `components/board.tsx`

**Development Workflow:**
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Make your changes and see them live at `http://localhost:3000`
4. Build for production: `npm run build`

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
