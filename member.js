function skillsMember(){
    var member = {
        name: "Nurul Huda",
        age: 20,
        skills: ["HTML", "CSS", "JavaScript"],
        // Method
        showSkills: function(){
            this.skills.forEach(function(skill, i){
                console.log("Skill ke-" + (i+1) + " : " + skill);
            });
        }
    };
    return member;
}