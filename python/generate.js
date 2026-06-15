const fs = require('fs');
const path = require('path');
const { modules } = require('./modules.js');

const COURSE_DIR = path.join(__dirname, 'Python Mastery Course');

// ===================== HELPERS =====================
const H = '#'; const H2 = '##'; const H3 = '###'; const H4 = '####';

function escHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// Generate a safe class name from any string
function safeClass(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

// ==================== createLesson ====================
function createLesson(module) {
  const c = module.concepts; const t = module.topic; const tl = t.toLowerCase();
  const lines = [];

  lines.push(`${H} ${t}`);
  lines.push('');
  lines.push(`${H2} Overview`);
  lines.push(module.desc);
  lines.push('');

  lines.push(`${H2} Learning Objectives`);
  lines.push('By the end of this module, you will be able to:');
  for (let i = 0; i < Math.min(c.length, 8); i++) {
    lines.push(`${i + 1}. Understand and apply ${c[i].toLowerCase()}`);
  }
  lines.push(`${Math.min(c.length, 8) + 1}. Debug common errors and edge cases related to ${tl}`);
  lines.push(`${Math.min(c.length, 8) + 2}. Write production-quality Python code following PEP 8 and best practices`);
  lines.push('');

  lines.push(`${H2} Key Concepts`);
  lines.push('');
  lines.push('| # | Concept | Description | Practical Use |');
  lines.push('|---|---------|-------------|---------------|');
  const descs = ['Core foundation for understanding this topic', 'Builds upon previous concepts', 'Enables practical implementation', 'Used in real-world applications', 'Advanced patterns and techniques', 'Optimization and best practices', 'Edge cases and error handling', 'Integration with other Python features'];
  c.forEach((concept, i) => {
    const d = descs[i % descs.length];
    const use = i % 2 === 0 ? 'Everyday Python development' : 'Advanced scenarios';
    lines.push(`| ${i + 1} | **${concept}** | ${d} | ${use} |`);
  });
  lines.push('');

  lines.push(`${H2} Detailed Explanation`);
  lines.push('');

  for (let i = 0; i < Math.min(c.length, 8); i++) {
    lines.push(`${H3} ${i + 1}. ${c[i]}`);
    lines.push('');
    lines.push(`${c[i]} is a fundamental concept in Python ${tl.toLowerCase()}. It enables developers to write more`);
    lines.push('efficient, readable, and maintainable code. Understanding this concept deeply is essential for');
    lines.push('building robust Python applications that handle real-world scenarios gracefully.');
    lines.push('');

    lines.push(`${H4} How It Works`);
    lines.push('');
    lines.push(`In Python, ${c[i].toLowerCase()} follows specific rules defined by the language specification.`);
    lines.push('The Python interpreter processes this according to well-defined semantics that ensure');
    lines.push('predictable behavior across different environments, operating systems, and Python versions.');
    lines.push('');

    lines.push(`${H4} Key Points`);
    lines.push(`- ${c[i]} is essential for understanding ${tl} thoroughly`);
    lines.push(`- Mastery of ${c[i].toLowerCase()} enables more advanced Python programming patterns`);
    lines.push('- Proper implementation follows PEP 8 conventions and Pythonic idioms');
    lines.push(`- Common mistakes include misunderstanding scope, type behavior, and edge cases`);
    lines.push(`- ${c[i]} integrates with other Python features to create powerful, composable solutions`);
    lines.push('');

    lines.push(`\`\`\`python`);
    lines.push(`# Example: ${c[i]}`);
    lines.push(`# This demonstrates the core mechanics of ${c[i].toLowerCase()}`);
    lines.push('');
    const safeName = c[i].toLowerCase().replace(/[^a-z0-9_]/gi, '_');
    lines.push(`def demonstrate_${safeName.replace(/^_+|_+$/g, '').replace(/_+/g, '_') || 'example'}():`);
    lines.push('    """Demonstrate ' + c[i] + ' with a practical example."""');
    lines.push(`    # Setup and initialization`);
    lines.push(`    result = None`);
    lines.push(`    print("Running ${c[i]} demonstration...")`);
    lines.push(`    return result`);
    lines.push('');
    lines.push(`if __name__ == "__main__":`);
    lines.push(`    demonstrate_${safeName.replace(/^_+|_+$/g, '').replace(/_+/g, '_') || 'example'}()`);
    lines.push('\`\`\`');
    lines.push('');
  }

  lines.push(`${H2} Comparison: Important Techniques`);
  lines.push('');
  lines.push('| Technique | When to Use | When to Avoid | Performance Impact |');
  lines.push('|-----------|-------------|---------------|-------------------|');
  const techs = [
    ['Basic approach', 'Simple use cases and learning', 'Complex production scenarios', 'Minimal overhead'],
    ['Advanced Pythonic pattern', 'Production code and libraries', 'Over-engineering simple tasks', 'Optimal when applicable'],
    ['Functional approach', 'Data transformations', 'State-heavy operations', 'Moderate, often optimal'],
    ['Object-oriented approach', 'Complex state management', 'Simple data processing', 'Moderate overhead'],
    ['Type-hinted approach', 'Large codebases and teams', 'Small scripts and prototypes', 'No runtime impact'],
    ['Comprehension approach', 'List/dict/set transformations', 'Complex multi-step logic', 'Faster than manual loops']
  ];
  techs.forEach(tech => { lines.push(`| ${tech[0]} | ${tech[1]} | ${tech[2]} | ${tech[3]} |`); });
  lines.push('');

  lines.push(`${H2} Common Mistakes and How to Avoid Them`);
  lines.push('');
  lines.push('| Mistake | Why It Happens | How to Fix | Prevention |');
  lines.push('|---------|---------------|------------|------------|');
  const mistakes = [
    ['Misunderstanding mutability', 'Reference vs value confusion', 'Use copy() or deepcopy()', 'Study Python data model'],
    ['Type errors', 'Dynamic typing surprises', 'Use isinstance() and type hints', 'Add type validation early'],
    ['Mutable default arguments', 'Default args evaluated once', 'Use None as sentinel', 'Never use mutable defaults'],
    ['Indentation errors', 'Mixing tabs and spaces', 'Use 4 spaces consistently', 'Configure editor for PEP 8'],
    ['Off-by-one errors', 'Zero-indexing confusion', 'Check range() boundaries', 'Test edge cases thoroughly'],
    ['Exception handling gaps', 'Assuming success paths', 'Add specific except clauses', 'Use defensive programming'],
    ['Scope issues', 'LEGB rule misunderstanding', 'Use global/nonlocal keywords', 'Minimize global variables'],
    ['Performance pitfalls', 'Unoptimized loops/structures', 'Use list comprehensions', 'Profile before optimizing']
  ];
  mistakes.forEach(m => { lines.push(`| ${m[0]} | ${m[1]} | ${m[2]} | ${m[3]} |`); });
  lines.push('');

  lines.push(`${H2} Concept Flow Diagram`);
  lines.push('');
  lines.push('```');
  const maxConceptLen = Math.max(...c.slice(0, 6).map(x => x.length));
  const boxWidth = Math.max(maxConceptLen + 4, 55);
  const topBorder = '┌' + '─'.repeat(boxWidth) + '┐';
  const midBorder = '├' + '─'.repeat(boxWidth) + '┤';
  const botBorder = '└' + '─'.repeat(boxWidth) + '┘';
  lines.push(topBorder);
  const titlePad = boxWidth - t.length - 2;
  const titleLeft = Math.floor(Math.max(0, titlePad) / 2);
  const titleRight = Math.max(0, titlePad) - titleLeft;
  lines.push('│ ' + t.padStart(t.length + titleLeft).padEnd(t.length + titleLeft + titleRight) + ' │');
  lines.push(midBorder);
  c.slice(0, Math.min(c.length, 6)).forEach((concept, i) => {
    const rem = boxWidth - concept.length;
    const l = Math.floor(rem / 2);
    const r = rem - l;
    lines.push('│' + ' '.repeat(Math.max(0, l)) + concept + ' '.repeat(Math.max(0, r)) + '│');
    if (i < Math.min(c.length, 6) - 1) {
      const arrowPad = Math.floor((boxWidth - 1) / 2);
      lines.push('│' + ' '.repeat(Math.max(0, arrowPad)) + '│' + ' '.repeat(Math.max(0, boxWidth - arrowPad - 1)) + '│');
      lines.push('│' + ' '.repeat(Math.max(0, arrowPad)) + '▼' + ' '.repeat(Math.max(0, boxWidth - arrowPad - 1)) + '│');
    }
  });
  lines.push(botBorder);
  lines.push('```');
  lines.push('');

  lines.push(`${H2} Best Practices`);
  lines.push('');
  const practices = [
    `Follow PEP 8 conventions consistently when working with ${tl}`,
    `Write clear, descriptive variable names that reveal intent`,
    `Add type hints to improve code readability and enable static analysis`,
    'Write docstrings for all public functions, classes, and modules (PEP 257)',
    `Handle edge cases and error conditions explicitly rather than assuming success`,
    `Prefer Pythonic idioms: comprehensions, context managers, and generator expressions`,
    `Test your implementation with different inputs and boundary conditions`,
    `Profile and optimize only when necessary — avoid premature optimization`
  ];
  practices.forEach((p, i) => { lines.push(`${i + 1}. ${p}`); });
  lines.push('');

  lines.push(`${H2} Practical Python Example`);
  lines.push('');
  lines.push('\`\`\`python');
  lines.push(`# Comprehensive Python example demonstrating ${tl}`);
  lines.push(`# This example covers the key concepts discussed in this module`);
  lines.push('');
  const sn = c[0].toLowerCase().replace(/[^a-z0-9_]/gi, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
  lines.push(`from typing import List, Optional, Any`);
  lines.push(`import sys`);
  lines.push('');
  lines.push(`# 1. Using ${c[0]}`);
  lines.push(`def process_data(items: List[Any]) -> None:`);
  lines.push(`    """Process a list of items demonstrating ${c[0]}."""`);
  lines.push(`    if not items:`);
  lines.push(`        print("No items to process")`);
  lines.push(`        return`);
  lines.push(`    for item in items:`);
  lines.push(`        print(f"Processing: {item}")`);
  lines.push('');
  lines.push(`# 2. Main execution`);
  lines.push(`def main() -> None:`);
  lines.push(`    """Main entry point demonstrating ${tl} concepts."""`);
  lines.push(`    sample_data = ["example1", "example2", "example3"]`);
  lines.push(`    process_data(sample_data)`);
  lines.push('');
  lines.push(`if __name__ == "__main__":`);
  lines.push(`    main()`);
  lines.push('\`\`\`');
  lines.push('');

  lines.push(`${H2} Practice Exercises`);
  lines.push('');
  lines.push('1. **Basic Exercise**: Write a Python script that demonstrates the core concept of this module.');
  lines.push('2. **Intermediate Exercise**: Extend the example to handle edge cases and add input validation.');
  lines.push('3. **Advanced Exercise**: Combine this module\'s concepts with Python comprehensions and type hints.');
  lines.push('4. **Debugging Exercise**: Intentionally introduce a common bug and practice debugging with pdb.');
  lines.push('5. **Refactoring Exercise**: Take non-Pythonic code and refactor it following best practices.');
  lines.push('6. **Performance Exercise**: Compare different approaches using timeit and analyze the results.');
  lines.push('7. **Testing Exercise**: Write unit tests using pytest for all functions in this module.');
  lines.push('');

  lines.push(`${H2} Key Takeaways`);
  lines.push('');
  lines.push(`- ${c[0]} is the foundation of ${tl} in Python`);
  lines.push(`- ${c[1]} builds on this foundation for more advanced use cases`);
  lines.push(`- ${c[2]} enables practical implementation in real projects`);
  lines.push('- Python\'s philosophy emphasizes readability, simplicity, and explicitness');
  lines.push(`- Understanding ${tl} deeply will make you a more effective Python developer`);
  lines.push('- Always consider edge cases, performance, and code maintainability');
  lines.push('');

  lines.push(`${H2} Summary`);
  lines.push('');
  lines.push(`This module covered ${t} in Python. You learned about ${c.slice(0, 4).join(', ')}, and`);
  lines.push(`practical techniques for ${c.slice(4, 6).join(', ')}. With this knowledge, you can`);
  lines.push('build more robust and maintainable Python applications. Practice regularly and');
  lines.push('refer to the Python documentation for deeper understanding of specific topics.');
  lines.push('');

  return lines.join('\n');
}

// ==================== createExamples ====================
function createExamples(module) {
  const c = module.concepts; const t = module.topic; const tl = t.toLowerCase();
  const lines = [];

  lines.push('<!DOCTYPE html>');
  lines.push('<html lang="en">');
  lines.push('<head>');
  lines.push('  <meta charset="UTF-8">');
  lines.push('  <meta name="viewport" content="width=device-width, initial-scale=1.0">');
  lines.push(`  <title>${t} - Examples</title>`);
  lines.push('  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css">');
  lines.push('  <style>');
  lines.push('    * { margin: 0; padding: 0; box-sizing: border-box; }');
  lines.push('    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f5f7fa; color: #1e293b; padding: 20px; }');
  lines.push('    .examples-container { max-width: 1000px; margin: 0 auto; }');
  lines.push('    h1 { color: #306998; margin-bottom: 8px; font-size: 1.8em; }');
  lines.push('    .subtitle { color: #475569; margin-bottom: 24px; font-size: 1em; }');
  lines.push('    .example-card { background: white; border-radius: 12px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }');
  lines.push('    .example-card h3 { color: #306998; margin-bottom: 12px; font-size: 1.2em; display: flex; align-items: center; gap: 10px; }');
  lines.push('    .example-card .badge { background: #FFD43B; color: #1e293b; padding: 2px 10px; border-radius: 12px; font-size: 0.7em; font-weight: 600; }');
  lines.push('    .example-card p { color: #475569; margin-bottom: 16px; line-height: 1.6; }');
  lines.push('    .code-block { background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; }');
  lines.push('    .code-block pre { margin: 0; padding: 16px; overflow-x: auto; font-size: 13px; line-height: 1.5; }');
  lines.push('    .code-block .copy-btn { float: right; background: #306998; color: white; border: none; padding: 4px 12px; font-size: 12px; border-radius: 4px; cursor: pointer; margin: 8px; }');
  lines.push('    .code-block .copy-btn:hover { background: #1e415e; }');
  lines.push('    .output-block { background: #1e293b; color: #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 12px; font-family: monospace; font-size: 13px; line-height: 1.5; white-space: pre-wrap; }');
  lines.push('    .output-block .prompt { color: #FFD43B; }');
  lines.push('    @media (max-width: 768px) { body { padding: 10px; } .example-card { padding: 16px; } }');
  lines.push('  </style>');
  lines.push('</head>');
  lines.push('<body>');
  lines.push('  <div class="examples-container">');
  lines.push(`    <h1>${t} — Examples</h1>`);
  lines.push(`    <p class="subtitle">Practical Python examples demonstrating ${tl}. Click <strong>Copy</strong> to copy each snippet.</p>`);
  lines.push('');

  const descs = ['Core foundation for understanding this topic', 'Builds upon previous concepts', 'Enables practical implementation', 'Used in real-world applications', 'Advanced patterns and techniques', 'Optimization and best practices', 'Edge cases and error handling', 'Integration with other Python features'];
  for (let i = 0; i < Math.min(c.length, 8); i++) {
    const conceptName = c[i];
    const desc = descs[i % descs.length];
    const safe = safeClass(conceptName);

    lines.push('    <div class="example-card">');
    lines.push(`      <h3>Example ${i + 1}: ${conceptName} <span class="badge">${i % 2 === 0 ? 'Basic' : 'Advanced'}</span></h3>`);
    lines.push(`      <p>${desc}. This example demonstrates how to work with ${conceptName.toLowerCase()} in Python.</p>`);
    lines.push('      <div class="code-block">');
    lines.push(`        <button class="copy-btn" onclick="copyCode(this)">Copy</button>`);
    lines.push('        <pre><code class="language-python">');

    // Python code for each example
    const codeLines = [
      `# Example ${i + 1}: ${conceptName}`,
      `# ${desc}`,
      '',
      `def demonstrate_${safe.replace(/-/g, '_')}():`,
      `    """Demonstrate ${conceptName} with Python code."""`,
      `    # Initialize sample data`,
      `    data: list = [1, 2, 3, 4, 5]`,
      `    print(f"Original data: {data}")`,
      '',
      `    # Apply ${conceptName.toLowerCase()} pattern`,
      `    result: list = process_data(data)`,
      `    print(f"Processed result: {result}")`,
      '',
      `    return result`,
      '',
      `def process_data(items: list) -> list:`,
      `    """Process items according to ${conceptName.toLowerCase()} rules."""`,
      `    # Processing logic`,
      `    return [item * 2 for item in items]`,
      '',
      `if __name__ == "__main__":`,
      `    demonstrate_${safe.replace(/-/g, '_')}()`,
    ];
    codeLines.forEach(line => {
      lines.push(escHtml(line));
    });

    lines.push('        </code></pre>');
    lines.push('      </div>');
    lines.push('      <div class="output-block">');
    lines.push('        <span class="prompt">$</span> python example.py<br>');
    lines.push('        Original data: [1, 2, 3, 4, 5]<br>');
    lines.push('        Processed result: [2, 4, 6, 8, 10]<br>');
    lines.push('      </div>');
    lines.push('    </div>');
    lines.push('');
  }

  lines.push('  </div>');
  lines.push('  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>');
  lines.push('  <script>hljs.highlightAll();</script>');
  lines.push('  <script>');
  lines.push('    function copyCode(btn) {');
  lines.push('      const code = btn.parentElement.querySelector("code").textContent;');
  lines.push('      navigator.clipboard.writeText(code).then(() => {');
  lines.push('        btn.textContent = "Copied!";');
  lines.push('        setTimeout(() => { btn.textContent = "Copy"; }, 2000);');
  lines.push('      });');
  lines.push('    }');
  lines.push('  </script>');
  lines.push('</body>');
  lines.push('</html>');

  return lines.join('\n');
}

// ==================== createPlayground ====================
function createPlayground(module) {
  const c = module.concepts; const t = module.topic; const tl = t.toLowerCase();
  const lines = [];

  lines.push('<!DOCTYPE html>');
  lines.push('<html lang="en">');
  lines.push('<head>');
  lines.push('  <meta charset="UTF-8">');
  lines.push('  <meta name="viewport" content="width=device-width, initial-scale=1.0">');
  lines.push(`  <title>${t} - Playground</title>`);
  lines.push('  <style>');
  lines.push('    * { margin: 0; padding: 0; box-sizing: border-box; }');
  lines.push('    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #1e293b; color: #e2e8f0; height: 100vh; display: flex; flex-direction: column; }');
  lines.push('    .header { background: #0f172a; padding: 12px 20px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #334155; }');
  lines.push('    .header h1 { font-size: 1.1em; color: #FFD43B; flex: 1; }');
  lines.push('    .header .status { font-size: 0.8em; color: #94a3b8; }');
  lines.push('    .header .status.loaded { color: #4ade80; }');
  lines.push('    .header button { background: #306998; color: white; border: none; padding: 8px 20px; border-radius: 8px; cursor: pointer; font-size: 0.85em; font-weight: 600; }');
  lines.push('    .header button:hover { background: #1e415e; }');
  lines.push('    .header button:disabled { opacity: 0.5; cursor: not-allowed; }');
  lines.push('    .snippets { background: #0f172a; padding: 8px 20px; display: flex; gap: 8px; flex-wrap: wrap; border-bottom: 1px solid #334155; }');
  lines.push('    .snippets button { background: #334155; color: #cbd5e1; border: 1px solid #475569; padding: 4px 14px; border-radius: 16px; cursor: pointer; font-size: 0.8em; }');
  lines.push('    .snippets button.active { background: #306998; color: white; border-color: #306998; }');
  lines.push('    .snippets button:hover { background: #475569; }');
  lines.push('    .main { display: flex; flex: 1; overflow: hidden; }');
  lines.push('    .editor-pane { flex: 1; display: flex; flex-direction: column; border-right: 1px solid #334155; }');
  lines.push('    .editor-pane textarea { flex: 1; background: #0f172a; color: #e2e8f0; border: none; padding: 16px; font-family: "JetBrains Mono", "Fira Code", monospace; font-size: 13px; line-height: 1.6; resize: none; outline: none; tab-size: 4; white-space: pre; overflow-wrap: normal; overflow-x: auto; }');
  lines.push('    .output-pane { flex: 1; display: flex; flex-direction: column; }');
  lines.push('    .output-pane .label { background: #0f172a; padding: 8px 16px; font-size: 0.8em; color: #94a3b8; border-bottom: 1px solid #334155; }');
  lines.push('    .output-pane .content { flex: 1; padding: 16px; font-family: "JetBrains Mono", "Fira Code", monospace; font-size: 13px; line-height: 1.6; overflow-y: auto; white-space: pre-wrap; }');
  lines.push('    .output-pane .content .error { color: #f87171; }');
  lines.push('    .output-pane .content .success { color: #4ade80; }');
  lines.push('    .loading-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.9); z-index: 100; justify-content: center; align-items: center; flex-direction: column; gap: 16px; }');
  lines.push('    .loading-overlay.show { display: flex; }');
  lines.push('    .loading-overlay .spinner { width: 48px; height: 48px; border: 4px solid #334155; border-top-color: #FFD43B; border-radius: 50%; animation: spin 1s linear infinite; }');
  lines.push('    @keyframes spin { to { transform: rotate(360deg); } }');
  lines.push('    @media (max-width: 768px) { .main { flex-direction: column; } .editor-pane { border-right: none; border-bottom: 1px solid #334155; height: 50%; } }');
  lines.push('  </style>');
  lines.push('</head>');
  lines.push('<body>');
  lines.push('  <div class="loading-overlay" id="loadingOverlay">');
  lines.push('    <div class="spinner"></div>');
  lines.push('    <div>Loading Python (Pyodide)...</div>');
  lines.push('  </div>');
  lines.push('  <div class="header">');
  lines.push(`    <h1>🐍 ${t} — Python Playground</h1>`);
  lines.push('    <span class="status" id="pyStatus">Pyodide: not loaded</span>');
  lines.push('    <button id="runBtn" onclick="runCode()" disabled>▶ Run</button>');
  lines.push('    <button onclick="resetCode()">↺ Reset</button>');
  lines.push('  </div>');
  lines.push('  <div class="snippets" id="snippetTabs">');
  c.slice(0, Math.min(c.length, 5)).forEach((concept, i) => {
    lines.push(`    <button class="${i === 0 ? 'active' : ''}" onclick="loadSnippet(${i})">${concept}</button>`);
  });
  lines.push('  </div>');
  lines.push('  <div class="main">');
  lines.push('    <div class="editor-pane">');
  lines.push('      <textarea id="codeEditor" spellcheck="false"></textarea>');
  lines.push('    </div>');
  lines.push('    <div class="output-pane">');
  lines.push('      <div class="label">Output</div>');
  lines.push('      <div class="content" id="output"></div>');
  lines.push('    </div>');
  lines.push('  </div>');

  // Snippet code array
  const snippetCodes = c.slice(0, Math.min(c.length, 5)).map((concept, i) => {
    const sn = safeClass(concept).replace(/-/g, '_');
    return [
      `# ${concept}`,
      `# Explore ${concept.toLowerCase()} interactively`,
      '',
      `def ${sn}_example():`,
      `    """Demonstrate ${concept.toLowerCase()}."""`,
      `    print("=== ${concept} ===")`,
      `    # TODO: Add your code here`,
      `    result = []`,
      `    for i in range(5):`,
      `        result.append(f"Item {i}")`,
      `    print(f"Result: {result}")`,
      `    return result`,
      '',
      `if __name__ == "__main__":`,
      `    ${sn}_example()`,
    ].join('\n');
  });

  lines.push('  <script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"></script>');
  lines.push('  <script>');
  lines.push('    const snippets = ' + JSON.stringify(snippetCodes) + ';');
  lines.push('    let pyodide = null;');
  lines.push('    const editor = document.getElementById("codeEditor");');
  lines.push('    const output = document.getElementById("output");');
  lines.push('    const runBtn = document.getElementById("runBtn");');
  lines.push('    const status = document.getElementById("pyStatus");');
  lines.push('    const loadingEl = document.getElementById("loadingOverlay");');
  lines.push('');
  lines.push('    async function initPyodide() {');
  lines.push('      loadingEl.classList.add("show");');
  lines.push('      try {');
  lines.push('        pyodide = await loadPyodide();');
  lines.push('        status.textContent = "Pyodide: ready";');
  lines.push('        status.classList.add("loaded");');
  lines.push('        runBtn.disabled = false;');
  lines.push('        loadingEl.classList.remove("show");');
  lines.push('        loadSnippet(0);');
  lines.push('      } catch (e) {');
  lines.push('        output.innerHTML = `<span class="error">Failed to load Pyodide: ${e.message}</span>`;');
  lines.push('        loadingEl.classList.remove("show");');
  lines.push('      }');
  lines.push('    }');
  lines.push('');
  lines.push('    function runCode() {');
  lines.push('      if (!pyodide) { output.innerHTML = "Loading..."; return; }');
  lines.push('      const code = editor.value;');
  lines.push('      output.innerHTML = "";');
  lines.push('      try {');
  lines.push('        pyodide.runPython(`');
  lines.push('import sys');
  lines.push('from io import StringIO');
  lines.push('_old_stdout = sys.stdout');
  lines.push('sys.stdout = StringIO()');
  lines.push('        `);');
  lines.push('        pyodide.runPython(code);');
  lines.push('        const captured = pyodide.runPython("sys.stdout.getvalue()");');
  lines.push('        pyodide.runPython("sys.stdout = _old_stdout");');
  lines.push('        output.textContent = captured || "(no output)";');
  lines.push('      } catch (e) {');
  lines.push('        output.innerHTML = `<span class="error">${e.message}</span>`;');
  lines.push('      }');
  lines.push('    }');
  lines.push('');
  lines.push('    function loadSnippet(index) {');
  lines.push('      if (snippets[index]) {');
  lines.push('        editor.value = snippets[index];');
  lines.push('        document.querySelectorAll(".snippets button").forEach((b, i) => {');
  lines.push('          b.classList.toggle("active", i === index);');
  lines.push('        });');
  lines.push('        output.innerHTML = "";');
  lines.push('      }');
  lines.push('    }');
  lines.push('');
  lines.push('    function resetCode() {');
  lines.push('      loadSnippet(0);');
  lines.push('    }');
  lines.push('');
  lines.push('    editor.addEventListener("keydown", (e) => {');
  lines.push('      if (e.key === "Tab") {');
  lines.push('        e.preventDefault();');
  lines.push('        const start = editor.selectionStart;');
  lines.push('        const end = editor.selectionEnd;');
  lines.push('        editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);');
  lines.push('        editor.selectionStart = editor.selectionEnd = start + 4;');
  lines.push('      }');
  lines.push('      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { runCode(); }');
  lines.push('    });');
  lines.push('');
  lines.push('    initPyodide();');
  lines.push('  </script>');
  lines.push('</body>');
  lines.push('</html>');

  return lines.join('\n');
}

// ==================== createQuiz ====================
function createQuiz(module) {
  const c = module.concepts; const t = module.topic; const tl = t.toLowerCase();
  const questions = [];

  function makeQ(question, opts, answer, explanation) {
    questions.push({ question, options: opts, answer, explanation });
  }

  // Generate 20 questions using concepts
  for (let i = 0; i < 20; i++) {
    const idx = i % Math.min(c.length, 8);
    const concept = c[idx];
    const qNum = i + 1;
    const topics = ['Python', tl, 'code', 'programming', 'development'];
    const randTopic = topics[i % topics.length];

    const qBanks = [
      [`What is the correct way to use ${concept.toLowerCase()} in Python?`, [`Use ${concept.toLowerCase()} directly`, `Use a third-party library`, `Avoid using it altogether`, `Use type() to check`], 'a', `${concept} is a core Python feature that should be used directly following best practices.`],
      [`Which of the following best describes ${concept}?`, [`A Python programming concept`, `A database system`, `A web framework`, `An operating system`], 'a', `${concept} is a fundamental concept in Python ${tl}.`],
      [`What is the primary benefit of understanding ${concept.toLowerCase()}?`, [`Writing better Python code`, `Faster computer boots`, `Better gaming performance`, `Larger hard drive space`], 'a', `Mastery of ${concept.toLowerCase()} directly improves your Python code quality.`],
      [`How does Python handle ${concept.toLowerCase()} compared to other languages?`, [`With Pythonic simplicity and readability`, `With complex syntax`, `It doesn't support it`, `Through external tools only`], 'a', `Python emphasizes clean, readable syntax for ${concept.toLowerCase()}.`],
      [`What should you consider when working with ${concept.toLowerCase()}?`, [`Edge cases, performance, and readability`, `Only the happy path`, `Never use it`, `Always avoid it`], 'a', `Professional Python development requires considering edge cases, performance, and readability.`],
      [`Which module is most relevant to ${concept.toLowerCase()}?`, [`Built-in Python features and stdlib`, `Only third-party packages`, `None — it's not supported`, `Only operating system modules`], 'a', `${concept} leverages Python's built-in features and standard library.`],
      [`How do you debug issues with ${concept.toLowerCase()} in Python?`, [`Using print(), pdb, or logging`, `Reboot the computer`, `Reinstall Python`, `Ignore the problem`], 'a', `Python provides multiple debugging tools including print(), pdb, and the logging module.`],
      [`What is the best practice for implementing ${concept.toLowerCase()}?`, [`Follow PEP 8 and Pythonic idioms`, `Always use complex solutions`, `Never document your code`, `Avoid type hints`], 'a', `Python best practices include PEP 8 compliance, Pythonic idioms, and proper documentation.`],
      [`How does ${concept.toLowerCase()} affect performance in Python?`, [`It depends on implementation and data size`, `It always slows down code`, `It always speeds up code`, `It has no effect`], 'a', `Performance impact varies based on implementation choices and data volume.`],
      [`What is a common mistake when using ${concept.toLowerCase()}?`, [`Misunderstanding scope and mutability`, `Reading the documentation`, `Writing unit tests`, `Using type hints`], 'a', `Scope and mutability are common sources of confusion in Python.`],
      [`How can you test code that uses ${concept.toLowerCase()}?`, [`Write unit tests with pytest or unittest`, `Don't test it`, `Only test manually`, `Use print statements only`], 'a', `Python's unittest and pytest frameworks provide robust testing capabilities.`],
      [`What Python feature integrates well with ${concept.toLowerCase()}?`, [`List comprehensions and type hints`, `Only C extensions`, `Only GUI frameworks`, `Only web frameworks`], 'a', `List comprehensions, type hints, and other Python features work well together.`],
      [`How does Python's design philosophy relate to ${concept.toLowerCase()}?`, [`"Simple is better than complex" applies`, `Complexity is encouraged`, `Readability is optional`, `Explicitness is discouraged`], 'a', `The Zen of Python emphasizes simplicity, readability, and explicitness.`],
      [`What should you do before optimizing ${concept.toLowerCase()} code?`, [`Profile to find actual bottlenecks`, `Optimize everything upfront`, `Never optimize`, `Rewrite in another language`], 'a', `Always profile first to identify real performance bottlenecks before optimizing.`],
      [`How do you handle errors in ${concept.toLowerCase()} implementation?`, [`Use try/except with specific exceptions`, `Use bare except clauses`, `Ignore all errors`, `Exit the program`], 'a', `Python's try/except should catch specific exceptions rather than using bare except.`],
      [`What is the role of documentation in ${concept.toLowerCase()}?`, [`PEP 257 docstrings explain intent`, `Documentation is unnecessary`, `Only comments matter`, `Only README files matter`], 'a', `PEP 257 docstrings provide essential documentation for functions, classes, and modules.`],
      [`How do you handle large datasets with ${concept.toLowerCase()}?`, [`Use generators or iterators for memory efficiency`, `Load everything into memory`, `Use global variables`, `Copy data repeatedly`], 'a', `Generators and iterators provide memory-efficient processing of large datasets.`],
      [`What is the Pythonic way to work with ${concept.toLowerCase()}?`, [`Use clear, explicit, and readable patterns`, `Use the shortest possible code`, `Use complex one-liners`, `Copy-paste from Stack Overflow`], 'a', `Pythonic code emphasizes clarity, readability, and explicitness over brevity.`],
      [`How does version compatibility affect ${concept.toLowerCase()}?`, [`Python 3.13+ has improved features`, `Only Python 2 matters`, `Versions don't matter`, `Always use legacy syntax`], 'a', `Modern Python 3.13+ provides improved features and better performance for ${concept.toLowerCase()}.`],
      [`What resources help master ${concept.toLowerCase()} in Python?`, [`Python docs, Real Python, and practice`, `Only YouTube videos`, `Only books from 2010`, `Just guessing`], 'a', `Official Python documentation, Real Python tutorials, and regular practice are key resources.`]
    ];

    const q = qBanks[i % qBanks.length];
    makeQ(q[0], q[1], q[2], q[3]);
  }

  return questions;
}

// ==================== createInterview ====================
function createInterview(module) {
  const c = module.concepts; const t = module.topic; const tl = t.toLowerCase();
  return [
    {
      question: `Explain what ${t} is and why it matters in Python development.`,
      answer: `${t} is a fundamental concept in Python programming. It involves ${c.slice(0, 3).join(', ')}. ` +
        `Understanding ${tl} is crucial because it enables developers to write more efficient, maintainable, and scalable Python code. ` +
        `It follows Python's philosophy of readability and explicitness, making code easier to understand and debug.`
    },
    {
      question: `What are the key concepts of ${t} that every Python developer should know?`,
      answer: `The key concepts include: ${c.slice(0, 6).join(', ')}. ` +
        `Each of these builds on the previous one, creating a comprehensive understanding of ${tl}. ` +
        `Mastery of these concepts distinguishes junior from senior Python developers.`
    },
    {
      question: `Can you provide a practical example of using ${t} in Python?`,
      answer: `A practical example of ${tl} involves using Python's built-in features and standard library. ` +
        `For instance, you might implement ${c[0].toLowerCase()} using a clear, type-hinted function, ` +
        `then extend it with ${c[1].toLowerCase()} for more advanced use cases. ` +
        `The example should follow PEP 8 conventions and include proper error handling.`
    },
    {
      question: `What are common mistakes developers make with ${t} and how do you avoid them?`,
      answer: `Common mistakes include: 1) Misunderstanding scope and mutability in ${c[0].toLowerCase()}, ` +
        `2) Not handling edge cases properly, 3) Ignoring performance implications, ` +
        `4) Writing non-Pythonic code that works but isn't idiomatic. ` +
        `These are avoided by: writing tests, using type hints, following PEP 8, and profiling when needed.`
    },
    {
      question: `How would you teach ${t} to a junior Python developer?`,
      answer: `I would start with the core philosophy behind ${tl}, then demonstrate ${c[0].toLowerCase()} with simple examples. ` +
        `Next, I'd show how ${c[1].toLowerCase()} builds on that foundation, gradually introducing more advanced concepts. ` +
        `Throughout, I'd emphasize Pythonic patterns, PEP 8 compliance, and the importance of writing testable code. ` +
        `Practical exercises and real-world analogies help solidify understanding.`
    }
  ];
}

// ==================== createChallenges ====================
function createChallenges(module) {
  const c = module.concepts; const t = module.topic; const tl = t.toLowerCase();
  const sn = safeClass(c[0]).replace(/-/g, '_');
  const capName = t.replace(/[^a-zA-Z0-9]/g, '');

  return [
    {
      id: 1, title: `Basic ${t} Implementation`,
      description: `Write a Python function that demonstrates the core concept of ${c[0]}. Include proper type hints, docstrings, and error handling. Test with sample data.`,
      difficulty: 'easy',
      starterCode: `from typing import List, Optional\n\ndef ${sn}_basic(data: List[int]) -> List[int]:\n    """Implement basic ${c[0].toLowerCase()} logic.\n    \n    Args:\n        data: Input list of integers\n        \n    Returns:\n        Processed list of integers\n    """\n    # TODO: Implement the logic\n    pass\n\nif __name__ == "__main__":\n    sample = [1, 2, 3, 4, 5]\n    result = ${sn}_basic(sample)\n    print(f"Result: {result}")`,
      solution: `from typing import List, Optional\n\ndef ${sn}_basic(data: List[int]) -> List[int]:\n    """Implement basic ${c[0].toLowerCase()} logic."""\n    if not data:\n        return []\n    return [x * 2 for x in data]\n\nif __name__ == "__main__":\n    sample = [1, 2, 3, 4, 5]\n    result = ${sn}_basic(sample)\n    print(f"Result: {result}")`
    },
    {
      id: 2, title: `Intermediate ${t} with Error Handling`,
      description: `Extend the basic implementation to handle edge cases: empty input, invalid types, boundary conditions. Add logging and type validation.`,
      difficulty: 'medium',
      starterCode: `import logging\nfrom typing import List, Any\n\nlogging.basicConfig(level=logging.INFO)\n\ndef ${sn}_intermediate(data: List[Any]) -> List[int]:\n    """Advanced ${c[0].toLowerCase()} with error handling.\n    \n    Args:\n        data: Input list (any types)\n        \n    Returns:\n        Processed list of integers\n        \n    Raises:\n        TypeError: If data is not a list\n        ValueError: If data contains invalid values\n    """\n    # TODO: Add validation and error handling\n    pass`,
      solution: `import logging\nfrom typing import List, Any\n\nlogging.basicConfig(level=logging.INFO)\n\ndef ${sn}_intermediate(data: List[Any]) -> List[int]:\n    """Advanced ${c[0].toLowerCase()} with error handling."""\n    if not isinstance(data, list):\n        raise TypeError("data must be a list")\n    if not data:\n        logging.warning("Empty data provided")\n        return []\n    result = []\n    for item in data:\n        try:\n            result.append(int(item) * 2)\n        except (ValueError, TypeError):\n            logging.warning(f"Skipping invalid item: {item}")\n            continue\n    return result`
    },
    {
      id: 3, title: `Advanced ${t} with Performance`,
      description: `Implement an optimized version using list comprehensions, generators, or other Pythonic patterns. Compare performance with timeit.`,
      difficulty: 'hard',
      starterCode: `import timeit\nfrom typing import List, Generator\n\ndef ${sn}_slow(data: List[int]) -> List[int]:\n    """Slow version using explicit loops."""\n    result = []\n    for i in range(len(data)):\n        result.append(data[i] * 2)\n    return result\n\ndef ${sn}_fast(data: List[int]) -> List[int]:\n    """Fast version using comprehension."""\n    # TODO: Implement optimized version\n    pass\n\nif __name__ == "__main__":\n    data = list(range(1000))\n    slow_time = timeit.timeit(lambda: ${sn}_slow(data), number=1000)\n    fast_time = timeit.timeit(lambda: ${sn}_fast(data), number=1000)\n    print(f"Slow: {slow_time:.4f}s, Fast: {fast_time:.4f}s")`,
      solution: `import timeit\nfrom typing import List, Generator\n\ndef ${sn}_slow(data: List[int]) -> List[int]:\n    """Slow version using explicit loops."""\n    result = []\n    for i in range(len(data)):\n        result.append(data[i] * 2)\n    return result\n\ndef ${sn}_fast(data: List[int]) -> List[int]:\n    """Fast version using comprehension."""\n    return [x * 2 for x in data]\n\nif __name__ == "__main__":\n    data = list(range(1000))\n    slow_time = timeit.timeit(lambda: ${sn}_slow(data), number=1000)\n    fast_time = timeit.timeit(lambda: ${sn}_fast(data), number=1000)\n    print(f"Slow: {slow_time:.4f}s, Fast: {fast_time:.4f}s")`
    },
    {
      id: 4, title: `Debugging ${t} Code`,
      description: `The following code has intentional bugs. Find and fix them using pdb, logging, and systematic debugging techniques.`,
      difficulty: 'medium',
      starterCode: `import pdb\n\n# This code has bugs — debug and fix it\ndef ${sn}_buggy(data):\n    """Process data (this function has bugs!)"""\n    result = []\n    for i = range(len(data)):\n        result.append(data[i] * 2  # Missing close paren\n    return result\n\nif __name__ == "__main__":\n    data = [1, 2, 3]\n    # TODO: Use pdb to debug\n    result = ${sn}_buggy(data)\n    print(f"Result: {result}")`,
      solution: `def ${sn}_fixed(data):\n    """Process data (bugs fixed)."""\n    result = []\n    for i in range(len(data)):\n        result.append(data[i] * 2)\n    return result\n\nif __name__ == "__main__":\n    data = [1, 2, 3]\n    result = ${sn}_fixed(data)\n    print(f"Result: {result}")`
    },
    {
      id: 5, title: `Refactoring ${t} to Pythonic Style`,
      description: `The code below works but is not Pythonic. Refactor it to use list comprehensions, type hints, proper naming, and follow PEP 8.`,
      difficulty: 'hard',
      starterCode: `# Non-Pythonic code — refactor me!\ndef do_stuff(x):\n    a = []\n    for i in x:\n        a.append(i * 2)\n    return a\n\ndef do_more_stuff(x, y):\n    r = []\n    for i in range(len(x)):\n        r.append(x[i] + y[i])\n    return r\n\nd = [1, 2, 3, 4, 5]\ne = [10, 20, 30, 40, 50]\nprint(do_stuff(d))\nprint(do_more_stuff(d, e))`,
      solution: `from typing import List\n\ndef double_items(data: List[int]) -> List[int]:\n    """Double each item in the list."""\n    return [x * 2 for x in data]\n\ndef add_lists(list1: List[int], list2: List[int]) -> List[int]:\n    """Add corresponding elements from two lists."""\n    return [a + b for a, b in zip(list1, list2)]\n\nif __name__ == "__main__":\n    nums = [1, 2, 3, 4, 5]\n    addends = [10, 20, 30, 40, 50]\n    print(double_items(nums))\n    print(add_lists(nums, addends))`
    }
  ];
}

// ==================== createCheatsheet ====================
function createCheatsheet(module) {
  const c = module.concepts; const t = module.topic; const tl = t.toLowerCase();
  const lines = [];

  lines.push(`# ${t} — Cheatsheet`);
  lines.push('');
  lines.push('## Quick Reference');
  lines.push('');
  lines.push('\`\`\`python');
  lines.push(`# ${t} — Quick Reference`);
  lines.push(`# Core syntax and common patterns`);
  lines.push('');
  const sn = c[0].toLowerCase().replace(/[^a-z0-9_]/gi, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
  lines.push(`# Basic ${c[0]}`);
  lines.push(`def basic_${sn}():`);
  lines.push('    pass');
  lines.push('');
  lines.push(`# ${c[1]} pattern`);
  lines.push(`def advanced_${sn}():`);
  lines.push('    return "result"');
  lines.push('\`\`\`');
  lines.push('');

  lines.push('## Key Concepts');
  lines.push('');
  c.forEach(concept => { lines.push(`- **${concept}**`); });
  lines.push('');

  lines.push('## Common Operations');
  lines.push('');
  lines.push('| Operation | Syntax | Example |');
  lines.push('|-----------|--------|---------|');
  const ops = [
    ['Basic usage', `function(${sn}_value)`, `process(${sn}_value)`],
    ['With type check', `isinstance(value, type)`, `isinstance(x, int)`],
    ['Error handling', `try/except`, `try: ... except ValueError: ...`],
    ['Type hinting', `def func() -> Type`, `def process() -> None:`],
    ['Documentation', '\"\"\"Docstring\"\"\"', '\"\"\"Function docs.\"\"\"'],
    ['Testing', 'assert', 'assert result == expected']
  ];
  ops.forEach(op => { lines.push(`| ${op[0]} | \`${op[1]}\` | \`${op[2]}\` |`); });
  lines.push('');

  lines.push('## Best Practices');
  lines.push('');
  const practices = [
    'Follow PEP 8 consistently',
    'Use type hints for function signatures',
    'Write docstrings for all public APIs',
    'Prefer list comprehensions over map/filter',
    'Use context managers (with) for resources',
    'Handle exceptions specifically, not broadly',
    'Use pathlib over os.path for paths',
    'Write tests before or alongside code'
  ];
  practices.forEach((p, i) => { lines.push(`${i + 1}. ${p}`); });
  lines.push('');

  lines.push('## Common Mistakes');
  lines.push('');
  const mistakes = [
    'Mutable default arguments (use None sentinel)',
    'Modifying list while iterating',
    'Catching bare exceptions',
    'Confusing == and is for comparisons',
    'Forgetting to close files (use context managers)',
    'Using time.time() for performance (use timeit)'
  ];
  mistakes.forEach(m => { lines.push(`- ${m}`); });
  lines.push('');

  lines.push('## Related Topics');
  lines.push('');
  c.forEach(concept => { lines.push(`- ${concept}`); });

  return lines.join('\n');
}

// ==================== createResources ====================
function createResources(module) {
  const t = module.topic; const tl = t.toLowerCase();
  const safe = safeClass(t);
  return [
    { title: `Python Official Documentation: ${t}`, url: `https://docs.python.org/3/tutorial/index.html`, type: 'documentation', description: `Official Python documentation covering ${tl} in detail.` },
    { title: `Real Python: ${t} Tutorials`, url: `https://realpython.com/`, type: 'tutorial', description: `Comprehensive tutorials with practical examples for ${tl}.` },
    { title: `Python ${t} - GeeksforGeeks`, url: `https://www.geeksforgeeks.org/python-programming-language/`, type: 'course', description: `GeeksforGeeks Python ${t} articles with examples and practice problems.` },
    { title: `${t} - W3Schools Python`, url: `https://www.w3schools.com/python/`, type: 'tutorial', description: `W3Schools ${tl} tutorial with interactive examples and exercises.` },
    { title: `PEP 8 -- Style Guide for Python Code`, url: `https://peps.python.org/pep-0008/`, type: 'documentation', description: `Official Python style guide for writing clean, readable ${tl} code.` }
  ];
}

// ==================== createProject ====================
function createProject(module) {
  const c = module.concepts; const t = module.topic; const tl = t.toLowerCase();
  const lines = [];
  const safeName = t.replace(/[^a-zA-Z0-9]/g, '');
  const sn = c[0].toLowerCase().replace(/[^a-z0-9_]/gi, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');

  lines.push(`# ${t} — Mini Project`);
  lines.push('');
  lines.push('## Project Overview');
  lines.push(`Build a practical Python application that demonstrates ${t.toLowerCase()}.`);
  lines.push('This project reinforces the following concepts:');
  c.forEach(concept => { lines.push(`- ${concept}`); });
  lines.push('');

  lines.push('## Learning Objectives');
  lines.push('By completing this project, you will:');
  lines.push('1. Apply theoretical knowledge of Python concepts to a real-world problem');
  lines.push('2. Practice writing clean, well-documented, and type-hinted Python code');
  lines.push('3. Implement proper error handling and input validation');
  lines.push('4. Test your implementation with various inputs and edge cases');
  lines.push('5. Build a portfolio-worthy Python application from scratch');
  lines.push('');

  lines.push('## Requirements');
  lines.push('');
  lines.push('### Functional Requirements');
  lines.push('- Accept user input or file input for processing');
  lines.push('- Apply the core concepts of the module correctly');
  lines.push('- Display results in a clear, readable format');
  lines.push('- Handle edge cases and invalid input gracefully');
  lines.push('');
  lines.push('### Technical Requirements');
  lines.push('- Use type hints for all function signatures (PEP 484)');
  lines.push('- Include docstrings for all functions and classes (PEP 257)');
  lines.push('- Follow PEP 8 style guidelines');
  lines.push('- Include at least one unit test');
  lines.push('');

  lines.push('## Starter Code');
  lines.push('');
  lines.push('\`\`\`python');
  lines.push(`from typing import List, Optional`);
  lines.push(`import logging`);
  lines.push('');
  lines.push(`logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")`);
  lines.push('');
  lines.push(`class ${safeName}Processor:`);
  lines.push(`    """Process and manage ${tl} data."""`);
  lines.push('');
  lines.push(`    def __init__(self, name: str = "default"):`);
  lines.push(`        """Initialize the processor with a name."""`);
  lines.push(`        self.name = name`);
  lines.push(`        self.history: List[str] = []`);
  lines.push('');
  lines.push(`    def process(self, data: List[int]) -> List[int]:`);
  lines.push(`        """Process input data using ${c[0].toLowerCase()}."""`);
  lines.push(`        result = [x * 2 for x in data]`);
  lines.push(`        self.history.append(f"Processed {len(data)} items")`);
  lines.push(`        return result`);
  lines.push('');
  lines.push(`    def get_history(self) -> List[str]:`);
  lines.push(`        """Return processing history."""`);
  lines.push(`        return self.history`);
  lines.push('');
  lines.push(`    def clear_history(self) -> None:`);
  lines.push(`        """Clear processing history."""`);
  lines.push(`        self.history.clear()`);
  lines.push('');
  lines.push(`def main() -> None:`);
  lines.push(`    """Main entry point for the application."""`);
  lines.push(`    processor = ${safeName}Processor("demo")`);
  lines.push(`    sample_data = [1, 2, 3, 4, 5]`);
  lines.push(`    result = processor.process(sample_data)`);
  lines.push(`    print(f"Result: {result}")`);
  lines.push(`    print(f"History: {processor.get_history()}")`);
  lines.push('');
  lines.push(`if __name__ == "__main__":`);
  lines.push(`    main()`);
  lines.push('\`\`\`');
  lines.push('');

  lines.push('## Step-by-Step Guide');
  lines.push('');
  lines.push('### Step 1: Setup and Planning');
  lines.push('- Review the module concepts and identify the core pattern');
  lines.push('- Plan your class structure and method signatures');
  lines.push('- Set up virtual environment and install dependencies if needed');
  lines.push('');
  lines.push('### Step 2: Core Implementation');
  lines.push('- Implement the main processing logic');
  lines.push('- Add proper error handling and input validation');
  lines.push('- Include logging for debugging');
  lines.push('');
  lines.push('### Step 3: Testing and Validation');
  lines.push('- Test with normal inputs');
  lines.push('- Test with edge cases (empty, invalid, boundary)');
  lines.push('- Add unit tests with pytest');
  lines.push('');

  lines.push('## Expected Output');
  lines.push('');
  lines.push('\`\`\`');
  lines.push('Result: [2, 4, 6, 8, 10]');
  lines.push('History: ["Processed 5 items"]');
  lines.push('\`\`\`');
  lines.push('');

  lines.push('## Bonus Challenges');
  lines.push('');
  lines.push('1. Add file input/output support (read from CSV, write results)');
  lines.push('2. Implement parallel processing for large datasets');
  lines.push('3. Add a command-line interface using argparse');
  lines.push('4. Create a simple GUI using tkinter');
  lines.push('5. Implement caching for repeated operations');
  lines.push('6. Add performance benchmarks and comparison');
  lines.push('');

  lines.push('## Submission Checklist');
  lines.push('');
  lines.push('- [ ] Code follows PEP 8 style guide');
  lines.push('- [ ] All functions have type hints and docstrings');
  lines.push('- [ ] Error handling covers edge cases');
  lines.push('- [ ] At least one unit test is included');
  lines.push('- [ ] README with setup instructions');
  lines.push('- [ ] requirements.txt if external packages used');

  return lines.join('\n');
}

// ==================== VIDEO LIBRARY ====================
const videoLibrary = {
  byTopic: {
    '01': [
      { title: 'Python for Everybody - Full Course', url: 'https://www.youtube.com/watch?v=8DvywoWv6fY', embedUrl: 'https://www.youtube.com/embed/8DvywoWv6fY', channel: 'freeCodeCamp', duration: '4:26:52', level: 'Beginner', timestamp: '' },
      { title: 'Introduction to Python', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', embedUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc', channel: 'Tech With Tim', duration: '30:00', level: 'Beginner', timestamp: '' }
    ],
    '02': [
      { title: 'Python Tutorial for Beginners - Setup', url: 'https://www.youtube.com/watch?v=YYXdXT2l-Gg', embedUrl: 'https://www.youtube.com/embed/YYXdXT2l-Gg', channel: 'Programming with Mosh', duration: '15:00', level: 'Beginner', timestamp: '' }
    ],
    '07': [
      { title: 'Python Variables and Data Types', url: 'https://www.youtube.com/watch?v=cQT33yu9pY8', embedUrl: 'https://www.youtube.com/embed/cQT33yu9pY8', channel: 'Corey Schafer', duration: '24:00', level: 'Beginner', timestamp: '' }
    ],
    '08': [
      { title: 'Python Data Types Explained', url: 'https://www.youtube.com/watch?v=W8KRzm-HUcc', embedUrl: 'https://www.youtube.com/embed/W8KRzm-HUcc', channel: 'Corey Schafer', duration: '21:00', level: 'Beginner', timestamp: '' }
    ],
    '11': [
      { title: 'Python String Methods', url: 'https://www.youtube.com/watch?v=uWGPg4mM6l4', embedUrl: 'https://www.youtube.com/embed/uWGPg4mM6l4', channel: 'Corey Schafer', duration: '23:00', level: 'Beginner', timestamp: '' }
    ],
    '18': [
      { title: 'Python Lists Tutorial', url: 'https://www.youtube.com/watch?v=W8KRzm-HUcc', embedUrl: 'https://www.youtube.com/embed/W8KRzm-HUcc', channel: 'Corey Schafer', duration: '25:00', level: 'Beginner', timestamp: '' }
    ],
    '24': [
      { title: 'Python Dictionaries Tutorial', url: 'https://www.youtube.com/watch?v=2r0mB6jJGUA', embedUrl: 'https://www.youtube.com/embed/2r0mB6jJGUA', channel: 'Corey Schafer', duration: '22:00', level: 'Beginner', timestamp: '' }
    ],
    '33': [
      { title: 'Python For Loops Tutorial', url: 'https://www.youtube.com/watch?v=94UHCEmprCY', embedUrl: 'https://www.youtube.com/embed/94UHCEmprCY', channel: 'Corey Schafer', duration: '20:00', level: 'Beginner', timestamp: '' }
    ],
    '38': [
      { title: 'Python List Comprehensions', url: 'https://www.youtube.com/watch?v=AhSvKGTh28Q', embedUrl: 'https://www.youtube.com/embed/AhSvKGTh28Q', channel: 'Corey Schafer', duration: '18:00', level: 'Intermediate', timestamp: '' }
    ],
    '39': [
      { title: 'Python Functions Tutorial', url: 'https://www.youtube.com/watch?v=9Os0i3cC0jk', embedUrl: 'https://www.youtube.com/embed/9Os0i3cC0jk', channel: 'Corey Schafer', duration: '30:00', level: 'Beginner', timestamp: '' }
    ],
    '42': [
      { title: 'Python Lambda Functions', url: 'https://www.youtube.com/watch?v=25ovCm9jKfA', embedUrl: 'https://www.youtube.com/embed/25ovCm9jKfA', channel: 'Corey Schafer', duration: '15:00', level: 'Intermediate', timestamp: '' }
    ],
    '56': [
      { title: 'Python Exception Handling', url: 'https://www.youtube.com/watch?v=NIWwJbo-9_8', embedUrl: 'https://www.youtube.com/embed/NIWwJbo-9_8', channel: 'Corey Schafer', duration: '20:00', level: 'Beginner', timestamp: '' }
    ],
    '60': [
      { title: 'Python OOP Tutorial', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM', embedUrl: 'https://www.youtube.com/embed/ZDa-Z5JzLYM', channel: 'Corey Schafer', duration: '25:00', level: 'Intermediate', timestamp: '' }
    ],
    '61': [
      { title: 'Python OOP - Classes and Objects', url: 'https://www.youtube.com/watch?v=JeznW_7DlB0', embedUrl: 'https://www.youtube.com/embed/JeznW_7DlB0', channel: 'Tech With Tim', duration: '30:00', level: 'Intermediate', timestamp: '' }
    ],
    '67': [
      { title: 'Python Inheritance Tutorial', url: 'https://www.youtube.com/watch?v=RSl87lqOXDE', embedUrl: 'https://www.youtube.com/embed/RSl87lqOXDE', channel: 'Corey Schafer', duration: '28:00', level: 'Intermediate', timestamp: '' }
    ],
    '71': [
      { title: 'Python File Handling Tutorial', url: 'https://www.youtube.com/watch?v=OhE9j0a7e3s', embedUrl: 'https://www.youtube.com/embed/OhE9j0a7e3s', channel: 'Corey Schafer', duration: '25:00', level: 'Beginner', timestamp: '' }
    ],
    '82': [
      { title: 'Python CSV Files Tutorial', url: 'https://www.youtube.com/watch?v=Xi52tx6ph9A', embedUrl: 'https://www.youtube.com/embed/Xi52tx6ph9A', channel: 'Corey Schafer', duration: '22:00', level: 'Beginner', timestamp: '' }
    ],
    '108': [
      { title: 'Python NumPy Tutorial', url: 'https://www.youtube.com/watch?v=8Y0qQEh7dJg', embedUrl: 'https://www.youtube.com/embed/8Y0qQEh7dJg', channel: 'freeCodeCamp', duration: '4:00:00', level: 'Intermediate', timestamp: '' }
    ],
    '111': [
      { title: 'Python Pandas Tutorial', url: 'https://www.youtube.com/watch?v=vmEHCJofslg', embedUrl: 'https://www.youtube.com/embed/vmEHCJofslg', channel: 'freeCodeCamp', duration: '5:00:00', level: 'Intermediate', timestamp: '' }
    ],
    '117': [
      { title: 'Python Matplotlib Tutorial', url: 'https://www.youtube.com/watch?v=3Xc3CK6K8qQ', embedUrl: 'https://www.youtube.com/embed/3Xc3CK6K8qQ', channel: 'Corey Schafer', duration: '30:00', level: 'Intermediate', timestamp: '' }
    ],
    '143': [
      { title: 'Machine Learning with Python', url: 'https://www.youtube.com/watch?v=i_LwzRVP7lo', embedUrl: 'https://www.youtube.com/embed/i_LwzRVP7lo', channel: 'freeCodeCamp', duration: '9:00:00', level: 'Intermediate', timestamp: '' }
    ],
    '150': [
      { title: 'Linear Regression with Python', url: 'https://www.youtube.com/watch?v=NUXdtN1W1FE', embedUrl: 'https://www.youtube.com/embed/NUXdtN1W1FE', channel: 'Corey Schafer', duration: '25:00', level: 'Intermediate', timestamp: '' }
    ],
    '184': [
      { title: 'Python Django Tutorial', url: 'https://www.youtube.com/watch?v=UmljXZIypDc', embedUrl: 'https://www.youtube.com/embed/UmljXZIypDc', channel: 'Corey Schafer', duration: '4:00:00', level: 'Intermediate', timestamp: '' }
    ],
    '190': [
      { title: 'Python Requests Tutorial', url: 'https://www.youtube.com/watch?v=tb8gHvYlCFs', embedUrl: 'https://www.youtube.com/embed/tb8gHvYlCFs', channel: 'Corey Schafer', duration: '20:00', level: 'Beginner', timestamp: '' }
    ],
    '192': [
      { title: 'Python Debugging with PDB', url: 'https://www.youtube.com/watch?v=VQjCx3P89yk', embedUrl: 'https://www.youtube.com/embed/VQjCx3P89yk', channel: 'Corey Schafer', duration: '18:00', level: 'Intermediate', timestamp: '' }
    ],
    '194': [
      { title: 'Python Testing with unittest', url: 'https://www.youtube.com/watch?v=6tNS--WetLI', embedUrl: 'https://www.youtube.com/embed/6tNS--WetLI', channel: 'Corey Schafer', duration: '35:00', level: 'Intermediate', timestamp: '' }
    ]
  },
  categories: {
    'Python Fundamentals': [
      { title: 'Python Tutorial - Python for Beginners', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', embedUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc', channel: 'Programming with Mosh', duration: '6:00:00', level: 'Beginner', timestamp: '' },
      { title: 'Python Full Course for Beginners', url: 'https://www.youtube.com/watch?v=H1elmMB0kBY', embedUrl: 'https://www.youtube.com/embed/H1elmMB0kBY', channel: 'Bro Code', duration: '6:00:00', level: 'Beginner', timestamp: '' },
      { title: 'Learn Python - Full Course', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw', embedUrl: 'https://www.youtube.com/embed/rfscVS0vtbw', channel: 'freeCodeCamp', duration: '4:26:52', level: 'Beginner', timestamp: '' },
      { title: 'Python Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=7P6G6L4p5cE', embedUrl: 'https://www.youtube.com/embed/7P6G6L4p5cE', channel: 'Corey Schafer', duration: '4:00:00', level: 'Beginner', timestamp: '' }
    ],
    'Python Collections': [
      { title: 'Python Lists, Tuples, and Dictionaries', url: 'https://www.youtube.com/watch?v=W8KRzm-HUcc', embedUrl: 'https://www.youtube.com/embed/W8KRzm-HUcc', channel: 'Corey Schafer', duration: '30:00', level: 'Beginner', timestamp: '' }
    ],
    'Control Flow': [
      { title: 'Python Control Flow (If, For, While)', url: 'https://www.youtube.com/watch?v=94UHCEmprCY', embedUrl: 'https://www.youtube.com/embed/94UHCEmprCY', channel: 'Corey Schafer', duration: '25:00', level: 'Beginner', timestamp: '' }
    ],
    'Functions & Modules': [
      { title: 'Python Functions and Modules', url: 'https://www.youtube.com/watch?v=9Os0i3cC0jk', embedUrl: 'https://www.youtube.com/embed/9Os0i3cC0jk', channel: 'Corey Schafer', duration: '30:00', level: 'Beginner', timestamp: '' }
    ],
    'Object Oriented Programming': [
      { title: 'Python OOP Tutorial Series', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM', embedUrl: 'https://www.youtube.com/embed/ZDa-Z5JzLYM', channel: 'Corey Schafer', duration: '2:00:00', level: 'Intermediate', timestamp: '' },
      { title: 'Object Oriented Programming with Python', url: 'https://www.youtube.com/watch?v=EJ_3vD7SSCA', embedUrl: 'https://www.youtube.com/embed/EJ_3vD7SSCA', channel: 'Tech With Tim', duration: '45:00', level: 'Intermediate', timestamp: '' }
    ],
    'File Handling': [
      { title: 'Python File Handling Tutorial', url: 'https://www.youtube.com/watch?v=OhE9j0a7e3s', embedUrl: 'https://www.youtube.com/embed/OhE9j0a7e3s', channel: 'Corey Schafer', duration: '25:00', level: 'Beginner', timestamp: '' }
    ],
    'MySQL Databases': [
      { title: 'Python MySQL Tutorial', url: 'https://www.youtube.com/watch?v=wlTjn1TYWMY', embedUrl: 'https://www.youtube.com/embed/wlTjn1TYWMY', channel: 'Corey Schafer', duration: '30:00', level: 'Intermediate', timestamp: '' }
    ],
    'MongoDB Databases': [
      { title: 'Python MongoDB Tutorial', url: 'https://www.youtube.com/watch?v=rE_bJl2GAY8', embedUrl: 'https://www.youtube.com/embed/rE_bJl2GAY8', channel: 'Tech With Tim', duration: '25:00', level: 'Intermediate', timestamp: '' }
    ],
    'NumPy, Pandas & SciPy': [
      { title: 'Python NumPy Tutorial', url: 'https://www.youtube.com/watch?v=8Y0qQEh7dJg', embedUrl: 'https://www.youtube.com/embed/8Y0qQEh7dJg', channel: 'freeCodeCamp', duration: '4:00:00', level: 'Intermediate', timestamp: '' },
      { title: 'Python Pandas for Data Analysis', url: 'https://www.youtube.com/watch?v=vmEHCJofslg', embedUrl: 'https://www.youtube.com/embed/vmEHCJofslg', channel: 'freeCodeCamp', duration: '5:00:00', level: 'Intermediate', timestamp: '' },
      { title: 'Pandas Tutorial (Python)', url: 'https://www.youtube.com/watch?v=PcvsQww2bIw', embedUrl: 'https://www.youtube.com/embed/PcvsQww2bIw', channel: 'Data School', duration: '30:00', level: 'Intermediate', timestamp: '' }
    ],
    'Matplotlib Data Visualization': [
      { title: 'Matplotlib Tutorial Series', url: 'https://www.youtube.com/watch?v=3Xc3CK6K8qQ', embedUrl: 'https://www.youtube.com/embed/3Xc3CK6K8qQ', channel: 'Corey Schafer', duration: '2:00:00', level: 'Intermediate', timestamp: '' },
      { title: 'Python Matplotlib Crash Course', url: 'https://www.youtube.com/watch?v=6R2fyGk4xHs', embedUrl: 'https://www.youtube.com/embed/6R2fyGk4xHs', channel: 'Tech With Tim', duration: '30:00', level: 'Intermediate', timestamp: '' }
    ],
    'Machine Learning': [
      { title: 'Machine Learning with Python (scikit-learn)', url: 'https://www.youtube.com/watch?v=rvVkVsGdfu8', embedUrl: 'https://www.youtube.com/embed/rvVkVsGdfu8', channel: 'freeCodeCamp', duration: '9:00:00', level: 'Intermediate', timestamp: '' },
      { title: 'Python Machine Learning Tutorial', url: 'https://www.youtube.com/watch?v=7eh4d6sabA0', embedUrl: 'https://www.youtube.com/embed/7eh4d6sabA0', channel: 'Tech With Tim', duration: '1:00:00', level: 'Intermediate', timestamp: '' },
      { title: 'Machine Learning for Beginners', url: 'https://www.youtube.com/watch?v=NWONeJKn6kc', embedUrl: 'https://www.youtube.com/embed/NWONeJKn6kc', channel: 'Krish Naik', duration: '2:00:00', level: 'Beginner', timestamp: '' },
      { title: 'StatQuest - Machine Learning', url: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI', embedUrl: 'https://www.youtube.com/embed/Gv9_4yMHFhI', channel: 'StatQuest with Josh Starmer', duration: '15:00', level: 'Beginner', timestamp: '' }
    ],
    'Data Structures & Algorithms': [
      { title: 'Data Structures and Algorithms in Python', url: 'https://www.youtube.com/watch?v=pkYVOmU3MgA', embedUrl: 'https://www.youtube.com/embed/pkYVOmU3MgA', channel: 'freeCodeCamp', duration: '8:00:00', level: 'Intermediate', timestamp: '' },
      { title: 'Python Data Structures Tutorial', url: 'https://www.youtube.com/watch?v=9olJJx31sCs', embedUrl: 'https://www.youtube.com/embed/9olJJx31sCs', channel: 'Tech With Tim', duration: '30:00', level: 'Intermediate', timestamp: '' }
    ],
    'Django & Backend Development': [
      { title: 'Python Django Tutorial', url: 'https://www.youtube.com/watch?v=UmljXZIypDc', embedUrl: 'https://www.youtube.com/embed/UmljXZIypDc', channel: 'Corey Schafer', duration: '4:00:00', level: 'Intermediate', timestamp: '' },
      { title: 'Django for Everybody', url: 'https://www.youtube.com/watch?v=F5mRW0je-Ug', embedUrl: 'https://www.youtube.com/embed/F5mRW0je-Ug', channel: 'freeCodeCamp', duration: '6:00:00', level: 'Beginner', timestamp: '' }
    ],
    'Professional Python Development': [
      { title: 'Python Best Practices and Tips', url: 'https://www.youtube.com/watch?v=OSGv2VnC0go', embedUrl: 'https://www.youtube.com/embed/OSGv2VnC0go', channel: 'Tech With Tim', duration: '20:00', level: 'Intermediate', timestamp: '' },
      { title: 'Understanding Python Type Hints', url: 'https://www.youtube.com/watch?v=0_0u51hD6l0', embedUrl: 'https://www.youtube.com/embed/0_0u51hD6l0', channel: 'ArjanCodes', duration: '15:00', level: 'Intermediate', timestamp: '' }
    ],
    'Real World Projects': [
      { title: 'Python Projects for Beginners', url: 'https://www.youtube.com/watch?v=8ext9G7xspg', embedUrl: 'https://www.youtube.com/embed/8ext9G7xspg', channel: 'freeCodeCamp', duration: '6:00:00', level: 'Beginner', timestamp: '' },
      { title: 'Python Project Tutorial', url: 'https://www.youtube.com/watch?v=DLn3jOsTIVE', embedUrl: 'https://www.youtube.com/embed/DLn3jOsTIVE', channel: 'Tech With Tim', duration: '45:00', level: 'Intermediate', timestamp: '' }
    ]
  },
  defaults: [
    { title: 'Python Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', embedUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc', channel: 'Programming with Mosh', duration: '6:00:00', level: 'Beginner', timestamp: '' },
    { title: 'Learn Python - Full Course', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw', embedUrl: 'https://www.youtube.com/embed/rfscVS0vtbw', channel: 'freeCodeCamp', duration: '4:26:52', level: 'Beginner', timestamp: '' },
    { title: 'Python Full Course for Beginners', url: 'https://www.youtube.com/watch?v=H1elmMB0kBY', embedUrl: 'https://www.youtube.com/embed/H1elmMB0kBY', channel: 'Bro Code', duration: '6:00:00', level: 'Beginner', timestamp: '' },
    { title: 'Python Tutorial (Corey Schafer)', url: 'https://www.youtube.com/watch?v=7P6G6L4p5cE', embedUrl: 'https://www.youtube.com/embed/7P6G6L4p5cE', channel: 'Corey Schafer', duration: '4:00:00', level: 'Beginner', timestamp: '' }
  ]
};

// ==================== createVideo ====================
function createVideo(module) {
  const result = [];
  const pushed = new Set();

  function addVideo(v) {
    const key = v.url + v.channel;
    if (!pushed.has(key) && result.length < 5) {
      pushed.add(key);
      result.push(v);
    }
  }

  // 1. Topic-specific videos
  if (videoLibrary.byTopic[module.id]) {
    videoLibrary.byTopic[module.id].forEach(addVideo);
  }

  // 2. Category videos
  const section = module.section;
  const catKey = Object.keys(videoLibrary.categories).find(k =>
    section.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(section.toLowerCase())
  );
  if (catKey) {
    videoLibrary.categories[catKey].forEach(addVideo);
  } else {
    // Try partial match
    const words = section.toLowerCase().split(/\s+/);
    for (const [key, videos] of Object.entries(videoLibrary.categories)) {
      const kw = key.toLowerCase();
      if (words.some(w => kw.includes(w) || w.includes(kw))) {
        videos.forEach(addVideo);
        break;
      }
    }
  }

  // 3. Fill remaining from defaults
  videoLibrary.defaults.forEach(addVideo);

  // Ensure at least 3
  while (result.length < 3) {
    addVideo(videoLibrary.defaults[result.length % videoLibrary.defaults.length]);
  }

  return result.slice(0, 5);
}

// ==================== GENERATE ALL ====================
function generateAll() {
  console.log(`Generating Python Mastery Course — ${modules.length} modules...`);
  console.log('');

  if (!fs.existsSync(COURSE_DIR)) {
    fs.mkdirSync(COURSE_DIR, { recursive: true });
  }

  let totalFiles = 0;
  let totalErrors = 0;

  modules.forEach((mod, idx) => {
    const dirName = `${mod.id}-${mod.name}`;
    const dirPath = path.join(COURSE_DIR, dirName);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const files = [
      { name: 'lesson.md', content: createLesson(mod) },
      { name: 'examples.html', content: createExamples(mod) },
      { name: 'playground.html', content: createPlayground(mod) },
      { name: 'quiz.json', content: JSON.stringify(createQuiz(mod), null, 2) },
      { name: 'interview.json', content: JSON.stringify(createInterview(mod), null, 2) },
      { name: 'challenges.json', content: JSON.stringify(createChallenges(mod), null, 2) },
      { name: 'cheatsheet.md', content: createCheatsheet(mod) },
      { name: 'resources.json', content: JSON.stringify(createResources(mod), null, 2) },
      { name: 'project.md', content: createProject(mod) },
      { name: 'video.json', content: JSON.stringify(createVideo(mod), null, 2) }
    ];

    files.forEach(file => {
      try {
        fs.writeFileSync(path.join(dirPath, file.name), file.content, 'utf-8');
        totalFiles++;
      } catch (err) {
        console.error(`  ERROR writing ${dirName}/${file.name}: ${err.message}`);
        totalErrors++;
      }
    });

    const pct = ((idx + 1) / modules.length * 100).toFixed(1);
    const msg = `  [${pct}%] Module ${mod.id}/${modules.length}: ${mod.topic}`;
    process.stdout.write(msg + ' '.repeat(Math.max(0, 80 - msg.length)) + '\r');
  });

  console.log('');
  console.log('');
  console.log('=== Generation Complete ===');
  console.log(`  Modules: ${modules.length}`);
  console.log(`  Files written: ${totalFiles}`);
  console.log(`  Errors: ${totalErrors}`);
  console.log(`  Directory: ${COURSE_DIR}`);
}

generateAll();
