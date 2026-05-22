#!/bin/bash

# ── StacksFlow Color + Content Cycler ────────────────────────────────────────
# Alternates: CSS theme → landing page inline vars → CSS → inline ...
# Every 5 minutes, one change at a time, git push each.
# Usage:  chmod +x cycle-stacksflow.sh && ./cycle-stacksflow.sh
# Run from: stacksflow project root
# ─────────────────────────────────────────────────────────────────────────────

CSS_FILE="app/globals.css"
PAGE_FILE="app/page/landingpage.tsx"   # adjust if needed
INTERVAL=300

# ── Color themes ──────────────────────────────────────────────────────────────
# Format: "GOLD|GOLD_LIGHT|GOLD_DIM|ORANGE|SURFACE|SURFACE2|MUTED|BG"

COLOR_THEMES=(
  "#fe7207|#f78902|#775816|#f66a2f|#16120b|#110e0a|#6b5f50|#0A0805"   # original amber
  "#C9A84C|#E8C96B|#8A6B2A|#E8622A|#110E08|#1A1610|#7A6E5E|#0A0805"   # classic gold
  "#00D4FF|#33DDFF|#005566|#0099CC|#080d10|#0d1318|#3a5560|#050a0d"   # electric blue
  "#C8FF00|#D4FF33|#556600|#88CC00|#080a05|#0d1008|#3a5030|#060809"   # acid green
  "#FF0080|#FF33AA|#660033|#CC0055|#0d0508|#130810|#553050|#080508"   # hot pink
  "#BF5FFF|#CC80FF|#5A1A8A|#9933CC|#08050d|#0d0a12|#4a3060|#060509"   # neon purple
  "#00FFB3|#33FFCC|#006644|#00CC88|#050d0a|#081210|#304a40|#050808"   # mint
  "#FF5500|#FF7733|#882200|#CC3300|#0d0805|#120d08|#553830|#080505"   # flame
)

# ── Stat sets for the hero floating cards + stats bar ─────────────────────────
# Format: "LIVE_SETTLE|ACTIVE_BUILDERS|STAT1_VAL|STAT1_LBL|STAT2_VAL|STAT2_LBL|STAT3_VAL|STAT3_LBL|STAT4_VAL|STAT4_LBL"

STAT_SETS=(
  "$2.5M|1,250+|1,200+|Active Builders|$2.4M|Daily Volume|99.9%|Uptime|3.2s|Avg Settlement"
  "$4.1M|2,100+|2,000+|Active Builders|$4.0M|Daily Volume|99.95%|Uptime|2.8s|Avg Settlement"
  "$1.8M|890+|850+|Active Builders|$1.7M|Daily Volume|99.8%|Uptime|3.8s|Avg Settlement"
  "$7.2M|3,400+|3,300+|Active Builders|$7.0M|Daily Volume|100%|Uptime|1.9s|Avg Settlement"
  "$3.3M|1,650+|1,600+|Active Builders|$3.2M|Daily Volume|99.9%|Uptime|2.5s|Avg Settlement"
  "$5.6M|2,800+|2,750+|Active Builders|$5.5M|Daily Volume|99.99%|Uptime|2.1s|Avg Settlement"
  "$920K|480+|450+|Active Builders|$900K|Daily Volume|99.7%|Uptime|4.1s|Avg Settlement"
  "$9.8M|5,000+|4,900+|Active Builders|$9.5M|Daily Volume|100%|Uptime|1.5s|Avg Settlement"
)

color_index=1   # start at 1 so first run is visibly different
stat_index=0
turn="color"

# ── Install/Update SDK function ───────────────────────────────────────────────

install_sdk() {
  echo "  📦 Installing/updating @stacksflowr/my-sdk..."
  npm install @stacksflowr/my-sdk --save
  if [ $? -eq 0 ]; then
    echo "  ✅ SDK installed successfully"
  else
    echo "  ⚠️ SDK installation failed, continuing anyway..."
  fi
}

# ── Update globals.css vars ───────────────────────────────────────────────────

update_css() {
  python3 - "$CSS_FILE" "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8" <<'PYEOF'
import sys, re

css_file = sys.argv[1]
gold, gold_light, gold_dim, orange, surface, surface2, muted, bg = \
    sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], \
    sys.argv[6], sys.argv[7], sys.argv[8], sys.argv[9]

with open(css_file) as f:
    content = f.read()

def swap(var, val, text):
    return re.sub(rf'({re.escape(var)}:\s*)#[0-9a-fA-F]{{3,8}}', f'\\g<1>{val}', text)

content = swap('--gold', gold, content)
content = swap('--gold-light', gold_light, content)
content = swap('--gold-dim', gold_dim, content)
content = swap('--orange', orange, content)
content = swap('--surface', surface, content)
content = swap('--surface2', surface2, content)
content = swap('--muted', muted, content)
content = swap('--background', bg, content)

with open(css_file, 'w') as f:
    f.write(content)

print(f"  OK globals.css => gold={gold} orange={orange} bg={bg}")
PYEOF
}

# ── Update inline CSS vars inside landingpage.tsx :root block ─────────────────

update_landing_colors() {
  python3 - "$PAGE_FILE" "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8" <<'PYEOF'
import sys, re

tsx_file = sys.argv[1]
gold, gold_light, gold_dim, orange, surface, surface2, muted, bg = \
    sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], \
    sys.argv[6], sys.argv[7], sys.argv[8], sys.argv[9]

with open(tsx_file) as f:
    content = f.read()

def swap(var, val, text):
    return re.sub(rf'({re.escape(var)}:\s*)#[0-9a-fA-F]{{3,8}}', f'\\g<1>{val}', text)

content = swap('--gold', gold, content)
content = swap('--gold-light', gold_light, content)
content = swap('--gold-dim', gold_dim, content)
content = swap('--orange', orange, content)
content = swap('--surface', surface, content)
content = swap('--surface2', surface2, content)
content = swap('--muted', muted, content)
content = swap('--bg', bg, content)

# Also update hardcoded background hex values in body/html overrides
content = re.sub(r'(background: )#0A0805( !important)', f'\\g<1>{bg}\\2', content)
content = re.sub(r'(background: var\(--background\);)', f'\\g<1>', content)  # leave as var

with open(tsx_file, 'w') as f:
    f.write(content)

print(f"  OK landingpage.tsx => gold={gold} orange={orange} surface={surface}")
PYEOF
}

# ── Update stat values in landingpage.tsx ────────────────────────────────────

update_stats() {
  python3 - "$PAGE_FILE" "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8" "$9" "$10" <<'PYEOF'
import sys, re

tsx_file     = sys.argv[1]
live_settle  = sys.argv[2]
active_build = sys.argv[3]
s1v, s1l     = sys.argv[4], sys.argv[5]
s2v, s2l     = sys.argv[6], sys.argv[7]
s3v, s3l     = sys.argv[8], sys.argv[9]
s4v, s4l     = sys.argv[10], sys.argv[11]

with open(tsx_file) as f:
    content = f.read()

# Floating stat cards in orb
content = re.sub(r'(Live Settlements</div>\s*<div[^>]*>)\$[\d.,KM]+',
                 f'\\g<1>{live_settle}', content)
content = re.sub(r'(Active Builders</div>\s*<div[^>]*>)[\d,]+\+',
                 f'\\g<1>{active_build}', content)

# Stats bar — replace all 4 value+label pairs
stats = [(s1v, s1l), (s2v, s2l), (s3v, s3l), (s4v, s4l)]
for val, label in stats:
    # Replace value next to its label
    content = re.sub(
        rf"(value: ')[^']*(',\s*label: '{re.escape(label)}')",
        f"\\g<1>{val}\\2", content
    )

with open(tsx_file, 'w') as f:
    f.write(content)

print(f"  OK stats => live={live_settle} builders={active_build} vol={s2v}")
PYEOF
}

# ── Git push ──────────────────────────────────────────────────────────────────

git_push() {
  local msg="$1"; shift
  git add "$@"
  git diff --cached --quiet && { echo "  Nothing to commit"; return; }
  git commit -m "$msg"
  git push
  echo "  Pushed to GitHub"
}

# ── Verify files ──────────────────────────────────────────────────────────────

for f in "$CSS_FILE" "$PAGE_FILE"; do
  if [ ! -f "$f" ]; then
    echo "ERROR: Not found: $f"
    echo "  Run: find . -name '*.tsx' -o -name 'globals.css' | grep -v node_modules"
    exit 1
  fi
done

echo "StacksFlow Cycler — colors & stats alternating every ${INTERVAL}s"
echo "  CSS  : $CSS_FILE"
echo "  Page : $PAGE_FILE"
echo "  Ctrl+C to stop"
echo ""

# ── Main loop ─────────────────────────────────────────────────────────────────

while true; do

  if [ "$turn" = "color" ]; then
    theme="${COLOR_THEMES[$color_index]}"
    color_index=$(( (color_index + 1) % ${#COLOR_THEMES[@]} ))
    IFS='|' read -r gold gold_light gold_dim orange surface surface2 muted bg <<< "$theme"

    echo "$(date '+%H:%M:%S') COLORS => gold=$gold orange=$orange"
    update_css        "$gold" "$gold_light" "$gold_dim" "$orange" "$surface" "$surface2" "$muted" "$bg"
    update_landing_colors "$gold" "$gold_light" "$gold_dim" "$orange" "$surface" "$surface2" "$muted" "$bg"
    install_sdk
    git_push "style: theme gold=$gold orange=$orange + sdk update" "$CSS_FILE" "$PAGE_FILE" "package.json" "package-lock.json"
    turn="stats"

  else
    entry="${STAT_SETS[$stat_index]}"
    stat_index=$(( (stat_index + 1) % ${#STAT_SETS[@]} ))
    IFS='|' read -r live_s builders s1v s1l s2v s2l s3v s3l s4v s4l <<< "$entry"

    echo "$(date '+%H:%M:%S') STATS => live=$live_s builders=$builders vol=$s2v"
    update_stats "$live_s" "$builders" "$s1v" "$s1l" "$s2v" "$s2l" "$s3v" "$s3l" "$s4v" "$s4l"
    install_sdk
    git_push "stats: live=$live_s builders=$builders + sdk update" "$PAGE_FILE" "package.json" "package-lock.json"
    turn="color"
  fi

  echo "  Next in ${INTERVAL}s..."
  echo ""
  sleep "$INTERVAL"
done