# Quotation Web Component

The **Quotation Web Component** is an easy-to-use, embeddable web form designed to collect logistics quotation details in a simple, step-by-step manner. Built with Angular and packaged as a standalone web component, it can be integrated into any website by including a few files and setting required parameters.

## Key Features

- Sequential multi-section form with 4 steps:
  1. User Details
  2. Shipment Info
  3. Pickup & Drop
  4. Additional Info
- Real-time validation on each step
- Google reCAPTCHA v2 protection
- Customizable via attributes (API key, organization ID, module name, redirect URL)
- Responsive design for desktop and mobile
- No Angular or other dependencies required on host site

--- 
## Quick Copy: CDN Links

Use the following CDN links to include the Quotation Web Component in your website:

### JavaScript (include inside `<script tag>`):

```html
<script async src="https://cdn.jsdelivr.net/gh/shipthisco/quotation-web-component/dist/quotation-module/bundle.js"> </script>
```

### Stylesheet (include inside `<head>`):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/shipthisco/quotation-web-component/dist/quotation-module/styles.css" />
```


## Required Parameters

The component supports the following attributes, which must be configured based on your organization and platform integration:

| Attribute          | Description                                                       |
|-------------------|-------------------------------------------------------------------|
| `captcha_site_key`| Your public site key from Google reCAPTCHA v2                     |
| `module_name`     | A custom label to display as the heading or identifier for the form |
| `organisation_id` | The unique ID of your organization                                |
| `x_api_key`       | Access token to authenticate API requests                         |
| `redirect_url`    | URL to redirect the user after successful form submission         |

All attributes are **required** for the component to work correctly.

---



## How to Embed the Component

To use this web component on your website, simply add the following:

1. **Include the CSS stylesheet** in your HTML `<head>`.
2. **Add the component’s JavaScript bundle** near the end of your HTML `<body>`.
3. **Place the custom HTML tag** `<app-quotation-web-component>` anywhere inside your `<body>`, with the necessary configuration attributes.

---


### Example Integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- Stylesheet from CDN -->
  <link rel="stylesheet" href="hhttps://cdn.jsdelivr.net/gh/shipthisco/quotation-web-component/dist/quotation-module/styles.css" />
</head>
<body>

  <!-- Quotation Web Component -->
  <app-quotation-web-component
    captcha_site_key="YOUR_RECAPTCHA_SITE_KEY"
    module_name="New Quotation Module"
    organisation_id="YOUR_ORG_ID"
    x_api_key="YOUR_API_KEY"
    redirect_url="https://yourwebsite.com/thank-you"
  ></app-quotation-web-component>

  <!-- JavaScript bundle from CDN -->
  <script src="https://cdn.jsdelivr.net/gh/shipthisco/quotation-web-component/dist/quotation-module/bundle.js" async></script>
  
</body>
</html>
```

## Compatibility

 ✅ Modern Browsers (Chrome, Edge, Firefox, Safari) \
 ✅ No Angular setup required on the host site

---

## Support

For support or integration guidance, contact your Shipthis or refer to your organization’s developer portal.

---

## License

This component is proprietary to Shipthis and its partner organizations. Unauthorized redistribution is prohibited.

