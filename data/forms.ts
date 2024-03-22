const forms:ScotGov.FormTypes = {
    adp: {
        name: 'Adult Disability Payment',
        applyFor: 'Apply for Adult Disability Payment',
        hubTitle: 'Apply for Adult Disability Payment',
    },
    cdp: {
        name: 'Child Disability Payment',
        applyFor: 'Apply for Child Disability Payment',
        hubTitle: 'Apply for Child Disability Payment',
    },
    adpSrti: {
        name: 'Adult Disability Payment under Special Rules for Terminal Illness',
        applyFor: 'Apply for Adult Disability Payment',
        hubTitle: 'Apply for Adult Disability Payment',
    },
    cdpSrti: {
        name: 'Child Disability Payment under Special Rules for Terminal Illness',
        applyFor: 'Apply for Child Disability Payment',
        hubTitle: 'Apply for Child Disability Payment',
    },
};

export const demoData:ScotGov.DashboardItem[] = [
    {
        id: '50af26ce-9466-4a4a-8b55-9f5cbaab03b0',
        client: 'Lucia Arethusa',
        formType: 'adp',
        lastSaved: new Date(),
    },
    {
        id: 'f3bbfbe5-dc0b-40b5-8263-8fc4a404c1d5',
        client: 'Klaus-Peter Virginia',
        formType: 'adpSrti',
        lastSaved: new Date(),
    },
];

export default forms;
