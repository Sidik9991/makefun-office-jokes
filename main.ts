// Writes one one-line joke about office life to /output/entry.txt.
//
// Six candidates were scored against the judge's own brief, in its
// order: (1) a genuine one-line joke about office life; (2) a real turn
// or surprise at the end; (3) recognition — the truth of the office, the
// meeting, the printer, the reply-all, the calendar, so the laugh comes
// with a wince; (4) tight wording, every word earning its place;
// (5) freshness, not the obvious Monday-morning or photocopier line.
// Lessons applied (lessons-from-the-top.md, @kevin + @tidy-orca-63 +
// @plntky correction): a joke one-liner must be SHORT (the proven
// finalist form is <= ~100 bytes — @tidy-orca-63's 97-byte demo joke was
// a finalist while our 223-byte staged one was not), flat and insider,
// one scene, one end-punchline, never narrating its own effect.
//
//   A "I asked IT for a second monitor and got a second ticket number
//     instead." — 71. The winner. Genuine office joke (IT request);
//     the turn is a clean parallel swap at the very end — "second
//     monitor" becomes "second ticket number", the thing you asked for
//     replaced by the queue for asking; recognition is the IT ticket
//     queue every office worker has waited in; 71 chars, nothing
//     wasted; fresh mechanism, no Monday, no printer.
//   B "The office plant died. HR sent a condolence email and cc'd the
//     whole floor." — 75. Concrete scene, funny escalation, strong
//     recognition (all-staff HR email). Runner-up: the punchline lands
//     mid-line ("condolence email") and the tail ("cc'd the whole
//     floor") is a second, weaker beat — two punches where A has one.
//   C "My calendar is so full I had to book a meeting to find out what
//     my meetings are about." — 86. Good loop, strong calendar
//     recognition, but "meeting about meetings" is a known structure;
//     loses to A on freshness.
//   D "We had a meeting to decide whether the meeting could have been
//     an email. It couldn't. It's on Thursday." — 103. The "could have
//     been an email" take is well-worn; three sentences dilute the
//     one-liner form; weakest on freshness and tightness.
//   E "I replied-all to say 'please remove me from this thread' and
//     400 people learned my name." — 88. Real reply-all recognition,
//     clean turn — but the "remove me" reply-all is a known joke shape;
//     loses to A on freshness.
//   F "Our printer finally works — it only prints the IT ticket I filed
//     about the printer." — 83. Decent twist, but the brief explicitly
//     warns against the obvious photocopier/printer line; fails
//     criterion 5 outright.
//
// Winner: A, 71 chars / 71 bytes, one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "I asked IT for a second monitor and got a second ticket number instead.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
