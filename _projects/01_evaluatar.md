---
layout: page
title: EvaluatAR
abstract: >
  Augmented-reality headsets continuously sense their surroundings, creating privacy risks for nearby
  bystanders. EvaluatAR is a headset-agnostic framework that standardizes the sensor inputs, visual
  stimuli, and logged outputs used to evaluate visual bystander privacy-enhancing technologies. Its record-
  and-replay workflow lets researchers reproduce the same privacy-relevant conditions across devices and
  trials, compare privacy–performance trade-offs, and revisit edge cases without repeatedly recreating live
  human interactions. Three case studies demonstrate cross-device evaluation, support for both implicit and
  explicit privacy mechanisms, and rapid debugging of failures under identical inputs.
importance: 1
site_visible: true
category: research
related_publications: false
---

**Topics:** Privacy-enhancing technologies (PETs), bystander privacy, evaluation framework  

<div class="artifact-badges">
  <span class="artifact-badge">Artifact Available</span>
  <span class="artifact-badge">Artifact Functional</span>
</div>

## Abstract

{{ page.abstract }}

<!--
## My contributions

- Led the design and implementation of the cross-device evaluation framework.
- Built lightweight Unity and Python tooling for sensor logging, record-and-replay, synchronized output capture, and visual debugging.
- Integrated and validated the workflow across HoloLens 2, Magic Leap 2, and Meta Quest 3.
- Designed controlled experiments for cross-device trade-offs, candidate-load effects, intent-to-enforcement behavior, and overlapping/crossing-bystander edge cases.
- Diagnosed identity-continuity failures and validated a Kalman-filter-based tracking modification under replayed conditions.
- Led the paper development and recorded presentation.
-->

## Resources

- [Paper PDF]({{ '/assets/pdf/evaluatar-popets-2026.pdf' | relative_url }})
- [DOI](https://doi.org/10.56553/popets-2026-0153)
- [Presentation](https://youtu.be/pggUk6OAchM)

## Citation

```bibtex
@article{bukhari2026evaluatar,
  title   = {EvaluatAR: A Cross-Device Evaluation Framework for Rapid Prototyping of Bystander PETs in AR},
  author  = {Bukhari, Syed Ibrahim Mustafa Shah and Corbett, Matthew and Ji, Bo and David-John, Brendan},
  journal = {Proceedings on Privacy Enhancing Technologies},
  volume  = {2026},
  number  = {4},
  pages   = {947--963},
  year    = {2026},
  doi     = {10.56553/popets-2026-0153}
}
```
