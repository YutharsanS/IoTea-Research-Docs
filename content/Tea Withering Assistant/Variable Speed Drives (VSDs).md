A **Variable Speed Drive (VSD)**, also known as a Variable Frequency Drive (VFD), AC drive, or Inverter, is a device located between the electrical supply and an electric motor. Its primary function is to control the speed and torque of an AC motor by varying the frequency and voltage of the input electricity,.

By adjusting the motor's speed to match the exact demand of the process rather than running at full speed continuously, VSDs significantly reduce energy consumption—often by 30-50% and up to 90% in some applications,.

### How It Works
---
The VSD regulates power through a three-step conversion process:
1. **Rectifier (AC to DC):** The drive converts the incoming AC power into DC power using a rectifier bridge (typically diode or thyristor-based),,.
2. **DC Link (Smoothing):** The DC power flows into a capacitor bank (DC circuit) which smooths out the electrical waveform to provide a clean, stable DC voltage,.
3. **Inverter (DC to Variable AC):** The inverter takes the smoothed DC voltage and converts it back into AC power. However, unlike the fixed mains supply, this output can be adjusted to the precise frequency and voltage required by the motor,.

### Technologies Involved
---
- **IGBTs:** The inverter section typically uses **Insulated-Gate Bipolar Transistors** to switch the DC voltage on and off at high frequencies to create the output waveform,.
- **PWM:** The most common method for controlling the output is **Pulse-Width Modulation**, where the width of voltage pulses is varied to simulate a sinusoidal wave of the desired frequency,.
- **Control Logic:** Modern drives use platforms like **Vector Control** or **Direct Torque Control (DTC)** to precisely manage magnetic flux and mechanical torque.
- **Inverter Types:** These include Voltage-Source Inverters (VSI), which are the most common, and Current-Source Inverters (CSI),.

### The Tea Industry in Sri Lanka: The 2002 Introduction vs. 2020 Implementation
---
While the concept was introduced as early as 1999 and the Tea Research Institute (TRI) developed a VSD device in 2002, widespread implementation was delayed for nearly two decades due to operational and technological barriers,.

**Why was it not implemented effectively in 2002?**

- **Manual Operation Errors:** The early VSDs required manual operation. Employees often forgot to adjust the speed at the right time, running fans at full speed unnecessarily. This human error eliminated the energy-saving benefits and potential quality improvements,.
- **Hardware Failures:** Early adoption was hindered by frequent equipment failures caused by lightning and harsh environmental conditions (dust), coupled with poor after-sales service from suppliers,.
- **Lack of Awareness:** There was significant skepticism and unawareness regarding the actual energy savings achievable through the technology.
- **Bulky Prototypes:** The initial prototype developed by the TRI was bulky and not ideal for commercialization.

**Why was it implemented in 2020?** The resurgence and successful implementation around 2020 were driven by technological advancements and specific support programs:

- **Automation:** The TRI, in partnership with private entities (e.g., A & T Labs), developed automated computer programs to control the VSDs. This removed human error by automatically adjusting fan speed based on real-time data such as moisture content and degree of wither,.
- **NAMA Project Support:** The "Energy NAMA" project, supported by the UNDP and GEF, addressed previous barriers by providing financial subsidies, ensuring quality control (e.g., mandatory surge protection against lightning), and facilitating technical training,.
- **Commercial Viability:** New units were smaller, smartphone-compatible, and capable of controlling temperature and airflow more accurately.

### Use After 2020
---
Post-2020, VSDs are used as part of intelligent, automated systems rather than standalone manual devices.

- **Real-Time Process Control:**
    - Modern systems utilize sensors to monitor temperature and relative humidity (T1, T2, RH1, RH2) inside the withering troughs,.
    - This data is fed into mathematical models running on controllers (such as a Raspberry Pi) to calculate the real-time moisture content of the tea leaves,.
    - The system automatically adjusts the VSD frequency (e.g., reducing from 50Hz to 40Hz) to regulate airflow as the leaves dry, ensuring the process follows a standard withering curve,.
- **Replacement of Dampers:**
    - Traditionally, airflow was restricted mechanically using dampers (louvers). VSDs now allow factories to control airflow electrically by slowing the fans, which is far more energy-efficient.
- **Online Monitoring (MRV):**
    - Implementation now includes web-based Energy Management portals and online monitoring applications. These allow factory managers to remotely monitor the RPM, frequency, and energy consumption of each trough,.

- **Impact:**
    - **Energy Savings:** Factories report energy savings between 20% and 30% compared to baseline consumption. Some research indicates savings of up to 39% in specific electrical consumption per kg of made tea.
    - **Quality:** The precise control prevents over-withering and reduces refuse tea quantities, improving the final product quality,.

### Resources
---
1. **Ceylon Tea meets ‘automated withering’ | History of Ceylon Tea**:  http://www.themorning.lk/ceylon-tea-meets-automated-withering/
2. **Energy Efficiency Improvement by Introducing Variable Frequency Drives for the Tea Withering Process | SLEMA Journal**: _DOI:_ 10.4038/slemaj.v23i1.19
3. **How Variable Frequency Drives Save Energy | ACI Controls Inc**: ACI Controls Blog
4. **How does a Variable Speed Drive Work - Inverter Drive Systems Ltd**: Inverter Drive Systems Ltd Resources
5. **NSF Contributes to improve the Tea Industry**: National Science Foundation of Sri Lanka
6. **Tea manufacturers report significant savings and efficiencies thanks to Optidrive Eco VFD | Process and Control Today**: Invertek Drives Ltd Case Study
7. **Variable Frequency Drives to Reduce Energy Consumption**: AKCP Power Monitoring Resources
8. **Variable-frequency drive - Wikipedia**: https://en.wikipedia.org/w/index.php?title=Variable-frequency_drive&oldid=1334371449
9. **What is a variable speed drive? | ABB**: ABB Drives
10. **Development of a Mathematically Controlled System for Electrical Energy Saving in Trough Withering of Tea**:  https://sljts.sljol.info/articles/13/files/67db97a003dce.pdf
11. **Development of a Mathematical Procedure for Controlling Air Flow Rate in Tea Withering**:  https://tar.sljol.info/articles/8331/files/submission/proof/8331-1-29019-1-10-20191107.pdf
12. **Variable Frequency Drives Application in the Tea Sector as an Appropriate Mitigation Action (NeelaHaritha Magazine Vol. III)**: https://www.env.gov.lk/web/images/pdf/divisions/climate_change_division/publications/NeelaHarithaMagazine_Vol_III_compressed.pdf
