const intervalID = setInterval(statallo, 100);
setTimeout(function() {
  clearInterval(intervalID);
}, 100);
function statallo() {
    let IntStat = document.getElementById("Int").innerText;
    let WisStat = document.getElementById("Wis").innerText;
    let ConStat = document.getElementById("Con").innerText;
    let TechStat = document.getElementById("Tech").innerText;
    let DexStat = document.getElementById("Dex").innerText;
    let AgiStat = document.getElementById("Agi").innerText;
    let LvlStat = document.getElementById("level").innerText;
    let acquiredclass = document.getElementById("class-stat-id").className;
    let PS = 3;
    let RT = 3;
    let CP = 2;
    let RES = 3;
    let TEC = 4;
    let PR = 4;
    let SPD = 5;
    var skillstr = 3.85;

    if(acquiredclass == "excelwizard"){
        var CCC = 1;
    } else if (acquiredclass == "htmlcsswizard"){
        var CCC = 3;
    } else if (acquiredclass == "javascriptwizard"){
        var CCC = 6;
    } else if (acquiredclass == "supremewizard"){
        var CCC = 10;
    }

    if (hasskill("cssadvanced")) {
        skillstr += .2;
    }
    if (hasskill("htmladvanced")) {
        skillstr += .1;
    }
    if (hasskill("jsintermediate")) {
        skillstr += .2;
    }
    if (hasskill("jsadvanced")) {
        skillstr += .15;
    }
    if (hasskill("sqlintermediate")) {
        skillstr += .25;
    }
    if (hasskill("sqladvanced")) {
        skillstr += .25;
    }
    document.getElementById("problemsolving-value").innerText = Math.floor((Number(IntStat) * Number(PS) * LvlStat));
    document.getElementById("retention-value").innerText = Math.floor((Number(WisStat) * Number(RT) * LvlStat));
    document.getElementById("comprehension-value").innerText = Math.floor((Number(WisStat) * Number(CP) * LvlStat));
    document.getElementById("resolve-value").innerText = Math.floor((Number(ConStat) * Number(RES) * LvlStat));
    document.getElementById("technique-value").innerText = Math.floor((Number(TechStat) * Number(TEC) * LvlStat));
    document.getElementById("precision-value").innerText = Math.floor((Number(DexStat) * Number(PR) * LvlStat));
    document.getElementById("speed2-value").innerText = Math.floor((Number(AgiStat) * Number(SPD) * LvlStat));
    document.getElementById("power-value").innerText = Math.floor((((Number(IntStat)) * Number(PS) * Number(LvlStat)) + (Number(WisStat) * Number(RT) * Number(LvlStat)) + (Number(ConStat) * Number(CP) * Number(LvlStat)) + (Number(TechStat) * Number(TEC) * Number(LvlStat)) + (Number(DexStat) * Number(PR) * Number(LvlStat)) + (Number(AgiStat) * Number(SPD) * Number(LvlStat))) * (Number(CCC) * Number(skillstr) / 2));
    document.getElementById("speed-value").innerText = Math.floor(((Number(ConStat) * Number(CP) * Number(LvlStat)) + (Number(DexStat) * Number(PR) * Number(LvlStat)) + (Number(AgiStat) * Number(SPD) * Number(LvlStat))) * (Number(1) * Number(skillstr) / 2.5));
    document.getElementById("accuracy-value").innerText = Math.floor((((Number(IntStat)) * Number(PS) * Number(LvlStat)) + (Number(WisStat) * Number(RT) * Number(LvlStat)) + (Number(TechStat) * Number(TEC) * Number(LvlStat)) + (Number(DexStat) * Number(PR) * Number(LvlStat))) * (Number(CCC) * Number(skillstr) / 2));
    operationButtons();
}
function mouseClick(element) {
    if (document.getElementById("availableattrpoints").innerText == 0) {
    } 
        else {
        document.getElementById("availableattrpoints").innerText -= 1;
        element.getElementsByClassName("attrvalue")[0].innerText -= -1;
        statallo()
        clearSelection(); 
    }
}
//Functions for Experience bar
//Snack bar ideas, Pop up showing exp earned and project completed. When Project button is clicked.
//Exp bar will also increase
function myFunction() {
    if(document.getElementById("level").innerText >= 50) {
    }else{
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);
    }
}
  function myFunction3() {
    var x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  } 
function expbarprogress() {
    var r = document.querySelector(':root');//Put css variable in js varable
    if (document.getElementById("level").innerText == 50) {
    } else {
    document.getElementById("exp-bar").setAttribute("class", "exp-bar-none");//remove the class/change class
    document.getElementById("exp2").setAttribute("class", "exp-bar-test-none");//remove the class/change class
    var widthminset = getComputedStyle(r);//grab the css current variable
        r.style.setProperty('--widthmin', widthminset.getPropertyValue('--widths'));//set the css variable to the current width value
        r.style.setProperty('--widths', widthsetter());//set the width to the division of two values from another function
        document.getElementById("exp-bar").setAttribute("class", "exp-bar-test1");//re-apply the class to play animations with new widths
        document.getElementById("exp2").setAttribute("class", "exp-bar-test-test1");//re-apply the class to play animations with new widths
    }
}
function widthsetter() {
    let currentexp = document.getElementById("currentxp").innerText;
    let requiredexp = document.getElementById("requiredxp").innerText;
    return Math.floor((Number(currentexp) / Number(requiredexp) * 100)) + "%";
}
function leveledup() {
    var x = document.getElementById("snackbar-sp");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);
}
function increasemaxexp () {
    let xpcount = Number(document.getElementById("requiredxp").innerText)//max xp modifier
    xpcount = Number(xpcount) + Number(xpcount) + 2000;
    document.getElementById("requiredxp").innerText = xpcount; 
}
//start skill requirements
    class skill {
        constructor(skillid,reqlevel,Int,Wis,Con,Tech,Dex,Agi,SkP,skillpower,requiredProject) {
            this.skillid = skillid;
            this.reqlevel = reqlevel;
            this.Int = Int;
            this.Wis = Wis;
            this.Con = Con;
            this.Tech = Tech;
            this.Dex = Dex;
            this.Agi = Agi;
            this.SkP = SkP;
            this.skillpower = skillpower;
            this.requiredProject = requiredProject;
        }
    }

    var cssbeginner = new skill("cssbeginner","none",4,5,4,5,4,4,1,"CSS Skill Power: +50%", "noprojectneeded");
    var cssintermediate = new skill("cssintermediate","cssbeginner",5,6,4,5,4,4,1,"CSS Skill Power: +30%","noprojectneeded");
    var cssadvanced = new skill("cssadvanced","cssintermediate",10,10,4,5,4,4,2,"CSS Skill power: +20%","csscourse");
    var htmlbeginner = new skill("htmlbeginner","none",7,5,4,5,4,4,1,"HTML Skill Power: +30%","noprojectneeded");
    var htmlintermediate = new skill("htmlintermediate","htmlbeginner",3,5,4,5,4,4,1,"HTML Skill Power: +60%","noprojectneeded");
    var htmladvanced = new skill("htmladvanced","htmlintermediate",10,12,6,6,4,4,2,"HTML Skill Power: +10%","htmlcourse");
    var jsbeginner = new skill("jsbeginner","none",2,5,4,5,4,4,1,"JavaScript Skill Power: +65%","noprojectneeded");
    var jsintermediate = new skill("jsintermediate","jsbeginner",10,9,4,9,4,4,1,"JavaScript Skill Power: +20%","jscourse");
    var jsadvanced = new skill("jsadvanced","jsintermediate",11,10,4,10,4,4,2,"JavaScript Skill Power: +15%","jscourse");
    var excelbeginner = new skill("excelbeginner","none",1,5,4,5,4,4,1,"Excel Skill Power: +30%","noprojectneeded");
    var excelintermediate = new skill("excelintermediate","excelbeginner",5,7,4,6,4,4,1,"Excel Skill power: +30%","noprojectneeded");
    var exceladvanced = new skill("exceladvanced","excelintermediate",12,9,4,5,4,4,2,"Excel Skill power: +40%","noprojectneeded");
    var sqlbeginner = new skill("sqlbeginner","none",5,5,4,5,4,4,1,"SQL Skill power: +50%","noprojectneeded");
    var sqlintermediate = new skill("sqlintermediate","sqlbeginner",5,5,4,5,4,4,1,"SQL Skill power: +25%","sqlcourse");
    var sqladvanced = new skill("sqladvanced","sqlintermediate",10,12,6,8,4,4,2,"SQL Skill power: +25%","sqlcourse");
    
    var skilllist = [
        cssbeginner,cssintermediate,cssadvanced,
        htmlbeginner,htmlintermediate,htmladvanced,
        jsbeginner,jsintermediate,jsadvanced,
        excelbeginner,excelintermediate,exceladvanced,
        sqlbeginner,sqlintermediate,sqladvanced
    ]
//Acquired Skills Variable
    var learnedSkills = ["none", "cssbeginner", "cssintermediate", "htmlbeginner", "htmlintermediate",
      "jsbeginner", "excelbeginner", "excelintermediate", "exceladvanced", "sqlbeginner"]
//Loops for tooltip stats, this was a pain to setup.
function requirementToolTip(sk){
    for (skill of skilllist) {
        let txt = "";
        let mab = 0;
        let reqname = "";
        let pickskill = sk.className.split(' ')[0];
            for (let x in skill) {
                if (x == "skillid") {
                    var skillname = skill[x];
                }
                if (mab == 0) {
                    reqname = "Skill Name: ";
                } else if (mab == 1) {
                    reqname = "\n Proceeding Skill: ";
                } else if (mab == 2) {
                    reqname = "\n Required Attribute Points  \n Int: ";
                } else if (mab == 3) {
                    reqname = "Wis: ";
                } else if (mab == 4) {
                    reqname = "Con: ";
                } else if (mab == 5) {
                    reqname = "Tech: ";
                } else if (mab == 6) {
                    reqname = "Dex: ";
                } else if (mab == 7) {
                    reqname = "Agi: ";
                } else if (mab == 8) {
                    reqname = "\n Required SP: ";
                } else if (mab == 9) {
                    reqname = "\n "
                }else if (mab == 10) {
                    if (skill[x] == "noprojectneeded"){
                        continue;
                    } else {
                        reqname = "\n Complete Project: "
                    }
                }
                txt +=  reqname + skill[x] + " ";
                mab += 1;
            };
        if(pickskill == skillname){
            sk.getElementsByClassName("tultip")[0].innerText = txt;
            break;}
    }
}
//Functions for learning Skills
function learnaskill(skillid) {
    let IntStat = document.getElementById("Int").innerText;
    let WisStat = document.getElementById("Wis").innerText;
    let ConStat = document.getElementById("Con").innerText;
    let TechStat = document.getElementById("Tech").innerText;
    let DexStat = document.getElementById("Dex").innerText;
    let AgiStat = document.getElementById("Agi").innerText;
    let SpStat = document.getElementById("sp").innerText;
    const pickskill = skillid.className.split(' ')[0];
        for (let i = 0; i < skilllist.length; i++) {
            let matchskill = skilllist[i].skillid;
            if (matchskill == pickskill) {
                if (hasskill(matchskill)){
                    document.getElementById("snackbar4").innerHTML = "You already know this skill.";
                    myFunction4()
                    break;
                }
                if (hasskill(skilllist[i].reqlevel)) {
                    if (skilllist[i].Int <= IntStat) {
                        if (skilllist[i].Wis <= WisStat) {
                            if (skilllist[i].Con <= ConStat) {
                                if (skilllist[i].Tech <= TechStat) {
                                    if (skilllist[i].Dex <= DexStat) {
                                        if (skilllist[i].Agi <= AgiStat) {
                                            if (skilllist[i].SkP <= SpStat) {
                                                if (hasCompletedProject(skilllist[i].requiredProject)){
                                                            document.getElementById("acquired-skill-tree").appendChild(skillid);
                                                            document.getElementById("sp").innerText -= skilllist[i].SkP;
                                                            if(matchskill == "jsintermediate"){
                                                                document.getElementById("skills3").setAttribute("class", "js1");
                                                            } else if(matchskill == "jsadvanced"){
                                                                document.getElementById("skills3").setAttribute("class", "js2");
                                                            } else if(matchskill == "cssadvanced"){
                                                                document.getElementById("skills2").setAttribute("class", "css1");
                                                            }else if(matchskill == "htmladvanced"){
                                                                document.getElementById("skills1").setAttribute("class", "html1");
                                                            }else if(matchskill == "sqlintermediate"){
                                                                document.getElementById("skills4").setAttribute("class", "sql1");
                                                            }else if(matchskill == "sqladvanced"){
                                                                document.getElementById("skills4").setAttribute("class", "sql2");
                                                            }
                                                            learnedSkills.push(pickskill);
                                                            statallo()
                                                            break;
                                                        } else {
                                                            document.getElementById("snackbar4").innerHTML = "Complete the Required Course/Project - [" + skilllist[i].requiredProject + "]";
                                                            myFunction4()
                                                            }
                                                    } else {
                                                        document.getElementById("snackbar4").innerHTML = "You don't have enough SP - [" + skilllist[i].SkP + "]";
                                                        myFunction4()
                                                    }
                                            } else {
                                                document.getElementById("snackbar4").innerHTML = "You don't have the required Agi - [" + skilllist[i].Agi + "]";
                                                myFunction4()
                                            }
                                    } else {
                                        document.getElementById("snackbar4").innerHTML = "You don't have the required Dex - [" + skilllist[i].Dex + "]";
                                        myFunction4()
                                    }
                                } else {
                                    document.getElementById("snackbar4").innerHTML = "You don't have the required Tech - [" + skilllist[i].Tech + "]";
                                    myFunction4()
                                }        
                            } else {
                                document.getElementById("snackbar4").innerHTML = "You don't have the required Con - [" + skilllist[i].Con + "]";
                                myFunction4()
                            }
                        } else {
                            document.getElementById("snackbar4").innerHTML = "You don't have the required Wis - [" + skilllist[i].Wis + "]";
                            myFunction4()
                        }
                } else{
                    document.getElementById("snackbar4").innerHTML = "You don't have the required Int - [" + skilllist[i].Int + "]";
                    myFunction4()
                }
            } else {
                document.getElementById("snackbar4").innerHTML = "Missing the proceeding skill - [" + skilllist[i].reqlevel + "]";
                myFunction4()
            }
            }
        }
}
function myFunction4() {
        var x = document.getElementById("snackbar4");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);
  }
//New Function to check if proceeding skill was learned.
function hasskill(reqskill){
    for (let i =0; i < learnedSkills.length; i++){
        if(reqskill == learnedSkills[i]) {
            return true;
        }
    }
}
//Start Class change section
class wizards {
    constructor(wizname,wizid,proceedingclass,reqlevel,Int,Wis,Con,Tech,Dex,Agi,reqskills,reqskills2,reqProject) {
        this.wizname = wizname;
        this.wizid = wizid;
        this.proceedingclass = proceedingclass;
        this.reqlevel = reqlevel;
        this.Int = Int;
        this.Wis = Wis;
        this.Con = Con;
        this.Tech = Tech;
        this.Dex = Dex;
        this.Agi = Agi;
        this.reqskills = reqskills;
        this.reqskills2 = reqskills2;
        this.reqProject = reqProject;
    }
}

var excelwizard = new wizards("Excel Wizard","excelwizard","none",41,9,7,5,5,4,5,"excelbeginner","exceladvanced","excelproject");
var htmlcsswizard = new wizards("Html/CSS Wizard","htmlcsswizard","excelwizard",44,10,8,5,8,5,5,"cssadvanced","htmladvanced","classchangehtmlcsswizard");
var javascriptwizard = new wizards("JavaScript Wizard","javascriptwizard","htmlcsswizard",47,10,12,5,8,5,5,"jsintermediate","jsadvanced","classchangejavascriptwizard");
var supremewizard = new wizards("Supreme Wizard", "supremewizard", "javascriptwizard",50,11,12,6,9,5,5,"sqlintermediate","sqladvanced","classchangesupremewizard");

var wizardlist = [
    excelwizard, htmlcsswizard, javascriptwizard, supremewizard
]
//I had to change this to a string, and I have no idea why. Doing this fixed most issues.
var classchangedlist = [
    "excelwizard"
]
function classchangewizard() {
    let LvlStat = document.getElementById("level").innerText;
    let IntStat = document.getElementById("Int").innerText;
    let WisStat = document.getElementById("Wis").innerText;
    let ConStat = document.getElementById("Con").innerText;
    let TechStat = document.getElementById("Tech").innerText;
    let DexStat = document.getElementById("Dex").innerText;
    let AgiStat = document.getElementById("Agi").innerText;
    let pickclass = document.getElementById("matthewclass").className;
        for (let i = 0; i < wizardlist.length; i++) {
            let matchclass = wizardlist[i].proceedingclass;
            if (matchclass == pickclass) {
                if (wizardlist[i].reqlevel <= LvlStat){
                    if (hasskill(wizardlist[i].reqskills)){
                        if (hasskill(wizardlist[i].reqskills2)){
                            if (wizardlist[i].Int <= IntStat){
                                if (wizardlist[i].Wis <= WisStat){
                                    if (wizardlist[i].Con <= ConStat){
                                        if (wizardlist[i].Tech <= TechStat){
                                            if (wizardlist[i].Dex <= DexStat){
                                                if (wizardlist[i].Agi <= AgiStat){
                                                    if (hasCompletedProject(wizardlist[i].reqProject)) {
                                                            document.getElementById("classtext").innerText = wizardlist[i].wizname;
                                                            document.getElementById("matthewclass").setAttribute("class", wizardlist[i].wizid);
                                                            document.getElementById("class-stat-id").innerText = wizardlist[i].wizname;
                                                            document.getElementById("class-stat-id").setAttribute("class", wizardlist[i].wizid);
                                                            classchangedlist.push(wizardlist[i].wizid); //Javascript Course not working now..
                                                            statallo()
                                                            let pickclass = document.getElementById("matthewclass").className 
                                                                if (pickclass == "supremewizard") {
                                                                    document.getElementById("classchange").innerText = "Final Class Reached!";
                                                                    } else {
                                                                        document.getElementById("classchange").innerText = "Change class \n" + wizardlist[i + 1].wizname;
                                                                        }
                                                                } else {
                                                                    document.getElementById("snackbar5").innerHTML = "Complete the Required Course/Project - [" + wizardlist[i].reqProject + "]";
                                                                    myFunction5()
                                                                }
                                                        } else {
                                                            document.getElementById("snackbar5").innerHTML = "Not enough Agi - [" + wizardlist[i].Agi + "]";
                                                            myFunction5()
                                                            }
                                                    } else {
                                                        document.getElementById("snackbar5").innerHTML = "Not enough Dex - [" + wizardlist[i].Dex + "]";
                                                        myFunction5()
                                                        }
                                                } else {
                                                    document.getElementById("snackbar5").innerHTML = "Not enough Tech - [" + wizardlist[i].Tech + "]";
                                                    myFunction5()
                                                    }
                                            } else {
                                                document.getElementById("snackbar5").innerHTML = "Not enough Con - [" + wizardlist[i].Con + "]";
                                                myFunction5()
                                                }
                                        } else {
                                            document.getElementById("snackbar5").innerHTML = "Not enough Wis - [" + wizardlist[i].Wis + "]";
                                            myFunction5()
                                            }
                                    } else {
                                        document.getElementById("snackbar5").innerHTML = "Not enough Int - [" + wizardlist[i].Int + "]";
                                        myFunction5()
                                        }
                                } else {
                                    document.getElementById("snackbar5").innerHTML = "Missing a required Skill - [" + wizardlist[i].reqskills2 + "]";
                                    myFunction5()
                                    }
                            } else {
                                document.getElementById("snackbar5").innerHTML = "Missing a required Skill - [" + wizardlist[i].reqskills + "]";
                                myFunction5()
                                }
                        } else {
                            document.getElementById("snackbar5").innerHTML = "Need to reach level - [" + wizardlist[i].reqlevel + "]";
                            myFunction5()
                            }
            }
        }
}
function myFunction5() {
    var x = document.getElementById("snackbar5");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);
}
function classChangeToolTip(sk){
    for (wizards of wizardlist) {
        let txt = "";
        let mab = 0;
        let reqname = "";
        let pickskill = sk.className;
            for (let x in wizards) {
                if (x == "proceedingclass") {
                    var procWiz = wizards[x];
                }
                if (mab == 0) {
                    reqname = "\nNext Class Name: ";
                } else if (mab == 1) {
                    mab += 1;
                    continue;
                } else if (mab == 2) {
                    mab += 1;
                    continue;
                } else if (mab == 3) {
                    reqname = "\n\n Required Level: ";
                } else if (mab == 4) {
                    reqname = "\n\n Required Attributes: \n Int: ";
                } else if (mab == 5) {
                    reqname = "| Wis: ";
                } else if (mab == 6) {
                    reqname = "\n Con: ";
                } else if (mab == 7) {
                    reqname = "| Tech: ";
                } else if (mab == 8) {
                    reqname = "\n Dex: ";
                } else if (mab == 9) {
                    reqname = "| Agi: ";
                } else if (mab == 10) {
                    reqname = "\n\n Required Skill: ";
                } else if (mab == 11) {
                    reqname = "\n Required Skill: ";
                } else if (mab == 12) {
                    reqname = "\n\n Project/Course: ";
                }
                txt +=  reqname + wizards[x] + " ";
                mab += 1;
            };
        if(pickskill == procWiz){
            sk.getElementsByClassName("tultip2")[0].innerText = txt;
            break;
        }
    }
}
//Start Project/Mission Builds and classes
class project {
    constructor(ProjectName, ProjectID, ClassReq, Expgranted, SkillReq, LVLReq, PowerReq, SpeedReq, AccReq, TimetoComplete) {
        this.ProjectName = ProjectName;
        this.ProjectID = ProjectID;
        this.ClassReq = ClassReq;
        this.Expgranted = Expgranted;
        this.SkillReq = SkillReq;
        this.LVLReq = LVLReq;
        this.PowerReq = PowerReq;
        this.SpeedReq = SpeedReq;
        this.AccReq = AccReq;
        this.TimetoComplete = TimetoComplete;
    }
}

var noprojectneeded = new project("noprojectneeded,","noprojectneeded","excelwizard",0,"exceladvanced",40, 0, 0, 0, 0);
var excelproject = new project("Exel Project", "excelproject", "excelwizard", 1000, "exceladvanced", 40, 8000, 5000, 3000, 5000);
var htmlcourse = new project("Html Course", "htmlcourse", "excelwizard", 9000, "htmlintermediate", 42, 11000, 5000, 4000, 5000);
var csscourse = new project("CSS Course", "csscourse", "excelwizard", 20000, "cssintermediate" ,43, 14000, 10000, 5000, 10000);
var htmlproject = new project("Html Project", "htmlproject", "excelwizard", 3000, "htmladvanced", 42, 13000, 8000, 5000, 8000);
var cssproject = new project("CSS Project", "cssproject", "excelwizard", 6000, "cssadvanced", 43, 16000, 10000, 8000, 10000);
var classchangehtmlcsswizard = new project("Class Change HtmlCSS Wizard", "classchangehtmlcsswizard", "excelwizard", 50000, "cssadvanced", 44, 18000, 16500, 8000, 16500);

var jscourse = new project("JavaScript Course", "jscourse", "htmlcsswizard", 40000, "jsbeginner", 46, 18000, 18000, 8000, 18000);
var jsproject = new project("JavaScript Project", "jsproject", "javascriptwizard", 30000, "jsintermediate" ,46, 18000, 15000, 8000, 15000);
var classchangejavascriptwizard = new project("Class Change JavaScript Wizard", "classchangejavascriptwizard", "htmlcsswizard", 100000, "jsadvanced", 46, 18000, 20000, 8000, 20000);

var sqlcourse = new project("SQL Course", "sqlcourse", "javascriptwizard", 150000, "sqlbeginner", 48, 18000, 2000, 8000, 2000);
var sqlproject = new project("SQL Project", "sqlproject", "javascriptwizard", 50000, "sqlintermediate",48, 50000, 20000, 28000, 20000);
var classchangesupremewizard = new project("Class Change Supreme Wizard", "classchangesupremewizard", "javascriptwizard", 250000, "sqladvanced",49, 18000, 50000, 8000, 50000);

var finalprojectboss = new project("Final Bo... Project", "finalprojectboss", "supremewizard", 0, "sqladvanced", 50, 18000, 8000, 8000, 10000);

var projectlist = [
    excelproject, htmlcourse, csscourse, classchangehtmlcsswizard, htmlproject, cssproject, jscourse,
    classchangejavascriptwizard, jsproject, sqlcourse, sqlproject, classchangesupremewizard, finalprojectboss
]

var completedProjectList = [
    noprojectneeded, excelproject
]
function expbar(amountofxp) {
    if(document.getElementById("level").innerText == 50) { //settings if max level
        document.getElementById("currentxp").innerText = document.getElementById("requiredxp").innerText; //make exp maxed
        expbarprogress(); // move the bar to match the exp change
        myFunction3(); //player max level snack bar
    } else {
        amountofxp =+ amountofxp + (document.getElementById("accuracy-value").innerText * .15)
        document.getElementById("currentxp").innerText -= -Math.ceil(Number(amountofxp));
        let totalxpearned = Math.ceil(document.getElementById("currentxp").innerText);
        document.getElementById("earnedexpvalue").innerText = "Earned Exp - " + Math.ceil(amountofxp);
        let remainingxp = Math.ceil(totalxpearned - Number(document.getElementById("requiredxp").innerText))
        myFunction();
        expbarprogress();
            if(Number(document.getElementById("currentxp").innerText) >= Number(document.getElementById("requiredxp").innerText)){
                document.getElementById("currentxp").innerText = remainingxp; //Fixed this,  xp to the next level.
                document.getElementById("availableattrpoints").innerText -= -5; //add a attribute point
                document.getElementById("level").innerText -= -1; //increase the level
                document.getElementById("sp").innerText -= -1; //add an sp
                leveledup(); //play the snackbar for leveling up
                expbarprogress(); //move the exp bar
                increasemaxexp(); //increase exp needed to level
                statallo(); //Readjust stats based on new level
            }
    }
}
function checkReq(importedclass){
    const projectPick = importedclass.className.split(' ')[0];
    for (let i = 0; i < projectlist.length; i++) {
        let matchProject = projectlist[i].ProjectID;
        if (matchProject == projectPick) {
            if (hasskill(projectlist[i].SkillReq)){
                if (hasRequirements(projectPick)){
                        if (hasCompletedProject(projectPick)){
                        } else {
                            completedProjectList.push(projectPick);
                        }
                    disableProjectOrCourse(projectPick);
                    cooldowns(projectPick);
                    expbar(projectlist[i].Expgranted)
                    
                }
            }
        }
    }
}
//Addds a cool down to projects
function cooldowns(projectPick) {
    if(document.getElementById("level").innerText >= 50) {
    } else {
        for (project of projectlist) {
            for (let p in project) {
                if (p == "ProjectID") {
                    var ProjName = project[p];
                };
                if (p == "TimetoComplete"){
                    var ProTimeOut = project[p];
                };
                if (p == "SpeedReq"){
                    var ProSpeedReq = project[p];
                }
            };
            if (ProjName == projectPick) {
                var x = document.getElementById("bttn-" + projectPick);
                x.disabled = true;
                x.classList.add("disabled");
                setTimeout(function(){ x.className = x.className.replace("disabled", ""); 
                x.disabled = false;
                    },  timeOutReduction(ProSpeedReq, ProTimeOut));
            };
        };
    };
};
//does math to check speed against requirements.
function timeOutReduction (ProSpeedReqSent, ProTimeOutSent){
    var MaxSpeed = document.getElementById("speed-value").innerText 
    var Lv = document.getElementById("level").innerText
    let timeAlter = (Math.floor(MaxSpeed - ProSpeedReqSent) + (Lv*100)) 
    timeAlter = ProTimeOutSent - timeAlter;
    if (timeAlter > 3000){
        return 3000;
    } else {
        return timeAlter;
    }
}
function disableProjectOrCourse(projectPick) {
        for (project of projectlist) {
            for (let p in project) {
                if (p == "ProjectID") {
                    var ProjName = project[p];
                };
            };
            if (ProjName == projectPick) {
                var x = document.getElementById("bttn-" + projectPick);
                switch (ProjName) {
                    case "htmlcourse":
                        x.classList.add("dis-permanent");
                        x.disabled = true;
                        break;
                    case "csscourse":
                        x.classList.add("dis-permanent");
                        x.disabled = true;
                        break;
                    case "classchangehtmlcsswizard":
                        x.classList.add("dis-permanent");
                        x.disabled = true;
                        break;
                    case "jscourse":
                        x.classList.add("dis-permanent");
                        x.disabled = true;
                        break;
                    case "classchangejavascriptwizard":
                        x.classList.add("dis-permanent");
                        x.disabled = true;
                        break;
                    case "sqlcourse":
                        x.classList.add("dis-permanent");
                        x.disabled = true;
                        break;
                    case "classchangesupremewizard":
                        x.classList.add("dis-permanent");
                        x.disabled = true;
                        break;
                  }
            };
        };
};
function operationButtons(){ //This function disables Project buttons or enable them based on requirements.
    for (let i = 0; i < projectlist.length; i++) {
        var projectPick = projectlist[i].ProjectID;
        var x = document.getElementById("bttn-" + projectPick);
                if (hasRequirements(projectPick)){
                    if (x.classList.contains("disabled")) {
                            x.className = x.className.replace("disabled", "");
                        }
                } else {
                    if (x.classList.contains("disabled")) {
                    } else {
                        x.classList.add("disabled");
                    }
                }; 
    };
};
function hasRequirements(projectPick){
    var PowerLevel = document.getElementById("power-value").innerText
    var MaxSpeed = document.getElementById("speed-value").innerText 
    var HitChance = document.getElementById("accuracy-value").innerText
    var Lv = document.getElementById("level").innerText
    var UnlockedClass = document.getElementById("matthewclass").className
    for (let i =0; i < projectlist.length; i++){
        let matchProject = projectlist[i].ProjectID;
        if (matchProject == projectPick) {
            if (Lv >= projectlist[i].LVLReq) {
                if (PowerLevel >= projectlist[i].PowerReq){
                    if (HitChance >= projectlist[i].AccReq){
                        if (hasskill(projectlist[i].SkillReq)){
                            if(classchangedlist.includes(projectlist[i].ClassReq)) {
                                return true;
                            }
                        } 
                    }
                }
            }
        }
    }
}
function hasCompletedProject(reqProject){
    for (let i = 0; i < completedProjectList.length; i++){
        if(reqProject == completedProjectList[i]) {
            return true;
        }
    }
}
this.ProjectName = ProjectName;
this.ProjectID = ProjectID;
this.ClassReq = ClassReq;
this.Expgranted = Expgranted;
this.SkillReq = SkillReq;
this.LVLReq = LVLReq;
this.PowerReq = PowerReq;
this.SpeedReq = SpeedReq;
this.AccReq = AccReq;
this.TimetoComplete = TimetoComplete;
function projectButtonToolTip(sk){
    for (project of projectlist) {
        let txt = "";
        let mab = 0;
        let reqname = "";
        let pickProject = sk.className.split(' ')[0];
            for (let x in project) {
                if (x == "ProjectID") {
                    var procProject = project[x];
                }
                if (mab == 0) {
                    reqname = "Project: ";
                } else if (mab == 1) {
                    mab += 1;
                    continue;
                } else if (mab == 2) {
                    reqname ="\n\nClass: "
                } else if (mab == 3) {
                    reqname = "\nExperience Gain: ";
                } else if (mab == 4) {
                    reqname = "\nSkill: ";
                } else if (mab == 5) {
                    reqname = "\n\nLevel Required: ";
                } else if (mab == 6) {
                    reqname = "\nPower: ";
                } else if (mab == 7) {
                    reqname = "\nSpeed: ";
                } else if (mab == 8) {
                    reqname = "\nAccuracy: ";
                } else if (mab == 9) {
                    reqname = "\nCool-Down: ";
                } 
                txt +=  reqname + project[x] + " ";
                mab += 1;
            };
        if(pickProject == procProject){
            sk.getElementsByClassName("tultip-pro")[0].innerText = txt;
            break;
        }
    }
}
//reduce double click highlighting text, putting in attribute points caused the problem, this is hopefully the solution.
document.addEventListener('mousedown', function(event) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  }, false);

