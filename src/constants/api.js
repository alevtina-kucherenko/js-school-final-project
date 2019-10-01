const USER = 'test1';

export const API = {
    NEW_FORM: `http://forms-app.brutgroot.com/${USER}/forms/new`,
    FORMS_LIST: `http://forms-app.brutgroot.com/${USER}/forms/list`,
    FORM_BY_ID: formId => `http://forms-app.brutgroot.com/${USER}/forms/${formId}`,
    FILL_BY_ID: formId => `http://forms-app.brutgroot.com/${USER}/fills/${formId}`
};