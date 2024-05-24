---
layout: archive
title: "Seeding"
permalink: /portfolio/
author_profile: true
---

<script>
function toggleVisibility(section) {
  var x = document.getElementById(section);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

## <span style="color: green;">[Seeding@Biosystems]$ Intrinsically Disordered Proteins</span>
><button onclick="toggleVisibility('spinMPO')">Enzyme Inhibition: SPIN/MPO</button>
<div id="spinMPO" style="display:none;">
<u>S</u>taphylococcal <u>P</u>eroxidase <u>IN</u>hibitor, SPIN, can bind to Human Myeloperoxidase (MPO) enzyme and inhibits the enzyme activities to prevent immune killing.

<img src="/images/spin.png" alt="SPIN&MPO">

<p>Studies have identified a disorder-to-order transition on SPIN's N-terminal domain (NTD), which functions to inhibit the enzyme activity. However, the details of SPIN's functional mechanisms lack understanding.</p>

<p>Here, we studied two SPIN homologs that present high sequence identity but different inhibitory abilities. By performing atomistic simulations, we discovered different binding and folding mechanisms adopted by two homologs, which could help to explain their functional discrepancies. <a href="https://www.frontiersin.org/articles/10.3389/fmolb.2023.1130189/full">Read more here.</a></p>
</div>

><button onclick="toggleVisibility('cypDp53')">Cellular Regulation: CypD/p53</button>
<div id="cypDp53" style="display:none;">
Cyclophilin D (CypD) is one crucial confirmed component of mitochondrial permeability transition pore (mPTP) regulator, which will be regulated by p53 N-terminal domain (p53-NTD).

<img src="/images/cypd.png" alt="CypD/p53">

<p>Here, we studied the dynamic interactions between p53-NTD and CypD. We observed a p53-NTD binding surface on CypD, which were further identified by NMR experiments. The electornic interactions are found to be the driven forces for CypD/p53-NTD interactions. <a href="https://pubmed.ncbi.nlm.nih.gov/35341741/">Read more here.</a></p>
</div>

><button onclick="toggleVisibility('llps')">Liquid-liquid Phase Separation</button>
<div id="llps" style="display:none;">
Liquid-liquid phase separation (LLPS) is one critical phenomena populated in cells that help biomolecules organization, regulation, and function. There are many signficant factors that may affect biomolecular phase separations. Particularly, the secondary structure dynamics play significant roles in regulating LLPS. 

<img src="/images/llps_2nd.png" alt="LLPS&2nd">

<p>Here, we studied how the dynamics of IDP secondary structures could affect their LLPS properties.</p> 

<video controls width="250">
    <source src="/images/from_cond.mp4" type="video/mp4">
</video>
<video controls width="250">
    <source src="/images/from_disp.mp4" type="video/mp4">
</video>

<p>Our simulations suggests how mutations could affect LLPS by affecting the protein secondary strcutures. <a href="https://pubs.acs.org/doi/full/10.1021/jacs.3c09195">Read more here.</a></p>
</div>

><button onclick="toggleVisibility('ClyA')">Nanopore Tweezer: WNV Proteases</button>
<div id="ClyA" style="display:none;">
The nanopore tweezer is advanced in capturing the conformational dynamics of protein at single molecular level! MD simulations, on the other hand, can offer the significant molecular insights to resolve the current signal related conformations! The combination of two methods can achieve 1+1 >> 2 effects!

<img src="/images/clya.png" alt="clya">

<p>Here, we applied nanopore tweezer as a powerful tool to investigate the conformational dynamics of West Nile Virus NS2B/NS3 proteases, which are potential drug target for WNV infection treatments. Our simulations identified a significant protein binding position on ClyA, which could be specifically engineered to capture NS2B/NS3 dynamics regarding their functional activities. <a href="https://www.biorxiv.org/content/10.1101/2024.05.14.594247v1">Read more here.</a></p>
</div>


## <span style="color: blue;">[Seeding@Methodologies]$ Molecular Dynamics Simulations</span>
<button onclick="toggleVisibility('hyres')">CG Model: HyRes II</button>
<div id="hyres" style="display:none;">
<video controls width="450">
    <source src="/images/hyres_ani_update.mp4" type="video/mp4">
</video>
<p><a href="https://pubs.rsc.org/en/content/articlelanding/2017/cp/c7cp06736d">HyRes, </a><a href="https://pubs.acs.org/doi/full/10.1021/acs.jcim.2c00974">HyRes II.</a></p>

HyRes, the hydrid resolution coarse-grained model, was first developed by <a href="https://scholar.google.com/citations?user=Lz-OnFEAAAAJ">Dr. Liu</a>, with qualitative predictions towards IDP secondary structures. The model has been further optimzied to more quantatatively to study IDP non-specific interactions and secondary structures. 

<p>HyRes II presents high accuracy and performance when studing long-time scale (like <a href="https://pubs.acs.org/doi/full/10.1021/jacs.3c09195">llps.</a>) and complex system dynamics (like <a href="https://www.biorxiv.org/content/10.1101/2024.05.14.594247v1">proteases in ClyA nanopore.</a>).</p>

<p>If you are interested, the model can be achieved at:</p>
<p><a href="https://github.com/lslumass/HyRes_GPU">GitHub_link.</a></p>
<p>HyRes II is now compiled with OpenMM and enabled GPU acceleration!</p>

</div>


<button onclick="toggleVisibility('rest3')">Enhanced sampling methods: REST3</button>
<div id="rest3" style="display:none;">
Replica Exchange with Solute Tempering (REST) is helpful in accelerating the explicited simulations. However, REST2 artifically scaled down the solute-solvent interactions under high temperature conditions, which over-compacted IDPs
<p><img src="/images/rest.png" alt="REST3"></p>
<p>Here, we treat the solue-solvent parameter freely and re-adjust it to approximatedly reproduce the optimal sampling under high temperatures. <a href="https://pubs.acs.org/doi/full/10.1021/acs.jctc.2c01139">Read more here.</a></p>

</div>


