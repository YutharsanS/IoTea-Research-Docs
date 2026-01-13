Resource - M. Wang _et al._, “Predicting the Degree of Fresh Tea Leaves Withering Using Image Classification Confidence,” _Foods_, vol. 14, no. 7, p. 1125, Mar. 2025, doi: https://doi.org/10.3390/foods14071125.


## Model 
- - -

1. Capture image and moisture content in 13 time intervals
2. Label and augment image
3. Train model
	--
4. Upgrade to RFA (Receptive-Field Attention) Convolution - Dynamically adjusting the focus field to allow model to learn local features accurately.
5. C2f module upgraded to C2f_CA (Cross-Stage Feature Fusion Coordinate Attention) - Reduce information loss ![[C2ftoC2f_CA__YOLOV8.png]]

	- Weighted calculation
	- 77.1% to 92.7% accuracy from 4. and 5. upgrades
	- made real-time (5.3 ms)
	- Outperformed Partial Least Squares and CNN
