#!/bin/bash
# One-shot CI version - runs ONE cycle then exits

CSS_FILE="app/globals.css"
PAGE_FILE="app/page/landingpage.tsx"
STATE_FILE=".cycle-state"

# Color themes
COLOR_THEMES=(
  "#fe7207|#f78902|#775816|#f66a2f|#16120b|#110e0a|#6b5f50|#0A0805"
  "#C9A84C|#E8C96B|#8A6B2A|#E8622A|#110E08|#1A1610|#7A6E5E|#0A0805"
  "#00D4FF|#33DDFF|#005566|#0099CC|#080d10|#0d1318|#3a5560|#050a0d"
  "#C8FF00|#D4FF33|#556600|#88CC00|#080a05|#0d1008|#3a5030|#060809"
  "#FF0080|#FF33AA|#660033|#CC0055|#0d0508|#130810|#553050|#080508"
  "#BF5FFF|#CC80FF|#5A1A8A|#9933CC|#08050d|#0d0a12|#4a3060|#060509"
  "#00FFB3|#33FFCC|#006644|#00CC88|#050d0a|#081210|#304a40|#050808"
  "#FF5500|#FF7733|#882200|#CC3300|#0d0805|#120d08|#553830|#080505"
)

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

# Load state or initialize
if [ -f "$STATE_FILE" ]; then
  source "$STATE_FILE"
else
  color_index=1
  stat_index=0
  turn="color"
fi

# Update CSS function
update_css() {
  python3 - "$CSS_FILE" "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8" <<'PYEOF'
import sys, re
css_file, gold, gold_light, gold_dim, orange, surface, surface2, muted, bg = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8], sys.argv[9]
with open(css_file) as f: content = f.read()
for var, val in [('--gold', gold), ('--gold-light', gold_light), ('--gold-dim', gold_dim), ('--orange', orange), ('--surface', surface), ('--surface2', surface2), ('--muted', muted), ('--background', bg)]:
  content = re.sub(rf'({re.escape(var)}:\s*)#[0-9a-fA-F]{3,8}', rf'\g<1>{val}', content)
with open(css_file, 'w') as f: f.write(content)
PYEOF
}

# Update landing page colors
update_landing_colors() {
  python3 - "$PAGE_FILE" "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8" <<'PYEOF'
import sys, re
tsx_file, gold, gold_light, gold_dim, orange, surface, surface2, muted, bg = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8], sys.argv[9]
with open(tsx_file) as f: content = f.read()
for var, val in [('--gold', gold), ('--gold-light', gold_light), ('--gold-dim', gold_dim), ('--orange', orange), ('--surface', surface), ('--surface2', surface2), ('--muted', muted), ('--bg', bg)]:
  content = re.sub(rf'({re.escape(var)}:\s*)#[0-9a-fA-F]{3,8}', rf'\g<1>{val}', content)
with open(tsx_file, 'w') as f: f.write(content)
PYEOF
}

# Update stats
update_stats() {
  python3 - "$PAGE_FILE" "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8" "$9" "${10}" <<'PYEOF'
import sys, re
tsx_file, live_settle, active_build, s1v, s1l, s2v, s2l, s3v, s3l, s4v, s4l = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8], sys.argv[9], sys.argv[10], sys.argv[11]
with open(tsx_file) as f: content = f.read()
content = re.sub(r'(Live Settlements</div>\s*<div[^>]*>)\$[\d.,KM]+', rf'\g<1>{live_settle}', content)
content = re.sub(r'(Active Builders</div>\s*<div[^>]*>)[\d,]+\+', rf'\g<1>{active_build}', content)
stats = [(s1v, s1l), (s2v, s2l), (s3v, s3l), (s4v, s4l)]
for val, label in stats:
  content = re.sub(rf"(value: ')[^']*(',\s*label: '{re.escape(label)}')", rf"\g<1>{val}\2", content)
with open(tsx_file, 'w') as f: f.write(content)
PYEOF
}

# Do ONE cycle
if [ "$turn" = "color" ]; then
  theme="${COLOR_THEMES[$color_index]}"
  color_index=$(( (color_index + 1) % ${#COLOR_THEMES[@]} ))
  IFS='|' read -r gold gold_light gold_dim orange surface surface2 muted bg <<< "$theme"
  echo "🎨 Updating colors: $gold"
  update_css "$gold" "$gold_light" "$gold_dim" "$orange" "$surface" "$surface2" "$muted" "$bg"
  update_landing_colors "$gold" "$gold_light" "$gold_dim" "$orange" "$surface" "$surface2" "$muted" "$bg"
  turn="stats"
else
  entry="${STAT_SETS[$stat_index]}"
  stat_index=$(( (stat_index + 1) % ${#STAT_SETS[@]} ))
  IFS='|' read -r live_s builders s1v s1l s2v s2l s3v s3l s4v s4l <<< "$entry"
  echo "📊 Updating stats: $live_s | $builders"
  update_stats "$live_s" "$builders" "$s1v" "$s1l" "$s2v" "$s2l" "$s3v" "$s3l" "$s4v" "$s4l"
  turn="color"
fi

# Save state
cat > "$STATE_FILE" << EOF
color_index=$color_index
stat_index=$stat_index
turn="$turn"
