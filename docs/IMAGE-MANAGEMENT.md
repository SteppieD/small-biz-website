# Image Management Guide

This guide explains how to easily change website images by editing the theme files directly.

---

## Quick Start

All images on your website are defined in the theme's `index.php` file. To change an image, you simply replace the URL with one from your WordPress Media Library.

### **Three Types of Images**

1. **Owner/Logo Photo** - About section
2. **Gallery Images** - 6 before/after project images
3. **Hero Background** - (Optional) Hero section background

---

## Changing the Owner Photo

### Where to Find It

File: `wp-content/themes/small-business-pro/index.php`
Look for: **Line 89** (search for "<!-- INSTRUCTIONS: Paste your Media Library owner photo")

### How to Change It

1. **Upload your owner photo to WordPress Media Library**
   - Go to WordPress Admin → Media → Add New
   - Upload your image
   - Click on the image to view details

2. **Copy the Media Library URL**
   - Look for "File URL" field
   - Copy the full URL (example: `https://yourdomain.com/wp-content/uploads/2025/10/owner-photo.jpg`)

3. **Edit index.php**
   - Open `wp-content/themes/small-business-pro/index.php` via FTP
   - Find line 89 (the owner photo image tag)
   - Replace the `src=` URL with your Media Library URL
   - Example change:
     ```
     BEFORE:
     <img src="https://yourdomain.com/wp-content/uploads/2025/10/old-owner.jpg" ...>

     AFTER:
     <img src="https://yourdomain.com/wp-content/uploads/2025/10/new-owner.jpg" ...>
     ```

4. **Upload the updated index.php**
   - Save your changes locally
   - Upload the file via FTP to replace the old version

5. **Test**
   - Hard refresh your homepage (Ctrl+F5 or Cmd+Shift+R)
   - The new image should appear

---

## Changing Gallery Images

Your website displays 6 gallery images (before/after for 3 project types).

### Gallery Image Locations in index.php

Find these sections and replace the `src=` URLs:

1. **Line 180** - Interior Before
2. **Line 188** - Interior After
3. **Line 196** - Cabinet Before
4. **Line 204** - Cabinet After
5. **Line 212** - Exterior Before
6. **Line 220** - Exterior After

### How to Change Them

Each image has an HTML comment above it showing what type it is:

```html
<!-- Interior Before -->
<div class="gallery-item">
    <img src="https://yourdomain.com/wp-content/uploads/2025/10/interior-before.jpg" alt="...">
    ...
</div>
```

**To change an image:**

1. Upload your project photo to WordPress Media Library
2. Copy the full Media Library URL
3. Replace the `src=` URL in index.php
4. Upload the updated index.php
5. Hard refresh your website

### Image Requirements

- **Recommended Size:** 600x450px or 800x600px
- **Aspect Ratio:** 4:3 (landscape orientation)
- **Format:** JPG, PNG, or WebP
- **File Size:** Under 150KB recommended for faster loading

---

## Finding Media Library URLs

### Method 1: WordPress Admin

1. Log into WordPress Admin
2. Go to **Media Library** (left sidebar)
3. Find your image
4. Click on it to view details
5. Copy the **File URL** field

### Method 2: Direct Link

1. Right-click the image in Media Library
2. Select "Copy Image Link"
3. Paste it into index.php

### Example URL Format

```
https://yourdomain.com/wp-content/uploads/2025/10/my-image-name.jpg
```

Make sure the URL:
- ✅ Starts with `https://` (your domain)
- ✅ Contains `/wp-content/uploads/`
- ✅ Ends with `.jpg`, `.png`, or `.webp`

---

## Complete Image List with Line Numbers

Find these lines in `wp-content/themes/small-business-pro/index.php`:

| Image Type | Line | Section |
|-----------|------|---------|
| Owner Photo | 89 | About Section |
| Interior Before | 180 | Gallery |
| Interior After | 188 | Gallery |
| Cabinet Before | 196 | Gallery |
| Cabinet After | 204 | Gallery |
| Exterior Before | 212 | Gallery |
| Exterior After | 220 | Gallery |

---

## Template Format

Each image in index.php follows this format:

```html
<!-- [IMAGE TYPE] -->
<div class="gallery-item">
    <img src="[YOUR_MEDIA_LIBRARY_URL]" alt="description text">
    <div class="gallery-overlay">
        <span>[Label]</span>
    </div>
</div>
```

Just replace `[YOUR_MEDIA_LIBRARY_URL]` with your actual URL.

---

## Troubleshooting

### Image Not Appearing (Broken/404 Error)

**Problem:** You pasted a URL but the image shows as broken

**Solutions:**
1. **Verify the URL is correct** - Paste it in your browser's address bar to test
2. **Check for typos** - URLs are case-sensitive
3. **Ensure it's a full URL** - Must start with `https://yourdomain.com/`
4. **Hard refresh your browser** - Ctrl+F5 or Cmd+Shift+R
5. **Clear WordPress cache** - If you have caching plugins, clear them

### Can't Find Media Library URLs

**Solution:**
- Make sure you're uploading images to WordPress Media Library first
- Don't use external URLs (images hosted on other websites)
- Always use URLs from your own Media Library for best results

### Image Uploading to Media Library Failed

**Solution:**
- Check file size (should be under 5MB)
- Try a different image format (JPG instead of PNG)
- Contact your hosting provider about upload permissions

---

## Best Practices

1. **Optimize images first** - Use tools like TinyPNG to compress before uploading
2. **Use consistent aspect ratios** - All gallery images should have the same proportions
3. **Backup original images** - Keep copies of your images in case you need to revert
4. **Use descriptive filenames** - Name images clearly (e.g., `kitchen-before.jpg` not `image123.jpg`)
5. **Test on mobile** - View your site on phone/tablet after changes to verify images look good

---

## Advanced: Direct File Replacement

Alternative method without using Media Library URLs:

1. Connect via FTP to your server
2. Navigate to `/wp-content/uploads/2025/10/`
3. Upload your new image with the **exact same filename** as the original
4. The theme will automatically display your new image

This method works but is less recommended since it doesn't use WordPress Media Library.

---

## FAQ

**Q: Can I use URLs from Google Images or other websites?**
A: Not recommended. Use your own WordPress Media Library URLs instead. External images may break if the other site removes them.

**Q: What if I mess up the image URL?**
A: The worst that happens is a broken image appears. Just replace it with the correct URL and upload the file again.

**Q: Do I need to clear cache after changing images?**
A: Maybe. Try a hard refresh first (Ctrl+F5). If that doesn't work, clear your cache plugin or contact your host.

**Q: How many images can I change?**
A: As many as you want. Currently the template supports 7 images (1 owner + 6 gallery), but you can add more if needed.

**Q: Will changing images affect my SEO?**
A: No, but make sure the alt text is descriptive (it's already set in the code).

**Q: Can I add more images to the gallery?**
A: Yes, by copying the gallery item HTML and adding a new section. See the template format above.

---

## Support

- Check your Media Library to ensure images are uploaded
- Verify URLs are complete (start with https://)
- Hard refresh your browser to clear cached versions
- Contact your hosting provider if file upload fails
