---
layout: archive
title: "Research"
permalink: /portfolio/
author_profile: true
research_page: true
---

<div class="research-terminal" id="research-map">
  <div class="terminal-bar" aria-hidden="true"><span></span><span></span><span></span><strong>yumeng@mechanistic-biophysics</strong></div>
  <div class="terminal-body">
    <p class="terminal-run"><span class="terminal-prompt">$</span> ./mechanistic-biophysics --integrate force-field AI</p>
    <div class="terminal-diagram-grid">
    <pre class="mechanistic-pipeline" aria-label="Force-field molecular dynamics and artificial intelligence connect protein ensembles to interactions, function, and disease">
 [ FORCE FIELD / MD ]                    [ AI / ML ]
 U(r) = U_bonded + U_nonbonded              [o_o]
          F = -grad U                        /|_|\
               \                              /
                +-------------+--------------+
                              v
                    [ PROTEIN ENSEMBLES ]
                              v
        [ INTERACTIONS -&gt; FUNCTION -&gt; DISEASE ]</pre>
    <pre class="biomolecule-pipeline" aria-label="A dynamic protein conformational ensemble leads to specific binding, dynamic binding, and condensate formation">
 [ PROTEIN INTERACTION MODES ]

 CONFORMATIONAL ENSEMBLE
 states: ~\/\~   ~~\_/~   ~/\/~~
                 |
         +-------+-------+
         ↓       ↓       ↓
     SPECIFIC  DYNAMIC  CONDENSATE
       ~\/\~    ~\/\~   ( ~\/\~  ~~ )
        ||      . . .   ( ~~  ~\_/~ )
      [====]   ~~\_/~   ( ~/\/~~  ~~ )</pre>
    </div>
    <p class="terminal-output"><span>status:</span> resolving molecular mechanisms across biological scales</p>
  </div>
</div>

<nav class="research-map" aria-label="Research focus areas">
  <a href="#disease-relevant-biophysics"><span class="research-map__icon">DB</span><strong>Disease-Relevant Biophysics</strong><small>Neurodegeneration · cancer · PTM · immunology</small></a>
  <a href="#protein-dynamics-interactions"><span class="research-map__icon">PPI</span><strong>Protein Dynamics & Interactions</strong><small>Phase separation · p53 · viral proteins</small></a>
  <a href="#multiscale-modeling"><span class="research-map__icon">MD</span><strong>Multiscale Molecular Modeling</strong><small>Atomistic · enhanced sampling · CG · theory</small></a>
  <a href="#md-machine-learning"><span class="research-map__icon">ML</span><strong>MD + ML</strong><small>Protein language models · learned force fields</small></a>
</nav>

<section class="research-track" id="disease-relevant-biophysics">
  <header class="research-track__header">
    <span class="terminal-command">[research@disease]$</span>
    <h2>Disease-Relevant Biophysics</h2>
    <p>Mechanistic studies linking protein dynamics, molecular interactions, and biomolecular organization to disease and regulation.</p>
  </header>

  <details class="research-topic" id="neurodegeneration">
    <summary><span class="topic-prompt">01</span><span><strong>Neurodegeneration</strong><small>Protein structure, interactions, and condensate organization</small></span><span class="topic-count">3 papers</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://pubs.acs.org/doi/10.1021/jacs.3c09195"><span class="publication-venue">JACS</span><span><strong>Toward Accurate Simulation of Coupling between Protein Secondary Structure and Phase Separation</strong><small>Journal of the American Chemical Society, 2024</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://portlandpress.com/biochemsoctrans/article/52/1/319/234050/Backbone-interactions-and-secondary-structures-in"><span class="publication-venue">BST</span><span><strong>Backbone Interactions and Secondary Structures in Phase Separation of Disordered Proteins</strong><small>Biochemical Society Transactions, 2024</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://pubs.acs.org/doi/10.1021/jacs.6c04891"><span class="publication-venue">JACS</span><span><strong>A Glimpse into the Initial Microsecond of Biomolecular Condensation</strong><small>Journal of the American Chemical Society, 2026</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="cancer">
    <summary><span class="topic-prompt">02</span><span><strong>Cancer</strong><small>p53 regulation and disease-associated protein mechanisms</small></span><span class="topic-count">2 papers</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://www.sciencedirect.com/science/article/abs/pii/S0022283622001267"><span class="publication-venue">JMB</span><span><strong>Intrinsically Disordered N-terminal Domain of p53 Interacts with Mitochondrial PTP Regulator Cyclophilin D</strong><small>Journal of Molecular Biology, 2022</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12410095/"><span class="publication-venue">BIOC</span><span><strong>Coarse-Grained Simulations of Phosphorylation Regulation of p53 Autoinhibition</strong><small>Biochemistry, 2025</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="ptm">
    <summary><span class="topic-prompt">03</span><span><strong>Post-Translational Modification</strong><small>Phosphorylation-dependent regulation of protein ensembles</small></span><span class="topic-count">1 paper</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12410095/"><span class="publication-venue">BIOC</span><span><strong>Coarse-Grained Simulations of Phosphorylation Regulation of p53 Autoinhibition</strong><small>Biochemistry, 2025</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="immunology">
    <summary><span class="topic-prompt">04</span><span><strong>Immunology</strong><small>Bacterial immune evasion and viral protease dynamics</small></span><span class="topic-count">2 papers</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://www.frontiersin.org/journals/molecular-biosciences/articles/10.3389/fmolb.2023.1130189/full"><span class="publication-venue">FMB</span><span><strong>Coupled Binding and Folding of Disordered SPIN N-terminal Region in Myeloperoxidase Inhibition</strong><small>Frontiers in Molecular Biosciences, 2023</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://www.cell.com/biophysj/fulltext/S0006-3495(24)00740-9"><span class="publication-venue">BPJ</span><span><strong>Tracking Flaviviral Protease Conformational Dynamics by Tuning Single-Molecule Nanopore Tweezers</strong><small>Biophysical Journal, 2025</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <a class="return-to-map" href="#research-map">↑ Return to research map</a>
</section>

<section class="research-track" id="protein-dynamics-interactions">
  <header class="research-track__header">
    <span class="terminal-command">[research@dynamics]$</span>
    <h2>Protein Dynamics & Interactions</h2>
    <p>How conformational ensembles and molecular interactions regulate recognition, catalysis, phase behavior, and biological function.</p>
  </header>

  <details class="research-topic" id="phase-separation">
    <summary><span class="topic-prompt">01</span><span><strong>Phase Separation</strong><small>Structure, molecular grammar, and condensate dynamics</small></span><span class="topic-count">3 papers</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://pubs.acs.org/doi/10.1021/jacs.3c09195"><span class="publication-venue">JACS</span><span><strong>Toward Accurate Simulation of Coupling between Protein Secondary Structure and Phase Separation</strong><small>Journal of the American Chemical Society, 2024</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://portlandpress.com/biochemsoctrans/article/52/1/319/234050/Backbone-interactions-and-secondary-structures-in"><span class="publication-venue">BST</span><span><strong>Backbone Interactions and Secondary Structures in Phase Separation of Disordered Proteins</strong><small>Biochemical Society Transactions, 2024</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://pubs.acs.org/doi/10.1021/jacs.6c04891"><span class="publication-venue">JACS</span><span><strong>A Glimpse into the Initial Microsecond of Biomolecular Condensation</strong><small>Journal of the American Chemical Society, 2026</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="p53">
    <summary><span class="topic-prompt">02</span><span><strong>p53</strong><small>Dynamic interactions and phosphorylation-regulated ensembles</small></span><span class="topic-count">2 papers</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://www.sciencedirect.com/science/article/abs/pii/S0022283622001267"><span class="publication-venue">JMB</span><span><strong>Intrinsically Disordered N-terminal Domain of p53 Interacts with Mitochondrial PTP Regulator Cyclophilin D</strong><small>Journal of Molecular Biology, 2022</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12410095/"><span class="publication-venue">BIOC</span><span><strong>Coarse-Grained Simulations of Phosphorylation Regulation of p53 Autoinhibition</strong><small>Biochemistry, 2025</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="viral-proteins">
    <summary><span class="topic-prompt">03</span><span><strong>Viral & Pathogen-Associated Proteins</strong><small>Enzyme inhibition and conformational dynamics</small></span><span class="topic-count">2 papers</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://www.frontiersin.org/journals/molecular-biosciences/articles/10.3389/fmolb.2023.1130189/full"><span class="publication-venue">FMB</span><span><strong>Coupled Binding and Folding of Disordered SPIN N-terminal Region in Myeloperoxidase Inhibition</strong><small>Frontiers in Molecular Biosciences, 2023</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://www.cell.com/biophysj/fulltext/S0006-3495(24)00740-9"><span class="publication-venue">BPJ</span><span><strong>Tracking Flaviviral Protease Conformational Dynamics by Tuning Single-Molecule Nanopore Tweezers</strong><small>Biophysical Journal, 2025</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <a class="return-to-map" href="#research-map">↑ Return to research map</a>
</section>

<section class="research-track" id="multiscale-modeling">
  <header class="research-track__header">
    <span class="terminal-command">[research@simulation]$</span>
    <h2>Multiscale Molecular Modeling</h2>
    <p>Physics-based and data-informed methods for accurate, efficient simulation of folded, disordered, and assembling biomolecular systems.</p>
  </header>

  <details class="research-topic" id="atomistic-modeling">
    <summary><span class="topic-prompt">01</span><span><strong>Atomistic Model Development</strong><small>Protein-water balance and transferable interactions</small></span><span class="topic-count">1 paper</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12013860/"><span class="publication-venue">JPCB</span><span><strong>Likely Over-Stabilization of Charge-Charge Interactions in CHARMM36m(w): A Case for a99SB-disp Water</strong><small>Journal of Physical Chemistry B, 2024</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="enhanced-sampling">
    <summary><span class="topic-prompt">02</span><span><strong>Enhanced Sampling</strong><small>Replica exchange, multiscale acceleration, and complex conformational dynamics</small></span><span class="topic-count">3 papers</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://www.cell.com/biophysj/fulltext/S0006-3495(24)00740-9"><span class="publication-venue">BPJ</span><span><strong>Tracking Flaviviral Protease Conformational Dynamics by Tuning Single-Molecule Nanopore Tweezers</strong><small>Biophysical Journal, 2025</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10795075/"><span class="publication-venue">JCTC</span><span><strong>Re-balancing Replica Exchange with Solute Tempering for Sampling Dynamic Protein Conformations</strong><small>Journal of Chemical Theory and Computation, 2023</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://www.biorxiv.org/content/10.64898/2026.06.10.731384v1"><span class="publication-venue">MOFF2</span><span><strong>MOFF2: A Transferable Coarse-Grained Protein Force Field for Predictive Condensate Simulations</strong><small>bioRxiv, 2026</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="coarse-grained-modeling">
    <summary><span class="topic-prompt">03</span><span><strong>Coarse-Grained Model Development</strong><small>Transferable force fields for dynamic protein systems</small></span><span class="topic-count">2 papers</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://pubs.acs.org/doi/10.1021/acs.jcim.2c00974"><span class="publication-venue">JCIM</span><span><strong>Towards Accurate Coarse-Grained Simulations of Disordered Proteins and Their Dynamic Interactions</strong><small>Journal of Chemical Information and Modeling, 2022</small></span><span class="publication-arrow">↗</span></a>
      <a class="publication-item" href="https://www.biorxiv.org/content/10.64898/2026.06.10.731384v1"><span class="publication-venue">MOFF2</span><span><strong>MOFF2: A Transferable Coarse-Grained Protein Force Field for Predictive Condensate Simulations</strong><small>bioRxiv, 2026</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="off-lattice-theory">
    <summary><span class="topic-prompt">04</span><span><strong>Theory & Off-Lattice Modeling</strong><small>Valency, molecular organization, and phase behavior</small></span><span class="topic-count">1 paper</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://www.biorxiv.org/content/10.64898/2026.08.02.742325v1"><span class="publication-venue">THEORY</span><span><strong>Valency-Limited Molecular Dynamics Simulations of Stickers-and-Spacers Polymers Reveal a Tradeoff Between Condensation and Organization</strong><small>bioRxiv, 2026</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <a class="return-to-map" href="#research-map">↑ Return to research map</a>
</section>

<section class="research-track" id="md-machine-learning">
  <header class="research-track__header">
    <span class="terminal-command">[research@ml]$</span>
    <h2>MD + ML</h2>
    <p>Interpretable and physics-aware learning approaches for biomolecular sequence, molecular interactions, conformational ensembles, and function.</p>
  </header>

  <details class="research-topic" id="protein-language-models">
    <summary><span class="topic-prompt">01</span><span><strong>Protein Language Models</strong><small>Evolutionary fitness and molecular grammar of disordered proteins</small></span><span class="topic-count">1 paper</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://elifesciences.org/reviewed-preprints/105309"><span class="publication-venue">eLife</span><span><strong>Protein Language Model Identifies Disordered, Conserved Motifs Implicated in Phase Separation</strong><small>eLife Reviewed Preprint, 2025</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <details class="research-topic" id="moff2">
    <summary><span class="topic-prompt">02</span><span><strong>MOFF2</strong><small>Machine-learning-integrated, physics-grounded protein modeling</small></span><span class="topic-count">1 paper</span></summary>
    <div class="publication-list">
      <a class="publication-item" href="https://www.biorxiv.org/content/10.64898/2026.06.10.731384v1"><span class="publication-venue">MOFF2</span><span><strong>MOFF2: A Transferable Coarse-Grained Protein Force Field for Predictive Condensate Simulations</strong><small>bioRxiv, 2026</small></span><span class="publication-arrow">↗</span></a>
    </div>
  </details>

  <a class="return-to-map" href="#research-map">↑ Return to research map</a>
</section>
