# Mini Project: Comment System with Live Preview

## Objective

Build a comment system with a textarea that includes character counting, auto-resize, markdown preview, emoji picker, @mention suggestions, and reply threading.

## Requirements

1. **Comment Textarea**: Auto-resizing with maxlength 1000 chars and character counter
2. **Live Preview**: Side-by-side or toggle-able preview of formatted comment
3. **Emoji Picker**: Grid of common emojis that insert at cursor position
4. **@Mentions**: Type @ to trigger a user suggestion dropdown
5. **Reply Threading**: Reply button on comments opens a nested textarea
6. **Form Validation**: Minimum 10 characters, required
7. **Character Limit Warning**: Visual indicator when approaching limit (80%+)

## Implementation

Build a complete comment system that demonstrates textarea features:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comments</title>
  <style>
    /* Style the comment system with all required features */
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI',sans-serif; background:#f7f8fc; padding:30px; }
    .container { max-width:700px; margin:0 auto; }
    .comment-box { background:white; border-radius:12px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.08); }
    textarea { width:100%; padding:12px 16px; border:2px solid #e2e8f0; border-radius:8px; font-family:inherit; font-size:15px; line-height:1.5; resize:none; overflow:hidden; min-height:100px; transition:border-color 0.3s; }
    textarea:focus { border-color:#4a6cf7; outline:none; box-shadow:0 0 0 3px rgba(74,108,247,0.12); }
    .char-count { text-align:right; font-size:13px; color:#718096; margin-top:4px; }
    .char-count.warning { color:#e53e3e; }
    .toolbar { display:flex; gap:8px; margin:8px 0; }
    .toolbar button { padding:6px 12px; background:#e2e8f0; border:none; border-radius:4px; cursor:pointer; font-size:16px; }
    .toolbar button:hover { background:#cbd5e0; }
    .preview { display:none; background:#f8f9fa; border-radius:8px; padding:16px; margin-top:8px; min-height:80px; line-height:1.6; white-space:pre-wrap; }
    .preview.active { display:block; }
    .btn-submit { padding:12px 24px; background:#4a6cf7; color:white; border:none; border-radius:8px; font-size:15px; cursor:pointer; margin-top:8px; }
    .btn-submit:hover { background:#3b5de7; }
    .comment { padding:16px; border-left:3px solid #4a6cf7; margin-top:16px; background:#f8f9fa; border-radius:0 8px 8px 0; }
    .comment .author { font-weight:600; color:#2d3748; }
    .comment .time { font-size:12px; color:#718096; }
    .comment .content { margin:8px 0; white-space:pre-wrap; line-height:1.5; }
    .comment .reply-btn { padding:4px 12px; background:transparent; border:1px solid #4a6cf7; color:#4a6cf7; border-radius:4px; cursor:pointer; font-size:13px; }
    .reply-box { margin:8px 0 0 24px; }
    .reply-box textarea { min-height:60px; font-size:14px; }
    .mention-dropdown { display:none; position:absolute; background:white; border:1px solid #e2e8f0; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1); max-height:150px; overflow-y:auto; z-index:10; }
    .mention-dropdown.active { display:block; }
    .mention-item { padding:8px 16px; cursor:pointer; font-size:14px; }
    .mention-item:hover { background:#f0f4ff; }
  </style>
</head>
<body>
<div class="container">
  <div class="comment-box">
    <h2 style="margin-bottom:16px;">Leave a Comment</h2>
    <div style="position:relative;">
      <textarea id="commentInput" placeholder="Share your thoughts... (Type @ to mention)" maxlength="1000" oninput="autoResize(this); updateCounter(this); checkMention(this);"></textarea>
      <div class="mention-dropdown" id="mentionDropdown"></div>
    </div>
    <div class="char-count" id="charCount">0 / 1000</div>
    <div class="toolbar">
      <button onclick="insertEmoji('😊')">😊</button>
      <button onclick="insertEmoji('👍')">👍</button>
      <button onclick="insertEmoji('❤️')">❤️</button>
      <button onclick="insertEmoji('🎉')">🎉</button>
      <button onclick="insertEmoji('🔥')">🔥</button>
      <button onclick="insertEmoji('💡')">💡</button>
      <button onclick="togglePreview()">👁 Preview</button>
    </div>
    <div class="preview" id="preview"></div>
    <button class="btn-submit" onclick="submitComment()">Post Comment</button>
  </div>
  <div id="comments"></div>
</div>
<script>
const users = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
function autoResize(el) { el.style.height='auto'; el.style.height=el.scrollHeight+'px'; }
function updateCounter(el) {
  const c = document.getElementById('charCount');
  c.textContent = el.value.length + ' / 1000';
  c.className = 'char-count' + (el.value.length > 800 ? ' warning' : '');
}
function insertEmoji(emoji) {
  const ta = document.getElementById('commentInput');
  const start = ta.selectionStart;
  ta.setRangeText(emoji, start, start, 'end');
  ta.focus();
  updateCounter(ta);
  autoResize(ta);
}
function togglePreview() {
  const p = document.getElementById('preview');
  p.classList.toggle('active');
  if (p.classList.contains('active')) {
    p.textContent = document.getElementById('commentInput').value || '(preview empty)';
  }
}
function checkMention(ta) {
  const dropdown = document.getElementById('mentionDropdown');
  const pos = ta.selectionStart;
  const val = ta.value.substring(0, pos);
  const atMatch = val.match(/@(\w*)$/);
  if (atMatch) {
    const query = atMatch[1].toLowerCase();
    const matches = users.filter(u => u.toLowerCase().startsWith(query));
    if (matches.length) {
      const rect = ta.getBoundingClientRect();
      dropdown.style.top = '40px';
      dropdown.innerHTML = matches.map(u => `<div class="mention-item" onclick="insertMention('${u}')">${u}</div>`).join('');
      dropdown.classList.add('active');
      return;
    }
  }
  dropdown.classList.remove('active');
}
function insertMention(user) {
  const ta = document.getElementById('commentInput');
  const pos = ta.selectionStart;
  const val = ta.value;
  const atIdx = val.lastIndexOf('@', pos);
  ta.setRangeText(user + ' ', atIdx, pos, 'end');
  document.getElementById('mentionDropdown').classList.remove('active');
  ta.focus();
  updateCounter(ta);
  autoResize(ta);
}
function submitComment() {
  const ta = document.getElementById('commentInput');
  if (ta.value.trim().length < 10) { alert('Comment must be at least 10 characters.'); return; }
  const container = document.getElementById('comments');
  const div = document.createElement('div');
  div.className = 'comment';
  div.innerHTML = `<div class="author">You</div><div class="time">Just now</div><div class="content">${ta.value}</div><button class="reply-btn" onclick="replyTo(this)">Reply</button>`;
  container.prepend(div);
  ta.value = '';
  updateCounter(ta);
  autoResize(ta);
  document.getElementById('preview').classList.remove('active');
}
function replyTo(btn) {
  const parent = btn.parentElement;
  const existing = parent.querySelector('.reply-box');
  if (existing) { existing.remove(); return; }
  const box = document.createElement('div');
  box.className = 'reply-box';
  box.innerHTML = '<textarea rows="2" placeholder="Write a reply..." maxlength="500" style="width:100%;padding:8px 12px;border:2px solid #e2e8f0;border-radius:6px;font-family:inherit;font-size:14px;resize:none;overflow:hidden;" oninput="this.style.height=\'auto\';this.style.height=this.scrollHeight+\'px\'"></textarea><button style="margin-top:4px;padding:6px 14px;background:#4a6cf7;color:white;border:none;border-radius:4px;cursor:pointer;font-size:13px;" onclick="submitReply(this)">Reply</button>';
  parent.appendChild(box);
  box.querySelector('textarea').focus();
}
function submitReply(btn) {
  const ta = btn.previousElementSibling;
  if (!ta.value.trim()) return;
  const replyDiv = document.createElement('div');
  replyDiv.style.cssText = 'margin-top:8px;padding:8px 12px;background:#f0f4ff;border-radius:6px;';
  replyDiv.innerHTML = `<strong>You</strong><p style="margin-top:4px;white-space:pre-wrap;">${ta.value}</p>`;
  btn.parentElement.parentElement.appendChild(replyDiv);
  btn.parentElement.remove();
}
</script>
</body>
</html>
```

## Evaluation

- Auto-resize textarea (15 pts)
- Character counter with warnings (15 pts)
- Emoji insertion at cursor (15 pts)
- @mention suggestions (15 pts)
- Preview toggle (10 pts)
- Comment submission and display (10 pts)
- Reply threading (10 pts)
- Code quality and styling (10 pts)
