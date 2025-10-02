---
sidebar_position: 3
title: Notebook
slug: /notebook
---

# Lab Notebook

Our complete laboratory notebook documenting daily activities, observations, and experimental progress throughout the EPIC System development.

## Lab Timeline Overview

This notebook chronicles our journey from initial plasmid isolation through the complete characterization of our dCas9-Dam system and fluorescence assays. Each month's work is organized below with detailed daily entries.

## Monthly Lab Activities

<details style={{backgroundColor: '#f0f8f0', border: '1px solid #d4edda', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden'}}>
<summary style={{backgroundColor: '#28a745', color: 'white', padding: '12px 16px', margin: '0', cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px 8px 0 0', transition: 'background-color 0.3s ease'}}><strong>📅 June 2025 - Project Foundation</strong></summary>

<div style={{padding: '16px', backgroundColor: 'white'}}>

### June 9th (Monday) - Primary Isolation and Purification of pdCas9 plasmid

**Culturing of cells with pdCas9**
- Stab culture (Shipped from Addgene) having the pdCas9 streaked on agar plates 
- Incubated the streaked plates at 37℃ (~16 hrs)

### June 10th (Tuesday) - Primary Isolation and Purification of pdCas9 plasmid

**Culturing of cells with pdCas9**
- Liquid culture supplemented with Chloramphenicol incubated at 37℃ at 180 rpm for 16 hours

### June 11th (Wednesday) - Primary Isolation and Purification of pdCas9 plasmid

**Isolation and purification of pdCas9 from the liquid culture:**
- Miniprep using MN kit (low-copy plasmid protocol)
- Checked the concentration and purity of the purified pdCas9 plasmid in Nanodrop (~220 ng/ul)

**Gel electrophoresis confirmation:**
- 1% agarose, 45 min at 100V
- Observed a diffused band near the 10kb band on the ladder. (Our plasmid is 9.3kb)

**Cloning of gRNA target sequence into the dCas9 Plasmid**
- Annealing of oligonucleotides

### June 13th (Friday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Digestion of pdCas9 plasmid with BsaI**
- The enzyme available had expired in 2011
- 20 Units enzyme, 1ug plasmid in 20uL reaction volume incubated for 16 hours

### June 15th (Sunday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Purification of the linearized plasmid from the reaction mixture**
- (Removal of salts, enzymes and small DNA fragments)
- Used the MN PCR clean-up kit for spin column purification
- (NucleoSpin Column; silica membrane column for binding to DNA and collection tube)
- Checked the concentration and purity of the linearized plasmid in Nanodrop: 5 ng/uL
- The conc of the DNA obtained was very low and not satisfactory to proceed further

**Repeat Isolation and Purification of pdCas9 Plasmid**
- Transformation of competent cells with pdCas9
- XL1Blue cells by Heat shock Method
- Transformed cells spread on agar plates with Chloramphenicol and Tetracycline antibiotics

### June 16th (Monday) - Isolation and Purification of pdCas9 Plasmid

**Culturing of Transformed cells**
- Colonies from the plate inoculated in LB broth
- Incubated the liquid culture for 16 hrs at 37℃ in shaking incubator

**Cloning of gRNA target sequence into the dCas9 Plasmid**
- Repeated digestion of pdCas9 with BsaI
- Used a larger reaction volume to get a better concentration of the linearized plasmid after purification

### June 17th (Tuesday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Purification of the linearized plasmid from the reaction mixture**
- Used the same kit again to purify the linearized plasmid with modifications to improve DNA elution:
  - Incubate the column at 70C after adding Elution buffer for 5 minutes
  - Eluted twice
- Checked the concentration and purity of the linearized plasmid in Nanodrop (50ng/ul). Satisfactory to proceed further

**Ligation of linearized plasmid and annealed oligos**
- The molar ratio of plasmid to oligos in the ligation mix is nearly 1:600
- Incubated at 4C for one day

**Isolation and Purification of pdCas9 Plasmid**
- Repeated miniprep for 5 aliquots of 6mL liquid using the MN Kit
- Checked the concentration and purity of the purified pdCas9 plasmid in Nanodrop
- Got satisfactory concentration and purity for 4 out 5 aliquots
- Stored the plasmid at -20C

### June 18th (Wednesday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Transformation and culture of cells with recombinant dCas9 Plasmids**
- Used ligation mix to transform competent cells by heat shock method
- Plated on Chloramphenicol+Tetracycline agar plate
- Incubated plate overnight at 37℃

### June 19th (Thursday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Colony PCR for screening recombinant plasmids using repurposed primers**
- We expect a 230 bp amplicon if our gRNA insert is successful
- One primer was specific to the plasmid. The other primer was one of the single-stranded oligos of the insert (These primers were originally meant for a different purpose. They were not ideal for PCR)
- Prepared cell suspensions of 12 colonies and streaked a Chloramphenicol agar plate with the cell suspensions
- Prepared a Negative Control with a colony with the original dCas9. Non-template control was also prepared
- PCR reactions were prepared using the cell suspensions as the templates

**Thermal cycling conditions:**
- 30 cycles:
  - 94C for 1 min
  - 52C for 1 min
  - 72C for 30sec
  - 72C for 5 min

**Isolation and Purification of the dnaAP2-GFP plasmid**
- Suspension of lyophilized Plasmid
- The pET-blank plasmid(AmpR) with our custom dnaAP2-gfp sequence was shipped in the lyophilized form (~1600 ng)
- Suspended the DNA in 8 μL of Tris-HCL Buffer
- Transformation with the GFP plasmid using Heat Shock method, XL1 Blue competent cells
- Plated on Ampicillin+Tetracycline agar plate and incubated at 37℃ for 16 hours

### June 20th (Friday) - Multiple Procedures

**Cloning of gRNA target sequence into the dCas9 Plasmid**

*Agarose Gel Electrophoresis for Colony PCR*
- Ran the PCR reaction mix on 1% agarose gel
- Observed broad and intense bands of around 100-200 bp bands in all the samples as well as the negative controls
- Made the mistake of loading too much DNA in each well, hence the bands did not resolve properly

*Polyacrylamide Gel Electrophoresis for Colony PCR*
- Ran some of the samples on native 8% polyacrylamide gel to get better resolution
- All the samples and the negative control had bands of size less than 100bp caused by primer dimers
- Did not get any positive colonies

**Isolation and Purification of the dnaAP2-GFP plasmid**
- Prepared three 6 mL liquid cultures (with Ampicillin + Tetracycline antibiotics) of cells with GFP plasmid in LB broth
- Incubated at 37℃ overnight

### June 21st (Saturday) - Isolation and Purification of the dnaAP2-GFP plasmid

**Isolation and purification of the plasmid from liquid culture**
- Performed mini-prep using MN Kit
- Checked the concentration of the isolated plasmid in Nanodrop
- The concentration for 2 of the 3 plasmid samples was satisfactory considering the fact that the cultures were not fully grown (there was an issue with the incubator)

**Cloning of gRNA target sequence into the dCas9 Plasmid**

*Gel Electrophoresis for Linearized Plasmid*
- The lack of digestion (We used expired BsaI) was probably responsible for the failed recombination
- Ran the digested dCas9 plasmid along with the intact dCas9 plasmid on 0.6% agarose gel at 100V
- Adjusted the volume of each sample for loading such that each well has nearly 100 ng of DNA
- For the digested dCas9 we observed a diffused band (undigested plasmid) and a thin and precise band, close to 9.3kb (linearized plasmid)
- The fraction of linearized plasmid was very low

### June 22nd (Sunday) - Isolation and Purification of the dnaAP2-GFP plasmid

**Gel electrophoresis for plasmid confirmation**
- Ran the three GFP plasmid samples (6.2kb) isolated yesterday on the gel
- The three rightmost lanes showed a diffused band lying between 5-7kb confirming the plasmid

### June 23rd (Monday) - Cloning of gRNA target sequence into the dCas9 Plasmid (Attempt 2)

**Digestion of pdCas9 plasmid with BsaI**
- Repeated digestion with a higher enzyme concentration, less amount of DNA and longer incubation period expecting higher yield of digested plasmid

### June 24th (Tuesday) - Cloning of gRNA target sequence into the dCas9 Plasmid (Attempt 2)

**Purification of the linearized plasmid from the reaction mixture**
- Used the MN PCR clean-up kit to purify the linearized plasmid with the modified DNA elution protocol
- Checked the concentration and purity of the linearized plasmid in Nanodrop (32ng/ul). Satisfactory to proceed further

**Ligation of linearized plasmid and annealed oligos**
- Tried out two different plasmid to insert ratios in the ligation mix (1:600 and 1:60)
- Prepared a negative ligation control without the insert (i.e. annealed oligos)
- Incubated the three reaction mix at 4C for one day

### June 25th (Wednesday) - Cloning of gRNA target sequence into the dCas9 Plasmid (Attempt 2)

**Transformation of cells with ligation mix and culture on agar plates**
- Transformed three competent cell aliquots with the 1:600, 1:60 and control ligation mix by the heat shock method
- Plated transformed cells on Chloramphenicol +Tetracycline agar plates
- Incubated at 37C overnight

**Results:**
- No significant difference in the number of colonies between control and both of the ligated plates implying lack of colonies with recombinant plasmid due to low digestion
- Decided not to proceed with colony pcr since the probability of picking a recombinant colony is very small

</div>
</details>

<details style={{backgroundColor: '#f0f8f0', border: '1px solid #d4edda', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden'}}>
<summary style={{backgroundColor: '#20c997', color: 'white', padding: '12px 16px', margin: '0', cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px 8px 0 0', transition: 'background-color 0.3s ease'}}><strong>🧬 July 2025 - dCas9-Dam Construction</strong></summary>

<div style={{padding: '16px', backgroundColor: 'white'}}>

### July 2nd (Wednesday) - Cloning of dCas9-Linker-Dam plasmid

**Culturing of E.coli cells**
- Prepared 6 mL liquid culture of XL1 Blue cells
- Incubated overnight at 37C

### July 3rd (Thursday) - Cloning of dCas9-Linker-Dam plasmid

**Isolation of genomic DNA from E.coli culture**
- Used the Qiagen DNeasy Blood and Tissue Kit
- Checked the concentration of genomic DNA on Nanodrop (got ~180 ng/uL)

### July 4th (Friday) - Cloning of dCas9-Linker-Dam plasmid

**PCR Amplification of Dam gene from E.coli genome**

*Suspension of Lyophilized Oligos*
- Oligo 3 and oligo 4 were shipped by IDT in lyophilized format
- Prepared 100uM stocks of oligo 3 and oligo 4 by suspending them in TE buffer
- Diluted the primers and genomic DNA (template) to get the desired working concentrations

*PCR Setup*
- Used Takara's high fidelity Primestar GXL Polymerase
- Designed the reaction mix and PCR thermal conditions according to the Primestar GXL User Manual
- Used the "Standard 3-Step PCR protocol for &lt;10kb product" from the GXL user manual
- Our amplicon is ~900 bp

**PCR Thermal Conditions:**
- Initial denaturation step: 94C for 2 min (genomic DNA)
- Amplification (30cycles):
  - Denaturation: 98C for 10 sec
  - Annealing: 60C for 15 sec
  - Extension: 68C for 1 min (1min/kb)
- Hold at 4C

### July 5th (Saturday) - Cloning of dCas9-Linker-Dam plasmid

**PCR Amplification and Linearization of pdCas9 Plasmid**

*Suspension of Lyophilized Oligos*
- Oligo 1 and oligo 2 were shipped by IDT in lyophilized format
- Suspended them in TE buffer to prepare 100uM stock solutions
- Diluted the primers and plasmid (template) to get the desired concentrations

*PCR Setup*
- Used Takara's high fidelity Primestar GXL Polymerase
- Used the "Rapid 3-Step PCR protocol for &lt;10kb product" from the GXL user manual
- Our amplicon is ~9.3 kb. Rapid protocol uses twice the amount of polymerase for faster extension

**PCR Thermal Conditions:**
- Initial denaturation step: 94C for 2 min
- Amplification (30cycles):
  - Denaturation: 98C for 10 sec
  - Annealing: 55C for 15 sec
  - Extension: 68C for 3 min (10sec/kb)
- Final Extension: 68C for 2 min
- Hold at 4C

**Agarose Gel Electrophoresis for confirmation of PCR Products**
- Ran the PCR products (Dam and linearized dCas9) on 0.7% agarose gel to confirm the presence of our desired amplicons
- Wells 4 and 5 were loaded with 3ul and 1 ul of the Dam PCR product (~900bp) respectively
- Wells 7 and 8 were loaded with 3ul and 1ul of dCas9 PCR product (~9.3kb) respectively
- The bands on the gel (~900bp for Dam amplicon and ~9.3kb for the linearized plasmid) confirmed the presence of our desired amplicons without any non-specific/unwanted PCR amplification

### July 7th (Monday) - Cloning of dCas9-Linker-Dam plasmid

**Purification of PCR Products from PCR reaction mix**
- Used the MN PCR clean-up kit for purification of the PCR products
- Concentration of purified PCR products were checked on Nanodrop: 27 ng/ul for Dam and 88 ng/ul for pdCas9

**In-Fusion Cloning Reaction**
- Reaction mix containing the in-fusion mix, linearized plasmid and the insert (Dam) in 1:2 molar ratio was prepared and incubated at 50C for 15 minutes

**Transformation of Competent cells with in-fusion reaction mix**
- Transformed XL Blue competent cells by heat shock method
- Plated the transformed cells on Tetracycline+Chloramphenicol agar plates and incubated at 37C overnight
- Next day we had about 7-8 colonies on the plate

### July 9th (Wednesday) - Cloning of dCas9-Linker-Dam Plasmid

**Colony PCR for Screening of Recombinant Colonies**
- Repurposed oligo 3 and oligo 4 as primers for colony PCR. They are insert-specific chimeric primers (i.e. their 5' ends are complementary to Dam but 3' ends are complementary to the plasmid)
- This means we can get false positive results due to amplification of the endogenous Dam gene
- Made suspensions of 4 colonies from dCas9-Dam plate. Also picked 2 colonies from the dCas9 plate to serve as negative control (NC1 and NC2)
- Boiled all cell suspensions at 98C for 10 min to lyse the cells
- The cell suspensions were used PCR along with non-template control (NC3)
- Performed touchdown PCR to increase specificity of primers to the Dam insert in plasmid over endogenous Dam

**PCR Thermal Settings (Touchdown/stepdown PCR):**
- Initial denaturation: 94C for 2 min
- 8 cycles:
  - Denaturation: 94C for 30sec
  - Annealing: 70C for 30 sec (reduce by 2C every 2 cycles)
  - Extension: 72C for 1 min
- 22 cycles:
  - Denaturation: 94C for 30 sec
  - Annealing: 62C for 30 sec
  - Extension: 72C for 1 min
- Final extension: 72C for 3 min
- Hold at 4C

**Gel Electrophoresis of colony PCR products**
- Ran the PCR products on 0.7% agarose gel for 40 minutes
- Observed intense bands(~900 bp) in all lanes including negative controls NC1 and NC2 due to amplification of endogenous Dam, as we feared
- Hence colony PCR was inconclusive

**Culturing of Transformed Cells**
- Made liquid culture (Chloramphenicol+Tetracycline) for 4 colonies from the dCas9-Dam plate
- Incubated overnight at 37C

### July 10th (Thursday) - Cloning of dCas9-Linker-Dam Plasmid

**Isolation of recombinant (hopefully) plasmids**
- Performed miniprep to isolate the plasmids
- Checked the concentration of isolated plasmids on Nanodrop
- Concentrations and purity of all 4 four plasmid isolates were satisfactory

### July 16th (Wednesday) - Multiple Procedures

**Test Digestion of pdCas9 plasmid with BsaI + Screening of dCas9-DAM recombinant plasmids**
- Acquired fresh NEB BsaI- hfV2 enzyme that had been used last year by the iGEM team
- To check enzyme activity, performed a test digestion of pdCas9 with BsaI
- Digested the four dCas9-Dam plasmids (S1 to S4) as well as one original dCas9 plasmid (NC)
- Wanted to use the test digestion as a screening test for recombination as well
- Prepared five 10ul reaction mixes. Four with dCas9-Dam and one
- Incubated the reaction mixes at 37C for 30 min
- Loaded the reaction mixes on 1% agarose gel (~100ng DNA in each well) along with the ladder, undigested dCas9 (UNC) and dCas9-Dam (U1) plasmids
- Ran it at 100V for 1 hour
- Observed nearly 100% digestion which means the BsaI has retained most of its activity
- But could not distinguish between the 9.3kb (pdCas9 and 10.2 kb(pdCas9-Dam) bands due to poor resolution
- Hence the screening for recombination failed once again

### July 18th (Friday) - Cloning of dCas9-Linker-Dam Plasmid

**Screening of recombinant plasmids using restriction digestion**
- Original dCas9 plasmids will give 8kb and 1.35kb bands whereas the recombinant dCas9-Dam plasmids are supposed to give 8kb, 1.09kb and 1.15 kb bands after complete digestion with BamHI
- Digested the four dCas9-Dam plasmids (S1 -S4) along with two dCas9 plasmids as controls
- Ran the samples on 1% agarose gel
- Observed very faint bands around 10kb in size. This is the singly undigested product. Most of the plasmid was undigested
- Again the screening results were inconclusive due to incomplete digestion

### July 20th (Sunday) - Cloning of dCas9-Linker-Dam Plasmid

**PCR Screening of recombinant plasmids**
- Decided to perform PCR again, but this time we used isolated plasmids as template, hoping to avoid background amplification to genomic DNA
- Diluted the plasmid samples to get the desired working concentration
- For negative control (NC), used the original pdCas9 plasmid (1 ng), and for positive control (PC), used E.coli genome (8ng)

**PCR Thermal Settings:**
- Initial denaturation: 94C for 2 min
- 28 cycles:
  - Denaturation: 94C for 30 sec
  - Annealing: 64C for 30 sec
  - Extension: 72C for 1 min
- Final extension: 72C for 3 min
- Hold at 4C

**Gel Electrophoresis of PCR products**
- Ran the PCR products on 1% agarose gel for about 45 min
- Observed a band of ~900 bp in 3 out of 4 plasmid samples indicating Dam amplification
- The band was absent in the negative control
- Hence screening was finally successful and S1, S2 and S4 seemed to be positive for dCas9-Dam

**Plasmids and primers sent for sequencing**
- Prepared the positive dCas9-Dam samples (S1, S2 and S4) for sequencing: 20ul at 100 ng/ul
- Prepared 40ul of ~10uM of each of the primers we had used for Dam PCR (Oligo 3 and Oligo 4)
- Each of the plasmids will be sequenced once using primer P1 and once using primer P2

### July 29th (Tuesday) - Cloning of dCas9-Linker-Dam Plasmid

**Sequencing Results:**
- Two of the four plasmids that we had sent for sequencing were positive for recombination (S2 and S4)
- But we could not verify the complete reading frame of dCas9-Linker-Dam because of poor resolution at the junctions between linker-dam and Dam-plasmid where the primers P1 and P2 bind

### July 30th (Wednesday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Annealing of oligonucleotides**

**Digestion of pdCas9 and dCas9-Dam plasmids with BsaI**
- Digested the original dCas9 plasmid and the recombinant dCas9-Dam plasmids (S2 and S4)
- Incubated the three digestion mixes at 37C for 1 hour followed by heat inactivation at 80C for 20 min

**Purification of the linearized plasmids from the digestion mixtures**
- Used the MN kit to purify the linearized plasmid from the three reaction mix
- The purity of all three samples was poor (a sharp unwanted peak around 220-230nm was observed) but we still decided to proceed with ligation
- S2: 92 ng/ul
- S4: 60 ng/ul
- dCas9: 85 ng/ul

**Ligation of linearized plasmid and annealed oligos**
- Took 1:20 plasmid to insert (annealed oligos) ratio in the ligation mix
- Prepared the ligation mix for all three digestion mixes. Also prepared a control ligation mix (without annealed oligos)
- Incubated the ligation overnight

</div>
</details>

<details style={{backgroundColor: '#f0f8f0', border: '1px solid #d4edda', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden'}}>
<summary style={{backgroundColor: '#198754', color: 'white', padding: '12px 16px', margin: '0', cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px 8px 0 0', transition: 'background-color 0.3s ease'}}><strong>🔬 August 2025 - System Testing and Optimization</strong></summary>

<div style={{padding: '16px', backgroundColor: 'white'}}>

### August 1st (Friday) - Cloning of dCas9-Linker-Dam Plasmid

**Transformation with Ligation Mix and Culturing of Transformed Cells**
- Used the heat shock protocol for transformation of 4 aliquots XL1 Blue cells with the four ligation mixes
- Plated the transformed cells on agar plates (Chloramphenicol+Tetracycline)
- Incubated the plates overnight at 37C
- The next day, observed ~150 colonies on the control plate as well as on the S2 (dCas9-DAM) and dCas9 plates. The S4 (dCas9-DAM) plate had only about 10 colonies
- Since the control plate had nearly as many colonies as the recombinant ones, decided to repeat the cloning again

### August 4th (Monday) - Multiple Procedures

**Repeat Isolation of dCas9-Dam Plasmids**
- Transformed XL1 Blue competent cells with dCas9-Dam plasmid (S2 and S4) by heat shock method
- Plated the transformed cells on two agar plates (Chloramphenicol+Tetracycline)
- Incubated overnight at 37C

**Testing of Co-transformation (dnaAP2-gfp and dCas9 plasmids):**

*Co-Transformation and Transformation of Control groups:*
- Co-transformed one aliquot of XL1 Blue competent cells with 200ng each of GFP and dCas9-Dam(S2) plasmids by heat shock method
- For controls, transformed 2 aliquots with GFP and 1 aliquot with dCas9-Dam (S2)

*Culturing of Transformed Cells:*
- Single Transfection controls:
  - GFP transformed cells on Amp+Tet agar plate
  - S2 transformed cells on Chlor+Tet agar plate
- Plated the (GFP+dCas9-Dam) co-transfected cells on (Amp+Chlor) agar plate
- Negative controls:
  - GFP cells on Amp+Chlor plate
  - S2 cells on Amp+Tet plate
- Incubated all the plates for 16 hours at 37C

**Results:**
- Observed small translucent colonies of the XL1 Blue strain and big opaque colonies which were due to contamination (probably fungal colonies since it was growing in all three antibiotics: Amp, Chlor, Tet)
- All the plates were contaminated, the contamination could have happened during transformation or the competent cell aliquots that we prepared could be contaminated

*XL1 Blue colonies (Translucent colonies):*
- Gfp(6kb) cells on Amp+Tet: ~ 10* 10^3
- S2(10kb) cells on Chlor+Tet: ~ 3-4* 10^3
- Gfp+S2 cells on Amp+Chlor: ~ 0.5-0.6* 10^3
- Gfp cells on Amp+Chlor: nil
- S2 cells on Amp+Tet: nil

- If we only look at the XL1 Blue colonies, we got the expected results:
  - Top row (Single Transfection): Had lots of colonies. Gfp transformation was more efficient as compared to dCas9-Dam
  - Middle row (Co-transfection): Had 6-fold less and 20-fold less colonies as compared to single transformation with gfp and dCas9-DAM plasmids respectively
  - Bottom row (Negative controls): Had no colonies (except satellite colonies which were growing around the fungal colonies)
- The results are very much in line with expected trends for heat-shock transformations

### August 6th (Wednesday) - Multiple Procedures

**Isolation of dCas9-Dam Plasmids**
- Inoculated the four colonies from the transformed plate in 6ml LB broth each supplemented with Tet and Chlor antibiotics
- Incubated for 16hrs at 37C, 180rpm

**Testing of Co-transformation (dnaAP2-gfp and dCas9 plasmids):**
- Carefully picked out two colonies from the co-transformed plate while avoiding the colonies of the contamination species
- Inoculated the two colonies in 6ml LB broth each supplemented with Amp+Chlor antibiotics
- Incubated for 16hrs at 37C, 180rpm

### August 7th (Thursday) - Multiple Procedures

**Isolation of dCas9-Dam Plasmids:**
- Performed miniprep for dCas9-DAM plasmid extraction
- Measured the concentration of the plasmids on Nanodrop
- In order: S2_a, S2_b, S4_a, S4_b
- The concentrations were lower than desired and the A260/A230 were also off

**Testing of Co-transformation (dnaAP2-gfp and dCas9 plasmids):**
- Performed miniprep using the MN kit to extract plasmids from the co-transformed culture
- Measured the concentration of the plasmids on Nanodrop
- S2+gfp_a, S2+gfp_b
- The concentrations of both the samples were satisfactory. The A260/A230 ratios were a little off

### August 8th (Thursday) - Multiple Procedures

**Isolation of dCas9-Dam Plasmids:**

*BsaI digestion and gel electrophoresis for plasmid confirmation*

Reaction Mix for Digestion:
- 10X CutSmart Buffer: 1ul
- BsaI-hfV2: 0.2ul (4 units)
- Plasmid: ~1 to 2 ul (200 ng)
- NF H20: make to 10ul

- Digested the four dCas9-Dam samples (S2_a, S2_b, S4_a, S4_b) and dCas9 (control)
- Prepared the master mix first, aliquoted 8ul of MM into pcr tubes and added the plasmids at last
- Incubated the digestion mix at 37C for 30 min
- Ran the five digestion mix on 1% agarose at 100V for 1 hour. (With 50ng DNA = 2.5ul dig mix in each well)
- Observed ~10kb bands in all four dCas9-DAM samples and a ~9kb band in the dCas9 control. This confirmed the presence of dCas9-Dam plasmid in all our samples

**Testing of Co-transformation (dnaAP2-gfp and dCas9 plasmids):**

*BsaI digestion and gel electrophoresis for plasmid confirmation*
- The dCas9-DAM plasmid is expected to give a 10.2kb band after digestion with BsaI
- The dnaAP2-gfp plasmid is expected to give a 6.2kb band after single digestion and 1.5kb and 4.6 kb bands after double digestion
- Digested the plasmid samples from co-transformation with BsaI
- Ran the two digestion mix on 1% agarose at 100V for 1 hour
- Observed four bands ((~10kb, ~6kb, ~4.5kb, 1.5kb) in both the dual plasmid samples) thus confirming the presence of both dCas9-DAM and dnaAP2-gfp plasmids

**Co-transfection was successful!**

### August 9th (Thursday) - Cloning of gRNA target sequence into the dCas9/ dCas9-DAM Plasmid

**Golden gate assembly**
- Realised that gRNA cloning into pdCas9 is suitable for golden gate assembly with BsaI restriction enzyme and T4 ligase
- Used a 10:1 insert to vector ratio
- Prepared three ligation mix (S2, S4 dCas9-DAM plasmids and pdCas9 plasmid) and a control ligation mix without the annealed oligos
- Incubated the reaction mix for 45min followed by 10 min at 60C

**Transformation with golden gate mix**
- Transformed four 200ul aliquots of XL1 Blue cells with golden gate reaction mix by the heat shock method

**Culturing of Transformed cells**
- The transformed cells were plated on four agar plates (S2, S4, pdCas9 and Control) supplemented with Chloramphenicol+Tetracycline antibiotics
- Incubated the plates at 37C for 16 hours
- The next day we observed colonies on all four plates
- The control plate (dCas9) and the recombinant plate (dCas9) nearly had the same number of colonies which was a cause of concern but we decided to proceed with screening

**dnaAP2-GFP Fluorescence Assay for DAM(-) cells**
- Used the heat shock protocol given by NEB to transform 50ul Dam(-) cells
- Plated the transformed Dam(-) strain on Amp+Chlor agar plate and incubated overnight at 37C (the cell strain was already resistant to Chlor)
- The next day, observed only about 5 colonies on the transformation plate and no colonies on the control (untransformed) plate
- Such low transformation efficiency was concerning. It could be due to the Dam(-) genotype
- Also realised that the Dam(-) competent cell strain that we procured from NEB is Chlor resistant so we cannot use Chlor-resistance as a selection marker for transforming with our dCas9/dCas9-DAM plasmid

### August 18th (Monday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Colony PCR for screening of recombinant colonies**
- Used primers P1 and G for PCR screening. P1 is specific to the plasmid and G is specific to the insert. (This time the primers were designed specifically for PCR.)
- The recombinant colonies are expected to give a band of size 220 bp
- Picked 3 colonies from each ligation plate (dCas9, dCas9-DAM_S2, dCas9-DAM_S4) and suspended them in 10 ul NF H2O
- Also picked 1 colony from the control plate we had prepared earlier, and suspended it in 10 ul NF H2O to serve as negative control
- Boiled 2ul of each cell suspension at 98C for 10 min to lyse the cells for pcr
- Stored rest of the cell suspension at 4C for preparing liquid of positive colonies
- Used the lysed cell suspensions as templates for pcr reaction
- For non-template negative control, used the remaining master mix as pcr reaction mix

**Thermal cycler settings:**
- Initial Denaturation: 94C for 2min
- 30 Cycles:
  - Denaturation: 94C for 30 sec
  - Annealing: 55C for 30 sec
  - Extension: 72C for 1 min
- Hold: 4C

- Next day, realised that we had put the PCR tubes in the wrong wells in the PCR machine which means that the temperature cycling could be sub-optimal

**dnaAP2-GFP Fluorescence Assay for wild-type Dam(+) cells**
- Prepared 2 aliquots of liquid culture of XL1 blue cells containing the GFP plasmid supplemented with Ampicillin+Chlor antibiotics
- Also prepared one liquid culture with untransformed XL1 blue cells
- Incubated the three liquid cultures overnight at 37C, 180rpm

### August 19th (Tuesday) - GFP Fluorescence Assay for native Dam(+) cells

**Preparation of samples for microplate assay**
- 1mL of each liquid culture was pelleted and the cell pellet was washed with PBS buffer twice and finally resuspended in PBS buffer
- The cell pellet with gfp (left) was visibly greener as compared to the non-gfp cell pellet (right). This indicates the expression of the dnaAP2 promoter

### August 20th (Wednesday) - Multiple Procedures

**Cloning of gRNA target sequence into the dCas9 Plasmid**

*Gel Electrophoresis of Colony PCR product for Screening*
- Ran the PCR reactions on 1.5% agarose gel at 100V for 45 min
- Observed a lot of non-specific amplification in dC2, S2_1 and S4_2 indicating that they were negative for recombination
- dC1, S2_2 and S2_3 and MM had no bands at all. Hence inconclusive
- dC3 and S4_1 had a sharp band of the right size(220bp) without any non-specific bands. The band in dC3 was intense while the one in S4_3 was faint. But nonetheless, S4_3 and dC_3 seem to be positive for our recombinant plasmid

**GFP Fluorescence Assay for native Dam(+) cells**

*Fluorescence and Cell Density Measurements using Microplate Reader*
- Prepared 1:1 and 1:4 dilutions of cell suspensions
- Put duplicates of each dilution (and undiluted) of each cell suspension (one non-gfp and two gfp) in the microplate
- Measured OD600 and fluorescence intensities (gain 76)
- Normalized GFP readings of the three samples
- More diluted samples showed higher gfp/OD600 ratios which we later found out was due to a phenomenon called fluorescence quenching. Hence it is not possible to compare samples at different dilutions even after normalization
- Decided to stick to 1:4 (cell culture to buffer) dilution henceforth to minimize the effect of fluorescence quenching

### August 22nd (Friday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Repeated Colony PCR and Gel Electrophoresis for screening of Recombinant plasmids**
- Got a clear positive result for the gRNA insert in dCas9 plasmid but only a doubtful positive result for one dCas9-DAM with gRNA insert sample
- Repeated the same protocol as on 18th August for colony PCR for colonies from dCas9-DAM plates (S2 and S4)
- Ran the PCR products on agarose gel
- Did not get any positive colonies this time
- Since we are short of time, decided to send the plasmids from the positive colonies we got in the previous screening for sequencing

### August 26th (Tuesday) - Multiple Procedures

**Cloning of gRNA target sequence into the dCas9 Plasmid**
- Used the stored cell suspensions to prepare liquid culture for colonies that tested positive and the ones that were indeterminate in the pcr screening
- Prepared 12mL liquid culture for positive samples dC_3 and S4_3
- Prepared 6mL liquid culture for indeterminate samples S2_2 and S2_3
- All the liquid cultures were supplemented with Chlor+Tet antibiotics and incubated overnight at 37C, 180rpm

**dnaAP2-GFP Fluorescence Assay for DAM(-) cells**
- Repeated the transformation of Dam(-) E.coli with dnaAP2-gfp plasmid using the same heat shock protocol we used on 9th August
- Plated the transformed cells on Amp+Chlor agar plate
- Also plated untransformed Dam(-) cells on a Chlor agar plate (i.e. without selection for plasmid)
- The plates were incubated overnight at 37C
- The next day we observed only 2-3 colonies on the Amp+Chlor plate and thousands of colonies and matting on the Chlor plate. This indicates low transformation efficiency which could be due to loss of competency during transportation

### August 27th (Wednesday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Plasmid isolation from liquid cultures**
- Performed miniprep using MN kit for liquid cultures DC_3, S4_3, S2_2, S2_3
- Checked the plasmid concentrations on Nanodrop

### August 28th (Thursday) - Cloning of gRNA target sequence into the dCas9 Plasmid

**Preparation of plasmids and primers for sequencing**
- Prepared the plasmids that we had isolated yesterday and primers to send for sequencing
- Primer P1: 15 uM 40uL
- Primer P2: 15 uM 20uL
- Primer O4: 15 uM 20 uL
- Primer P1 will be used for sequencing the target sequence region and the plasmid backbone-DAM junction
- Primer P2 will be used for sequencing the dCas9-DAM junction
- Primer O4 will provide high resolution for the DAM sequence that is outside the range of P1 and P2
- The plasmids and primers were packed and sent for sequencing

</div>
</details>

<details style={{backgroundColor: '#f0f8f0', border: '1px solid #d4edda', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden'}}>
<summary style={{backgroundColor: '#157347', color: 'white', padding: '12px 16px', margin: '0', cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px 8px 0 0', transition: 'background-color 0.3s ease'}}><strong>📊 September 2025 - Final Characterization</strong></summary>

<div style={{padding: '16px', backgroundColor: 'white'}}>

### September 1st (Monday) - dnaAP2-GFP Fluorescence Assay for DAM(-) cells and DAM(+) cells

**Culturing of Dam(-) cells and XL1 blue cells Dam(+) with gfp**
- Prepared 6mL liquid culture each from two colonies of Dam(-) cells that were transformed with the dnaAP2-gfp plasmid. Supplemented with Amp+Chlor antibiotics. (The plate appeared to be contaminated since the colonies were unusually large)
- Prepared 6mL liquid culture from one colony of untransformed Dam(-) cells. Supplemented with Chlor antibiotic
- Prepared 6mL liquid culture each from two colonies of Dam(+) XL1 Blue cells that were transformed with the dnaAP2-gfp plasmid. Supplemented with Amp+Tet antibiotics
- Incubated for about 15hrs 40 min at 37C, 180 rpm

### September 2nd (Tuesday) - dnaAP2-GFP Fluorescence Assay for DAM(-) cells and DAM(+) cells

**Preparation of samples for microplate assay**
- 1 mL each of the five liquid cultures was pelleted and the cell pellet was washed twice with PBS buffer and resuspended in PBS buffer
- The XL1 blue cell pellet with gfp was strongly green and the Dam(-) cell pellet with gfp was very faintly green as compared to the untransformed cell pellet (right)

**Fluorescence and Cell Density Measurements using Microplate Reader**
- Prepared 1:4 dilutions (1 part cell suspension + 4 parts buffer) of each sample
- Put triplicates of each sample in the microplate
- Measured 0D600 absorbance and fluorescence intensity (gain 75)
- Averaging, Blanking and normalization were performed on the readings

**Final GFP expression readings:**
- Gfp expression in Dam(-) cells was reduced nearly five-fold as compared to Dam(+) cells. (Matches with our visual observations)
- Also the plate with transformed Dam(-) cells appeared to be contaminated so we cannot completely trust these readings

</div>
</details>
