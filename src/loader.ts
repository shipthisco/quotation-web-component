// import './components/shipthis-quote-form.ts';
import './components/shipthis-quotation.ts';

// optional global namespace
declare global {
  interface Window {
    QWC?: any;
  }
}

window.QWC = {
  version: '1.0.0'
};