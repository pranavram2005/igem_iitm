---
sidebar_position: 2
title: Project Description
slug: /project-description
---

import ImageContainer from '@site/src/components/ImageContainer';

# Project Description

## The Problem

Epigenetics is central to cellular identity, gene expression regulation, and genome stability. Misregulated epigenetic states can cause diverse problems like metabolic bottlenecks in biomanufacturing (e.g., inconsistent production of recombinant proteins) to human diseases such as cancer, neurodevelopmental disorders, and autoimmune conditions.

A key epigenetic mechanism is DNA methylation, which influences gene regulation, DNA replication, and genome stability. In bacteria, methylation is primarily mediated by Dam (DNA adenine methyltransferase), whereas in eukaryotes it is carried out by DNMTs (DNA methyltransferases).

Since epigenetics controls so many essential processes, researchers have developed several innovative systems to achieve locus-specific methylation. Early approaches included Zinc Finger–Dam fusions, which enabled targeted methylation but required complex protein engineering for each new target site, making adaptation to new systems both challenging and resource-intensive. Subsequently, TAL Effector–Dam fusions emerged as a better alternative; however, these systems proved time-consuming to design and presented substantial scalability issues when considering genome-wide applications.

The limitations inherent in these systems underscore a critical gap in the field and highlight the need for a modular, easily programmable system capable of controlling epigenetic marks with greater precision, efficiency, and scalability.

<ImageContainer 
  src="/img/project-overview.svg" 
  alt="Project Overview Diagram" 
  caption="Figure 1: Overview of epigenetic challenges in biomanufacturing and our EPIC System approach"
  width="100%"
/>

## Inspiration

The inspiration for the EPIC System originated from discussions with biomanufacturing researchers at IIT Madras, highlighting a specific technical inefficiency in industrial recombinant protein production, particularly when using mammalian cell lines.

### The DHFR Amplification Bottleneck

Industrial-scale production of biologics requires methods to ensure high plasmid copy numbers and sustained recombinant protein expression. A common strategy involves Dihydrofolate Reductase (DHFR) gene amplification:

1. The gene of interest is cloned into an expression plasmid along with the DHFR gene, which serves as a selectable marker.
2. The host cell line is genetically modified to be DHFR-deficient.
3. Cells are cultured in a DHFR-deficient medium and treated with a selective agent (like Methotrexate), forcing the cell to rely on the plasmid-borne DHFR for survival.

This technique is highly effective for increasing plasmid uptake and gene copy number, leading to the desired high-level expression of the therapeutic protein.

### The Technical Flaw and Metabolic Cost

The success of DHFR amplification introduces a significant metabolic load: while the production of the recombinant protein is amplified, the unnecessary co-production of excessive DHFR also increases. This over-expression of a non-target gene consumes vital cellular resources (nucleotides, amino acids, energy), placing a substantial metabolic burden on the already stressed industrial cell line. This metabolic drain reduces overall cell viability and increases purification costs.

### The Challenge of Long-Term Silencing

Furthermore, a second major challenge exists in prolonged cell culture: epigenetic drift. During prolonged cell culture, highly amplified recombinant genes undergo progressive CpG methylation, establishing repressive chromatin marks that gradually silence target protein expression. This epigenetic drift causes batch-to-batch inconsistency and forces premature termination of expensive production runs.

### Local Problem

This metabolic inefficiency goes beyond mammalian cells and extends to prokaryotes as well (like E. coli). This greatly increases the overall cost of production. This technical challenge is acutely felt in India. The high production costs, driven partly by inefficiencies like this persistent metabolic burden, makes many essential biologics unaffordable for the mass population. Consequently, a significant portion of complex, high-value biologics continues to be imported.

Our EPIC System is designed to address this by providing a mechanism to decouple increased production from over-expression of non-target genes. This system can significantly reduce production costs, thereby improving the biomanufacturing sector in India and aiding the national mission of Atmanirbhar Bharat (Self-Reliant India).

## Our Solution: EPIC System

To solve process inefficiency and metabolic burden in biomanufacturing, we need modular, fine-resolution tuning of gene expression. Current epigenetic tools like Zinc Fingers and TAL Effectors are impractical for industrial use. Designing zinc fingers for every gene target is extremely difficult, time-consuming, and relies heavily on trial-and-error optimization, making scalable applications unfeasible.

While the DHFR amplification bottleneck exemplifies metabolic inefficiencies in mammalian cell biomanufacturing, similar gene expression optimization challenges exist across both prokaryotic and eukaryotic production platforms. However, eukaryotic epigenetic systems are significantly more characterized—dCas9-DNMT3A and dCas9-TET1 platforms for site-specific methylation and demethylation are well-established tools. In contrast, prokaryotic methylation-based gene regulation remains poorly understood and standardized, despite E. coli being a cornerstone of industrial biomanufacturing.

To overcome this critical limitation, we developed the EPIC System: a CRISPR-based platform combining catalytically dead Cas9 (dCas9) with Dam methyltransferase. Our system can target any genomic site using simple guide RNAs, eliminating complex protein engineering requirements. This provides precise, flexible DNA methylation control that scales easily across multiple targets, offering a versatile tool for industrial epigenetic modifications.

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '2rem 0'}}>
  <div style={{flex: '1', minWidth: '300px'}}>
    <ImageContainer 
      src="/img/solution-diagram.svg" 
      alt="EPIC System Architecture" 
      caption="Figure 2: EPIC System architecture showing dCas9-Dam fusion and guide RNA targeting"
      width="100%"
    />
  </div>
  <div style={{flex: '1', minWidth: '300px'}}>
    <ImageContainer 
      src="/img/biological-pathway.svg" 
      alt="DNA Methylation Pathway" 
      caption="Figure 3: DNA methylation pathway and its effects on gene expression in prokaryotes"
      width="100%"
    />
  </div>
</div>

### System Development and Characterization

To develop a foundational modular epigenetic toolkit for prokaryotes, we focused on characterizing dCas9-Dam functionality as the first critical step. Unlike eukaryotic systems, the effects of targeted methylation on prokaryotic gene expression lack comprehensive characterization. Based on literature review, we selected the dnaA promoter as our methylation-sensitive target—originally a composite promoter involving dnaA1p and dnaA2p forming an autoregulatory feedback loop. To enhance methylation susceptibility, we isolated the dnaA2p region, which contains multiple Dam methylation sites, making it more responsive to targeted epigenetic modifications.

### System Components

Our solution comprises two key components: a programmable methylation system (dCas9-linker-Dam) and a methylation-responsive reporter system (DnaAP2-GFP).

**dCas9-Linker-Dam Construction:** The methylation system was assembled using infusion cloning with specific primers to amplify the Dam gene from E. coli. A 15 amino acid glycine-serine peptide linker was engineered between dCas9 and Dam to ensure proper protein folding while maintaining functional activity of both domains. Guide RNAs were cloned using restriction enzyme-based methods to enable targeted localization to specific genomic sites.

**DnaAP2-GFP Reporter System:** For readout, we utilized the DnaAP2 promoter, which contains five GATC sites in close proximity and is naturally upregulated by DNA methylation. To isolate methylation effects, the DnaAP1 region was removed and transcriptional repressor binding sites were mutated, allowing examination of methylation-dependent regulation independent of other regulatory mechanisms.

<ImageContainer 
  src="/img/impact-visualization.svg" 
  alt="Expected Impact of EPIC System" 
  caption="Figure 4: Potential impact of EPIC System on biomanufacturing efficiency and cost reduction"
  width="80%"
  className="center"
/>

