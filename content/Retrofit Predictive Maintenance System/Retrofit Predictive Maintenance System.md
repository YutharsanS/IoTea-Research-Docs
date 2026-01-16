---
draft: true
---

The idea is to make a **decision support system** to empower the technicians to detect anomalies and machine failures prior. Something that's retrofit, meaning it supports industry 5.0 through **human centric automation** and **resilience and sustainability** . 

Targettable sectors are garments and other industries, building something affordable is very important if we are targeting SME(Small Medium Enterprises), but how much market share these SME makes up in Sri Lankan context is not known for certain but AI supported research suggests that SME don't make up that much of production compared to large companies. 

Globally, it's validated that predictive maintenance been shown massive turnover for the companies, even some big companies are built on top this idea

 - [Augury](https://www.augury.com/)
 - [Siemens](https://www.siemens.com/global/en/products/services/digital-enterprise-services/analytics-artificial-intelligence-services/senseye-predictive-maintenance.html)

But in Sri Lanka, it doesn't appear to be a solid infrastructure for PdM systems, the closest we could find is [Warens Inc](https://www.wrensinc.com/)

There could be internal PdM systems industries use, but even then, from the experience of people do internships and jobs in manufacturing industries, like Textile industries for example, it's generally agreed that old legacy machines are prominent and they operate in a very in efficient way, and machine failures cause huge downtime. 

>[!warning]
>This aspect need a lot of business analysis since it target industries, we need to make sure whether the stakeholder are willing to incorporate something like this in their system and pay for it. 

## Description of the system

A device that can be mounted on any generic machinery and utilizing sensors  for data collection and TinyML for the edge processing(data sanitization, and if possible inference), an IoT powered dash board(stake holder communication) and alert system(human empowerment). If edge inferencing is not possible, there should be a cloud dependency which is discouraged if we are going for SME.

An example: [Edge Impulse](https://www.edgeimpulse.com/blog/detecting-anomalies-in-industrial-motors-using-edge-impulse-and-nordic-thingy-53/)

Emphasize more on the software and IoT infrastructure that's resilient for future changes, even though industry upgrade cycle is slow compared to general tech world, smart machines are being produced, so having a good software infrastructure makes the product resilient (like OTA updates for extensibility)

Sometimes, privacy concerns are also there, like industrial information security, for that having an edge processing and leaving only the health data outside of the industrial network

## Key Concerns
- [ ] Does it have potential market? (globally yes, locally? )
- [ ] Even if we are doing the project, is it possible to a pilot study and in depth research and surveying