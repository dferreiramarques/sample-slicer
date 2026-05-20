# ◆ SLICER — Sample Slicer & Sequencer

A powerful, browser-based sample slicer and 16-step sequencer with real-time waveform editing, MIDI support, integrated effects chain, and advanced sequencing features.

**Status**: Production Ready | **Version**: 2.0 | **License**: MIT  
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
- **Swing Control** — Volka Sample-style swing for humanized timing
- **Real-Time Zoom** — Horizontal stretching with automatic scroll for detailed editing
- **Dynamic Waveform** — Visual amplitude changes with master volume
- **Effects Chain** — 5 integrated processors (Compressor, Overdrive, Decimator, Reverb) with real-time processing
- **Multi-Output Export** — Individual slices or complete sequencer loop as WAV
- **Project Save/Load** — ZIP-based project files with audio + metadata + effects settings
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

## 🎛️ Effects Chain (V2)

SLICER V2 inclui uma **effects chain profissional** com 5 processadores integrados aplicados em tempo real.

### Effects Overview

**Chain Order**: Compressor → Overdrive → Decimator → Reverb  
**Master Control**: Bypass All (desativa toda a chain)

#### **1. Compressor**
- **Ratio**: 1:1 - 8:1 (soft-knee compression)
- **Mix**: 0-100% (wet/dry blend)
- Controla dinâmica com suavidade
- Perfeito para equilibrar slices com volumes inconsistentes

#### **2. Overdrive** (Saturação)
- **Drive**: 0-100% (quantidade de distorção)
- **Mix**: 0-100% (wet/dry blend)
- Soft saturation com tanh waveshaping (natural, não áspero)
- Ideal para warmth, grit, e efeitos sónicos

#### **3. Decimator** (Bitrate Reduction)
- **Bits**: 2bit - 16bit (qualidade descendente)
- **Mix**: 0-100% (wet/dry blend)
- Quantização de amplitude em tempo real
- Perfeito para lo-fi, glitch, efeitos 8-bit, e IDM

#### **4. Reverb** (Espaço)
- **Mode**: 
  - **Plate**: Reverb curto (40ms), metal-like, brilhante
  - **Spring**: Reverb médio (60ms), vintage, warm
- **Mix**: 0-100% (wet/dry blend)
- Multi-tap reverb com decay natural

#### **5. Bypass All**
- Checkbox master para desativar toda a chain
- Útil para A/B testing direto vs. efeitos
- UI feedback visual (opacidade reduzida)

### Effects Workflow

**Real-time Processing**:
- Efeitos são aplicados ao vivo durante playback (teclado e sequencer)
- Ajusta sliders enquanto está a tocar para feedback instantâneo
- Efeitos aplicados automaticamente a cada slice

**Per-Slice Processing**:
- Cada slice é processada individualmente com a effects chain
- Efeitos globais = aplicados a todas as slices
- Não há efeitos per-slice (apenas globais)

**Export with Effects**:
- Ao exportar sequencer loop, efeitos são incluídos
- Ao exportar slices individuais, efeitos são aplicados
- WAV final contém todo o processamento

### Effects Persistence

**Save/Load Project**:
- Todas as settings dos efeitos são gravadas no ZIP
- Ao carregar um projeto, efeitos são restaurados exatamente como estavam
- UI atualiza automaticamente com os valores salvos

**Project JSON Structure**:
```json
{
  "effects": {
    "compressor": { "ratio": 4.5, "mix": 75 },
    "overdrive": { "drive": 50, "mix": 60 },
    "decimator": { "bits": 8, "mix": 40 },
    "reverb": { "mode": "plate", "mix": 35 },
    "bypass": false
  }
}
```

### Tips & Tricks

- **Compressor First**: Estabiliza dinâmica antes de outros efeitos
- **Decimator Subtly**: 0.5x-1x mix para texture, não destruction
- **Reverb Mixing**: 20-40% para natural, 60%+ para cinematic
- **A/B Testing**: Use bypass para comparar direto vs. efeitos
- **Layering**: Combine overdrive + decimator para bit-crushing único
- **Grain Texture**: Decimator + Reverb para granular-like effects

---

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
- **Audio**: Web Audio API with OfflineAudioContext for effects processing
- **UI**: HTML5 Canvas, CSS Grid, responsive design
- **Libraries**:
  - [JSZip](https://stuk.github.io/jszip/) — Project save/load (ZIP compression)
- **MIDI**: Web MIDI API (when available)
- **Effects Processing**: Real-time DSP (Compressor, Saturator, Decimator, Reverb)

### Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Web Audio API | ✅ | ✅ | ✅ | ✅ |
| Effects Chain | ✅ | ✅ | ✅ | ✅ |
| Web MIDI API | ✅ | ⚠️ | ❌ | ✅ |
| Canvas | ✅ | ✅ | ✅ | ✅ |
| Offline Context | ✅ | ✅ | ✅ | ✅ |
| ZIP Save/Load | ✅ | ✅ | ✅ | ✅ |

⚠️ Firefox: MIDI may require manual enabling  
❌ Safari: MIDI not supported (keyboard still works)

---

## 🎓 Workflow Examples

### Lo-Fi Sampling

1. Load a drum break or vinyl recording
2. **Auto Detect** to find hits
3. Set **Decimator** to 6-8 bits (40-80% mix) for vintage crunch
4. Add **Reverb** (Plate, 20%) for space
5. Overdrive lightly (10-20%) for warmth
6. Sequencer: Create lo-fi pattern with swing (30-40%)
7. Export loop with effects baked in

### Glitch/IDm Production

1. Load melodic or textural sample
2. Create many micro-slices (high transient sensitivity)
3. **Decimator** to 2-4 bits with high mix (70-100%) for extreme crunch
4. **Reverb** (Spring, 50%) for wet, disorienting space
5. Sequencer: Heavy use of **Flame** on multiple steps
6. Add swing for unpredictability
7. Export and layer in DAW with other synths

### Breakbeat Manipulation

1. Load breakbeat
2. **Auto Detect** with medium sensitivity
3. **Compressor** (4:1 ratio, 80% mix) to glue everything
4. **Overdrive** (30% drive, 40% mix) for cohesion
5. **Reverb** (Plate, 15%) for subtle space
6. Sequencer: Stutter using **Flame** on kick hits
7. Fine-tune swing for pocket feel
8. Export and use as drum pattern in arrangement

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
- **Effects Performance**: Heavy effects chains (high mix values) may impact performance on low-end devices
- **Offline Export**: OfflineAudioContext processing can be slow for long loops on older machines
- **MIDI**: Not available in Safari; keyboard fallback always works
- **Format Support**: Depends on browser's audio codec support
- **Grid Size**: Sequencer is fixed at 16 steps (industry standard)
- **Per-Slice Effects**: Effects are global; no per-slice effect chains (by design for simplicity)

## 🚀 Future Enhancements

Potential features for future versions:
- Pattern chaining (multi-bar sequences)
- Advanced time-stretching algorithms
- Per-slice effects
- MIDI learn for effects parameters
- Undo/redo
- Cloud project sync
- Touch/gestures support

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

*Last Updated: May 2026*  
*Version: 2.0 (Effects Chain Release)*
