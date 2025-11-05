# Intelligent Agent System Architecture

This is a sophisticated multi-agent system where Claude Code agents work autonomously and intelligently.

---

## System Overview

```
User Input
    ↓
wp-setup-wizard (Orchestrator)
    ↓
    ├→ wp-business-strategist (Business Config) → Output: business-config.php
    │   ↓
    ├→ wp-seo-copywriter (Content & SEO) → Output: seo-keywords.json
    │   ↓
    ├→ wp-customizer (Images & Branding) → Output: image-manifest.json
    │   ↓
    ├→ wp-theme-developer (Theme Mods) → Output: Updated theme files
    │   ↓
    ├→ wp-plugin-configurator (Plugins) → Output: Plugin configs
    │   ↓
    └→ wp-deployer (Production) → Output: Live website
```

---

## How It Works

### 1. User Submits Information

User provides:
- Business name, type, location
- 7 images in `images-for-upload/` folder
- Any specific requirements

### 2. Setup Wizard Analyzes

The orchestrator:
- Reads user input
- Creates a `project-manifest.json` with instructions
- Validates requirements
- Triggers agents in sequence

### 3. Agents Execute Autonomously

Each agent:
- Reads the project manifest
- Checks its input requirements
- Performs specialized work
- Creates output file
- Updates project manifest with status
- Returns control to orchestrator

### 4. Orchestrator Monitors Progress

The orchestrator:
- Watches for agent outputs
- Checks for errors
- Triggers next agent if successful
- Reports progress to user
- Adjusts if needed

---

## Project Manifest System

Each project has a `project-manifest.json`:

```json
{
  "project_id": "unique-id",
  "project_status": "in_progress",
  "business_info": {
    "name": "Business Name",
    "type": "contractor",
    "owner": "Owner Name",
    "city": "City",
    "region": "Region"
  },
  "agents_completed": [
    "business-strategist"
  ],
  "agents_pending": [
    "seo-copywriter",
    "customizer",
    "theme-developer",
    "plugin-configurator",
    "deployer"
  ],
  "outputs": {
    "business-config": "✅ Completed",
    "seo-keywords": "⏳ In Progress",
    "image-manifest": "⏸️ Pending",
    "theme-mods": "⏸️ Pending",
    "plugins": "⏸️ Pending"
  },
  "estimated_time_remaining": "15 minutes",
  "next_agent": "wp-seo-copywriter"
}
```

---

## Agent Intelligence Levels

### Level 1: Input Analysis
Agent checks:
- Do required inputs exist?
- Are they valid?
- Do they meet quality standards?

Example:
```
✅ business-config.php exists
✅ Contains all required constants
✅ No syntax errors
→ Proceed with SEO copywriting
```

### Level 2: Context Understanding
Agent understands:
- Business type implications
- Industry best practices
- Target audience specifics
- Local market dynamics

Example:
```
Business Type: Contractor
Market: Kelowna, BC
→ Research local painting contractor keywords
→ Understand competition in area
→ Generate location-specific SEO strategy
```

### Level 3: Intelligent Decision Making
Agent decides:
- What approach to take
- What examples to reference
- How to optimize output
- When to flag issues

Example:
```
Images in folder: 6 of 7
→ Note: Missing exterior-after image
→ Generate placeholder in the meantime
→ Flag for user to provide later
→ Continue with other images
```

### Level 4: Error Recovery
Agent handles:
- Missing inputs gracefully
- Invalid data with suggestions
- Partial completions
- Clear error reporting

Example:
```
Image quality issue detected (resolution too low)
→ Use as-is but flag quality concern
→ Suggest resolution improvement
→ Continue with deployment
```

---

## Agent Autonomy

### What Each Agent Does Without Asking

**wp-seo-copywriter:**
- Researches keywords automatically
- Generates content variations
- Optimizes for search
- Creates complete SEO strategy
- Decides on keyword distribution

**wp-customizer:**
- Scans image folder automatically
- Detects image quality/dimensions
- Generates image URLs
- Creates manifest file
- Optimizes images if needed

**wp-theme-developer:**
- Analyzes theme requirements
- Applies configuration automatically
- Generates needed CSS changes
- Updates PHP templates
- Tests for compatibility

**wp-plugin-configurator:**
- Selects plugins based on business type
- Installs automatically
- Configures with sensible defaults
- Sets up integrations
- Tests functionality

**wp-deployer:**
- Detects hosting platform automatically
- Generates deployment scripts
- Configures DNS if needed
- Sets up SSL certificates
- Verifies live site

---

## Communication Between Agents

### Agent A to Agent B Handoff

```
Agent A (Business Strategist) completes:
  ↓
  Creates: business-config.php
  ↓
  Updates: project-manifest.json
  {
    "agents_completed": ["business-strategist"],
    "outputs": {
      "business-config": "✅ Completed"
    },
    "next_agent": "wp-seo-copywriter"
  }
  ↓
  Orchestrator detects completion
  ↓
  Triggers: Agent B (SEO Copywriter)
```

### Agent Status Reporting

Each agent reports:
```
Status: COMPLETED ✅
Output: seo-keywords.json
Quality Score: 92/100
Issues: None
Next Step: wp-customizer ready to process images
```

---

## Monitoring & Reporting

### Real-Time Progress

```
🚀 Building website for Premier Painting Solutions...

✅ [COMPLETE] Business Configuration
   - Business name, owner, contact info
   - Service types and areas
   - Brand messaging

⏳ [IN PROGRESS] SEO & Content Optimization
   - Researching local keywords for Kelowna
   - Generating service descriptions
   - Creating SEO strategy
   - ETA: 2 minutes

⏸️ [PENDING] Image Management
   - Will scan images-for-upload/ folder
   - Generate image manifest
   - Upload to WordPress

⏸️ [PENDING] Theme Customization

⏸️ [PENDING] Plugin Configuration

⏸️ [PENDING] Deployment

Total Progress: 17% | Estimated Time: 25 minutes
```

---

## Error Handling Strategy

### Graceful Degradation

If an agent encounters an issue:

1. **Identify the problem** - What went wrong?
2. **Attempt recovery** - Can we fix it automatically?
3. **Use fallback** - If not, use sensible default
4. **Flag for review** - Mark for human review
5. **Continue** - Don't block other agents

Example:
```
❌ Image quality issue detected (640x480, needs 600x450)
→ Attempt: Auto-resize using ImageMagick
  ✅ Success: Resized to optimal dimensions

OR

→ Attempt failed: Not installed
→ Fallback: Use image as-is
⚠️ Flag: "Image resolution suboptimal - recommend 600x450px"
→ Continue: Agent still completes
→ Report: User sees warning but site works
```

---

## Orchestrator Intelligence

The setup-wizard orchestrator:

1. **Analyzes Requirements**
   - What does this project need?
   - What's the business type?
   - What resources are available?

2. **Plans Workflow**
   - Which agents to call?
   - In what order?
   - Any dependencies?

3. **Monitors Progress**
   - Is each agent completing successfully?
   - Are quality standards met?
   - Should we proceed or adjust?

4. **Makes Decisions**
   - Proceed with next agent?
   - Skip optional agents?
   - Flag issues for review?

5. **Reports Status**
   - What's done?
   - What's in progress?
   - What's next?
   - ETA to completion?

---

## Agent Specialization

Each agent is a 180 IQ specialist in their domain:

### wp-seo-copywriter (Content Genius)
- Understands SEO deeply
- Writes persuasive copy
- Researches keywords intelligently
- Optimizes content naturally
- Knows local market dynamics

### wp-customizer (Design Wizard)
- Manages images intelligently
- Understands visual branding
- Makes design decisions
- Optimizes for web
- Creates consistent visual identity

### wp-theme-developer (Code Architect)
- Understands theme structure
- Makes intelligent CSS changes
- Optimizes for performance
- Maintains code quality
- Knows WordPress deeply

### wp-plugin-configurator (Integration Expert)
- Knows plugin ecosystems
- Makes smart plugin selections
- Configures for business needs
- Handles integrations
- Ensures compatibility

### wp-deployer (DevOps Professional)
- Understands hosting platforms
- Automates deployment
- Handles security/SSL
- Optimizes performance
- Ensures reliability

---

## Token Efficiency Strategy

### Agents Reference, Don't Regenerate

Instead of:
```
"Write me a service description for painting contractors..."
```

Do:
```
"Generate service description following the pattern in
examples/painting-contractor/business-config.php lines 34-42"
```

### Agents Use Project Manifest

Instead of:
```
"Here's the business info I got from the config file..."
```

Do:
```
Read from: project-manifest.json
"Business Type: contractor, City: Kelowna, Owner: John"
```

### Agents Work Sequentially

Instead of:
```
Multiple overlapping agent calls
```

Do:
```
One agent completes → Next agent starts
Sequential, clean handoff
```

---

## Success Metrics

An agent succeeds when:

- ✅ Inputs are valid and complete
- ✅ Work is completed to specification
- ✅ Output files are created
- ✅ No critical errors remain
- ✅ Quality standards met
- ✅ Orchestrator can proceed
- ✅ User is informed of progress

---

## The 180 IQ Principle

These aren't simple task agents. Each is:

1. **Deep Expert** - Knows their domain deeply
2. **Autonomous** - Makes intelligent decisions
3. **Context-Aware** - Understands the full project
4. **Error-Resistant** - Handles problems gracefully
5. **Self-Optimizing** - Gets better with each run
6. **Quality-Focused** - Maintains high standards
7. **Efficient** - Minimizes token waste
8. **Proactive** - Anticipates needs

These agents don't just execute tasks - they intelligently solve problems.
