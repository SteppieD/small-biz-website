# Claude Code Agent Best Practices

This document contains best practices, code examples, and token-saving strategies for the 7 Claude Code agents that customize the Small Business Pro template.

---

## Table of Contents

1. [Token Optimization Strategies](#token-optimization-strategies)
2. [Code Example Library](#code-example-library)
3. [Common Workflows](#common-workflows)
4. [Configuration Patterns](#configuration-patterns)
5. [Image Management](#image-management)
6. [SEO Best Practices](#seo-best-practices)
7. [Deployment Patterns](#deployment-patterns)

---

## Token Optimization Strategies

### Strategy 1: Reference Existing Code
**Instead of:** Regenerating code from scratch
**Do:** Reference and copy from repository code examples

Example agent prompt:
```
"Update the services section in business-config.php following the
pattern used in examples/painting-contractor/business-config.php"
```

This saves tokens by not regenerating the same pattern.

### Strategy 2: Use Configuration Files as Source of Truth
**Instead of:** Updating HTML directly
**Do:** Update config files and let theme pull from them

Files to use:
- `config/business-config.php` - Business details
- `config/business-types.json` - Business type settings
- `config/seo-keywords.json` - SEO strategy

### Strategy 3: Template-Based Content Updates
**Instead of:** Writing custom content from scratch
**Do:** Use business type templates as starting point

Business types available:
- Contractors (painting, plumbing, HVAC, roofing)
- Professional services (law, accounting, consulting)
- Health & wellness (dental, fitness, therapy)
- Retail (boutiques, gift shops)
- Food services (restaurants, cafes)

### Strategy 4: Image Manifest System
**Instead of:** Manually writing image URLs
**Do:** Use the image manifest to reference images

Example:
```php
// Load image manifest
$manifest = json_decode( file_get_contents( 'image-manifest.json' ), true );

// Use in theme
<img src="<?php echo $manifest['gallery']['interior_before']; ?>" alt="...">
```

### Strategy 5: Batch Updates
**Instead of:** Multiple small commits
**Do:** Group related changes into single commits

Example batch:
- Update business config
- Update SEO keywords
- Upload images
- Update theme image references
- Single commit with comprehensive message

---

## Code Example Library

### Example 1: Business Config Structure

File: `examples/painting-contractor/business-config.php`

**Key constants to copy:**
```php
define( 'BUSINESS_NAME', 'Business Name' );
define( 'OWNER_NAME', 'Owner Name' );
define( 'BUSINESS_PHONE', '(555) 123-4567' );
define( 'BUSINESS_EMAIL', 'hello@business.com' );
define( 'BUSINESS_CITY', 'City Name' );
define( 'BUSINESS_REGION', 'Region Name' );
define( 'SERVICE_TYPE', 'Service Type' );
define( 'YEARS_EXPERIENCE', 16 );
```

**Copy entire structure:** This prevents token waste regenerating the same pattern.

### Example 2: SEO Keywords Structure

File: `examples/painting-contractor/seo-keywords.json`

**Key sections to follow:**
```json
{
  "business_type": "painting_contractor",
  "primary_keywords": [...],
  "location_keywords": [...],
  "long_tail_keywords": [...],
  "competitor_analysis": {...},
  "content_calendar": {...}
}
```

**Use this as template:** Don't create new structure, adapt existing one.

### Example 3: Service Card Structure

File: `wp-content/themes/small-business-pro/index.php` (lines 42-80)

**Pattern to follow:**
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-[icon]"></i>
    </div>
    <h3>[Service Name]</h3>
    <p>[Description]</p>
    <a href="#contact" class="learn-more">[CTA] <i class="fas fa-arrow-right"></i></a>
</div>
```

**Don't change structure:** Just update content inside.

### Example 4: Gallery Item Structure

File: `wp-content/themes/small-business-pro/index.php` (lines 178-225)

**Pattern to follow:**
```html
<!-- [TYPE] -->
<div class="gallery-item">
    <img src="[IMAGE_URL]" alt="[ALT_TEXT]">
    <div class="gallery-overlay">
        <span>[LABEL]</span>
    </div>
</div>
```

**Keep this exact:** Agents should only update `[IMAGE_URL]` and `[ALT_TEXT]`.

---

## Common Workflows

### Workflow 1: New Business Website Setup

**Agent sequence:**
1. `wp-setup-wizard.md` - Initial setup and planning
2. `wp-business-strategist.md` - Business type selection and config
3. `wp-seo-copywriter.md` - Content and SEO optimization
4. `wp-customizer.md` - Image and brand customization
5. `wp-plugin-configurator.md` - Install essential plugins
6. `wp-deployer.md` - Deploy to production

**Tokens saved:** Reference configuration templates at each step.

### Workflow 2: Image Population from Folder

**Process:**
1. Scan `images-for-upload/` folder structure
2. Check for images in each subfolder
3. Generate WordPress upload commands
4. Update `image-manifest.json`
5. Update theme image references
6. Test and deploy

**Token saving:** Use single agent call instead of multiple manual uploads.

### Workflow 3: Content Copywriting for SEO

**Process:**
1. Reference business type keywords from `config/seo-keywords.json`
2. Use provided service descriptions from `business-config.php`
3. Generate SEO-optimized copy
4. Update theme content sections
5. Verify keyword distribution
6. Test on search engines

**Token saving:** Build on existing config data, don't regenerate from scratch.

### Workflow 4: Full Site Customization

**Agent calls in order:**
1. Prepare business config
2. Upload images from folder
3. Write SEO copy
4. Configure plugins
5. Deploy to production

**Single comprehensive prompt:** "Customize this site for [business type] using images from the images-for-upload folder and SEO keywords from the config"

---

## Configuration Patterns

### Pattern 1: Business Type Detection

```php
// Instead of hardcoding, reference config
$business_type = defined( 'BUSINESS_TYPE' ) ? BUSINESS_TYPE : 'contractor';
$business_defaults = get_business_type_defaults( $business_type );

// Apply defaults
foreach ( $business_defaults as $key => $value ) {
    if ( ! defined( strtoupper( $key ) ) ) {
        define( strtoupper( $key ), $value );
    }
}
```

**Usage:** Agents can change business type via config, theme auto-adapts.

### Pattern 2: Service Areas from Config

```php
// services.php or functions.php
$service_areas = defined( 'SERVICE_AREAS' )
    ? explode( ',', SERVICE_AREAS )
    : array();

// In theme, loop through
foreach ( $service_areas as $area ) {
    echo '<span class="area-badge">' . esc_html( $area ) . '</span>';
}
```

**Benefit:** Agents update config string, theme renders automatically.

### Pattern 3: Dynamic Process Steps

```php
$process_steps = array(
    1 => array(
        'title' => 'Free Consultation',
        'description' => 'Initial assessment and planning',
    ),
    2 => array(
        'title' => 'Detailed Estimate',
        'description' => 'Clear pricing and timeline',
    ),
    // ... defined in business-config.php
);
```

**Benefit:** Agents can customize process steps via config.

---

## Image Management

### Image Manifest System

Location: `image-manifest.json` (auto-generated)

```json
{
  "owner_photo": "https://yourdomain.com/wp-content/uploads/2025/10/owner.jpg",
  "gallery": {
    "interior_before": "https://yourdomain.com/wp-content/uploads/2025/10/interior-before.jpg",
    "interior_after": "https://yourdomain.com/wp-content/uploads/2025/10/interior-after.jpg",
    "cabinet_before": "https://yourdomain.com/wp-content/uploads/2025/10/cabinet-before.jpg",
    "cabinet_after": "https://yourdomain.com/wp-content/uploads/2025/10/cabinet-after.jpg",
    "exterior_before": "https://yourdomain.com/wp-content/uploads/2025/10/exterior-before.jpg",
    "exterior_after": "https://yourdomain.com/wp-content/uploads/2025/10/exterior-after.jpg"
  }
}
```

### Using the Manifest in Theme

```php
// Load manifest
$manifest = json_decode( file_get_contents( get_template_directory() . '/../../image-manifest.json' ), true );

// Use owner photo
if ( isset( $manifest['owner_photo'] ) ) {
    $owner_photo = $manifest['owner_photo'];
} else {
    $owner_photo = get_template_directory_uri() . '/assets/images/default-owner.jpg';
}
```

### Agent Workflow for Images

1. **Detect images in folder:**
   ```bash
   ls -la /Volumes/video-drive/small-biz-website-git/images-for-upload/*/
   ```

2. **Generate upload commands:**
   - For each image, create WordPress CLI command
   - Or curl command to WordPress REST API

3. **Update manifest:**
   - Regenerate `image-manifest.json` with new URLs

4. **Update theme:**
   - Reference manifest instead of hardcoded paths

---

## SEO Best Practices

### Best Practice 1: Keyword Research Pattern

**Template from:** `examples/painting-contractor/seo-keywords.json`

**Pattern to follow:**
```json
{
  "primary_keywords": [
    "service type + city",
    "service type + region"
  ],
  "long_tail_keywords": [
    "service + specific feature + location",
    "service + problem solved + location"
  ]
}
```

**Agent task:** Research and populate following this structure.

### Best Practice 2: Meta Description Length

- **Target:** 150-160 characters
- **Reference:** See `CUSTOMIZATION-GUIDE.md` for examples
- **Tool:** Calculate in agent and verify before deploying

### Best Practice 3: Heading Hierarchy

**Pattern:**
- H1: One main page title
- H2: Section titles (Services, About, Gallery, etc.)
- H3: Subsection titles (within services, etc.)

**Keep consistent:** Don't change hierarchy arbitrarily.

### Best Practice 4: Image Alt Text

**Format:** Descriptive, keyword-rich, under 125 characters

**Example:**
- ❌ Bad: "image.jpg"
- ✅ Good: "Professional kitchen cabinet painting before and after transformation in Kelowna"

**Pattern:** [Service Type] [Before/After] [Location] [Specific Detail]

---

## Deployment Patterns

### Pattern 1: Safe Deployment Checklist

Before deploying, verify:
- [ ] All images display correctly
- [ ] Business config updated
- [ ] SEO keywords in place
- [ ] Plugins configured
- [ ] Links working
- [ ] Mobile responsive
- [ ] Search engine indexing enabled

### Pattern 2: Version Control Pattern

**Commit message format:**
```
[Type] Brief description

Details explaining what changed and why.

Affected sections:
- Business config
- Images
- SEO settings
- Theme customization
```

**Example:**
```
[Customization] Update painting contractor site with client images

- Updated business-config.php with client business details
- Uploaded 7 project images from images-for-upload folder
- Updated image-manifest.json with WordPress Media Library URLs
- Updated theme image references
- Updated SEO keywords for Kelowna painting market

Affected sections:
- config/business-config.php
- image-manifest.json
- wp-content/themes/small-business-pro/index.php
- config/seo-keywords.json
```

### Pattern 3: Rollback Strategy

**Keep backups of:**
- Original business-config.php
- Original seo-keywords.json
- Original image-manifest.json
- Original theme index.php

**Strategy:** Each agent commit is atomic and reversible.

---

## Agent-Specific Guidelines

### wp-setup-wizard.md
- **Token strategy:** Reference SETUP-GUIDE.md, don't regenerate
- **Key task:** Understand project scope and business type
- **Output:** Create initial plan and checklist

### wp-business-strategist.md
- **Token strategy:** Copy business type template from business-types.json
- **Key task:** Select business type and populate config
- **Output:** Completed business-config.php and business-types.json

### wp-seo-copywriter.md
- **Token strategy:** Reference existing service descriptions, enhance for SEO
- **Key task:** Generate SEO-optimized content
- **Output:** Updated seo-keywords.json and content recommendations

### wp-customizer.md
- **Token strategy:** Use image manifest, reference gallery patterns
- **Key task:** Update images and visual branding
- **Output:** Updated image references and theme customizations

### wp-theme-developer.md
- **Token strategy:** Modify existing theme, don't rebuild from scratch
- **Key task:** Advanced theme modifications
- **Output:** Updated theme files and CSS

### wp-plugin-configurator.md
- **Token strategy:** Reference plugin documentation, use standard configurations
- **Key task:** Install and configure plugins
- **Output:** Activated plugins with proper settings

### wp-deployer.md
- **Token strategy:** Reference DEPLOYMENT-GUIDE.md
- **Key task:** Deploy to production
- **Output:** Live website with proper configuration

---

## Quick Reference: Token-Saving Commands

### For Agents to Use:

**1. Reference existing config:**
```
"Update following the pattern in examples/painting-contractor/business-config.php"
```

**2. Use manifest for images:**
```
"Update image URLs using image-manifest.json"
```

**3. Copy service patterns:**
```
"Add service following the card structure in index.php lines 42-80"
```

**4. Reference guides:**
```
"Follow the workflow in docs/AGENT-BEST-PRACTICES.md"
```

**5. Batch updates:**
```
"Update business-config.php, seo-keywords.json, and image-manifest.json in single commit"
```

---

## Summary

**Key principles for token efficiency:**
1. Reference existing code examples
2. Use config files as source of truth
3. Template-based content updates
4. Image manifest system for consistency
5. Batch updates to reduce overhead
6. Follow established patterns
7. Build on existing structures

By following these patterns, agents can customize websites efficiently while maintaining code quality and consistency.
