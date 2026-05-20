# Creating an Example Project ZIP

## Quick Start

To create and test the `example-project.zip` file:

### Option 1: Browser-Based (Easiest)

1. Open `sample-slicer.html` in your browser
2. Load any audio file (MP3, WAV, etc.)
3. Create 4 slices with these settings:

   **Slice 0:**
   - Start: 0.0s, End: 0.5s
   - Pitch: 100%, Volume: 80%, Pan: 0
   - Mode: SHOT, Fade In: 1ms, Fade Out: 50ms

   **Slice 1:**
   - Start: 0.5s, End: 1.0s
   - Pitch: 100%, Volume: 80%, Pan: +20%
   - Mode: SHOT, Fade In: 1ms, Fade Out: 50ms

   **Slice 2:**
   - Start: 1.0s, End: 1.5s
   - Pitch: 90%, Volume: 70%, Pan: -20%
   - Mode: LOOP, Fade In: 5ms, Fade Out: 75ms

   **Slice 3:**
   - Start: 1.5s, End: 2.0s
   - Pitch: 110%, Volume: 75%, Pan: 0
   - Mode: SHOT, Fade In: 2ms, Fade Out: 60ms

4. Go to **Sequencer** tab
5. Set BPM: 120, Swing: 25%
6. Create this sequencer pattern:

   **Slice 0**: 1-0-1-0-1-0-1-0-1-0-1-0-1-0-1-0 (every step)
   **Slice 1**: 0-1-0-1-0-F-0-1-0-1-0-1-0-F-0-1 (syncopated with flames)
   **Slice 2**: 0-0-0-0-1-0-0-0-0-0-0-0-1-0-0-0 (sparse)
   **Slice 3**: 1-0-0-0-1-0-1-0-1-0-0-0-1-0-F-0 (complex pattern)

   (where 1 = trigger, F = flame, 0 = empty)

7. Test the pattern by clicking **Play**
8. Click **Save Project** to download `example-project.zip`
9. Share or keep for testing!

### Option 2: Manual ZIP Creation

1. Use any ZIP archiver (7zip, WinRAR, macOS Archive Utility, etc.)
2. Create a new ZIP file containing:

   **project.json:**
   ```json
   {
     "audioFileName": "example-loop.wav",
     "bpm": 120,
     "swingAmount": 25,
     "slices": [
       { "start": 0.0, "end": 0.5, "pitch": 1.0, "volume": 0.8, "pan": 0, "enabled": true, "mode": "shot", "fadeIn": 1, "fadeOut": 50 },
       { "start": 0.5, "end": 1.0, "pitch": 1.0, "volume": 0.8, "pan": 0.2, "enabled": true, "mode": "shot", "fadeIn": 1, "fadeOut": 50 },
       { "start": 1.0, "end": 1.5, "pitch": 0.9, "volume": 0.7, "pan": -0.2, "enabled": true, "mode": "loop", "fadeIn": 5, "fadeOut": 75 },
       { "start": 1.5, "end": 2.0, "pitch": 1.1, "volume": 0.75, "pan": 0, "enabled": true, "mode": "shot", "fadeIn": 2, "fadeOut": 60 }
     ],
     "sequencerPattern": {
       "0": { "0": "trigger", "1": "empty", "2": "trigger", "3": "empty", "4": "trigger", "5": "empty", "6": "trigger", "7": "empty", "8": "trigger", "9": "empty", "10": "trigger", "11": "empty", "12": "trigger", "13": "empty", "14": "trigger", "15": "empty" },
       "1": { "0": "empty", "1": "trigger", "2": "empty", "3": "trigger", "4": "empty", "5": "flame", "6": "empty", "7": "trigger", "8": "empty", "9": "trigger", "10": "empty", "11": "trigger", "12": "empty", "13": "flame", "14": "empty", "15": "trigger" },
       "2": { "0": "empty", "1": "empty", "2": "empty", "3": "empty", "4": "trigger", "5": "empty", "6": "empty", "7": "empty", "8": "empty", "9": "empty", "10": "empty", "11": "empty", "12": "trigger", "13": "empty", "14": "empty", "15": "empty" },
       "3": { "0": "trigger", "1": "empty", "2": "empty", "3": "empty", "4": "trigger", "5": "empty", "6": "trigger", "7": "empty", "8": "trigger", "9": "empty", "10": "empty", "11": "empty", "12": "trigger", "13": "empty", "14": "flame", "15": "empty" }
     }
   }
   ```

   **audio.wav:**
   - Any audio file named `audio.wav` (or MP3, OGG)
   - Only needed for full functionality

3. Name it `example-project.zip`

## Testing

1. Open SLICER in your browser
2. Click **"Load Project"**
3. Select `example-project.zip`
4. Watch as all slices and sequencer patterns load automatically
5. Click **Play** in the Sequencer tab to hear the pattern

## What You Should Hear

With a drum or percussion loop:
- **Slice 0**: Steady 8th-note kick drum
- **Slice 1**: Syncopated snare with occasional flame stutters
- **Slice 2**: Sparse low-end hits
- **Slice 3**: Complex polyrhythmic hi-hat pattern

The 25% swing adds a subtle groove, making it feel more human and less mechanical.

## Customization

Feel free to modify:
- **BPM**: Change from 120 to any value (40-300)
- **Swing**: Increase for more groove (0-100%)
- **Sequencer Pattern**: Any combination of empty/trigger/flame
- **Slice Pitch**: Create melodies or harmonies
- **Slice Volume/Pan**: Create stereo width and dynamic contrast

---

Enjoy exploring the example!
