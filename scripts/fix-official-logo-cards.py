from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

cards = [
    ('ARCA', 'Facturación electrónica'),
    ('Correo Argentino', 'Envíos · Premium'),
    ('OCA', 'Envíos · Premium'),
    ('Andreani', 'Envíos · Premium'),
    ('Tiendanube', 'E-commerce · Premium'),
]
needle = r'\1</div>'
for name, subtitle in cards:
    replacement = f'<h3>{name}</h3><small>{subtitle}</small></div>'
    if needle not in s:
        raise SystemExit(f'Missing placeholder for {name}')
    s = s.replace(needle, replacement, 1)

p.write_text(s, encoding='utf-8')
print('Fixed integration card labels')
