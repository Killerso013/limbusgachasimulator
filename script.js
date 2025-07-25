// Image mapping
const imageMap = {
  // 3★ IDs
  "PLACEHOLDER": "Images/zenacat.png",
  "The Pequod Captain Ishmael": "Images/Ahabmael.png",
  
  // 2★ IDs
  "Rosespanner Workshop Fixer Gregor": "Images/RosespannerGregor.png",
  "Liu Association South Section 6 Gregor": "Images/LiuGregor.png",
  "R.B. Sous-Chef Gregor": "Images/ChefGregor.png",
  "Kurokumo Clan Captain Gregor": "Images/KurokumoGregor.png",
  "Blade Lineage Salsu Outis": "Images/BLOutis.png",
  "G Corp Head Manager Outis": "Images/GCorpOutis.png",
  "Cinq Association South Section 4 Outis": "Images/CinqOutis.png",
  "The Ring Pointilist Student Outis": "Images/RingOutis.png",
  "Zwei Association South Section 6 Sinclair": "Images/ZweiSouthSinclair.png",
  "Los Mariachis Jefe Sinclair": "Images/AidaSinclair.png",
  "Lobotomy E.G.O::Red Sheet Sinclair": "Images/TalismanSinclair.png",
  "Molar Boatworks Fixer Sinclair": "Images/MolarSinclair.png",
  "Zwei Association West Section 3 Sinclair": "Images/ZweiWestSinclair.png",
  "LCCB Assistant Manager Rodion": "Images/LCCBRodion.png",
  "N Corp. Mittlehammer Rodion": "Images/NCorpRodion.png",
  "Zwei Association South Section 5 Rodion": "Images/ZweiRodion.png",
  "T Corp. Class 2 Collection Staff Rodion": "Images/TCorpRodion.png",
  "Shi Association South Section 5 Ishmael": "Images/ShiIshmael.png",
  "LCCB Assistant Manager Ishmael": "Images/LCCBIshmael.png",
  "Lobotomy E.G.O::Sloshing Ishmael": "Images/SloshingIshmael.png",
  "Edgar Family Butler Ishmael": "Images/MaidIshmael.png",
  "Shi Association South Section 5 Heathcliff": "Images/ShiHeathcliff.png",
  "N Corp. Kleinhammer Heathcliff": "Images/NCorpHeathcliff.png",
  "Seven Association South Section 4 Heathcliff": "Images/SevenHeathcliff.png",
  "MultiCrack Office Fixer Heathcliff": "Images/MulticrackHeathcliff.png",
  "Kurokumo Clan Wakashu Hong Lu": "Images/KurokumoHongLu.png",
  "Liu Association South Section 5 Hong Lu": "Images/LiuHongLu.png",
  "W Corp. L2 Cleanup Agent Hong Lu": "Images/WCorpHongLu.png",
  "Hook Office Fixer Hong Lu": "Images/HookHongLu.png",
  "Fanghunt Office Fixer Hong Lu": "Images/FanghuntHongLu.png",
  "Liu Association South Section 6 Meursault": "Images/LiuMeursault.png",
  "Rosespanner Workshop Fixer Meursault": "Images/RosespannerMeursault.png",
  "The Middle Little Brother Meursault": "Images/MiddleMeursault.png",
  "Dead Rabbits Boss Meursault": "Images/DeadRabbitsMeursault.png",
  "Seven Association South Section 6 Ryoshu": "Images/SevenRyoshu.png",
  "LCCB Assistant Manager Ryoshu": "Images/LCCBRyoshu.png",
  "Liu Association South Section 4 Ryoshu": "Images/LiuRyoshu.png",
  "District 20 Yurodivy Ryoshu": "Images/YurodivyRyoshu.png",
  "Blade Lineage Salsu Don Quixote": "Images/BLDonQuixote.png",
  "Shi Association South Section 5 Director Don Quixote": "Images/ShiDonQuixote.png",
  "N Corp. Mittlehammer Don Quixote": "Images/NCorpDonQuixote.png",
  "Lobotomy E.G.O::Lantern Don Quixote": "Images/LanternDonQuixote.png",
  "Zwei Association South Section 4 Faust": "Images/ZweiFaust.png",
  "Wuthering Heights Butler Faust": "Images/MaidFaust.png",
  "Lobotomy Corporation Remanant Faust": "Images/RemnantFaust.png",
  "W Corp. L2 Cleanup Agent Faust": "Images/WCorpFaust.png",
  "Dieci Association South Section 4 Yi Sang": "Images/DieciYiSang.png",
  "LCE E.G.O::Lantern Yi Sang": "Images/LanternYiSang.png",
  "The Pequod First Mate Yi Sang": "Images/PequodYiSang.png",
  "Molar Office Fixer Yi Sang": "Images/MolarYiSang.png",
  "Seven Association South Section 6 Yi Sang": "Images/SevenYiSang.png",

  // 1★ IDs
  "LCB Sinner Yi Sang": "Images/LCBYiSang.png",
  "LCB Sinner Faust": "Images/LCBFaust.png",
  "LCB Sinner Don Quixote": "Images/LCBDon.png",
  "LCB Sinner Ryoshu": "Images/LCBRyoshu.png",
  "LCB Sinner Meursault": "Images/LCBMeursault.png",
  "LCB Sinner Hong Lu": "Images/LCBHongLu.png",
  "LCB Sinner Ishmael": "Images/LCBIshmael.png",
  "LCB Sinner Heathcliff": "Images/LCBHeathcliff.png",
  "LCB Sinner Rodion": "Images/LCBRodya.png",
  "LCB Sinner Sinclair": "Images/LCBSinclair.png",
  "LCB Sinner Outis": "Images/LCBOutis.png",
  "LCB Sinner Gregor": "Images/LCBGregor.png",
  
  // EGOs
  "4th Match Flame (Ryoshu)": "Images/4thMatchFlameRyoshu.png"
};

// Sinner icons
const sinnerIcons = {
  "Yi Sang": "./Images/YiSangIcon.png",
  "Faust": "./Images/FaustIcon.png",
  "Don Quixote": "./Images/DonQuixoteIcon.png",
  "Ryoshu": "./Images/RyoshuIcon.png",
  "Meursault": "./Images/MeursaultIcon.png",
  "Hong Lu": "./Images/HongLuIcon.png",
  "Heathcliff": "./Images/HeathcliffIcon.png",
  "Ishmael": "./Images/IshmaelIcon.png",
  "Rodion": "./Images/RodionIcon.png",
  "Sinclair": "./Images/SinclairIcon.png",
  "Outis": "./Images/OutisIcon.png",
  "Gregor": "./Images/GregorIcon.png"
};

const FALLBACK_IMAGE = "./Images/zenacat.png";

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
      "3★": ["The Pequod Captain Ishmael"],
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
        "Zwei Association West Section 3 Sinclair"
      ],
      "1★": [
        "LCB Sinner Faust", "LCB Sinner Yi Sang", "LCB Sinner Don Quixote", 
        "LCB Sinner Ryoshu", "LCB Sinner Outis", "LCB Sinner Ishmael", 
        "LCB Sinner Heathcliff", "LCB Sinner Gregor", "LCB Sinner Hong Lu", 
        "LCB Sinner Meursault", "LCB Sinner Rodion", "LCB Sinner Sinclair"
      ]
    },
    egos: ["4th Match Flame (Ryoshu)"]
  },
  Super: {
    name: "Super Banner",
    rates: { ego: 0.01, tripleZero: 0.05, doubleZero: 0.14, common: 0.80 },
    identities: {
      "3★": ["The Pequod Captain Ishmael"],
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
    egos: ["4th Match Flame (Ryoshu)"]
  },
  Bokgakwalpurgisnight: {
    name: "1st + 2nd Bokgak Walpurgisnight Targetted Extraction Banner",
    rates: { ego: 0.02, tripleZero: 0.03, doubleZero: 0.10, common: 0.85 },
    identities: {
      "3★": ["The Pequod Captain Ishmael"],
      "2★": [
        "Rosespanner Workshop Fixer Gregor",
        "Liu Association South Section 6 Gregor",
        "Blade Lineage Salsu Outis"
      ],
      "1★": [
        "LCB Sinner Faust", "LCB Sinner Yi Sang", "LCB Sinner Don Quixote", 
        "LCB Sinner Ryoshu", "LCB Sinner Outis", "LCB Sinner Ishmael", 
        "LCB Sinner Heathcliff", "LCB Sinner Gregor", "LCB Sinner Hong Lu", 
        "LCB Sinner Meursault", "LCB Sinner Rodion", "LCB Sinner Sinclair"
      ]
    },
    egos: ["4th Match Flame (Ryoshu)"]
  },
  "6thWalpurgisnight": {
    name: "6th Walpurgisnight Targetted Extraction Banner",
    rates: { ego: 0.02, tripleZero: 0.03, doubleZero: 0.10, common: 0.85 },
    identities: {
      "3★": ["The Pequod Captain Ishmael"],
      "2★": [
        "Seven Association South Section 6 Ryoshu",
        "LCCB Assistant Manager Ryoshu",
        "Liu Association South Section 4 Ryoshu"
      ],
      "1★": [
        "LCB Sinner Faust", "LCB Sinner Yi Sang", "LCB Sinner Don Quixote", 
        "LCB Sinner Ryoshu", "LCB Sinner Outis", "LCB Sinner Ishmael", 
        "LCB Sinner Heathcliff", "LCB Sinner Gregor", "LCB Sinner Hong Lu", 
        "LCB Sinner Meursault", "LCB Sinner Rodion", "LCB Sinner Sinclair"
      ]
    },
    egos: ["4th Match Flame (Ryoshu)"]
  }
};

let currentBanner = "standard";
let state = {
  totalPulls: 0,
  ideality: 0,
  collection: {
    "3★": new Map(),
    "2★": new Map(),
    "1★": new Map(),
    "EGO": new Map()
  },
  shards: {
    "Yi Sang": 0,
    "Faust": 0,
    "Don Quixote": 0,
    "Ryoshu": 0,
    "Meursault": 0,
    "Hong Lu": 0,
    "Heathcliff": 0,
    "Ishmael": 0,
    "Rodion": 0,
    "Sinclair": 0,
    "Outis": 0,
    "Gregor": 0
  }
};

// Switch active banner
function switchBanner(bannerKey) {
  currentBanner = bannerKey;
  document.querySelectorAll(".banner").forEach(b => b.classList.remove("active"));
  document.getElementById(`${bannerKey}Banner`).classList.add("active");
  updateStats();
}

function getRandomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pullOnce() {
  const banner = banners[currentBanner];
  const roll = Math.random();
  
  if (roll < banner.rates.ego) {
    return { type: "EGO", name: getRandomFrom(banner.egos) };
  } else if (roll < banner.rates.ego + banner.rates.tripleZero) {
    return { type: "3★ ID", name: getRandomFrom(banner.identities["3★"]) };
  } else if (roll < banner.rates.ego + banner.rates.tripleZero + banner.rates.doubleZero) {
    return { type: "2★ ID", name: getRandomFrom(banner.identities["2★"]) };
  } else {
    return { type: "1★ ID", name: getRandomFrom(banner.identities["1★"]) };
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
  
  const walpurgisnachtIDs = [
    "W Corp. L3 Cleanup Agent Don Quixote",
    "Dieci Association South Section 4 Rodion",
    "Molar Boatworks Fixer Sinclair",
    "Kurokumo Clan Wakashu Hong Lu"
    // Add any other IDs that need special borders
  ];

   const walpurgisnachtEGOs = [
    "4th Match Flame (Ryoshu)",
  ];

  card.className = `card ${rarityClass}`;

  if (walpurgisnachtIDs.includes(pull.name)) {
    card.classList.add('walpurgisnacht-id');
  }
  else if (walpurgisnachtEGOs.includes(pull.name)) {
    card.classList.add('walpurgisnacht-ego');
  }
  card.style.setProperty('--card-bg', `url('${imageMap[pull.name] || FALLBACK_IMAGE}')`);

  return card;
}

function getSinnerFromIdentity(identityName) {
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
  document.getElementById("stats").innerHTML = `
    <p><strong>Active Banner:</strong> ${banners[currentBanner].name}</p>
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
    'Images/Standardbanner.png',
    'Images/superbanner.jpg',
    'Images/1stand2ndBokgakwalpurgisnight.png',
    'Images/6thWalpurgisnight.png'
  ];
  
  imagesToPreload.forEach(src => {
    new Image().src = src;
  });

  // Initialize displays
  updateCollectionDisplay();
  updateShardsDisplay();
  updateStats();
});