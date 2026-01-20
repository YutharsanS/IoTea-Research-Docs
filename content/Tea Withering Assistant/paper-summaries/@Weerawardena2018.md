---
type: journal-article
status: first-pass
aliases:
  - "Development of a Mathematical Procedure for Controlling\rAir Flow Rate in Tea Withering"
url: https://doi.org/10.4038/tar.v30i4.8331
tags:
  - VSD
  - energy-consumption
  - botheju
  - tea-withering
---
### Summary
---

> [!important]
> They used the mathematical model of [Botheju et al., 2010](@Botheju2010) for calculating mass flow rate of air during withering.

- The study focuses on **optimizing electrical energy consumption** in the tea withering process.
- Withering is accounting for 49% (up-country tea factories) to 61% (low-country) of total electrical energy used in Sri Lankan tea factories.
- Although ==Variable Speed Drives== (VSDs), which could save 40% of energy, were introduced to the industry **in 2002**.

> [!quote]
> However, most of the tea factories could not achieve the real benefits of VSD systems as conventional practices of adjusting air control dampers was continued without paying attention on use of VSD. Therefore, new installation of VSDs was not carried out in tea factories and as a result VSDs were slowly removed away from tea withering.

### Research Gaps
---
Pre-research Gap:
- Lack of automation in VSDs: Relied on manual adjustments rather than automated responses to required airflow rates.
- Optimization of Mathematical Parameters: The study identified a gap in determining the correct "incremental time" ($t\Delta$) for the heat and mass transfer model. The researchers found that an incremental time of 5.7 seconds resulted in a high standard error (4.04%), whereas **5.9 seconds provided the best fit** with a standard error of only 0.84%.

### Flow and Limitations
---
**Flow:** 
- Decision logic:
    - If the moisture content is higher than the set point for that specific time interval, the system calculates the necessary logic for the VSD to increase mass flow rate.
    - If the mass flow rate exceeds the maximum, the **heater is triggered** to modify air properties.
- Termination: The loop continues iteratively until the final target moisture content is achieved.

![[flow diagram of control system.png]]

Raspberry Pi 3 Model B and a mathematical model to automate the process.
- Monitoring real-time conditions
- Mathematical modeling: Calculate the real-time moisture content of the leaves and the thermodynamic properties of the air.
- Actuation: Automatically adjusting the fan speed via a VSD.

> [!quote]
> The energy consumption with the control system was in the range of 36 to 38 kWh whilst it was in the range of 55 to 67 kWh without control system.

**Limitations:**
- Dependency on linear curves: The control system uses a ==standard linear curve== of moisture content versus time as the set point. This assumes a linear drying rate is always ideal, which is a rigid constraint for the model.
- Sensitivity to time increments: A difference of just 0.2 seconds (5.7s vs 5.9s) resulted in significant error differences in moisture prediction.
- Hardware specificity: Validation was performed on a specific trough size (18.29 m x 1.83 m) with specific sensor types (LM35, Honeywell HIH4000), meaning the specific constants might need recalibration for different factory setups.

### Economic Impact: Cost Reduction & Profit Increase
---
- Less energy consumption
- Moisture removal efficiency: The system improved the efficiency of moisture removal significantly. With the control system, 1 kWh of energy removed **9.9–11.97 kg of moisture**, compared to only 6.82–8.48 kg of moisture per kWh without the system.

### My Conclusion
---
Since it mentions on VSD (an assumingly great improvement), this would be required for investigations.