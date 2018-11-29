//Extracting Data from PunchNg using JSON format

let metroPlus = document.querySelectorAll('div.title-box');
let response = {};

for ( let count = 0; count < metroPlus.length; count++) {
response[count] = metroPlus[count].textContent;
}

document.write(JSON.stringify(response));

//output

{"0":"\n49-year-old guard hangs self over debt at Ekiti secretariat ","1":"\nA’Ibom A ssembly crisis: Senate orders probe, Uyo women protest against CP ","2":"\n2019: Coalition of opposition parties begins assessment of presidential candidates ","3":"\nBrothers behead 10-year-old for N200,000 in Lagos ","4":"\nBricklayer jailed for assaulting commercial sex worker ","5":"\nSuspected F-SARS operative shoots LASTMA official dead ","6":"\nDriver, guard remanded for unlawful possession of firearm ","7":"\nLawyer accuses Abia policemen of assault, petitions PSC, IG ","8":"\nNewborn baby dumped near police station ","9":"\n49-year-old guard hangs self over debt at Ekiti secretariat ","10":"\nICPC re-arraigns ex-IGP Ehindero, CP for alleged N16.4m fraud ","11":"\nICPC arraigns ex-Ogun Rep for alleged contract fraud ","12":"\nDr D.K Olukoya’s ‘Shalom Chorale’ shines at BBC gospel choir of the year competition ","13":"\nRoyal reunions strengthen University of Dundee’s Nigerian links ","14":"\nXiaomi Mi Band 3 – Is It the Best Fitness Tracker for the Budget ","15":"\nMy re-election is a done deal — Ayade ","16":"\nDeclare state of emergency in security, presidential candidate tells FG ","17":"\n2019: Ondo PDP inaugurates c’ttee for Akinmade ","18":"\nVIDEO: Senate investigates Kogi over unapproved $500m foreign loan ","19":"\n[ICYMI] VP: Atiku visits Ekweremadu, explains choice of Obi ","20":"\nNo one can fault Buhari’s integrity, honesty, says Obasanjo’s son ","21":"\nInvestors lobby as PFAs invest N17bn pension funds in infrastructure ","22":"\nUnremitted taxes: Kaduna, Kano drag federal agencies to tax tribunal ","23":"\nDevelopment Bank finances 35,000 MSMEs in one year ","24":"\nPetrol: Nigeria imported 4.37bn litres in 3 months – NBS ","25":"\nMobile money: Banks risk losing customer base to telcos ","26":"\nNCC rules out new mobile licences "}



//Extracting Data from PunchNg using JSON format

let lamb = document.querySelectorAll('div.entry-content > p');
response = {};

for ( let count = 0; count < lamb.length; count++) {
response[count] = lamb[count].textContent;
}

document.write(JSON.stringify(response));
document.write('<br>');

//output

{"0":"Deji Lambo","1":"Anti-kidnapping operatives of the Lagos State Police Command have arrested two brothers, Saheed Obadimeji, 19, and Ayodeji Obadimeji, 18, for allegedly beheading 10-year-old Joseph Makinde over N200,000.","2":"The Lagos State Police Public Relations Officer, CSP Chike Oti, said in a statement on Wednesday that the operatives were on a routine patrol on the Ajah/Epe Expressway when they arrested the two brothers for having in their possession a fresh human head.","3":"He added that upon interrogation, the brothers confessed that one Sodiq Abefe contracted them to provide a human head for N200,000.","4":"Oti said, “On Tuesday, November 27, 2018, around 8.30pm, a team of anti-kidnapping personnel of the Lagos State Police Command on routine patrol between Ajah and the Epe Expressway apprehended two brothers namely: Ayodeji Obadimeji, 18, and Saheed Obadimeji, 19, of Tunde Balogun Street, Shapati, Ibeju-Lekki, in possession of a fresh human head.","5":"“On interrogation, they confessed that one Sodiq Abefe contracted them to provide him with a human head at the cost of N200,000, hence they lured the victim by sending him to buy a beverage drink for them, and when he brought the drink to them, they held him and cut off his head with a knife.","6":"“The victim has been identified by his parents as Joseph Makinde, 10. The torso has been recovered from an uncompleted building located at Shapati and effort is being made to arrest the said Sodiq Abefe, who allegedly contracted the duo to commit the heinous crime.","7":"“Meanwhile, the Commissioner of Police, Edgal Imohimi, has directed that the case be handed over to the Homicide Section of the State Criminal Investigation and Intelligence Department, Panti, Yaba, for further investigation.”","8":"Oti added that the CP advised criminals to repent or relocate from the state, or regret the consequence of their actions.","9":"Copyright PUNCH.                \nAll rights reserved. This material, and other digital content on this website, may not be reproduced, published, broadcast, rewritten or redistributed in whole or in part without prior express written permission from PUNCH. ","10":"Contact: theeditor@punchng.com","11":"\n","12":" "}