# Golden Module — Structural Blueprint

Module 01 is the Golden Module. Before writing any module, compare against Module 01 (the concrete implementation at `01-Python-Introduction/`).

## Purpose

This document defines the structural blueprint that Module 01 follows and that all future modules must also follow. It is the template, not the content. Module 01 is the living embodiment.

## Module File Structure

Every regular module contains exactly 10 files:

| # | File | Purpose | Target Lines |
|---|------|---------|-------------|
| 1 | lesson.md | Main lesson content | 400–600 |
| 2 | examples.html | Interactive HTML example viewer | 120–200 |
| 3 | quiz.json | Multiple-choice quiz | 10–14 questions |
| 4 | challenges.json | Coding challenges | 10–14 challenges |
| 5 | cheatsheet.md | Quick reference | 40–80 |
| 6 | project.md | Hands-on project | 500–700 |
| 7 | resources.json | Curated learning resources | 5–8 resources |
| 8 | interview.json | Technical interview Q&A | 8–12 questions |
| 9 | video.json | Curated video content | 3–6 videos |
| 10 | playground.html | Interactive Pyodide code runner | 120–180 |

Project modules (197–206) add 3 extra:
| 11 | troubleshooting.md | Common errors and fixes | 500–800 |
| 12 | ui/*.py | Python-native UI code | 300–800 |
| 13 | tests/*.py | Test suites | 200–400 |

## Lesson.md Required Sections

Every lesson.md must contain these sections in order:

### 1. Introduction
Hook the student. Answer: "Why should I care about this topic?" Connect to what they already know from previous modules.

### 2. Mental Model
A simple, intuitive way to think about the concept. Use analogies. Give the student a mental picture they can hold in their head.

### 3. Why This Matters
Concrete outcomes. After this module, what will the student be able to do that they couldn't before?

### 4. Concept Explanation
First principles. Start from zero. Build up step by step. Never use jargon before defining it.

### 5. Real World Analogy
Connect the programming concept to something from everyday life. This is how humans learn new things — by connecting them to things they already understand.

### 6. Syntax
Show the syntax clearly, with annotations explaining each part. Use multiple examples, from simple to complex.

### 7. Examples
Multiple practical examples. Each example must demonstrate something new. No filler examples. Each example includes the expected output.

### 8. Deep Dive
Go deeper into how the concept works internally. What happens when Python executes this code? What is the interpreter doing?

### 9. Common Mistakes
3–5 specific mistakes beginners make, with explanations of WHY they're wrong and how to fix them.

### 10. Edge Cases
What happens with empty input, negative values, boundary conditions, type mismatches? Show the student what can go wrong before it goes wrong.

### 11. Best Practices
How should this be used in production? What conventions do professional Python developers follow?

### 12. Performance Notes
Is this operation expensive? What are the time/space tradeoffs? When should the student use alternative approaches?

### 13. Interview Perspective
How is this topic tested in technical interviews? What do interviewers look for? What distinguishes a good answer from a great one?

### 14. Summary
Recap the key takeaways. Connect forward to the next module.

### 15. Exercises
5–8 practice exercises with progressive difficulty. The student should be able to verify their answers.

## Project.md Required Structure

### 1. Problem Statement
What are we building? Why is this project valuable?

### 2. Requirements Analysis
Functional and technical requirements. What does "done" look like?

### 3. Planning
Break the problem down. What are the components? What is the architecture?

### 4. Architecture
How do the pieces fit together? Show a diagram or flowchart.

### 5. Folder Structure
What files will we create? Where does each file go?

### 6. Step-by-Step Build
Build the project incrementally. Each step adds functionality. Show the code and explain each line.

### 7. Function-Level Analysis
For every function:
- Purpose
- Signature (arguments, return type)
- Parameter explanation
- Return value explanation
- Edge cases handled
- Time/space complexity

### 8. Testing
How to test the project. Include edge cases.

### 9. Extensions
How could the project be extended? What would you add next?

## Quiz.json Quality Rules

- Balanced difficulty (easy, medium, hard)
- No answer-pattern bias (not all "a")
- Must test understanding, not memorization
- Must include code-reading questions
- Must include "what will this output" questions
- Every wrong answer must be plausible (not obviously wrong)

## Challenges.json Quality Rules

- 10–14 challenges per module
- Progressive difficulty (easy → medium → hard)
- Variety of types: code writing, debugging, refactoring, optimization, explanation
- Real-world relevance (not "write a function that returns x*2")
- Each challenge has starter code and solution

## Interview.json Quality Rules

- 8–12 questions covering beginner to advanced
- Mix of conceptual, coding, scenario, and debugging questions
- Answers must be detailed and pedagogical (explain, don't just state)
- Include real company-style questions where appropriate

## The "Single Educator" Voice

Every module must read as if the same person wrote it:

- Opening line is usually a question or a hook: "What is a variable, really?"
- Uses "you" extensively. Speaks TO the student, not ABOUT the topic.
- When making a point, uses short, punchy sentences. Then expands.
- Explains via analogy before giving formal definition.
- Mistakes are framed as learning opportunities: "Here is what most beginners get wrong..."
- Uses concrete numbers: "92% of Python developers use this daily."
- Occasionally uses rhetorical questions: "But what happens if the file doesn't exist?"
- Never says: "as previously discussed," "as you know," "obviously," "clearly," "simply"

## Quality Benchmark

A golden module should score 65+/70 on the quality rubric. Any module scoring below 65 must be rejected, revised, and re-evaluated before it can ship.
