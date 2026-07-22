/* The class's first note — pre-loaded so nobody has to make it. Answers use the updated
   layout (comparison tables + bolded key terms) that renders via renderMarkdown. */
window.SAMPLE_LECTURE = {
  topic: "Endocrine System and Hormones",
  questions: [
    {
      n: 1, type: "short_answer", terms: ["thyroid hormone"], answer_source: "chapter notes",
      question: "You need to know two effects of thyroid hormone.",
      answer: `**Thyroid hormone (TH)** has two key effects:

1. **↑ Metabolic rate** — raises the metabolic rate and protein synthesis of target cells.
2. **↑ Heart rate & force** — increases heart rate and force of contraction.

*Also in the notes:* generates heat (calorigenic effect), raises respiration rate, and stimulates hepatocytes to raise blood glucose.`
    },
    {
      n: 2, type: "short_answer", terms: ["hormonal stimulation", "humoral stimulation", "nervous stimulation"],
      answer_source: "McKinley A&P 4e ch.17 slide 9 (17.2b)",
      corrected: "Was 'two mechanisms' — hormonal + humoral only. It's three: nervous stimulation was missing.",
      question: "You need to know the mechanisms used to control the release of a hormone, and the example and meaning of each.",
      answer: `**Three** mechanisms (endocrine reflexes) trigger hormone release:

| mechanism | what triggers release | example |
|---|---|---|
| **Hormonal** | another **hormone** binds the gland cell | **TSH** (anterior pituitary) → thyroid → releases **TH** |
| **Humoral** | a changing **nutrient/ion** level in the blood | rising **glucose** → pancreatic **beta cells** release **insulin** |
| **Nervous** | a **neuron** directly stimulates the gland cell | **sympathetic** neurons → **adrenal medulla** → releases **epinephrine** |`
    },
    {
      n: 3, type: "short_answer", terms: ["protein hormones", "steroid hormones"], answer_source: "chapter notes",
      question: "Compare and contrast the mechanism of action of protein and steroid hormones.",
      answer: `| | **steroid** (lipid-soluble) | **protein** (water-soluble) |
|---|---|---|
| **receptor location** | inside the cell (cytosol / nucleus) | on the plasma membrane |
| **crosses the membrane?** | yes — diffuses through | no |
| **mechanism** | binds intracellular receptor → binds **HRE** on DNA → changes transcription/translation | binds membrane receptor → activates **G-protein** + enzymes → **second messengers** (cAMP, DAG, IP3) → enzyme cascade |`
    },
    {
      n: 4, type: "image", terms: ["endocrine structures", "hormone production"], answer_source: "chapter notes",
      question: "You need to know the name of the structure, or the hormone produced by a given structure.",
      answer: `| structure | hormones produced |
|---|---|
| **Hypothalamus** | ADH, oxytocin, releasing/inhibiting hormones (TRH, GnRH, CRH, GHRH) |
| **Posterior pituitary** | stores/releases **ADH**, **oxytocin** |
| **Anterior pituitary** | TSH, PRL, ACTH, FSH, LH, **GH** |
| **Thyroid** | **TH (T3 / T4)**, calcitonin |
| **Parathyroids** | **PTH** |
| **Adrenal medulla** | epinephrine, norepinephrine |
| **Adrenal cortex** | aldosterone, **cortisol**, androgens |
| **Pancreas** | **insulin**, **glucagon**, somatostatin |
| **Pineal** | melatonin |
| **Kidneys** | EPO, calcitriol |`
    },
    {
      n: 5, type: "multiple_choice", terms: ["transcription", "translation"], answer_source: "chapter notes",
      question: "Of the given hormones, select the hormones that change the rate of transcription and translation.",
      answer: `Hormones that change **transcription & translation** are the **lipid-soluble** ones:

- **Steroid hormones** — estrogen, progesterone, testosterone, cortisol, aldosterone, androgens
- **Thyroid hormone** (TH / T3 / T4)
- **Calcitriol**`
    },
    {
      n: 6, type: "directional", terms: ["down-regulation", "up-regulation"], answer_source: "chapter notes",
      question: "You will be given statements which you have to separate into down-regulation and up-regulation.",
      answer: `| **up-regulation** | **down-regulation** |
|---|---|
| **more** receptors | **fewer** receptors |
| **↑ sensitivity** to the hormone | **↓ sensitivity** to the hormone |
| often when hormone levels are **low** | often when hormone levels are **high** |

Both can also shift with changes in development, the cell cycle, or cell activity.`
    },
    {
      n: 7, type: "short_answer", terms: ["insulin", "cortisol", "growth hormone", "glucagon"], answer_source: "chapter notes",
      question: "For insulin, cortisol, growth hormone, and glucagon: know the cell/area that makes each, its targets, and its effect.",
      answer: `| hormone | made by | targets | main effect |
|---|---|---|---|
| **Insulin** | pancreatic **beta cells** | liver, adipose, most cells | **↓ blood glucose** — glycogenesis, lipogenesis, uptake |
| **Glucagon** | pancreatic **alpha cells** | liver, adipose | **↑ blood glucose** — glycogenolysis, gluconeogenesis, lipolysis |
| **Cortisol** | adrenal cortex (**zona fasciculata**) | liver, adipose, many cells | **↑ blood nutrients** to resist stress — gluconeogenesis, lipolysis, protein breakdown |
| **GH** | anterior pituitary | liver, all cells | **growth** — IGF release, protein synthesis, lipolysis |`
    },
    {
      n: 8, type: "short_answer", terms: ["hormone specificity", "target cells"], answer_source: "chapter notes",
      question: "Explain how a hormone can act specifically on only one type of cell.",
      answer: `A hormone only affects a cell that has the **specific receptor** for it.

- **Target cells** carry that receptor and respond.
- Cells **without** the receptor can't bind the hormone, so it has **no effect** on them.`
    },
    {
      n: 9, type: "multiple_choice", terms: ["hormone targets"], answer_source: "chapter notes",
      question: "Match the hormones with the appropriate target: bone, kidney, anterior pituitary, and breast tissue.",
      answer: `| target | hormones |
|---|---|
| **Bone** | calcitonin, **PTH**, calcitriol |
| **Kidney** | **ADH**, PTH, ANP, angiotensin II, calcitriol |
| **Anterior pituitary** | hypothalamic releasing/inhibiting hormones; cortisol (negative feedback) |
| **Breast tissue** | **prolactin (PRL)**, **oxytocin** |`
    },
    {
      n: 10, type: "short_answer", terms: ["solely endocrine organs", "organs containing endocrine cells"],
      answer_source: "McKinley A&P 4e ch.17 slides 7-8 (17.2a)",
      source: "classmate notes", verify: true,
      question: "Chapter 17, slide 8 — which glands are solely endocrine, and which organs have another primary function but contain endocrine cells?",
      answer: `| | organs |
|---|---|
| **Solely endocrine** (endocrine function only) | **pituitary**, **pineal**, **thyroid**, **parathyroid**, **adrenal** glands |
| **Another primary function**, but contain clusters of endocrine cells | hypothalamus, skin, thymus, heart, liver, stomach, **pancreas**, small intestine, adipose connective tissue, **kidneys**, gonads |

Endocrine glands are **epithelial tissue** that makes and releases hormones within a connective tissue framework.`
    },
    {
      n: 11, type: "short_answer", terms: ["lipid-soluble hormone action", "water-soluble hormone action", "second messenger"],
      answer_source: "McKinley A&P 4e ch.17 slides 22, 24, 26 (17.5a / 17.5b)",
      source: "classmate notes", verify: true,
      note: "Kept separate from #1 ('two effects of THYROID hormone') — different material, so don't study one as the other.",
      question: "Two effects of a hormone on a target cell?",
      answer: `The effect depends on whether the hormone is **lipid-** or **water-soluble**:

| | **lipid-soluble** (steroids, TH, calcitriol) | **water-soluble** (proteins, most amines) |
|---|---|---|
| **route** | diffuses **into** the cell | binds a **membrane** receptor |
| **receptor** | intracellular (cytosol / nucleus) | on the plasma membrane |
| **mechanism** | complex binds an **HRE** on DNA | G-protein → enzyme → **second messenger** (cAMP, DAG/IP3) → protein kinase |
| **result** | changes **transcription** → a **new protein** is made | **phosphorylates** enzymes that **already exist** — activating or inhibiting them |`
    }
  ]
};
