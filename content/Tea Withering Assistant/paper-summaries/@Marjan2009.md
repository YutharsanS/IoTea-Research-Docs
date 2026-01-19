---
type: journal-article
status: first-pass
aliases:
  - "A Microcontroller-Based Monitoring System \rfor Batch Tea Dryer"
url: https://sci-hub.ru/10.5539/jas.v1n2p101
tags:
  - tea-withering
  - black-tea
  - malaysian-tea
---
### Summary
---
The research presents the design and implementation of a microcontroller-based automation system for a batch tea dryer, aimed at optimizing the drying of black tea. The primary objective is to reduce the moisture content of tea leaves from approximately 70% (wet basis) to a target of 2.5%–3% within 15 to 25 minutes to ensure product quality. 

> [!warning]
> Need to test with Sri Lankan tea, as this method isn't followed here.

### Research Gaps
---
**Pre-existing Gaps:**
- **Inaccessibility of Automation:** While automation improves quality, industrial PLC-based monitoring systems are expensive, require large floor spaces, and are often **not commercially viable** for small-scale operations.
- **Manual Control Inefficiencies:** Many factories rely on manual process control due to low labor costs. However, this leads to inconsistent product quality, lower throughput, and significant energy wastage.
- **Smoke Contamination:** Traditional methods (according to the paper, **didn't mention what tea tested**) often use gas or oil burning which can introduce smoke, lowering tea quality. This research proposes an electric heating element approach to eliminate this issue.

### Flow and Limitations
---
**Research and System Flow:**
1. **Input:** Wet tea leaves (approx. 5cm thickness for thin leaves) are loaded into the dryer trays.
2. **Sensing:** Sensors detect the inlet and outlet air temperatures and moisture levels. The critical exhaust temperature indicates drying conditions and should ideally remain between 49ºC and 57ºC.
3. **Processing:** The microcontroller analyzes the sensor data against target parameters.
4. **Actuation:** The controller adjusts the heater and primary fan using PWM signals. If the temperature spikes, the secondary fan activates to vent heat.
5. **Output:** The process concludes when the tea leaves reach the equilibrium moisture content, characterized by a leaf temperature rise to approximately 80ºC.

**System Architecture:** The proposed system utilizes a tray or cabinet batch dryer design containing 6 to 8 stainless steel trays with punched holes to allow heated air circulation. The core processing unit is a microcontroller, chosen as a low-cost alternative to industrial Programmable Logic Controllers (PLCs). This central processor handles several tasks:
- **Data Acquisition:** It reads data from sensors via an ADC to monitor parameters (Temp and RH).
- **Control Logic:** It uses **PWM** (**not just** ON/OFF relays).
- **Communication:** The system includes a data logger to record sensor values and an RS-232 connection to communicate with a PC for online monitoring and control.
![[schematic of tea dryer.png]]

**Operational Dynamics:** 
The drying process involves three stages: 
- the equilibrium stage
- the constant rate stage (evaporation from the saturated surface)
- the falling rate stage (where tea temperature rises to match the dry bulb temperature of the air). 
To maintain quality, the inlet air temperature is controlled between 83ºC and 99ºC. A secondary fan is integrated into the design to act as a safety mechanism; if the chamber temperature exceeds the threshold, this fan vents hot air to prevent the leaves from burning or case-hardening.

**Limitations:**
- **Fan Placement Trade-off:** The researchers modified the airflow design by placing the fan _before_ the heater. While this protects the fan from heat damage and extends its life, it results in air with less turbulence and a slightly decreased drying rate compared to placing the heater first.
![[heater and fan placement.png]]
- **Efficiency Constraints:** The system efficiency drops if the exhaust temperature becomes too high, indicating that heat is not being effectively transferred to the tea leaves.

### Economic Impact: Cost Reduction & Profit Increase
---
**Cost Reduction:**
- **Hardware Selection:** By replacing expensive PLCs with microcontrollers.
- **Equipment Longevity:** Placing the ambient air fan before the heater prevents the fan from being exposed to high temperatures. This reduces wear and tear on the fan, thereby lowering maintenance and replacement costs.
- **Energy Efficiency:** Modulating the heater output via PWM.

**Profit Increase:**
- **Quality Assurance:** Precise temperature control prevents "stewing" (caused by low temp) and "case-hardening" or burning (caused by high temp). 
- **Throughput Consistency:** Avoids long drying times which damage quality or fast drying which causes bitterness.
- **Waste Reduction:** The inclusion of a secondary safety fan prevents entire batches from being ruined by **accidental overheating**.

### My Conclusion
---
Researched pretty well, esp. considering energy efficiency and reducing tea waste. A good idea with Industry 5.0 and tea-withering. But the process seems to be done using Malaysian tea withering methods.