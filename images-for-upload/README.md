# Images for Upload

This folder contains all images needed for your website. Drop images here and Claude Code agents will automatically update your site.

---

## Folder Structure

```
images-for-upload/
├── owner-photo/
│   └── [owner-photo.jpg]
├── gallery/
│   ├── interior-before/
│   │   └── [image.jpg]
│   ├── interior-after/
│   │   └── [image.jpg]
│   ├── cabinet-before/
│   │   └── [image.jpg]
│   ├── cabinet-after/
│   │   └── [image.jpg]
│   ├── exterior-before/
│   │   └── [image.jpg]
│   └── exterior-after/
│       └── [image.jpg]
└── README.md (this file)
```

---

## How to Use

### Step 1: Prepare Your Images

Collect 7 high-quality images:

1. **owner-photo/** - One image of the business owner/contractor
   - Professional headshot
   - 400x400px recommended
   - JPG or PNG format

2. **gallery/interior-before/** - Before photo of interior project
   - 600x450px recommended
   - JPG format

3. **gallery/interior-after/** - After photo of same interior
   - 600x450px (same aspect ratio as before)
   - JPG format

4. **gallery/cabinet-before/** - Before photo of cabinet project
   - 600x450px recommended
   - JPG format

5. **gallery/cabinet-after/** - After photo of same cabinets
   - 600x450px (same aspect ratio as before)
   - JPG format

6. **gallery/exterior-before/** - Before photo of exterior project
   - 600x450px recommended
   - JPG format

7. **gallery/exterior-after/** - After photo of same exterior
   - 600x450px (same aspect ratio as before)
   - JPG format

### Step 2: Upload Images

1. Optimize image file sizes (use TinyPNG.com)
2. Name them clearly: `john-smith-owner.jpg`, `interior-before-kitchen.jpg`, etc.
3. Drop one image in each folder (or multiple if you want rotation)

**Example:**
```
owner-photo/
└── john-smith.jpg

gallery/interior-before/
└── kitchen-before.jpg

gallery/interior-after/
└── kitchen-after.jpg
```

### Step 3: Run the Claude Code Agent

The Claude Code agent will:
1. Scan this folder structure
2. Upload images to WordPress Media Library
3. Update your theme with the correct image URLs
4. Generate an image manifest file

**To run:** Ask Claude Code to "populate images from the images-for-upload folder"

---

## Image Requirements

### Recommended Sizes
- Owner photo: 400x400px (square)
- Gallery images: 600x450px (4:3 aspect ratio)

### Recommended Formats
- JPG for photos (best compression)
- PNG for graphics with transparency
- WebP for modern browsers (best quality/size ratio)

### File Size Targets
- Owner photo: Under 100KB
- Gallery images: Under 150KB each

### Quality Standards
- Minimum 300 DPI for print-quality
- 72 DPI for web is standard
- Clear, well-lit photos
- Professional appearance
- Consistent color grading

---

## Image Manifest

After uploading, the system generates `image-manifest.json`:

```json
{
  "owner_photo": "https://yourdomain.com/wp-content/uploads/2025/10/owner.jpg",
  "gallery": {
    "interior_before": "https://yourdomain.com/wp-content/uploads/2025/10/interior-before.jpg",
    "interior_after": "https://yourdomain.com/wp-content/uploads/2025/10/interior-after.jpg",
    ...
  }
}
```

This manifest is used by:
- Theme to display correct images
- Agents to update content
- Deployment scripts to configure site

---

## Quick Checklist

- [ ] Collected 7 high-quality images
- [ ] Optimized file sizes (under 150KB each)
- [ ] Named files clearly
- [ ] Placed in correct folders
- [ ] Ready for Claude Code agent upload

---

## Troubleshooting

### Images Not Found
- Check folder names match exactly (lowercase, hyphens)
- Ensure images are in the right subfolder
- Verify image file format (.jpg, .png, .webp)

### Images Look Low Quality
- Check file resolution (should be at least 600x450px for web)
- Consider re-optimizing with TinyPNG
- Verify image isn't compressed too much

### Upload Failed
- Check image file size (under 5MB)
- Try different image format
- Check WordPress Media Library upload limit

---

## Advanced: Multiple Images per Category

You can add multiple images to a folder and the agent will:
- Upload all of them to Media Library
- Create a rotation or slideshow
- Update theme accordingly

Example:
```
gallery/interior-before/
├── kitchen-before.jpg
├── bathroom-before.jpg
└── bedroom-before.jpg
```

---

## Next Steps

1. Place your images in the folders above
2. Ask Claude Code agent to "populate website images"
3. Agent will upload, configure, and deploy
4. Your website is ready with professional images

For more detailed image management, see:
- [docs/IMAGE-MANAGEMENT.md](../docs/IMAGE-MANAGEMENT.md) - Manual image management
- [docs/CUSTOMIZATION-GUIDE.md](../docs/CUSTOMIZATION-GUIDE.md) - Full customization guide
