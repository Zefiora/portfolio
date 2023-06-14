
//Planning to have the class no longer be selectable, and have a class change button that becomes available
//as the Attribute Points and skill are learned.
//Tooltip generator based on class selection
function x(a) {
    if (a == "Excel Wizard"){
        return "Tool tip: \n Requirements: 9 Int, 7 Wis, 5 Tech, 4 Dex, 5 Agi, Advanced Excel. \n \n An Excel Wizard strives to be the best at Excel formulas and Excel Visual Basics, macros created by these wizards can usually save an entire department of managers 30-60 minutes a day.";
    } else if (a == "HTML/CSS Wizard"){
        return "Tool tip: \n Requirements: 10 Int, 8 Wis, Intermediate HTML, Intermediate CSS, Basic JavaScript, and Basic SQL. \n \n An HTML/CSS Wizard with strong front end web design abilities, they excel at building webpages.";
    } else if (a == "JavaScript Wizard") {
        return "Tool tip: \n Requirements: 12 Int, 9 Wis, Intermediate HTML, Intermediate CSS, Intermediate JavaScript, Basic Excel, and Basic SQL. \n \n JavaScript Wizards make the magic happen on web pages, JavaScript is the world's most popular programming language."
    } else if (a == "Supreme Wizard") {
        return "Tool tip: \n Requirements: 15 Int, 12 Wis, Advanced HTML, Advanced CSS, Advanced JavaScript, Advanced Excel, and Intermediate SQL. \n \n The Supreme Wizard has mastered all the skills needed to be successful in the web design industry. Wielding strong HTML/CSS/JavaScript skills, these wizards can put out high quality work and have additional skill sets in other areas."
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
//Functions for Class Changing



//start skill requirements
    class skill {
        constructor(skillid,reqlevel,Int,Wis,Con,Tech,Dex,Agi,SkP) {
            this.skillid = skillid;
            this.reqlevel = reqlevel;
            this.Int = Int;
            this.Wis = Wis;
            this.Con = Con;
            this.Tech = Tech;
            this.Dex = Dex;
            this.Agi = Agi;
            this.SkP = SkP;
        }
    }
    var cssbeginner = new skill("cssbeginner","none",15,5,4,5,4,4,1);
    var cssintermediate = new skill("cssintermediate","cssbeginner",5,15,4,5,4,4,1);
    var cssadvanced = new skill("cssadvanced","cssintermediate",9,19,4,5,4,4,1);
    var htmlbeginner = new skill("htmlbeginner","none",7,5,4,5,4,4,1);
    var htmlintermediate = new skill("htmlintermediate","htmlbeginner",3,5,4,5,4,4,1);
    var htmladvanced = new skill("htmladvanced","htmlintermediate",5,5,4,5,4,4,1);
    var jsbeginner = new skill("jsbeginner","none",2,5,4,5,4,4,1);
    var jsintermediate = new skill("jsintermediate","jsbeginner",5,5,4,5,4,4,1);
    var jsadvanced = new skill("jsadvanced","jsintermediate",5,5,4,5,4,4,1);
    var excelbeginner = new skill("excelbeginner","none",1,5,4,5,4,4,1);
    var excelintermediate = new skill("excelintermediate","excelbeginner",5,5,4,5,4,4,1);
    var exceladvanced = new skill("exceladvanced","excelintermediate",5,5,4,5,4,4,1);
    var sqlbeginner = new skill("sqlbeginner","none",5,5,4,5,4,4,1);
    var sqlintermediate = new skill("sqlintermediate","sqlbeginner",5,5,4,5,4,4,1);
    var sqladvanced = new skill("sqladvanced","sqlintermediate",5,15,4,5,4,4,1);
    
    var skilllist = [
        cssbeginner,cssintermediate,cssadvanced,
        htmlbeginner,htmlintermediate,htmladvanced,
        jsbeginner,jsintermediate,jsadvanced,
        excelbeginner,excelintermediate,exceladvanced,
        sqlbeginner,sqlintermediate,sqladvanced
    ]

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
                //if (skilllist[i].reqlevel <= Skilllevel) {
                if (skilllist[i].Int <= IntStat) {
                    if (skilllist[i].Wis <= WisStat) {
                        if (skilllist[i].Con <= ConStat) {
                            if (skilllist[i].Tech <= TechStat) {
                                if (skilllist[i].Dex <= DexStat) {
                                    if (skilllist[i].Agi <= AgiStat) {
                                        if (skilllist[i].SkP <= SpStat) {
                                            document.getElementById("acquired-skill-tree").appendChild(skillid);
                                            document.getElementById("sp").innerText -= 1;
                                            break;
                                        } else {
                                            skillid.innerHTML = "You Don't have enough SP.";
                                        }
                                    } else {
                                        skillid.innerHTML = "You Don't have the required Agi.";
                                    }
                                } else {
                                    skillid.innerHTML = "You Don't have the required Dex.";
                                }
                            } else {
                                skillid.innerHTML = "You Don't have the required Tech.";
                            }        
                        } else {
                            skillid.innerHTML = "You Don't have the required Con.";
                        }
                    } else {
                        skillid.innerText = "You Don't have the required Wis.";
                    }
                } else{
                    skillid.innerText = "You Don't have the required Int.";
                }
            }
        }
}
//New Function to check if proceeding skill was learned.

//reduce double click highlighting text, putting in attribute points caused the problem, this is hopefully the solution.
document.addEventListener('mousedown', function(event) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  }, false);
/*BACK UP
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
                    reqname = "\n Required Skill Points  \n Int: ";
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
                } 
                txt +=  reqname + skill[x] + " ";
                mab += 1;
            };
        if(pickskill == skillname){
            sk.getElementsByClassName("tultip")[0].innerText = txt;
            break;}
    }
}*/