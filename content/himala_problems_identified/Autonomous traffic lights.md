- A system of traffic lights with computer vision and connected to a network to manage the flow across a larger area.

---
## Challenges which doesn't help the above

1. **The "Manual Override" Culture**

A major reason is the prevalence of manual traffic control. In late 2024 and throughout 2025, the Sri Lankan Police were officially given the authority to disable traffic lights and manage junctions manually.
- The Logic: Authorities argue that static or poorly programmed timers often cause longer queues than a human officer who can see the "real" buildup blocks away.
- The Problem: Once an officer takes over manually, the "smart" sensors (if any exist) become useless. This has created a cycle where the technology isn't trusted because it isn't updated, and it isn't updated because officers are already there to fix the mess.

2. **Mixed Traffic Conditions (Heterogeneous Traffic)**

Most smart systems globally (like those in Singapore or Europe) are designed for orderly lanes of cars and buses. In Sri Lanka, the traffic is heterogeneous:
- Lane Discipline: Tuk-tuks, motorbikes, and pedestrians often move in ways that standard computer vision algorithms (developed in the West) struggle to quantify as "density.
- Sensor Challenges: In-road inductive loop sensors (which detect metal above them) often fail here because of road excavations or because motorbikes don't trigger them the same way a car does.

3. **High Initial & Maintenance Costs**

While "smart" sounds simple, it requires a massive backend:
- Hardware: It's not just the lights; you need high-definition cameras (using YOLO or similar AI for vehicle counting), fiber-optic connectivity for real-time data, and a centralized Command & Control Center.
- Maintenance: Sri Lanka’s tropical climate (high humidity and monsoon rain) leads to rapid wear and tear on outdoor sensors and wiring. Historically, many traffic lights in Colombo have been non-functional simply because of a lack of spare parts or budget for specialized repairs.

4. **Fragmented Responsibility**

Traffic in Sri Lanka is managed by multiple bodies:

- The Road Development Authority (RDA) manages the main roads.
- The Provincial Road Development Authorities manage others.
- The Sri Lanka Police manage the actual flow.
- The Municipal Councils (like CMC) often own the infrastructure.

This "too many cooks" situation makes it difficult to implement a unified, synchronized smart grid across a whole city.


---
# Sources
- https://mawratanews.lk/news/acting-igp-restores-police-authority-to-disable-traffic-lights-amid-rising-congestion-issues/#:~:text=To%20address%20rising%20traffic%20congestion,disabling%20traffic%20lights%20when%20necessary.
- https://www.ft.lk/columns/Hidden-cost-of-traffic-lights-Colombo-s-silent-economic-burden/4-770596#:~:text=The%20Road%20Development%20Authority%20RDA,are%20performing%20at%20optimal%20levels.