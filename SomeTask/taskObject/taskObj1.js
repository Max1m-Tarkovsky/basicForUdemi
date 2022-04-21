const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs:function (plan){

            const {age} = plan;
            const {languages} = plan.skills;
            let str = `Мне ${age} и я владею языками: `;

            languages.forEach(function(lang) {
                str += `${lang.toUpperCase()} `;
            });

            return str;
        }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let str = "";
    const {programmingLangs}= plan.skills;
    for (const i in programmingLangs) {
        str +=`Язык ${i} изучен на ${programmingLangs[i]}\n`;
    }
    return str;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));