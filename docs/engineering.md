---
sidebar_position: 3
title: Engineering Success
---

import ImageContainer from '@site/src/components/ImageContainer';

<style>
{`
/* Dropdown box styling matching the site's color template */
.engineering-dropdown {
  background: rgba(38, 217, 53, 0.23);
  border: 2px solid var(--ifm-color-primary-lighter);
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 16px rgba(38, 217, 52, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.engineering-dropdown:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(38, 217, 52, 0.2);
  border-color: var(--ifm-color-primary);
}

.engineering-dropdown summary {
  background: transparent;
  color: var(--ifm-color-primary-darkest);
  padding: 1.2rem 1.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.engineering-dropdown summary::after {
  content: "▼";
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.engineering-dropdown[open] summary::after {
  transform: rotate(180deg);
}

.engineering-dropdown summary:hover {
  background: rgba(38, 217, 52, 0.05);
  transform: scale(1.01);
}

.engineering-dropdown-content {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-top: 1px solid rgba(38, 217, 52, 0.2);
}

.engineering-section {
  margin-bottom: 1.8rem;
}

.engineering-section h4 {
  color: var(--ifm-color-primary-darkest);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  padding-left: 1rem;
  border-left: 4px solid var(--ifm-color-primary);
  background: rgba(38, 217, 52, 0.05);
  padding: 0.6rem 1rem;
  border-radius: 0 8px 8px 0;
}

.engineering-section p {
  color: #4a5568;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1rem;
  text-align: justify;
}

.engineering-section ul {
  color: #4a5568;
  padding-left: 1.5rem;
}

.engineering-section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

/* Special styling for different dropdown types - removed icons */

/* Methodology section styling */
.methodology-intro {
  background: linear-gradient(135deg, rgba(38, 217, 52, 0.08) 0%, rgba(217, 38, 203, 0.05) 100%);
  border-radius: 16px;
  padding: 2.5rem;
  margin: 2rem 0;
  border: 1px solid var(--ifm-color-primary-lighter);
}

.methodology-intro h2 {
  background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
}

.methodology-intro p {
  color: #2d3748;
  font-size: 1.15rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 1.5rem;
}
`}
</style>

# Engineering Success

## Design, Build, Test, and Learn

We present a streamlined methodology for developing a dCas9-Dam fusion system to achieve targeted DNA methylation and control gene expression. The approach involves constructing a plasmid for expressing the dCas9-Dam fusion protein with its guide RNA, and a second reporter plasmid where GFP expression is controlled by a methylation-sensitive promoter (dnaAP2). Following co-transfection of E. coli with both plasmids, assays are conducted to confirm targeted methylation by the dCas9-Dam system and its direct effect on enhancing GFP expression.

<div style={{display: 'flex', justifyContent: 'center', margin: '2rem 0'}}>
  <div style={{width: '60%'}}>
    <ImageContainer 
      src="https://static.igem.wiki/teams/5657/experimentalsuccess/dbtl.webp" 
      alt="Engineering Design Cycle" 
      caption="Figure 1: The engineering design cycle guiding our project development"
    />
  </div>
</div>

## CRISPR-dCas9-Dam

Through multiple design and testing iterations, which included troubleshooting PCR contamination and incomplete restriction digestion, we successfully constructed and confirmed two successful recombinant dCas9-Dam plasmids.

<details className="engineering-dropdown crispr-dropdown">
<summary>Iteration 1: Initial dCas9-Dam Fusion Design</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
The design focused on creating a dCas9-Dam fusion protein for programmable DNA methylation. The architecture utilized catalytically inactive Cas9 (dCas9) as a targeting module, fused to the DNA Adenine Methyltransferase (Dam) effector domain. A 15-amino acid Gly-Ser linker was incorporated between the domains to provide flexibility and spacing, ensuring both domains functioned without steric hindrance. The linker and Dam coding sequence were inserted immediately before the dCas9 stop codon to preserve the dCas9 open reading frame and ensure full-length protein expression.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
The pdCas9 plasmid was linearized, and the Dam coding sequence was amplified from the E. coli genome via high-fidelity PCR. Primers were designed with specific overlaps for In-Fusion cloning; the primer for linearizing pdCas9 also encoded the 54-nucleotide Gly-Ser linker sequence. Assembly was performed using the In-Fusion Cloning Kit, which utilizes a proprietary enzyme to generate overhangs, and then native cellular ligase joins overlapping sequences after transformation. The reaction mixture was transformed into competent E. coli cells, yielding the final plasmid construct.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Assembly was tested by colony PCR using lysed colonies. Agarose gel electrophoresis showed intense bands in all sample wells, corresponding to the size of the Dam gene.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The bands were likely due to PCR amplification of the endogenous Dam gene from genomic DNA present in the cell lysate, rather than from the recombinant plasmid. This indicated that plasmid purification should be performed prior to PCR to avoid genomic DNA contamination.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown crispr-dropdown">
<summary>Iteration 2: Plasmid Isolation and PCR Optimization</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
Isolated plasmids were used as templates for PCR to prevent amplification of genomic Dam. Isolated pdCas9 plasmid and genomic DNA from XL1-Blue E. coli served as negative and positive controls, respectively.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
PCR was performed on four isolated recombinant plasmids and two controls. Products were analyzed by gel electrophoresis.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Bands corresponding to the Dam gene were observed in all wells, including the negative control, except for one non-control well.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The absence of a band in one test well indicated the corresponding colony lacked the recombinant plasmid. The band in the negative control indicated potential genomic DNA contamination during plasmid purification, rendering the results inconclusive.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown crispr-dropdown">
<summary>Iteration 3: Restriction Digestion Analysis</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
Screening was performed using BamHI restriction digestion, which yields distinct banding patterns for pdCas9 and dCas9-Dam plasmids. Four putative recombinant plasmids and two pdCas9 controls were digested. Simultaneously, four plasmid isolates were sent for Sanger sequencing.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
The four putative recombinant plasmids and two controls were digested with BamHI and analyzed by gel electrophoresis. Plasmid samples were prepared for Sanger sequencing.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Gel electrophoresis showed no bands; the DNA ladder bands were also faint.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The absence of bands and faint ladder suggested issues with the loading dye or gel preparation.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown crispr-dropdown">
<summary>Iteration 4: Gel Optimization and Sequencing Confirmation</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
Gel electrophoresis was repeated using remaining plasmid samples on a gel with smaller wells.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
Gel electrophoresis was run for the four test plasmids and two pdCas9 controls.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Intense bands corresponding to undigested plasmid were observed, with faint, thin bands beneath all test wells. A minute size difference was noted between two test wells and the other two. Sanger sequencing results were obtained.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The intense bands indicated incomplete digestion, possibly due to reduced enzyme activity or protocol error. The faint bands with slightly larger size suggested the presence of recombinant plasmid. Sanger sequencing confirmed the recombinant plasmid in two of the four samples.
</p>
</div>

</div>
</details>

## Guide RNA Cloning

Despite numerous iterations to optimize the protocol, gRNA was successfully cloned into the pdCas9 plasmid but could not be successfully inserted into the dCas9-Dam plasmid yet.

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 1: Initial gRNA Design and Cloning Attempt</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
A 30 nt guide sequence targeting the dnaAP2 promoter was designed using CHOPCHOP software. The guide was chosen to bind upstream of the promoter to avoid CRISPR interference and position the Dam methyltransferase optimally relative to GATC sites. Complementary single-stranded DNA oligos were synthesized. We would insert our gRNA through restriction enzyme digestion followed by ligation. However, the BsaI enzyme we had available to us was from the year 2010 and therefore had very low activity. While waiting for new enzyme procurement, we decided to alter our protocol to optimize for yield of digested plasmid with the current enzyme stock.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
The oligos were annealed to form a double-stranded DNA spacer. The pdCas9 plasmid was digested with [expired] BsaI.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Nanodrop spectrometry indicated a very low concentration of the linearized pdCas9 plasmid, with purity values suggesting contamination.
</p>
<ul>
<li>Concentration = 3.5 ng/µL</li>
<li>A260/280 = 2.0</li>
</ul>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The low concentration and purity indicated inefficient digestion, attributed to the expired BsaI enzyme.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 2: Protocol Optimization and Colony Screening</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
The digestion protocol was scaled up to obtain a higher concentration of linearized plasmid. The plasmid purification protocol was modified: Elution Buffer was heated to 70°C, and elution was performed in two steps.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
pdCas9 was digested and purified using the modified protocols. The same expired BsaI was used at a higher concentration. The linearized pdCas9 was ligated with the annealed gRNA oligos. The ligation mixture was transformed into XL1-Blue competent cells.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
The purified linear pdCas9 showed satisfactory concentration and purity.
</p>
<ul>
<li>Concentration = 48.2 ng/µL</li>
<li>A260/A280 = 1.85</li>
</ul>
<p>
Transformation yielded a high number of colonies. Colony PCR using repurposed primers showed thick bands in nearly all samples except negative controls, creating ambiguity.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The repurposed primers were suboptimal: one had low GC content (low melting temperature), the other showed self-annealing, and their melting points were far apart, leading to non-specific binding. The small amplicon size and large primers complicated distinction between amplicon and primer-dimers. Excess DNA loading and low gel resolution contributed to unclear results.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 3: PAGE Electrophoresis for Resolution</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
PAGE electrophoresis was chosen for its superior resolution for small DNA fragments, allowing distinction between the PCR amplicon and primer-dimers. The DNA loading amount was reduced to obtain thinner bands for better resolution.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
PAGE electrophoresis was performed with three putative recombinant colony samples and one negative control (water).
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
All samples, including the control, showed an identical band at the same location.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
These bands were primer-dimers, confirming the absence of recombinant plasmid. This suggested the expired BsaI enzyme did not digest the plasmid.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 4: Digestion Analysis</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
Gel electrophoresis was used to analyze the digestion mix, expecting separated bands for linearized and circular pdCas9.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
PCR cleanup was performed on the digestion mix. Gel electrophoresis was run with the digestion mix, ligation mix, and four pdCas9 samples.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Broad bands were observed for pdCas9 wells, a faint band at ~10kb for the digestion mix, and no band for the ligation mix.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
Broad bands were caused by excess DNA loading. The faint or absent bands in the digestion and ligation mixes indicated very low DNA concentration, preventing conclusions about digestion efficiency.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 5: DNA Loading Optimization</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
The gel electrophoresis protocol was optimized by loading approximately 100ng of DNA per well.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
Gel electrophoresis was run with circular pdCas9 and the digestion mix.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
The circular pdCas9 well showed an intense broad band at ~10kb. The digestion mix well showed an intense broad band with a thin band below at ~9.3kb and a band near the well.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The thin band at ~9.3kb indicated the presence of linearized plasmid, constituting less than 10% of the DNA. The band near the well was unexplained, possibly a DNA-BsaI complex contamination.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 6: Enhanced Digestion Protocol</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
The digestion protocol was modified: BsaI concentration and incubation time were increased. Ligation was performed at plasmid:insert ratios of 1:600 and 1:60, with a no-insert control. A hypothesis was that the control plate would show fewer colonies due to linear DNA.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
Digestion was performed with the optimized protocol. Ligation was carried out at the two ratios.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Transformation of the ligation and digestion mixes yielded a high number of colonies on all plates.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The high colony count after transforming the digestion mix indicated very low digestion yield.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 7: Protocol Refinement and Transformation Error</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
Digestion protocol was altered: DNA concentration was reduced tenfold, and incubation time was extended to two days to increase the proportion of digested DNA. The ligation plasmid:insert ratio was set to 1:5.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
The concentration of linearized plasmid from the previous digestion was confirmed to be low (7ng/µL). Ligation was performed at a 1:5 ratio using a diluted oligonucleotide insert (0.01µM). The ligation mixture and a control (ligation mix without oligos) were transformed into competent E. coli.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Both the control and ligation mix plates showed zero colonies.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
A transformation error occurred: antibiotics were added prematurely before the required one-hour pre-plating incubation for plasmid integration, preventing cell recovery. Subsequent work proceeded with a new BsaI enzyme.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 8: Fresh Enzyme and Successful Digestion</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
A non-expired BsaI-HFv2 enzyme was obtained. A test digestion of pdCas9 was performed to confirm activity. gRNA cloning was attempted in both pdCas9 and dCas9-Dam plasmids.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
Four dCas9-Dam plasmids and one pdCas9 plasmid were digested with BsaI-HFv2 and analyzed by gel electrophoresis. After confirming activity, large-scale digestion was performed. Linearized plasmids were purified and ligated with the gRNA oligos, including a no-plasmid control. The mixtures were transformed and plated.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Gel electrophoresis showed bands corresponding to the expected fragments from BsaI digestion. The test and control plates showed an equal, but low, number of colonies.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The fragment pattern indicated complete digestion, confirming enzyme activity. The equal colony count between test and control plates suggested no successful cloning; colony PCR was not performed, and gRNA cloning was repeated.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 9: Golden Gate Assembly Approach</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
gRNA cloning was attempted via Golden Gate assembly, utilizing the type IIS properties of BsaI to combine digestion and ligation.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
Golden Gate assembly was performed by mixing the dCas9-Dam vector, BsaI, T4 ligase, and the oligonucleotide insert. The reaction mixture was transformed into XL1-Blue cells and plated on selective media. Putative colonies were screened by colony PCR, and positive samples were sent for Sanger sequencing.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Test and control plates had a similar number of colonies. Colony PCR indicated clear positive results for gRNA cloning into pdCas9, but ambiguous results for dCas9-Dam.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The uncertain recombination into dCas9-Dam prompted repeated colony PCR.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown grna-dropdown">
<summary>Iteration 10: Final Screening and Results</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
Colony PCR was repeated for dCas9-Dam to screen a larger number of colonies. Previously ambiguous colonies were sent for Sanger sequencing.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
Colony PCR for gRNA insertion in dCas9-Dam was repeated. PCR products were tested by gel-electrophoresis.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
PCR products were analyzed by agarose gel electrophoresis. No bands corresponding to successful insertion were observed.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
No positive results were obtained for gRNA insertion into dCas9-Dam.
</p>
</div>

</div>
</details>

## Reporter Plasmid (dnaAP2-GFP)

The dnaAP2-GFP reporter plasmid was successfully used to confirm that GFP expression was present in both Dam(+) and Dam(-) cells, although at lower levels in Dam(-) cells, demonstrating the functionality of the dnaAP2 promoter.

<details className="engineering-dropdown reporter-dropdown">
<summary>Iteration 1: Reporter Plasmid Construction and Validation</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
The methylation-sensitive dnaAP2 promoter from the E. coli dnaA operon was selected for the reporter plasmid. The dnaA operon sequence was modified by removing the dnaAP1 promoter and mutating repressor-binding sites to isolate the methylation effect. The gfp-Mut2 sequence was incorporated.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
The custom dnaAP2-GFP plasmid in a pET-blank backbone was synthesized. The plasmid was transformed into XL1-Blue E. coli and isolated.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
Plasmid presence was confirmed by gel electrophoresis.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
Agarose gel electrophoresis showed bands at expected positions, confirming the dnaAP2-GFP plasmid.
</p>
</div>

</div>
</details>

## Fluorescence Assay

<details className="engineering-dropdown fluorescence-dropdown">
<summary>Iteration 1: Initial Fluorescence Testing</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
GFP expression from the dnaAP2-GFP reporter plasmid was tested in Dam(+) XL1-Blue cells using fluorescence spectroscopy.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
XL1-Blue cells transformed with dnaAP2-GFP and untransformed cells were pelleted, suspended at appropriate dilutions, and analyzed using a microplate reader.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
OD600 and fluorescence values were measured for all samples.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The transformed cell pellet was visibly greener, indicating GFP expression. More diluted samples showed higher fluorescence/OD600 ratios, indicative of fluorescence quenching, preventing direct comparison of normalized values.
</p>
</div>

</div>
</details>

<details className="engineering-dropdown fluorescence-dropdown">
<summary>Iteration 2: Comparative Analysis with Dam(-) Strains</summary>
<div className="engineering-dropdown-content">

<div className="engineering-section">
<h4>Design</h4>
<p>
The dnaAP2-GFP plasmid was transformed into Dam(-) E. coli. Fluorescence was measured for both Dam(-) and Dam(+) cells within a narrow OD600 range to mitigate quenching effects.
</p>
</div>

<div className="engineering-section">
<h4>Build</h4>
<p>
Cell pellets for Dam(-) and Dam(+) cells, transformed and untransformed, were prepared. Suspensions were loaded into a microplate, and OD600 and fluorescence were measured. Fluorescence intensities were normalized to OD600.
</p>
</div>

<div className="engineering-section">
<h4>Test</h4>
<p>
The Dam(+) cell pellet was visibly greener than the Dam(-) pellet. Fluorescence intensity in Dam(+) cells was approximately five-fold higher than in Dam(-) cells.
</p>
</div>

<div className="engineering-section">
<h4>Learn</h4>
<p>
The visual differences in the cell pellet and the quantitative differences in fluorescence showed reduced GFP expression in Dam(-) cells. Our promoter's capability to express GFP in Dam(-) as well as Dam(+) cells was confirmed.
</p>
</div>

</div>
</details>
