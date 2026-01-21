---
type: journal-article
status: first-pass
aliases:
  - "Predictive Analytics for Tea Leaf Aging and Quality \rDegradation"
url: https://doi.org/10.1109/mercon67903.2025.11216994
tags:
  - srilankan-tea
  - computer-vision
  - tea-plucking
  - tea-degradation
  - tea-farming
---
### Summary
---
This paper introduces a **two-stage, microservices-based predictive analytics system** designed to manage tea leaf quality by predicting degradation based on visual and environmental factors. 
The framework addresses the reliance on **manual inspection**.
System achieved ~84% accuracy.

> [!quote]
> Cheng et al. analyzed long-term metabolic changes in Qingzhuan tea, revealing how aging affects taste and chemical composition over decades.

### Research Gaps
---
Pre-research Gap:
- Lack of temporal prediction: Previous studies using models like YOLOv8 or CNNs focused solely on **static classification**, failing to account for how quality degrades over time.
- Exclusion of environmental factors: Existing models typically do not integrate **weather variables** (temperature, humidity, rainfall), which affect post-harvest quality deterioration.
- Black Box Models: AI models typically offer no **transparency** into why a specific prediction was made, which ==hinders trust among farmers==.
- Data sparsity: Lack of publicly available datasets for tea leaf quality degradation so a **synthetic** dataset was created.

### Flow and Limitations
---
**Flow:**
1. Image Service: A user captures a leaf image via a mobile app. A fine-tuned **YOLOv8x model** detects the leaf and classifies its initial quality (Tier 1–4).
2. Weather Proxy: The system retrieves a 15-day weather forecast (merging data from OpenWeather and Open-Meteo) based on the user's GPS location, caching results to minimize API calls.
3. Degradation Service: A **Random Forest model** processes the initial quality, leaf age, and weather data to predict the quality tier for each of the next 15 days. It calculates features like "heat index" and "stress score".
4. Output & White Box: The system applies a logic constraint (maximum one-tier drop per day) to ensure realistic projections. Finally, (Explainable AI) **SHAP values** explain the top drivers of degradation (e.g., "High humidity slows degradation"), and the app displays a degradation timeline with harvest suggestions.

![[data flow for tea degradation service.png]]

**Limitations:**
- Synthetic data reliance: Dataset generated using climate normals and biological rules, rather than actual field observations.
- Model constraints: Deep learning models like **LSTMs underperformed** because the synthetic data lacked true flow, leading to choose a Random Forest classifier instead.
- Classification precision: Showed **lower precision for Tier 1 and Tier 2** leaves due to overlapping visual features, resulting in occasional over-prediction of early-stage quality.

### Economic Impact: Cost Reduction & Profit Increase
---
- Increased market value and reduction of post-harvest waste: By forecasting when leaf quality will drop to a lower tier, the system enables farmers to **harvest at the optimal time**, thereby maintaining high-grade tea.
- Operational efficiency: The system generates **specific harvest recommendations** (e.g., "Harvest before Day 9"), allowing farmers to plan labor and processing schedules more efficiently.
- Scalable: The architecture uses **serverless microservices** and caches weather data, which minimizes computational overhead and redundant API costs.

### My Conclusion
---
They seem to have done an extensive literature review and analyzed on the advantages and disadvantages of using each kind of model.
This assists farmers as well (not just plucking), by forecasting tea quality and it's recommendations.