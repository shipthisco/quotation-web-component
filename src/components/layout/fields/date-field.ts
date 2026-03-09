import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BaseField } from './base-field';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

@customElement('shipthis-date-field')
export class ShipthisDateField extends BaseField {

  @state() private isOpen = false;
  @state() private viewYear = new Date().getFullYear();
  @state() private viewMonth = new Date().getMonth();

  static styles = css`
    ${BaseField.styles}

    .date-wrapper {
      position: relative;
    }

    /* ---------- trigger input ---------- */
    .date-input {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border: 1.5px solid var(--qwc-border);
      border-radius: var(--qwc-radius);
      font-size: 14px;
      font-family: inherit;
      background: var(--qwc-surface);
      color: var(--qwc-text);
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
      min-height: 20px;
    }

    .date-input:hover { border-color: var(--qwc-primary); background: var(--qwc-bg); }
    .date-input.open,
    .date-input:focus-within {
      border-color: var(--qwc-primary);
      background: var(--qwc-bg);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }
    .date-input.disabled { opacity: .7; cursor: not-allowed; background: var(--qwc-surface); }

    .date-text { flex: 1; }
    .date-placeholder { color: var(--qwc-text-muted); }

    .icon-btn {
      background: none; border: none; padding: 0; cursor: pointer;
      color: var(--qwc-text-muted); display: flex; align-items: center; transition: color 0.15s;
    }
    .icon-btn:hover { color: var(--qwc-text); }
    .icon-btn.clear:hover { color: var(--qwc-error); }

    /* ---------- calendar popup ---------- */
    .calendar-popup {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      z-index: 100;
      min-width: 280px;
      background: var(--qwc-bg);
      border: 1px solid var(--qwc-border);
      border-radius: var(--qwc-radius);
      box-shadow: 0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
      padding: 16px;
      animation: calendar-in 0.15s ease;
    }

    @keyframes calendar-in {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* header */
    .cal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }

    .cal-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--qwc-text);
    }

    .cal-nav {
      display: flex; gap: 4px;
    }

    .cal-nav button {
      width: 28px; height: 28px;
      display: flex; align-items: center; justify-content: center;
      background: none; border: 1px solid transparent; border-radius: min(6px, var(--qwc-radius));
      color: var(--qwc-text-muted); cursor: pointer; font-size: 14px;
      transition: all 0.1s ease;
    }
    .cal-nav button:hover {
      background: var(--qwc-surface); border-color: var(--qwc-border); color: var(--qwc-text);
    }

    /* day-of-week header */
    .cal-dow {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      margin-bottom: 4px;
    }
    .cal-dow span {
      text-align: center;
      font-size: 11px;
      font-weight: 600;
      color: var(--qwc-text-muted);
      padding: 4px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* day grid */
    .cal-days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
    }

    .cal-day {
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 500;
      border-radius: min(8px, var(--qwc-radius));
      cursor: pointer;
      border: none;
      background: none;
      color: var(--qwc-text);
      transition: all 0.1s ease;
      margin: 0 auto;
    }
    .cal-day:hover { background: var(--qwc-surface); }
    .cal-day.other { color: var(--qwc-text-muted); opacity: 0.5; }
    .cal-day.today {
      border: 1.5px solid var(--qwc-primary);
      color: var(--qwc-primary);
      font-weight: 700;
    }
    .cal-day.selected {
      background: var(--qwc-primary);
      color: #fff;
      font-weight: 700;
    }
    .cal-day.selected:hover {
      background: var(--qwc-primary);
      filter: brightness(1.1);
    }

    /* footer */
    .cal-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px solid var(--qwc-border);
    }

    .cal-footer button {
      background: none; border: none;
      font-size: 13px; font-weight: 500;
      cursor: pointer; padding: 4px 8px; border-radius: min(6px, var(--qwc-radius));
      transition: all 0.1s ease;
    }
    .cal-footer .cal-clear { color: var(--qwc-text-muted); }
    .cal-footer .cal-clear:hover { background: color-mix(in srgb, var(--qwc-error) 10%, transparent); color: var(--qwc-error); }
    .cal-footer .cal-today { color: var(--qwc-primary); }
    .cal-footer .cal-today:hover { background: color-mix(in srgb, var(--qwc-primary) 10%, transparent); }

    /* backdrop overlay to close on outside click */
    .cal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 99;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this.value) {
      const d = new Date(this.value);
      if (!isNaN(d.getTime())) {
        this.viewMonth = d.getMonth();
        this.viewYear = d.getFullYear();
      }
    }
  }

  protected renderInput() {
    const formatted = this.formatDate(this.value);
    const hasValue = !!this.value;

    return html`
      <div class="date-wrapper">
        <div
          class="date-input ${this.isOpen ? 'open' : ''} ${this.disabled || this.read_only ? 'disabled' : ''}"
          @click=${this.toggleCalendar}
          tabindex="0"
          @keydown=${this.handleKeydown}
        >
          <span class="icon-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </span>
          <span class="date-text ${!hasValue ? 'date-placeholder' : ''}">
            ${hasValue ? formatted : 'Select a date'}
          </span>
          ${hasValue ? html`
            <button class="icon-btn clear" @click=${this.clearDate} title="Clear">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          ` : ''}
        </div>

        ${this.isOpen ? html`
          <div class="cal-backdrop" @click=${this.closeCalendar}></div>
          ${this.renderCalendar()}
        ` : ''}
      </div>
    `;
  }

  private renderCalendar() {
    const days = this.getCalendarDays();
    const today = new Date();
    const todayStr = this.toISODate(today);
    const selectedStr = this.value || '';

    return html`
      <div class="calendar-popup">
        <div class="cal-header">
          <span class="cal-title">${MONTHS[this.viewMonth]} ${this.viewYear}</span>
          <div class="cal-nav">
            <button @click=${this.prevMonth} title="Previous month">‹</button>
            <button @click=${this.nextMonth} title="Next month">›</button>
          </div>
        </div>

        <div class="cal-dow">
          ${DAYS.map(d => html`<span>${d}</span>`)}
        </div>

        <div class="cal-days">
          ${days.map(day => {
            const iso = this.toISODate(day.date);
            const classes = [
              'cal-day',
              day.other ? 'other' : '',
              iso === todayStr ? 'today' : '',
              iso === selectedStr ? 'selected' : '',
            ].filter(Boolean).join(' ');
            return html`
              <button class=${classes} @click=${() => this.selectDate(day.date)}>${day.date.getDate()}</button>
            `;
          })}
        </div>

        <div class="cal-footer">
          <button class="cal-clear" @click=${this.clearAndClose}>Clear</button>
          <button class="cal-today" @click=${this.goToday}>Today</button>
        </div>
      </div>
    `;
  }

  /* ---------- calendar data ---------- */
  private getCalendarDays() {
    const first = new Date(this.viewYear, this.viewMonth, 1);
    const startDay = first.getDay(); // 0=Sun
    const days: { date: Date; other: boolean }[] = [];

    // Previous month fill
    for (let i = startDay - 1; i >= 0; i--) {
      const d = new Date(this.viewYear, this.viewMonth, -i);
      days.push({ date: d, other: true });
    }

    // Current month
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(this.viewYear, this.viewMonth, i), other: false });
    }

    // Next month fill (make 6 rows)
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ date: new Date(this.viewYear, this.viewMonth + 1, i), other: true });
    }

    return days;
  }

  /* ---------- actions ---------- */
  private toggleCalendar(e: Event) {
    if (this.disabled || this.read_only) return;
    e.stopPropagation();
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.value) {
      const d = new Date(this.value);
      if (!isNaN(d.getTime())) {
        this.viewMonth = d.getMonth();
        this.viewYear = d.getFullYear();
      }
    }
  }

  private closeCalendar() { this.isOpen = false; }

  private selectDate(date: Date) {
    this.value = this.toISODate(date);
    this.isOpen = false;
    this.validate();
    this.dispatchChange();
  }

  private clearDate(e: Event) {
    e.stopPropagation();
    this.value = '';
    this.validate();
    this.dispatchChange();
  }

  private clearAndClose() {
    this.value = '';
    this.isOpen = false;
    this.validate();
    this.dispatchChange();
  }

  private goToday() {
    const today = new Date();
    this.viewMonth = today.getMonth();
    this.viewYear = today.getFullYear();
    this.selectDate(today);
  }

  private prevMonth() {
    if (this.viewMonth === 0) { this.viewMonth = 11; this.viewYear--; }
    else { this.viewMonth--; }
  }

  private nextMonth() {
    if (this.viewMonth === 11) { this.viewMonth = 0; this.viewYear++; }
    else { this.viewMonth++; }
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.toggleCalendar(e); }
    if (e.key === 'Escape') this.closeCalendar();
  }

  /* ---------- helpers ---------- */
  private toISODate(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  private formatDate(val: string): string {
    if (!val) return '';
    const d = new Date(val + 'T00:00:00');
    if (isNaN(d.getTime())) return val;
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
