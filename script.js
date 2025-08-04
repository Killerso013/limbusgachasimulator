// Image mapping
const imageMap = {
  // 3★ IDs
  "PLACEHOLDER": "Images/Misc/zenacat.png",
  "Blade Lineage Salsu Yi Sang": "Images/Identities/YiSang/BLYiSang.png",
  "Effloresced E.G.O::Spicebush Yi Sang": "Images/Identities/YiSang/SpicebushYiSang.png",
  "W Corp. L3 Cleanup Agent Yi Sang": "Images/Identities/YiSang/WCorpYiSang.png",
  "The Ring Pointilist Student Yi Sang": "Images/Identities/YiSang/RingYiSang.png",
  "Lobotomy E.G.O::Solemn Lament Yi Sang": "Images/Identities/YiSang/SolemnLamentYiSang.png",
  "Liu Association South Section 3 Yi Sang": "Images/Identities/YiSang/LiuYiSang.png",
  "N Corp. E.G.O::Fell Bullet Yi Sang": "Images/Identities/YiSang/FellBulletYiSang.png",
  "The One Who Grips Faust": "Images/Identities/Faust/KromerFaust.png",
  "Seven Association South Section 4 Faust": "Images/Identities/Faust/SevenFaust.png",
  "Lobotomy E.G.O::Regret Faust": "Images/Identities/Faust/RegretFaust.png",
  "Blade Lineage Salsu Faust": "Images/Identities/Faust/BLFaust.png",
  "Multicrack Office Rep Faust": "Images/Identities/Faust/MulticrackFaust.png",
  "LCE E.G.O::Ardor Blossom Star Faust": "Images/Identities/Faust/ArdorBlossomStarFaust.png",
  "Heishou Pack - Mao Branch Adept Faust": "Images/Identities/Faust/MaoFaust.png",
  "W Corp. L3 Cleanup Agent Don Quixote": "Images/Identities/DonQuixote/WCorpDonQuixote.png",
  "Cinq Association South Section 5 Director Don Quixote": "Images/Identities/DonQuixote/CinqDonQuixote.png",
  "The Middle Little Sister Don Quixote": "Images/Identities/DonQuixote/MiddleDonQuixote.png",
  "T Corp. Class 3 Collection Staff Don Quixote": "Images/Identities/DonQuixote/TCorpDonQuixote.png",
  "The Manager of La Manchaland Don Quixote": "Images/Identities/DonQuixote/ManagerDonQuixote.png",
  "Cinq Association East Section 3 Don Quixote": "Images/Identities/DonQuixote/CinqEastDonQuixote.png",
  "Lobotomy E.G.O::In the Name of Love and Hate Don Quixote": "Images/Identities/DonQuixote/InTheNameOfLoveAndHateDonQuixote.png",
  "Kurokumo Clan Wakashu Ryoshu": "Images/Identities/Ryoshu/KurokumoRyoshu.png",
  "R.B. Chef de Cuisine Ryoshu": "Images/Identities/Ryoshu/ChefRyoshu.png",
  "W Corp. L3 Cleanup Agent Ryoshu": "Images/Identities/Ryoshu/WCorpRyoshu.png",
  "Edgar Family Chief Butler Ryoshu": "Images/Identities/Ryoshu/MaidRyoshu.png",
  "Lobotomy E.G.O::Red Eyes & Penitence Ryoshu": "Images/Identities/Ryoshu/RedEyesAndPenitenceRyoshu.png",
  "Heishou Pack - Mao Branch Ryoshu": "Images/Identities/Ryoshu/MaoRyoshu.png",
  "W Corp. L2 Cleanup Agent Meursault": "Images/Identities/Meursault/WCorpMeursault.png",
  "N Corp. Großhammer Meursault": "Images/Identities/Meursault/NCorpMeursault.png",
  "R Corp. 4th Pack Rhino Meursault": "Images/Identities/Meursault/RCorpMeursault.png",
  "Blade Lineage Mentor Meursault": "Images/Identities/Meursault/BLMeursault.png",
  "Dieci Association South Section 4 Director Meursault": "Images/Identities/Meursault/DieciMeursault.png",
  "Cinq Association West Section 3 Meursault": "Images/Identities/Meursault/CinqWestMeursault.png",
  "The Thumb East Capo IIII Meursault": "Images/Identities/Meursault/CapoMeursault.png",
  "Tingtang Gang Gangleader Hong Lu": "Images/Identities/HongLu/TingtangHongLu.png",
  "K Corp. Class 3 Excision Staff Hong Lu": "Images/Identities/HongLu/KCorpHongLu.png",
  "Dieci Association South Section 4 Hong Lu": "Images/Identities/HongLu/DieciHongLu.png",
  "District 20 Yurodivy Hong Lu": "Images/Identities/HongLu/YurodivyHongLu.png",
  "Full-Stop Office Rep Hong Lu": "Images/Identities/HongLu/FullStopHongLu.png",
  "R Corp. 4th Pack Reindeer Hong Lu": "Images/Identities/HongLu/RCorpHongLu.png",
  "R Corp. 4th Pack Rabbit Heathcliff": "Images/Identities/Heathcliff/RCorpHeathcliff.png",
  "Lobotomy E.G.O::Sunshower Heathcliff": "Images/Identities/Heathcliff/SunshowerHeathcliff.png",
  "The Pequod Harpooner Heathcliff": "Images/Identities/Heathcliff/PequodHeathcliff.png",
  "Öufi Association South Section 3 Heathcliff": "Images/Identities/Heathcliff/OufiHeathcliff.png",
  "Wild Hunt Heathcliff": "Images/Identities/Heathcliff/WildHuntHeathcliff.png",
  "Full-Stop Office Fixer Heathcliff": "Images/Identities/Heathcliff/FullStopHeathcliff.png",
  "Kurokumo Clan Wakashu Heathcliff": "Images/Identities/Heathcliff/KurokumoHeathcliff.png",
  "R Corp. 4th Pack Reindeer Ishmael": "Images/Identities/Ishmael/RCorpIshmael.png",
  "Liu Association South Section 4 Ishmael": "Images/Identities/Ishmael/LiuIshmael.png",
  "Molar Boatworks Fixer Ishmael": "Images/Identities/Ishmael/MolarIshmael.png",
  "The Pequod Captain Ishmael": "Images/Identities/Ishmael/Ahabmael.png",
  "Zwei Association West Section 3 Ishmael": "Images/Identities/Ishmael/ZweiWestIshmael.png",
  "Kurokumo Clan Captain Ishmael": "Images/Identities/Ishmael/KurokumoIshmael.png",
  "Family Hierarch Candidate Ishmael": "Images/Identities/Ishmael/XichunIshmael.png",
  "Kurokumo Clan Wakashu Rodion": "Images/Identities/Rodion/KurokumoRodion.png",
  "Rosespanner Workshop Rep Rodion": "Images/Identities/Rodion/RosespannerRodion.png",
  "Dieci Association South Section 4 Rodion": "Images/Identities/Rodion/DieciRodion.png",
  "Liu Association South Section 4 Director Rodion": "Images/Identities/Rodion/LiuRodion.png",
  "Devyat Association North Section 3 Rodion": "Images/Identities/Rodion/DevyatRodion.png",
  "The Princess Of La Manchaland Rodion": "Images/Identities/Rodion/PrincessRodion.png",
  "Heishou Pack - Si Branch Rodion": "Images/Identities/Rodion/SiRodion.png",
  "Lobotomy E.G.O::The Sword Sharpened with Tears Rodion": "Images/Identities/Rodion/SwordSharpenedWithTearsRodion.png",
  "Blade Lineage Salsu Sinclair": "Images/Identities/Sinclair/BLSinclair.png",
  "The One Who Shall Grip Sinclair": "Images/Identities/Sinclair/NCorpSinclair.png",
  "Cinq Association South Section 4 Director Sinclair": "Images/Identities/Sinclair/CinqSinclair.png",
  "Dawn Office Fixer Sinclair": "Images/Identities/Sinclair/DawnSinclair.png",
  "Devyat Association North Section 3 Sinclair": "Images/Identities/Sinclair/DevyatSinclair.png",
  "The Middle Little Brother Sinclair": "Images/Identities/Sinclair/MiddleSinclair.png",
  "The Thumb East Soldato II Sinclair": "Images/Identities/Sinclair/SoldatoSinclair.png",
  "Seven Association South Section 6 Director Outis": "Images/Identities/Outis/SevenOutis.png",
  "Molar Office Fixer Outis": "Images/Identities/Outis/MolarOutis.png",
  "Lobotomy E.G.O::Magic Bullet Outis": "Images/Identities/Outis/MagicBulletOutis.png",
  "Wuthering Heights Chief Butler Outis": "Images/Identities/Outis/MaidOutis.png",
  "W Corp. L3 Cleanup Captain Outis": "Images/Identities/Outis/WCorpOutis.png",
  "The Barber of La Manchaland Outis": "Images/Identities/Outis/BarberOutis.png",
  "Heishou Pack - Mao Branch Outis": "Images/Identities/Outis/MaoOutis.png",
  "T Corp. Class 3 VDCU Staff Outis": "Images/Identities/Outis/TCorpOutis.png",
  "G Corp. Manager Corporal Gregor": "Images/Identities/Gregor/GCorpGregor.png",
  "Zwei Association South Section 4 Gregor": "Images/Identities/Gregor/ZweiSouthGregor.png",
  "Twinhook Pirates First Mate Gregor": "Images/Identities/Gregor/TwinhookGregor.png",
  "Edgar Family Heir Gregor": "Images/Identities/Gregor/LintonGregor.png",
  "The Priest of La Manchaland Gregor": "Images/Identities/Gregor/PriestGregor.png",
  "Firefist Office Survivor Gregor": "Images/Identities/Gregor/FirefistGregor.png",
  "Heishou Pack - Si Branch Gregor": "Images/Identities/Gregor/SiGregor.png",
  
  // 2★ IDs
  "Rosespanner Workshop Fixer Gregor": "Images/Identities/Gregor/RosespannerGregor.png",
  "Liu Association South Section 6 Gregor": "Images/Identities/Gregor/LiuGregor.png",
  "R.B. Sous-Chef Gregor": "Images/Identities/Gregor/ChefGregor.png",
  "Kurokumo Clan Captain Gregor": "Images/Identities/Gregor/KurokumoGregor.png",
  "Blade Lineage Salsu Outis": "Images/Identities/Outis/BLOutis.png",
  "G Corp Head Manager Outis": "Images/Identities/Outis/GCorpOutis.png",
  "Cinq Association South Section 4 Outis": "Images/Identities/Outis/CinqOutis.png",
  "The Ring Pointilist Student Outis": "Images/Identities/Outis/RingOutis.png",
  "Zwei Association South Section 6 Sinclair": "Images/Identities/Sinclair/ZweiSouthSinclair.png",
  "Los Mariachis Jefe Sinclair": "Images/Identities/Sinclair/AidaSinclair.png",
  "Lobotomy E.G.O::Red Sheet Sinclair": "Images/Identities/Sinclair/TalismanSinclair.png",
  "Molar Boatworks Fixer Sinclair": "Images/Identities/Sinclair/MolarSinclair.png",
  "Zwei Association West Section 3 Sinclair": "Images/Identities/Sinclair/ZweiWestSinclair.png",
  "LCCB Assistant Manager Rodion": "Images/Identities/Rodion/LCCBRodion.png",
  "N Corp. Mittlehammer Rodion": "Images/Identities/Rodion/NCorpRodion.png",
  "Zwei Association South Section 5 Rodion": "Images/Identities/Rodion/ZweiRodion.png",
  "T Corp. Class 2 Collection Staff Rodion": "Images/Identities/Rodion/TCorpRodion.png",
  "Shi Association South Section 5 Ishmael": "Images/Identities/Ishmael/ShiIshmael.png",
  "LCCB Assistant Manager Ishmael": "Images/Identities/Ishmael/LCCBIshmael.png",
  "Lobotomy E.G.O::Sloshing Ishmael": "Images/Identities/Ishmael/SloshingIshmael.png",
  "Edgar Family Butler Ishmael": "Images/Identities/Ishmael/MaidIshmael.png",
  "Shi Association South Section 5 Heathcliff": "Images/Identities/Heathcliff/ShiHeathcliff.png",
  "N Corp. Kleinhammer Heathcliff": "Images/Identities/Heathcliff/NCorpHeathcliff.png",
  "Seven Association South Section 4 Heathcliff": "Images/Identities/Heathcliff/SevenHeathcliff.png",
  "MultiCrack Office Fixer Heathcliff": "Images/Identities/Heathcliff/MulticrackHeathcliff.png",
  "Kurokumo Clan Wakashu Hong Lu": "Images/Identities/HongLu/KurokumoHongLu.png",
  "Liu Association South Section 5 Hong Lu": "Images/Identities/HongLu/LiuHongLu.png",
  "W Corp. L2 Cleanup Agent Hong Lu": "Images/Identities/HongLu/WCorpHongLu.png",
  "Hook Office Fixer Hong Lu": "Images/Identities/HongLu/HookHongLu.png",
  "Fanghunt Office Fixer Hong Lu": "Images/Identities/HongLu/FanghuntHongLu.png",
  "Liu Association South Section 6 Meursault": "Images/Identities/Meursault/LiuMeursault.png",
  "Rosespanner Workshop Fixer Meursault": "Images/Identities/Meursault/RosespannerMeursault.png",
  "The Middle Little Brother Meursault": "Images/Identities/Meursault/MiddleMeursault.png",
  "Dead Rabbits Boss Meursault": "Images/Identities/Meursault/DeadRabbitsMeursault.png",
  "Seven Association South Section 6 Ryoshu": "Images/Identities/Ryoshu/SevenRyoshu.png",
  "LCCB Assistant Manager Ryoshu": "Images/Identities/Ryoshu/LCCBRyoshu.png",
  "Liu Association South Section 4 Ryoshu": "Images/Identities/Ryoshu/LiuRyoshu.png",
  "District 20 Yurodivy Ryoshu": "Images/Identities/Ryoshu/YurodivyRyoshu.png",
  "Blade Lineage Salsu Don Quixote": "Images/Identities/DonQuixote/BLDonQuixote.png",
  "Shi Association South Section 5 Director Don Quixote": "Images/Identities/DonQuixote/ShiDonQuixote.png",
  "N Corp. Mittlehammer Don Quixote": "Images/Identities/DonQuixote/NCorpDonQuixote.png",
  "Lobotomy E.G.O::Lantern Don Quixote": "Images/Identities/DonQuixote/LanternDonQuixote.png",
  "Zwei Association South Section 4 Faust": "Images/Identities/Faust/ZweiFaust.png",
  "Wuthering Heights Butler Faust": "Images/Identities/Faust/MaidFaust.png",
  "Lobotomy Corporation Remanant Faust": "Images/Identities/Faust/RemnantFaust.png",
  "W Corp. L2 Cleanup Agent Faust": "Images/Identities/Faust/WCorpFaust.png",
  "Dieci Association South Section 4 Yi Sang": "Images/Identities/YiSang/DieciYiSang.png",
  "LCE E.G.O::Lantern Yi Sang": "Images/Identities/YiSang/LanternYiSang.png",
  "The Pequod First Mate Yi Sang": "Images/Identities/YiSang/PequodYiSang.png",
  "Molar Office Fixer Yi Sang": "Images/Identities/YiSang/MolarYiSang.png",
  "Seven Association South Section 6 Yi Sang": "Images/Identities/YiSang/SevenYiSang.png",

  // 1★ IDs
  "LCB Sinner Yi Sang": "Images/Identities/YiSang/LCBYiSang.png",
  "LCB Sinner Faust": "Images/Identities/Faust/LCBFaust.png",
  "LCB Sinner Don Quixote": "Images/Identities/DonQuixote/LCBDon.png",
  "LCB Sinner Ryoshu": "Images/Identities/Ryoshu/LCBRyoshu.png",
  "LCB Sinner Meursault": "Images/Identities/Meursault/LCBMeursault.png",
  "LCB Sinner Hong Lu": "Images/Identities/HongLu/LCBHongLu.png",
  "LCB Sinner Ishmael": "Images/Identities/Ishmael/LCBIshmael.png",
  "LCB Sinner Heathcliff": "Images/Identities/Heathcliff/LCBHeathcliff.png",
  "LCB Sinner Rodion": "Images/Identities/Rodion/LCBRodion.png",
  "LCB Sinner Sinclair": "Images/Identities/Sinclair/LCBSinclair.png",
  "LCB Sinner Outis": "Images/Identities/Outis/LCBOutis.png",
  "LCB Sinner Gregor": "Images/Identities/Gregor/LCBGregor.png",
  
  // EGOs
  "4th Match Flame (Yi Sang)": "Images/EGO/Wrath/4thMatchFlameYiSang.png",
  "4th Match Flame (Ryoshu)": "Images/EGO/Wrath/4thMatchFlameRyoshu.png",
  "Regret (Meursault)": "Images/EGO/Wrath/RegretMeursault.png",
  "Capote (Meursault)": "Images/EGO/Wrath/CapoteMeursault.png",
  "Capote (Ishmael)": "Images/EGO/Wrath/CapoteIshmael.png",
  "Ardor Blossom Star (Ishmael)": "Images/EGO/Wrath/ArdorBlossomStarIshmael.png",
  "4th Match Flame (Rodion)": "Images/EGO/Wrath/4thMatchFlameRodion.png",
  "Indicant's Trial (Rodion)": "Images/EGO/Wrath/IndicantsTrialRodion.png",
  "Impending Day (Sinclair)": "Images/EGO/Wrath/ImpendingDaySinclair.png",
  "Holiday (Outis)": "Images/EGO/Wrath/HolidayOutis.png", 
  "9:2 (Faust)": "Images/EGO/Lust/NineTwoFaust.png",
  "Lifetime Stew (Don Quixote)": "Images/EGO/Lust/LifetimeStewDonQuixote.png",
  "Yearning-Mircalla (Don Quixote)": "Images/EGO/Lust/YearningMircallaDonQuixote.png",
  "Red Eyes Ryoshu": "Images/EGO/Lust/RedEyesRyoshu.png",
  "Contempt, Awe (Ryoshu)": "Images/EGO/Lust/ContemptAweRyoshu.png",
  "Yearning-Mircalla (Meursault)": "Images/EGO/Lust/YearningMircallaMeursault.png",
  "Roseate Desire (Hong Lu)": "Images/EGO/Lust/RoseateDesireHongLu.png",
  "Ya Śūnyatā Tad Rūpam (Heathcliff)": "Images/EGO/Lust/BuddhaHeathcliff.png",
  "Roseate Desire (Ishmael)": "Images/EGO/Lust/RoseateDesireIshmael.png",
  "Sanguine Desire (Rodion)": "Images/EGO/Lust/SanguineDesireRodion.png",
  "Lifetime Stew (Sinclair)": "Images/EGO/Lust/LifetimeStewSinclair.png",
  "9:2 (Sinclair)": "Images/EGO/Lust/NineTwoSinclair.png",
  "Ya Śūnyatā Tad Rūpam (Outis)": "Images/EGO/Lust/BuddhaOutis.png",
  "Garden of Thorns (Gregor)": "Images/EGO/Lust/GardenOfThornsGregor.png",
  "Wishing Cairn (Yi Sang)": "Images/EGO/Sloth/WishingCairnYiSang.png",
  "Sunshower (Yi Sang)": "Images/EGO/Sloth/SunshowerYiSang.png",
  "Everlasting (Faust)": "Images/EGO/Sloth/EverlastingFaust.png",
  "Wishing Cairn (Don Quixote)": "Images/EGO/Sloth/WishingCairnDonQuixote.png",
  "Pursuance (Meursault)": "Images/EGO/Sloth/PursuanceMeursault.png",
  "Crushbound Past (Meursault)": "Images/EGO/Sloth/CrushboundPastMeursault.png",
  "Cavernous Wailing (Hong Lu)": "Images/EGO/Sloth/CavernousWailingHongLu.png",
  "Asymmetrical Inertia (Heathcliff)": "Images/EGO/Sloth/AsymmetricalInertiaHeathcliff.png",
  "Christmas Nightmare (Ishmael)": "Images/EGO/Sloth/ChristmasNightmareIshmael.png",
  "Pursuance (Rodion)": "Images/EGO/Sloth/PursuanceRodion.png",
  "Christmas Nightmare (Gregor)": "Images/EGO/Sloth/ChristmasNightmareGregor.png",
  "Lasso (Faust)": "Images/EGO/Gluttony/LassoFaust.png",
  "Red Sheet (Don Quixote)": "Images/EGO/Gluttony/RedSheetDonQuixote.png",
  "Lasso (Hong Lu)": "Images/EGO/Gluttony/LassoHongLu.png",
  "Effervescent Corrosion (Hong Lu)": "Images/EGO/Gluttony/EffervescentCorrosionHongLu.png",
  "Tears of the Tarnished Blood [汚血泣淚] (Hong Lu)" : "Images/EGO/Gluttony/TearsOfTheTarnishedBloodHongLu.png",
  "Holiday (Heathcliff)": "Images/EGO/Gluttony/HolidayHeathcliff.png",
  "Wingbeat (Ishmael)": "Images/EGO/Gluttony/WingbeatIshmael.png",
  "Effervescent Corrosion (Rodion)": "Images/EGO/Gluttony/EffervescentCorrosionRodion.png",
  "Lantern (Sinclair)": "Images/EGO/Gluttony/LanternSinclair.png",
  "Tears of the Tarnished Blood [汚血泣淚] (Sinclair)": "Images/EGO/Gluttony/TearsOfTheTarnishedBloodSinclair.png",
  "Sunshower (Outis)": "Images/EGO/Gluttony/SunshowerOutis.png",
  "Ebony Stem (Outis)": "Images/EGO/Gluttony/EbonyStemOutis.png",
  "Legerdemain (Gregor)": "Images/EGO/Gluttony/LegerdemainGregor.png",
  "Lantern (Gregor)": "Images/EGO/Gluttony/LanternGregor.png",
  "Bygone Days (Yi Sang)": "Images/EGO/Gloom/BygoneDaysYiSang.png",
  "Fluid Sac (Faust)": "Images/EGO/Gloom/FluidSacFaust.png",
  "Fluid Sac (Don Quixote)": "Images/EGO/Gloom/FluidSacDonQuixote.png",
  "Soda (Ryoshu)": "Images/EGO/Gloom/SodaRyoshu.png",
  "AEDD (Heathcliff)": "Images/EGO/Gloom/AEDDHeathcliff.png",
  "Binds (Heathcliff)": "Images/EGO/Gloom/BindsHeathcliff.png",
  "Hundred-Footed Death Maggot [蝍蛆殺] (Ishmael)": "Images/EGO/Gloom/HundredFootedDeathMaggotIshmael.png",
  "Bygone Days (Ishmael)": "Images/EGO/Gloom/BygoneDaysIshmael.png",
  "Rime Shank (Rodion)": "Images/EGO/Gloom/RimeShankRodion.png",
  "Cavernous Wailing (Sinclair)": "Images/EGO/Gloom/CavernousWailingSinclair.png",
  "Bygone Days (Gregor)": "Images/EGO/Gloom/BygoneDaysGregor.png",
  "AEDD (Gregor)": "Images/EGO/Gloom/AEDDGregor.png",
  "Solemn Lament (Gregor)": "Images/EGO/Gloom/SolemnLamentGregor.png",
  "Dimension Shredder (Yi Sang)": "Images/EGO/Pride/DimensionShredderYiSang.png",
  "Fell Bullet (Yi Sang)": "Images/EGO/Pride/FellBulletYiSang.png",
  "Thoracalgia (Faust)": "Images/EGO/Pride/ThoracalgiaFaust.png",
  "Blind Obsession (Ryoshu)": "Images/EGO/Pride/BlindObsessionRyoshu.png",
  "Thoracalgia (Ryoshu)": "Images/EGO/Pride/ThoracalgiaRyoshu.png",
  "Dimension Shredder (Hong Lu)": "Images/EGO/Pride/DimensionShredderHongLu.png",
  "Fell Bullet (Heathcliff)": "Images/EGO/Pride/FellBulletHeathcliff.png",
  "Blind Obession (Ishmael)": "Images/EGO/Pride/BlindObessionIshmael.png",
  "Binds (Outis)": "Images/EGO/Pride/BindsOutis.png",
  "Magic Bullet (Outis)": "Images/EGO/Pride/MagicBulletOutis.png",
  "Hex Nail (Faust)": "Images/EGO/Envy/HexNailFaust.png",
  "Telepole (Faust)": "Images/EGO/Envy/TelepoleFaust.png",
  "Electric Screaming (Don Quixote)": "Images/EGO/Envy/ElectricScreamingDonQuixote.png",
  "Telepole (Don Quixote)": "Images/EGO/Envy/TelepoleDonQuixote.png",
  "In the Name of Love and Hate (Don Quixote)": "Images/EGO/Envy/InTheNameOfLoveAndHateDonQuixote.png",
  "Red Eyes (Open) (Ryoshu)": "Images/EGO/Envy/RedEyesOpenRyoshu.png",
  "Screwloose Wallop (Meursault)": "Images/EGO/Envy/ScrewlooseWallopMeursault.png",
  "Electric Screaming (Meursault)": "Images/EGO/Envy/ElectricScreamingMeursault.png",
  "Soda (Hong Lu)": "Images/EGO/Envy/SodaHongLu.png",
  "Telepole (Heathcliff)": "Images/EGO/Envy/TelepoleHeathcliff.png",
  "Hex Nail (Rodion)": "Images/EGO/Envy/HexNailRodion.png",
  "Hex Nail (Sinclair)": "Images/EGO/Envy/HexNailSinclair.png",
  "Dimension Shredder (Outis)": "Images/EGO/Envy/DimensionShredderOutis.png",
};

// Sinner icons
const sinnerIcons = {
  "Yi Sang": "./Images/Icons/YiSangIcon.png",
  "Faust": "./Images/Icons/FaustIcon.png",
  "Don Quixote": "./Images/Icons/DonQuixoteIcon.png",
  "Ryoshu": "./Images/Icons/RyoshuIcon.png",
  "Meursault": "./Images/Icons/MeursaultIcon.png",
  "Hong Lu": "./Images/Icons/HongLuIcon.png",
  "Heathcliff": "./Images/Icons/HeathcliffIcon.png",
  "Ishmael": "./Images/Icons/IshmaelIcon.png",
  "Rodion": "./Images/Icons/RodionIcon.png",
  "Sinclair": "./Images/Icons/SinclairIcon.png",
  "Outis": "./Images/Icons/OutisIcon.png",
  "Gregor": "./Images/Icons/GregorIcon.png"
};

const FALLBACK_IMAGE = "./Images/Misc/zenacat.png";

// Sinner names
const sinners = [
  "Yi Sang", "Faust", "Don Quixote", "Ryoshu", 
  "Meursault", "Hong Lu", "Heathcliff", "Ishmael",
  "Rodion", "Sinclair", "Outis", "Gregor"
];

// Banner data
const banners = {
  standard: {
    name: "Standard Banner",
    rates: { ego: 0.013, tripleZero: 0.029, doubleZero: 0.128, common: 0.83 },
    identities: {
      "3★": ["Blade Lineage Salsu Yi Sang", "Effloresced E.G.O::Spicebush Yi Sang", "W Corp. L3 Cleanup Agent Yi Sang",
        "The Ring Pointilist Student Yi Sang", "Liu Association South Section 3 Yi Sang", "N Corp. E.G.O::Fell Bullet Yi Sang",
        "The One Who Grips Faust", "Seven Association South Section 4 Faust", "Heishou Pack - Mao Branch Adept Faust",
        "W Corp. L3 Cleanup Agent Don Quixote", "Cinq Association South Section 5 Director Don Quixote", "The Middle Little Sister Don Quixote",
        "T Corp. Class 3 Collection Staff Don Quixote", "The Manager of La Manchaland Don Quixote", "Cinq Association East Section 3 Don Quixote",
        "Kurokumo Clan Wakashu Ryoshu", "Edgar Family Chief Butler Ryoshu", "W Corp. L3 Cleanup Agent Ryoshu", "W Corp. L2 Cleanup Agent Meursault",
        "N Corp. Großhammer Meursault", "R Corp. 4th Pack Rhino Meursault", "Dieci Association South Section 4 Director Meursault", "Cinq Association West Section 3 Meursault",
        "The Thumb East Capo IIII Meursault", "Tingtang Gang Gangleader Hong Lu", "K Corp. Class 3 Excision Staff Hong Lu", "Dieci Association South Section 4 Hong Lu",
        "R Corp. 4th Pack Reindeer Hong Lu", "R Corp. 4th Pack Rabbit Heathcliff", "Lobotomy E.G.O::Sunshower Heathcliff", "The Pequod Harpooner Heathcliff",
        "Öufi Association South Section 3 Heathcliff", "Wild Hunt Heathcliff", "R Corp. 4th Pack Reindeer Ishmael", "Liu Association South Section 4 Ishmael",
        "The Pequod Captain Ishmael", "Zwei Association West Section 3 Ishmael", "Family Hierarch Candidate Ishmael", "Kurokumo Clan Wakashu Rodion",
        "Rosespanner Workshop Rep Rodion", "Dieci Association South Section 4 Rodion", "Liu Association South Section 4 Director Rodion", "Devyat Association North Section 3 Rodion",
        "The Princess Of La Manchaland Rodion", "Heishou Pack - Si Branch Rodion", "Blade Lineage Salsu Sinclair", "The One Who Shall Grip Sinclair", "Cinq Association South Section 4 Director Sinclair",
        "Devyat Association North Section 3 Sinclair", "The Middle Little Brother Sinclair", "The Thumb East Soldato II Sinclair", "Seven Association South Section 6 Director Outis", "Wuthering Heights Chief Butler Outis",
        "W Corp. L3 Cleanup Captain Outis", "The Barber of La Manchaland Outis", "T Corp. Class 3 VDCU Staff Outis", "G Corp. Manager Corporal Gregor", "Zwei Association South Section 4 Gregor",
        "Twinhook Pirates First Mate Gregor", "Edgar Family Heir Gregor", "The Priest of La Manchaland Gregor", "Firefist Office Survivor Gregor", "Heishou Pack - Si Branch Gregor"
      ],
      "2★": [
        "Rosespanner Workshop Fixer Gregor", 
        "Liu Association South Section 6 Gregor",
        "Blade Lineage Salsu Outis",
        "G Corp Head Manager Outis",
        "Cinq Association South Section 4 Outis",
        "The Ring Pointilist Student Outis",
        "Zwei Association South Section 6 Sinclair",
        "Los Mariachis Jefe Sinclair",
        "Lobotomy E.G.O::Red Sheet Sinclair",
        "Zwei Association West Section 3 Sinclair",
        "LCCB Assistant Manager Rodion",
        "N Corp. Mittlehammer Rodion",
        "Zwei Association South Section 5 Rodion",
        "T Corp. Class 2 Collection Staff Rodion",
        "Shi Association South Section 5 Ishmael",
        "LCCB Assistant Manager Ishmael",
        "Lobotomy E.G.O::Sloshing Ishmael",
        "Edgar Family Butler Ishmael",
        "Shi Association South Section 5 Heathcliff",
        "N Corp. Kleinhammer Heathcliff",
        "Seven Association South Section 4 Heathcliff",
        "Kurokumo Clan Wakashu Hong Lu",
        "Liu Association South Section 5 Hong Lu",
        "W Corp. L2 Cleanup Agent Hong Lu",
        "Fanghunt Office Fixer Hong Lu",
        "Liu Association South Section 6 Meursault",
        "Rosespanner Workshop Fixer Meursault",
        "The Middle Little Brother Meursault",
        "Dead Rabbits Boss Meursault",
        "Seven Association South Section 6 Ryoshu",
        "LCCB Assistant Manager Ryoshu",
        "Liu Association South Section 4 Ryoshu",
        "N Corp. Mittlehammer Don Quixote",
        "Shi Association South Section 5 Director Don Quixote",
        "Wuthering Heights Butler Faust",
        "Lobotomy Corporation Remanant Faust",
        "W Corp. L2 Cleanup Agent Faust",
        "Zwei Association South Section 4 Faust",
        "Dieci Association South Section 4 Yi Sang",
        "Seven Association South Section 6 Yi Sang",
        "The Pequod First Mate Yi Sang"
      ],
      "1★": [
        "LCB Sinner Faust", "LCB Sinner Yi Sang", "LCB Sinner Don Quixote", 
        "LCB Sinner Ryoshu", "LCB Sinner Outis", "LCB Sinner Ishmael", 
        "LCB Sinner Heathcliff", "LCB Sinner Gregor", "LCB Sinner Hong Lu", 
        "LCB Sinner Meursault", "LCB Sinner Rodion", "LCB Sinner Sinclair"
      ]
    },
    egos: ["Contempt, Awe (Ryoshu)", "Crushbound Past (Meursault", "Indicant's Trial (Rodion)", "Garden Of Thorns (Gregor)", "Dimension Shredder (Yi Sang)", "Fell Bullet (Yi Sang)", "Telepole (Faust)", "Thoracalgia (Faust)", "Telepole (Don Quixote)",
      "Red Eyes (Open) (Ryoshu)", "Pursuance (Meursault)", "Dimension Shredder (Hong Lu)", "Ya Śūnyatā Tad Rūpam (Heathcliff)", "Ardor Blossom Star (Ishmael)", "Pursuance (Rodion)", "Lantern (Sinclair)", "Wishing Cairn (Yi Sang)", "Hex Nail (Faust)",
      "Wishing Cairn (Don Quixote)", "Red Eyes (Ryoshu)", "Cavernous Wailing (Hong Lu)", "Fell Bullet (Heathcliff)", "Bygone Days (Ishmael)", "Ya Śūnyatā Tad Rūpam (Outis)", "Lantern (Gregor)", "Cavernous Wailing (Sinclair)"
    ]
  },
  Super: {
    name: "Super Banner",
    rates: { ego: 0.013, tripleZero: 0.029, doubleZero: 0.128, common: 0.83 },
    identities: {
      "3★": [
        "Effloresced E.G.O::Spicebush Yi Sang",
        "W Corp. L3 Cleanup Agent Yi Sang",
        "The Ring Pointilist Student Yi Sang",
        "Lobotomy E.G.O::Solemn Lament Yi Sang",
        "Liu Association South Section 3 Yi Sang",
        "N Corp. E.G.O::Fell Bullet Yi Sang",
        "Blade Lineage Salsu Yi Sang",
        "The One Who Grips Faust",
        "Seven Association South Section 4 Faust",
        "Lobotomy E.G.O::Regret Faust",
        "Blade Lineage Salsu Faust",
        "Multicrack Office Rep Faust",
        "LCE E.G.O::Ardor Blossom Star Faust",
        "Heishou Pack - Mao Branch Adept Faust",
        "W Corp. L3 Cleanup Agent Don Quixote",
        "Cinq Association South Section 5 Director Don Quixote",
        "The Middle Little Sister Don Quixote",
        "T Corp. Class 3 Collection Staff Don Quixote",
        "The Manager of La Manchaland Don Quixote",
        "Cinq Association East Section 3 Don Quixote",
        "Lobotomy E.G.O::In the Name of Love and Hate Don Quixote",
        "Kurokumo Clan Wakashu Ryoshu",
        "R.B. Chef de Cuisine Ryoshu",
        "W Corp. L3 Cleanup Agent Ryoshu",
        "Edgar Family Chief Butler Ryoshu",
        "Lobotomy E.G.O::Red Eyes & Penitence Ryoshu",
        "Heishou Pack - Mao Branch Ryoshu",
        "W Corp. L2 Cleanup Agent Meursault",
        "N Corp. Großhammer Meursault",
        "R Corp. 4th Pack Rhino Meursault",
        "Blade Lineage Mentor Meursault",
        "Dieci Association South Section 4 Director Meursault",
        "Cinq Association West Section 3 Meursault",
        "The Thumb East Capo IIII Meursault",
        "Tingtang Gang Gangleader Hong Lu",
        "K Corp. Class 3 Excision Staff Hong Lu",
        "Dieci Association South Section 4 Hong Lu",
        "District 20 Yurodivy Hong Lu",
        "Full-Stop Office Rep Hong Lu",
        "R Corp. 4th Pack Reindeer Hong Lu",
        "R Corp. 4th Pack Rabbit Heathcliff",
        "Lobotomy E.G.O::Sunshower Heathcliff",
        "The Pequod Harpooner Heathcliff",
        "Öufi Association South Section 3 Heathcliff",
        "Wild Hunt Heathcliff",
        "Full-Stop Office Fixer Heathcliff",
        "Kurokumo Clan Wakashu Heathcliff",
        "R Corp. 4th Pack Reindeer Ishmael",
        "Liu Association South Section 4 Ishmael",
        "Molar Boatworks Fixer Ishmael",
        "The Pequod Captain Ishmael",
        "Zwei Association West Section 3 Ishmael",
        "Kurokumo Clan Captain Ishmael",
        "Family Hierarch Candidate Ishmael",
        "Kurokumo Clan Wakashu Rodion",
        "Rosespanner Workshop Rep Rodion",
        "Dieci Association South Section 4 Rodion",
        "Liu Association South Section 4 Director Rodion",
        "Devyat Association North Section 3 Rodion",
        "The Princess Of La Manchaland Rodion",
        "Heishou Pack - Si Branch Rodion",
        "Lobotomy E.G.O::The Sword Sharpened with Tears Rodion",
        "Blade Lineage Salsu Sinclair",
        "The One Who Shall Grip Sinclair",
        "Cinq Association South Section 4 Director Sinclair",
        "Dawn Office Fixer Sinclair",
        "Devyat Association North Section 3 Sinclair",
        "The Middle Little Brother Sinclair",
        "The Thumb East Soldato II Sinclair",
        "Seven Association South Section 6 Director Outis",
        "Molar Office Fixer Outis",
        "Lobotomy E.G.O::Magic Bullet Outis",
        "Wuthering Heights Chief Butler Outis",
        "W Corp. L3 Cleanup Captain Outis",
        "The Barber of La Manchaland Outis",
        "Heishou Pack - Mao Branch Outis",
        "T Corp. Class 3 VDCU Staff Outis",
        "G Corp. Manager Corporal Gregor",
        "Zwei Association South Section 4 Gregor",
        "Twinhook Pirates First Mate Gregor",
        "Edgar Family Heir Gregor",
        "The Priest of La Manchaland Gregor",
        "Firefist Office Survivor Gregor",
        "Heishou Pack - Si Branch Gregor"
        ],
      "2★": [
        "Rosespanner Workshop Fixer Gregor", 
        "Liu Association South Section 6 Gregor",
        "R.B. Sous-Chef Gregor",
        "Kurokumo Clan Captain Gregor",
        "Blade Lineage Salsu Outis",
        "G Corp Head Manager Outis",
        "Cinq Association South Section 4 Outis",
        "The Ring Pointilist Student Outis",
        "Zwei Association South Section 6 Sinclair",
        "Los Mariachis Jefe Sinclair",
        "Lobotomy E.G.O::Red Sheet Sinclair",
        "Molar Boatworks Fixer Sinclair",
        "Zwei Association West Section 3 Sinclair",
        "LCCB Assistant Manager Rodion",
        "N Corp. Mittlehammer Rodion",
        "Zwei Association South Section 5 Rodion",
        "T Corp. Class 2 Collection Staff Rodion",
        "Shi Association South Section 5 Ishmael",
        "LCCB Assistant Manager Ishmael",
        "Lobotomy E.G.O::Sloshing Ishmael",
        "Edgar Family Butler Ishmael",
        "Shi Association South Section 5 Heathcliff",
        "N Corp. Kleinhammer Heathcliff",
        "Seven Association South Section 4 Heathcliff",
        "MultiCrack Office Fixer Heathcliff",
        "Kurokumo Clan Wakashu Hong Lu",
        "Liu Association South Section 5 Hong Lu",
        "W Corp. L2 Cleanup Agent Hong Lu",
        "Hook Office Fixer Hong Lu",
        "Fanghunt Office Fixer Hong Lu",
        "Liu Association South Section 6 Meursault",
        "Rosespanner Workshop Fixer Meursault",
        "The Middle Little Brother Meursault",
        "Dead Rabbits Boss Meursault",
        "Seven Association South Section 6 Ryoshu",
        "LCCB Assistant Manager Ryoshu",
        "Liu Association South Section 4 Ryoshu",
        "District 20 Yurodivy Ryoshu",
        "Blade Lineage Salsu Don Quixote",
        "Shi Association South Section 5 Director Don Quixote",
        "N Corp. Mittlehammer Don Quixote",
        "Lobotomy E.G.O::Lantern Don Quixote",
        "Zwei Association South Section 4 Faust",
        "Wuthering Heights Butler Faust",
        "Lobotomy Corporation Remanant Faust",
        "W Corp. L2 Cleanup Agent Faust",
        "Dieci Association South Section 4 Yi Sang",
        "LCE E.G.O::Lantern Yi Sang",
        "The Pequod First Mate Yi Sang",
        "Molar Office Fixer Yi Sang",
        "Seven Association South Section 6 Yi Sang"
      ],
      "1★": [
        "LCB Sinner Faust", "LCB Sinner Yi Sang", "LCB Sinner Don Quixote", 
        "LCB Sinner Ryoshu", "LCB Sinner Outis", "LCB Sinner Ishmael", 
        "LCB Sinner Heathcliff", "LCB Sinner Gregor", "LCB Sinner Hong Lu", 
        "LCB Sinner Meursault", "LCB Sinner Rodion", "LCB Sinner Sinclair"
      ]
    },
    egos: [
      "4th Match Flame (Yi Sang)",
      "4th Match Flame (Ryoshu)", 
      "Regret (Meursault)",
      "Capote (Meursault)",
      "Capote (Ishmael)",
      "Ardor Blossom Star (Ishmael)",
      "4th Match Flame (Rodion)",
      "Indicant's Trial (Rodion)",
      "Impending Day (Sinclair)",
      "Holiday (Outis)",
      "9:2 (Faust)",
      "Lifetime Stew (Don Quixote)",
      "Yearning-Mircalla (Don Quixote)",
      "Contempt, Awe (Ryoshu)", 
      "Red Eyes Ryoshu",
      "Yearning-Mircalla (Meursault)",
      "Roseate Desire (Hong Lu)",
      "Ya Śūnyatā Tad Rūpam (Heathcliff)",
      "Roseate Desire (Ishmael)",
      "Sanguine Desire (Rodion)",
      "Lifetime Stew (Sinclair)",
      "9:2 (Sinclair)",
      "Ya Śūnyatā Tad Rūpam (Outis)",
      "Garden of Thorns (Gregor)",
      "Wishing Cairn (Yi Sang)",
      "Sunshower (Yi Sang)",
      "Everlasting (Faust)",
      "Wishing Cairn (Don Quixote)",
      "Pursuance (Meursault)",
      "Crushbound Past (Meursault)",
      "Cavernous Wailing (Hong Lu)",
      "Asymmetrical Inertia (Heathcliff)",
      "Christmas Nightmare (Ishmael)",
      "Pursuance (Rodion)",
      "Christmas Nightmare (Gregor)",
      "Lasso (Faust)",
      "Red Sheet (Don Quixote)",
      "Lasso (Hong Lu)",
      "Effervescent Corrosion (Hong Lu)",
      "Tears of the Tarnished Blood [汚血泣淚] (Hong Lu)",
      "Holiday (Heathcliff)",
      "Wingbeat (Ishmael)",
      "Effervescent Corrosion (Rodion)",
      "Lantern (Sinclair)",
      "Tears of the Tarnished Blood [汚血泣淚] (Sinclair)",
      "Sunshower (Outis)",
      "Ebony Stem (Outis)",
      "Legerdemain (Gregor)",
      "Lantern (Gregor)",
      "Bygone Days (Yi Sang)",
      "Fluid Sac (Faust)",
      "Fluid Sac (Don Quixote)",
      "Soda (Ryoshu)",
      "AEDD (Heathcliff)",
      "Binds (Heathcliff)",
      "Hundred-Footed Death Maggot [蝍蛆殺] (Ishmael)",
      "Bygone Days (Ishmael)",
      "Rime Shank (Rodion)",
      "Cavernous Wailing (Sinclair)",
      "Bygone Days (Gregor)",
      "AEDD (Gregor)",
      "Solemn Lament (Gregor)", 
      "Dimension Shredder (Yi Sang)",
      "Fell Bullet (Yi Sang)",
      "Thoracalgia (Faust)",
      "Blind Obsession (Ryoshu)",
      "Thoracalgia (Ryoshu)",
      "Dimension Shredder (Hong Lu)",
      "Fell Bullet (Heathcliff)",
      "Blind Obession (Ishmael)",
      "Binds (Outis)",
      "Magic Bullet (Outis)", 
      "Hex Nail (Faust)",
      "Telepole (Faust)",
      "Electric Screaming (Don Quixote)",
      "Telepole (Don Quixote)",
      "In the Name of Love and Hate (Don Quixote)",
      "Red Eyes (Open) (Ryoshu)",
      "Screwloose Wallop (Meursault)",
      "Electric Screaming (Meursault)",
      "Soda (Hong Lu)",
      "Telepole (Heathcliff)",
      "Hex Nail (Rodion)",
      "Hex Nail (Sinclair)",
      "Dimension Shredder (Outis)"
     ]
  },
  TargetExtractionYiSang: {
    name: "Target Extraction Yi Sang",
    rates: { ego: 0.013, tripleZero: 0.029, doubleZero: 0.128, common: 0.83},
    identities: {
      "3★": [
        {name: "Blade Lineage Salsu Yi Sang", weight: 9.5},
        {name: "Effloresced E.G.O::Spicebush Yi Sang", weight: 9.5},
        {name: "W Corp. L3 Cleanup Agent Yi Sang", weight: 9.5},
        {name: "The Ring Pointilist Student Yi Sang", weight: 9.5},
        {name: "Liu Association South Section 3 Yi Sang", weight: 9.5},
        {name: "N Corp. E.G.O::Fell Bullet Yi Sang", weight: 9.5},
        {name: "The One Who Grips Faust", weight: 1},
        {name: "Seven Association South Section 4 Faust", weight: 1},
        {name: "Heishou Pack - Mao Branch Adept Faust", weight: 1},
        {name: "W Corp. L3 Cleanup Agent Don Quixote", weight: 1},
        {name: "Cinq Association South Section 5 Director Don Quixote", weight: 1},
        {name: "The Middle Little Sister Don Quixote", weight: 1},
        {name: "T Corp. Class 3 Collection Staff Don Quixote", weight: 1},
        {name: "The Manager of La Manchaland Don Quixote", weight: 1},
        {name: "Cinq Association East Section 3 Don Quixote", weight: 1},
        {name: "Kurokumo Clan Wakashu Ryoshu", weight: 1},
        {name: "Edgar Family Chief Butler Ryoshu", weight: 1},  
        {name: "W Corp. L3 Cleanup Agent Ryoshu", weight: 1},
        {name: "W Corp. L2 Cleanup Agent Meursault", weight: 1},
        {name: "N Corp. Großhammer Meursault", weight: 1},
        {name: "R Corp. 4th Pack Rhino Meursault", weight: 1},
        {name: "Dieci Association South Section 4 Director Meursault", weight: 1},
        {name: "Cinq Association West Section 3 Meursault", weight: 1},
        {name: "The Thumb East Capo IIII Meursault", weight: 1},
        {name: "Tingtang Gang Gangleader Hong Lu", weight: 1},
        {name: "K Corp. Class 3 Excision Staff Hong Lu", weight: 1},
        {name: "Dieci Association South Section 4 Hong Lu", weight: 1},
        {name: "R Corp. 4th Pack Reindeer Hong Lu", weight: 1},
        {name: "R Corp. 4th Pack Rabbit Heathcliff", weight: 1},
        {name: "Lobotomy E.G.O::Sunshower Heathcliff", weight: 1},
        {name: "The Pequod Harpooner Heathcliff", weight: 1},
        {name: "Öufi Association South Section 3 Heathcliff", weight: 1},
        {name: "Wild Hunt Heathcliff", weight: 1},
        {name: "R Corp. 4th Pack Reindeer Ishmael", weight: 1},
        {name: "Liu Association South Section 4 Ishmael", weight: 1},
        {name: "The Pequod Captain Ishmael", weight: 1},
        {name: "Zwei Association West Section 3 Ishmael", weight: 1},
        {name: "Family Hierarch Candidate Ishmael", weight: 1}, 
        {name: "Kurokumo Clan Wakashu Rodion", weight: 1},
        {name: "Rosespanner Workshop Rep Rodion", weight: 1},
        {name: "Dieci Association South Section 4 Rodion", weight: 1},
        {name: "Liu Association South Section 4 Director Rodion", weight: 1},
        {name: "Devyat Association North Section 3 Rodion", weight: 1},
        {name: "The Princess Of La Manchaland Rodion", weight: 1},
        {name: "Heishou Pack - Si Branch Rodion", weight: 1},
        {name: "Blade Lineage Salsu Sinclair", weight: 1},
        {name: "The One Who Shall Grip Sinclair", weight: 1},
        {name: "Cinq Association South Section 4 Director Sinclair", weight: 1},
        {name: "Devyat Association North Section 3 Sinclair", weight: 1},
        {name: "The Middle Little Brother Sinclair", weight: 1},
        {name: "The Thumb East Soldato II Sinclair", weight: 1},
        {name: "Seven Association South Section 6 Director Outis", weight: 1},
        {name: "Wuthering Heights Chief Butler Outis", weight: 1},
        {name: "W Corp. L3 Cleanup Captain Outis", weight: 1},
        {name: "The Barber of La Manchaland Outis", weight: 1},
        {name: "T Corp. Class 3 VDCU Staff Outis", weight: 1},
        {name: "G Corp. Manager Corporal Gregor", weight: 1},
        {name: "Zwei Association South Section 4 Gregor", weight: 1},
        {name: "Twinhook Pirates First Mate Gregor", weight: 1},
        {name: "Edgar Family Heir Gregor", weight: 1},
        {name: "The Priest of La Manchaland Gregor", weight: 1},
        {name: "Firefist Office Survivor Gregor", weight: 1},
        {name: "Heishou Pack - Si Branch Gregor", weight: 1}
        ],
      "2★": [
        {name: "Rosespanner Workshop Fixer Gregor", weight: 1},
        {name: "Liu Association South Section 6 Gregor", weight: 1},
        {name: "Blade Lineage Salsu Outis", weight: 1},
        {name: "G Corp Head Manager Outis", weight: 1},
        {name: "Cinq Association South Section 4 Outis", weight: 1},
        {name: "The Ring Pointilist Student Outis", weight: 1},
        {name: "Zwei Association South Section 6 Sinclair", weight: 1},
        {name: "Los Mariachis Jefe Sinclair", weight: 1},
        {name: "Lobotomy E.G.O::Red Sheet Sinclair", weight: 1},
        {name: "Zwei Association West Section 3 Sinclair", weight: 1},
        {name: "LCCB Assistant Manager Rodion", weight: 1},
        {name: "N Corp. Mittlehammer Rodion", weight: 1},
        {name: "Zwei Association South Section 5 Rodion", weight: 1},
        {name: "T Corp. Class 2 Collection Staff Rodion", weight: 1},
        {name: "Shi Association South Section 5 Ishmael", weight: 1},
        {name: "LCCB Assistant Manager Ishmael", weight: 1},
        {name: "Lobotomy E.G.O::Sloshing Ishmael", weight: 1},
        {name: "Edgar Family Butler Ishmael", weight: 1},
        {name: "Shi Association South Section 5 Heathcliff", weight: 1},
        {name: "N Corp. Kleinhammer Heathcliff", weight: 1},
        {name: "Seven Association South Section 4 Heathcliff", weight: 1},
        {name: "Kurokumo Clan Wakashu Hong Lu", weight: 1},
        {name: "Liu Association South Section 5 Hong Lu", weight: 1},
        {name: "W Corp. L2 Cleanup Agent Hong Lu", weight: 1},
        {name: "Fanghunt Office Fixer Hong Lu", weight: 1},
        {name: "Liu Association South Section 6 Meursault", weight: 1},
        {name: "Rosespanner Workshop Fixer Meursault", weight: 1},
        {name: "The Middle Little Brother Meursault", weight: 1},
        {name: "Dead Rabbits Boss Meursault", weight: 1},
        {name: "Seven Association South Section 6 Ryoshu", weight: 1},
        {name: "LCCB Assistant Manager Ryoshu", weight: 1},
        {name: "Liu Association South Section 4 Ryoshu", weight: 1},
        {name: "N Corp. Mittlehammer Don Quixote", weight: 1},
        {name: "Shi Association South Section 5 Director Don Quixote", weight: 1},
        {name: "Wuthering Heights Butler Faust", weight: 1},
        {name: "Lobotomy Corporation Remanant Faust", weight: 1},
        {name: "W Corp. L2 Cleanup Agent Faust", weight: 1},
        {name: "Zwei Association South Section 4 Faust", weight: 1},
        {name: "Dieci Association South Section 4 Yi Sang", weight: 7.6},
        {name: "Seven Association South Section 6 Yi Sang", weight: 7.6},
        {name: "The Pequod First Mate Yi Sang", weight: 7.6},
        {name: "Molar Office Fixer Yi Sang", weight: 7.6},
        {name: "LCE E.G.O::Lantern Yi Sang", weight: 7.6}
      ],
      "1★": [
        {name: "LCB Sinner Yi Sang", weight: 11},
        {name: "LCB Sinner Faust", weight: 1},
        {name: "LCB Sinner Don Quixote", weight: 1},
        {name: "LCB Sinner Ryoshu", weight: 1},
        {name: "LCB Sinner Meursault", weight: 1},
        {name: "LCB Sinner Hong Lu", weight: 1},
        {name: "LCB Sinner Heathcliff", weight: 1},
        {name: "LCB Sinner Ishmael", weight: 1},
        {name: "LCB Sinner Rodion", weight: 1},
        {name: "LCB Sinner Sinclair", weight: 1},
        {name: "LCB Sinner Outis", weight: 1},
        {name: "LCB Sinner Gregor", weight: 1}
      ]
    },
    egos: [
      {name:"Contempt, Awe (Ryoshu)", weight: 1},
      {name:"Crushbound Past (Meursault)", weight: 1},
      {name:"Indicant's Trial (Rodion)", weight: 1},
      {name:"Garden Of Thorns (Gregor)", weight: 1},
      {name:"Dimension Shredder (Yi Sang)", weight: 8},
      {name:"Fell Bullet (Yi Sang)", weight: 8},
      {name:"Telepole (Faust)", weight: 1},
      {name:"Thoracalgia (Faust)", weight: 1},
      {name:"Telepole (Don Quixote)", weight: 1},
      {name:"Red Eyes (Open) (Ryoshu)", weight: 1},
      {name:"Pursuance (Meursault)", weight: 1},
      {name:"Dimension Shredder (Hong Lu)", weight: 1},
      {name:"Ya Śūnyatā Tad Rūpam (Heathcliff)", weight: 1},
      {name:"Ardor Blossom Star (Ishmael)", weight: 1},
      {name:"Pursuance (Rodion)", weight: 1},
      {name:"Lantern (Sinclair)", weight: 1},
      {name:"Wishing Cairn (Yi Sang)", weight: 8},
      {name:"Hex Nail (Faust)", weight: 1},
      {name:"Wishing Cairn (Don Quixote)", weight: 1},
      {name:"Red Eyes (Ryoshu)", weight: 1},
      {name:"Cavernous Wailing (Hong Lu)", weight: 1},
      {name:"Fell Bullet (Heathcliff)", weight: 1},
      {name:"Bygone Days (Ishmael)", weight: 1},
      {name:"Ya Śūnyatā Tad Rūpam (Outis)", weight: 1},
      {name:"Lantern (Gregor)", weight: 1},
      {name:"Cavernous Wailing (Sinclair)", weight: 1}
    ]
  },
  TimeKillingTimeBokgak: {
    name: "Time Killing Time New Target Identity & E.G.O Extraction",
    rates: { ego: 0.02, tripleZero: 0.03, doubleZero: 0.10, common: 0.85 },
    identities: {
      "3★": [
        {name:"T Corp. Class 3 VDCU Staff Outis", weight: 61.97},
        {name:"Blade Lineage Salsu Yi Sang", weight: 1},
        {name: "Effloresced E.G.O::Spicebush Yi Sang", weight: 1},
        {name: "W Corp. L3 Cleanup Agent Yi Sang", weight: 1},
        {name: "The Ring Pointilist Student Yi Sang", weight: 1},
        {name: "Liu Association South Section 3 Yi Sang", weight: 1},
        {name: "N Corp. E.G.O::Fell Bullet Yi Sang", weight: 1},
        {name: "The One Who Grips Faust", weight: 1},
        {name: "Seven Association South Section 4 Faust", weight: 1},
        {name: "Heishou Pack - Mao Branch Adept Faust", weight: 1},
        {name: "W Corp. L3 Cleanup Agent Don Quixote", weight: 1},
        {name: "Cinq Association South Section 5 Director Don Quixote", weight: 1},
        {name: "The Middle Little Sister Don Quixote", weight: 1},
        {name: "T Corp. Class 3 Collection Staff Don Quixote", weight: 1},
        {name: "The Manager of La Manchaland Don Quixote", weight: 1},
        {name: "Cinq Association East Section 3 Don Quixote", weight: 1},
        {name: "Kurokumo Clan Wakashu Ryoshu", weight: 1},
        {name: "Edgar Family Chief Butler Ryoshu", weight: 1},  
        {name: "W Corp. L3 Cleanup Agent Ryoshu", weight: 1},
        {name: "W Corp. L2 Cleanup Agent Meursault", weight: 1},
        {name: "N Corp. Großhammer Meursault", weight: 1},
        {name: "R Corp. 4th Pack Rhino Meursault", weight: 1},
        {name: "Dieci Association South Section 4 Director Meursault", weight: 1},
        {name: "Cinq Association West Section 3 Meursault", weight: 1},
        {name: "The Thumb East Capo IIII Meursault", weight: 1},
        {name: "Tingtang Gang Gangleader Hong Lu", weight: 1},
        {name: "K Corp. Class 3 Excision Staff Hong Lu", weight: 1},
        {name: "Dieci Association South Section 4 Hong Lu", weight: 1},
        {name: "R Corp. 4th Pack Reindeer Hong Lu", weight: 1},
        {name: "R Corp. 4th Pack Rabbit Heathcliff", weight: 1},
        {name: "Lobotomy E.G.O::Sunshower Heathcliff", weight: 1},
        {name: "The Pequod Harpooner Heathcliff", weight: 1},
        {name: "Öufi Association South Section 3 Heathcliff", weight: 1},
        {name: "Wild Hunt Heathcliff", weight: 1},
        {name: "R Corp. 4th Pack Reindeer Ishmael", weight: 1},
        {name: "Liu Association South Section 4 Ishmael", weight: 1},
        {name: "The Pequod Captain Ishmael", weight: 1},
        {name: "Zwei Association West Section 3 Ishmael", weight: 1},
        {name: "Family Hierarch Candidate Ishmael", weight: 1}, 
        {name: "Kurokumo Clan Wakashu Rodion", weight: 1},
        {name: "Rosespanner Workshop Rep Rodion", weight: 1},
        {name: "Dieci Association South Section 4 Rodion", weight: 1},
        {name: "Liu Association South Section 4 Director Rodion", weight: 1},
        {name: "Devyat Association North Section 3 Rodion", weight: 1},
        {name: "The Princess Of La Manchaland Rodion", weight: 1},
        {name: "Heishou Pack - Si Branch Rodion", weight: 1},
        {name: "Blade Lineage Salsu Sinclair", weight: 1},
        {name: "The One Who Shall Grip Sinclair", weight: 1},
        {name: "Cinq Association South Section 4 Director Sinclair", weight: 1},
        {name: "Devyat Association North Section 3 Sinclair", weight: 1},
        {name: "The Middle Little Brother Sinclair", weight: 1},
        {name: "The Thumb East Soldato II Sinclair", weight: 1},
        {name: "Seven Association South Section 6 Director Outis", weight: 1},
        {name: "Wuthering Heights Chief Butler Outis", weight: 1},
        {name: "W Corp. L3 Cleanup Captain Outis", weight: 1},
        {name: "The Barber of La Manchaland Outis", weight: 1},
        {name: "G Corp. Manager Corporal Gregor", weight: 1},
        {name: "Zwei Association South Section 4 Gregor", weight: 1},
        {name: "Twinhook Pirates First Mate Gregor", weight: 1},
        {name: "Edgar Family Heir Gregor", weight: 1},
        {name: "The Priest of La Manchaland Gregor", weight: 1},
        {name: "Firefist Office Survivor Gregor", weight: 1},
        {name: "Heishou Pack - Si Branch Gregor", weight: 1}
      ],
      "2★": [
        {name: "Rosespanner Workshop Fixer Gregor", weight: 1},
        {name: "Liu Association South Section 6 Gregor", weight: 1},
        {name: "Blade Lineage Salsu Outis", weight: 1},
        {name: "G Corp Head Manager Outis", weight: 1},
        {name: "Cinq Association South Section 4 Outis", weight: 1},
        {name: "The Ring Pointilist Student Outis", weight: 1},
        {name: "Zwei Association South Section 6 Sinclair", weight: 1},
        {name: "Los Mariachis Jefe Sinclair", weight: 1},
        {name: "Lobotomy E.G.O::Red Sheet Sinclair", weight: 1},
        {name: "Zwei Association West Section 3 Sinclair", weight: 1},
        {name: "LCCB Assistant Manager Rodion", weight: 1},
        {name: "N Corp. Mittlehammer Rodion", weight: 1},
        {name: "Zwei Association South Section 5 Rodion", weight: 1},
        {name: "T Corp. Class 2 Collection Staff Rodion", weight: 1},
        {name: "Shi Association South Section 5 Ishmael", weight: 1},
        {name: "LCCB Assistant Manager Ishmael", weight: 1},
        {name: "Lobotomy E.G.O::Sloshing Ishmael", weight: 1},
        {name: "Edgar Family Butler Ishmael", weight: 1},
        {name: "Shi Association South Section 5 Heathcliff", weight: 1},
        {name: "N Corp. Kleinhammer Heathcliff", weight: 1},
        {name: "Seven Association South Section 4 Heathcliff", weight: 1},
        {name: "Kurokumo Clan Wakashu Hong Lu", weight: 1},
        {name: "Liu Association South Section 5 Hong Lu", weight: 1},
        {name: "W Corp. L2 Cleanup Agent Hong Lu", weight: 1},
        {name: "Fanghunt Office Fixer Hong Lu", weight: 1},
        {name: "Liu Association South Section 6 Meursault", weight: 1},
        {name: "Rosespanner Workshop Fixer Meursault", weight: 1},
        {name: "The Middle Little Brother Meursault", weight: 1},
        {name: "Dead Rabbits Boss Meursault", weight: 1},
        {name: "Seven Association South Section 6 Ryoshu", weight: 1},
        {name: "LCCB Assistant Manager Ryoshu", weight: 1},
        {name: "Liu Association South Section 4 Ryoshu", weight: 1},
        {name: "N Corp. Mittlehammer Don Quixote", weight: 1},
        {name: "Shi Association South Section 5 Director Don Quixote", weight: 1},
        {name: "Wuthering Heights Butler Faust", weight: 1},
        {name: "Lobotomy Corporation Remanant Faust", weight: 1},
        {name: "W Corp. L2 Cleanup Agent Faust", weight: 1},
        {name: "Zwei Association South Section 4 Faust", weight: 1},
        {name: "Dieci Association South Section 4 Yi Sang", weight: 1},
        {name: "Seven Association South Section 6 Yi Sang", weight: 1},
        {name: "The Pequod First Mate Yi Sang", weight: 1}
      ],
      "1★": [
        {name: "LCB Sinner Yi Sang", weight: 1},
        {name: "LCB Sinner Faust", weight: 1},
        {name: "LCB Sinner Don Quixote", weight: 1},
        {name: "LCB Sinner Ryoshu", weight: 1},
        {name: "LCB Sinner Meursault", weight: 1},
        {name: "LCB Sinner Hong Lu", weight: 1},
        {name: "LCB Sinner Heathcliff", weight: 1},
        {name: "LCB Sinner Ishmael", weight: 1},
        {name: "LCB Sinner Rodion", weight: 1},
        {name: "LCB Sinner Sinclair", weight: 1},
        {name: "LCB Sinner Outis", weight: 1},
        {name: "LCB Sinner Gregor", weight: 1}
      ]
    },
    egos: [
      {name:"Contempt, Awe (Ryoshu)", weight: 1},
      {name:"Crushbound Past (Meursault)", weight: 26},
      {name:"Indicant's Trial (Rodion)", weight: 1},
      {name:"Garden Of Thorns (Gregor)", weight: 1},
      {name:"Dimension Shredder (Yi Sang)", weight: 1},
      {name:"Fell Bullet (Yi Sang)", weight: 1},
      {name:"Telepole (Faust)", weight: 1},
      {name:"Thoracalgia (Faust)", weight: 1},
      {name:"Telepole (Don Quixote)", weight: 1},
      {name:"Red Eyes (Open) (Ryoshu)", weight: 1},
      {name:"Pursuance (Meursault)", weight: 1},
      {name:"Dimension Shredder (Hong Lu)", weight: 1},
      {name:"Ya Śūnyatā Tad Rūpam (Heathcliff)", weight: 1},
      {name:"Asymmetrical Inertia (Heathcliff)", weight: 1},
      {name:"Ardor Blossom Star (Ishmael)", weight: 1},
      {name:"Pursuance (Rodion)", weight: 1},
      {name:"Lantern (Sinclair)", weight: 1},
      {name:"Wishing Cairn (Yi Sang)", weight: 1},
      {name:"Hex Nail (Faust)", weight: 1},
      {name:"Wishing Cairn (Don Quixote)", weight: 1},
      {name:"Red Eyes (Ryoshu)", weight: 1},
      {name:"Cavernous Wailing (Hong Lu)", weight: 1},
      {name:"Fell Bullet (Heathcliff)", weight: 1},
      {name:"Bygone Days (Ishmael)", weight: 1},
      {name:"Ya Śūnyatā Tad Rūpam (Outis)", weight: 1},
      {name:"Lantern (Gregor)", weight: 1},
      {name:"Cavernous Wailing (Sinclair)", weight: 1}  
    ]
  }
};

let currentBanner = "standard";
let state = {
  totalPulls: 0,
  ideality: 0,
  pulledEGOs: new Set(), // [MOD] Track pulled EGOs
  collection: {
    "3★": new Map(),
    "2★": new Map(),
    "1★": new Map(),
    "EGO": new Map()
  },
  shards: {
    "Yi Sang": 0, "Faust": 0, "Don Quixote": 0, "Ryoshu": 0,
    "Meursault": 0, "Hong Lu": 0, "Heathcliff": 0, "Ishmael": 0,
    "Rodion": 0, "Sinclair": 0, "Outis": 0, "Gregor": 0
  }
};


// Switch active banner
function switchBanner(bannerkey) {
  if (!banners[bannerkey]) {
    console.warn("Banner does not exist:", bannerkey);
    return;
  }

  currentBanner = bannerkey;

  document.querySelectorAll(".banner").forEach(b => b.classList.remove("active"));
  const bannerElement = document.getElementById(`${bannerkey}Banner`);
  if (bannerElement) bannerElement.classList.add('active');

  updateStats();
}

function getRandomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getWeightedRandom(pool) {
  const totalWeight = pool.reduce((acc, item) => acc + item.weight, 0);
  let roll = Math.random() * totalWeight;
  for (let i = 0; i < pool.length; i++) {
    roll -= pool[i].weight;
    if (roll <= 0) return pool[i]; // return full object
  }
  return pool[pool.length - 1]; // fallback: full object
}


function pullOnce() {
  const banner = banners[currentBanner];

  // [MOD] Filter out already pulled EGOs
  const availableEGOs = banner.egos.filter(e => {
   const name = typeof e === 'string' ? e : e.name;
   return !state.pulledEGOs.has(name);
  });

  const hasAvailableEGOs = availableEGOs.length > 0;

  let roll = Math.random();

  if (hasAvailableEGOs && roll < banner.rates.ego) {
  let chosenEgo;
  if (typeof availableEGOs[0] === 'string') {
    // Default format (no weights)
    chosenEgo = getRandomFrom(availableEGOs);
    state.pulledEGOs.add(chosenEgo);
    return { type: "EGO", name: chosenEgo };
  } else {
    // Weighted format
    chosenEgo = getWeightedRandom(availableEGOs);
    state.pulledEGOs.add(chosenEgo.name); // store just the name
    return { type: "EGO", name: chosenEgo.name };
  }
  }

  // [MOD] If no EGOs left, reroll based on modified rates
  if (!hasAvailableEGOs) {
    banner.rates = {tripleZero: 0.03, doubleZero: 0.13, common: 0.84};
    roll = Math.random(); // reroll fresh since ego chance is now excluded
  }

  const rates = banner.rates;
  const egoRate = hasAvailableEGOs ? rates.ego : 0; // 0 if no egos left

  if (roll < egoRate + rates.tripleZero) {
    const star3Pool = banner.identities["3★"];
    if (typeof star3Pool[0] === 'string') {
      return { type: "3★ ID", name: getRandomFrom(star3Pool).name}; // old format
   } else {
      return { type: "3★ ID", name: getWeightedRandom(star3Pool).name}; // weighted
   }
   } else if (roll < egoRate + rates.tripleZero + rates.doubleZero) {
   const star2Pool = banner.identities["2★"];
   if (typeof star2Pool[0] === 'string') {
     return { type: "2★ ID", name: getRandomFrom(star2Pool).name}; // old format
   } else {
    return { type: "2★ ID", name: getWeightedRandom(star2Pool).name}; // weighted format
   }
  } else {
  const star1Pool = banner.identities["1★"];
  if (typeof star1Pool[0] === 'string') {
    return { type: "1★ ID", name: getRandomFrom(star1Pool).name}; // old format
  } else {
    return { type: "1★ ID", name: getWeightedRandom(star1Pool).name}; // weighted
  }
}
}


function createCard(pull) {
  const card = document.createElement('div');
  const isEGO = pull.type === "EGO";
  const rarityClass = isEGO ? "ego" :
                    pull.type === "3★ ID" ? "triplezero" :
                    pull.type === "2★ ID" ? "doublezero" : "common";
  
  card.className = `card ${rarityClass}`;
  card.style.setProperty('--card-bg', `url('${imageMap[pull.name] || FALLBACK_IMAGE}')`);
  
  const walpurgisnacht3starIDS = [
    "Lobotomy E.G.O::In the Name of Love and Hate Don Quixote",
    "Lobotomy E.G.O::Regret Faust",
    "Lobotomy E.G.O::Solemn Lament Yi Sang",
    "Lobotomy E.G.O::Red Eyes & Penitence Ryoshu",
    "Full-Stop Office Rep Hong Lu",
    "Full-Stop Office Fixer Heathcliff",
    "Lobotomy E.G.O::The Sword Sharpened with Tears Rodion",
    "Dawn Office Fixer Sinclair",
    "Lobotomy E.G.O::Magic Bullet Outis"
  ]

  const walpurgisnacht2starIDs = [
    "Hook Office Fixer Hong Lu",
    "Lobotomy E.G.O::Lantern Don Quixote"
  ];

   const WrathEGOs = [
    "4th Match Flame (Yi Sang)",
    "4th Match Flame (Ryoshu)",
    "Regret (Meursault)",
    "Capote (Meursault)",
    "Capote (Ishmael)",
    "Ardor Blossom Star (Ishmael)",
    "4th Match Flame (Rodion)",
    "Indicant's Trial (Rodion)",
    "Impending Day (Sinclair)",
    "Holiday (Outis)"
  ];
  const LustEGOs = [
    "9:2 (Faust)",
    "Lifetime Stew (Don Quixote)",
    "Yearning-Mircalla (Don Quixote)",
    "Contempt, Awe (Ryoshu)",
    "Red Eyes Ryoshu",
    "Yearning-Mircalla (Meursault)",
    "Roseate Desire (Hong Lu)",
    "Ya Śūnyatā Tad Rūpam (Heathcliff)",
    "Roseate Desire (Ishmael)",
    "Sanguine Desire (Rodion)",
    "Lifetime Stew (Sinclair)",
    "9:2 (Sinclair)",
    "Ya Śūnyatā Tad Rūpam (Outis)",
    "Garden of Thorns (Gregor)"
  ];
  const SlothEGOs = [
    "Wishing Cairn (Yi Sang)",
    "Sunshower (Yi Sang)",
    "Everlasting (Faust)",
    "Wishing Cairn (Don Quixote)",
    "Pursuance (Meursault)",
    "Crushbound Past (Meursault)",
    "Cavernous Wailing (Hong Lu)",
    "Asymmetrical Inertia (Heathcliff)",
    "Christmas Nightmare (Ishmael)",
    "Pursuance (Rodion)",
    "Christmas Nightmare (Gregor)" 
  ];
  const GluttonyEGOs = [
    "Lasso (Faust)",
    "Red Sheet (Don Quixote)",
    "Lasso (Hong Lu)",
    "Effervescent Corrosion (Hong Lu)",
    "Tears of the Tarnished Blood [汚血泣淚] (Hong Lu)",
    "Holiday (Heathcliff)",
    "Wingbeat (Ishmael)",
    "Effervescent Corrosion (Rodion)",
    "Lantern (Sinclair)",
    "Tears of the Tarnished Blood [汚血泣淚] (Sinclair)",
    "Sunshower (Outis)",
    "Ebony Stem (Outis)",
    "Legerdemain (Gregor)",
    "Lantern (Gregor)"
  ];
  const GloomEGOs = [
    "Bygone Days (Yi Sang)",
    "Fluid Sac (Faust)",
    "Fluid Sac (Don Quixote)",
    "Soda (Ryoshu)",
    "AEDD (Heathcliff)",
    "Binds (Heathcliff)",
    "Hundred-Footed Death Maggot [蝍蛆殺] (Ishmael)",
    "Bygone Days (Ishmael)",
    "Rime Shank (Rodion)",
    "Cavernous Wailing (Sinclair)",
    "Bygone Days (Gregor)",
    "AEDD (Gregor)",
    "Solemn Lament (Gregor)" 
  ];
  const PrideEGOs = [ 
    "Dimension Shredder (Yi Sang)",
    "Fell Bullet (Yi Sang)",
    "Thoracalgia (Faust)",
    "Blind Obsession (Ryoshu)",
    "Thoracalgia (Ryoshu)",
    "Dimension Shredder (Hong Lu)",
    "Fell Bullet (Heathcliff)",
    "Blind Obession (Ishmael)",
    "Binds (Outis)",
    "Magic Bullet (Outis)"
  ];
  const EnvyEGOs = [
    "Hex Nail (Faust)",
    "Telepole (Faust)",
    "Electric Screaming (Don Quixote)",
    "Telepole (Don Quixote)",
    "In the Name of Love and Hate (Don Quixote)",
    "Red Eyes (Open) (Ryoshu)",
    "Screwloose Wallop (Meursault)",
    "Electric Screaming (Meursault)",
    "Soda (Hong Lu)",
    "Telepole (Heathcliff)",
    "Hex Nail (Rodion)",
    "Hex Nail (Sinclair)",
    "Dimension Shredder (Outis)"
  ];

  card.className = `card ${rarityClass}`;
  if (walpurgisnacht3starIDS.includes(pull.name)) {
    card.classList.add('walpurgisnacht3star-id');
  }
  if (walpurgisnacht2starIDs.includes(pull.name)) {
    card.classList.add('walpurgisnacht2star-id');
  }
  else if (WrathEGOs.includes(pull.name)) {
    card.classList.add('wrath-ego');
  }
  else if (LustEGOs.includes(pull.name)) {
    card.classList.add('lust-ego');
  }
  else if (SlothEGOs.includes(pull.name)) {
    card.classList.add('sloth-ego');
  }
  else if (GluttonyEGOs.includes(pull.name)) {
    card.classList.add('gluttony-ego');
  }
  else if (GloomEGOs.includes(pull.name)) {
    card.classList.add('gloom-ego');
  }
  else if (PrideEGOs.includes(pull.name)) {
    card.classList.add('pride-ego');
  }
  else if (EnvyEGOs.includes(pull.name)) {
    card.classList.add('envy-ego');
  }

  card.style.setProperty('--card-bg', `url('${imageMap[pull.name] || FALLBACK_IMAGE}')`);

  return card;
}

function getSinnerFromIdentity(identityName) {
  if (typeof identityName === "object" && identityName !== null) {
    identityName = identityName.name;
  }
  // Check if it's an EGO first
  if (identityName.includes("(Don Quixote)")) return "Don Quixote";
  if (identityName.includes("(Ryoshu)")) return "Ryoshu";
  if (identityName.includes("(Faust)")) return "Faust";
  if (identityName.includes("(Hong Lu)")) return "Hong Lu";
  if (identityName.includes("(Heathcliff)")) return "Heathcliff";
  if (identityName.includes("(Yi Sang)")) return "Yi Sang";
  if (identityName.includes("(Meursault)")) return "Meursault";
  if (identityName.includes("(Ishmael)")) return "Ishmael";
  if (identityName.includes("(Rodion)")) return "Rodion";
  if (identityName.includes("(Sinclair)")) return "Sinclair";
  if (identityName.includes("(Outis)")) return "Outis";
  if (identityName.includes("(Gregor)")) return "Gregor";    
  
  // Then check for IDs
  for (const sinner of sinners) {
    if (identityName.includes(sinner)) {
      return sinner;
    }
  }
  return null;
}

function addToCollection(pull) {
  let collectionMap;
  if (pull.type === "EGO") {
    collectionMap = state.collection["EGO"];
  } else if (pull.type === "3★ ID") {
    collectionMap = state.collection["3★"];
  } else if (pull.type === "2★ ID") {
    collectionMap = state.collection["2★"];
  } else if (pull.type === "1★ ID") {
    collectionMap = state.collection["1★"];
  }

  // Increment count or add to collection
  const currentCount = collectionMap.get(pull.name) || 0;
  collectionMap.set(pull.name, currentCount + 1);
  
  // Add shards - all 1★ pulls count as duplicates (3 shards)
  // Other rarities only give shards on actual duplicates (count > 0)
  const sinner = getSinnerFromIdentity(pull.name);
  if (sinner && state.shards.hasOwnProperty(sinner)) {
    if (pull.type === "1★ ID") {
      // All 1★ pulls give shards (treated as duplicates)
      state.shards[sinner] += 3;
    } else if (currentCount > 0) {
      // Other rarities only give shards on duplicates
      if (pull.type === "3★ ID") {
        state.shards[sinner] += 50;
      } else if (pull.type === "2★ ID") {
        state.shards[sinner] += 15;
      } else if (pull.type === "EGO") {
        state.shards[sinner] += 30;
      }
    }
    updateShardsDisplay();
  }
  
  updateCollectionDisplay();
}

function updateCollectionDisplay() {
  // Update 3★ list
  const tripleZeroList = document.getElementById("triplezero-list");
  tripleZeroList.innerHTML = "";
  state.collection["3★"].forEach((count, id) => {
    const item = document.createElement('div');
    item.className = 'identity-item';
    item.textContent = id;
    if (count > 1) {
      const countSpan = document.createElement('span');
      countSpan.className = 'duplicate-count';
      countSpan.textContent = `x${count}`;
      item.appendChild(countSpan);
    }
    tripleZeroList.appendChild(item);
  });

  // Update 2★ list
  const doubleZeroList = document.getElementById("doublezero-list");
  doubleZeroList.innerHTML = "";
  state.collection["2★"].forEach((count, id) => {
    const item = document.createElement('div');
    item.className = 'identity-item';
    item.textContent = id;
    if (count > 1) {
      const countSpan = document.createElement('span');
      countSpan.className = 'duplicate-count';
      countSpan.textContent = `x${count}`;
      item.appendChild(countSpan);
    }
    doubleZeroList.appendChild(item);
  });

  // Update 1★ list
  const commonList = document.getElementById("common-list");
  commonList.innerHTML = "";
  state.collection["1★"].forEach((count, id) => {
    const item = document.createElement('div');
    item.className = 'identity-item';
    item.textContent = id;
    if (count > 1) {
      const countSpan = document.createElement('span');
      countSpan.className = 'duplicate-count';
      countSpan.textContent = `x${count}`;
      item.appendChild(countSpan);
    }
    commonList.appendChild(item);
  });

  // Update EGO list
  const egoList = document.getElementById("ego-list");
  egoList.innerHTML = "";
  state.collection["EGO"].forEach((count, ego) => {
    const item = document.createElement('div');
    item.className = 'identity-item';
    item.textContent = ego;
    if (count > 1) {
      const countSpan = document.createElement('span');
      countSpan.className = 'duplicate-count';
      countSpan.textContent = `x${count}`;
      item.appendChild(countSpan);
    }
    egoList.appendChild(item);
  });
}

function updateShardsDisplay() {
  const container = document.getElementById("shards-grid");
  container.innerHTML = "";
  
  // Add shard items for each sinner
  sinners.forEach(sinner => {
    const shardItem = document.createElement('div');
    shardItem.className = 'shard-item';
    
    const icon = document.createElement('div');
    icon.className = 'shard-icon';
    icon.style.backgroundImage = `url('${sinnerIcons[sinner] || FALLBACK_IMAGE}')`;
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = sinner;
    
    const countSpan = document.createElement('span');
    countSpan.className = 'shard-count';
    countSpan.textContent = state.shards[sinner] || 0;
    
    shardItem.appendChild(icon);
    shardItem.appendChild(nameSpan);
    shardItem.appendChild(countSpan);
    
    container.appendChild(shardItem);
  });
}

async function drawTen() {
  const container = document.getElementById("results");
  container.innerHTML = "";
  const pulls = [];
  let guaranteed = false;
  const banner = banners[currentBanner];

  // Disable button during animation
  const pullButton = document.querySelector('button');
  pullButton.disabled = true;
  pullButton.textContent = "Drawing...";

  // Perform pulls
  for (let i = 0; i < 10; i++) {
    let result = pullOnce();
    state.totalPulls++;
    state.ideality++;

    if (result.type === "2★ ID" || result.type === "EGO") {
      guaranteed = true;
    }

    pulls.push(result);
    addToCollection(result);
  }

  // Apply guarantee if needed
  if (!guaranteed) {
    const replacement = pullOnceWhile(r => r.type !== "1★ ID");
    pulls[9] = replacement;
    addToCollection(replacement);
  }

  // Animate cards appearing one by one
  for (let i = 0; i < pulls.length; i++) {
    const card = createCard(pulls[i]);
    container.appendChild(card);
    
    // Trigger animation after a short delay
    setTimeout(() => {
      card.classList.add('show');
    }, i * 100);
    
    // Small delay to allow DOM updates
    await new Promise(resolve => setTimeout(resolve, 10));
  }

  // Re-enable button
  pullButton.disabled = false;
  pullButton.textContent = "Perform 10-Pull";
  
  updateStats();
}

function pullOnceWhile(conditionFn) {
  let result;
  do {
    result = pullOnce();
  } while (!conditionFn(result));
  return result;
}

function updateStats() {
  const banner = banners[currentBanner];
  if (!banner) {
    console.warn("No valid banner selected in updateStats()");
    document.getElementById("stats").innerHTML = "<p><strong>No banner selected.</strong></p>";
    return;
  }

  document.getElementById("stats").innerHTML = `
    <p><strong>Active Banner:</strong> ${banner.name}</p>
    <p><strong>Total Pulls:</strong> ${state.totalPulls}</p>
    <p><strong>Ideality:</strong> ${state.ideality}/200</p>
  `;
}



// Preload images when page loads
window.addEventListener('DOMContentLoaded', () => {
  const imagesToPreload = [
    ...Object.values(imageMap),
    ...Object.values(sinnerIcons),
    FALLBACK_IMAGE,
    'Images/Misc/Standardbanner.png',
    'Images/Misc/superbanner.jpg',
    'Images/Misc/1stand2ndBokgakwalpurgisnight.png',
    'Images/Misc/6thWalpurgisnight.png'
  ];
  
  imagesToPreload.forEach(src => {
    new Image().src = src;
  });

  // Initialize displays
  updateCollectionDisplay();
  updateShardsDisplay();
  updateStats();

  document.addEventListener("DOMContentLoaded", () => {
  // Set default banner after page and elements are ready
  switchBanner("standard");
});
})
