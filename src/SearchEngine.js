 // Sample tree structure (Example data)
 import { useState, useContext} from "react";
 import DisplayPane from "./DisplayPane";


 const medicalSpecialties = {
  "Internal Medicine": {
      "Nephrology": {},
      "Endocrinology, Diabetes & Metabolism": {},
      "Cardiovascular Disease": {},
      "Pulmonary Disease": {},
      "Geriatric Medicine": {},
      "Gastroenterology": {},
      "Infectious Disease": {},
      "Medical Oncology": {},
      "Hematology & Oncology": {},
      "Clinical Cardiac Electrophysiology": {},
      "Rheumatology": {},
      "Sports Medicine": {},
      "Sleep Medicine": {},
      "Hospice and Palliative Medicine": {},
      "Critical Care Medicine": {},
      "Interventional Cardiology": {},
      "Allergy & Immunology": {},
      "Adult Congenital Heart Disease": {},
      "Advanced Heart Failure and Transplant Cardiology": {},
      "Adolescent Medicine": {},
      "Addiction Medicine": {},
      "Hepatology": {},
      "Hematology": {},
      "Transplant Hepatology": {},
      "Obesity Medicine": {},
      "Magnetic Resonance Imaging (MRI)": {},
      "Clinical & Laboratory Immunology": {},
      "Hypertension Specialist": {}
  },
  "Medical Genetics": {
      "Clinical Genetics (M.D.)": {},
      "Clinical Cytogenetics": {},
      "Clinical Biochemical Genetics": {},
      "Clinical Molecular Genetics": {},
      "Ph.D. Medical Genetics": {},
      "Molecular Genetic Pathology": {}
  },
  "Obstetrics & Gynecology": {
      "Maternal & Fetal Medicine": {},
      "Gynecologic Oncology": {},
      "Gynecology": {},
      "Reproductive Endocrinology": {},
      "Female Pelvic Medicine and Reconstructive Surgery": {},
      "Obstetrics": {},
      "Hospice and Palliative Medicine": {},
      "Critical Care Medicine": {},
      "Obesity Medicine": {}
  },
  "Ophthalmology": {
      "Pediatric Ophthalmology and Strabismus Specialist": {},
      "Ophthalmic Plastic and Reconstructive Surgery": {},
      "Retina Specialist": {},
      "Glaucoma Specialist": {},
      "Neuro-ophthalmology": {},
      "Cornea and External Diseases Specialist": {},
      "Uveitis and Ocular Inflammatory Disease": {}
  },
  "Optometrist": {
      "Corneal and Contact Management": {},
      "Vision Therapy": {},
      "Low Vision Rehabilitation": {},
      "Pediatrics": {},
      "Occupational Vision": {},
      "Sports Vision": {}
  },
  "Orthopaedic Surgery": {
      "Adult Reconstructive Orthopaedic Surgery": {},
      "Hand Surgery": {},
      "Sports Medicine": {},
      "Orthopaedic Surgery of the Spine": {},
      "Foot and Ankle Surgery": {},
      "Orthopaedic Trauma": {},
      "Pediatric Orthopaedic Surgery": {}
  },
  "Otolaryngology": {
      "Otolaryngology/Facial Plastic Surgery": {},
      "Sleep Medicine": {},
      "Pediatric Otolaryngology": {},
      "Plastic Surgery within the Head & Neck": {},
      "Facial Plastic Surgery": {},
      "Otology & Neurotology": {},
      "Otolaryngic Allergy": {}
  },
  "Pain Medicine": {
      "Interventional Pain Medicine": {},
      "Pain Medicine": {}
  },
  "Pathology": {
      "Anatomic Pathology": {},
      "Pediatric Pathology": {},
      "Anatomic Pathology & Clinical Pathology": {},
      "Neuropathology": {},
      "Cytopathology": {},
      "Dermatopathology": {},
      "Blood Banking & Transfusion Medicine": {},
      "Clinical Pathology/Laboratory Medicine": {},
      "Forensic Pathology": {},
      "Hematology": {},
      "Clinical Pathology": {},
      "Molecular Genetic Pathology": {},
      "Medical Microbiology": {},
      "Chemical Pathology": {},
      "Immunopathology": {},
      "Clinical Informatics": {}
  },
  "Pediatrics": {
      "Pediatric Hematology-Oncology": {},
      "Adolescent Medicine": {},
      "Neonatal-Perinatal Medicine": {},
      "Pediatric Critical Care Medicine": {},
      "Pediatric Infectious Diseases": {},
      "Pediatric Nephrology": {},
      "Pediatric Endocrinology": {},
      "Pediatric Gastroenterology": {},
      "Pediatric Emergency Medicine": {},
      "Pediatric Pulmonology": {},
      "Pediatric Cardiology": {},
      "Sports Medicine": {},
      "Pediatric Rheumatology": {},
      "Developmental - Behavioral Pediatrics": {},
      "Clinical & Laboratory Immunology": {},
      "Pediatric Allergy/Immunology": {},
      "Neurodevelopmental Disabilities": {},
      "Child Abuse Pediatrics": {},
      "Sleep Medicine": {},
      "Hospice and Palliative Medicine": {},
      "Pediatric Transplant Hepatology": {},
      "Medical Toxicology": {},
      "Obesity Medicine": {}
  },
  "Psychiatry & Neurology": {
      "Neurology": {},
      "Addiction Medicine": {},
      "Vascular Neurology": {},
      "Child & Adolescent Psychiatry": {},
      "Psychiatry": {},
      "Sleep Medicine": {},
      "Geriatric Psychiatry": {},
      "Addiction Psychiatry": {},
      "Neurology with Special Qualifications in Child Neurology": {},
      "Neuromuscular Medicine": {},
      "Neurocritical Care": {},
      "Clinical Neurophysiology": {},
      "Forensic Psychiatry": {},
      "Psychosomatic Medicine": {},
      "Pain Medicine": {},
      "Behavioral Neurology & Neuropsychiatry": {},
      "Neurodevelopmental Disabilities": {},
      "Sports Medicine": {},
      "Hospice and Palliative Medicine": {},
      "Diagnostic Neuroimaging": {},
      "Brain Injury Medicine": {},
      "Obesity Medicine": {}
  },
  "Physical Medicine & Rehabilitation": {
      "Pain Medicine": {},
      "Sports Medicine": {},
      "Pediatric Rehabilitation Medicine": {},
      "Brain Injury Medicine": {},
      "Hospice and Palliative Medicine": {},
      "Spinal Cord Injury Medicine": {},
      "Neuromuscular Medicine": {}
  },
  "Podiatrist": {
      "Primary Podiatric Medicine": {},
      "Foot Surgery": {},
      "Foot & Ankle Surgery": {},
      "Sports Medicine": {},
      "Public Medicine": {},
      "Radiology": {}
  },
  "Preventive Medicine": {
      "Aerospace Medicine": {},
      "Occupational Medicine": {},
      "Public Health & General Preventive Medicine": {},
      "Sports Medicine": {},
      "Addiction Medicine": {},
      "Preventive Medicine/Occupational Environmental Medicine": {},
      "Undersea and Hyperbaric Medicine": {},
      "Clinical Informatics": {},
      "Medical Toxicology": {},
      "Obesity Medicine": {}
  },
  "Radiology": {
      "Diagnostic Radiology": {},
      "Radiation Oncology": {},
      "Body Imaging": {},
      "Vascular & Interventional Radiology": {},
      "Pediatric Radiology": {},
      "Neuroradiology": {},
      "Diagnostic Ultrasound": {},
      "Therapeutic Radiology": {},
      "Radiological Physics": {},
      "Nuclear Radiology": {},
      "Diagnostic Neuroimaging": {},
      "Hospice and Palliative Medicine": {}
  },
  "Surgery": {
      "Plastic and Reconstructive Surgery": {},
      "Vascular Surgery": {},
      "Trauma Surgery": {},
      "Surgical Oncology": {},
      "Surgical Critical Care": {},
      "Pediatric Surgery": {},
      "Surgery of the Hand": {},
      "Hospice and Palliative Medicine": {}
  },
  "Urology": {
      "Female Pelvic Medicine and Reconstructive Surgery": {},
      "Pediatric Urology": {}
  },
  "Allergy & Immunology": {
      "Allergy": {},
      "Clinical & Laboratory Immunology": {}
  },
  "Anesthesiology": {
      "Pain Medicine": {},
      "Pediatric Anesthesiology": {},
      "Critical Care Medicine": {},
      "Addiction Medicine": {},
      "Hospice and Palliative Medicine": {}
  },
  "Chiropractor": {
      "Orthopedic": {},
      "Nutrition": {},
      "Neurology": {},
      "Internist": {},
      "Pediatric Chiropractor": {},
      "Thermography": {},
      "Rehabilitation": {},
      "Independent Medical Examiner": {},
      "Sports Physician": {},
      "Occupational Health": {},
      "Radiology": {}
  },
  "Dermatology": {
      "MOHS-Micrographic Surgery": {},
      "Dermatopathology": {},
      "Procedural Dermatology": {},
      "Pediatric Dermatology": {},
      "Clinical & Laboratory Dermatological Immunology": {}
  },
  "Emergency Medicine": {
      "Undersea and Hyperbaric Medicine": {},
      "Pediatric Emergency Medicine": {},
      "Medical Toxicology": {},
      "Emergency Medical Services": {},
      "Sports Medicine": {},
      "Hospice and Palliative Medicine": {}
  },
  "Family Medicine": {
      "Adolescent Medicine": {},
      "Geriatric Medicine": {},
      "Adult Medicine": {},
      "Hospice and Palliative Medicine": {},
      "Sports Medicine": {},
      "Addiction Medicine": {},
      "Sleep Medicine": {},
      "Obesity Medicine": {}
  },
  "Nuclear Medicine": {
      "Nuclear Imaging & Therapy": {},
      "Nuclear Cardiology": {},
      "In Vivo & In Vitro Nuclear Medicine": {}
  },
  "Plastic Surgery": {
      "Plastic Surgery Within the Head and Neck": {},
      "Surgery of the Hand": {}
  },
  "Audiologist": {
      "Assistive Technology Practitioner": {},
      "Assistive Technology Supplier": {}
  }
};

  
function SearchEng() {
  const [selectedParent, setSelectedParent] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
  const [error, setError] = useState("");

  // Handles Parent Selection
  const handleParentSelection = (e) => {
    setSelectedParent(e.target.value);
    setSelectedChild(""); // Reset child when parent changes
  };

  // Handles Child Selection
  const handleChildSelection = (e) => {
    setSelectedChild(e.target.value);
  };

  // API Call to Post Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedParent || !selectedChild) {
      setError("Please select both a parent and a child.");
      return;
    }

    const data = { parent: selectedParent, child: selectedChild };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/search_db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok) {
        setError(result.message || "Failed to submit.");
      } else {
        //alert("Selection submitted successfully!");
        setError("");
      }
    } catch (error) {
      setError("Error connecting to the server.");
    }
  };

  return (
    <div>
      {/* Parent Dropdown */}
      <label>Classification:</label>
      <select value={selectedParent} onChange={handleParentSelection}>
        <option value="">Select Parent</option>
        {Object.keys(medicalSpecialties).map((parent) => (
          <option key={parent} value={parent}>
            {parent}
          </option>
        ))}
      </select>

      {/* Child Dropdown (only if parent is selected) */}
      {selectedParent && (
        <>
          <label>Specialization:</label>
          <select value={selectedChild} onChange={handleChildSelection}>
            <option value="">Select Child</option>
            {Object.keys(medicalSpecialties[selectedParent]).map((child) => (
              <option key={child} value={child}>
                {child}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit}>Submit</button>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SearchEng;
