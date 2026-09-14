from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')

# Use clean transparent horizontal assets.
s = s.replace('https://upload.wikimedia.org/wikipedia/commons/6/60/Mercado_Libre_wordmark_%28Spanish_version%29.svg', 'https://logo-teka.com/download/logo/69794/svg2/')

# Remove previous logo overrides so this block is the single source of truth.
s = re.sub(r'\.ml-integration \.brandmark img\{[^}]*\}', '', s)
s = re.sub(r'\.ml-card \.ml-visual img\{[^}]*\}', '', s)
s = re.sub(r'\.integration-brand-card:nth-child\(5\) \.brandmark img\{[^}]*\}', '', s)
s = re.sub(r'\.integration-brand-card:nth-child\(4\) \.brandmark img\{[^}]*\}', '', s)

css = '''
/* FINAL INTEGRATION CARDS */
.integration-grid{gap:18px}
.integration-brand-card{min-height:250px;padding:24px 20px 20px;justify-content:flex-start}
.integration-brand-card .brandmark{height:105px;margin:0 0 14px;display:flex;align-items:center;justify-content:center}
.integration-brand-card .brandmark img{display:block;width:auto!important;height:auto!important;max-width:220px!important;max-height:68px!important;object-fit:contain!important;filter:none!important;transform:none!important;background:transparent!important;padding:0!important;border-radius:0!important}
.integration-brand-card h3{font-size:17px;margin:0 0 2px;font-weight:800}
.integration-brand-card small{font-size:12px;min-height:20px}
.integration-brand-card .official-badge{margin-top:13px}
.integration-brand-card:nth-child(1) .brandmark img{max-width:205px!important;max-height:58px!important}
.integration-brand-card:nth-child(2) .brandmark img{max-width:195px!important;max-height:60px!important}
.integration-brand-card:nth-child(3) .brandmark img{max-width:210px!important;max-height:64px!important}
.integration-brand-card:nth-child(4) .brandmark img{max-width:215px!important;max-height:62px!important}
.integration-brand-card:nth-child(5) .brandmark img{max-width:205px!important;max-height:55px!important}
.integration-brand-card:nth-child(6) .brandmark img{max-width:205px!important;max-height:68px!important}
.integration-brand-card:nth-child(6){border-color:#1688e4}
.ml-card .ml-visual img{width:280px!important;max-width:100%!important;max-height:125px!important;object-fit:contain!important;background:transparent!important;padding:0!important;border-radius:0!important;filter:none!important}
@media(max-width:620px){
 .integration-brand-card{min-height:235px;padding:20px 10px 16px}
 .integration-brand-card .brandmark{height:82px;margin-bottom:10px}
 .integration-brand-card .brandmark img{max-width:145px!important;max-height:54px!important}
 .integration-brand-card h3{font-size:14px}
 .integration-brand-card small{font-size:10px}
 .integration-brand-card .official-badge{font-size:9px;padding:6px 8px;margin-top:10px}
}
'''

# Keep only one final integration block.
s = re.sub(r'\n/\* FINAL INTEGRATION CARDS \*/.*?(?=</style>)', '\n', s, flags=re.S)
s = s.replace('</style>', css + '</style>')
p.write_text(s, encoding='utf-8')
print('Integration cards normalized.')
