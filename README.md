# LeetCode Solutions

My personal collection of LeetCode problem solutions, implemented in JavaScript/TypeScript with comprehensive test coverage.

## 🔗 Profile

Visit my LeetCode profile: [leetcode.com/u/xcfio/](https://leetcode.com/u/xcfio/)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v22 or higher)
-   npm, yarn or pnpm

### Installation

```bash
git clone https://github.com/xcfio/leetcode.git
cd leetcode
pnpm install
```

_Note: This project uses pnpm as the package manager_

## 📁 Repository Structure

```=
leetcode/
├── .github/workflows/
│   └── test.yaml
├── node_modules/
├── src/
│   ├── {problem-number}.test.ts    # Test files for each problem
│   ├── {problem-number}.ts         # Solution implementations
│   └── ...                         # More problem solutions
├── .gitignore
├── .prettierignore
├── .prettierrc
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

## 🛠️ Available Scripts

| Script                | Description                                     |
| --------------------- | ----------------------------------------------- |
| `node --run test`     | Run all tests with TypeScript compilation check |
| `node --run dev`      | Start development mode with watch tests         |
| `node --run fmt`      | Format all files using Prettier                 |
| `node --run fmt:test` | Check if files are properly formatted           |

## 🧪 Testing

This repository uses [Vitest](https://vitest.dev/) for testing. Each solution includes comprehensive test cases covering:

-   Edge cases
-   Example test cases from LeetCode
-   Performance considerations
-   Input validation

### File Naming Convention

Problems are organized by their LeetCode problem number:

-   `{number}.ts` - Solution implementation
-   `{number}.test.ts` - Test cases for the solution

For example:

-   `1.ts` & `1.test.ts` - Two Sum problem
-   `26.ts` & `26.test.ts` - Remove Duplicates from Sorted Array
-   `2460.ts` & `2460.test.ts` - Apply Operations to an Array

### Running Tests

```bash
# Run all tests
node --run test

# Run tests in watch mode
node --run dev
```

## 📝 Solution Format

Each problem solution follows a consistent structure:

```typescript
export function solutionName(param1: type, param2: type): returnType {
    // Implementation
}
```

### Example Structure

```typescript
// src/1.ts
export function twoSum(nums: number[], target: number): number[] {
    // Implementation
}
```

```typescript
// src/1.test.ts
import { describe, it, expect } from "vitest"
import { twoSum } from "./1"

describe("1. Two Sum", () => {
    // Test implementation
})
```

## 🎯 Problem Categories

Solutions are organized by difficulty and topic:

### By Difficulty

-   **Easy**: Fundamental problems, basic algorithms
-   **Medium**: Intermediate challenges, common interview questions
-   **Hard**: Advanced algorithms, complex data structures

### By Topic

-   Arrays & Strings
-   Linked Lists
-   Trees & Graphs
-   Dynamic Programming
-   Sorting & Searching
-   Hash Tables
-   Two Pointers
-   Sliding Window
-   Backtracking
-   And more...

## 🔧 Code Quality

This repository maintains high code quality standards:

-   **TypeScript**: Type safety and better IDE support
-   **Prettier**: Consistent code formatting
-   **Vitest**: Comprehensive testing framework

## 🤝 Contributing

This is a personal learning repository, but if you find any issues or have suggestions for improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Acknowledgments

-   LeetCode for providing an excellent platform for coding practice
-   The programming community for sharing knowledge and solutions
-   Open source testing and development tools that make this possible

---

**Happy Coding!** 🚀
