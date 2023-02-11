---
## [Seeding@Biosytem_I]$ SPIN/MPO

<u>S</u>taphylococcal <u>P</u>eroxidase <u>IN</u>hibitor, SPIN, can bind to Myeloperoxidase (MPO) and inhibits MPO's activity while folding to a hairpin. 
![SPIN&MPO](/images/spin.png)
Here, we studied two SPINs that showed high sequence identity but different inhibitory abilities with atomistic simulations.

[SPIN&MPO](/images/spin_over.png)

## [Seeding@Biosytem_II]$ CypD/p53-NTD

Cyclophilin D (CypD) is the only confirmed component of mitochondrial permeability transition pore (mPTP) that will be regulated by p53 N-terminal domain (p53-NTD).
![CypD/p53](/images/cypd.png)
Here, we used a CG force field (HyRes) to study the dynamics between p53-NTD and CypD, including the hot spots on CypD surface, the driven force and the conformational changes of p53-NTD. One can go to [ref](https://reader.elsevier.com/reader/sd/pii/S0022283622001267?token=8FEB5F470DD7EE679C79BCF9C63E6067437084C7C0B5165257730E7D2A802AAA9A69D34BADFB1A5175CF6B7DCAE0E740&originRegion=us-east-1&originCreation=20220627202131) for more detailed reading :3

[CypD/p53](/images/cypd_over.png)

## [Seeding@Biosytem_III]$ KCNQ/CAM

KCNQ can undergo belt<->straight conformational changes upon CAM's regulations. Such regulation is related to the 'AO' (Activate open)/'IO' (intermediate open) states of KCNQ. 
![KCNQ](/images/kcnq.png)
Here, we... we plan to study the NTD effects in CAM/KCNQ bindings! (though I did little work QAQ)

A story TBD :3

## [Seeding@Biosytem_IV]$ ClyA/Proteases

The nanopore tweezer is advanced in capturing the conformational dynamics of protein at single molecular level! MD simulations, on the other hand, can uniquely offer the insights to resolve those possible conformations! 1+1 >> 2 
![ClyA](/images/clya.png)
Here, we used GPU_accelerated HyRes II model in studying the ClyA/Proteases system, and focused on one critical mutation. We all look forward to the experimental data for identification!
[Possible Configurations](/images/clya_over.png)

## [Seeding@Methodology_I]$ HyRes II

[HyRes](https://pubs.rsc.org/en/content/articlelanding/2017/cp/c7cp06736d) is a powful corse-grained force field to drive faster MSES samplings for IDPs with much accurate secondary structure descriptions. However, HyRes proved to over-collasped IDPs especially for moderate sized ones due to the lacking of solvation term.
![HyRes](/images/hyres.png)
Here, we recalibrate the force field, which now can capture the long-range non-specific interactions of IDPs with high accuracy.

[HyRes II](/images/HyRes_intro.pdf)

## [Seeding@Methodology_II]$ REST3

Replica Exchange with Solute Tempering (REST) is helpful in accelerating the explicited simulations. However, REST2 artifically scaled down the solute-solvent interactions under high temperature conditions, which over-compacted IDPs
![REST](/images/rest.png)
Here, we treat the solue-solvent parameter freely and re-adjust it to approximatedly reproduce the optimal sampling under high temperatures.

[REST3](/images/REST_intro.pdf)

## [Seeding@Biosystem]$ LLPS

Try to study the liquid-liqudi phase separation behavior using HyRes II model. We are interested in: mutation effects, IDP roles, and the separation dynamics.

<iframe width="716" height="525" src="https://www.youtube.com/embed/WAdvFVA7R0g" title="Liquid-liquid Phase Separation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



