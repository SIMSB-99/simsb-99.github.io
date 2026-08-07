---
layout: page
title: EvaluatAR
description: A cross-device record-and-replay framework for reproducible evaluation and rapid prototyping of bystander privacy-enhancing technologies in AR.
importance: 1
category: research
related_publications: true
---

**Status:** Published in *Proceedings on Privacy Enhancing Technologies (PoPETs) 2026(4)*  
**Devices:** Microsoft HoloLens 2, Magic Leap 2, Meta Quest 3  
**Topics:** XR privacy, bystander privacy, reproducible evaluation, multimodal systems

## Abstract

Augmented-reality headsets continuously sense their surroundings, creating privacy risks for nearby bystanders. EvaluatAR is a headset-agnostic framework that standardizes the sensor inputs, visual stimuli, and logged outputs used to evaluate visual bystander privacy-enhancing technologies. Its record-and-replay workflow lets researchers reproduce the same privacy-relevant conditions across devices and trials, compare privacy–performance trade-offs, and revisit edge cases without repeatedly recreating live human interactions. Three case studies demonstrate cross-device evaluation, support for both implicit and explicit privacy mechanisms, and rapid debugging of failures under identical inputs.

## My contributions

- Led the design and implementation of the cross-device evaluation framework.
- Built lightweight Unity and Python tooling for sensor logging, record-and-replay, synchronized output capture, and visual debugging.
- Integrated and validated the workflow across HoloLens 2, Magic Leap 2, and Meta Quest 3.
- Designed controlled experiments for cross-device trade-offs, candidate-load effects, intent-to-enforcement behavior, and overlapping/crossing-bystander edge cases.
- Diagnosed identity-continuity failures and validated a Kalman-filter-based tracking modification under replayed conditions.
- Led the paper development and recorded presentation.

## Resources

- [Paper PDF]({{ '/assets/pdf/evaluatar-popets-2026.pdf' | relative_url }})
- [Publisher / DOI](https://doi.org/10.56553/popets-2026-0153)
- [arXiv](https://arxiv.org/abs/2605.29177)
- [Recorded PETS 2026 presentation](https://youtu.be/pggUk6OAchM)

> The codebase and additional evaluation artifacts were not found in a public repository during preparation of this page. Add them here when they become public.

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

{% cite bukhari2026evaluatar %}
