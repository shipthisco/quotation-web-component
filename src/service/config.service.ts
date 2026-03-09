export type WidgetConfig = {
  captchaKey: string;
  title: string;
  description: string;
  organisationId: string;
  collection: string;
  apiKey: string;
  redirectUrl: string;
  layout: string;
  showHeader: boolean;
  theme: any;
  locale: string;
  showFooter: boolean;
  debug: boolean;
  trackEvents: boolean;
  submitButtonText?: string | null;
  clearButtonText?: string | null;
  showClearButton?: boolean;
  successMessage?: string | null;
};

export class ConfigService {
  private static config: WidgetConfig;

  static init(cfg: WidgetConfig) {
    this.config = cfg;
  }

  static get(): WidgetConfig {
    return this.config;
  }
}