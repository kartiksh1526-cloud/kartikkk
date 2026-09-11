/* =========================================================
   VERIFYFLOW - APPLICANT DETAILS JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const form = document.getElementById("applicantForm");
const occupation = document.getElementById("occupation");
const toast = document.getElementById("toast");


/* =========================================================
   OCCUPATION PANELS
========================================================= */

const occupationPanels = [
    "studentFields",
    "employeeFields",
    "selfEmployedFields",
    "businessFields",
    "professionalFields",
    "retiredFields",
    "homemakerFields",
    "otherFields"
];


/* =========================================================
   OCCUPATION MAP
========================================================= */

const occupationMap = {

    student: "studentFields",

    employee: "employeeFields",

    "self-employed": "selfEmployedFields",

    business: "businessFields",

    professional: "professionalFields",

    retired: "retiredFields",

    homemaker: "homemakerFields",

    other: "otherFields"

};


/* =========================================================
   REQUIRED OCCUPATION FIELDS
========================================================= */

const occupationRequiredFields = {

    student: [
        "institutionName",
        "courseClass"
    ],

    employee: [
        "companyName",
        "designation"
    ],

    "self-employed": [
        "natureOfWork"
    ],

    business: [
        "businessName",
        "businessType"
    ],

    professional: [
        "profession"
    ],

    other: [
        "otherOccupation"
    ]

};


/* =========================================================
   SHOW OCCUPATION FIELDS
========================================================= */

function showOccupationFields() {

    const selectedOccupation = occupation.value;


    /* Hide all occupation panels */

    occupationPanels.forEach(function(panelId) {

        const panel = document.getElementById(panelId);

        if (panel) {
            panel.classList.remove("show");
        }

    });


    /* Remove required attribute
       from all occupation fields */

    clearOccupationRequired();


    /* Show selected occupation panel */

    const selectedPanel =
        occupationMap[selectedOccupation];

    if (selectedPanel) {

        const panel =
            document.getElementById(selectedPanel);

        if (panel) {
            panel.classList.add("show");
        }

    }


    /* Add required attribute
       to selected occupation fields */

    const requiredFields =
        occupationRequiredFields[selectedOccupation] || [];

    requiredFields.forEach(function(fieldId) {

        const field =
            document.getElementById(fieldId);

        if (field) {
            field.required = true;
        }

    });

}


/* =========================================================
   CLEAR OCCUPATION REQUIRED FIELDS
========================================================= */

function clearOccupationRequired() {

    Object.values(occupationRequiredFields)
        .flat()
        .forEach(function(fieldId) {

            const field =
                document.getElementById(fieldId);

            if (field) {
                field.required = false;
            }

        });

}


/* =========================================================
   GET FIELD VALUE
========================================================= */

function getValue(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return "";
    }


    /* Checkbox */

    if (element.type === "checkbox") {
        return element.checked;
    }


    /* Normal input/select */

    return element.value.trim();

}


/* =========================================================
   SET FIELD VALUE
========================================================= */

function setValue(id, value) {

    const element =
        document.getElementById(id);

    if (!element || value === undefined || value === null) {
        return;
    }


    /* Checkbox */

    if (element.type === "checkbox") {

        element.checked =
            value === true ||
            value === "true";

    }

    /* Normal input/select */

    else {

        element.value = value;

    }

}


/* =========================================================
   COLLECT FORM DATA
========================================================= */

function collectFormData() {

    return {

        /* =========================
           PERSONAL
        ========================= */

        personal: {

            firstName:
                getValue("firstName"),

            middleName:
                getValue("middleName"),

            lastName:
                getValue("lastName"),

            fatherName:
                getValue("fatherName"),

            dob:
                getValue("dob"),

            gender:
                getValue("gender"),

            nationality:
                getValue("nationality"),

            occupation:
                getValue("occupation")

        },


        /* =========================
           CONTACT
        ========================= */

        contact: {

            email:
                getValue("email"),

            mobile:
                getValue("mobile"),

            alternateMobile:
                getValue("alternateMobile")

        },


        /* =========================
           ADDRESS
        ========================= */

        address: {

            address1:
                getValue("address1"),

            address2:
                getValue("address2"),

            city:
                getValue("city"),

            state:
                getValue("state"),

            postalCode:
                getValue("postalCode"),

            country:
                getValue("country")

        },


        /* =========================
           IDENTITY
        ========================= */

        identity: {

            documentType:
                getValue("documentType"),

            documentNumber:
                getValue("documentNumber"),

            issueDate:
                getValue("issueDate"),

            expiryDate:
                getValue("expiryDate"),

            issuingAuthority:
                getValue("issuingAuthority")

        },


        /* =========================
           SELECTED OCCUPATION
        ========================= */

        occupation:
            getValue("occupation"),


        /* =========================
           STUDENT
        ========================= */

        student: {

            institutionName:
                getValue("institutionName"),

            courseClass:
                getValue("courseClass")

        },


        /* =========================
           EMPLOYEE
        ========================= */

        employee: {

            companyName:
                getValue("companyName"),

            designation:
                getValue("designation"),

            department:
                getValue("department"),

            employeeId:
                getValue("employeeId"),

            joiningDate:
                getValue("joiningDate"),

            experience:
                getValue("employeeExperience"),

            employmentType:
                getValue("employmentType")

        },


        /* =========================
           SELF EMPLOYED
        ========================= */

        selfEmployed: {

            natureOfWork:
                getValue("natureOfWork"),

            businessName:
                getValue("selfBusinessName"),

            experience:
                getValue("selfExperience"),

            registrationNumber:
                getValue("selfRegistration"),

            gstNumber:
                getValue("selfGST")

        },


        /* =========================
           BUSINESS
        ========================= */

        business: {

            businessName:
                getValue("businessName"),

            businessType:
                getValue("businessType"),

            registrationNumber:
                getValue("businessRegistration"),

            gstNumber:
                getValue("businessGST"),

            startDate:
                getValue("businessStartDate"),

            experience:
                getValue("businessExperience"),

            website:
                getValue("businessWebsite")

        },


        /* =========================
           PROFESSIONAL
        ========================= */

        professional: {

            profession:
                getValue("profession"),

            registrationNumber:
                getValue("professionalRegistration"),

            qualification:
                getValue("qualification"),

            experience:
                getValue("professionalExperience")

        },


        /* =========================
           RETIRED
        ========================= */

        retired: {

            previousOrganization:
                getValue("previousOrganization"),

            previousDesignation:
                getValue("previousDesignation"),

            retirementDate:
                getValue("retirementDate"),

            experience:
                getValue("retiredExperience")

        },


        /* =========================
           HOMEMAKER
        ========================= */

        homemaker: {

            householdRole:
                getValue("householdRole"),

            incomeSource:
                getValue("incomeSource")

        },


        /* =========================
           OTHER
        ========================= */

        other: {

            description:
                getValue("otherOccupation")

        },


        /* =========================
           CONSENT
        ========================= */

        consent: {

            informationConsent:
                getValue("informationConsent"),

            verificationConsent:
                getValue("verificationConsent"),

            termsConsent:
                getValue("termsConsent")

        },


        /* =========================
           SYSTEM DATA
        ========================= */

        createdAt:
            new Date().toISOString(),

        verificationStatus:
            "Pending"

    };

}


/* =========================================================
   RESTORE SAVED DATA
========================================================= */

function restoreFormData(data) {

    if (!data || typeof data !== "object") {
        return;
    }


    /* =========================
       PERSONAL
    ========================= */

    if (data.personal) {

        setValue(
            "firstName",
            data.personal.firstName
        );

        setValue(
            "middleName",
            data.personal.middleName
        );

        setValue(
            "lastName",
            data.personal.lastName
        );

        setValue(
            "fatherName",
            data.personal.fatherName
        );

        setValue(
            "dob",
            data.personal.dob
        );

        setValue(
            "gender",
            data.personal.gender
        );

        setValue(
            "nationality",
            data.personal.nationality
        );

        setValue(
            "occupation",
            data.personal.occupation
        );

    }


    /* =========================
       CONTACT
    ========================= */

    if (data.contact) {

        setValue(
            "email",
            data.contact.email
        );

        setValue(
            "mobile",
            data.contact.mobile
        );

        setValue(
            "alternateMobile",
            data.contact.alternateMobile
        );

    }


    /* =========================
       ADDRESS
    ========================= */

    if (data.address) {

        setValue(
            "address1",
            data.address.address1
        );

        setValue(
            "address2",
            data.address.address2
        );

        setValue(
            "city",
            data.address.city
        );

        setValue(
            "state",
            data.address.state
        );

        setValue(
            "postalCode",
            data.address.postalCode
        );

        setValue(
            "country",
            data.address.country
        );

    }


    /* =========================
       IDENTITY
    ========================= */

    if (data.identity) {

        setValue(
            "documentType",
            data.identity.documentType
        );

        setValue(
            "documentNumber",
            data.identity.documentNumber
        );

        setValue(
            "issueDate",
            data.identity.issueDate
        );

        setValue(
            "expiryDate",
            data.identity.expiryDate
        );

        setValue(
            "issuingAuthority",
            data.identity.issuingAuthority
        );

    }


    /* =========================
       STUDENT
    ========================= */

    if (data.student) {

        setValue(
            "institutionName",
            data.student.institutionName
        );

        setValue(
            "courseClass",
            data.student.courseClass
        );

    }


    /* =========================
       EMPLOYEE
    ========================= */

    if (data.employee) {

        setValue(
            "companyName",
            data.employee.companyName
        );

        setValue(
            "designation",
            data.employee.designation
        );

        setValue(
            "department",
            data.employee.department
        );

        setValue(
            "employeeId",
            data.employee.employeeId
        );

        setValue(
            "joiningDate",
            data.employee.joiningDate
        );

        setValue(
            "employeeExperience",
            data.employee.experience
        );

        setValue(
            "employmentType",
            data.employee.employmentType
        );

    }


    /* =========================
       SELF EMPLOYED
    ========================= */

    if (data.selfEmployed) {

        setValue(
            "natureOfWork",
            data.selfEmployed.natureOfWork
        );

        setValue(
            "selfBusinessName",
            data.selfEmployed.businessName
        );

        setValue(
            "selfExperience",
            data.selfEmployed.experience
        );

        setValue(
            "selfRegistration",
            data.selfEmployed.registrationNumber
        );

        setValue(
            "selfGST",
            data.selfEmployed.gstNumber
        );

    }


    /* =========================
       BUSINESS
    ========================= */

    if (data.business) {

        setValue(
            "businessName",
            data.business.businessName
        );

        setValue(
            "businessType",
            data.business.businessType
        );

        setValue(
            "businessRegistration",
            data.business.registrationNumber
        );

        setValue(
            "businessGST",
            data.business.gstNumber
        );

        setValue(
            "businessStartDate",
            data.business.startDate
        );

        setValue(
            "businessExperience",
            data.business.experience
        );

        setValue(
            "businessWebsite",
            data.business.website
        );

    }


    /* =========================
       PROFESSIONAL
    ========================= */

    if (data.professional) {

        setValue(
            "profession",
            data.professional.profession
        );

        setValue(
            "professionalRegistration",
            data.professional.registrationNumber
        );

        setValue(
            "qualification",
            data.professional.qualification
        );

        setValue(
            "professionalExperience",
            data.professional.experience
        );

    }


    /* =========================
       RETIRED
    ========================= */

    if (data.retired) {

        setValue(
            "previousOrganization",
            data.retired.previousOrganization
        );

        setValue(
            "previousDesignation",
            data.retired.previousDesignation
        );

        setValue(
            "retirementDate",
            data.retired.retirementDate
        );

        setValue(
            "retiredExperience",
            data.retired.experience
        );

    }


    /* =========================
       HOMEMAKER
    ========================= */

    if (data.homemaker) {

        setValue(
            "householdRole",
            data.homemaker.householdRole
        );

        setValue(
            "incomeSource",
            data.homemaker.incomeSource
        );

    }


    /* =========================
       OTHER
    ========================= */

    if (data.other) {

        setValue(
            "otherOccupation",
            data.other.description
        );

    }


    /* =========================
       CONSENT
    ========================= */

    if (data.consent) {

        setValue(
            "informationConsent",
            data.consent.informationConsent
        );

        setValue(
            "verificationConsent",
            data.consent.verificationConsent
        );

        setValue(
            "termsConsent",
            data.consent.termsConsent
        );

    }


    /* =========================
       SHOW OCCUPATION PANEL
    ========================= */

    if (occupation.value) {
        showOccupationFields();
    }

}


/* =========================================================
   OCCUPATION CHANGE EVENT
========================================================= */

if (occupation) {

    occupation.addEventListener(
        "change",
        showOccupationFields
    );

}


/* =========================================================
   FORM SUBMIT
========================================================= */

if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /* Browser validation */

            if (!form.checkValidity()) {

                form.reportValidity();

                return;

            }


            /* Collect applicant data */

            const applicantData =
                collectFormData();


            /* Save applicant data */

            localStorage.setItem(
                "verifyflowApplicant",
                JSON.stringify(applicantData)
            );


            /* Mark applicant details complete */

            localStorage.setItem(
                "verifyflowApplicantComplete",
                "true"
            );


            /* Show success toast */

            if (toast) {

                toast.style.display = "block";

            }


            /* Continue to document upload */

            setTimeout(function() {

                window.location.href =
                    "upload.html";

            }, 700);

        }
    );

}


/* =========================================================
   CANCEL BUTTON
========================================================= */

const cancelBtn =
    document.getElementById("cancelBtn");


if (cancelBtn) {

    cancelBtn.addEventListener(
        "click",
        function() {

            window.location.href =
                "index.html";

        }
    );

}


/* =========================================================
   LOAD SAVED DATA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        let savedData = null;


        try {

            savedData =
                JSON.parse(
                    localStorage.getItem(
                        "verifyflowApplicant"
                    ) || "null"
                );

        }

        catch (error) {

            console.error(
                "Unable to read saved applicant data:",
                error
            );

        }


        /* Restore saved data */

        if (savedData) {

            restoreFormData(
                savedData
            );

        }


        /* Show occupation panel */

        if (occupation && occupation.value) {

            showOccupationFields();

        }

    }
);