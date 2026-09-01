import os

changes = {

'about.html': [
    ('Founded by Alexander Krasnov — a physicist who has worked in laser development since 1982 — the company has spent decades',
     'Founded by Alexander Krasnov, a physicist who has worked in laser development since 1982, the company has spent decades'),
    ('Greiner Industries — a fabricator known for the world\'s largest steel rolling capacity — selected',
     'Greiner Industries, a fabricator known for the world\'s largest steel rolling capacity, selected'),
    ('clean, consistent cut quality across material thicknesses — a combination that competing fiber',
     'clean, consistent cut quality across material thicknesses, a combination that competing fiber'),
    ('cannot replicate this on stainless — secondary finishing is typically required.',
     'cannot replicate this on stainless. Secondary finishing is typically required.'),
    ('marble, and more — all at high quality.',
     'marble, and more, all at high quality.'),
    ('when cutting stainless steel — a direct, measurable reduction in operating costs at industrial scale.',
     'when cutting stainless steel, a direct and measurable reduction in operating costs at industrial scale.'),
    ('and the proprietary "A" mode — a precisely tuned combination at optimized proportions',
     'and the proprietary "A" mode, a precisely tuned combination at optimized proportions'),
    ('TEM00 — M²',
     'TEM00: M²'),
    ('TEM01* — M²',
     'TEM01*: M²'),
    ('alt="Technology Spotlight — Greiner Industries article"',
     'alt="Technology Spotlight: Greiner Industries article"'),
    ('Patent certificate — RU 2812411</h2>',
     'Patent certificate: RU 2812411</h2>'),
    ('combination-plasma excitation of the active medium — a core element of the ZORKA platform architecture.',
     'combination-plasma excitation of the active medium, a core element of the ZORKA platform architecture.'),
],

'anti-drone-system.html': [
    ('<title>Anti-Drone System — ZORKA 1000M | Alkras</title>',
     '<title>Anti-Drone System: ZORKA 1000M | Alkras</title>'),
    ('<div class="eyebrow">Anti-Drone — ZORKA 1000M</div>',
     '<div class="eyebrow">Anti-Drone: ZORKA 1000M</div>'),
    ('<h1>ZORKA 1000M — standalone laser or complete turnkey system.</h1>',
     '<h1>ZORKA 1000M: standalone laser or complete turnkey system.</h1>'),
    ('The physics of 10.6µm versus 1µm — and why it matters in the field.',
     'The physics of 10.6µm versus 1µm, and why it matters in the field.'),
    ('3 to 5 times the rate of 1µm fiber laser systems — meaning less power',
     '3 to 5 times the rate of 1µm fiber laser systems, meaning less power'),
    ('than 1µm fiber systems — a critical advantage in real operational environments.',
     'than 1µm fiber systems, a critical advantage in real operational environments.'),
    ('<div class="eyebrow">Option 1 — Standalone Laser</div>',
     '<div class="eyebrow">Option 1: Standalone Laser</div>'),
    ('<h2 style="font-size:clamp(22px,2.8vw,32px); margin-bottom:18px;">ZORKA 1000M — the standalone laser weapon module.</h2>',
     '<h2 style="font-size:clamp(22px,2.8vw,32px); margin-bottom:18px;">ZORKA 1000M: the standalone laser weapon module.</h2>'),
    ('Operates at 10.6µm — eye-safe spectrum — with',
     'Operates at 10.6µm (eye-safe spectrum) with'),
    ('Physical neutralization at 1,500 m — functional effect to 2,000 m',
     'Physical neutralization at 1,500 m; functional effect to 2,000 m'),
    ('Adaptive focus collimator — 50 to 5,000 m range',
     'Adaptive focus collimator, 50 to 5,000 m range'),
    ('<div class="eyebrow">Option 2 — Complete System</div>',
     '<div class="eyebrow">Option 2: Complete System</div>'),
    ('ZORKA 1000M + Visual &amp; Motion Tracking — fully integrated.',
     'ZORKA 1000M + Visual &amp; Motion Tracking, fully integrated.'),
    ('electro-optical targeting and motion tracking system — delivering autonomous',
     'electro-optical targeting and motion tracking system, delivering autonomous'),
    ('<strong>ZORKA 1000M Laser Module</strong> — 10.6µm molecular laser',
     '<strong>ZORKA 1000M Laser Module:</strong> 10.6µm molecular laser'),
    ('<strong>Electro-Optical Targeting System</strong> — HD and thermal camera',
     '<strong>Electro-Optical Targeting System:</strong> HD and thermal camera'),
    ('<strong>Precision Gimbal Turret</strong> — Servo-driven platform',
     '<strong>Precision Gimbal Turret:</strong> Servo-driven platform'),
    ('<strong>Command &amp; Control Interface</strong> — Operator console',
     '<strong>Command &amp; Control Interface:</strong> Operator console'),
    ('<strong>Ground Deployment Package</strong> — Mobile platform',
     '<strong>Ground Deployment Package:</strong> Mobile platform'),
],

'contact.html': [
    ('Alexander Krasnov — Founder',
     'Alexander Krasnov, Founder'),
    ('Daniel Krasnov — Engineering',
     'Daniel Krasnov, Engineering'),
],

'index.html': [
    ('<span class="card-date">01 — Industrial</span>',
     '<span class="card-date">01 · Industrial</span>'),
    ('<span class="card-date">02 — Defense</span>',
     '<span class="card-date">02 · Defense</span>'),
    ('<span class="card-date">03 — Partnerships</span>',
     '<span class="card-date">03 · Partnerships</span>'),
    ('The superior laser platform — on performance, cost, and longevity.',
     'The superior laser platform: performance, cost, and longevity.'),
    ('extremely low in cost to maintain — no fiber source degradation, no expensive replacement cycles, and a design architecture',
     'extremely low in cost to maintain: no fiber source degradation, no expensive replacement cycles, and a design architecture'),
    ('handles materials fiber systems simply cannot — glass, ceramics, composites, wood, and plastics.',
     'handles materials fiber systems simply cannot: glass, ceramics, composites, wood, and plastics.'),
    ('5-Year Total Cost of Ownership — 2.0 kW Systems',
     '5-Year Total Cost of Ownership, 2.0 kW Systems'),
    ('aluminum to 4mm — faster and cleaner than fiber alternatives.',
     'aluminum to 4mm, faster and cleaner than fiber alternatives.'),
    ('Three focused areas of engineering — each backed by the same patented platform.',
     'Three focused areas of engineering, each backed by the same patented platform.'),
    ('Patent certificate — RU 2812411</h3>',
     'Patent certificate: RU 2812411</h3>'),
    ('combination-plasma excitation of the active medium — a core element of the ZORKA platform architecture.',
     'combination-plasma excitation of the active medium, a core element of the ZORKA platform architecture.'),
],

'laser-systems.html': [
    ('<title>Laser Systems — LS-Series | Alkras</title>',
     '<title>Laser Systems: LS-Series | Alkras</title>'),
    ('<div class="eyebrow">Industrial — Laser Systems</div>',
     '<div class="eyebrow">Industrial: Laser Systems</div>'),
    ('<h1>MALIBU 1212 — precision die board laser cutting.</h1>',
     '<h1>MALIBU 1212: precision die board laser cutting.</h1>'),
    ('ANSEAT Lasertechnik (Germany) — a specialist manufacturer with decades of precision machine engineering behind it.',
     'ANSEAT Lasertechnik (Germany), a specialist manufacturer with decades of precision machine engineering behind it.'),
    ('as the laser runs — a capability no other machine on the market offers — ensuring consistent',
     'as the laser runs, a capability no other machine on the market offers, ensuring consistent'),
    ('<span>Compact footprint — approx. 600 × 500 mm floor space</span>',
     '<span>Compact footprint, approx. 600 × 500 mm floor space</span>'),
    ('<span>Dual-spindle drive with 2 motors — 300 mm ball screws</span>',
     '<span>Dual-spindle drive with 2 motors, 300 mm ball screws</span>'),
    ('<strong>Real-time slot width auto-correction during cutting</strong> — no other machine offers this capability',
     '<strong>Real-time slot width auto-correction during cutting:</strong> no other machine offers this capability'),
    ('<span>Automatic loading &amp; unloading — batch-process multiple sheets unattended</span>',
     '<span>Automatic loading &amp; unloading: batch-process multiple sheets unattended</span>'),
    ('MALIBU 1212 — System Specs',
     'MALIBU 1212 System Specs'),
],

'lasers.html': [
    ('<title>Lasers — ZORKA 2000 | Alkras</title>',
     '<title>Lasers: ZORKA 2000 | Alkras</title>'),
    ('<div class="eyebrow">Industrial — Lasers</div>',
     '<div class="eyebrow">Industrial: Lasers</div>'),
    ('<h1>ZORKA 2000 — the molecular CO₂ laser platform.</h1>',
     '<h1>ZORKA 2000: the molecular CO₂ laser platform.</h1>'),
    ('A new generation of molecular CO₂ laser — engineered for industrial precision.',
     'A new generation of molecular CO₂ laser, engineered for industrial precision.'),
    ('at 10.6µm wavelength — the optimal range for materials processing.',
     'at 10.6µm wavelength, the optimal range for materials processing.'),
    ('ZORKA 2000 — Technical Specifications</h2>',
     'ZORKA 2000 Technical Specifications</h2>'),
    ('>Output Power — TEM00<',
     '>Output Power: TEM00<'),
    ('>Output Power — TEM01*<',
     '>Output Power: TEM01*<'),
    ('>Output Power — "A" Mode<',
     '>Output Power: "A" Mode<'),
    ('>Beam Quality — TEM00<',
     '>Beam Quality: TEM00<'),
    ('>Beam Quality — TEM01*<',
     '>Beam Quality: TEM01*<'),
    ('>Beam Quality — "A" Mode<',
     '>Beam Quality: "A" Mode<'),
    ('Maximum cutting thickness — excellent edge quality',
     'Maximum cutting thickness, excellent edge quality'),
    ('2,000 W — sustained',
     '2,000 W, sustained'),
    ('2,000 W — degrades',
     '2,000 W, degrades'),
    ('Mirror-smooth stainless steel finish</strong> — a surface quality fiber lasers',
     'Mirror-smooth stainless steel finish,</strong> a surface quality fiber lasers'),
    ('50% less nitrogen consumption</strong> as assist gas for stainless steel cutting — direct operating cost reduction',
     '50% less nitrogen consumption</strong> as assist gas for stainless steel cutting, a direct operating cost reduction'),
    ('composites, plastics, marble, and wood — materials where fiber lasers underperform or fail entirely.',
     'composites, plastics, marble, and wood, covering materials where fiber lasers underperform or fail entirely.'),
    ('"A" mode — achieved without sacrificing beam quality.',
     '"A" mode, achieved without sacrificing beam quality.'),
    ('Three operating modes — optimized for every task.',
     'Three operating modes, optimized for every task.'),
    ('TEM₀₀ Mode — 1,200 W',
     'TEM₀₀ Mode, 1,200 W'),
    ('TEM₀₁* Mode — 1,500 W',
     'TEM₀₁* Mode, 1,500 W'),
    ('across the beam perimeter — preferred for thicker metals',
     'across the beam perimeter, preferred for thicker metals'),
    ('"A" Mode — 2,000 W',
     '"A" Mode, 2,000 W'),
    ('and 20mm beam diameter — proprietary to the ZORKA platform.',
     'and 20mm beam diameter, proprietary to the ZORKA platform.'),
    ('Carbon Steel — 1 to 12mm',
     'Carbon Steel, 1 to 12mm'),
    ('Stainless Steel — up to 8mm',
     'Stainless Steel, up to 8mm'),
    ('Aluminum — up to 4mm',
     'Aluminum, up to 4mm'),
    ('fiber lasers cannot handle — making it a single system',
     'fiber lasers cannot handle, making it a single system'),
    ('across metal, glass, and wood — not cherry-picked conditions, real operational parameters.',
     'across metal, glass, and wood. Not cherry-picked conditions, real operational parameters.'),
    ('5mm Glass — 10 ipm',
     '5mm Glass at 10 ipm'),
    ('6mm Glass — 10 ipm',
     '6mm Glass at 10 ipm'),
    ('16mm Plywood — 700W',
     '16mm Plywood at 700W'),
    ('Stainless Steel 1.5mm — 8 m/min',
     'Stainless Steel 1.5mm at 8 m/min'),
    ('Mild Steel 6mm — 2 m/min',
     'Mild Steel 6mm at 2 m/min'),
],

'partnerships.html': [
    ('performance advantages over CO₂, fiber, and disk laser alternatives — in both industrial cutting and anti-drone applications.',
     'performance advantages over CO₂, fiber, and disk laser alternatives, in both industrial cutting and anti-drone applications.'),
    ('High-growth markets — industrial and defense',
     'High-growth markets: industrial and defense'),
],

'retrofit-integration.html': [
    ('<div class="eyebrow">Industrial — Retrofit Integration</div>',
     '<div class="eyebrow">Industrial: Retrofit Integration</div>'),
    ('direct retrofit integration — replacing an aging laser source with an AL-series unit while keeping your existing gantry, table, chiller, and motion control intact.',
     'direct retrofit integration, replacing an aging laser source with an AL-series unit while keeping your existing gantry, table, chiller, and motion control intact.'),
    ('with an AL-series unit — sized to your power requirements — while keeping',
     'with an AL-series unit (sized to your power requirements) while keeping'),
    ('alt="Steel cut samples — retrofit integration"',
     'alt="Steel cut samples, retrofit integration"'),
],

'what-we-offer.html': [
    ('Everything Alkras builds — industrial and defense.',
     'Everything Alkras builds: industrial and defense.'),
    ('real-time slot width auto-correction — a capability no competing machine offers.',
     'real-time slot width auto-correction, a capability no competing machine offers.'),
    ('Keep your gantry, table, chiller, and motion control — replace only the laser.',
     'Keep your gantry, table, chiller, and motion control. Replace only the laser.'),
],

'zorka-1000m.html': [
    ('<div class="eyebrow">Anti-Drone — ZORKA 1000M</div>',
     '<div class="eyebrow">Anti-Drone: ZORKA 1000M</div>'),
    ('<h1>ZORKA 1000M — precision UAV neutralization at up to 2,000 meters.</h1>',
     '<h1>ZORKA 1000M: precision UAV neutralization at up to 2,000 meters.</h1>'),
    ('small to medium UAVs — the most common threat class',
     'small to medium UAVs, the most common threat class'),
    ('Functional effect — disabling onboard electronics and sensors — extends',
     'Functional effect, disabling onboard electronics and sensors, extends'),
    ('alt="ZORKA developmental model — internal assembly"',
     'alt="ZORKA developmental model, internal assembly"'),
    ("Where it started — and how far it's come.",
     "Where it started, and how far it's come."),
    ('earlier developmental model of the ZORKA anti-drone laser system — a proof-of-concept platform',
     'earlier developmental model of the ZORKA anti-drone laser system, a proof-of-concept platform'),
],

}

total = 0
for filename, pairs in changes.items():
    if not os.path.exists(filename):
        print(f'MISSING: {filename}')
        continue
    txt = open(filename, encoding='utf-8').read()
    file_count = 0
    for old, new in pairs:
        count = txt.count(old)
        if count == 0:
            print(f'  NOT FOUND in {filename}: {repr(old[:70])}')
        elif count > 1:
            print(f'  MULTI ({count}x) in {filename}: {repr(old[:70])}')
        txt = txt.replace(old, new)
        file_count += count
    open(filename, 'w', encoding='utf-8').write(txt)
    print(f'{filename}: {file_count} replacements')
    total += file_count

print(f'\nTotal em dashes replaced: {total}')

# Verify no em dashes remain
print('\nResidual em dash check:')
for fn in sorted(os.listdir('.')):
    if fn.endswith('.html') and not fn.startswith('ru/'):
        txt = open(fn, encoding='utf-8').read()
        count = txt.count('—')
        if count:
            print(f'  {fn}: {count} remaining')
print('Done.')
