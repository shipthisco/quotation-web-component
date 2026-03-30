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
  stepperSubmitLastOnly?: boolean;
  nextButtonText?: string | null;
  phoneDefaultCountry?: string | null;
  fieldLabelColor?: string | null;
  stepLabelColor?: string | null;
  stepLabelActiveColor?: string | null;
  toastPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  toastOffsetX?: string;
  toastOffsetY?: string;
  toastZIndex?: string;
  toastMaxWidth?: string;
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
