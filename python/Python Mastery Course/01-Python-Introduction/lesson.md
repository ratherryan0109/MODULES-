# Module 01: Introduction to Python

## Introduction

You are about to learn something that will change how you think. Programming is not just a skill — it is a new way of understanding how the digital world works. By the end of this course, you will write software that thousands of people could use. But it all starts here, with a single line of code.

Let me ask you something. Do you know what the most complicated machine in human history is? A smartphone. It has more computing power than the machines that sent humans to the Moon. And every single thing it does — every tap, swipe, notification, and animation — is controlled by code.

Code is just a set of instructions. Simple instructions. Add this. Compare that. Store this. Show that. The magic is not in the instructions themselves. The magic is in how you combine them.

This module is your first step. You will learn what programming is, why Python is the best language to start with, and how to write and run your very first Python program.

Let us begin.

## What is Programming?

At the most basic level, programming is giving instructions to a computer.

Think about how you give instructions to a person. If you tell someone "make tea," they know what to do because they have context and experience. They know to boil water, find a cup, add a tea bag, and wait. You did not need to explain each step.

Computers have zero context and zero experience. They know nothing. If you tell a computer "make tea," it has no idea what you mean. It does not know what tea is, what water is, or what boiling means.

To program a computer, you must explain everything. Every single detail. Exactly. In the correct order. With no ambiguity.

This is what programming is: writing precise, detailed, step-by-step instructions that a computer can follow.

**Real World Analogy:** Think of programming like writing a recipe. A recipe is a list of instructions that anyone can follow to create a dish. Your program is a list of instructions that any computer can follow to perform a task. The difference is that a human cook can figure out what you meant if you write "add salt to taste." A computer will just crash.

**Key insight:** Programming is not about memorizing syntax. It is about learning to think in a way that breaks complex problems down into simple, precise steps. This skill — computational thinking — is what makes someone a good programmer. Not knowing the most functions. Not writing the shortest code. Being able to take a big problem and split it into tiny, solvable pieces.

## What is Python?

Python is a programming language. It is a tool for writing instructions that a computer can understand and execute.

But Python is a particular kind of programming language. It was designed with one principle above all others: **readability**.

Here is what code looks like in Python:

```python
print("Hello, World!")
```

Here is what the same program looks like in another language (Java):

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Both programs do exactly the same thing. But which one looks easier to understand?

Python was created by a Dutch programmer named **Guido van Rossum** in 1991. He was working on a project called ABC (a teaching language) and wanted to create something that was powerful like C but readable like ABC. The name "Python" was not inspired by the snake. Guido was a fan of a British comedy group called **Monty Python's Flying Circus**, so he named the language after the show.

**Key characteristics of Python:**

- **High-level:** Python is far removed from machine code. You do not need to manage memory, registers, or CPU instructions. You write in a language that feels natural to humans, and Python translates it for the machine.

- **Interpreted:** Python runs your code line by line, immediately. You write a line, Python reads it, executes it, and moves to the next. This means you can test code instantly without waiting for a compilation step.

- **General-purpose:** You can use Python for almost anything. Web applications, data analysis, artificial intelligence, game development, desktop software, automation scripts, scientific computing — if you can imagine it, people have built it with Python.

- **Dynamically typed:** In Python, you do not need to declare what type of data a variable holds before using it. This makes Python faster to write and more flexible (we will cover this in detail in Module 08 and Module 12).

## Why Python?

Why not start with C, Java, or JavaScript? There are hundreds of programming languages. Why Python?

**1. Python is beginner-friendly.** Python was designed to be readable. The syntax is clean and intuitive. A beginner can look at Python code and often guess what it does. This is not true of most languages.

**2. Python is everywhere.** Python powers Instagram's backend. Netflix uses Python for data analysis. Spotify uses Python for music recommendations. NASA uses Python for scientific computing. Google, Facebook, Amazon — all of them use Python extensively.

**3. Python has a massive ecosystem.** There are over 400,000 packages available on PyPI (Python Package Index). Whatever you want to do, someone has probably already built a library for it. You do not need to reinvent the wheel.

**4. Python has a huge community.** Millions of developers use Python. If you get stuck, a solution is one search away. Stack Overflow has millions of Python questions. Reddit, Discord, and local meetups have Python communities everywhere.

**5. Python pays well.** Python developers are in high demand. As of 2025, Python is consistently one of the top 3 most in-demand programming languages in the job market.

**What Python is used for:**

| Field | Real Companies | Example Use |
|-------|---------------|-------------|
| Web Development | Instagram, Pinterest, Spotify | Backend servers, APIs |
| Data Science | Netflix, Airbnb, Uber | Analytics, recommendations |
| Machine Learning | Google, OpenAI, Tesla | AI models, neural networks |
| Automation | Almost every company | Scripting, testing, DevOps |
| Game Development | Disney, game studios | Prototyping, tools |
| Desktop Apps | Dropbox, BitTorrent | GUI applications |
| Scientific Computing | NASA, CERN | Simulations, research |

**A quick comparison of Python vs other languages:**

| Language | Best For | Not Best For | Learning Curve |
|----------|----------|--------------|----------------|
| Python | Web, data, AI, automation | Mobile apps, OS kernels | Gentle |
| JavaScript | Web browsers, full-stack web | Data science, systems | Moderate |
| Java | Enterprise apps, Android | Small scripts, prototyping | Steep |
| C++ | Games, systems, performance | Rapid prototyping, web | Very steep |
| Rust | Systems, security-critical | Beginner learning, web | Very steep |
| Go | Networking, cloud services | Data science, AI | Moderate |

**Python is not good for everything.** For mobile apps, you would use Swift or Kotlin. For high-performance game engines, you would use C++ or Rust. For browser-based code, you use JavaScript. But for the vast middle ground of software — web, data, automation, AI — Python dominates.

## Your First Python Program

It is tradition in programming to start with a program that prints "Hello, World!" to the screen. Let us write one now.

```python
print("Hello, World!")
```

That is it. One line. Type this into a file called `hello.py`, and when you run it, you will see:

```
Hello, World!
```

Let me explain every piece of this line:

**`print`** — This is a function. A function is a named block of code that performs a specific task. The `print` function's task is to display text on the screen. Think of it as a command that tells Python "show this to the user."

**`()`** — The parentheses call (or "invoke") the function. They tell Python to execute the function now. Without them, `print` just refers to the function. With them, `print()` runs it. Every function call in Python uses parentheses, even if there is nothing inside them.

**`"Hello, World!"`** — This is a string. A string is a sequence of characters — letters, numbers, spaces, punctuation — enclosed in quotes. The quotes tell Python "this is text data, not code." If you wrote `print(Hello)` without quotes, Python would try to find a variable named `Hello` instead of printing the text.

**Let us break the same line down differently:**

| Part | Name | Purpose |
|------|------|---------|
| `print` | Function name | Tells Python what action to perform |
| `(` | Open parenthesis | Begins the function call |
| `"` | Open quote | Marks the start of the string |
| `Hello, World!` | String content | The text to display |
| `"` | Close quote | Marks the end of the string |
| `)` | Close parenthesis | Ends the function call |

Every character matters. If you forget the closing quote, Python will not know where the string ends. If you forget the closing parenthesis, Python will not know the function call is complete.

**Try these variations:**

```python
# Printing a number
print(42)          # Output: 42

# Printing the result of a calculation
print(2 + 2)       # Output: 4

# Printing multiple items (comma-separated)
print("Hello", "World")  # Output: Hello World

# Printing nothing (blank line)
print()            # Output: (blank line)
```

Notice something interesting: when you pass multiple items to `print()` separated by commas, Python automatically adds a space between them. `print("Hello", "World")` gives `Hello World` with a space in the middle.

## Understanding print() Deeper

The `print()` function is deceptively powerful. Here is what it can do:

**Print different types of data:**

```python
print("Text")      # String
print(100)         # Integer
print(3.14)        # Float (decimal number)
print(True)        # Boolean (true/false value)
```

**Print multiple items with custom separator:**

```python
print("apple", "banana", "cherry")           # apple banana cherry
print("apple", "banana", "cherry", sep=", ") # apple, banana, cherry
print("apple", "banana", "cherry", sep=" | ") # apple | banana | cherry
```

The `sep` parameter (short for "separator") changes what goes between items. By default, it is a space.

**Print with a custom ending:**

```python
print("Hello")           # Hello\n (newline at end)
print("Hello", end="")   # Hello (no newline — next print stays on same line)
print("World")           # HelloWorld
```

Every `print()` ends with a newline character (`\n`) by default. The `end` parameter changes this. Setting `end=""` means the next `print()` will continue on the same line.

## How Python Executes Your Code — A Deep Dive

When you run `python hello.py`, a fascinating process happens:

1. **Python.exe launches.** The Python interpreter (a C program) starts up.
2. **Lexical analysis.** Python reads your source file and breaks it into tokens — the smallest meaningful units. `print("Hello, World!")` becomes tokens like `NAME(print)`, `OP(()`, `STRING("Hello, World!")`, `OP())`, `NEWLINE`.
3. **Parsing.** Python checks if the tokens form valid syntax. If you forgot a closing parenthesis, this is where the `SyntaxError` is raised.
4. **Compilation to bytecode.** Python compiles your code into bytecode — a low-level, platform-independent intermediate language. This step is automatic and invisible. The bytecode is saved in `__pycache__/` as `.pyc` files for faster execution next time.
5. **Execution by the Python Virtual Machine (PVM).** The PVM reads the bytecode and executes it instruction by instruction. For `print("Hello, World!")`, the PVM evaluates the string literal, looks up the `print` function, and calls it with the string as an argument.
6. **Output.** The `print` function writes to stdout (standard output), which appears in your terminal.

This whole process typically takes a few milliseconds for a simple program. The key insight: **Python is both compiled AND interpreted.** It compiles to bytecode (step 4), then interprets the bytecode (step 5). This gives Python the portability of an interpreted language with some performance benefits of compilation.

You do not need to memorize this process. But knowing it exists helps you understand error messages, performance characteristics, and why Python works the way it does.

## Running Python Code

There are two ways to run Python code:

### 1. Interactive Mode (REPL)

REPL stands for Read-Evaluate-Print-Loop. It is a live conversation with Python. You type a line, Python runs it immediately, shows the result, and waits for your next command.

Open a terminal (command prompt) and type:

```
python
```

You will see something like:

```
Python 3.13.0 (...)
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

The `>>>` is Python's prompt, waiting for your input. Type:

```python
>>> print("Hello, World!")
Hello, World!
```

Python prints the result immediately and shows `>>>` again, ready for your next command.

To exit, type `exit()` or press Ctrl+Z then Enter (Windows).

**When to use interactive mode:** For testing small snippets, experimenting with syntax, or doing quick calculations. It is like a scratchpad.

### 2. Script Mode

Create a file with a `.py` extension, write your code, and run it all at once.

1. Create a file called `hello.py`
2. Write `print("Hello, World!")`
3. Save the file
4. In the terminal, run: `python hello.py`
5. You will see: `Hello, World!`

**When to use script mode:** For real programs. Anything more than 3-4 lines should be a script.

**How to choose an editor for scripts:**

- **Notepad / TextEdit:** Works, but no special features.
- **VS Code:** Free, popular, great Python support. Install the Python extension.
- **PyCharm:** Professional IDE, excellent for larger projects.
- **IDLE:** Comes with Python, good for beginners.

## Escape Sequences

Sometimes you need to include special characters inside a string — a newline, a tab, or a quote character that would otherwise end the string. Python uses **escape sequences** for this. An escape sequence starts with a backslash `\` followed by a character.

```python
print("Line 1\nLine 2\nLine 3")
# Output:
# Line 1
# Line 2
# Line 3

print("Column 1\tColumn 2\tColumn 3")
# Output: Column 1    Column 2    Column 3

print("She said, \"Hello!\"")
# Output: She said, "Hello!"

print("Backslash: \\")
# Output: Backslash: \
```

Common escape sequences:

| Sequence | Name | Example Output |
|----------|------|----------------|
| `\n` | Newline | Moves to next line |
| `\t` | Tab | Horizontal tab space |
| `\\` | Backslash | Prints a literal `\` |
| `\"` | Double quote | Prints `"` inside a `"..."` string |
| `\'` | Single quote | Prints `'` inside a `'...'` string |

**Pitfall:** A common beginner mistake is using `\` in file paths on Windows. `print("C:\Users\Name")` will NOT work as expected — `\U` starts an escape sequence for Unicode. Use `C:\\Users\\Name` or raw strings (which we will cover in Module 11).

## Strings — A First Look

Strings are one of the most important concepts in programming. Most of the data you work with will be text. Names, addresses, emails, descriptions, messages, file paths — all of these are strings.

A string is created by surrounding text with matching quotes:

```python
"Hello"     # Double quotes
'Hello'     # Single quotes — same thing
```

Python does not care which type of quote you use, as long as they match. `"Hello"` and `'Hello'` are identical.

**But you must use the same type on both ends:**

```python
"Hello"     # Correct
'Hello'     # Correct
"Hello'     # WRONG — mismatched quotes
```

The reason for having two types of quotes is so you can include one type inside a string:

```python
print("It's a beautiful day")    # Correct — single quote inside double quotes
print('He said "Hello"')         # Correct — double quotes inside single quotes
```

If you need both types inside a string (or want to use the same type as the delimiter), you use the escape character `\`:

```python
print('It\'s a beautiful day')   # The backslash "escapes" the quote
```

We will cover strings in depth in Module 11. For now, just know that text in Python is enclosed in matching quotes.

## Comments

Comments are notes you write in your code that Python ignores. They are for humans to read.

```python
# This is a comment. Python will not execute this line.
print("Hello")  # Comments can go at the end of a line
```

Comments start with the `#` symbol. Everything after `#` on that line is ignored by Python.

**Why comments matter:**

- They explain WHY you wrote code a certain way, not WHAT the code does (the code itself shows what it does)
- They document complex logic that is not immediately obvious
- They remind your future self what you were thinking
- They help other developers understand your code

**Bad comment (just repeats the code):**
```python
x = x + 1  # Add 1 to x
```

**Good comment (explains why):**
```python
x = x + 1  # Offset by 1 because indexing starts at 0
```

## Basic Program Structure

A Python program is a text file with a `.py` extension. Python executes the file from top to bottom, left to right.

```python
# This is a Python program
# It runs from top to bottom

print("Line 1")
print("Line 2")
print("Line 3")

# Output:
# Line 1
# Line 2
# Line 3
```

**Key rules about Python program structure:**

1. **Statements** — Each line of code is a statement. One instruction per line.
2. **Blank lines** — Ignored. Use them to separate logical sections of code.
3. **Comments** — Start with `#`. Also ignored.
4. **Indentation** — We will cover this in Module 28. For now, just know that indentation matters in Python (it is not just for looks).
5. **Case sensitivity** — Python is case-sensitive. `print` works. `Print` does not.

## Common Mistakes

Here are the most common mistakes beginners make in their first Python programs:

### Mistake 1: Missing Quotes
```python
print(Hello)  # WRONG
```
**Error:** `NameError: name 'Hello' is not defined`
**Why:** Without quotes, Python thinks `Hello` is a variable name, not a string.
**Fix:** `print("Hello")`

### Mistake 2: Mismatched Quotes
```python
print("Hello')  # WRONG
```
**Error:** `SyntaxError: unterminated string literal`
**Why:** The string starts with `"` but ends with `'`. Python cannot find the matching end.
**Fix:** `print("Hello")` or `print('Hello')`

### Mistake 3: Missing Parentheses
```python
print "Hello"  # WRONG in Python 3
```
**Error:** `SyntaxError: Missing parentheses in call to 'print'`
**Why:** In Python 2, `print` was a statement, not a function. In Python 3, `print()` requires parentheses.
**Fix:** `print("Hello")`

### Mistake 4: Wrong Capitalization
```python
Print("Hello")  # WRONG
```
**Error:** `NameError: name 'Print' is not defined`
**Why:** Python is case-sensitive. `print` (lowercase) is the function. `Print` (capital P) is a different name.
**Fix:** `print("Hello")`

### Mistake 5: Forgetting File Extension
Saving your code as `hello.txt` instead of `hello.py`.
**Why:** Python expects `.py` files. Without it, the terminal may not know how to run your code.
**Fix:** Always save Python files with the `.py` extension.

## Mental Model

Imagine you have a very literal assistant. This assistant is incredibly smart at following instructions but has absolutely zero common sense.

You write your instructions on a piece of paper:
1. First instruction at the top
2. Second instruction below that
3. And so on

Your assistant reads the paper from top to bottom. For each instruction, they do exactly what it says — not what you meant, not what any reasonable person would infer, but exactly what the words say.

If you write "print(Hello)" the assistant looks at this and says: "I need to find something called `Hello` to print. I do not know what `Hello` is. I cannot proceed." And the program crashes.

If you write `print("Hello")` the assistant sees the quotes and understands: "Ah, this is text. The text says `Hello`. I will display that."

This is the fundamental mental model of programming: **you write precise instructions, and the computer follows them blindly.** It does not guess. It does not assume. It does exactly what you write.

Over time, you will develop an intuition for how the computer "thinks." You will learn to spot where your instructions are ambiguous or incomplete. That is what becoming a programmer means.

## Reading Error Messages

When your program crashes (and it will — every programmer's does), Python shows an error message. Learning to read these is one of the most important skills you can develop.

**Anatomy of an error message:**

```
Traceback (most recent call last):
  File "hello.py", line 1, in <module>
    print(Hello)
NameError: name 'Hello' is not defined
```

1. **Traceback:** Shows where the error happened, starting from the outermost call
2. **File and line number:** `hello.py`, line 1 — tells you exactly which file and line to look at
3. **The code:** Python shows the actual line that caused the error
4. **Error type:** `NameError` — tells you what kind of error
5. **Error message:** `name 'Hello' is not defined` — explains what went wrong

**Common error types you will see in this module:**

| Error | Meaning | Typical Cause |
|-------|---------|---------------|
| `NameError` | Python does not recognize this name | Missing quotes around a string |
| `SyntaxError` | Python cannot understand this code | Missing parenthesis, mismatched quotes |
| `TypeError` | Operation on wrong type of data | e.g., `print("Hello" + 5)` |
| `IndentationError` | Wrong indentation | Extra or missing spaces at line start |

**Rule of thumb:** Always look at the **last line** of the error first. The traceback shows you where in your code it happened, but the last line is the actual error description.

## Best Practices

Even in your first program, you can start developing good habits:

1. **Use lowercase for function names.** `print()` not `Print()`. Most Python functions are lowercase.

2. **Use 4 spaces for indentation.** This is the Python standard (PEP 8). We will use it throughout this course.

3. **Name your files meaningfully.** `hello.py` is good. `script1.py` is not. The name should tell someone what the file does.

4. **Add comments for anything non-obvious.** But do not over-comment. The code should be self-explanatory where possible.

5. **Separate logical sections with blank lines.** Makes your code easier to read.

6. **Use consistent quoting style.** Pick either single quotes or double quotes and stick with it. Mix them only when needed.

7. **Test early, test often.** Run your code after every small change, not after writing 100 lines.

## Interview Perspective

Technical interviews for Python positions often start with a simple question: "Write Hello World in Python."

This question is not a test of knowledge — it is a test of fundamentals. The interviewer wants to see if you understand the basics well enough to explain them.

**What distinguishes a good answer from a great answer:**

Good: "I would write `print("Hello, World!")`. This prints the text to the console."

Great: "I would write `print("Hello, World!")`. The `print` function is a built-in Python function that outputs text to the standard output stream. The parentheses `()` call the function, and the string `"Hello, World!"` is the argument — the data being passed to the function. The quotes tell Python to treat this as literal text rather than a variable name."

Notice the difference? The great answer shows understanding. It explains each component. That is what interviewers look for — not just the answer, but the depth of understanding.

**Common follow-up questions:**
- "What happens if you omit the parentheses?" — SyntaxError in Python 3
- "What happens if you omit the quotes?" — NameError
- "Can you use single quotes instead?" — Yes, they are identical
- "How would you print multiple lines?" — Call `print()` multiple times, or use `\n`

## Where You Are in the Course

You have completed Module 01. Here is how it fits into the bigger picture:

```
Course Roadmap:
Module 01  →  Introduction to Python  (YOU ARE HERE)
Module 02  →  Installation & Setup     (Next)
Module 03  →  Get Started              (First real programs)
Module 04  →  Syntax                   (Rules of the language)
Module 05  →  Output                   (print() in depth)
Module 06  →  Comments                 (Documenting your code)
Module 07+ →  Variables, Data Types, and beyond...
```

Each module builds on the previous one. By Module 10, you will be writing programs that use variables, numbers, casting, and user interaction. By Module 27, you will have mastered all of Python's built-in data structures.

The skills you learned here — understanding program structure, using `print()`, recognizing common errors — will be used in every single module that follows. You have built your foundation.

## Before You Continue

Before moving to Module 02, you should be able to:

- [ ] Explain what programming is in your own words
- [ ] Write and run a "Hello, World!" program
- [ ] Use `print()` with strings, numbers, and expressions
- [ ] Use the `sep` parameter to control spacing
- [ ] Use the `end` parameter to control line endings
- [ ] Create string borders with the `*` operator
- [ ] Add comments to explain your code
- [ ] Recognize and fix the 5 common mistakes (missing quotes, mismatched quotes, missing parentheses, wrong capitalization, wrong file extension)
- [ ] Read and understand a Python error message

If you cannot do any of these, review the relevant section before proceeding.

## Summary

In this module, you learned:

- **Programming** is giving precise, step-by-step instructions to a computer.
- **Computational thinking** is the skill of breaking complex problems into simple steps.
- **Python** is a high-level, interpreted, general-purpose programming language created by Guido van Rossum in 1991.
- **`print()`** is a function that displays output on the screen.
- **Strings** are text data enclosed in matching quotes.
- **Comments** (`#`) are notes for humans that Python ignores.
- **Python runs code top to bottom**, executing each statement in order.
- **Every character matters** — one missing quote or parenthesis will crash your program.

You have written your first Python program. This is the first step of a long journey. In the next module, you will install Python on your computer (if you have not already) and set up a proper development environment.

Before moving on, complete the exercises below. They will reinforce what you just learned.

## Exercises

1. Write a program that prints your name.
2. Write a program that prints three separate lines: your name, your age, and your favorite hobby.
3. Write a program that uses a single `print()` statement to output three items separated by ` --- `.
4. Write a program that prints the result of `15 + 37` without using quotes (so Python calculates it).
5. Write a program that intentionally causes a NameError by forgetting quotes, then fix it.
6. Write a program that prints a poem (at least 4 lines) using multiple print statements.
7. Add at least 3 comments to any of the programs above, explaining what each part does.
8. **Challenge:** Can you write a program that prints the same output as `print("Hello", "World", sep="-")` but WITHOUT using the `sep` parameter? (Hint: Use two `print()` calls with `end=""`.)
9. Write a program that prints your name inside a box made of `#` characters, like:
   ```
   ############
   # John Doe #
   ############
   ```
10. Write a program that prints a numbered shopping list with 4 items, using `\n` inside a single `print()` call.
11. Write a program that uses `end=""` to print "Python is awesome!" one word at a time, with each word as a separate `print()` call.
12. **Debugging:** Write a program that intentionally causes a `SyntaxError`, then a `NameError`, then a `TypeError`. Add comments explaining what each error means.
