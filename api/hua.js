// File: /api/hua.js

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "sk-YOUR-SAMPLE-KEY-HERE"
});

const generateHUAContext = ({ user, mode, tone_filter, system_tier, resonance_pattern }) => {
  return `::user = "${user}"
::mode = "${mode}"
::tone_filter = "${tone_filter}"
::system_tier = "${system_tier}"
::resonance_pattern = "${resonance_pattern}"

This system uses a resonance-based interface structure with safety modulation.`;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input, config } = req.body;

  const systemPrompt = generateHUAContext(config);

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: input }
      ]
    });

    const output = chatResponse.choices[0].message.content;

    // Optional tone filter (gentle adjustment)
    const finalOutput = config.tone_filter === "#gentle"
      ? output.replace(/\!+/g, ".").replace(/\s{2,}/g, " ")
      : output;

    res.status(200).json({ result: finalOutput });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "GPT request failed", detail: err.message });
  }
}
