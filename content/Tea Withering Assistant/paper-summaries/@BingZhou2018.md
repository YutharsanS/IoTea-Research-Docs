---
type: journal-article
status: first-pass
aliases:
  - "Intelligent Monitoring System of Pu’er Tea  \rWarehouse Based on IoT"
url: https://doi.org/10.1145/3148453.3306251
tags:
  - china-tea
  - tea-storing
  - iot
---
### Summary
---
The research addresses critical challenges in the storage of Pu’er tea, where traditional methods suffer from **inadequate manual supervision**, poor anti-interference capabilities in remote monitoring, and an inability to access different types of devices simultaneously.

Tested in a real-world - Yunnan Diwei Avenue Tea Co., Ltd., demonstrating high stability with a data loss rate of only 0.08%. It achieved high accuracy, with average errors of only 0.53°C for temperature and 1.02 RH% for humidity when compared to standard recording equipment.

### Research Gaps
---
- **Pre-existing Gaps:** Traditional remote environmental monitoring systems lacked strong anti-interference abilities and adaptability and control different heterogeneous devices simultaneously within a single network.
- **Remaining Gaps:** No edge computing? Currently, data processing relies on the central gateway and cloud, but the author says about it being intelligent.

>Edge processing solves a lot of traditional problems like sensor noises and anomalies, and network bottlenecks.

### Flow
---
1. **System Design:** They adopted a "stub network architecture".
2. **Software Implementation:** The software was divided into three logical parts: the central gateway program (protocol conversion/forwarding), the data collector program (reading sensors), and the device controller program (executing commands).
3. **Field Testing:** Comparing sensor data against a control group for accuracy and calculating **packet loss rates**.

![[system design storage.png]]

System has, 
1. **Perceptual Layer:** This includes data collectors equipped with sensors (temp, RH, light intensity) and device controllers that manage equipment like humidifiers, fans, and sunshades.
2. **Transport Layer:** Utilizes a **433MHz wireless sensor network** combined with the **CAN bus** and a central gateway.
3. **Central Gateway:** Protocol conversion (bridging the local sensor network with the internet) and data forwarding.
4. **Application Layer:** Communicating with the gateway via **GPRS**.

### Economic Impact: Cost Reduction & Profit Increase
---
1. Minimizing Product Loss
2. Labor Cost Reduction??: Remote monitoring, eliminates the need for physical, manual checks of the warehouse, reducing the labor hours required for supervision.

### My Conclusion
---
It's like monitoring-worker-system, but for tea leaves when storing. Monitoring remotely does reduce labor hours, which was the major problem mentioned in the research [[@Ayesha2023]]. 
So, it is assisting workers in a way.