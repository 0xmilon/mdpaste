// Initialize marked with options
marked.setOptions({
    gfm: true,
    breaks: true,
    highlight: function(code, lang) {
        // You can add syntax highlighting here later
        return code;
    }
});

// Get the actual content from the server-side rendered data
const markdown = document.getElementById('raw-content').textContent;

// Render markdown
function renderMarkdown() {
    document.getElementById('content').innerHTML = marked.parse(markdown);
}

// View raw markdown
function viewRaw() {
    const content = document.getElementById('content');
    const isRaw = content.classList.toggle('raw-mode');
    
    if (isRaw) {
        content.innerHTML = `<pre class="whitespace-pre-wrap font-mono text-sm">${markdown}</pre>`;
    } else {
        renderMarkdown();
    }
}

// Copy content to clipboard
async function copyContent() {
    try {
        await navigator.clipboard.writeText(markdown);
        const copyBtn = document.querySelector('[title="Copy"]');
        const originalEmoji = copyBtn.textContent;
        copyBtn.textContent = '✅';
        setTimeout(() => {
            copyBtn.textContent = originalEmoji;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', renderMarkdown);
