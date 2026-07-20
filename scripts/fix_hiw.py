import re
import os

path = r'C:\Users\DeviceMasters\Desktop\TECH\checkamo_reviewed\home-checkamo\src\components\home\HIWSection.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace specific background and text colors
content = content.replace('background: "#000"', 'background: "var(--bg)"')

# For the main header
content = content.replace('color: "#fff",', 'color: "var(--text-primary)",')

# For the active button, keep it #fff since it's on a brand color background
# So we only change the inactive text color in the track toggle
content = content.replace('track === t ? "#fff" : "rgba(255,255,255,0.38)"', 'track === t ? "#fff" : "rgba(var(--text-primary-rgb), 0.38)"')

# For the step tag inside the sticky image (keep it #fff because image is dark)
# Let's leave that one alone.

# Replace all other rgba(255,255,255,...) with rgba(var(--text-primary-rgb),...)
# But be careful not to touch the ones inside the sticky left image if they need to be white.
# The sticky left image has text color "#fff" and background "rgba(0,0,0,0.42)".
# So it's fine.

# Replace all occurrences of rgba(255,255,255, to rgba(var(--text-primary-rgb),
content = re.sub(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,', 'rgba(var(--text-primary-rgb),', content)

# But we should revert the ones inside the sticky image if needed?
# Actually, the sticky image has a dark background "background: '#0a1628'" and a scrim.
# So text on it should probably always be white to be visible.
# However, `var(--text-primary-rgb)` will become dark in light mode.
# If it's dark text on a dark image, it's bad.
# Let's revert the specific ones inside StickyLeft
# Line 306: Counter - color: "rgba(var(--text-primary-rgb),0.42)", background: "rgba(0,0,0,0.42)"
# We should change these back to 255,255,255
content = content.replace('color: "rgba(var(--text-primary-rgb),0.42)"', 'color: "rgba(255,255,255,0.42)"')

# And dot nav
# i === activeStep ? "rgba(var(--text-primary-rgb),0.14)" -> this is the dot background
content = content.replace('"rgba(var(--text-primary-rgb),0.14)"', '"rgba(255,255,255,0.14)"')
content = content.replace('"rgba(var(--text-primary-rgb),0.07)"', '"rgba(255,255,255,0.07)"')
content = content.replace('"rgba(var(--text-primary-rgb),0.24)"', '"rgba(255,255,255,0.24)"')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
