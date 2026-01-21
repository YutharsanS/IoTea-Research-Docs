---
type: journal-article
status: first-pass
aliases:
  - Application of Fourier transform near-infrared spectroscopy to optimization of green tea steaming process conditions
url: https://doi.org/10.1016/j.jbiosc.2011.05.002
tags:
  - japanese-tea
  - near-IR-withering
---
### Summary
---
The research was for optimizing steaming/ withering. The optimal settings for industrial steamers (in ==Japan==)—specifically the angle of the drum and the rotation rate of the stirrer—are determined subjectively by **experienced manufacturers** based on the variable characteristics of fresh leaves (e.g., size, thickness, hardness). 
To address the lack of objective standards, they developed a prediction model using ***Fourier transform near-infrared (FT-NIR) spectroscopy** combined with **partial least squares (PLS) regression***.

> [!quote]
>We focused on FT-NIR spectroscopy because of its simple operation, quick measurement, and low running costs. 

### Research Gaps
---
**Pre-research Gap:**
- Subjectivity Gap: Manufacturing relies entirely on the *intuition* of skilled workers, leading to product failure when skill levels vary.
**Post-research Gap:**
- Need for Data Accumulation: The **authors explicitly** state that further experiments and the accumulation of more data are necessary to construct prediction models with high enough accuracy.
- Noise Interference: There was a gap in the raw spectral data utility, finding that the 1000–1200 nm wavelength range contained excessive noise that hindered cluster formation, requiring specific removal to make the models effective.

### Flow and Limitations
---
- **Research Flow:**
	1. **Data Collection:** Fresh tea leaves (_Yabukita_ variety) were harvested and processed by experts manually setting the parameters.
	2. **Spectral Analysis:** Leaf samples were dried in a microwave, ground into powder, and analyzed using FT-NIR spectroscopy. 
	3. **Model Construction:** Second derivative transformation and mean centering are applied.
		Utilized Principal Component Analysis (PCA) to remove noise (specifically in the 1000–1200 nm range) and visualize metabolic differences. 
		They then used PLS regression on the 1200–2500 nm wavelength range to correlate the spectral data with the experts' machine settings.
	4. **Validation:** $R^2$ values of 0.95–0.96 and validated in a prediction-set and then after in a larger-scale manufacturing experiment.


> [!warning]
> But they use an industrial rolling drum, not spread manually in a horizontal table by workers like in SL.

![[rolling steamer.png]]

- **Limitations:** 
    - Sample preparation required
    - Mimicking human expertise rather than deriving parameters from an independent physical constant. (==May or not be a limitation==)
    - Noise sensitivity

### Economic Impact: Cost Reduction & Profit Increase
---
- Reduction of product failure: Reduces the incidence of product failure caused by unskilled manufacturers.
- Reduced training, labor costs and **energy?** costs
- Scalability: Apparently tested in large scale.

### My Conclusion 
---
An entirely different concept because of the rolling drum used for withering instead of the horizontal machine used in SL. A detailed result section. Could be very helpful concept for prediction assistance.