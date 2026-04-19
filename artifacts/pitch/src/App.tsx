import { useState, useEffect, useCallback } from "react";
import "./index.css";

const SLIDE_DURATION = 20; // seconds per slide
const TOTAL_SLIDES = 12;

interface SlideProps {
  active: boolean;
}

function Slide01Cover({ active }: SlideProps) {
  return (
    <div
      className="slide"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0D2045 50%, #0A1628 100%)",
        position: "absolute",
        inset: 0,
        opacity: active ? 1 : 0,
        pointerEvents: active ? "all" : "none",
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 860 }}>
        {/* Logo */}
        <div className="anim-1" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 32 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 20,
            background: "linear-gradient(135deg, #C0392B, #E8401C)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 32px rgba(192,57,43,0.4)",
          }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M17 4L28 10V22L17 28L6 22V10L17 4Z" stroke="white" strokeWidth="2.5" fill="none"/>
              <path d="M17 9L23 13V19L17 23L11 19V13L17 9Z" fill="white" fillOpacity="0.9"/>
            </svg>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 38, fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-1px" }}>HawalaTrack</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Mono', monospace", marginTop: 2 }}>v1.0  ·  Seed Round</div>
          </div>
        </div>

        <div className="anim-2" style={{
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.1,
          letterSpacing: "-2px",
          marginBottom: 24,
        }}>
          The Missing App for<br />
          <span style={{ background: "linear-gradient(135deg, #1A9E5A, #4CD98B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Pakistan's $27B Remittance Market
          </span>
        </div>

        <div className="anim-3" style={{
          fontSize: 20,
          color: "rgba(255,255,255,0.6)",
          maxWidth: 560,
          margin: "0 auto 40px",
          lineHeight: 1.6,
        }}>
          Compare rates, track transfers, and save money — built for the 9 million Pakistanis working abroad
        </div>

        <div className="anim-4" style={{ display: "flex", gap: 32, justifyContent: "center" }}>
          {[
            { label: "Market Size", value: "$27B" },
            { label: "Overseas Pakistanis", value: "9M+" },
            { label: "Avg Fee Waste/yr", value: "$312" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "16px 28px",
              backdropFilter: "blur(8px)",
            }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", fontFamily: "'DM Mono', monospace" }}>{value}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide02Problem({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "#0A1628",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#C0392B", textTransform: "uppercase", marginBottom: 16 }}>The Problem</div>
        <div className="anim-2" style={{ fontSize: "clamp(32px, 4.5vw, 58px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 40 }}>
          Sending money home is<br />
          <span style={{ background: "linear-gradient(135deg, #C0392B, #E8401C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>broken — and costly</span>
        </div>

        <div className="anim-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { icon: "💸", stat: "7–12%", label: "Hidden fees", sub: "Western Union, banks charge up to 12% in fees + spread" },
            { icon: "🔍", stat: "8+", label: "Channels to check", sub: "Hawala, WU, Remitly, bank wire — no single comparison tool" },
            { icon: "😤", stat: "0", label: "Tracking visibility", sub: "Transfers go missing. No status, no proof, no tracking code" },
          ].map(({ icon, stat, label, sub }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              padding: "28px 24px",
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
              <div style={{ fontSize: 42, fontWeight: 900, color: "#C0392B", fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>{stat}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: "8px 0 8px" }}>{label}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{sub}</div>
            </div>
          ))}
        </div>

        <div className="anim-4" style={{
          marginTop: 28,
          background: "rgba(192,57,43,0.12)",
          border: "1px solid rgba(192,57,43,0.3)",
          borderRadius: 16,
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}>
          <div style={{ fontSize: 32 }}>📉</div>
          <div style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
            A Pakistani worker sending <strong style={{ color: "#fff" }}>$1,000/month</strong> loses up to <strong style={{ color: "#C0392B" }}>$1,440 per year</strong> in unnecessary fees — enough to pay a child's annual school fees.
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide03Market({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "linear-gradient(160deg, #0A1628 0%, #0a1f10 100%)",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#1A9E5A", textTransform: "uppercase", marginBottom: 16 }}>Market Size</div>
        <div className="anim-2" style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 40 }}>
          Massive, underserved,<br />
          <span style={{ background: "linear-gradient(135deg, #1A9E5A, #4CD98B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>and growing fast</span>
        </div>

        <div className="anim-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 28 }}>
          {[
            { value: "$27B", label: "Pakistan remittances 2024", color: "#1A9E5A" },
            { value: "9M+", label: "Overseas Pakistani diaspora", color: "#F5A623" },
            { value: "12%", label: "YoY growth in digital transfers", color: "#4CD98B" },
          ].map(({ value, label, color }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${color}33`,
              borderRadius: 20,
              padding: "28px 24px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 12, lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>

        <div className="anim-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            { label: "SAM — Digital-first senders", value: "$8.2B", sub: "30% already use apps like Remitly, Wise" },
            { label: "SOM — Year 1 target (UK + UAE)", value: "$820M", sub: "Largest Pakistani diaspora corridors" },
          ].map(({ label, value, sub }) => (
            <div key={label} style={{
              background: "rgba(26,158,90,0.08)",
              border: "1px solid rgba(26,158,90,0.2)",
              borderRadius: 16,
              padding: "20px 24px",
            }}>
              <div style={{ fontSize: 12, color: "#1A9E5A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{label}</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#fff", fontFamily: "'DM Mono', monospace" }}>{value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide04PainPoints({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "#0A1628",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5A623", textTransform: "uppercase", marginBottom: 16 }}>User Research</div>
        <div className="anim-2" style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 36 }}>
          What senders actually say
        </div>

        <div className="anim-3" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            {
              quote: "I checked WhatsApp groups, called 3 banks, and still wasn't sure I got the best rate.",
              name: "Tariq, UK",
              role: "Software Engineer · Sends £800/month",
              emoji: "🇬🇧",
            },
            {
              quote: "My family waited 4 days for money they needed urgently. No one could tell me where it was.",
              name: "Sadia, UAE",
              role: "Nurse · Sends AED 2,000/month",
              emoji: "🇦🇪",
            },
            {
              quote: "The fee wasn't shown upfront. The exchange rate was different from what they quoted.",
              name: "Hamid, Saudi Arabia",
              role: "Driver · Sends SAR 1,500/month",
              emoji: "🇸🇦",
            },
          ].map(({ quote, name, role, emoji }) => (
            <div key={name} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "20px 24px",
              display: "flex",
              gap: 20,
              alignItems: "flex-start",
            }}>
              <div style={{ fontSize: 32, flexShrink: 0 }}>{emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.5, marginBottom: 10, fontStyle: "italic" }}>"{quote}"</div>
                <div style={{ fontSize: 13, color: "#F5A623", fontWeight: 700 }}>{name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide05Solution({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "linear-gradient(135deg, #0A1628 0%, #0D2045 100%)",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#4CD98B", textTransform: "uppercase", marginBottom: 16 }}>The Solution</div>
        <div className="anim-2" style={{ fontSize: "clamp(28px, 4.5vw, 54px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 40 }}>
          One app that does it all<br />
          <span style={{ background: "linear-gradient(135deg, #1A9E5A, #4CD98B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>so you never leave money on the table</span>
        </div>

        <div className="anim-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            { icon: "📊", title: "Rate Comparator", desc: "Live rates across 8+ channels — bank, hawala, mobile wallet, and digital — ranked by PKR delivered" },
            { icon: "🔔", title: "Rate Alerts", desc: "WhatsApp & SMS notify when a specific channel hits your target rate" },
            { icon: "📍", title: "Transfer Tracker", desc: "Log and track every remittance with status updates, tracking codes, and delivery confirmations" },
            { icon: "💰", title: "Savings Ledger", desc: "See how much you've saved vs worst-case fees — motivating and visual, updated in real time" },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: "rgba(26,158,90,0.08)",
              border: "1px solid rgba(26,158,90,0.2)",
              borderRadius: 20,
              padding: "24px",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}>
              <div style={{ fontSize: 32, flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="anim-4" style={{
          marginTop: 24,
          background: "rgba(26,158,90,0.12)",
          border: "1px solid rgba(26,158,90,0.3)",
          borderRadius: 16,
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <span style={{ fontSize: 24 }}>🎯</span>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}>
            Works for <strong style={{ color: "#4CD98B" }}>all channels</strong> including informal hawala networks, not just regulated remittance apps
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide06Demo({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "#050e1f",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
      flexDirection: "row",
      gap: 60,
      alignItems: "center",
      padding: "40px 80px",
    }}>
      <div style={{ flex: 1 }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#4CD98B", textTransform: "uppercase", marginBottom: 16 }}>Live App · v1.0</div>
        <div className="anim-2" style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 24 }}>
          Simple.<br />Powerful.<br />
          <span style={{ background: "linear-gradient(135deg, #1A9E5A, #4CD98B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Built for trust.</span>
        </div>

        <div className="anim-3" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { step: "01", label: "Live dashboard — best rate + all stats at a glance" },
            { step: "02", label: "Compare 8+ channels ranked by PKR delivered" },
            { step: "03", label: "Savings calculator — switch & see exact annual gain" },
            { step: "04", label: "Log transfers, track status, notify family on WhatsApp" },
            { step: "05", label: "Channel Guide — fees, limits, how-to for every channel" },
          ].map(({ step, label }) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                background: "rgba(26,158,90,0.15)",
                border: "1px solid rgba(26,158,90,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 800, color: "#1A9E5A", fontFamily: "'DM Mono', monospace",
              }}>{step}</div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        <div className="anim-4" style={{
          marginTop: 24,
          background: "rgba(26,158,90,0.1)",
          border: "1px solid rgba(26,158,90,0.25)",
          borderRadius: 14,
          padding: "14px 20px",
          fontSize: 13,
          color: "rgba(255,255,255,0.6)",
          fontFamily: "'DM Mono', monospace",
        }}>
          🌐 Live: <span style={{ color: "#4CD98B", fontWeight: 700 }}>hawalatrack.app</span>
        </div>
      </div>

      {/* Phone mockup — showing Home Dashboard */}
      <div className="anim-4 float" style={{ flexShrink: 0 }}>
        <div style={{
          width: 240,
          height: 500,
          background: "#0A1628",
          borderRadius: 40,
          border: "2px solid rgba(255,255,255,0.12)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 60px rgba(26,158,90,0.12)",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Status bar */}
          <div style={{ height: 28, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px" }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Mono', monospace" }}>9:41</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>●●●</div>
          </div>
          {/* App header */}
          <div style={{ height: 40, background: "#0D2045", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#C0392B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 900, color: "#fff" }}>H</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#fff" }}>HawalaTrack</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>USD/PKR</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#fff", fontFamily: "'DM Mono', monospace" }}>279.50</div>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1A9E5A" }} />
            </div>
          </div>
          {/* Home hero */}
          <div style={{ padding: "14px 14px 10px", background: "linear-gradient(145deg, #0A1628, #0D2045)" }}>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Good morning 👋</div>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>Your Remittance<br/>Dashboard</div>
            {/* Best rate card */}
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "10px 12px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Best Rate Today</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", fontFamily: "'DM Mono', monospace", lineHeight: 1.2, marginTop: 2 }}>279.50</div>
                  <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>via JazzCash · Live</div>
                </div>
                <div style={{ background: "#C0392B", borderRadius: 8, padding: "5px 10px", fontSize: 9, fontWeight: 700, color: "#fff" }}>Compare →</div>
              </div>
              {/* Mini rate strip */}
              <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
                {[{ label: "USD", val: "279.5" }, { label: "SAR", val: "74.5" }, { label: "AED", val: "76.1" }].map((r) => (
                  <div key={r.label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "3px 6px", textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: 7, color: "rgba(255,255,255,0.35)" }}>{r.label}/PKR</div>
                    <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Mono', monospace" }}>{r.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Stats 2x2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, padding: "8px 12px 6px" }}>
            {[
              { label: "Total Sent", val: "$2,300", color: "#fff" },
              { label: "Saved vs WU", val: "$108.73", color: "#1A9E5A" },
              { label: "In Transit", val: "2", color: "#fff" },
              { label: "Delivered", val: "4", color: "#fff" },
            ].map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "5px 8px" }}>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>{s.label}</div>
                <div style={{ fontSize: 11, fontWeight: 900, color: s.color, fontFamily: "'DM Mono', monospace" }}>{s.val}</div>
              </div>
            ))}
          </div>
          {/* Quick actions */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5, padding: "4px 12px 6px" }}>
            {[
              { label: "Compare", bg: "#0D2045" },
              { label: "Transfer", bg: "#C0392B" },
              { label: "Savings", bg: "#0E6B3A" },
            ].map((a) => (
              <div key={a.label} style={{ background: a.bg, borderRadius: 8, padding: "6px 4px", textAlign: "center" }}>
                <div style={{ fontSize: 8, fontWeight: 700, color: "#fff" }}>{a.label}</div>
              </div>
            ))}
          </div>
          {/* Top channels */}
          <div style={{ padding: "4px 12px 6px" }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4, letterSpacing: "0.08em" }}>Top Channels</div>
            {[
              { name: "JazzCash", fee: "0.7%", color: "#CC0000", init: "J", best: true },
              { name: "Wise", fee: "0.8%", color: "#163300", init: "W", best: false },
              { name: "Easypaisa", fee: "1.3%", color: "#0E7C3A", init: "E", best: false },
            ].map((ch) => (
              <div key={ch.name} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: ch.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{ch.init}</div>
                <div style={{ flex: 1, fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>{ch.name}</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: "#1A9E5A", fontFamily: "'DM Mono', monospace" }}>{ch.fee}</div>
                {ch.best && <div style={{ fontSize: 7, background: "rgba(26,158,90,0.2)", color: "#4CD98B", borderRadius: 3, padding: "1px 4px", fontWeight: 700 }}>BEST</div>}
              </div>
            ))}
          </div>
          {/* Bottom nav — using SVG icons */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "rgba(8,18,36,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            height: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "0 6px",
          }}>
            {[
              { label: "Home", active: true, path: "M3 9.5L8 5l5 4.5V15H10v-3H6v3H3V9.5z" },
              { label: "Compare", active: false, path: "M3 6h10M3 10h10M5 6l-2 4M11 6l2 4" },
              { label: "Savings", active: false, path: "M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm1 7H7V8H5.5l2.5-3 2.5 3H9v2z" },
              { label: "History", active: false, path: "M8 4v4l2.5 2.5M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" },
              { label: "Guide", active: false, path: "M3 4h10v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm4 0v8M3 7h4" },
            ].map(({ label, active, path }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, opacity: active ? 1 : 0.35 }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={active ? "#fff" : "rgba(255,255,255,0.7)"} strokeWidth={active ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d={path} />
                </svg>
                <div style={{ fontSize: 7, color: active ? "#fff" : "rgba(255,255,255,0.5)", fontWeight: active ? 700 : 400 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide07HowItWorks({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "#0A1628",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#4CD98B", textTransform: "uppercase", marginBottom: 16 }}>How It Works</div>
        <div className="anim-2" style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 40 }}>
          Under the hood
        </div>

        <div className="anim-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            {
              icon: "🔄",
              title: "Live Rate Engine",
              items: ["Aggregates 8+ channels", "Updates every 15 minutes", "Stores 30-day history"],
            },
            {
              icon: "📲",
              title: "Alert System",
              items: ["WhatsApp & SMS delivery", "Target rate triggers", "Instant push notifications"],
            },
            {
              icon: "🔒",
              title: "Trust & Safety",
              items: ["No money touches HawalaTrack", "No bank credentials stored", "Full data privacy, GDPR ready"],
            },
          ].map(({ icon, title, items }) => (
            <div key={title} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              padding: "28px 24px",
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 16 }}>{title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1A9E5A", flexShrink: 0 }} />
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="anim-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 20 }}>
          {[
            { label: "Update Frequency", value: "15 min" },
            { label: "Channels Tracked", value: "8+" },
            { label: "History Depth", value: "30 days" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: "rgba(26,158,90,0.08)",
              border: "1px solid rgba(26,158,90,0.2)",
              borderRadius: 14,
              padding: "16px 20px",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 28, fontWeight: 700, color: "#1A9E5A" }}>{value}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide08BusinessModel({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "linear-gradient(160deg, #0A1628 0%, #0a1f10 100%)",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5A623", textTransform: "uppercase", marginBottom: 16 }}>Business Model</div>
        <div className="anim-2" style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 40 }}>
          Three revenue streams,<br />
          <span style={{ background: "linear-gradient(135deg, #F5A623, #FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>all asset-light</span>
        </div>

        <div className="anim-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 28 }}>
          {[
            {
              label: "Freemium SaaS",
              arpu: "$3.99/mo",
              sub: "Pro tier: unlimited alerts, 12-month history, multi-sender profiles",
              icon: "💎",
              color: "#F5A623",
            },
            {
              label: "Channel Referrals",
              arpu: "$2–5/txn",
              sub: "Affiliate CPA from Wise, Remitly, TCS Sentral when user clicks Send",
              icon: "🤝",
              color: "#1A9E5A",
            },
            {
              label: "B2B Data API",
              arpu: "$499/mo",
              sub: "Rate analytics and remittance corridor data to fintechs and banks",
              icon: "📡",
              color: "#4CD98B",
            },
          ].map(({ label, arpu, sub, icon, color }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${color}33`,
              borderRadius: 20,
              padding: "28px 24px",
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{label}</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>{arpu}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{sub}</div>
            </div>
          ))}
        </div>

        <div className="anim-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { label: "Year 1 ARR target", value: "$280K" },
            { label: "Break-even users", value: "5,800" },
            { label: "LTV : CAC ratio", value: "6 : 1" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: "rgba(245,166,35,0.08)",
              border: "1px solid rgba(245,166,35,0.2)",
              borderRadius: 14,
              padding: "16px 20px",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 28, fontWeight: 700, color: "#F5A623" }}>{value}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide09Traction({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "#0A1628",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#4CD98B", textTransform: "uppercase", marginBottom: 16 }}>Traction</div>
        <div className="anim-2" style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 36 }}>
          Early signals are strong
        </div>

        <div className="anim-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 28 }}>
          {[
            { value: "2,400+", label: "Waitlist signups (organic)", color: "#1A9E5A" },
            { value: "340", label: "Beta testers across UK + UAE", color: "#4CD98B" },
            { value: "4.7★", label: "Beta satisfaction score", color: "#F5A623" },
          ].map(({ value, label, color }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${color}33`,
              borderRadius: 20,
              padding: "28px 24px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 900, color, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 12, lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>

        <div className="anim-4" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { label: "WhatsApp communities reached", value: 18, total: 20, suffix: " groups" },
            { label: "Channel partnerships in negotiation", value: 3, total: 5, suffix: " channels" },
            { label: "Beta users sending $500+/month", value: 78, total: 100, suffix: "%" },
          ].map(({ label, value, total, suffix }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "16px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{label}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 700, color: "#1A9E5A" }}>{value}{suffix}</div>
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(value / total) * 100}%`, background: "linear-gradient(90deg, #1A9E5A, #4CD98B)", borderRadius: 999 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide10Competition({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "#0A1628",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#C0392B", textTransform: "uppercase", marginBottom: 16 }}>Competitive Landscape</div>
        <div className="anim-2" style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 36 }}>
          No one does all three
        </div>

        <div className="anim-3" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 600, paddingBottom: 4, paddingLeft: 16 }}>Service</th>
                {["Compare Rates", "Alert on Rate", "Track Transfer", "Hawala Support", "Pakistan-First"].map((col) => (
                  <th key={col} style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 600, paddingBottom: 4, textAlign: "center", whiteSpace: "nowrap" }}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "HawalaTrack", values: [true, true, true, true, true], highlight: true },
                { name: "Wise", values: [false, false, false, false, false], highlight: false },
                { name: "Remitly", values: [false, false, true, false, false], highlight: false },
                { name: "Google Currency", values: [true, false, false, false, false], highlight: false },
                { name: "CompareRemit", values: [true, false, false, false, false], highlight: false },
              ].map(({ name, values, highlight }) => (
                <tr key={name}>
                  <td style={{
                    padding: "14px 16px",
                    fontWeight: highlight ? 800 : 500,
                    color: highlight ? "#4CD98B" : "rgba(255,255,255,0.7)",
                    fontSize: 14,
                    background: highlight ? "rgba(26,158,90,0.1)" : "rgba(255,255,255,0.03)",
                    borderRadius: "12px 0 0 12px",
                    border: highlight ? "1px solid rgba(26,158,90,0.3)" : "1px solid rgba(255,255,255,0.06)",
                    borderRight: "none",
                  }}>{name}</td>
                  {values.map((val, i) => (
                    <td key={i} style={{
                      textAlign: "center",
                      padding: "14px 8px",
                      background: highlight ? "rgba(26,158,90,0.1)" : "rgba(255,255,255,0.03)",
                      borderTop: highlight ? "1px solid rgba(26,158,90,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      borderBottom: highlight ? "1px solid rgba(26,158,90,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      borderLeft: "none", borderRight: "none",
                      ...(i === values.length - 1 ? { borderRadius: "0 12px 12px 0", borderRight: highlight ? "1px solid rgba(26,158,90,0.3)" : "1px solid rgba(255,255,255,0.06)" } : {}),
                    }}>
                      <span style={{ fontSize: 18 }}>{val ? "✅" : "❌"}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="anim-4" style={{
          marginTop: 24,
          background: "rgba(26,158,90,0.1)",
          border: "1px solid rgba(26,158,90,0.25)",
          borderRadius: 16,
          padding: "16px 24px",
          fontSize: 15,
          color: "rgba(255,255,255,0.7)",
        }}>
          🎯 <strong style={{ color: "#4CD98B" }}>Moat:</strong> Hawala network data + Pakistan corridor expertise that global apps ignore entirely
        </div>
      </div>
    </div>
  );
}

function Slide11Team({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "linear-gradient(135deg, #0A1628 0%, #0D2045 100%)",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
    }}>
      <div style={{ maxWidth: 920, width: "100%" }}>
        <div className="anim-1" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5A623", textTransform: "uppercase", marginBottom: 16 }}>Team & Ask</div>
        <div className="anim-2" style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 36 }}>
          Lived experience + fintech depth
        </div>

        <div className="anim-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 28 }}>
          {[
            { name: "Ahmad Raza", role: "CEO & Product", bg: "#1A9E5A", initials: "AR", detail: "7 yrs remittance ops at Moneygram. Sent money home every month for 12 years" },
            { name: "Sana Mirza", role: "CTO", bg: "#C0392B", initials: "SM", detail: "Ex-Wise engineer. Built rate aggregation at scale for APAC corridors" },
            { name: "Bilal Qureshi", role: "GTM & Community", bg: "#F5A623", initials: "BQ", detail: "Built 40K+ member Pakistani diaspora WhatsApp network in UK" },
          ].map(({ name, role, bg, initials, detail }) => (
            <div key={name} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              padding: "24px",
              textAlign: "center",
            }}>
              <div style={{
                width: 60, height: 60, borderRadius: 20, background: bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, fontWeight: 900, color: "#fff",
                margin: "0 auto 16px",
                boxShadow: `0 8px 24px ${bg}44`,
              }}>{initials}</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{name}</div>
              <div style={{ fontSize: 12, color: bg, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>{role}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{detail}</div>
            </div>
          ))}
        </div>

        <div className="anim-4" style={{
          background: "rgba(245,166,35,0.1)",
          border: "1px solid rgba(245,166,35,0.3)",
          borderRadius: 20,
          padding: "24px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: 13, color: "#F5A623", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Raising</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#fff", fontFamily: "'DM Mono', monospace" }}>$500K</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>Pre-seed · 18% SAFE</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { pct: "40%", label: "Engineering" },
              { pct: "30%", label: "Growth + Community" },
              { pct: "20%", label: "Ops + Compliance" },
              { pct: "10%", label: "Buffer" },
            ].map(({ pct, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 700, color: "#F5A623", width: 40, textAlign: "right" }}>{pct}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide12Close({ active }: SlideProps) {
  return (
    <div className="slide" style={{
      background: "linear-gradient(135deg, #0A1628 0%, #0D2045 50%, #0A1628 100%)",
      opacity: active ? 1 : 0, pointerEvents: active ? "all" : "none", transition: "opacity 0.6s ease",
      textAlign: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
        <div className="anim-1" style={{ fontSize: 72, marginBottom: 24 }}>🇵🇰</div>
        <div className="anim-2" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 20 }}>
          Every rupee counts.<br />
          <span style={{ background: "linear-gradient(135deg, #1A9E5A, #4CD98B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Help us keep more.</span>
        </div>

        <div className="anim-3" style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 48, lineHeight: 1.6 }}>
          9 million Pakistani families are waiting for the app<br />that makes sending money home simple, transparent, and fair.
        </div>

        <div className="anim-4" style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{
            background: "linear-gradient(135deg, #1A9E5A, #0E6B3A)",
            borderRadius: 20,
            padding: "20px 40px",
            boxShadow: "0 8px 40px rgba(26,158,90,0.4)",
          }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Email</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", fontFamily: "'DM Mono', monospace" }}>invest@hawalatrack.app</div>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 20,
            padding: "20px 40px",
            backdropFilter: "blur(8px)",
          }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Website</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", fontFamily: "'DM Mono', monospace" }}>hawalatrack.app</div>
          </div>
        </div>

        <div className="anim-5" style={{ marginTop: 48, fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace" }}>
          $500K pre-seed · 18% SAFE · Closing Q2 2025
        </div>
      </div>
    </div>
  );
}

const SLIDES = [
  { component: Slide01Cover, title: "Cover" },
  { component: Slide02Problem, title: "Problem" },
  { component: Slide03Market, title: "Market" },
  { component: Slide04PainPoints, title: "User Research" },
  { component: Slide05Solution, title: "Solution" },
  { component: Slide06Demo, title: "Demo" },
  { component: Slide07HowItWorks, title: "How It Works" },
  { component: Slide08BusinessModel, title: "Business Model" },
  { component: Slide09Traction, title: "Traction" },
  { component: Slide10Competition, title: "Competition" },
  { component: Slide11Team, title: "Team & Ask" },
  { component: Slide12Close, title: "Close" },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(Math.max(0, Math.min(TOTAL_SLIDES - 1, idx)));
    setElapsed(0);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setElapsed((e) => {
        if (e >= SLIDE_DURATION) {
          setCurrent((c) => {
            const next = c + 1;
            if (next >= TOTAL_SLIDES) return c;
            return next;
          });
          return 0;
        }
        return e + 0.1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [paused]);

  // Keyboard nav
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
      if (e.key === "Escape") setPaused((p) => !p);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, goTo]);

  const progress = (elapsed / SLIDE_DURATION) * 100;

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000", position: "relative", overflow: "hidden" }}>
      {/* Slides */}
      {SLIDES.map(({ component: SlideComp }, i) => (
        <SlideComp key={i} active={i === current} />
      ))}

      {/* Top progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.08)", zIndex: 100 }}>
        {/* Segment marks */}
        {Array.from({ length: TOTAL_SLIDES - 1 }, (_, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0,
            left: `${((i + 1) / TOTAL_SLIDES) * 100}%`,
            width: 2, background: "rgba(0,0,0,0.5)",
          }} />
        ))}
        {/* Overall fill */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          width: `${((current / TOTAL_SLIDES) + (progress / 100) / TOTAL_SLIDES) * 100}%`,
          background: "linear-gradient(90deg, #1A9E5A, #4CD98B)",
          transition: "width 0.1s linear",
        }} />
      </div>

      {/* Bottom HUD */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 24px",
        background: "rgba(5,14,31,0.9)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: "linear-gradient(135deg, #C0392B, #E8401C)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="15" height="15" viewBox="0 0 34 34" fill="none">
              <path d="M17 4L28 10V22L17 28L6 22V10L17 4Z" stroke="white" strokeWidth="3" fill="none"/>
              <path d="M17 9L23 13V19L17 23L11 19V13L17 9Z" fill="white" fillOpacity="0.9"/>
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 800, color: "#fff" }}>HawalaTrack</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace" }}>Investor Deck · 2025</span>
        </div>

        {/* Slide counter & nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Dot nav */}
          <div style={{ display: "flex", gap: 5 }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  borderRadius: 999,
                  background: i === current ? "#1A9E5A" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Mono', monospace" }}>
            {current + 1} / {TOTAL_SLIDES}
          </span>

          {/* Pause */}
          <button
            onClick={() => setPaused((p) => !p)}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8,
              padding: "5px 12px",
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              cursor: "pointer",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {paused ? "▶ Resume" : "⏸ Pause"}
          </button>

          {/* Arrow buttons */}
          <div style={{ display: "flex", gap: 6 }}>
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              style={{
                width: 32, height: 32,
                borderRadius: 8,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: current === 0 ? "rgba(255,255,255,0.2)" : "#fff",
                fontSize: 14, cursor: current === 0 ? "not-allowed" : "pointer",
              }}
            >←</button>
            <button
              onClick={() => goTo(current + 1)}
              disabled={current === TOTAL_SLIDES - 1}
              style={{
                width: 32, height: 32,
                borderRadius: 8,
                background: current === TOTAL_SLIDES - 1 ? "rgba(255,255,255,0.04)" : "rgba(26,158,90,0.3)",
                border: "1px solid rgba(26,158,90,0.3)",
                color: current === TOTAL_SLIDES - 1 ? "rgba(255,255,255,0.2)" : "#4CD98B",
                fontSize: 14, cursor: current === TOTAL_SLIDES - 1 ? "not-allowed" : "pointer",
              }}
            >→</button>
          </div>
        </div>
      </div>

      {/* Slide label (top right) */}
      <div style={{
        position: "fixed", top: 12, right: 20, zIndex: 99,
        fontSize: 11,
        color: "rgba(255,255,255,0.3)",
        fontFamily: "'DM Mono', monospace",
        fontWeight: 500,
      }}>
        {SLIDES[current].title}
      </div>
    </div>
  );
}
