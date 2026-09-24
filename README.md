# Coffee Blog - Strapi CMS

<img width="1512" height="757" alt="Screenshot 2026-09-05 at 16 40 23" src="https://github.com/user-attachments/assets/1fc4206e-5c15-4da0-b269-af9db9f7a32b" />

<br/>

**🚀 Live Admin:** [https://strapi-coffee-blog.onrender.com](https://strapi-coffee-blog.onrender.com)

<br/>

Headless CMS backoffice built with Strapi to manage articles, categories, and media assets for the Coffee Blog platform.

## Infrastructure & Deployments

| Platform       | Scope                          | Details / URL                                                                      |
| -------------- | ------------------------------ | ---------------------------------------------------------------------------------- |
| **Render**     | Strapi CMS Node.js Web Service | [https://strapi-coffee-blog.onrender.com](https://strapi-coffee-blog.onrender.com) |
| **Supabase**   | PostgreSQL Database            | Managed database connected via SSL (`DATABASE_URL`)                                |
| **Cloudinary** | Media & Asset Bucket           | Cloud storage provider for persistent image upload & delivery                      |

### Architecture Overview

- **Backend / CMS (Render):** Deployed as a web service running Node.js in production mode (`npm run start`).
- **Database (Supabase):** Managed PostgreSQL instance configured with SSL for secure connections.
- **Media Storage (Cloudinary):** Integrated via `@strapi/provider-upload-cloudinary` to manage persistent image uploads, optimized delivery, and CDN hosting.

## CLI Commands

### `develop`

Start your Strapi application with `autoReload` enabled for local development. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```bash
pnpm develop
```
