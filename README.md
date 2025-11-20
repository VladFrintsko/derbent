# Derbent — cafe menu driven by Strapi

Single-page React 19 + Tailwind app that pulls header, hero, menu, delivery info, and footer content from Strapi CMS. All schema definitions, API mappers, and hooks live under `src/modules/cafe`.

## Quick start

```bash
npm install
npm start
```

The dev server runs at `http://localhost:3000`.

## Environment variables

Create a `.env` file with the following keys.

```
REACT_APP_STRAPI_URL=http://localhost:1337
REACT_APP_STRAPI_TOKEN=<optional, only if the API is protected>
```

## Strapi setup

1. Install Strapi (`npx create-strapi-app@latest derbent-cms --quickstart`) and open the admin panel.
2. Create a Single Type `Cafe Home` with fields:
   - `headerTitle` (Text)
   - `headerTagline` (Text)
   - `headerLogo` (Media, single)
   - `navigation` (Component `shared.link`, repeatable)
   - `heroTitle`, `heroSubtitle`, `heroImage`
   - `menuCategories` (Component `cafe.menu-category`, repeatable)
   - `deliveryPhone`, `deliveryNote`, `whatsappLink`
   - `footerColumns` (Component `cafe.footer-column`, repeatable)
   - `footerAddress`, `footerSchedule`, `footerSocial`, `footerCopyright`
3. Create supporting components:
   - `shared.link` with `label` and `href`
   - `cafe.menu-item` with `title`, `description`, `price`, `tags`, `image`
   - `cafe.menu-category` with `title`, `description`, repeatable relation to `menu-item`
   - `cafe.footer-column` with `title` and repeatable `shared.link`
4. Fill in cafe/menu content via Content Manager.
5. In Roles & Permissions allow public access to `Cafe Home` or generate an API Token and store it in `.env`.

## Frontend architecture

- `src/modules/cafe` — types, API layer, `useCafeContent` hook
- `src/services/strapiClient.ts` — base Strapi client
- `src/components` — presentation blocks (Header, Hero, Menu, Footer, DeliveryPhone, ContentState)
- `src/pages/Home` — orchestration of data states and layout

## Scripts

- `npm start` — dev server
- `npm run build` — production bundle
- `npm test` — CRA tests
