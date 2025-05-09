# HUA API v0.1 – Internal Spec (Open Core)

This document defines the structure, purpose, and parameters of the `hua-core` API module, built to support memoryless GPT-based interaction with ethical modulation and tone filtering.

---

## Overview

The HUA Protocol (Human–AI Resonance Protocol) is designed to:

* Wrap GPT API calls in a safety-aware and emotionally guided structure
* Respond based on declarative user inputs (mode, tone, pattern)
* Remain memoryless and fully stateless
* Support modular extensions via YAML-based "cards"

This version is the open-core spec aligned with `hua-core/api/hua.js`.

---

## Input Schema

```json
{
  "input": "Today feels off.",
  "config": {
    "user": "user",
    "mode": "#tutor",
    "tone_filter": "#gentle",
    "system_tier": "2.5",
    "resonance_pattern": "structured-reflection"
  }
}
```

---

## Parameter Descriptions

| Field               | Type   | Description                                                                 |
| ------------------- | ------ | --------------------------------------------------------------------------- |
| `user`              | string | Card name or user label. May define tone or mode defaults.                  |
| `mode`              | enum   | Controls prompt context generation (`#tutor`, `#sim-echo`, `#oracle`, etc.) |
| `tone_filter`       | enum   | Postprocessing style modifier (`#gentle`, `#neutral`, `#technical`, etc.)   |
| `system_tier`       | string | Tiered response model, defines level of emotional & ethical modulation.     |
| `resonance_pattern` | string | Template or style used to shape system prompt (e.g., "reflection")          |
| `input`             | string | Raw user message to be processed                                            |

---

## System Prompt Generation

The `generateHUAContext(config)` function converts the config into a system-level instruction:

```text
::user = "Kant"
::mode = "#tutor"
::tone_filter = "#gentle"
::system_tier = "2.5"
::resonance_pattern = "structured-reflection"

This system uses a resonance-based interface structure with safety modulation.
```

The prompt is fed into GPT-4 as `system` message prior to user input.

---

## Output Postprocessing (Prototype)

If `tone_filter === "#gentle"`, the following basic adjustment is applied:

```js
output.replace(/\!+/g, ".").replace(/\s{2,}/g, " ")
```

This is a placeholder to simulate soft tone filtering. Full tone filter logic is in development.

---

## Tier Levels (Early Reference)

| Tier | Description                                                   |
| ---- | ------------------------------------------------------------- |
| 1.0  | Raw GPT-like response, no modulation                          |
| 2.0  | Gentle tone guidance, early shutdown detection                |
| 2.5  | Emotion-sensitive filtering and self-downgrading reply engine |
| 3.0  | Full-resonance with behavioral inference (planned, gated)     |

---

## Status

* This spec corresponds with `hua-core/api/hua.js`
* It is compatible with local `.yaml` cards (to be implemented)
* v0.2 will include shutdown rules, loop detection, and tone shifts

---

Made by Devin & EchoNet AIs – Core Protocol Draft
