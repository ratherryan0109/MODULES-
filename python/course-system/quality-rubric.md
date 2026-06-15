# Quality Rubric — 70-Point Scoring System

Every module must be scored after generation. A passing score is 65/70 minimum. Below 65: reject, revise, re-evaluate.

## Scoring Dimensions

### 1. Accuracy: /10

| Score | Criteria |
|-------|----------|
| 10 | All code correct, explanations technically precise, no factual errors |
| 9 | Minor imprecision in explanation (not technically wrong, just unclear) |
| 8 | One minor factual error | 
| 6–7 | Multiple minor errors or one significant error |
| 0–5 | Major factual errors — content is misleading |

**Checks:**
- Is every code block runnable?
- Are all explanations technically correct?
- Are there any deprecated features or Python 2 remnants?
- Do complexity/performance claims match reality?

### 2. Depth: /10

| Score | Criteria |
|-------|----------|
| 10 | Covers what, why, how, real-world usage, edge cases, interview perspective |
| 9 | All major sections present, one section slightly shallow |
| 8 | Two sections shallow |
| 6–7 | Significant depth gaps (miss edge cases, no interview perspective) |
| 0–5 | Surface-level only, no depth |

**Checks:**
- Does lesson.md cover WHY before HOW?
- Are edge cases explicitly discussed?
- Are there anti-patterns / common mistakes?
- Does it include performance considerations?
- Does it include interview perspective?

### 3. Educational Quality: /10

| Score | Criteria |
|-------|----------|
| 10 | Excellent pedagogy: mental models, analogies, progressive complexity, zero-assumption |
| 9 | Good pedagogy with minor gaps |
| 8 | Decent but one section assumes prior knowledge |
| 6–7 | Multiple sections assume prior knowledge, weak analogies |
| 0–5 | Lectures instead of teaching, no mental models |

**Checks:**
- Does it assume the student knows nothing?
- Are there effective analogies?
- Is the difficulty progression smooth?
- Does it improve thinking or just present facts?

### 4. Examples: /10

| Score | Criteria |
|-------|----------|
| 10 | Every example has purpose, teaches something new, shows output, relevant to topic |
| 9 | One example is weak or redundant |
| 8 | Two examples are weak |
| 6–7 | Multiple weak examples, some filler |
| 0–5 | Examples are generic or copy-pasted with topic name swapped |

**Checks:**
- Is every example specific to this module's topic?
- Does each example show the output?
- Are examples progressively complex?
- No "data * 2" generic processing?

### 5. Projects: /10

| Score | Criteria |
|-------|----------|
| 10 | Full step-by-step, function-level analysis, line-by-line explanation, testing, extensions |
| 9 | One section missing or weak (e.g., extensions) |
| 8 | Two sections weak |
| 6–7 | Step-by-step exists but shallow, no function analysis |
| 0–5 | Generic starter code, no real project structure, no testing |

**Checks:**
- Is there a real project with a clear goal?
- Does the project build incrementally?
- Are all functions analyzed (purpose, signature, args, return, edge cases, complexity)?
- Does the project connect to the lesson content?

### 6. Interview Preparation: /10

| Score | Criteria |
|-------|----------|
| 10 | Excellent coverage: conceptual, coding, scenario, debugging questions with detailed answers |
| 9 | Good coverage, one weak area |
| 8 | Decent coverage, two weak areas |
| 6–7 | Questions are generic, not module-specific |
| 0–5 | Questions are vague, answers are one-liners |

**Checks:**
- Are questions specific to this module's content?
- Do answers teach something (not just state)?
- Is there variety (conceptual, coding, scenario)?
- Are there real company-style questions where applicable?

### 7. Consistency: /10

| Score | Criteria |
|-------|----------|
| 10 | Perfect match with Golden Module voice, structure, tone, philosophy |
| 9 | Minor word-choice differences, same structure and tone |
| 8 | Noticeable but acceptable style differences |
| 6–7 | Different voice — feels like a different author |
| 0–5 | Completely different style, structure, or philosophy |

**Checks:**
- Does it read like the same educator wrote it?
- Same section structure as Golden Module?
- Same teaching philosophy (WHY before HOW, zero-assumption)?
- Same use of analogies, rhetorical questions, direct address?

## Total: /70

**Passing: 65/70 minimum**
**Below 65: REJECT → REVISE → RE-EVALUATE**

## Review Process

After every batch of 10 modules:
1. Run Quality Review (score each module)
2. Run Technical Review (correctness, best practices, syntax)
3. Run Curriculum Review (prerequisite violations, concept overlap, project overlap)
4. Generate reports only — do not rewrite
5. Original module author applies fixes based on reports
6. Preserve original voice and style during fixes

## Reviewer Checklist

- [ ] All code runs without errors
- [ ] No deprecated Python features used
- [ ] Type hints are correct and consistent
- [ ] PEP 8 followed throughout
- [ ] Explanations are technically precise
- [ ] Analogies are accurate and helpful
- [ ] Difficulty progression is smooth
- [ ] No unnecessary prerequisite knowledge assumed
- [ ] Edge cases and error conditions discussed
- [ ] Interview questions are module-specific
- [ ] Project is relevant and achievable
- [ ] Quiz answers are correct and varied
- [ ] Examples are topic-specific and purposeful
- [ ] Voice matches Golden Module
- [ ] Structure matches Golden Module
