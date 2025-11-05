# Small Business WordPress Template

A universal, production-ready WordPress template designed for small businesses across multiple industries.

## Overview

This template provides a complete, ready-to-deploy WordPress solution for:

- **Contractors & Construction** - Showcase projects, services, and testimonials
- **Professional Services** - Lawyers, accountants, consultants
- **Health & Wellness** - Clinics, therapists, fitness centers
- **Retail & E-commerce** - Physical and online stores
- **Food Services** - Restaurants, cafes, catering

## Features

- Docker-based development and deployment
- Pre-configured essential plugins
- SEO-optimized out of the box
- Mobile-responsive design
- Contact forms and lead generation
- Google Analytics integration
- Social media integration
- Security hardening
- Performance optimizations
- Claude Code agents for rapid customization

## Quick Start

```bash
# Clone the repository
git clone <repository-url>

# Copy environment configuration
cp .env.example .env

# Edit .env with your settings
nano .env

# Start Docker environment
docker-compose up -d

# Access WordPress
open http://localhost:8080
```

## Documentation

Comprehensive documentation is available in the `/docs` directory:

- [Setup Guide](docs/SETUP-GUIDE.md)
- [Customization Guide](docs/CUSTOMIZATION-GUIDE.md)
- **[Image Management Guide](docs/IMAGE-MANAGEMENT.md)** - How to change website images
- [SEO Guide](docs/SEO-GUIDE.md)
- [Business Types Guide](docs/BUSINESS-TYPES.md)
- [Deployment Guide](docs/DEPLOYMENT-GUIDE.md)
- [Claude Code Agents Guide](docs/AGENTS-GUIDE.md)

### Quick Reference: Changing Images

The easiest customization is changing website images:

1. Upload photos to WordPress Media Library
2. Copy the image URL
3. Edit `wp-content/themes/small-business-pro/index.php`
4. Replace image URLs (clearly marked with comments)
5. Upload the updated file

See [Image Management Guide](docs/IMAGE-MANAGEMENT.md) for complete instructions.

## Project Structure

```
small-business-wp-template/
├── .claude/              # Claude Code configuration and agents
├── .github/              # GitHub templates and workflows
├── config/               # Configuration files
├── deployment/           # Deployment scripts and configs
├── docs/                 # Documentation
├── examples/             # Example configurations for different business types
├── scripts/              # Utility scripts
├── wp-content/           # WordPress content (themes, plugins)
│   ├── themes/          # Custom themes
│   ├── plugins/         # Custom plugins
│   └── uploads/         # Media files (gitignored)
├── .env.example         # Environment variables template
├── .gitignore           # Git exclusions
├── docker-compose.yml   # Docker orchestration
├── Dockerfile           # Custom WordPress image
├── LICENSE              # MIT License
└── wp-config.php        # WordPress configuration
```

## Requirements

- Docker and Docker Compose
- 2GB+ RAM recommended
- Modern web browser

## Technology Stack

- **WordPress** - Latest stable version
- **MySQL 8.0** - Database
- **PHP 8.1+** - Server-side language
- **Docker** - Containerization
- **Composer** - PHP dependency management
- **Claude Code** - AI-assisted development

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions, issues, or contributions, please refer to the documentation or open an issue.

---

**Version:** 1.0.0
**Status:** In Development
**Last Updated:** 2025-11-04
