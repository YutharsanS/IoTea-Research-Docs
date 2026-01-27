*(From [[13-01-2026 Tea Withering Assistant]] to [[20-01-2026 Tea Withering Assistant]])*

| Paper                 | Input                                                                         | Process                                  | Output                                          | Advantages                                              | Disadvantages                        | Special Notes                                                   |
| --------------------- | ----------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------- | ------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------- |
| [[@Ayesha2023]]       | Survey data, cost breakdown                                                   | Literature review + industry survey      | Identified **labor as major cost**              | Good motivation paper, highlights cost pressure         | No system, no model, no IoT method   | Context-only paper; not technical                               |
| [[@BingZhou2018]]     | Temp, RH, light; device states in Chinese warehouses **after tea production** | Communication                            | Tea is stored safe?                             | Reliable, real industrial deployment, remote monitoring | Centralized, no edge intelligence    | Strong monitoring system, weak analytics                        |
| [[@Botheju2010]]      | Inlet air T/RH, initial moisture in tea withering stage                       | Finite-difference layered model (QBASIC) | Real-time moisture prediction (SE 0.62–1.23)    | Industrial validation, airflow optimization             | Old software, uniformity assumption  | Excellent base for **IoT digital twin**                         |
| [[@Botheju2011]]      | Weight loss, air temp & RH                                                    | Thin-layer drying + nonlinear regression | Two-term model best fit; falling-rate only      | High model accuracy, uses thin bed                      | Only for specific cultivar           | Good for modeling, not direct control                           |
| [[@Daiki2011]]        | FT-NIR spectra and angle rotations                                            | PCA + PLS regression                     | Machine setting prediction (R² 0.95–0.96)       | Objective decision support, fast                        | Needs sample prep, Japan-only setup  | Mimics experts, not physics, a **good decision helping system** |
| [[@Marjan2009]]       | Temp, moisture indicators                                                     | MCU + PWM heater/fan control             | 2.5–3% moisture output in 15–25 min             | Low-cost PLC alternative, energy efficient              | Not SL withering method. (Malaysian) | **IoT tea-withering**                                           |
| [[@Piratheepan2018]]  | Temp & RH                                                                     | Far-IR heating experiment                | Only abstract-level values                      | Low energy consumption                                  | No data, no validation               | Excluded from main page                                         |
| [[@Ravindu2025]]      | Leaf images, weather, age                                                     | YOLOv8 + RF + SHAP                       | ~84% degradation prediction **before plucking** | Temporal prediction, explainable AI                     | Synthetic data, tier overlap         | Strong farmer decision-support                                  |
| [[@SubhamKumar2018]]  | Laser sensing, MQTT commands                                                  | 2-R robot arm + inverse kinematics       | Automated plucking trajectory                   | Labor reduction, solar-powered                          | Manual confirmation, simple paths    | Limited plantation practicality                                 |
| [[@Wang2025]]         | Leaf images, moisture labels                                                  | YOLOv8s + attention modules              | 92.7% accuracy, 5 ms inference                  | Non-destructive, lightweight                            | Single cultivar, image-only          | Ideal for real-time withering                                   |
| [[@Weerawardena2018]] | Temp, RH, airflow                                                             | Math model + **VSD automation**          | Energy cut 55–67 → 36–38 kWh                    | Major energy savings, SL-specific                       | Linear assumptions, calibration      | Uses VSD                                                        |
| [[@Zeyi2017]]         | Light wavelength, tea leaves                                                  | Controlled light withering + analysis    | Yellow/orange/red improved quality              | Strong chemical evidence                                | Single cultivar, unclear mechanism   | Value-added tea production                                      |

## Different directions on research
---
There are some other pathways which have been followed in producing tea better.
1. Tea-withering
	1. Using IR rays instead of using Dendro Thermal power aka. **Saving energy**.
	2. Decision making on when to stop the machine while continuously monitoring the **moisture content**/ controlling **temp**.
2. Tea plucking **with Degradation** Grading - Grading the tea leaves in a 15 day period and see if it's still good to pluck
3. ~~Tea Storing~~ (Not exactly stored anywhere in SL - In China, Pu'er tea is stored after produced from factory)

(Since plain Tea plucking was mostly found related to *automation* and hand plucking would be the efficient method so far, that path is discarded).

> [!warning]
> Need to check if it aligns Industry 5.0 and use AIoT !!
