# Painting Contractor - Image Customization Example

This example shows how to customize images for a painting contractor business using the Small Business Pro template.

---

## Overview

This painting contractor example includes:
- Complete business configuration
- SEO keywords and strategy
- Image management instructions

All images on the website are easily customizable by editing a single file.

---

## Images in This Template

### 1. Owner/Contractor Photo
**Location in code:** Line 89 of `index.php` (About section)

**Purpose:** Shows the business owner or lead contractor
**Ideal size:** Square or close to square (400x400px recommended)

**Example for painting contractor:**
- Professional headshot of the owner
- Wearing work clothes or business casual
- Clear, well-lit photo
- Friendly, approachable expression

**How to change:**
1. Take a professional photo of your business owner
2. Upload to WordPress Media Library
3. Copy the URL: `https://yourdomain.com/wp-content/uploads/2025/10/your-owner-name.jpg`
4. Edit `wp-content/themes/small-business-pro/index.php` line 89
5. Replace the `src=""` URL with your new URL

---

### 2. Gallery Images (6 total)

Your website displays before/after photos of painting projects.

#### Interior Painting - Before (Line 180)
**Purpose:** Shows an untouched interior room needing paint
**Ideal size:** 600x450px landscape
**Tips:**
- Show natural lighting
- Include wall details clearly
- Make color/condition issues visible

#### Interior Painting - After (Line 188)
**Purpose:** Shows the same room after professional painting
**Ideal size:** 600x450px landscape
**Tips:**
- Same angle as "before" photo for comparison
- Show the finished result clearly
- Good lighting to highlight the work

#### Cabinet Painting - Before (Line 196)
**Purpose:** Shows kitchen/bathroom cabinets before refinishing
**Ideal size:** 600x450px landscape
**Tips:**
- Show full cabinet face
- Highlight original finish condition
- Include hardware if relevant

#### Cabinet Painting - After (Line 204)
**Purpose:** Shows cabinets after professional painting
**Ideal size:** 600x450px landscape
**Tips:**
- Same angle and lighting as before
- Show the transformed cabinets
- Highlight paint quality and hardware

#### Exterior Painting - Before (Line 212)
**Purpose:** Shows house exterior needing paint
**Ideal size:** 600x450px landscape
**Tips:**
- Show full house or major section
- Good daylight for clarity
- Visible signs of wear/aging

#### Exterior Painting - After (Line 220)
**Purpose:** Shows house exterior after professional painting
**Ideal size:** 600x450px landscape
**Tips:**
- Same angle as before photo
- Daytime, good lighting
- Show the transformation clearly

---

## Step-by-Step: Updating All Images

### Step 1: Gather Your Images
Collect 7 professional photos:
1. Owner/lead contractor photo
2. Interior project before
3. Interior project after
4. Cabinet project before
5. Cabinet project after
6. Exterior project before
7. Exterior project after

**Pro tip:** Use consistent lighting and angles for before/after pairs to show the transformation clearly.

### Step 2: Upload to WordPress Media Library
1. Log into WordPress Admin
2. Go to **Media → Add New**
3. Upload each image
4. Note the Media Library URLs for each

**Example URLs:**
- Owner: `https://yourdomain.com/wp-content/uploads/2025/10/john-smith-owner.jpg`
- Interior Before: `https://yourdomain.com/wp-content/uploads/2025/10/interior-before-1.jpg`
- Interior After: `https://yourdomain.com/wp-content/uploads/2025/10/interior-after-1.jpg`
- Cabinet Before: `https://yourdomain.com/wp-content/uploads/2025/10/cabinet-before-1.jpg`
- Cabinet After: `https://yourdomain.com/wp-content/uploads/2025/10/cabinet-after-1.jpg`
- Exterior Before: `https://yourdomain.com/wp-content/uploads/2025/10/exterior-before-1.jpg`
- Exterior After: `https://yourdomain.com/wp-content/uploads/2025/10/exterior-after-1.jpg`

### Step 3: Edit the Theme File
1. Download `wp-content/themes/small-business-pro/index.php` via FTP
2. Open in text editor
3. Find and replace image URLs at these lines:

| Image | Line | Current URL |
|-------|------|------------|
| Owner Photo | 89 | Line 89 of index.php |
| Interior Before | 180 | Line 180 of index.php |
| Interior After | 188 | Line 188 of index.php |
| Cabinet Before | 196 | Line 196 of index.php |
| Cabinet After | 204 | Line 204 of index.php |
| Exterior Before | 212 | Line 212 of index.php |
| Exterior After | 220 | Line 220 of index.php |

4. Replace each URL with your Media Library URL
5. Save the file

### Step 4: Upload Updated File
1. Upload the edited `index.php` via FTP to `wp-content/themes/small-business-pro/`
2. File will replace the old version

### Step 5: Test Your Website
1. Hard refresh your homepage (Ctrl+F5 or Cmd+Shift+R)
2. Verify all 7 images display correctly
3. Check on mobile devices
4. Test before/after gallery layout

---

## Image Examples: Before/After Composition

### Good Before/After Comparison
✅ Same room/angle
✅ Similar lighting conditions
✅ Clear transformation visible
✅ Professional quality photos
✅ Consistent aspect ratio

### Poor Before/After Comparison
❌ Different angles
❌ Different lighting
❌ Can't see transformation
❌ Low quality/blurry
❌ Different room sizes appear

---

## Image Quality Tips for Painting Contractors

1. **Lighting is Key**
   - Use natural daylight for outdoor photos
   - Use indoor lighting that shows colors accurately
   - Avoid harsh shadows or glare

2. **Composition**
   - Frame the paint work clearly
   - Include context (whole room, whole house)
   - Show details that highlight your work

3. **Equipment**
   - Use a smartphone camera (modern phones are excellent)
   - Use a good DSLR/mirrorless if available
   - Tripod helps with consistent angles

4. **Editing**
   - Use free tools like Canva or Pixlr for basic edits
   - Don't over-edit; keep photos realistic
   - Adjust brightness/contrast for clarity
   - Compress file size using TinyPNG.com

5. **Getting Good Shots**
   - Photograph on sunny days for exteriors
   - Wait for best lighting conditions
   - Take multiple angles
   - Include before/after on same day if possible

---

## Common Mistakes to Avoid

❌ **Blurry photos** - Use steady hands or tripod
❌ **Wrong angles** - Use same position for before/after
❌ **Bad lighting** - Shoot in good daylight
❌ **Too many edits** - Keep realistic
❌ **Low resolution** - Use phone camera at full resolution
❌ **Wrong URLs** - Double-check Media Library URLs
❌ **Broken links** - Test images after uploading

---

## File Size Optimization

Before uploading to Media Library:

1. **Compress images**
   - Visit TinyPNG.com
   - Upload image
   - Download compressed version
   - Save ~30-50% on file size

2. **Resize if needed**
   - Gallery images: Max 800x600px
   - Owner photo: Max 500x500px
   - Smaller files = faster website

3. **Use right format**
   - JPG for photos (best compression)
   - PNG for graphics with transparency
   - WebP for modern browsers (best quality/size)

---

## Quick Reference: Line Numbers

Find these lines in `wp-content/themes/small-business-pro/index.php`:

```
Line 87: <!-- INSTRUCTIONS: Paste your Media Library owner photo URL below -->
Line 89: <img src="[YOUR_OWNER_PHOTO_URL]" ...>

Line 176: <!-- INSTRUCTIONS: Paste your Media Library image URLs below -->

Line 180: <!-- Interior Before -->
Line 180: <img src="[YOUR_INTERIOR_BEFORE_URL]" ...>

Line 188: <!-- Interior After -->
Line 188: <img src="[YOUR_INTERIOR_AFTER_URL]" ...>

Line 196: <!-- Cabinet Before -->
Line 196: <img src="[YOUR_CABINET_BEFORE_URL]" ...>

Line 204: <!-- Cabinet After -->
Line 204: <img src="[YOUR_CABINET_AFTER_URL]" ...>

Line 212: <!-- Exterior Before -->
Line 212: <img src="[YOUR_EXTERIOR_BEFORE_URL]" ...>

Line 220: <!-- Exterior After -->
Line 220: <img src="[YOUR_EXTERIOR_AFTER_URL]" ...>
```

---

## Need More Help?

See the complete image management guide: [docs/IMAGE-MANAGEMENT.md](../../docs/IMAGE-MANAGEMENT.md)

This guide covers:
- How to get Media Library URLs
- Troubleshooting broken images
- Best practices for image optimization
- Advanced image management techniques
