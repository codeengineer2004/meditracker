// Define the dataset with tablet information
const tablets = [
  {
      name: "Fluticasone",
      activeIngredients: "Fluticasone",
      dosageStrength: "50 mcg",
      dosageForm: "Spray",
      manufacturer: "Flonase",
      indications: "Allergy relief",
      contraindications: "Allergy to fluticasone",
      sideEffects: "Nasal irritation",
      storageConditions: "Store at room temperature",
      image: "fluticasone.jpg",
      diseases: "Allergic rhinitis, Nasal congestion"
  },
  {
      name: "Fentanyl",
      activeIngredients: "Fentanyl",
      dosageStrength: "100 mcg",
      dosageForm: "Transdermal patch",
      manufacturer: "Duragesic",
      indications: "Pain relief",
      contraindications: "Allergy to fentanyl",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 25°C",
      image: "fentanyl.jpg",
      diseases: "Chronic pain, Cancer pain"
  },
  {
      name: "Hydromorphone",
      activeIngredients: "Hydromorphone",
      dosageStrength: "2 mg",
      dosageForm: "Tablet",
      manufacturer: "Dilaudid",
      indications: "Pain relief",
      contraindications: "Allergy to hydromorphone",
      sideEffects: "Dizziness",
      storageConditions: "Store at room temperature",
      image: "hydromorphone.jpg",
      diseases: "Severe pain"
  },
  {
      name: "Gabapentin",
      activeIngredients: "Gabapentin",
      dosageStrength: "100 mg",
      dosageForm: "Capsule",
      manufacturer: "Neurontin",
      indications: "Neuropathic pain relief",
      contraindications: "Allergy to gabapentin",
      sideEffects: "Dizziness",
      storageConditions: "Store at room temperature",
      image: "gabapentin.jpg",
      diseases: "Neuropathic pain, Seizures"
  },
  {
      name: "Baclofen",
      activeIngredients: "Baclofen",
      dosageStrength: "10 mg",
      dosageForm: "Tablet",
      manufacturer: "Lioresal",
      indications: "Muscle relaxant",
      contraindications: "Allergy to baclofen",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 30°C",
      image: "baclofen.jpg",
      diseases: "Muscle spasticity"
  },
  {
      name: "Dexamethasone",
      activeIngredients: "Dexamethasone",
      dosageStrength: "4 mg",
      dosageForm: "Tablet",
      manufacturer: "Decadron",
      indications: "Inflammation relief",
      contraindications: "Allergy to dexamethasone",
      sideEffects: "Weight gain",
      storageConditions: "Store at room temperature",
      image: "dexamethasone.jpg",
      diseases: "Inflammatory conditions, Allergic reactions"
  },
  {
      name: "Lorazepam",
      activeIngredients: "Lorazepam",
      dosageStrength: "2 mg",
      dosageForm: "Tablet",
      manufacturer: "Ativan",
      indications: "Anxiety relief",
      contraindications: "Allergy to lorazepam",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 30°C",
      image: "lorazepam.jpg",
      diseases: "Anxiety, Insomnia"
  },
  {
      name: "Lisinopril",
      activeIngredients: "Lisinopril",
      dosageStrength: "20 mg",
      dosageForm: "Tablet",
      manufacturer: "Prinivil",
      indications: "Blood pressure control",
      contraindications: "Allergy to lisinopril",
      sideEffects: "Dizziness",
      storageConditions: "Store at room temperature",
      image: "lisinopril.jpg",
      diseases: "High blood pressure, Heart failure"
  },
  {
      name: "Risperidone",
      activeIngredients: "Risperidone",
      dosageStrength: "2 mg",
      dosageForm: "Tablet",
      manufacturer: "Risperdal",
      indications: "Antipsychotic",
      contraindications: "Allergy to risperidone",
      sideEffects: "Drowsiness",
      storageConditions: "Store at room temperature",
      image: "risperidone.jpg",
      diseases: "Schizophrenia, Bipolar disorder"
  },
  {
      name: "Desvenlafaxine",
      activeIngredients: "Desvenlafaxine",
      dosageStrength: "50 mg",
      dosageForm: "Tablet",
      manufacturer: "Pristiq",
      indications: "Depression treatment",
      contraindications: "Allergy to desvenlafaxine",
      sideEffects: "Nausea",
      storageConditions: "Store below 25°C",
      image: "desvenlafaxine.jpg",
      diseases: "Depression, Generalized anxiety disorder (GAD)"
  },
  {
      name: "Diazepam",
      activeIngredients: "Diazepam",
      dosageStrength: "2 mg",
      dosageForm: "Tablet",
      manufacturer: "Valium",
      indications: "Anxiety relief",
      contraindications: "Allergy to diazepam",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 25°C",
      image: "diazepam.jpg",
      diseases: "Anxiety, Panic disorder"
  },
  {
      name: "Escitalopram",
      activeIngredients: "Escitalopram",
      dosageStrength: "5 mg",
      dosageForm: "Tablet",
      manufacturer: "Lexapro",
      indications: "Depression treatment",
      contraindications: "Allergy to escitalopram",
      sideEffects: "Nausea",
      storageConditions: "Store at room temperature",
      image: "escitalopram.jpg",
      diseases: "Depression, Generalized anxiety disorder (GAD)"
  },
  {
      name: "Famotidine",
      activeIngredients: "Famotidine",
      dosageStrength: "40 mg",
      dosageForm: "Tablet",
      manufacturer: "Pepcid",
      indications: "Acid reflux relief",
      contraindications: "Allergy to famotidine",
      sideEffects: "Dizziness",
      storageConditions: "Store below 25°C",
      image: "famotidine.jpg",
      diseases: "Acid reflux, Peptic ulcer disease"
  },
  {
      name: "Guanfacine",
      activeIngredients: "Guanfacine",
      dosageStrength: "1 mg",
      dosageForm: "Tablet",
      manufacturer: "Tenex",
      indications: "Blood pressure control",
      contraindications: "Allergy to guanfacine",
      sideEffects: "Dizziness",
      storageConditions: "Store at room temperature",
      image: "guanfacine.jpg",
      diseases: "High blood pressure, Attention deficit hyperactivity disorder (ADHD)"
  },
  {
      name: "Hydroxyzine",
      activeIngredients: "Hydroxyzine",
      dosageStrength: "50 mg",
      dosageForm: "Tablet",
      manufacturer: "Atarax",
      indications: "Anxiety relief",
      contraindications: "Allergy to hydroxyzine",
      sideEffects: "Drowsiness",
      storageConditions: "Store at room temperature",
      image: "hydroxyzine.jpg",
      diseases: "Anxiety, Itching"
  },
  {
      name: "Meloxicam",
      activeIngredients: "Meloxicam",
      dosageStrength: "7.5 mg",
      dosageForm: "Tablet",
      manufacturer: "Mobic",
      indications: "Pain relief",
      contraindications: "Allergy to meloxicam",
      sideEffects: "Stomach upset",
      storageConditions: "Store below 30°C",
      image: "meloxicam.jpg",
      diseases: "Pain, Inflammation"
  },
  {
      name: "Metoprolol",
      activeIngredients: "Metoprolol",
      dosageStrength: "25 mg",
      dosageForm: "Tablet",
      manufacturer: "Toprol XL",
      indications: "Blood pressure control",
      contraindications: "Allergy to metoprolol",
      sideEffects: "Fatigue",
      storageConditions: "Store below 25°C",
      image: "metoprolol.jpg",
      diseases: "High blood pressure, Angina"
  },
  {
      name: "Nortriptyline",
      activeIngredients: "Nortriptyline",
      dosageStrength: "25 mg",
      dosageForm: "Tablet",
      manufacturer: "Pamelor",
      indications: "Depression treatment",
      contraindications: "Allergy to nortriptyline",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 25°C",
      image: "nortriptyline.jpg",
      diseases: "Depression, Neuropathic pain"
  },
  {
      name: "Olanzapine",
      activeIngredients: "Olanzapine",
      dosageStrength: "10 mg",
      dosageForm: "Tablet",
      manufacturer: "Zyprexa",
      indications: "Antipsychotic",
      contraindications: "Allergy to olanzapine",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 25°C",
      image: "olanzapine.jpg",
      diseases: "Schizophrenia, Bipolar disorder"
  },
  {
      name: "Prednisone",
      activeIngredients: "Prednisone",
      dosageStrength: "10 mg",
      dosageForm: "Tablet",
      manufacturer: "Generic",
      indications: "Inflammation relief",
      contraindications: "Allergy to prednisone",
      sideEffects: "Weight gain",
      storageConditions: "Store at room temperature",
      image: "prednisone.jpg",
      diseases: "Inflammatory conditions, Allergic reactions"
  },
  {
      name: "Quetiapine",
      activeIngredients: "Quetiapine",
      dosageStrength: "100 mg",
      dosageForm: "Tablet",
      manufacturer: "Seroquel",
      indications: "Antipsychotic",
      contraindications: "Allergy to quetiapine",
      sideEffects: "Drowsiness",
      storageConditions: "Store at room temperature",
      image: "quetiapine.jpg",
      diseases: "Schizophrenia, Bipolar disorder"
  },
  {
      name: "Risperidone",
      activeIngredients: "Risperidone",
      dosageStrength: "3 mg",
      dosageForm: "Tablet",
      manufacturer: "Risperdal",
      indications: "Antipsychotic",
      contraindications: "Allergy to risperidone",
      sideEffects: "Drowsiness",
      storageConditions: "Store at room temperature",
      image: "risperidone.jpg",
      diseases: "Schizophrenia, Bipolar disorder"
  },
  {
      name: "Sildenafil",
      activeIngredients: "Sildenafil",
      dosageStrength: "100 mg",
      dosageForm: "Tablet",
      manufacturer: "Viagra",
      indications: "Erectile dysfunction treatment",
      contraindications: "Allergy to sildenafil",
      sideEffects: "Headache",
      storageConditions: "Store below 30°C",
      image: "sildenafil.jpg",
      diseases: "Erectile dysfunction (ED), Pulmonary arterial hypertension (PAH)"
  },
  {
      name: "Temazepam",
      activeIngredients: "Temazepam",
      dosageStrength: "30 mg",
      dosageForm: "Tablet",
      manufacturer: "Restoril",
      indications: "Insomnia treatment",
      contraindications: "Allergy to temazepam",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 30°C",
      image: "temazepam.jpg",
      diseases: "Insomnia"
  },
  {
      name: "Venlafaxine",
      activeIngredients: "Venlafaxine",
      dosageStrength: "37.5 mg",
      dosageForm: "Capsule",
      manufacturer: "Effexor XR",
      indications: "Depression treatment",
      contraindications: "Allergy to venlafaxine",
      sideEffects: "Nausea",
      storageConditions: "Store at room temperature",
      image: "venlafaxine.jpg",
      diseases: "Depression, Generalized anxiety disorder (GAD)"
  },
  {
      name: "Allopurinol",
      activeIngredients: "Allopurinol",
      dosageStrength: "100 mg",
      dosageForm: "Tablet",
      manufacturer: "Zyloprim",
      indications: "Gout treatment",
      contraindications: "Allergy to allopurinol",
      sideEffects: "Rash",
      storageConditions: "Store at room temperature",
      image: "allopurinol.jpg",
      diseases: "Gout, Kid"
  },
  {
      name: "Ciprofloxacin",
      activeIngredients: "Ciprofloxacin",
      dosageStrength: "500 mg",
      dosageForm: "Tablet",
      manufacturer: "Cipro",
      indications: "Antibiotic",
      contraindications: "Allergy to ciprofloxacin",
      sideEffects: "Diarrhea",
      storageConditions: "Store below 30°C",
      image: "ciprofloxacin.jpg",
      diseases: "Bacterial infections, Urinary tract infections (UTIs)"
  },
  {
      name: "Furosemide",
      activeIngredients: "Furosemide",
      dosageStrength: "40 mg",
      dosageForm: "Tablet",
      manufacturer: "Lasix",
      indications: "Diuretic",
      contraindications: "Allergy to furosemide",
      sideEffects: "Dizziness",
      storageConditions: "Store at room temperature",
      image: "furosemide.jpg",
      diseases: "Edema, Congestive heart failure (CHF)"
  },
  {
      name: "Metoprolol",
      activeIngredients: "Metoprolol",
      dosageStrength: "50 mg",
      dosageForm: "Tablet",
      manufacturer: "Toprol XL",
      indications: "Blood pressure control",
      contraindications: "Allergy to metoprolol",
      sideEffects: "Fatigue",
      storageConditions: "Store below 25°C",
      image: "metoprolol.jpg",
      diseases: "High blood pressure, Angina"
  },
  {
      name: "Gabapentin",
      activeIngredients: "Gabapentin",
      dosageStrength: "300 mg",
      dosageForm: "Capsule",
      manufacturer: "Neurontin",
      indications: "Neuropathic pain relief",
      contraindications: "Allergy to gabapentin",
      sideEffects: "Dizziness",
      storageConditions: "Store at room temperature",
      image: "gabapentin.jpg",
      diseases: "Neuropathic pain, Seizures"
  },
  {
      name: "Alprazolam",
      activeIngredients: "Alprazolam",
      dosageStrength: "0.5 mg",
      dosageForm: "Tablet",
      manufacturer: "Xanax",
      indications: "Anxiety relief",
      contraindications: "Allergy to alprazolam",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 30°C",
      image: "alprazolam.jpg",
      diseases: "Anxiety, Panic disorder"
  },
  {
      name: "Doxycycline",
      activeIngredients: "Doxycycline",
      dosageStrength: "100 mg",
      dosageForm: "Capsule",
      manufacturer: "Vibramycin",
      indications: "Antibiotic",
      contraindications: "Allergy to doxycycline",
      sideEffects: "Sun sensitivity",
      storageConditions: "Store at room temperature",
      image: "doxycycline.jpg",
      diseases: "Bacterial infections, Acne"
  },
  {
      name: "Bupropion",
      activeIngredients: "Bupropion",
      dosageStrength: "150 mg",
      dosageForm: "Tablet",
      manufacturer: "Wellbutrin",
      indications: "Depression treatment",
      contraindications: "Allergy to bupropion",
      sideEffects: "Insomnia",
      storageConditions: "Store below 25°C",
      image: "bupropion.jpg",
      diseases: "Depression, Seasonal affective disorder (SAD)"
  },
  {
      name: "Duloxetine",
      activeIngredients: "Duloxetine",
      dosageStrength: "30 mg",
      dosageForm: "Capsule",
      manufacturer: "Cymbalta",
      indications: "Depression treatment",
      contraindications: "Allergy to duloxetine",
      sideEffects: "Nausea",
      storageConditions: "Store at room temperature",
      image: "duloxetine.jpg",
      diseases: "Depression, Generalized anxiety disorder (GAD)"
  },
  {
      name: "Diazepam",
      activeIngredients: "Diazepam",
      dosageStrength: "10 mg",
      dosageForm: "Tablet",
      manufacturer: "Valium",
      indications: "Anxiety relief",
      contraindications: "Allergy to diazepam",
      sideEffects: "Drowsiness",
      storageConditions: "Store below 25°C",
      image: "diazepam.jpg",
      diseases: "Anxiety, Muscle spasms"
  },
  {
      name: "Amlodipine",
      activeIngredients: "Amlodipine",
      dosageStrength: "10 mg",
      dosageForm: "Tablet",
      manufacturer: "Norvasc",
      indications: "Blood pressure control",
      contraindications: "Allergy to amlodipine",
      sideEffects: "Swelling of ankles",
      storageConditions: "Store at room temperature",
      image: "amlodipine.jpg",
      diseases: "High blood pressure, Angina"
  },
  {
      name: "Sildenafil",
      activeIngredients: "Sildenafil",
      dosageStrength: "50 mg",
      dosageForm: "Tablet",
      manufacturer: "Viagra",
      indications: "Erectile dysfunction treatment",
      contraindications: "Allergy to sildenafil",
      sideEffects: "Headache",
      storageConditions: "Store below 30°C",
      image: "sildenafil.jpg",
      diseases: "Erectile dysfunction (ED), Pulmonary arterial hypertension (PAH)"
  },
  {
      name: "Fluoxetine",
      activeIngredients: "Fluoxetine",
      dosageStrength: "20 mg",
      dosageForm: "Capsule",
      manufacturer: "Prozac",
      indications: "Depression treatment",
      contraindications: "Allergy to fluoxetine",
      sideEffects: "Insomnia",
      storageConditions: "Store at room temperature",
      image: "fluoxetine.jpg",
      diseases: "Depression, Obsessive-compulsive disorder (OCD)"
  },
  {
      name: "Metronidazole",
      activeIngredients: "Metronidazole",
      dosageStrength: "500 mg",
      dosageForm: "Tablet",
      manufacturer: "Flagyl",
      indications: "Antibiotic",
      contraindications: "Allergy to metronidazole",
      sideEffects: "Nausea",
      storageConditions: "Store below 25°C",
      image: "metronidazole.jpg",
      diseases: "Bacterial infections, Protozoal infections"
  },

  {
  name: "Levofloxacin",
  activeIngredients: "Levofloxacin",
  dosageStrength: "500 mg",
  dosageForm: "Tablet",
  manufacturer: "Levaquin",
  indications: "Antibiotic",
  contraindications: "Allergy to levofloxacin",
  sideEffects: "Diarrhea",
  storageConditions: "Store below 25°C",
  image: "levofloxacin.jpg",
  diseases: "Bacterial infections, Sinusitis"
  },
  {
  name: "Lorazepam",
  activeIngredients: "Lorazepam",
  dosageStrength: "1 mg",
  dosageForm: "Tablet",
  manufacturer: "Ativan",
  indications: "Anxiety relief",
  contraindications: "Allergy to lorazepam",
  sideEffects: "Drowsiness",
  storageConditions: "Store below 30°C",
  image: "lorazepam.jpg",
  diseases: "Anxiety, Insomnia"
  },
  {
  name: "Mirtazapine",
  activeIngredients: "Mirtazapine",
  dosageStrength: "15 mg",
  dosageForm: "Tablet",
  manufacturer: "Remeron",
  indications: "Depression treatment",
  contraindications: "Allergy to mirtazapine",
  sideEffects: "Drowsiness",
  storageConditions: "Store at room temperature",
  image: "mirtazapine.jpg",
  diseases: "Depression, Appetite stimulation"
  },
  {
  name: "Naproxen",
  activeIngredients: "Naproxen",
  dosageStrength: "500 mg",
  dosageForm: "Tablet",
  manufacturer: "Aleve",
  indications: "Pain relief",
  contraindications: "Allergy to naproxen",
  sideEffects: "Stomach upset",
  storageConditions: "Store below 25°C",
  image: "naproxen.jpg",
  diseases: "Pain, Inflammation"
  },
  {
  name: "Pregabalin",
  activeIngredients: "Pregabalin",
  dosageStrength: "75 mg",
  dosageForm: "Capsule",
  manufacturer: "Lyrica",
  indications: "Neuropathic pain relief",
  contraindications: "Allergy to pregabalin",
  sideEffects: "Dizziness",
  storageConditions: "Store at room temperature",
  image: "pregabalin.jpg",
  diseases: "Neuropathic pain, Fibromyalgia"
  },
  {
  name: "Sertraline",
  activeIngredients: "Sertraline",
  dosageStrength: "50 mg",
  dosageForm: "Tablet",
  manufacturer: "Zoloft",
  indications: "Depression treatment",
  contraindications: "Allergy to sertraline",
  sideEffects: "Nausea",
  storageConditions: "Store at room temperature",
  image: "sertraline.jpg",
  diseases: "Depression, Obsessive-compulsive disorder (OCD)"
  },
  {
  name: "Tramadol",
  activeIngredients: "Tramadol",
  dosageStrength: "50 mg",
  dosageForm: "Tablet",
  manufacturer: "Ultram",
  indications: "Pain relief",
  contraindications: "Allergy to tramadol",
  sideEffects: "Dizziness",
  storageConditions: "Store below 30°C",
  image: "tramadol.jpg",
  diseases: "Pain, Chronic pain"
  },
  {
  name: "Warfarin",
  activeIngredients: "Warfarin",
  dosageStrength: "5 mg",
  dosageForm: "Tablet",
  manufacturer: "Coumadin",
  indications: "Blood thinner",
  contraindications: "Allergy to warfarin",
  sideEffects: "Bleeding",
  storageConditions: "Store at room temperature",
  image: "warfarin.jpg",
  diseases: "Blood clots, Atrial fibrillation"
  },
  {
  name: "DOLO",
  activeIngredients: "Paracetamol",
  dosageStrength: "Varies",
  dosageForm: "Tablet, Syrup",
  manufacturer: "Various (e.g., DOLO, Tylenol)",
  indications: "Fever, Pain relief",
  contraindications: "Allergy to paracetamol",
  sideEffects: "Skin rash (in rare cases)",
  storageConditions: "Store below 25°C",
  image: "dolo.jpg",
  diseases: "Fever, Headache, Toothache"
  },
  {
  name: "Cetirizine",
  activeIngredients: "Cetirizine",
  dosageStrength: "10 mg",
  dosageForm: "Tablet",
  manufacturer: "Zyrtec",
  indications: "Allergy relief",
  contraindications: "Allergy to cetirizine",
  sideEffects: "Drowsiness",
  storageConditions: "Store at room temperature",
  image: "cetirizine.jpg",
  diseases: "Allergic rhinitis, Hives, Itchy eyes"
  },
  {
  name: "Levocetirizine",
  activeIngredients: "Levocetirizine",
  dosageStrength: "5 mg",
  dosageForm: "Tablet",
  manufacturer: "Xyzal",
  indications: "Allergy relief",
  contraindications: "Allergy to levocetirizine",
  sideEffects: "Drowsiness",
  storageConditions: "Store at room temperature",
  image: "levocetirizine.jpg",
  diseases: "Allergic rhinitis, Hives, Itchy eyes"
  },
  {
  name: "Diclofenac",
  activeIngredients: "Diclofenac",
  dosageStrength: "50 mg",
  dosageForm: "Tablet",
  manufacturer: "Various (e.g., Voltaren, Cataflam)",
  indications: "Pain relief, Inflammation relief",
  contraindications: "Allergy to diclofenac, Aspirin-sensitive asthma",
  sideEffects: "Stomach upset, Increased risk of cardiovascular events",
  storageConditions: "Store below 30°C",
  image: "diclofenac.jpg",
  diseases: "Pain, Inflammation"
  },
  {
  name: "Zincovit",
  activeIngredients: "Various vitamins and minerals",
  dosageStrength: "Varies",
  dosageForm: "Tablet",
  manufacturer: "Apex Laboratories Pvt. Ltd.",
  indications: "Nutritional supplement",
  contraindications: "Allergy to any of the ingredients",
  sideEffects: "No major side effects reported",
  storageConditions: "Store below 25°C",
  image: "zincovit.jpg",
  diseases: "Nutritional deficiency"
  },
  {
  name: "Azithromycin",
  activeIngredients: "Azithromycin",
  dosageStrength: "250 mg, 500 mg",
  dosageForm: "Tablet, Capsule",
  manufacturer: "Various (e.g., Zithromax, Azithrocin)",
  indications: "Bacterial infection treatment",
  contraindications: "Allergy to azithromycin",
  sideEffects: "Nausea, Diarrhea",
  storageConditions: "Store below 30°C",
  image: "azithromycin.jpg",
  diseases: "Bacterial infections, Respiratory tract infections"
  }

    // Add tablet objects here as provided in the initial code snippet
];
// Define the dataset with tablet information


// Function to search for tablets based on tablet name
function searchTabletsByTabletName(query) {
    query = query.toLowerCase();
    const results = tablets.filter(tablet =>
        tablet.name.toLowerCase().includes(query)
    );
    return results;
}

// Function to search for tablets based on disease name
function searchTabletsByDisease(query) {
    query = query.toLowerCase();
    const results = tablets.filter(tablet =>
        tablet.diseases.toLowerCase().includes(query)
    );
    return results;
}

// Function to display search results
function displayResults(tabletResults, diseaseResults) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (tabletResults.length === 0 && diseaseResults.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    } else {
        if (tabletResults.length > 0) {
            const tabletHeader = document.createElement('h2');
            tabletHeader.textContent = 'Tablet Information';
            resultsDiv.appendChild(tabletHeader);

            tabletResults.forEach(tablet => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <h3>${tablet.name}</h3>
                    <p><strong>Active Ingredients:</strong> ${tablet.activeIngredients}</p>
                    <p><strong>Dosage Strength:</strong> ${tablet.dosageStrength}</p>
                    <p><strong>Dosage Form:</strong> ${tablet.dosageForm}</p>
                    <p><strong>Manufacturer:</strong> ${tablet.manufacturer}</p>
                    <p><strong>Side Effects:</strong> ${tablet.sideEffects}</p>
                    <p><strong>Storage Conditions:</strong> ${tablet.storageConditions}</p>
                    <p><strong>Indications:</strong> ${tablet.indications}</p>
                `;
                resultsDiv.appendChild(resultItem);
            });
        }

        if (diseaseResults.length > 0) {
            const diseaseHeader = document.createElement('h2');
            diseaseHeader.textContent = 'Disease Information';
            resultsDiv.appendChild(diseaseHeader);

            diseaseResults.forEach(disease => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <h3>${disease.name}</h3>
                    <p><strong>indications:</strong> ${disease.indications}</p>
                    <p><strong>Active Ingredients:</strong> ${disease.activeIngredients}</p>
                    
                    <p><strong>Dosage Strength:</strong> ${disease.dosageStrength}</p>
                    <p><strong>Dosage Form:</strong> ${disease.dosageForm}</p>
                    <p><strong>Manufacturer:</strong> ${disease.manufacturer}</p>

                `;
                resultsDiv.appendChild(resultItem);
            });
        }
    }
}

// Event listener for search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const query = document.getElementById('searchInput').value.trim();
    const tabletResults = searchTabletsByTabletName(query);
    const diseaseResults = searchTabletsByDisease(query);
    displayResults(tabletResults, diseaseResults);
});
