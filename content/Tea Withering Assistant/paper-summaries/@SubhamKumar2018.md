---
type: journal-article
status: first-pass
aliases:
  - "IoT based Smart Tea leaves Plucker with Two \rRevolute type Planar Manipulator"
url: https://sci-hub.ru/10.1109/sceecs.2018.8546942
tags:
---
### Summary
---
An **IoT-based Two Revolute (2-R) Planar Manipulator** designed to **automate** the harvesting of tea leaves.

### Research Gaps
---
**Pre-research Gap**: Manual Labor Dependency

### Flow and Limitations
---
**Research and Process Flow**:
1. **Sensing:** Laser sensors monitor the field. If an obstruction (tea plant growth) is detected for more than 10 seconds, the sensor publishes messages to topics ‘HEIGHT’ and ‘SENSOR’.
2. **Adjustment:** The Robot subscribes to ‘HEIGHT’ and automatically adjusts its vertical position to match the plant level.
3. **Decision Making:** An operator monitors the ‘SENSOR’ topic. Upon verification, the operator publishes a command to the ‘PLUCK’ topic.
4. **Execution:** The Robot, subscribing to ‘PLUCK’, initiates the inverse kinematics control loop to drive the end-effector along a linear path to harvest the leaves.

 **Mechanical Design and Kinematics:** 
 The core mechanism is a robotic arm with two rotary actuators (2-R). They utilize forward kinematics and inverse kinematics. An algebraic method is used to solve the inverse kinematics to achieve a **linear trajectory**.

**Control System:** The robot employs a feedback loop. It uses MQTT. Doesn't specify the mcu or laser sensors used, but it's a solar-powered mobile robot.

**Limitations**
- **Trajectory Complexity:** Only for simple trajectories.
- **Connectivity Dependence:** The system relies entirely on the connection between the microcontroller and the MQTT broker.

### Economic Impact: Cost Reduction & Profit Increase
---
- Labor Reduction
- Increased Productivity: The robot can operate efficiently using a defined mathematical trajectory, potentially faster and more consistently than human laborers.
- Energy Efficiency: Solar energy

### My Conclusion
---
Seems to be a fairly simple robotic arm that can automatically pluck. Although some part is  manually controlled, I don't think it would be very effective to use.