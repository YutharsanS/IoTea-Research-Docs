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

The process was assumed to be adiabatic and reversible, with negligible heat transfer by conduction between leaves and no hysteresis effect between moisture isotherms.

Don't mention what kind of sensors they used, but made their own setup.
![[trough withering setup schematic.png]]

Model seems to be pretty accurate, according to the Standard Errors shown in results.
![[standard error of model.png]]

Software used: QBASIC