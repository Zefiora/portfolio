
//Planning to have the class no longer be selectable, and have a class change button that becomes available
//as the Attribute Points and skill are learned.
//Tooltip generator based on class selection
function x(a) {
    if (a == "Excel Wizard"){
        return "Tool tip: \n Requirements: Level 47, Int 9, Wis 7, Con 5, Tech 5, Dex 4, Agi 5, Excel Advanced \n \n An Excel Wizard strives to be the best at Excel formulas and Excel Visual Basics, macros created by these wizards can usually save an entire department of managers 30-60 minutes a day.";
    } else if (a == "HTML/CSS Wizard"){
        return "Tool tip: \n Requirements: Level 48, Int 10, Wis 8, Con 5, Tech 8, Dex 5, Agi 5, CSS Advanced \n \n An HTML/CSS Wizard with strong front end web design abilities, they excel at building webpages.";
    } else if (a == "JavaScript Wizard") {
        return "Tool tip: \n Requirements: Level 49, Int 10, Wis 12, Con 5, Tech 8, Dex 5, Agi 5, JavaScript Advanced \n \n JavaScript Wizards make the magic happen on web pages, JavaScript is the world's most popular programming language."
    } else if (a == "Supreme Wizard") {
        return "Tool tip: \n Requirements: Level 50, Int 11, Wis 12, Con 6, Tech 9, Dex 5, Agi 5, SQL Advanced \n \n The Supreme Wizard has mastered all the skills needed to be successful in the web design industry. Wielding strong HTML/CSS/JavaScript skills, these wizards can put out high quality work and have additional skill sets in other areas."
    }else {
        return "Tool tip: \n Matthew was born in Kansas, and raised in Florida. He went to school at Saint Augustine High School, and spent another two years completing a graphic arts class for a certificate in media art. Currently enrolled in the Correlation-One font end web developer class. \n \n His first job was an Assistant Art Director at David Dobbs Menu Design, followed by several retail jobs such as Kroger, a management role at a restaurant, and finally a tier 1 entry job at Amazon. Here at Amazon he quickly developed into a strong leader and problem solver. Several promotions later, Matthew has become a Data and Reporting Analyst and studies Excel VBA and SQL.";
    }
}
//Tool tip generator based on mouse over for attributes.
function mab(z) {
    if (z == "Int") {
        return "Intelligence is a measurement of one’s ability to learn quickly and problem solve issues."
    }else if (z == "Wis"){
        return "Wisdom is a measurement of one’s ability to retain information over time and overall comprehension of material."
    }else if (z == "Con"){
        return "Constitution is a measurement of one’s ability to fight through difficult situations, even when under pressure."
    }else if (z == "Tech"){
        return "Technique is a measurement of one’s technical skill and general knowledge of information technology."
    }else if (z == "Dex"){
        return "Dexterity is a measurement of one’s ability to pivot when a wrench is thrown into the mix, no matter how big or small the project gets done with precision."
    }else if (z == "Agi"){
        return "Agility is a measurement of one’s ability to research and build code quickly."
    }else {
        return "Blank"
    }
}
//Functions for Attribute Points, and other mouse overs and clicks.
function mouseOver(element) {
    if (element.getElementsByClassName("attr")[0].innerText == "Points") {
        document.getElementById("tooltiper").innerText = "Tool tip: \n Available Attribute " + element.getElementsByClassName("attr")[0].innerText + " to spend - " + element.getElementsByClassName("attrvalue")[0].innerText + "\n You can spend these points to increase Matthew's stats, allowing you to select new skills, and advance his class to the next level!";
    }
        else {
        document.getElementById("tooltiper").innerText = "Tool tip: \n " + mab(element.getElementsByClassName("attr")[0].innerText) + "\n \n" + element.getElementsByClassName("attr")[0].innerText + " attribute points allocated - " + element.getElementsByClassName("attrvalue")[0].innerText;
    }
}
function mouseOut() {
    document.getElementById("tooltiper").innerText = x(document.getElementById("class-select")[document.getElementById('class-select').selectedIndex].innerHTML);
}
function mouseClick(element) {
    if (document.getElementById("availableattrpoints").innerText == 0) {
    } 
        else {
        document.getElementById("availableattrpoints").innerText -= 1;
        element.getElementsByClassName("attrvalue")[0].innerText -= -1;
        clearSelection();
    }
    
    mouseOver(element);
}
//Functions for Experience bar
//Snack bar ideas, Pop up showing exp earned and project completed. When Project button is clicked.
//Exp bar will also increase
function myFunction() {
    if(document.getElementById("level").innerText >= 50) {
        
    }else{
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}
function myFunctionwebproject() {
    var x = document.getElementById("snackbar-webproject");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
  function myFunction2() {
    if(document.getElementById("level").innerText >= 50) {
        
    }else{
        var x = document.getElementById("snackbar2");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
  }
  function myFunction3() {
    var x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  } 
//Exp Bar
function expbar() {
    if(document.getElementById("level").innerText >= 50) {
        document.getElementById("exp-bar").innerText = 100;
        expbarprogress();
        myFunction3();
    } else if (document.getElementById("level").innerText == 45) {
        document.getElementById("vbabttn").setAttribute("class", "vbabttndisabler");
        document.getElementById("tltp").setAttribute("class", "vbabttndisabler");
    } else {
        if(document.getElementById("exp-bar").innerText == 100){
            document.getElementById("exp-bar").innerText = 25;
            document.getElementById("availableattrpoints").innerText -= -1;
            document.getElementById("level").innerText -= -1;
            expbarprogress();
        } else {
        document.getElementById("exp-bar").innerText -= -25;
        document.getElementById("sp").innerText -= -1;
        expbarprogress();
        }
    }
}
function expbarprogress() {
    if (document.getElementById("exp-bar").innerText == 25) {
        document.getElementById("exp-bar").setAttribute("class", "exp-bar-25");
        document.getElementById("exp2").setAttribute("class", "exp-bar-test-25");
    } else if (document.getElementById("exp-bar").innerText == 50) {
        document.getElementById("exp-bar").setAttribute("class", "exp-bar-50");
        document.getElementById("exp2").setAttribute("class", "exp-bar-test-50");
    } else if (document.getElementById("exp-bar").innerText == 75) {
        document.getElementById("exp-bar").setAttribute("class", "exp-bar-75");
        document.getElementById("exp2").setAttribute("class", "exp-bar-test-75");
    } else if (document.getElementById("exp-bar").innerText == 100) {
        document.getElementById("exp-bar").setAttribute("class", "exp-bar-100");
        document.getElementById("exp2").setAttribute("class", "exp-bar-test-100");
    } 
}
//start skill requirements
    class skill {
        constructor(skillid,reqlevel,Int,Wis,Con,Tech,Dex,Agi,SkP,skillpower) {
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
        }
    }

    var cssbeginner = new skill("cssbeginner","none",4,5,4,5,4,4,1,"CSS Skill Power: +50%");
    var cssintermediate = new skill("cssintermediate","cssbeginner",5,6,4,5,4,4,1,"CSS Skill Power: +30%");
    var cssadvanced = new skill("cssadvanced","cssintermediate",10,13,4,5,4,4,2,"CSS Skill power: +20%");
    var htmlbeginner = new skill("htmlbeginner","none",7,5,4,5,4,4,1,"HTML Skill Power: +30%");
    var htmlintermediate = new skill("htmlintermediate","htmlbeginner",3,5,4,5,4,4,1,"HTML Skill Power: +60%");
    var htmladvanced = new skill("htmladvanced","htmlintermediate",10,12,6,6,4,4,2,"HTML Skill Power: +10%");
    var jsbeginner = new skill("jsbeginner","none",2,5,4,5,4,4,1,"JavaScript Skill Power: +65%");
    var jsintermediate = new skill("jsintermediate","jsbeginner",10,9,4,9,4,4,1,"JavaScript Skill Power: +20%");
    var jsadvanced = new skill("jsadvanced","jsintermediate",11,10,4,10,4,4,2,"JavaScript Skill Power: +15%");
    var excelbeginner = new skill("excelbeginner","none",1,5,4,5,4,4,1,"Excel Skill Power: +30%");
    var excelintermediate = new skill("excelintermediate","excelbeginner",5,7,4,6,4,4,1,"Excel Skill power: +30%");
    var exceladvanced = new skill("exceladvanced","excelintermediate",12,9,4,5,4,4,2,"Excel Skill power: +40%");
    var sqlbeginner = new skill("sqlbeginner","none",5,5,4,5,4,4,1,"SQL Skill power: +50%");
    var sqlintermediate = new skill("sqlintermediate","sqlbeginner",5,5,4,5,4,4,1,"SQL Skill power: +25%");
    var sqladvanced = new skill("sqladvanced","sqlintermediate",10,12,6,8,4,4,2,"SQL Skill power: +25%");
    
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
                if (x == "skillid") {var skillname = skill[x];
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
                    reqname = "\n";
                }
                txt +=  reqname + skill[x] + " ";
                mab += 1;
            };
        if(pickskill == skillname){
            sk.getElementsByClassName("tultip")[0].innerText = txt;
            break;}
    }
}
//Functions for Skills
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
                                                break;
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
    constructor(wizname,wizid,proceedingclass,reqlevel,Int,Wis,Con,Tech,Dex,Agi,reqskills) {
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
    }
}

var excelwizard = new wizards("Excel Wizard","excelwizard","none",47,9,7,5,5,4,5,"exceladvanced");
var htmlcsswizard = new wizards("Html/CSS Wizard","htmlcsswizard","excelwizard",48,10,8,5,8,5,5,"cssadvanced");
var javascriptwizard = new wizards("JavaScript Wizard","javascriptwizard","htmlcsswizard",49,10,12,5,8,5,5,"jsadvanced");
var supremewizard = new wizards("Surpeme Wizard", "supremewizard", "javascriptwizard",50,11,12,6,9,5,5,"sqladvanced");

var wizardlist = [
    excelwizard, htmlcsswizard, javascriptwizard, supremewizard
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
                        if (wizardlist[i].Int <= IntStat){
                            if (wizardlist[i].Wis <= WisStat){
                                if (wizardlist[i].Con <= ConStat){
                                    if (wizardlist[i].Tech <= TechStat){
                                        if (wizardlist[i].Dex <= DexStat){
                                            if (wizardlist[i].Agi <= AgiStat){
                                                document.getElementById("matthewclass").innerText = wizardlist[i].wizname;
                                                document.getElementById("matthewclass").setAttribute("class", wizardlist[i].wizid);
                                                let pickclass = document.getElementById("matthewclass").className 
                                                    if (pickclass == "supremewizard") {
                                                        document.getElementById("classchange").innerText = "Final Class Reached!";
                                                    } else {
                                                        document.getElementById("classchange").innerText = "Change class \n" + wizardlist[i + 1].wizname;
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
                            document.getElementById("snackbar5").innerHTML = "Missing a required Skill - [" + wizardlist[i].reqskills + "]";
                            myFunction5()
                            }
                    } else {
                        document.getElementById("snackbar5").innerHTML = "Need to reach level - [" + wizardlist[i].reqlevel + "] \n Click - Complete a Project - Button to earn exp and level up!";
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
//reduce double click highlighting text, putting in attribute points caused the problem, this is hopefully the solution.
document.addEventListener('mousedown', function(event) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  }, false);
