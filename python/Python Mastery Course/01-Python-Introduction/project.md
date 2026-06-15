# Module 01 Project: Personal Introduction Card

## Problem Statement

You have just learned how to use `print()` to display text. Now you will build something real with it.

Your task is to create a **Personal Introduction Card** — a program that prints a beautifully formatted card introducing yourself. Think of it as a digital business card or an "about me" page for the terminal.

The card should include:
- Your name
- A decorative border
- Your basic information (age, location, occupation)
- Your hobbies or interests
- Your goals for learning Python
- A closing message

This project is deceptively simple. The goal is not just to print some text — it is to learn how to **organize output**, **control formatting**, and **build a program incrementally**. These skills apply to every Python program you will ever write.

## Requirements Analysis

### Functional Requirements
- The program must print at least 8 lines of output.
- The output must have a decorative border (using characters like `*`, `#`, `=`, or `-`).
- The output must be organized into sections (header, body, footer).
- The program must use at least 3 different `print()` features (`sep`, `end`, or multiple arguments).

### Technical Requirements
- The file must be named `introduction_card.py`.
- All code must use proper (no unnecessary) whitespace.
- Every section of code must have a comment explaining what it does.
- The program must run without errors.

### Success Criteria
- Running `python introduction_card.py` displays a clean, professional-looking card.
- A stranger can look at the output and immediately understand who you are.
- The code is readable and organized.

## Planning

Let us break this down into components:

1. **Header section** — A decorative top border and a title
2. **Personal info section** — Name, age, location
3. **Interests section** — Hobbies and interests
4. **Goals section** — What you want to learn
5. **Footer section** — A closing message and bottom border

Each section will be one or more `print()` statements. We will build them one at a time.

## Architecture

The program follows a simple linear architecture — top to bottom, just like Python executes it:

```
┌──────────────────────────────────────────┐
│            Personal Introduction Card     │
├──────────────────────────────────────────┤
│  Header    →  decorative top border       │
│  Title     →  "=== My Introduction Card ==="│
│  Info      →  Name, age, location         │
│  Separator →  decorative divider          │
│  Interests →  hobbies listed              │
│  Separator →  decorative divider          │
│  Goals     →  Python learning goals       │
│  Footer    →  closing message + border    │
└──────────────────────────────────────────┘
```

## Folder Structure

For this project, you only need one file:

```
01-Python-Introduction/
  introduction_card.py     ← Your project file
```

## Step-by-Step Build

### Step 1: Create the file and write a header comment

Create a file called `introduction_card.py`. Start with a comment at the top explaining what the program does:

```python
# Personal Introduction Card
# This program prints a formatted introduction card
# Author: Your Name
# Date: Today's date
```

This is good practice. Every program should start with a comment explaining its purpose.

### Step 2: Print the top border

We need a decorative border at the top. Let us use `=` characters:

```python
# Print the top border
print("=" * 40)
```

Wait — what is `"=" * 40` doing? In Python, you can multiply a string by a number. The result is that string repeated that many times. `"=" * 40` creates a string of 40 equal signs: `========================================`.

This is a handy trick for creating visual separators.

### Step 3: Print the title

Now let us print a centered title:

```python
# Print the title
print("          MY INTRODUCTION CARD")
```

The spaces before the text manually center it. This works, but it is not elegant. Let us improve it later.

Actually, a better approach for a first project is to keep it simple but effective:

```python
print("=" * 40)
print("          MY INTRODUCTION CARD")
print("=" * 40)
```

This gives us:
```
========================================
          MY INTRODUCTION CARD
========================================
```

### Step 4: Print personal information

Now add your personal details:

```python
print("Name:     John Doe")
print("Age:      25")
print("Location: New York, USA")
```

We used extra spaces after the labels to align the values. This is called **manual alignment** — we will learn better ways to do this in Module 11 (Strings).

### Step 5: Add a separator line

After the personal info, add a visual separator:

```python
print("-" * 40)
```

### Step 6: Print hobbies and interests

```python
print("HOBBIES:")
print("  - Reading science fiction")
print("  - Hiking in national parks")
print("  - Learning to code")
print("  - Playing chess")
```

The two spaces at the start of each line (`  -`) create a bullet-point indentation effect. This makes lists readable.

### Step 7: Add another separator

```python
print("-" * 40)
```

### Step 8: Print goals

```python
print("GOALS FOR LEARNING PYTHON:")
print("  1. Build web applications with Django")
print("  2. Automate data analysis tasks")
print("  3. Create my own AI chatbot")
print("  4. Land a job as a Python developer")
```

### Step 9: Print the footer

```python
print("=" * 40)
print("  'The journey of a thousand miles")
print("   begins with a single step.'")
print("=" * 40)
```

### Step 10: Run the program

Save the file and run it:

```bash
python introduction_card.py
```

You should see output like this:

```
========================================
          MY INTRODUCTION CARD
========================================
Name:     John Doe
Age:      25
Location: New York, USA
----------------------------------------
HOBBIES:
  - Reading science fiction
  - Hiking in national parks
  - Learning to code
  - Playing chess
----------------------------------------
GOALS FOR LEARNING PYTHON:
  1. Build web applications with Django
  2. Automate data analysis tasks
  3. Create my own AI chatbot
  4. Land a job as a Python developer
========================================
  'The journey of a thousand miles
   begins with a single step.'
========================================
```

### Step 11: Refine with print() features

Now let us improve the program using the `sep` and `end` parameters of `print()`.

Instead of printing the top border and title separately:

```python
print("=" * 40)
print("          MY INTRODUCTION CARD")
print("=" * 40)
```

We could do it differently. But for borders, separate lines are actually clearer. Let us use `sep` where it makes sense:

```python
# Using sep to create a clean list
print("Hiking", "Reading", "Chess", "Coding", sep="  •  ")
```

This outputs: `Hiking  •  Reading  •  Chess  •  Coding`

And `end` to continue on the same line:

```python
print("My name is ", end="")
print("John Doe")
```

Output: `My name is John Doe` (all on one line)

## Function-Level Analysis

Let us define each function in our program and analyze it. Even though our simple program does not use custom functions (yet — we will learn those in Module 39), the `print()` function itself is worth analyzing deeply.

### Built-in Function: `print()`

**Purpose:** Output text to the standard output stream (usually the terminal/console).

**Signature:** `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `*objects` | Any | (required) | One or more values to print |
| `sep` | str | `' '` | Separator placed between objects |
| `end` | str | `'\n'` | String appended after the last object |
| `file` | file object | `sys.stdout` | Where to send the output |
| `flush` | bool | `False` | Whether to force-flush the output buffer |

**Return value:** `None` — `print()` does not return anything; it only produces output.

**Edge cases:**
- Called with no arguments: prints a blank line
- Called with `None`: prints `None`
- Called with a single string: prints that string without quotes
- Called with `sep=""`: concatenates objects with no separator
- Called with `end=""`: no newline at the end

**Time complexity:** O(n) where n is the total length of all objects being printed
**Space complexity:** O(1) — prints directly to output, does not store in memory

**Common mistakes:**
- Forgetting that `print()` adds a newline by default
- Expecting `print()` to return a value (it returns `None`)
- Using `print()` for debugging in production (use logging instead — Module 193)

## Complete Program

Here is the complete `introduction_card.py`:

```python
# Personal Introduction Card
# This program prints a formatted introduction card
# Author: Your Name
# Date: Today's date

# --- Header Section ---
print("=" * 40)
print("          MY INTRODUCTION CARD")
print("=" * 40)

# --- Personal Information ---
print("Name:     John Doe")
print("Age:      25")
print("Location: New York, USA")
print("-" * 40)

# --- Hobbies and Interests ---
print("HOBBIES:")
print("  - Reading science fiction")
print("  - Hiking in national parks")
print("  - Learning to code")
print("  - Playing chess")
print("-" * 40)

# --- Goals ---
print("GOALS FOR LEARNING PYTHON:")
print("  1. Build web applications with Django")
print("  2. Automate data analysis tasks")
print("  3. Create my own AI chatbot")
print("  4. Land a job as a Python developer")
print("-" * 40)

# --- Fun fact (using sep parameter) ---
print("FAVORITE THINGS:")
print("Hiking", "Reading", "Chess", "Coding", sep="  •  ")
print("-" * 40)

# --- Footer Section ---
print("  'The journey of a thousand miles")
print("   begins with a single step.'")
print("=" * 40)
```

## Testing

For this simple program, testing is manual — you run it and check the output visually.

### Test Case 1: Basic run
**Input:** `python introduction_card.py`
**Expected:** A clean, formatted card with all sections displayed
**How to check:** Does it look like a professional introduction card?

### Test Case 2: No arguments
**Input:** Just the file, no command-line arguments
**Expected:** Same output — the program does not read command-line arguments
**How to check:** Run with and without arguments — output should be identical

### Test Case 3: Verify all sections exist
**Checklist:**
- [ ] Top border (============)
- [ ] Title (MY INTRODUCTION CARD)
- [ ] Name displayed
- [ ] Age displayed
- [ ] Location displayed
- [ ] Separator lines (----------)
- [ ] Hobbies section with at least 3 items
- [ ] Goals section with at least 3 items
- [ ] Footer with quote/message
- [ ] Bottom border (============)

## Extensions

Now that you have the basic version, try these extensions in order of difficulty:

### Easy: Customize the card
Change all the information to your own. Your name, your age, your hobbies, your goals. This is personalization, not an extension — but it is the first thing you should do.

### Easy: Add more sections
- Add a "Skills" section listing things you already know
- Add a "Contact" section (email, GitHub, etc.)
- Add a "Favorite Quote" section

### Medium: Use different border styles
Instead of `=` and `-`, try:
- `#` for a bolder look
- `*` for a softer look
- Combine them: `#===#===#===#===`

### Medium: Create a double-line border
Use two print statements per border line to create a "thick" border effect.

### Medium: Add ASCII art
Create a small ASCII art logo above the title. For example:
```python
print("   ___           _   _       ")
print("  | _ )_ _ _  _ | |_(_)___  ")
print("  | _ \ '_| || ||  _| / -_) ")
print("  |___/_|  \_,_| \__|_\___| ")
```

### Hard: Create a menu of cards
Create multiple card templates and have the program print different styles. (This is harder to do without variables — you will revisit this after Module 07.)

### Hard: Use only 3 print() calls
Can you produce the same output using only 3 `print()` calls? (Hint: Use `sep="\n"` and `end="\n\n"` to print entire sections at once.)

## Professional Improvements

As you progress through this course, you will learn better ways to implement this project:

1. **With variables (Module 07):** Store your name, age, and other details in variables so the card is easier to update
2. **With functions (Module 39):** Create separate functions for each section
3. **With string formatting (Module 15):** Use f-strings for cleaner alignment
4. **With user input (Module 14):** Let the user enter their own information
5. **With file handling (Module 71):** Save the card to a text file
6. **With loops (Module 32):** Print borders using a loop instead of string multiplication
7. **With classes (Module 61):** Create a `Card` class that generates different card styles
8. **With tkinter (Module 197):** Turn this into a GUI application

## Scaling Ideas

- **Multi-page output:** Create a program that prints a different card each time it runs
- **Team directory:** Extend the concept to print cards for multiple people
- **HTML version:** Modify the output to be HTML instead of plain text
- **Internationalization:** Print the card in multiple languages

## Submission Checklist

- [ ] File is named `introduction_card.py`
- [ ] Header comment explains the program
- [ ] At least 8 lines of output
- [ ] Decorative border using character repetition
- [ ] Uses at least one `sep` or `end` parameter
- [ ] Organized into clear sections
- [ ] All sections have section-comment headers
- [ ] Program runs without errors
- [ ] Output is visually clean and readable
