function randomName(){
	var firstname = ["Gloom", "Gray", "Dire", "Black", "Shadow", "Haze", "Wind", "Storm", "Warp", "Night", "Moon", "Star", "Pit", "Fire", "Cold", "Seethe", "Sharp", "Ash", "Blade", "Steel", "Stone", "Rust", "Mold", "Blight", "Plague", "Rot", "Ooze", "Puke", "Snot", "Bile", "Pulse", "Gut", "Gore", "Flesh", "Bone", "Spine", "Mind", "Spirit", "Soul", "Wrath", "Grief", "Foul", "Vile", "Sin", "Chaos", "Dread", "Doom", "Bane", "Death", "Viper", "Dragon", "Devil"];
	var lastname= ["Lust", "Thirst", "Maul", "Flame", "Shard", "Break", "Poison", "Venom", "Sludge", "Froth", "Drool", "Slime", "Pus", "Blister", "Fester", "Pox", "Wing", "Skin", "Shank", "Heart", "Fist", "Claw", "Thorn", "Horn", "Fang", "Tongoue", "Maw", "Eye", "Brow", "Skull", "Head", "Bang", "Cloud", "Hawk", "Crow", "Wolf", "Snarl", "Growler", "Grumble", "Wight", "Spawn", "Maggot", "Widow", "Eater", "Weaver", "Bender", "Dancer", "Crawler", "Shifter", "Drinker", "Razor", "Killer", "Shield", "Web", "Jade", "Vex", "Call", "Kill", "Rip", "Burn", "Rend", "Bite", "Hack", "Maim", "Grin", "Wound", "Feast", "Spell", "Touch"];
    var appealation= ["the Hammer", "the Axe", "the Sharp", "the Jagged", "the Flayer", "the Slasher", "the Impaler", "the Hunter", "the Slayer", "the Mauler", "the Destroyer", "the Quick", "the Witch", "the Mad", "the Wraith", "the Shade", "the Dead", "the Unholy", "the Howler", "the Grim", "the Dark", "the Tainted", "the Unclean", "the Hungry", "the Cold"];

	var rand_first = Math.floor(Math.random()*firstname.length); 
	var rand_last = Math.floor(Math.random()*lastname.length); 
    var rand_appeal = Math.floor(Math.random()*appealation.length);
	
	var first=document.getElementById('firstname');
	var last=document.getElementById('lastname');
    var appeal=document.getElementById('appealation');
	
	first.value=firstname[rand_first];
	last.value=lastname[rand_last];
	appeal.value = appealation[rand_appeal];
}