# Portfolio copy sources

Reviewed October 8, 2026. The owner supplied detailed descriptions of Doorcam, the BWSI UAS–SAR pipeline, and the stock-analysis application in this editing session, and asked to focus the portfolio on these three projects.

## Doorcam

- Owner description: Jetson Inference SSD-MobileNet-V2; person/dog/cat/bird detection; bounding-box area as an approximate proximity cue; pose heuristics; captured pet profiles; CustomTkinter image collection and settings; software lock output with a hardware extension point.
- [Implementation](https://github.com/Sohambhatta/Doorcam/blob/main/enhanced_doorcam.py): detection, area/pose thresholds, lock-state changes, and explicit TODO for the physical locking mechanism.
- [Pet profiles](https://github.com/Sohambhatta/Doorcam/blob/main/pet_trainer.py) and [desktop interface](https://github.com/Sohambhatta/Doorcam/blob/main/pet_training_gui.py).
- No claim of biometric identity verification, a deployed physical lock, or measured detection accuracy.

## BWSI UAS–SAR

- Owner description: hexacopter-mounted Pulson 452 radar; OptiTrack; RTI decoding; time/range alignment; quaternion ESKF; boresight compensation; phase-coherent backprojection; CPU/CuPy/PyTorch variants; denoising and reflector detection.
- [Team demo README](https://github.com/Sohambhatta/BWSI-UAS-SAR-Team-4-DEMO-CODE/blob/main/readme.md) reports indoor soda cans resolved at 40–50 cm spacing. This is target spacing in those tests, not a general guaranteed radar resolution.
- [Alignment](https://github.com/Sohambhatta/BWSI-UAS-SAR-Team-4-DEMO-CODE/blob/main/postprocessing/alignment.py) and [backprojection variants](https://github.com/Sohambhatta/BWSI-UAS-SAR-Team-4-DEMO-CODE/tree/main/postprocessing/backprojectionOptions).
- The pipeline is credited to the team. The public repository is an older demonstration snapshot; the copy does not attribute all individual modules to Soham.
- First place in the 2025 course's final competition is listed on [Soham's LinkedIn profile](https://www.linkedin.com/in/soham-bhatta).

## AI Stock Analysis

- Owner description: Flask/Python, HTML/CSS/JS, Plotly, Yahoo Finance prices/fundamentals, six months of history, stock search, RSS news, VADER/TextBlob sentiment, and recommendations.
- [Application](https://github.com/Sohambhatta/AI-Stock-Analysis/blob/main/app.py) confirms the two distinct weightings: 60% price trend / 40% news sentiment; within article sentiment, 60% VADER / 40% TextBlob.
- Confidence is a rule-based score affected by signal thresholds, news availability, and price movement. No measured prediction accuracy or calibrated success probability is claimed.
- The public code can generate market commentary when news is unavailable. The portfolio does not promise that all displayed text comes from retrieved news articles.
- The separate BERT/LSTM/CNN project on LinkedIn is not conflated with this VADER/TextBlob application.

## Profile

- LinkedIn publicly lists University of Michigan College of Engineering, 2026–Present, Ann Arbor. Its About text still mentions high school; that stale wording was not reused.
- Public LinkedIn indexing was readable; direct page retrieval was blocked by LinkedIn. No specific degree, major, GPA, graduation date, internship, or current team role was inferred.
- Existing project years were retained; no new project dates were invented.

## Presentation

- Awards and publications: [IEEE Southeastern Michigan Wavelengths, August 2026](https://r4.ieee.org/sem/wp-content/uploads/sites/6/2026/07/2026_08_WL.pdf#page=23), pages 23–28, credits Soham Bhatta's “Future Engineer MIT Report.” It is presented as a newsletter publication, not a peer-reviewed research paper. The article and pictured award confirm Team 4's BWSI first place.
- The named SAE scholarship, MIT EWB individual/team honors, school science award, state Science Olympiad trial-event placing, and two bowling awards come from publicly indexed LinkedIn honors. No unnamed trial event or additional award criteria were inferred.
- The resume was not available in this workspace. Resume-only projects and honors remain pending rather than being invented.
- The owner confirmed the MIT EWB competition honors were international; that card has a brighter gold border and background to emphasize this distinction.

- Short summaries belong on posters; technical detail belongs in project windows. Intro, project themes, highlights, and skill evidence use the same three sources.
- Basketball and VentPilot were removed from the featured selection following the owner's instruction to focus on the three descriptions above.
- Motion timings, parallax, tilt, shared-layout transitions, intro playback, and particle effects remain unchanged. Short desktop viewports use the existing swipe-rail presentation to keep the cards readable.
