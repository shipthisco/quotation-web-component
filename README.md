# Quotation Web Component (QWC)

An embeddable, framework-agnostic quotation form for collecting logistics quote
requests. Built with [Lit](https://lit.dev/) and shipped as a single
self-contained web component — drop one `<script>` and one custom tag onto any
page and it works. No framework required on the host site.

The form renders fields dynamically from your Shipthis collection schema and
supports multiple layouts, full theming, and reCAPTCHA protection.

---

## Quick Start

Add the bundle and the custom element to your page:

```html
<shipthis-quotation
  organisation-id="YOUR_ORG_ID"
  api-key="YOUR_API_KEY"
  captcha-key="YOUR_RECAPTCHA_V2_SITE_KEY"
  redirect-url="https://yoursite.com/thank-you"
  layout="stepper"
></shipthis-quotation>

<!-- Load the bundle (place before </body>) -->
<script type="module"
  src="https://cdn.jsdelivr.net/gh/shipthisco/quotation-web-component@master/dist/qwc.js">
</script>
```

That's it — the component fetches its field schema and renders itself.

---

## Attributes

### Required

| Attribute         | Description                                          |
|-------------------|------------------------------------------------------|
| `organisation-id` | Your Shipthis organization ID                        |
| `api-key`         | Access token used to authenticate API requests       |
| `captcha-key`     | Public site key for Google reCAPTCHA v2              |

### Content & behavior

| Attribute                  | Default                | Description                                                        |
|----------------------------|------------------------|--------------------------------------------------------------------|
| `title`                    | `Get a Quote`          | Heading shown in the header                                        |
| `description`              | `""`                   | Sub-heading / intro text                                          |
| `layout`                   | `fullform`             | `fullform` \| `stepper` \| `accordion` \| `tabs`                   |
| `locale`                   | `en`                   | UI locale                                                          |
| `redirect-url`             | `""`                   | URL to redirect to after a successful submission                  |
| `success-message`          | —                      | Message shown on successful submission                            |
| `show-header`              | `true`                 | Show/hide the header (`"false"` to hide)                          |
| `show-footer`              | `true`                 | Show/hide the footer (`"false"` to hide)                          |
| `submit-button-text`       | —                      | Override the submit button label                                  |
| `clear-button-text`        | —                      | Override the clear button label                                   |
| `show-clear-button`        | `true`                 | Show/hide the clear button (`"false"` to hide)                    |
| `next-button-text`         | —                      | Override the "Next" label (stepper layout)                        |
| `stepper-submit-last-only` | `false`                | Stepper only: show submit on the last step only                   |
| `phone-default-country`    | —                      | Default country (ISO code) for phone fields                       |
| `auto-scroll`              | `mobile`               | Auto-scroll on step change — see [Auto-scroll](#auto-scroll)       |
| `debug`                    | `false`                | Verbose console logging                                           |
| `track-events`             | `true`                 | Emit analytics/lifecycle events                                   |

### Toast notifications

| Attribute          | Default        | Description                                                       |
|--------------------|----------------|-------------------------------------------------------------------|
| `toast-position`   | `top-right`    | `top-right` \| `top-left` \| `bottom-right` \| `bottom-left` \| `top-center` \| `bottom-center` |
| `toast-offset-x`   | `16px`         | Horizontal offset from the edge                                  |
| `toast-offset-y`   | `16px`         | Vertical offset from the edge                                    |
| `toast-z-index`    | `2147483000`   | Stacking order                                                    |
| `toast-max-width`  | `360px`        | Max toast width                                                   |

### Quick color overrides

These set a single CSS variable each; for full control use [`theme`](#theming).

| Attribute                 | Targets                          |
|---------------------------|----------------------------------|
| `field-label-color`       | `--qwc-field-label`              |
| `step-label-color`        | `--qwc-step-label`               |
| `step-label-active-color` | `--qwc-step-label-active`        |
| `card-title-color`        | `--qwc-card-title`               |

---

## Auto-scroll

On stepper layout, the form can scroll the active step into view when the user
moves between steps. This is controlled by `auto-scroll`:

| Value              | Behavior                                                         |
|--------------------|------------------------------------------------------------------|
| `mobile` (default) | Scrolls to the active step on mobile only; desktop stays put     |
| `off`              | Never auto-scrolls                                               |
| `always`           | Scrolls to the active step on every step change, all devices    |

It never fires on initial page load — only on a real step change (Next button
or step navigation).

```html
<shipthis-quotation auto-scroll="off" ... ></shipthis-quotation>
```

---

## Theming

Pass a JSON `theme` attribute. It supports a `mode` (`light` / `dark`), a global
`radius`, and a color block per mode.

```html
<shipthis-quotation
  organisation-id="..."
  api-key="..."
  captcha-key="..."
  theme='{
    "mode": "light",
    "radius": "10px",
    "light": {
      "primary": "#0f71b5",
      "background": "#ffffff",
      "secondary": "#546681",
      "accent": "#132433",
      "text": "#2e3642",
      "surface": "#d6e8f5",
      "border": "#bfd8eb",
      "textMuted": "#94a3b8",
      "error": "#ef4444",
      "success": "#22c55e",
      "submitButton": { "background": "#0f71b5", "text": "#ffffff" },
      "clearButton":  { "background": "transparent", "text": "#132433", "border": "#0f71b5" }
    }
  }'
></shipthis-quotation>
```

### Theme keys → CSS variables

Every theme value maps to a CSS custom property. You may also set these
variables directly on the element (or any ancestor) instead of using `theme`.

| Theme key (under active mode) | CSS variable             | Fallback                         |
|-------------------------------|--------------------------|----------------------------------|
| `primary`                     | `--qwc-primary`          | `#0661FC`                        |
| `secondary`                   | `--qwc-secondary`        | `primary`                        |
| `accent`                      | `--qwc-accent`           | `#FFB200`                        |
| `background`                  | `--qwc-bg`               | `#ffffff` / `#0f172a`            |
| `surface`                     | `--qwc-surface`          | `#f8fafc` / `#1e293b`            |
| `text`                        | `--qwc-text`             | `#1e293b` / `#f8fafc`            |
| `textMuted`                   | `--qwc-text-muted`       | `#64748b` / `#94a3b8`            |
| `border`                      | `--qwc-border`           | `#e2e8f0` / `#334155`            |
| `error`                       | `--qwc-error`            | `#ef4444`                        |
| `success`                     | `--qwc-success`          | `#22c55e`                        |
| `radius` (top-level)          | `--qwc-radius`           | `12px`                           |
| `submitButton.background`     | `--qwc-btn-submit-bg`    | `primary`                        |
| `submitButton.text`           | `--qwc-btn-submit-text`  | `#ffffff`                        |
| `clearButton.background`      | `--qwc-btn-clear-bg`     | `transparent`                    |
| `clearButton.text`            | `--qwc-btn-clear-text`   | muted                            |
| `clearButton.border`          | `--qwc-btn-clear-border` | border                           |

> The component is rendered in Shadow DOM, so host-page styles do not leak in
> and the form's styles do not leak out. The CSS variables above are the
> supported customization surface.

---

## Full example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>

  <shipthis-quotation
    organisation-id="YOUR_ORG_ID"
    api-key="YOUR_API_KEY"
    captcha-key="YOUR_RECAPTCHA_SITE_KEY"
    title="Request a Quote"
    layout="stepper"
    auto-scroll="mobile"
    show-clear-button="false"
    submit-button-text="Get My Quote"
    success-message="Thanks! Our team will be in touch shortly."
    redirect-url="https://yoursite.com/quote-received"
    theme='{"mode":"light","radius":"10px","light":{"primary":"#0f71b5"}}'
  ></shipthis-quotation>

  <script type="module"
    src="https://cdn.jsdelivr.net/gh/shipthisco/quotation-web-component@master/dist/qwc.js">
  </script>

</body>
</html>
```

---

## Local development

```bash
npm install     # install dependencies
npm run dev      # start the Vite dev server (uses index.html)
npm run build    # produce the production bundle at dist/qwc.js
npm run preview  # serve the built bundle
```

- **Dev:** `index.html` is the local test harness — edit the attributes there to
  try out configs and themes.
- **Build output:** a single IIFE bundle at `dist/qwc.js` (entry: `src/loader.ts`).

### Project structure

```
src/
  loader.ts                     # entry — registers the custom element
  components/
    shipthis-quotation.ts       # root element (attributes, theming, toasts)
    layout/
      header.ts, footer.ts, card.ts, form.ts
      fields/                   # field types: text, email, phone, date, dropdown,
                                #   location, currency, number, boolean, textarea, ...
  service/
    config.service.ts           # config store
    shipthis.service.ts         # Shipthis API client
    validator.service.ts        # field validation
    condition.service.ts        # conditional field logic
```

---

## Compatibility

- Modern browsers: Chrome, Edge, Firefox, Safari
- No framework required on the host site

---

## License

Proprietary to Shipthis and its partner organizations. Unauthorized
redistribution is prohibited.
