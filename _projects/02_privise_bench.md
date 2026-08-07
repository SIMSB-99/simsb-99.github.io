---
layout: page
title: PriVisE-Bench
abstract: >
  Object-centric privacy benchmarks do not adequately test whether vision-language models understand why an
  entire scene is privacy-sensitive. PriVisE-Bench is a 1,069-image benchmark grounded in eight human
  privacy rationales and validated by three privacy/HCI experts with high agreement. The project evaluates
  contextual privacy reasoning across 13 vision-language models using 303,446 zero-shot, few-shot, and
  prompt-robustness trials. Few-shot examples improved Balanced Accuracy by 0.233 and Macro F1 by 0.340,
  yet only 46.3% of taxonomy-guided predictions fully matched both the human privacy label and rationale.
  The results expose a gap between plausible model outputs and human-grounded privacy reasoning, with
  implications for intelligent XR systems that must decide when sensing or recording is appropriate.
importance: 2
category: research
related_publications: false
---

**Topics:** Vision-language models, contextual privacy, human-grounded evaluation, AI alignment  

## Abstract

{{ page.abstract }}

<!--
## My contributions

- Identified the limitations of object-centric privacy evaluation for whole-scene reasoning.
- Designed and built the 1,069-image benchmark around eight human privacy rationales.
- Coordinated expert validation and developed the large-scale evaluation pipeline.
- Evaluated 13 VLMs across zero-shot, few-shot, taxonomy-guided, and prompt-robustness settings.
- Mentored an undergraduate researcher working on the project during Summer 2026.
- Led the first-author manuscript currently under review.
-->

## Citation

```bibtex
@unpublished{bukhari2027privise,
  title  = {PriVisE-Bench: Benchmarking Human-Grounded Contextual Privacy Reasoning of Vision Language Models over Whole-Scene Images},
  author = {Bukhari, Syed Ibrahim Mustafa Shah and Chinnala, Amulya and Ji, Bo and David-John, Brendan},
  note   = {Under review at the AAAI 2027 Special Track on AI Alignment},
  year   = {2027}
}
```
