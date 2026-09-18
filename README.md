# Coffee Blog - Strapi CMS

<img width="1512" height="757" alt="Screenshot 2026-09-05 at 16 40 23" src="https://github.com/user-attachments/assets/1fc4206e-5c15-4da0-b269-af9db9f7a32b" />

<br/>
<br/>

**🚀 Live Admin:** [https://strapi-coffee-blog.onrender.com](https://strapi-coffee-blog.onrender.com)

<br/>

Headless CMS backoffice built with Strapi to manage articles, categories, and media assets for the Coffee Blog platform.

## Deployments

| Platform     | Scope                          | URL                                                                                |
| ------------ | ------------------------------ | ---------------------------------------------------------------------------------- |
| **Render**   | Strapi CMS Node.js Web Service | [https://strapi-coffee-blog.onrender.com](https://strapi-coffee-blog.onrender.com) |
| **Supabase** | Managed PostgreSQL Database    | Connected via `DATABASE_URL`                                                       |

### Deployment Details

- **Backend / CMS (Render):**
  - Deployed as a web service running Node.js in production mode (`npm run start`).
  - Persistent media handling configured via Cloudinary / S3 providers.
- **Database (Supabase):**
  - Hosted PostgreSQL database instance linked with SSL enabled for secure queries from Render.

## CLI Commands

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with `autoReload` enabled for local development. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```bash
npm run develop
# or
yarn develop
```
