from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')

logos = [
    ('ARCA', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/ARCA_logo.png', 'Logo oficial de ARCA'),
    ('Correo Argentino', 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Correo_Argentino_Logo.svg', 'Logo de Correo Argentino'),
    ('OCA', 'https://upload.wikimedia.org/wikipedia/commons/c/ce/OCA_logo.svg', 'Logo de OCA'),
    ('Andreani', 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_de_Andreani.jpg', 'Logo de Andreani'),
    ('Tiendanube', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Logo_Tiendanube_2025.svg', 'Logo de Tiendanube'),
]

pattern = re.compile(r'<div class="integration"><div class="brandmark"><strong[^>]*>.*?</strong></div>(<h3>.*?</h3><small>.*?</small>)</div>')

def repl(i):
    name, url, alt = logos[i]
    return f'<div class="integration"><div class="brandmark"><img src="{url}" alt="{alt}" loading="lazy" referrerpolicy="no-referrer"></div>\\1</div>'

matches = list(pattern.finditer(s))
if len(matches) < 5:
    raise SystemExit(f'Expected 5 integration cards, found {len(matches)}')

for i in range(4, -1, -1):
    m = matches[i]
    replacement = repl(i).replace('\\\\1', r'\\1')
    s = s[:m.start()] + pattern.sub(lambda _: replacement, m.group(0), count=1) + s[m.end():]

if 'ml-brand-logo' not in s:
    css = '<style>.ml-brand-logo{display:block;max-width:190px;max-height:62px;width:auto;height:auto;object-fit:contain;margin:0 0 12px}.ml-brand-logo-wrap{display:flex;align-items:center;justify-content:flex-start}</style>'
    s = s.replace('</head>', css + '</head>', 1)

ml_logo = '<img class="ml-brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/MercadoLibre_logo.PNG" alt="Logo de Mercado Libre" loading="lazy" referrerpolicy="no-referrer">'
if 'alt="Logo de Mercado Libre"' not in s:
    s = s.replace('<div class="ml-badge">NUEVO · PLAN PREMIUM</div>', '<div class="ml-badge">NUEVO · PLAN PREMIUM</div>' + ml_logo, 1)

p.write_text(s, encoding='utf-8')
print('Official integration logos applied')
