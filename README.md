# ◆ SLICER — Sample Slicer & Sequencer

A powerful, browser-based sample slicer and 16-step sequencer with real-time waveform editing, MIDI support, and advanced sequencing features.

**Status**: Open Source | **License**: MIT  
**Created**: 2024 | **Design & Development**: David Marques with Anthropic Claude (Vibe Coding)

---

## 🎯 Overview

SLICER is a professional-grade sample manipulation tool designed for musicians, producers, and sound designers. It combines intuitive waveform editing with a flexible 16-step sequencer, enabling creative sample slicing, triggering, and sequencing workflows.

### Key Features

- **Sample Slicing** — Click-based slice creation with drag-to-edit boundaries
- **Transient Detection** — Automatic beat/transient detection with sensitivity control
- **Dual Playback Modes** — SHOT (one-shot) and LOOP (sustain while key pressed)
- **Per-Slice Control** — Independent pitch, volume, pan, and fade in/out
- **16-Step Sequencer** — Roland TR-style grid with flame repeats and swing
- **Flame Repeats** — 4x 16th-note repeats for dense, glitchy textures
- **Swing Control** — Volca Sample-style swing for humanized timing
- **Real-Time Zoom** — Horizontal stretching with automatic scroll for detailed editing
- **Dynamic Waveform** — Visual amplitude changes with master volume
- **Multi-Output Export** — Individual slices or complete sequencer loop as WAV
- **Project Save/Load** — ZIP-based project files with audio + metadata
- **MIDI Support** — Full MIDI note on/off with pitch transposition
- **Keyboard Control** — 16 assignable keys (Q-P, A-H) for triggering
- **Tab Interface** — Seamless switching between Editor and Sequencer views

---

## 🚀 Getting Started

### Online (No Installation)

1. Open `sample-slicer.html` in any modern web browser
2. Load an audio file (MP3, WAV, OGG, etc.)
3. Start creating slices!

### Requirements

- **Browser**: Chrome, Firefox, Safari, Edge (modern versions)
- **Audio**: Web Audio API support
- **Optional**: MIDI controller for hardware triggering

---

## 📖 User Guide

### Editor Tab

#### Loading Audio
- Click **"+ Load Sample"** or drag-and-drop an audio file
- Supported formats: MP3, WAV, OGG, FLAC, and more (native browser support)
- File info displays duration and sample rate

#### Creating Slices

**Manual Creation:**
- Click on the waveform to create a slice at that position
- Drag the **left edge** (start) or **right edge** (end) to adjust boundaries
- Ctrl/Cmd + Click to delete a slice

**Automatic Detection:**
- Click **"Auto Detect"** to find transients automatically
- Adjust **Transient Sensitivity** (0-100%) to refine detection
- Higher sensitivity = more slices, lower = fewer, larger slices

#### Editing Slices

Each slice has independent controls:

| Parameter | Range | Effect |
|-----------|-------|--------|
| **Pitch** | 0.5x - 2.0x | Transposition and time-stretch |
| **Volume** | 0% - 100% | Per-slice amplitude |
| **Pan** | -100 to +100 | Stereo positioning |
| **Start** | 0 - duration | Slice start point (ms) |
| **End** | 0 - duration | Slice end point (ms) |
| **Fade In** | 0-100ms | Attack envelope |
| **Fade Out** | 0-200ms | Release envelope |

#### Playback Modes

**SHOT Mode:**
- Triggers one complete playback of the slice
- Press key again = immediate retrigger (perfect for fast rhythms)
- Visual feedback shows while playing

**LOOP Mode:**
- Triggers slice to loop continuously
- Release key/MIDI note to stop
- Ideal for sustained textures and pads

#### Waveform Controls

- **Zoom**: 1x - 10x horizontal stretch
  - 1x = full sample view
  - 10x = detailed sample editing
- **Scroll**: Horizontal scrollbar when zoomed in
- **Volume**: Master output level (0-100%)
  - Waveform height changes visually with volume for feedback

---

### Sequencer Tab

#### 16-Step Sequencer

Roland TR-style sequencer with 16 steps per pattern.

**Step States (Click to cycle):**

1. **Empty** (dark gray) — No sound
2. **Trigger** (bright green) — Play slice once
3. **Flame** (magenta) — Play 4x in 16th notes (micro-repeats)
4. Back to **Empty**

Each slice has its own row with independent triggering.

#### Sequencer Controls

- **BPM**: 40 - 300 beats per minute
  - Defines step timing and flame repeat speed
- **Swing**: 0-100%
  - Adds timing variation to even steps
  - 0% = rigid grid
  - 100% = maximum groove/humanization
- **Play**: Start sequencer playback
- **Stop**: Stop and reset to step 1
- **EXP**: Export complete 16-step loop as WAV

#### Flame Repeats

When a step is set to **FLAME** (magenta):
- The slice triggers 4 times in rapid succession (16th notes)
- Perfect for glitchy, broken beat, and IDM textures
- Works with all slice parameters (pitch, volume, pan)

#### Swing

Adjusts timing of even-numbered steps:
- Creates "groove" and human feel
- Similar to Volca Sample or Elektron devices
- 0% = metronomic precision
- 50% = subtle swing (DJ-style)
- 100% = extreme swing (dub/reggae feel)

---

## 🎛️ Keyboard & MIDI

### Keyboard Control

Press these keys to trigger slices (Editor or Sequencer):

```
Q  W  E  R  T  Y  U  I  O  P
A  S  D  F  G  H
```

- Each key maps to a slice in order
- SHOT mode: Single press = one playback
- LOOP mode: Hold key = continuous loop, release to stop
- Retrigger immediately for rhythmic effects

### MIDI Support

Connect any MIDI controller:
- **Note On** (velocity > 0) = Start playback
- **Note Off** (velocity = 0) = Stop (LOOP mode only)
- **MIDI Note Mapping**: 
  - C4 (MIDI 60) = Slice 0 (Q key)
  - C#4 (MIDI 61) = Slice 1 (W key)
  - ... and so on
- **Pitch Transposition**: Automatically applied based on MIDI note

Status indicator shows "MIDI: Connected" when device is detected.

---

## 💾 Project Management

### Save Project

Click **"Save Project"** to download a ZIP file containing:

```
project.zip
├── audio.mp3 (or .wav, .ogg)
├── project.json
```

**project.json** includes:
- All slice definitions (start, end, pitch, volume, pan, mode, fade)
- Sequencer pattern (all 16 steps for all slices)
- BPM and swing settings
- Audio filename and metadata

### Load Project

Click **"Load Project"** and select a previously saved ZIP file:
- Audio is automatically decoded
- All slices, sequencer patterns, and settings are restored
- Continue where you left off

### Example Project

A complete example project is included: **`example-project.zip`**

**To test:**
1. Download `example-project.zip` from the repository root
2. Open SLICER in your browser
3. Click "Load Project"
4. Select `example-project.zip`
5. Explore the pre-configured slices and sequencer pattern

---

## 📤 Export

### Export Individual Slices

In the **Slices** panel, click **"Export"** on any slice to download it as a WAV file:
```
original_filename_slice_0.wav
original_filename_slice_1.wav
...
```

### Export All Slices

Click **"Export WAV"** in the header to batch-download all slices.

### Export Sequencer Loop

In the **Sequencer** tab, click **"EXP"** to render and download the complete 16-step sequencer pattern as a single WAV file:
```
original_filename_sequencer_loop.wav
```

This includes:
- All triggered slices in step order
- Flame repeats (4x notes where triggered)
- Applied pitch/volume/pan for each slice
- Correct BPM timing
- Perfect for importing into DAWs

---

## 🎨 Interface Design

### Color Scheme (CGA-inspired)

- **Editor Tab**: Cyan (#00aaaa → #00ffff)
- **Sequencer Tab**: Magenta (#aa00aa → #ff00ff)
- **Accent**: Neon green (#00ff88) — primary UI highlights
- **Dark**: Pure black (#0a0a0a) — minimal contrast for focus

### Typography

- **Font**: JetBrains Mono (monospace, technical aesthetic)
- **Layout**: Brutalist grid-based design
- **Responsiveness**: Adapts to window resize

---

## 🛠️ Technical Stack

- **Language**: Vanilla JavaScript (ES6+)
- **Audio**: Web Audio API
- **UI**: HTML5 Canvas, CSS Grid
- **Libraries**:
  - [JSZip](https://stuk.github.io/jszip/) — Project save/load (ZIP compression)
- **MIDI**: Web MIDI API (when available)

### Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Web Audio API | ✅ | ✅ | ✅ | ✅ |
| Web MIDI API | ✅ | ⚠️ | ❌ | ✅ |
| Canvas | ✅ | ✅ | ✅ | ✅ |
| Offline Context | ✅ | ✅ | ✅ | ✅ |

⚠️ Firefox: MIDI may require manual enabling  
❌ Safari: MIDI not supported (keyboard still works)

---

## 🎓 Workflow Examples

### Drum Breaking

1. Load a drum loop
2. **Auto Detect** to find kick, snare, hi-hat hits
3. Each drum element becomes a slice
4. Set **SHOT** mode for fast retriggers
5. Use **Flame** for stuttering effects
6. Sequencer: Create polyrhythmic patterns with different slices
7. Export loop for layering in your DAW

### Granular Synthesis

1. Load any sound (vocal, ambient, field recording)
2. Create many small slices (use high sensitivity)
3. Set **LOOP** mode
4. Reduce **Fade In/Out** for smooth granular transitions
5. Pitch each grain differently
6. Sequencer: Create glitchy textures with flame repeats
7. Add **Swing** for evolving, non-repetitive motion

### Melodic Sampler

1. Load a melodic phrase (bassline, vocal melody)
2. Slice at key intervals (notes, words)
3. Set different **Pitch** for each slice (C, D, E, F, G, etc.)
4. Assign to keyboard
5. Play melodies in real-time
6. Use MIDI controller for expressive control

### Breakcore Production

1. Load breakbeat
2. **Auto Detect** to fragment into many micro-slices
3. Add heavy **Flame** on most sequencer steps
4. Maximize **Swing** (80-100%)
5. Lower **Fade In/Out** for sharp attacks
6. Randomize slice pitch offsets (0.8x - 1.3x)
7. Export and layer with synths

---

## 📝 Tips & Tricks

- **Freeze Transient Detection**: Use sensitivity slider for musical vs. percussive content
- **Crossfade Between Slices**: Use **Fade In/Out** to smooth transitions
- **Polyrhythms**: Different BPM templates in sequencer pattern
- **Time-Stretching**: Pitch down without changing slice length (reverse is pitch up)
- **Retriggering**: SHOT mode retrigger for fast rhythmic effects
- **Humanize**: Apply swing progressively (10-30%) for natural timing
- **Stereo Width**: Use PAN on alternating slices for stereo chorus effect
- **Master Volume**: Adjust before exporting for headroom

---

## 🐛 Known Limitations

- **Audio Length**: Limited by available RAM (typically 10+ minutes depending on browser)
- **Offline Export**: Uses OfflineAudioContext (may be slow for long loops on low-end devices)
- **MIDI**: Not available in Safari; keyboard fallback always works
- **Format Support**: Depends on browser's audio codec support
- **Grid Size**: Sequencer is fixed at 16 steps (common standard)

---

## 🤝 Credits

**Design & Development**: David Marques  
**Built with**: Anthropic Claude (Vibe Coding)  
**Open Source**: MIT License

This tool was created through collaborative prompt engineering and iterative refinement using Claude's code generation and design capabilities. All suggestions welcome via GitHub issues!

---

## 📄 License

MIT License — Free to use, modify, and distribute.

See LICENSE file for details.

---

## 🔗 Links

- **GitHub**: [https://github.com/...](https://github.com/)
- **Web Version**: Open `sample-slicer.html` in any browser
- **Example Project**: Download `example-project.zip` to get started

---

## 🎵 Happy Slicing!

Whether you're building breakbeats, creating granular textures, or exploring sound design, SLICER gives you the tools to manipulate samples with precision and creativity.

**Questions?** Create an issue or reach out to the author.

---

*Last Updated: January 2025*  
*Version: 1.0 Release*
