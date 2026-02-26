"use client";

import { useState } from "react";

/* ─── CONFIG ─── */
// Days that are already booked (format: "YYYY-MM-DD")
const BOOKED_DAYS = [
  "2026-03-03", "2026-03-04", "2026-03-10", "2026-03-11",
  "2026-03-17", "2026-03-18", "2026-03-19", "2026-03-24",
  "2026-03-25", "2026-03-31",
];

const TIME_SLOTS = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
];

const SERVICES = [
  { id: "strategy", label: "Business Strategy", price: "Free Discovery" },
  { id: "revenue",  label: "Revenue Scaling",   price: "Free Discovery" },
  { id: "leadership", label: "Leadership Coaching", price: "Free Discovery" },
  { id: "marketing",  label: "Marketing Mastery",  price: "Free Discovery" },
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

/* ─── HELPERS ─── */
function pad(n: any) { return String(n).padStart(2, "0"); }
function toKey(y:any, m:any, d:any) { return `${y}-${pad(m + 1)}-${pad(d)}`; }
function isWeekend(y:any, m:any, d:any) { const day = new Date(y, m, d).getDay(); return day === 0 || day === 6; }
function isPast(y:any, m:any, d:any) {
  const today = new Date(); today.setHours(0,0,0,0);
  return new Date(y, m, d) < today;
}

/* ─── CALENDAR ─── */
function Calendar({ selectedDate, onSelect }:any) {
  const today = new Date();
  const [viewYear, setViewYear]   = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay   = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  return (
    <div style={{ width: "100%" }}>
      {/* Month nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <button type="button" onClick={prevMonth} style={navBtnStyle}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", letterSpacing: "3px", color: "#c8c6bf" }}>
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>
        <button type="button" onClick={nextMonth} style={navBtnStyle}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px", marginBottom: "8px" }}>
        {DAY_NAMES.map(d => (
          <div key={d} style={{ textAlign: "center", fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", color: "#72756c", textTransform: "uppercase", padding: "6px 0" }}>
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
        {cells.map((d, i) => {
          if (!d) return <div key={`e${i}`} />;
          const key      = toKey(viewYear, viewMonth, d);
          const booked   = BOOKED_DAYS.includes(key);
          const weekend  = isWeekend(viewYear, viewMonth, d);
          const past     = isPast(viewYear, viewMonth, d);
          const disabled = booked || weekend || past;
          const selected = selectedDate === key;

          let bg    = "transparent";
          let color = "#c8c6bf";
          let border = "1px solid rgba(114,117,108,0.12)";
          let cursor = "pointer";
          let title  = "";

          if (past || weekend)   { color = "rgba(114,117,108,0.3)"; cursor = "default"; border = "1px solid transparent"; }
          if (booked && !past && !weekend) { bg = "rgba(243,73,0,0.08)"; color = "#f34900"; border = "1px solid rgba(243,73,0,0.25)"; cursor = "not-allowed"; title = "Booked"; }
          if (selected)          { bg = "#f34900"; color = "#fff"; border = "1px solid #f34900"; }

          return (
            <button
              key={key}
              type="button"
              title={title}
              disabled={disabled}
              onClick={() => !disabled && onSelect(key)}
              style={{
                background: bg, color, border, borderRadius: "6px",
                padding: "10px 4px", textAlign: "center",
                fontSize: "13px", fontWeight: selected ? 700 : 500,
                cursor, transition: "all 0.15s",
                fontFamily: "'Syne', sans-serif",
                position: "relative",
              }}
              onMouseEnter={e => { if (!disabled && !selected) e.currentTarget.style.background = "rgba(243,73,0,0.1)"; }}
              onMouseLeave={e => { if (!disabled && !selected) e.currentTarget.style.background = "transparent"; }}
            >
              {d}
              {booked && !past && !weekend && (
                <span style={{ position: "absolute", bottom: "3px", left: "50%", transform: "translateX(-50%)", width: "4px", height: "4px", borderRadius: "50%", background: "#f34900", display: "block" }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        {[
          { color: "#f34900", bg: "rgba(243,73,0,0.1)", label: "Booked" },
          { color: "#c8c6bf", bg: "rgba(114,117,108,0.12)", label: "Available" },
          { color: "#f34900", bg: "#f34900", label: "Selected", text: "#fff" },
        ].map(item => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ width: "14px", height: "14px", borderRadius: "3px", background: item.bg, border: `1px solid ${item.color}`, flexShrink: 0 }} />
            <span style={{ fontSize: "11px", color: "#72756c", letterSpacing: "1px", textTransform: "uppercase" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const navBtnStyle = {
  background: "rgba(114,117,108,0.1)", border: "1px solid rgba(114,117,108,0.2)",
  color: "#c8c6bf", borderRadius: "8px", width: "36px", height: "36px",
  display: "flex", alignItems: "center", justifyContent: "center",
  cursor: "pointer", transition: "all 0.2s",
};

/* ─── INPUT COMPONENTS ─── */
function Field({ label, type = "text", value, onChange, placeholder, required }:any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
      <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#72756c", fontFamily: "'Syne', sans-serif" }}>
        {label}{required && <span style={{ color: "#f34900", marginLeft: "3px" }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          background: "#131b2a", border: "1px solid rgba(114,117,108,0.2)",
          borderRadius: "6px", padding: "13px 16px",
          fontSize: "14px", color: "#c8c6bf", fontFamily: "'Syne', sans-serif",
          outline: "none", transition: "border-color 0.2s",
          width: "100%",
        }}
        onFocus={e => e.target.style.borderColor = "#f34900"}
        onBlur={e => e.target.style.borderColor = "rgba(114,117,108,0.2)"}
      />
    </div>
  );
}

function Select({ label, value, onChange, options, required }:any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
      <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#72756c", fontFamily: "'Syne', sans-serif" }}>
        {label}{required && <span style={{ color: "#f34900", marginLeft: "3px" }}>*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        required={required}
        style={{
          background: "#131b2a", border: "1px solid rgba(114,117,108,0.2)",
          borderRadius: "6px", padding: "13px 16px",
          fontSize: "14px", color: value ? "#c8c6bf" : "#72756c",
          fontFamily: "'Syne', sans-serif", outline: "none",
          transition: "border-color 0.2s", width: "100%", cursor: "pointer",
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2 4L6 8L10 4' stroke='%2372756c' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
        }}
        onFocus={e => e.target.style.borderColor = "#f34900"}
        onBlur={e => e.target.style.borderColor = "rgba(114,117,108,0.2)"}
      >
        {options.map((o:any) => <option key={o.value} value={o.value} disabled={o.disabled} style={{ background: "#1c2840" }}>{o.label}</option>)}
      </select>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function ScheduleCallPage() {
  // Step: 1 = pick date/time, 2 = fill info, 3 = confirmed
  const [step, setStep]           = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [service, setService]     = useState("");

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", website: "", revenue: "", goal: "",
    cardName: "", cardNumber: "", expiry: "", cvv: "",
  });

  function handleField(key:any) {
    return (e:any) => setForm(f => ({ ...f, [key]: e.target.value }));
  }

  function handleStep1(e:any) {
    e.preventDefault();
    if (!selectedDate) { alert("Please select a date."); return; }
    if (!selectedTime) { alert("Please select a time slot."); return; }
    if (!service)      { alert("Please select a service."); return; }
    setStep(2);
  }

  function handleStep2(e:any) {
    e.preventDefault();
    setStep(3);
  }

  const selectedServiceLabel = SERVICES.find(s => s.id === service)?.label || "";
  const [selY, selM, selD] = selectedDate ? String(selectedDate).split("-").map(Number) : [];
  const formattedDate = selectedDate
    ? `${MONTH_NAMES[selM - 1]} ${selD}, ${selY}`
    : "";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700;800&display=swap');

        .sc-page {
          min-height: 100vh;
          background: #131b2a;
          font-family: 'Syne', sans-serif;
          color: #c8c6bf;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .sc-page::before {
          content: '';
          position: fixed; inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 90% 10%, rgba(243,73,0,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 5%  90%, rgba(28,40,64,0.8)  0%, transparent 60%);
          pointer-events: none; z-index: 0;
        }

        .sc-inner {
          position: relative; z-index: 1;
          max-width: 1160px; margin: 0 auto; padding: 0 24px;
        }

        /* HEADER */
        .sc-header { text-align: center; margin-bottom: 56px; }
        .sc-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 700; letter-spacing: 4px;
          text-transform: uppercase; color: #f34900; margin-bottom: 14px;
        }
        .sc-eyebrow::before, .sc-eyebrow::after { content: ''; display: block; width: 24px; height: 2px; background: #f34900; }
        .sc-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(44px, 7vw, 80px);
          letter-spacing: 3px; line-height: 1; color: #c8c6bf;
        }
        .sc-title em { font-style: normal; color: #f34900; }
        .sc-subtitle { font-size: 15px; color: #72756c; margin-top: 14px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.7; }

        /* STEPPER */
        .sc-stepper {
          display: flex; align-items: center; justify-content: center;
          gap: 0; margin-bottom: 48px;
        }
        .sc-step {
          display: flex; align-items: center; gap: 10px;
        }
        .sc-step-circle {
          width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 1px;
          border: 2px solid rgba(114,117,108,0.3); color: #72756c;
          transition: all 0.3s;
        }
        .sc-step-circle.active { border-color: #f34900; color: #f34900; background: rgba(243,73,0,0.1); }
        .sc-step-circle.done   { border-color: #f34900; background: #f34900; color: #fff; }
        .sc-step-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #72756c; transition: color 0.3s; }
        .sc-step-label.active, .sc-step-label.done { color: #c8c6bf; }
        .sc-step-line { width: 60px; height: 1px; background: rgba(114,117,108,0.2); margin: 0 16px; }
        .sc-step-line.done { background: rgba(243,73,0,0.4); }

        /* CARD */
        .sc-card {
          background: #1c2840;
          border: 1px solid rgba(114,117,108,0.12);
          border-radius: 16px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.35);
        }

        .sc-card-top-bar {
          height: 3px;
          background: linear-gradient(90deg, #f34900, rgba(243,73,0,0.3));
        }

        /* TWO-COLUMN LAYOUT */
        .sc-two-col {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 0;
        }

        .sc-left  { padding: 44px 44px; border-right: 1px solid rgba(114,117,108,0.1); }
        .sc-right { padding: 44px 36px; background: rgba(19,27,42,0.5); }

        @media (max-width: 860px) {
          .sc-two-col { grid-template-columns: 1fr; }
          .sc-left  { border-right: none; border-bottom: 1px solid rgba(114,117,108,0.1); padding: 32px 24px; }
          .sc-right { padding: 32px 24px; }
        }

        /* SECTION LABEL */
        .sc-section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #f34900; margin-bottom: 20px;
          display: flex; align-items: center; gap: 10px;
        }
        .sc-section-label::after { content: ''; flex: 1; height: 1px; background: rgba(243,73,0,0.2); }

        /* TIME SLOTS */
        .sc-time-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;
          margin-top: 8px;
        }
        @media (max-width: 600px) { .sc-time-grid { grid-template-columns: repeat(2, 1fr); } }

        .sc-time-btn {
          background: #131b2a; border: 1px solid rgba(114,117,108,0.2);
          border-radius: 6px; padding: 10px 6px; text-align: center;
          font-size: 12px; font-weight: 600; color: #72756c;
          font-family: 'Syne', sans-serif; cursor: pointer;
          transition: all 0.18s;
        }
        .sc-time-btn:hover   { border-color: #f34900; color: #c8c6bf; background: rgba(243,73,0,0.06); }
        .sc-time-btn.selected { border-color: #f34900; background: #f34900; color: #fff; font-weight: 700; }

        /* FORM GRID */
        .sc-form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 580px) { .sc-form-grid-2 { grid-template-columns: 1fr; } }

        /* SUMMARY CARD */
        .sc-summary {
          background: #131b2a; border: 1px solid rgba(114,117,108,0.15);
          border-radius: 10px; padding: 24px; margin-bottom: 28px;
        }
        .sc-summary-row {
          display: flex; justify-content: space-between; align-items: flex-start;
          padding: 10px 0; border-bottom: 1px solid rgba(114,117,108,0.1); gap: 12px;
        }
        .sc-summary-row:last-child { border-bottom: none; }
        .sc-summary-key { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #72756c; }
        .sc-summary-val { font-size: 13px; color: #c8c6bf; font-weight: 600; text-align: right; }

        /* CTA */
        .sc-submit {
          width: 100%; padding: 16px;
          background: #f34900; color: #fff;
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          border: none; border-radius: 6px; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 8px 24px rgba(243,73,0,0.3);
          display: flex; align-items: center; justify-content: center; gap: 10px;
          margin-top: 8px;
        }
        .sc-submit:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(243,73,0,0.45); background: #d94000; }

        .sc-back-btn {
          background: none; border: 1px solid rgba(114,117,108,0.25);
          color: #72756c; font-family: 'Syne', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 12px 24px; border-radius: 6px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s; width: 100%;
          margin-top: 10px;
        }
        .sc-back-btn:hover { border-color: #f34900; color: #f34900; }

        /* NOTE BOX */
        .sc-note {
          background: rgba(243,73,0,0.06); border: 1px solid rgba(243,73,0,0.15);
          border-radius: 8px; padding: 14px 16px;
          font-size: 12px; color: #72756c; line-height: 1.6;
          display: flex; gap: 10px; align-items: flex-start;
        }

        /* SUCCESS */
        .sc-success {
          text-align: center; padding: 80px 40px;
        }

        /* CARD NUMBER FORMAT */
        input[name="cardNumber"] { letter-spacing: 3px; }

        /* Textarea */
        textarea.sc-textarea {
          background: #131b2a; border: 1px solid rgba(114,117,108,0.2);
          border-radius: 6px; padding: 13px 16px;
          font-size: 14px; color: #c8c6bf; font-family: 'Syne', sans-serif;
          outline: none; transition: border-color 0.2s; resize: vertical;
          width: 100%; min-height: 90px;
        }
        textarea.sc-textarea:focus { border-color: #f34900; }
        textarea.sc-textarea::placeholder { color: #72756c; }
      `}</style>

      <div className="sc-page">
        <div className="sc-inner">

          {/* HEADER */}
          <div className="sc-header">
            <div className="sc-eyebrow">Consultation</div>
            <h1 className="sc-title">Schedule <em>Your</em> Call</h1>
            <p className="sc-subtitle">
              30 minutes. No pitch. No pressure. Just an honest conversation about where your business is and where it could go.
            </p>
          </div>

          {/* STEPPER */}
          <div className="sc-stepper">
            {[
              { num: "1", label: "Date & Time" },
              { num: "2", label: "Your Info" },
              { num: "3", label: "Confirmed" },
            ].map((s, i) => (
              <div key={s.num} style={{ display: "flex", alignItems: "center" }}>
                <div className="sc-step">
                  <div className={`sc-step-circle ${step > i + 1 ? "done" : step === i + 1 ? "active" : ""}`}>
                    {step > i + 1
                      ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      : s.num
                    }
                  </div>
                  <span className={`sc-step-label ${step > i + 1 ? "done" : step === i + 1 ? "active" : ""}`}>{s.label}</span>
                </div>
                {i < 2 && <div className={`sc-step-line ${step > i + 1 ? "done" : ""}`} />}
              </div>
            ))}
          </div>

          {/* ── STEP 1: DATE & TIME ── */}
          {step === 1 && (
            <form onSubmit={handleStep1}>
              <div className="sc-card">
                <div className="sc-card-top-bar" />
                <div className="sc-two-col">

                  {/* LEFT — Calendar */}
                  <div className="sc-left">
                    <div className="sc-section-label">Pick a Date</div>
                    <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />

                    {/* Time slots */}
                    {selectedDate && (
                      <div style={{ marginTop: "36px" }}>
                        <div className="sc-section-label">Pick a Time</div>
                        <div className="sc-time-grid">
                          {TIME_SLOTS.map(t => (
                            <button
                              key={t}
                              type="button"
                              className={`sc-time-btn ${selectedTime === t ? "selected" : ""}`}
                              onClick={() => setSelectedTime(t as any)}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT — Service + Summary */}
                  <div className="sc-right">
                    <div className="sc-section-label">Service</div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                      {SERVICES.map(sv => (
                        <button
                          key={sv.id}
                          type="button"
                          onClick={() => setService(sv.id)}
                          style={{
                            background: service === sv.id ? "rgba(243,73,0,0.12)" : "#131b2a",
                            border: `1.5px solid ${service === sv.id ? "#f34900" : "rgba(114,117,108,0.2)"}`,
                            borderRadius: "8px", padding: "14px 16px",
                            cursor: "pointer", textAlign: "left",
                            transition: "all 0.2s",
                          }}
                        >
                          <div style={{ fontSize: "13px", fontWeight: 700, color: service === sv.id ? "#f34900" : "#c8c6bf", fontFamily: "'Syne', sans-serif", marginBottom: "3px" }}>
                            {sv.label}
                          </div>
                          <div style={{ fontSize: "11px", color: "#72756c", letterSpacing: "1px" }}>{sv.price}</div>
                        </button>
                      ))}
                    </div>

                    {/* Mini summary */}
                    {(selectedDate || selectedTime || service) && (
                      <div className="sc-summary" style={{ marginBottom: "24px" }}>
                        <div className="sc-section-label" style={{ marginBottom: "12px" }}>Your Selection</div>
                        {service && (
                          <div className="sc-summary-row">
                            <span className="sc-summary-key">Service</span>
                            <span className="sc-summary-val">{SERVICES.find(s => s.id === service)?.label}</span>
                          </div>
                        )}
                        {selectedDate && (
                          <div className="sc-summary-row">
                            <span className="sc-summary-key">Date</span>
                            <span className="sc-summary-val">{formattedDate}</span>
                          </div>
                        )}
                        {selectedTime && (
                          <div className="sc-summary-row">
                            <span className="sc-summary-key">Time</span>
                            <span className="sc-summary-val">{selectedTime}</span>
                          </div>
                        )}
                        <div className="sc-summary-row">
                          <span className="sc-summary-key">Duration</span>
                          <span className="sc-summary-val">30 minutes</span>
                        </div>
                        <div className="sc-summary-row">
                          <span className="sc-summary-key">Cost</span>
                          <span className="sc-summary-val" style={{ color: "#f34900" }}>200$</span>
                        </div>
                      </div>
                    )}

                    <div className="sc-note">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                        <circle cx="8" cy="8" r="7" stroke="#f34900" strokeWidth="1.5"/>
                        <path d="M8 5V8.5M8 11V11.5" stroke="#f34900" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>You&apos;ll receive a confirmation email with Zoom link after booking.</span>
                    </div>

                    <button type="submit" className="sc-submit" style={{ marginTop: "20px" }}>
                      Continue to Details
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* ── STEP 2: INFO & BILLING ── */}
          {step === 2 && (
            <form onSubmit={handleStep2}>
              <div className="sc-card">
                <div className="sc-card-top-bar" />
                <div className="sc-two-col">

                  {/* LEFT — Personal & Business Info */}
                  <div className="sc-left">
                    <div className="sc-section-label">Personal Information</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                      <div className="sc-form-grid-2">
                        <Field label="First Name" value={form.firstName} onChange={handleField("firstName")} placeholder="John" required />
                        <Field label="Last Name"  value={form.lastName}  onChange={handleField("lastName")}  placeholder="Doe"  required />
                      </div>
                      <Field label="Email Address" type="email" value={form.email} onChange={handleField("email")} placeholder="john@company.com" required />
                      <Field label="Phone Number"  type="tel"   value={form.phone} onChange={handleField("phone")} placeholder="+1 (555) 000-0000" required />
                    </div>

                    <div className="sc-section-label">Business Information</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                      <div className="sc-form-grid-2">
                        <Field label="Company Name" value={form.company} onChange={handleField("company")} placeholder="Acme Inc." />
                        <Field label="Website"      value={form.website} onChange={handleField("website")} placeholder="www.yoursite.com" />
                      </div>
                      <Select
                        label="Annual Revenue"
                        value={form.revenue}
                        onChange={handleField("revenue")}
                        options={[
                          { value: "", label: "Select range...", disabled: true },
                          { value: "0-100k",  label: "Under $100K" },
                          { value: "100k-500k", label: "$100K – $500K" },
                          { value: "500k-1m",   label: "$500K – $1M" },
                          { value: "1m-5m",     label: "$1M – $5M" },
                          { value: "5m+",       label: "$5M+" },
                        ]}
                      />
                      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                        <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#72756c" }}>
                          Your #1 Goal Right Now
                        </label>
                        <textarea
                          className="sc-textarea"
                          value={form.goal}
                          onChange={handleField("goal")}
                          placeholder="e.g. Scale to $1M, fix my sales process, build a team..."
                        />
                      </div>
                    </div>

                    {/* Billing */}
                    <div className="sc-section-label">Billing Details</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div className="sc-note" style={{ marginBottom: "4px" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                          <path d="M2 5h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" stroke="#f34900" strokeWidth="1.5"/>
                          <path d="M2 5V3a1 1 0 011-1h10a1 1 0 011 1v2" stroke="#f34900" strokeWidth="1.5"/>
                          <line x1="2" y1="8" x2="14" y2="8" stroke="#f34900" strokeWidth="1.5"/>
                        </svg>
                        <span>Your discovery call is <strong style={{ color: "#c8c6bf" }}>completely free</strong>. Card details are saved for future paid sessions only. You will not be charged today.</span>
                      </div>
                      <Field label="Name on Card" value={form.cardName} onChange={handleField("cardName")} placeholder="John Doe" />
                      <Field label="Card Number"  value={form.cardNumber} onChange={(e:any) => setForm(f => ({ ...f, cardNumber: e.target.value.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim() }))} placeholder="4242 4242 4242 4242" />
                      <div className="sc-form-grid-2">
                        <Field label="Expiry" value={form.expiry} onChange={(e:any) => setForm(f => ({ ...f, expiry: e.target.value.replace(/\D/g,"").slice(0,4).replace(/^(\d{2})(\d)/,"$1/$2") }))} placeholder="MM/YY" />
                        <Field label="CVV" value={form.cvv} onChange={(e:any) => setForm(f => ({ ...f, cvv: e.target.value.replace(/\D/g,"").slice(0,4) }))} placeholder="123" />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT — Booking Summary */}
                  <div className="sc-right">
                    <div className="sc-section-label">Booking Summary</div>

                    <div className="sc-summary">
                      <div className="sc-summary-row">
                        <span className="sc-summary-key">Service</span>
                        <span className="sc-summary-val">{selectedServiceLabel}</span>
                      </div>
                      <div className="sc-summary-row">
                        <span className="sc-summary-key">Date</span>
                        <span className="sc-summary-val">{formattedDate}</span>
                      </div>
                      <div className="sc-summary-row">
                        <span className="sc-summary-key">Time</span>
                        <span className="sc-summary-val">{selectedTime}</span>
                      </div>
                      <div className="sc-summary-row">
                        <span className="sc-summary-key">Duration</span>
                        <span className="sc-summary-val">30 minutes</span>
                      </div>
                      <div className="sc-summary-row">
                        <span className="sc-summary-key">Format</span>
                        <span className="sc-summary-val">Zoom Video Call</span>
                      </div>
                      <div className="sc-summary-row" style={{ borderBottom: "2px solid rgba(243,73,0,0.3)", paddingBottom: 14 }}>
                        <span className="sc-summary-key">Today&apos;s Charge</span>
                        <span className="sc-summary-val" style={{ color: "#f34900", fontSize: "18px", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}>FREE</span>
                      </div>
                    </div>

                    {/* What to expect */}
                    <div style={{ marginBottom: "28px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#72756c", marginBottom: "14px" }}>
                        What to Expect
                      </div>
                      {[
                        "Zoom link sent to your email immediately",
                        "We review your business before the call",
                        "60-minute deep-dive into your challenges",
                        "Custom action plan delivered same day",
                      ].map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "10px" }}>
                          <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(243,73,0,0.12)", border: "1px solid rgba(243,73,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="#f34900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span style={{ fontSize: "13px", color: "#72756c", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button type="submit" className="sc-submit">
                      Confirm Booking
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button type="button" className="sc-back-btn" onClick={() => setStep(1)}>
                      ← Back to Date & Time
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* ── STEP 3: CONFIRMED ── */}
          {step === 3 && (
            <div className="sc-card">
              <div className="sc-card-top-bar" />
              <div className="sc-success">
                {/* Big check */}
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(243,73,0,0.12)", border: "2px solid #f34900", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M6 18L14 26L30 10" stroke="#f34900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#f34900", marginBottom: "12px" }}>
                  You&apos;re Booked!
                </div>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px,6vw,64px)", letterSpacing: "3px", color: "#c8c6bf", lineHeight: 1, marginBottom: "16px" }}>
                  See You <em style={{ fontStyle: "normal", color: "#f34900" }}>Soon</em>
                </h2>
                <p style={{ fontSize: "15px", color: "#72756c", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 36px" }}>
                  A confirmation email with your Zoom link has been sent to <strong style={{ color: "#c8c6bf" }}>{form.email || "your email"}</strong>. We look forward to speaking with you.
                </p>

                {/* Booking details */}
                <div style={{ display: "inline-flex", flexDirection: "column", gap: "0", background: "#131b2a", border: "1px solid rgba(114,117,108,0.15)", borderRadius: "10px", padding: "24px 36px", marginBottom: "40px", textAlign: "left", minWidth: "320px" }}>
                  {[
                    ["Service", selectedServiceLabel],
                    ["Date",    formattedDate],
                    ["Time",    selectedTime],
                    ["Format",  "Zoom Video Call"],
                    ["Cost",    "Free"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "10px 0", borderBottom: "1px solid rgba(114,117,108,0.08)" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#72756c" }}>{k}</span>
                      <span style={{ fontSize: "13px", color: k === "Cost" ? "#f34900" : "#c8c6bf", fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className="sc-submit"
                    style={{ width: "auto", padding: "15px 32px" }}
                    onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); setService(""); setForm({ firstName:"",lastName:"",email:"",phone:"",company:"",website:"",revenue:"",goal:"",cardName:"",cardNumber:"",expiry:"",cvv:"" }); }}
                  >
                    Schedule Another Call
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
