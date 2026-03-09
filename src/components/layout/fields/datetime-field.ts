import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BaseField } from './base-field';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

@customElement('shipthis-datetime-field')
export class ShipthisDateTimeField extends BaseField {

  @state() private isOpen = false;
  @state() private viewYear = new Date().getFullYear();
  @state() private viewMonth = new Date().getMonth();
  @state() private selectedDate: string = '';   // YYYY-MM-DD
  @state() private selectedTime: string = '00:00';

  static styles = css`
    ${BaseField.styles}

    .dt-wrapper { position: relative; }

    /* ---------- trigger ---------- */
    .dt-input {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 12px;
      border: 1.5px solid var(--qwc-border); border-radius: var(--qwc-radius);
      font-size: 14px; font-family: inherit;
      background: var(--qwc-surface); color: var(--qwc-text);
      cursor: pointer; transition: all 0.2s ease;
      user-select: none; min-height: 20px;
    }
    .dt-input:hover { border-color: var(--qwc-primary); background: var(--qwc-bg); }
    .dt-input.open, .dt-input:focus-within {
      border-color: var(--qwc-primary);
      background: var(--qwc-bg);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }
    .dt-input.disabled { opacity: .7; cursor: not-allowed; background: var(--qwc-surface); }
    .dt-text { flex: 1; }
    .dt-placeholder { color: var(--qwc-text-muted); }

    .icon-btn {
      background: none; border: none; padding: 0; cursor: pointer;
      color: var(--qwc-text-muted); display: flex; align-items: center; transition: color 0.15s;
    }
    .icon-btn:hover { color: var(--qwc-text); }
    .icon-btn.clear:hover { color: var(--qwc-error); }

    /* ---------- popup ---------- */
    .dt-popup {
      position: absolute; top: calc(100% + 6px); left: 0; z-index: 100;
      min-width: 300px; background: var(--qwc-bg);
      border: 1px solid var(--qwc-border); border-radius: var(--qwc-radius);
      box-shadow: 0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
      padding: 16px;
      animation: popup-in 0.15s ease;
    }
    @keyframes popup-in {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* calendar header */
    .cal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .cal-title { font-size: 15px; font-weight: 600; color: var(--qwc-text); }
    .cal-nav { display: flex; gap: 4px; }
    .cal-nav button {
      width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
      background: none; border: 1px solid transparent; border-radius: min(6px, var(--qwc-radius));
      color: var(--qwc-text-muted); cursor: pointer; font-size: 14px; transition: all 0.1s ease;
    }
    .cal-nav button:hover { background: var(--qwc-surface); border-color: var(--qwc-border); color: var(--qwc-text); }

    /* day-of-week */
    .cal-dow { display: grid; grid-template-columns: repeat(7,1fr); gap: 2px; margin-bottom: 4px; }
    .cal-dow span { text-align: center; font-size: 11px; font-weight: 600; color: var(--qwc-text-muted); padding: 4px 0; text-transform: uppercase; letter-spacing: 0.5px; }

    /* day grid */
    .cal-days { display: grid; grid-template-columns: repeat(7,1fr); gap: 2px; }
    .cal-day {
      width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 500; border-radius: min(8px, var(--qwc-radius)); cursor: pointer;
      border: none; background: none; color: var(--qwc-text); transition: all 0.1s ease; margin: 0 auto;
    }
    .cal-day:hover { background: var(--qwc-surface); }
    .cal-day.other { color: var(--qwc-text-muted); opacity: 0.5; }
    .cal-day.today { border: 1.5px solid var(--qwc-primary); color: var(--qwc-primary); font-weight: 700; }
    .cal-day.selected { background: var(--qwc-primary); color: #fff; font-weight: 700; }
    .cal-day.selected:hover { background: var(--qwc-primary); filter: brightness(1.1); }

    /* ---------- time section ---------- */
    .time-section {
      margin-top: 14px; padding-top: 12px;
      border-top: 1px solid var(--qwc-border);
      display: flex; align-items: center; gap: 10px;
    }
    .time-label { font-size: 13px; font-weight: 500; color: var(--qwc-text-muted); white-space: nowrap; }
    .time-input {
      flex: 1; padding: 8px 10px;
      border: 1.5px solid var(--qwc-border); border-radius: var(--qwc-radius);
      font-size: 14px; font-family: inherit;
      background: var(--qwc-surface); color: var(--qwc-text);
      outline: none; transition: all 0.2s ease;
      text-align: center; max-width: 100px;
    }
    .time-input:focus { border-color: var(--qwc-primary); background: var(--qwc-bg); box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent); }

    /* footer */
    .cal-footer { display: flex; justify-content: space-between; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--qwc-border); }
    .cal-footer button {
      background: none; border: none; font-size: 13px; font-weight: 500;
      cursor: pointer; padding: 4px 8px; border-radius: min(6px, var(--qwc-radius)); transition: all 0.1s ease;
    }
    .cal-footer .cal-clear { color: var(--qwc-text-muted); }
    .cal-footer .cal-clear:hover { background: color-mix(in srgb, var(--qwc-error) 10%, transparent); color: var(--qwc-error); }
    .cal-footer .cal-now { color: var(--qwc-primary); }
    .cal-footer .cal-now:hover { background: color-mix(in srgb, var(--qwc-primary) 10%, transparent); }

    .cal-backdrop { position: fixed; inset: 0; z-index: 99; }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.parseValue();
  }

  updated(changed: Map<string, any>) {
    super.updated(changed);
    if (changed.has('value')) {
      this.parseValue();
    }
  }

  private parseValue() {
    if (!this.value) { this.selectedDate = ''; this.selectedTime = '00:00'; return; }
    // Value may be { $date: ms } or ISO string
    let d: Date;
    if (typeof this.value === 'object' && this.value.$date) {
      d = new Date(this.value.$date);
    } else {
      d = new Date(this.value);
    }
    if (isNaN(d.getTime())) return;
    this.selectedDate = this.toISODate(d);
    this.selectedTime = `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    this.viewMonth = d.getMonth();
    this.viewYear = d.getFullYear();
  }

  protected renderInput() {
    const formatted = this.formatDisplay();
    const hasValue = !!this.selectedDate;

    return html`
      <div class="dt-wrapper">
        <div
          class="dt-input ${this.isOpen ? 'open' : ''} ${this.disabled || this.read_only ? 'disabled' : ''}"
          @click=${this.toggle}
          tabindex="0"
          @keydown=${this.handleKeydown}
        >
          <span class="icon-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
              <circle cx="17" cy="17" r="3"/><line x1="17" y1="15.5" x2="17" y2="17" /><line x1="17" y1="17" x2="18" y2="18"/>
            </svg>
          </span>
          <span class="dt-text ${!hasValue ? 'dt-placeholder' : ''}">${hasValue ? formatted : 'Select date & time'}</span>
          ${hasValue ? html`
            <button class="icon-btn clear" @click=${this.clearValue} title="Clear">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          ` : ''}
        </div>

        ${this.isOpen ? html`
          <div class="cal-backdrop" @click=${this.close}></div>
          ${this.renderPopup()}
        ` : ''}
      </div>
    `;
  }

  private renderPopup() {
    const days = this.getCalendarDays();
    const today = new Date();
    const todayStr = this.toISODate(today);

    return html`
      <div class="dt-popup">
        <div class="cal-header">
          <span class="cal-title">${MONTHS[this.viewMonth]} ${this.viewYear}</span>
          <div class="cal-nav">
            <button @click=${this.prevMonth}>‹</button>
            <button @click=${this.nextMonth}>›</button>
          </div>
        </div>

        <div class="cal-dow">${DAYS.map(d => html`<span>${d}</span>`)}</div>

        <div class="cal-days">
          ${days.map(day => {
            const iso = this.toISODate(day.date);
            const cls = ['cal-day', day.other ? 'other' : '', iso === todayStr ? 'today' : '', iso === this.selectedDate ? 'selected' : ''].filter(Boolean).join(' ');
            return html`<button class=${cls} @click=${() => this.pickDate(day.date)}>${day.date.getDate()}</button>`;
          })}
        </div>

        <div class="time-section">
          <span class="time-label">Time</span>
          <input
            class="time-input"
            type="time"
            .value=${this.selectedTime}
            @change=${this.onTimeChange}
          />
        </div>

        <div class="cal-footer">
          <button class="cal-clear" @click=${this.clearAndClose}>Clear</button>
          <button class="cal-now" @click=${this.setNow}>Now</button>
        </div>
      </div>
    `;
  }

  /* ---------- calendar data ---------- */
  private getCalendarDays() {
    const first = new Date(this.viewYear, this.viewMonth, 1);
    const startDay = first.getDay();
    const days: { date: Date; other: boolean }[] = [];
    for (let i = startDay - 1; i >= 0; i--) days.push({ date: new Date(this.viewYear, this.viewMonth, -i), other: true });
    const dim = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
    for (let i = 1; i <= dim; i++) days.push({ date: new Date(this.viewYear, this.viewMonth, i), other: false });
    const rem = 42 - days.length;
    for (let i = 1; i <= rem; i++) days.push({ date: new Date(this.viewYear, this.viewMonth + 1, i), other: true });
    return days;
  }

  /* ---------- actions ---------- */
  private toggle(e: Event) {
    if (this.disabled || this.read_only) return;
    e.stopPropagation();
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.selectedDate) {
      const d = new Date(this.selectedDate);
      if (!isNaN(d.getTime())) { this.viewMonth = d.getMonth(); this.viewYear = d.getFullYear(); }
    }
  }

  private close() { this.isOpen = false; }

  private pickDate(date: Date) {
    this.selectedDate = this.toISODate(date);
    this.emitValue();
  }

  private onTimeChange(e: Event) {
    this.selectedTime = (e.target as HTMLInputElement).value || '00:00';
    if (this.selectedDate) this.emitValue();
  }

  private clearValue(e: Event) {
    e.stopPropagation();
    this.selectedDate = '';
    this.selectedTime = '00:00';
    this.value = '';
    this.validate();
    this.dispatchChange();
  }

  private clearAndClose() {
    this.selectedDate = '';
    this.selectedTime = '00:00';
    this.value = '';
    this.isOpen = false;
    this.validate();
    this.dispatchChange();
  }

  private setNow() {
    const now = new Date();
    this.selectedDate = this.toISODate(now);
    this.selectedTime = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    this.viewMonth = now.getMonth();
    this.viewYear = now.getFullYear();
    this.emitValue();
    this.isOpen = false;
  }

  private prevMonth() {
    if (this.viewMonth === 0) { this.viewMonth = 11; this.viewYear--; } else { this.viewMonth--; }
  }
  private nextMonth() {
    if (this.viewMonth === 11) { this.viewMonth = 0; this.viewYear++; } else { this.viewMonth++; }
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.toggle(e); }
    if (e.key === 'Escape') this.close();
  }

  /* ---------- emit combined value ---------- */
  private emitValue() {
    if (!this.selectedDate) return;
    const [h, m] = (this.selectedTime || '00:00').split(':').map(Number);
    const d = new Date(this.selectedDate + 'T00:00:00');
    d.setHours(h, m, 0, 0);

    // Emit as { $date: ms } to match monorepo format
    const timestamp = d.getTime() - d.getTimezoneOffset() * 60 * 1000;
    this.value = { $date: timestamp };
    this.validate();
    this.dispatchChange();
  }

  /* ---------- helpers ---------- */
  private toISODate(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  private formatDisplay(): string {
    if (!this.selectedDate) return '';
    const d = new Date(this.selectedDate + 'T00:00:00');
    if (isNaN(d.getTime())) return '';
    const dateStr = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    return `${dateStr}, ${this.selectedTime || '00:00'}`;
  }
}
