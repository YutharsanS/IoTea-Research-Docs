# Progress

- [[13-01-2026 Tea Withering Assistant]]

# Initial Proposal
A *decision making* assistant to help with **perfect withering** i.e., an AIoT system that assists factory technicians in deciding when and how to wither, rather than automating the process blindly.

## Tea in Sri Lanka
---
- Main processing methods - Orthodox, Cut-Tear-Curl (CTC)
![[TeaManufactureMethods.png]]
[[#^ref1]]

### Withering of tea

> [!warning] Warning
> The following are based on the reference videos [[#^ref1]] and [[#^ref2]].
> Content's accuracy is to be determined.

- Except for Plucking and Withering, all other steps used machines with humans only transferring tea to the machines.
- Main disadvantage for those working with machines could be heat?, dust pollution and noise. 
	- Temperature for some steps should not exceed 35°C and that ***could*** be the max temp. there.
- Quality is tested for approx. 100g of a batch and if 60% is good, the batch is considered good.

**Withering** is reducing the moisture of leaves for easy rolling (20% reduction for Orthodox and lesser for CTC).

- Plucking may have used some hand devices for easier cutting.
- In the withering process, tea leaves are spread out evenly (and turned over a few times) and hot air is passed for 12 to 18 h (8 to 12 for CTC).
- If they over-wither, the tea loses flavor (value drops). If they under-wither, the leaf breaks during rolling (wastage)

> [!info] Color separator 
> - The only machine using camera and pattern recognition? to separate based on some features


## Description of System
---
Withering decisions are made based on:
- Time heuristics 
- Manual inspection
- Environmental intuition (which varies by elevation and weather)
To: 
	Save energy and prevent wastage of tea leaves (SDG goals)

Focuses on **Vapor Pressure Deficit (VPD)**, an indicator of the air’s capacity to remove moisture from tea leaves, combined with airflow **and** weight-based (for additional accuracy in moisture content) feedback. This system will be placed inside the **existing** machine.

Proposed components could be:
- MCU and AI – VPD computation and Estimated moisture loss
- Temperature & Relative Humidity Sensor (Accuracy is mandatory)
- Anemometer – Airflow rate (need further research on availability in SL and measurement ranges)
- Load Cell – Weight change of a sample leaf basket, if cost efficient

## Key concerns
---
- Could get investors since tea manufacturing is a main revenue of SL (Surpassed $1.4 billion in 2024)
- [ ] Accurate research on withering
- [ ] View of the industrial environment of the factories and impact on tea


## References
---
1. The Science of Ceylon Tea - Orthodox Vs CTC Manufacture | Sri Lanka [Destination SRI LANKA](https://www.youtube.com/@DestinationSriLanka) ^ref1
2. Ceylon Tea - Manufacturing Process [Winson Films](https://www.youtube.com/@WinsonFilms)  ^ref2



