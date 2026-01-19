---
type: journal-article
status: first-pass
aliases:
  - Modeling Trough Withering System to Predict the Moisture Content of Tea Leaves at Real Time using One Dimensional Heat and Mass Transfer Finite Difference Model
url: https://dl-tri.nsf.gov.lk/items/3a565989-8154-4849-b516-5b4b97e9ec47
tags:
  - math-model
  - tea-withering
  - srilankan-tea
  - botheju
---
### Terms
---
**One-Dimensional Approach:** The model assumes that temperature and relative humidity are uniform in the horizontal direction, meaning heat and moisture flow only vertically through the leaf bed.

**Layered Simulation:** The leaf bed is divided into a finite number of thin horizontal layers. Air enters from the bottom, and the exhaust air conditions of one layer serve as the input for the layer immediately above it.

### Summary
---
- The study developed a **mathematical model** to predict the real-time moisture content of tea leaves during the withering process.
- The researchers used a **finite difference method** to solve differential equations for leaf temperature, leaf moisture, enthalpy, and absolute humidity. 
- The model treats the leaf bed as a series of **finite horizontal layers**, where air enters from the bottom and moves vertically through the bed. 
- Validation was conducted using a commercial withering with 800 kg of tea leaves and standard error (SE) between was 0.62 and 1.23 on a wet basis.
- Don't mention what kind of sensors they used, but made their own setup.
![[trough withering setup schematic.png]]

### Research Gaps
---
- **Horizontal Non-uniformity:** The model assumes uniform temperature and humidity distribution in the horizontal direction. In large commercial troughs, air distribution is not  perfectly uniform, leading to "pockets" of different moisture levels.
- **Leaf Bed Shrinkage & Caking:** While an empirical relationship for bed height was used, the model struggled to account for "caking" at the bottom layer and the resulting localized air escape at later stages.
- **Hysteresis Effects:** Assuming there is none.

### Flow and Limitations
---
#### Workflow
1. **Input:** Initial moisture content, wet bulb temperature, and real-time inlet air temperature/RH are fed into the system
2. **Processing:** A ==QBASIC== program calculates the drying coefficient ($k$), equilibrium moisture content ($M_e$), and heat of evaporation ($q$)
3. **Iteration:** The software iterates through each space increment (layer $i$) and time increment ($\Delta t$) to update leaf and air properties    
4. **Output:** Real-time prediction of moisture content across top, middle, and bottom layers

Model seems to be pretty accurate, according to the Standard Errors shown in results.
![[standard error of model.png]]

#### Limitations
- **Later Stage Deviations:** Simulated curves for the bottom layer deviated slightly at the end of the process due to reduced bed thickness and air escaping through loosely packed spots.
- **Specific Software:** The reliance on **QBASIC** may limit modern integration with newer industrial IoT (Internet of Things) platforms without recoding.
- **Static Assumptions:** The assumption of an **adiabatic and reversible** process simplifies the math but ignores minor heat losses to the trough walls and leaves.

### Economic Impact: Cost Reduction & Profit Increase
---
- **Energy Efficiency:** Withering consumes the highest amount of electrical and thermal energy in tea processing. Real-time prediction prevents "over-withering," significantly reducing fan run-time and fuel consumption.
- **Quality Consistency:** Uniformly withered leaves are essential for high-quality tea. By predicting moisture in top, middle, and bottom layers, factory managers can ==adjust airflow== to ensure a more even wither, fetching higher market prices for the end product.
- **Labor Optimization:** Allows for automated monitoring, reducing the need for constant manual sampling.    

### My Conclusion
---
Since the mathematical model seems accurate, the exact temperature and RH conditions can be set in withering according to calculations. Could highly improve the output of tea produced.
A great idea to use with IoT and tea-withering (esp. in systems like in [[@Marjan2009]]).