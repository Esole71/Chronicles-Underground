// Helper function to get image path
function getImagePath(category, name) {
    // Convert name to image filename format (e.g., "Combat PDW" -> "combat_pdw.png")
    const imageName = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    return `images/${category}/${imageName}.png`;
}

// --- MANAGEMENT TEAM DATA ---
// Avatar images should be placed in: images/fm/
// Format: images/fm/[name].png (e.g., images/fm/zel_quasar.png)
const STAFF_TEAM = [];

const DB = {
    weapons: [
        { id: 1, name: "19 Switch", image: "images/weapons/WEAPON_19SWITCH.png", rarity: "Rare", pwr: 54, rel: 88, fireSpeed: 64, damage: 58, range: 50, accuracy: 78, desc: "Switch variant." },
        { id: 2, name: "357 MR", image: "images/weapons/WEAPON_357MR.png", rarity: "Rare", pwr: 75, rel: 80, fireSpeed: 45, damage: 78, range: 60, accuracy: 70, desc: "Magnum revolver." },
        { id: 3, name: "38 Revolvers", image: "images/weapons/WEAPON_38REVOLVERS.png", rarity: "Common", pwr: 55, rel: 85, fireSpeed: 50, damage: 58, range: 50, accuracy: 72, desc: "Classic .38 caliber." },
        { id: 4, name: "43 MOS", image: "images/weapons/WEAPON_43MOS.png", rarity: "Uncommon", pwr: 48, rel: 86, fireSpeed: 58, damage: 52, range: 45, accuracy: 76, desc: "Optics-ready compact." },
        { id: 5, name: "45 MOS", image: "images/weapons/WEAPON_45MOS.png", rarity: "Uncommon", pwr: 58, rel: 85, fireSpeed: 55, damage: 62, range: 52, accuracy: 74, desc: "Optics-ready .45." },
        { id: 6, name: "4 Inch AR-P", image: "images/weapons/WEAPON_4INCHARP.png", rarity: "Rare", pwr: 72, rel: 80, fireSpeed: 70, damage: 70, range: 65, accuracy: 75, desc: "Compact AR platform." },
        { id: 7, name: "57 MOS", image: "images/weapons/WEAPON_57MOS.png", rarity: "Epic", pwr: 65, rel: 88, fireSpeed: 70, damage: 68, range: 65, accuracy: 82, desc: "Optics-ready Five-Seven." },
        { id: 8, name: "762 AR-P SC", image: "images/weapons/WEAPON_762ARPSC.png", rarity: "Epic", pwr: 80, rel: 85, fireSpeed: 72, damage: 82, range: 72, accuracy: 78, desc: "7.62 compact rifle." },
        { id: 9, name: "AP3", image: "images/weapons/WEAPON_AP3.png", rarity: "Rare", pwr: 60, rel: 84, fireSpeed: 65, damage: 62, range: 55, accuracy: 76, desc: "Compact pistol." },
        { id: 10, name: "AR-9 SC", image: "images/weapons/WEAPON_AR9SC.png", rarity: "Rare", pwr: 68, rel: 78, fireSpeed: 72, damage: 65, range: 72, accuracy: 78, desc: "Short barrel AR-9." },
        { id: 11, name: "ARP 556 M", image: "images/weapons/WEAPON_ARP556M.png", rarity: "Epic", pwr: 76, rel: 82, fireSpeed: 74, damage: 78, range: 70, accuracy: 80, desc: "5.56 tactical rifle." },
        { id: 12, name: "AR-P SC", image: "images/weapons/WEAPON_ARPSC.png", rarity: "Rare", pwr: 70, rel: 78, fireSpeed: 70, damage: 72, range: 68, accuracy: 77, desc: "Short barrel AR-P." },
        { id: 13, name: "AR-P SH", image: "images/weapons/WEAPON_ARPSH.png", rarity: "Rare", pwr: 71, rel: 79, fireSpeed: 69, damage: 73, range: 69, accuracy: 78, desc: "AR-P variant." },
        { id: 14, name: "Blue ARP 762", image: "images/weapons/WEAPON_BLUEARP762.png", rarity: "Epic", pwr: 79, rel: 84, fireSpeed: 73, damage: 80, range: 71, accuracy: 79, desc: "7.62 blue finish." },
        { id: 15, name: "C556 AR-P", image: "images/weapons/WEAPON_C556ARP.png", rarity: "Epic", pwr: 77, rel: 83, fireSpeed: 73, damage: 79, range: 70, accuracy: 80, desc: "5.56 carbine." },
        { id: 16, name: "C556 AR-PP", image: "images/weapons/WEAPON_C556ARPP.png", rarity: "Epic", pwr: 78, rel: 84, fireSpeed: 74, damage: 80, range: 71, accuracy: 81, desc: "Enhanced carbine." },
        { id: 17, name: "C556 AR-PPS", image: "images/weapons/WEAPON_C556ARPPS.png", rarity: "Legendary", pwr: 80, rel: 86, fireSpeed: 75, damage: 82, range: 73, accuracy: 82, desc: "Premium carbine." },
        { id: 18, name: "C556 AR-PR", image: "images/weapons/WEAPON_C556ARPR.png", rarity: "Epic", pwr: 78, rel: 84, fireSpeed: 72, damage: 80, range: 72, accuracy: 82, desc: "Precision carbine." },
        { id: 19, name: "Callous", image: "images/weapons/WEAPON_CALLOUS.png", rarity: "Epic", pwr: 74, rel: 86, fireSpeed: 68, damage: 76, range: 66, accuracy: 79, desc: "Tactical build." },
        { id: 20, name: "Canik", image: "images/weapons/WEAPON_CANIK.png", rarity: "Rare", pwr: 58, rel: 88, fireSpeed: 65, damage: 61, range: 55, accuracy: 79, desc: "Turkish striker-fired." },
        { id: 21, name: "Compact 30", image: "images/weapons/WEAPON_COMPACT30.png", rarity: "Uncommon", pwr: 52, rel: 86, fireSpeed: 60, damage: 56, range: 50, accuracy: 76, desc: "Compact .30." },
        { id: 22, name: "CPT", image: "images/weapons/WEAPON_CPT.png", rarity: "Rare", pwr: 62, rel: 85, fireSpeed: 66, damage: 65, range: 58, accuracy: 77, desc: "Compact tactical." },
        { id: 23, name: "D Comb", image: "images/weapons/WEAPON_DCOMB.png", rarity: "Epic", pwr: 72, rel: 87, fireSpeed: 70, damage: 74, range: 65, accuracy: 78, desc: "Combat variant." },
        { id: 24, name: "DMP", image: "images/weapons/WEAPON_DMP.png", rarity: "Rare", pwr: 64, rel: 84, fireSpeed: 67, damage: 66, range: 60, accuracy: 76, desc: "Compact DMP." },
        { id: 25, name: "Draco 2", image: "images/weapons/WEAPON_DRACO2.png", rarity: "Rare", pwr: 73, rel: 82, fireSpeed: 69, damage: 76, range: 66, accuracy: 71, desc: "Draco variant 2." },
        { id: 26, name: "Draco Z", image: "images/weapons/WEAPON_DRACOZ.png", rarity: "Epic", pwr: 74, rel: 84, fireSpeed: 70, damage: 77, range: 67, accuracy: 72, desc: "Draco Z variant." },
        { id: 27, name: "FFN", image: "images/weapons/WEAPON_FFN.png", rarity: "Rare", pwr: 59, rel: 87, fireSpeed: 64, damage: 62, range: 55, accuracy: 78, desc: "FN variant." },
        { id: 28, name: "FN", image: "images/weapons/WEAPON_FN.png", rarity: "Rare", pwr: 60, rel: 88, fireSpeed: 65, damage: 63, range: 56, accuracy: 79, desc: "FN pistol." },
        { id: 29, name: "FNX-45", image: "images/weapons/WEAPON_FNX45.png", rarity: "Epic", pwr: 70, rel: 88, fireSpeed: 60, damage: 75, range: 58, accuracy: 78, desc: "Tactical .45." },
        { id: 30, name: "G17 Gen5", image: "images/weapons/WEAPON_G17G5.png", rarity: "Rare", pwr: 54, rel: 89, fireSpeed: 64, damage: 59, range: 54, accuracy: 79, desc: "Gen 5 Glock 17." },
        { id: 31, name: "G19 G", image: "images/weapons/WEAPON_G19G.png", rarity: "Common", pwr: 52, rel: 88, fireSpeed: 62, damage: 56, range: 48, accuracy: 78, desc: "Glock 19 variant." },
        { id: 32, name: "G20 Gen5", image: "images/weapons/WEAPON_G205.png", rarity: "Epic", pwr: 66, rel: 87, fireSpeed: 57, damage: 71, range: 56, accuracy: 77, desc: "10mm Gen 5." },
        { id: 33, name: "G23 Gen3", image: "images/weapons/WEAPON_G233.png", rarity: "Common", pwr: 56, rel: 86, fireSpeed: 60, damage: 60, range: 52, accuracy: 76, desc: ".40 Gen 3." },
        { id: 34, name: "G26 S", image: "images/weapons/WEAPON_G26S.png", rarity: "Uncommon", pwr: 49, rel: 88, fireSpeed: 59, damage: 53, range: 46, accuracy: 77, desc: "Subcompact variant." },
        { id: 35, name: "G43 G", image: "images/weapons/WEAPON_G43G.png", rarity: "Common", pwr: 46, rel: 87, fireSpeed: 58, damage: 50, range: 44, accuracy: 75, desc: "Micro compact." },
        { id: 36, name: "G45 S", image: "images/weapons/WEAPON_G45S.png", rarity: "Rare", pwr: 55, rel: 89, fireSpeed: 65, damage: 60, range: 54, accuracy: 80, desc: "Compact crossover." },
        { id: 37, name: "Heavy 509C", image: "images/weapons/WEAPON_HEAVY509C.png", rarity: "Epic", pwr: 68, rel: 88, fireSpeed: 63, damage: 72, range: 58, accuracy: 80, desc: "Compact tactical." },
        { id: 38, name: "Heavy 510", image: "images/weapons/WEAPON_HEAVY510.png", rarity: "Epic", pwr: 69, rel: 87, fireSpeed: 62, damage: 73, range: 59, accuracy: 81, desc: "Heavy tactical." },
        { id: 39, name: "HK45", image: "images/weapons/WEAPON_HK45.png", rarity: "Epic", pwr: 71, rel: 91, fireSpeed: 63, damage: 74, range: 59, accuracy: 82, desc: "German .45." },
        { id: 40, name: "Hornet 247", image: "images/weapons/WEAPON_HORNET247.png", rarity: "Rare", pwr: 66, rel: 83, fireSpeed: 68, damage: 68, range: 62, accuracy: 75, desc: "Compact rifle." },
        { id: 41, name: "Incognito 40", image: "images/weapons/WEAPON_INCOGNITO40.png", rarity: "Epic", pwr: 67, rel: 86, fireSpeed: 64, damage: 70, range: 56, accuracy: 78, desc: "Concealed .40." },
        { id: 42, name: "Kris Vector", image: "images/weapons/WEAPON_KVEC.png", rarity: "Epic", pwr: 75, rel: 90, fireSpeed: 85, damage: 65, range: 60, accuracy: 75, desc: "Bullpup SMG." },
        { id: 43, name: "Mac 10", image: "images/weapons/WEAPON_MAC10.png", rarity: "Common", pwr: 40, rel: 80, fireSpeed: 95, damage: 35, range: 40, accuracy: 55, desc: "Spray and pray." },
        { id: 44, name: "MCX", image: "images/weapons/WEAPON_MCX.png", rarity: "Epic", pwr: 78, rel: 86, fireSpeed: 74, damage: 80, range: 74, accuracy: 81, desc: "Modular rifle." },
        { id: 45, name: "MD SH", image: "images/weapons/WEAPON_MDSH.png", rarity: "Rare", pwr: 62, rel: 84, fireSpeed: 66, damage: 64, range: 58, accuracy: 76, desc: "Compact build." },
        { id: 46, name: "M Glock 19", image: "images/weapons/WEAPON_MGLOCK19.png", rarity: "Uncommon", pwr: 53, rel: 87, fireSpeed: 63, damage: 57, range: 50, accuracy: 77, desc: "Military Glock 19." },
        { id: 47, name: "Micro Rifle", image: "images/weapons/WEAPON_MICRORIFLE.png", rarity: "Rare", pwr: 64, rel: 82, fireSpeed: 70, damage: 66, range: 60, accuracy: 74, desc: "Compact rifle." },
        { id: 48, name: "Olive 17", image: "images/weapons/WEAPON_OLIVE17.png", rarity: "Uncommon", pwr: 52, rel: 87, fireSpeed: 62, damage: 57, range: 52, accuracy: 77, desc: "Olive finish Glock." },
        { id: 49, name: "Olive G19", image: "images/weapons/WEAPON_OLIVEG19.png", rarity: "Uncommon", pwr: 51, rel: 86, fireSpeed: 61, damage: 56, range: 49, accuracy: 76, desc: "Olive Glock 19." },
        { id: 50, name: "P88 P", image: "images/weapons/WEAPON_P88P.png", rarity: "Rare", pwr: 59, rel: 89, fireSpeed: 64, damage: 62, range: 55, accuracy: 79, desc: "Walther P88." },
        { id: 51, name: "P Tactical 19X", image: "images/weapons/WEAPON_PTACTICAL19X.png", rarity: "Rare", pwr: 55, rel: 88, fireSpeed: 64, damage: 60, range: 53, accuracy: 79, desc: "Tactical 19X." },
        { id: 52, name: "Remington B", image: "images/weapons/WEAPON_REMINGTONB.png", rarity: "Rare", pwr: 88, rel: 75, fireSpeed: 35, damage: 92, range: 85, accuracy: 82, desc: "Hunting rifle." },
        { id: 53, name: "SF AR-P", image: "images/weapons/WEAPON_SFARP.png", rarity: "Epic", pwr: 76, rel: 83, fireSpeed: 73, damage: 78, range: 70, accuracy: 79, desc: "Short frame AR." },
        { id: 54, name: "SIG CB", image: "images/weapons/WEAPON_SIGCB.png", rarity: "Epic", pwr: 74, rel: 87, fireSpeed: 68, damage: 76, range: 68, accuracy: 80, desc: "SIG compact." },
        { id: 55, name: "Tactical 17 CS", image: "images/weapons/WEAPON_TACTICAL17CS.png", rarity: "Rare", pwr: 54, rel: 88, fireSpeed: 63, damage: 59, range: 54, accuracy: 78, desc: "Compact slide 17." },
        { id: 56, name: "Tactical 17 G4 Grip", image: "images/weapons/WEAPON_TACTICAL17G4GRIP.png", rarity: "Rare", pwr: 53, rel: 87, fireSpeed: 62, damage: 58, range: 53, accuracy: 77, desc: "Gen 4 grip variant." },
        { id: 57, name: "Tactical 17 L", image: "images/weapons/WEAPON_TACTICAL17L.png", rarity: "Epic", pwr: 56, rel: 89, fireSpeed: 65, damage: 61, range: 56, accuracy: 80, desc: "Long slide 17." },
        { id: 58, name: "Tactical 17 PS", image: "images/weapons/WEAPON_TACTICAL17PS.png", rarity: "Rare", pwr: 54, rel: 88, fireSpeed: 63, damage: 59, range: 54, accuracy: 78, desc: "17 pistol variant." },
        { id: 59, name: "Tactical 17 Switch Gold", image: "images/weapons/WEAPON_TACTICAL17SWITCHGOLD.png", rarity: "Legendary", pwr: 60, rel: 92, fireSpeed: 68, damage: 65, range: 56, accuracy: 85, desc: "Gold switch build." },
        { id: 60, name: "Tactical 17 Switch Green", image: "images/weapons/WEAPON_TACTICAL17SWITCHGREEN.png", rarity: "Epic", pwr: 58, rel: 90, fireSpeed: 66, damage: 63, range: 55, accuracy: 82, desc: "Green switch build." },
        { id: 61, name: "Tactical 17 Switch Orange", image: "images/weapons/WEAPON_TACTICAL17SWITCHORANGE.png", rarity: "Epic", pwr: 58, rel: 90, fireSpeed: 66, damage: 63, range: 55, accuracy: 82, desc: "Orange switch build." },
        { id: 62, name: "Tactical 17 Switch Red", image: "images/weapons/WEAPON_TACTICAL17SWITCHRED.png", rarity: "Epic", pwr: 58, rel: 90, fireSpeed: 66, damage: 63, range: 55, accuracy: 82, desc: "Red switch build." },
        { id: 63, name: "Tactical 17 Switch T", image: "images/weapons/WEAPON_TACTICAL17SWITCHT.png", rarity: "Epic", pwr: 57, rel: 89, fireSpeed: 65, damage: 62, range: 54, accuracy: 81, desc: "Tactical switch." },
        { id: 64, name: "Tactical 19 CR", image: "images/weapons/WEAPON_TACTICAL19CR.png", rarity: "Rare", pwr: 55, rel: 88, fireSpeed: 64, damage: 60, range: 53, accuracy: 78, desc: "Compact 19." },
        { id: 65, name: "Tactical 19 G5 4 Flex", image: "images/weapons/WEAPON_TACTICAL19G54FLEX.png", rarity: "Epic", pwr: 56, rel: 89, fireSpeed: 65, damage: 61, range: 54, accuracy: 79, desc: "Flex 19 variant." },
        { id: 66, name: "Tactical 19 G5 S", image: "images/weapons/WEAPON_TACTICAL19G5S.png", rarity: "Rare", pwr: 54, rel: 88, fireSpeed: 63, damage: 59, range: 52, accuracy: 77, desc: "Gen 5 19." },
        { id: 67, name: "Tactical 19X Black", image: "images/weapons/WEAPON_TACTICAL19XBLACK.png", rarity: "Rare", pwr: 55, rel: 88, fireSpeed: 64, damage: 60, range: 53, accuracy: 78, desc: "Black 19X." },
        { id: 68, name: "Tactical 19X Custom", image: "images/weapons/WEAPON_TACTICAL19XCUSTOM.png", rarity: "Epic", pwr: 57, rel: 89, fireSpeed: 65, damage: 62, range: 54, accuracy: 80, desc: "Custom 19X." },
        { id: 69, name: "Tactical 19X TS", image: "images/weapons/WEAPON_TACTICAL19XTS.png", rarity: "Rare", pwr: 55, rel: 88, fireSpeed: 64, damage: 60, range: 53, accuracy: 78, desc: "19X two-tone." },
        { id: 70, name: "Tactical 20 GF", image: "images/weapons/WEAPON_TACTICAL20GF.png", rarity: "Epic", pwr: 66, rel: 87, fireSpeed: 57, damage: 71, range: 56, accuracy: 77, desc: "20 tactical." },
        { id: 71, name: "Tactical 20 SC", image: "images/weapons/WEAPON_TACTICAL20SC.png", rarity: "Rare", pwr: 65, rel: 86, fireSpeed: 56, damage: 70, range: 55, accuracy: 76, desc: "20 subcompact." },
        { id: 72, name: "Tactical 20 Switch B", image: "images/weapons/WEAPON_TACTICAL20SWITCHB.png", rarity: "Epic", pwr: 67, rel: 88, fireSpeed: 58, damage: 72, range: 57, accuracy: 78, desc: "20 switch black." },
        { id: 73, name: "Tactical 20 Switch G", image: "images/weapons/WEAPON_TACTICAL20SWITCHG.png", rarity: "Epic", pwr: 67, rel: 88, fireSpeed: 58, damage: 72, range: 57, accuracy: 78, desc: "20 switch green." },
        { id: 74, name: "Tactical 22", image: "images/weapons/WEAPON_TACTICAL22.png", rarity: "Common", pwr: 35, rel: 85, fireSpeed: 70, damage: 38, range: 40, accuracy: 75, desc: ".22 LR plinker." },
        { id: 75, name: "Tactical 22 G4 SG", image: "images/weapons/WEAPON_TACTICAL22G4SG.png", rarity: "Uncommon", pwr: 37, rel: 86, fireSpeed: 71, damage: 40, range: 42, accuracy: 76, desc: ".22 Gen 4." },
        { id: 76, name: "Tactical 23 B", image: "images/weapons/WEAPON_TACTICAL23B.png", rarity: "Rare", pwr: 56, rel: 87, fireSpeed: 61, damage: 60, range: 52, accuracy: 78, desc: ".40 compact." },
        { id: 77, name: "Tactical 23 G5", image: "images/weapons/WEAPON_TACTICAL23G5.png", rarity: "Rare", pwr: 57, rel: 88, fireSpeed: 62, damage: 61, range: 53, accuracy: 78, desc: "23 Gen 5." },
        { id: 78, name: "Tactical 26 G5 G Switch", image: "images/weapons/WEAPON_TACTICAL26G5GSWITCH.png", rarity: "Epic", pwr: 50, rel: 90, fireSpeed: 60, damage: 55, range: 48, accuracy: 79, desc: "26 switch build." },
        { id: 79, name: "Tactical 26 Switch G", image: "images/weapons/WEAPON_TACTICAL26SWITCHG.png", rarity: "Rare", pwr: 49, rel: 89, fireSpeed: 59, damage: 54, range: 47, accuracy: 78, desc: "26 switch green." },
        { id: 80, name: "Tactical 26 Switch P", image: "images/weapons/WEAPON_TACTICAL26SWITCHP.png", rarity: "Rare", pwr: 49, rel: 89, fireSpeed: 59, damage: 54, range: 47, accuracy: 78, desc: "26 switch purple." },
        { id: 81, name: "Tactical 27 S", image: "images/weapons/WEAPON_TACTICAL27S.png", rarity: "Uncommon", pwr: 50, rel: 87, fireSpeed: 60, damage: 54, range: 48, accuracy: 76, desc: "27 compact." },
        { id: 82, name: "Tactical 29", image: "images/weapons/WEAPON_TACTICAL29.png", rarity: "Rare", pwr: 63, rel: 86, fireSpeed: 54, damage: 68, range: 52, accuracy: 74, desc: "29 tactical." },
        { id: 83, name: "Tactical 34 G5", image: "images/weapons/WEAPON_TACTICAL34G5.png", rarity: "Epic", pwr: 58, rel: 90, fireSpeed: 66, damage: 63, range: 56, accuracy: 81, desc: "34 Gen 5 long slide." },
        { id: 84, name: "Tactical 40 CC S", image: "images/weapons/WEAPON_TACTICAL40CCS.png", rarity: "Rare", pwr: 64, rel: 85, fireSpeed: 55, damage: 68, range: 54, accuracy: 75, desc: ".40 compact." },
        { id: 85, name: "Tactical 40 CS", image: "images/weapons/WEAPON_TACTICAL40CS.png", rarity: "Rare", pwr: 63, rel: 85, fireSpeed: 56, damage: 67, range: 53, accuracy: 75, desc: ".40 compact slide." },
        { id: 86, name: "Tactical 40 MOS", image: "images/weapons/WEAPON_TACTICAL40MOS.png", rarity: "Epic", pwr: 65, rel: 87, fireSpeed: 57, damage: 69, range: 55, accuracy: 77, desc: ".40 optics-ready." },
        { id: 87, name: "Tactical 41", image: "images/weapons/WEAPON_TACTICAL41.png", rarity: "Epic", pwr: 67, rel: 86, fireSpeed: 51, damage: 72, range: 57, accuracy: 77, desc: ".45 long slide." },
        { id: 88, name: "Tactical 43X Custom", image: "images/weapons/WEAPON_TACTICAL43XCUSTOM.png", rarity: "Rare", pwr: 51, rel: 88, fireSpeed: 60, damage: 56, range: 48, accuracy: 78, desc: "43X custom build." },
        { id: 89, name: "Tactical 45 GF", image: "images/weapons/WEAPON_TACTICAL45GF.png", rarity: "Epic", pwr: 68, rel: 87, fireSpeed: 58, damage: 73, range: 58, accuracy: 78, desc: ".45 tactical." },
        { id: 90, name: "Tactical 48", image: "images/weapons/WEAPON_TACTICAL48.png", rarity: "Common", pwr: 50, rel: 88, fireSpeed: 60, damage: 54, range: 47, accuracy: 78, desc: "Slimline compact." },
        { id: 91, name: "Tactical 17 MOS", image: "images/weapons/WEAPON_TATICAL17MOS.png", rarity: "Rare", pwr: 54, rel: 88, fireSpeed: 63, damage: 59, range: 54, accuracy: 78, desc: "17 optics-ready." },
        { id: 92, name: "TEC-9", image: "images/weapons/WEAPON_TEC9.png", rarity: "Rare", pwr: 55, rel: 78, fireSpeed: 85, damage: 52, range: 45, accuracy: 60, desc: "Compact SMG." },
        { id: 93, name: "TPC", image: "images/weapons/WEAPON_TPC.png", rarity: "Rare", pwr: 61, rel: 85, fireSpeed: 66, damage: 64, range: 57, accuracy: 77, desc: "Compact tactical." }
    ],
    drugs: [
        { id: 5, name: "Blue Crystal", image: "images/drugs/k9_blues.png", rarity: "Rare", type: "Stimulant", effect: "Energy Boost", form: "Crystal", notes: "High purity", price: "$50-$80", bonus: "+20 Speed", desc: "99.1% pure grade material." },
        { id: 6, name: "Brick", image: "images/drugs/v_230.png", rarity: "Common", type: "Narcotic", effect: "Pain Relief", form: "Powder", notes: "Standard quality", price: "$20-$40", bonus: "+10 Health", desc: "Standard street import." },
        { id: 13, name: "Wockhardt", image: "images/drugs/wockhardt_pint.png", rarity: "Epic", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "Pharmaceutical grade", price: "$100-$150", bonus: "+25 Armor", desc: "Premium pharmaceutical grade." },
        { id: 14, name: "Tris", image: "images/drugs/tris_pint.png", rarity: "Rare", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "High quality", price: "$80-$120", bonus: "+20 Armor", desc: "High quality import." },
        { id: 15, name: "Quagen", image: "images/drugs/quagen_pint.png", rarity: "Rare", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "Street favorite", price: "$70-$110", bonus: "+18 Armor", desc: "Street favorite." },
        { id: 18, name: "MBox 10", image: "images/drugs/mbox_10.png", rarity: "Common", type: "Painkiller", effect: "Defensive Boost", form: "Tablet", notes: "Stacking Limited", price: "$10-$25", bonus: "+10 Armor", desc: "Basic pain relief tablet." },
        { id: 19, name: "MBox 15", image: "images/drugs/mbox_15.png", rarity: "Uncommon", type: "Painkiller", effect: "Defensive Boost", form: "Tablet", notes: "Stacking Limited", price: "$15-$35", bonus: "+15 Armor", desc: "Enhanced pain relief tablet." },
        { id: 20, name: "MBox 20", image: "images/drugs/mbox_20.png", rarity: "Rare", type: "Painkiller", effect: "Defensive Boost", form: "Tablet", notes: "Stacking Limited", price: "$25-$50", bonus: "+20 Armor", desc: "Advanced pain relief tablet." },
        { id: 84, name: "MBox 30", image: "images/drugs/mbox_30.png", rarity: "Epic", type: "Painkiller", effect: "Defensive Boost", form: "Tablet", notes: "Stacking Limited", price: "$40-$70", bonus: "+30 Armor", desc: "Maximum strength tablet." },
        { id: 85, name: "Green Crystal", image: "images/drugs/k8_greens.png", rarity: "Rare", type: "Stimulant", effect: "Energy Boost", form: "Crystal", notes: "High purity", price: "$45-$75", bonus: "+18 Speed", desc: "Premium grade stimulant." },
        { id: 86, name: "K-56", image: "images/drugs/k_56.png", rarity: "Uncommon", type: "Stimulant", effect: "Energy Boost", form: "Crystal", notes: "Standard purity", price: "$30-$55", bonus: "+15 Speed", desc: "Standard grade stimulant." },
        { id: 87, name: "M-523", image: "images/drugs/m_523.png", rarity: "Common", type: "Narcotic", effect: "Pain Relief", form: "Powder", notes: "Basic quality", price: "$15-$30", bonus: "+8 Health", desc: "Basic street narcotic." },
        { id: 88, name: "PAI Pint", image: "images/drugs/pai_pint.png", rarity: "Rare", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "High quality", price: "$75-$105", bonus: "+19 Armor", desc: "Quality liquid painkiller." },
        { id: 89, name: "Pint of Green", image: "images/drugs/pint_of_green.png", rarity: "Epic", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "Pharmaceutical grade", price: "$95-$140", bonus: "+24 Armor", desc: "Premium green liquid." },
        { id: 90, name: "RP-10", image: "images/drugs/rp_10.png", rarity: "Common", type: "Painkiller", effect: "Defensive Boost", form: "Tablet", notes: "Stacking Limited", price: "$8-$20", bonus: "+8 Armor", desc: "Basic RP tablet." },
        { id: 91, name: "RP-20", image: "images/drugs/rp_20.png", rarity: "Uncommon", type: "Painkiller", effect: "Defensive Boost", form: "Tablet", notes: "Stacking Limited", price: "$12-$28", bonus: "+12 Armor", desc: "Standard RP tablet." },
        { id: 92, name: "RP-30", image: "images/drugs/rp_30.png", rarity: "Rare", type: "Painkiller", effect: "Defensive Boost", form: "Tablet", notes: "Stacking Limited", price: "$20-$45", bonus: "+18 Armor", desc: "Enhanced RP tablet." },
        { id: 93, name: "Superman Pill", image: "images/drugs/superman_pill.png", rarity: "Legendary", type: "Stimulant", effect: "Energy Boost", form: "Tablet", notes: "Rare find", price: "$150-$250", bonus: "+35 Speed", desc: "Legendary performance enhancer." },
        { id: 94, name: "V-48", image: "images/drugs/v_48.png", rarity: "Uncommon", type: "Narcotic", effect: "Pain Relief", form: "Powder", notes: "Enhanced quality", price: "$25-$50", bonus: "+12 Health", desc: "Enhanced street narcotic." },
        { id: 95, name: "Line of Green", image: "images/drugs/line_of_green.png", rarity: "Epic", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "Bulk package", price: "$200-$300", bonus: "+30 Armor", desc: "Bulk green liquid package." },
        { id: 96, name: "Line of PAI", image: "images/drugs/line_of_pai.png", rarity: "Rare", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "Bulk package", price: "$150-$220", bonus: "+22 Armor", desc: "Bulk PAI package." },
        { id: 97, name: "Line of Quagen", image: "images/drugs/line_of_quagen.png", rarity: "Rare", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "Bulk package", price: "$140-$200", bonus: "+21 Armor", desc: "Bulk Quagen package." },
        { id: 98, name: "Line of Tris", image: "images/drugs/line_of_tris.png", rarity: "Rare", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "Bulk package", price: "$160-$240", bonus: "+23 Armor", desc: "Bulk Tris package." },
        { id: 99, name: "Line of Wockhardt", image: "images/drugs/line_of_wockhardt.png", rarity: "Legendary", type: "Painkiller", effect: "Defensive Boost", form: "Liquid", notes: "Bulk package", price: "$250-$400", bonus: "+35 Armor", desc: "Premium bulk Wockhardt package." }
    ],
    attachments: [
        { id: 7, name: "Suppressor", image: "images/attachments/attach_LIGHT.png", rarity: "Epic", type: "Muzzle", compatibility: "Pistols, Rifles", capacity: "N/A", desc: "Ghost-quiet operations." },
        { id: 8, name: "Extended Mag", image: "images/attachments/pmag_ext.png", rarity: "Common", type: "Magazine", compatibility: "Rifles", capacity: "30 Rounds", desc: "More lead, less reloading." },
        { id: 16, name: "Drum Mag", image: "images/attachments/drum_mag_ext.png", rarity: "Epic", type: "Magazine", compatibility: "Rifles", capacity: "60 Rounds", desc: "Maximum capacity." },
        { id: 17, name: "Auto Sear", image: "images/attachments/autosear.png", rarity: "Legendary", type: "Internal", compatibility: "Semi-Auto Weapons", capacity: "N/A", desc: "Full auto conversion." },
        { id: 21, name: "PMAG Extended Magazine", image: "images/attachments/pmag_ext.png", rarity: "Common", type: "Magazine", compatibility: "Rifles", capacity: "30 Rounds", desc: "Standard extended capacity magazine." },
        { id: 22, name: "PMAG Drum Magazine", image: "images/attachments/drum_mag_ext.png", rarity: "Epic", type: "Magazine", compatibility: "Rifles", capacity: "60 Rounds", desc: "High-capacity drum magazine." },
        { id: 23, name: "Kris Vector Magazine", image: "images/attachments/pmag_ext.png", rarity: "Rare", type: "Magazine", compatibility: "SMGs", capacity: "25 Rounds", desc: "Specialized SMG magazine." },
        { id: 100, name: "PMAG Extended Magazine 2", image: "images/attachments/pmag_ext2.png", rarity: "Uncommon", type: "Magazine", compatibility: "Rifles", capacity: "35 Rounds", desc: "Enhanced extended capacity magazine." },
        { id: 101, name: "Drum Magazine Extended 2", image: "images/attachments/drum_mag_ext2.png", rarity: "Legendary", type: "Magazine", compatibility: "Rifles", capacity: "75 Rounds", desc: "Maximum extended capacity drum." },
        { id: 102, name: "Glock Magazine Extended", image: "images/attachments/gmag_ext.png", rarity: "Common", type: "Magazine", compatibility: "Pistols", capacity: "17 Rounds", desc: "Extended Glock magazine." },
        { id: 103, name: "Glock Magazine Extended 2", image: "images/attachments/gmag_ext2.png", rarity: "Uncommon", type: "Magazine", compatibility: "Pistols", capacity: "19 Rounds", desc: "Enhanced extended Glock magazine." },
        { id: 104, name: "Kris Vector Magazine Extended", image: "images/attachments/kv_mag_ext.png", rarity: "Rare", type: "Magazine", compatibility: "SMGs", capacity: "30 Rounds", desc: "Extended Kris Vector magazine." },
        { id: 105, name: "Kris Vector Magazine Extended 2", image: "images/attachments/kv_mag_ext2.png", rarity: "Epic", type: "Magazine", compatibility: "SMGs", capacity: "35 Rounds", desc: "Maximum extended Kris Vector magazine." },
        { id: 106, name: "Switch", image: "images/attachments/switch.png", rarity: "Legendary", type: "Internal", compatibility: "Semi-Auto Weapons", capacity: "N/A", desc: "Select-fire conversion device." }
    ]
};

// -----------------------------
// AUTH / ACCOUNT PERSISTENCE
// -----------------------------
const STORAGE_KEYS = { accounts: 'webdev_accounts', session: 'webdev_session' };
let currentUser = null;

function loadAccounts() { try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.accounts) || '{}') || {}; } catch { return {}; } }
function saveAccounts(accounts) { localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(accounts)); }
function saveSession(username) { localStorage.setItem(STORAGE_KEYS.session, JSON.stringify({ username })); }
function clearSession() { localStorage.removeItem(STORAGE_KEYS.session); }
function getSession() { try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.session) || 'null'); } catch { return null; } }

function showAuthOverlay() { const o = document.getElementById('auth-overlay'); const a = document.getElementById('main-app'); if (o) o.classList.add('active'); if (a) a.classList.add('app-locked'); }
function hideAuthOverlay() { const o = document.getElementById('auth-overlay'); const a = document.getElementById('main-app'); if (o) o.classList.remove('active'); if (a) a.classList.remove('app-locked'); }
function clearAuthInputs() { ['auth-user','auth-pass','reg-user','reg-pass'].forEach(id => { const e = document.getElementById(id); if (e) e.value = ''; }); const err = document.getElementById('auth-error'); if (err) err.innerText = ''; }

function resetTransientUI() {
    const modal = document.getElementById('modal'); if (modal) modal.classList.remove('active');
    const banner = document.getElementById('win-announcement'); if (banner) { banner.classList.remove('show'); banner.style.display = 'none'; }
    const spinBtn = document.getElementById('spin-button'); if (spinBtn) spinBtn.disabled = false;
    const content = document.querySelector('.content-area'); if (content) content.scrollTop = 0;
}

function setActiveView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const view = document.getElementById('view-' + viewId); const btn = document.querySelector(`.nav-btn[onclick*="'${viewId}'"]`);
    if (view) view.classList.add('active'); if (btn) btn.classList.add('active');
    if (viewId === 'management') populateManagement();
    if (viewId === 'profile') showProfileView();
}

function toggleAuthForm(isRegister) {
    document.getElementById('login-form').style.display = isRegister ? 'none' : 'block';
    document.getElementById('register-form').style.display = isRegister ? 'block' : 'none';
    clearAuthInputs();
}

function handleAuth(action) {
    const error = document.getElementById('auth-error');
    if (action === 'register') {
        const user = (document.getElementById('reg-user')?.value || '').trim();
        const pass = (document.getElementById('reg-pass')?.value || '').trim();
        const faction = document.getElementById('reg-faction')?.value || '';
        if (!user || !pass) { if (error) error.innerText = 'OPERATOR_ID and ACCESS_CODE required'; return; }
        if (!faction) { if (error) error.innerText = 'SELECT FACTION'; return; }
        const accounts = loadAccounts();
        if (accounts[user]) { if (error) error.innerText = 'OPERATOR_ID already exists'; return; }
        accounts[user] = { name: user, pass, faction, credits: 50000, inventoryIds: [] };
        saveAccounts(accounts); clearAuthInputs(); toggleAuthForm(false); if (error) error.innerText = 'Identity created. Login to continue.';
        return;
    }
    const username = (document.getElementById('auth-user')?.value || '').trim();
    const pass = (document.getElementById('auth-pass')?.value || '').trim();
    if (!username || !pass) { if (error) error.innerText = 'OPERATOR_ID and ACCESS_CODE required'; return; }
    const accounts = loadAccounts();
    const acct = accounts[username];
    if (!acct || acct.pass !== pass) { if (error) error.innerText = 'INVALID ACCESS_CODE'; return; }
    currentUser = { username, name: acct.name || username, avatar: acct.avatar || '', credits: typeof acct.credits === 'number' ? acct.credits : 50000, inventoryIds: Array.isArray(acct.inventoryIds) ? acct.inventoryIds : [], faction: acct.faction || 'None' };
    saveSession(username); hideAuthOverlay(); updateUIForUser(); resetTransientUI(); setActiveView('roulette');
    updateRouletteHeader('weapons'); initWheel(); renderInventory(); renderWiki();
}

function login(username) { handleAuth('login'); }
function saveCurrentUser() {
    if (!currentUser) return;
    const accounts = loadAccounts();
    const existing = accounts[currentUser.username];
    if (!existing) return;
    accounts[currentUser.username] = { ...existing, name: currentUser.name, avatar: currentUser.avatar, credits: currentUser.credits, inventoryIds: currentUser.inventoryIds, faction: currentUser.faction || 'None' };
    saveAccounts(accounts);
}
function logout() { saveCurrentUser(); currentUser = null; clearSession(); resetTransientUI(); setActiveView('roulette'); clearAuthInputs(); toggleAuthForm(false); showAuthOverlay(); }

function updateAccountDetails() {
    if (!currentUser) return;
    const newName = (document.getElementById('new-name-input')?.value || '').trim();
    const newAvatar = (document.getElementById('new-avatar-input')?.value || '').trim();
    if (newName) currentUser.name = newName;
    if (newAvatar) currentUser.avatar = newAvatar;
    saveCurrentUser(); updateUIForUser();
}
function updateFaction() {
    if (!currentUser) return;
    const sel = document.getElementById('profile-faction-select');
    if (sel) { currentUser.faction = sel.value || 'None'; saveCurrentUser(); updateUIForUser(); }
}
function leaveFaction() { if (currentUser) { currentUser.faction = 'None'; saveCurrentUser(); updateUIForUser(); } }
function showProfileView() {
    document.getElementById('profile-display-name').textContent = currentUser?.name || 'OPERATOR';
    document.getElementById('new-name-input').value = currentUser?.name || '';
    document.getElementById('new-avatar-input').value = currentUser?.avatar || '';
    document.getElementById('profile-faction-display').textContent = currentUser?.faction || 'None';
    const sel = document.getElementById('profile-faction-select'); if (sel) sel.value = currentUser?.faction || 'None';
    const avatar = document.getElementById('profile-avatar-large');
    if (avatar) { if (currentUser?.avatar) { avatar.innerHTML = `<img src="${currentUser.avatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:22px;">`; } else { avatar.innerHTML = '<i class="fa-solid fa-user"></i>'; } }
}

function updateUIForUser() {
    const bal = document.getElementById('balance'); if (bal) bal.textContent = (currentUser?.credits ?? 50000).toLocaleString();
    const profileBtn = document.getElementById('profile-btn');
    if (profileBtn) { if (currentUser?.avatar) { profileBtn.style.backgroundImage = `url(${currentUser.avatar})`; profileBtn.style.backgroundSize = 'cover'; } else { profileBtn.style.backgroundImage = ''; profileBtn.style.background = ''; } }
}

function requireAuth() { if (!currentUser) { showAuthOverlay(); return false; } return true; }

// -----------------------------
// ROULETTE
// -----------------------------
let currentCategory = 'weapons';
let currentTier = 1;
function getItemPool() {
    const pool = DB[currentCategory] || DB.weapons;
    return pool.filter(i => { if (currentCategory === 'weapons') return currentTier === 1 || (i.rarity && ['Rare','Epic','Legendary'].includes(i.rarity)); return true; });
}
function updateRouletteHeader(cat) {
    const titles = { weapons: ['Expand Your <span class="text-glow">Arsenal</span>', 'Select a category and test your luck.'], drugs: ['Chemical <span class="text-glow">Acquisition</span>', 'Narcotics and pharmaceutical goods.'], attachments: ['Tactical <span class="text-glow">Upgrades</span>', 'Attachments and modifications.'] };
    const [t, s] = titles[cat] || titles.weapons;
    const ht = document.getElementById('roulette-title'); const hs = document.getElementById('roulette-subtitle');
    if (ht) ht.innerHTML = t; if (hs) hs.textContent = s;
}
function changeCategory(cat, btn) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    updateRouletteHeader(cat); initWheel();
}
function toggleTierDropdown() { document.getElementById('tier-dropdown')?.classList.toggle('show'); }
function changeTier(tier) {
    currentTier = tier;
    document.getElementById('tier-btn').innerHTML = `Tier ${tier} <i class="fa-solid fa-chevron-down"></i>`;
    document.getElementById('tier-dropdown')?.classList.remove('show');
    initWheel();
}
function initWheel() {
    const pool = getItemPool();
    const wheel = document.getElementById('wheel');
    if (!wheel) return;
    wheel.innerHTML = pool.map(item => {
        const img = item.image ? `<img src="${item.image}" alt="">` : `<i class="fa-solid fa-gun"></i>`;
        return `<div class="item-card" data-id="${item.id}" data-category="${currentCategory}">${img}<span class="item-name">${item.name}</span></div>`;
    }).join('');
}
let isSpinning = false;
function startSpin() {
    if (!requireAuth()) return;
    if (isSpinning) return;
    const pool = getItemPool();
    if (!pool.length) return;
    const spinBtn = document.getElementById('spin-button');
    if (spinBtn) spinBtn.disabled = true;
    isSpinning = true;
    const won = pool[Math.floor(Math.random() * pool.length)];
    const wheel = document.getElementById('wheel');
    const cards = wheel?.querySelectorAll('.item-card') || [];
    const idx = Array.from(cards).findIndex(c => parseInt(c.dataset.id) === won.id);
    const cardW = 200;
    const offset = idx >= 0 ? -(idx * cardW) + (wheel?.offsetWidth || 800) / 2 - cardW / 2 : 0;
    const extra = (pool.length * cardW) * 2;
    wheel.style.transition = 'none';
    wheel.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(() => {
        wheel.style.transition = 'transform 5s cubic-bezier(0.15, 0, 0.15, 1)';
        wheel.style.transform = `translateX(${offset - extra}px)`;
    });
    setTimeout(() => {
        currentUser.inventoryIds.push(won.id);
        currentUser.credits = Math.max(0, (currentUser.credits || 0) - 500);
        saveCurrentUser(); updateUIForUser(); renderInventory();
        cards.forEach(c => c.classList.remove('won'));
        const wonCard = Array.from(cards).find(c => parseInt(c.dataset.id) === won.id);
        if (wonCard) wonCard.classList.add('won');
        document.getElementById('won-item-name').textContent = won.name;
        const banner = document.getElementById('win-announcement');
        if (banner) { banner.style.display = 'block'; banner.classList.add('show'); }
        if (spinBtn) spinBtn.disabled = false;
        isSpinning = false;
    }, 5200);
}
// -----------------------------
// INVENTORY / WIKI
// -----------------------------
function getAllItems() { return [...DB.weapons, ...DB.drugs, ...DB.attachments]; }
function getItemById(id) { return getAllItems().find(i => i.id === parseInt(id)); }
function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    if (!grid) return;
    const ids = currentUser?.inventoryIds || [];
    grid.innerHTML = ids.map(id => {
        const item = getItemById(id);
        if (!item) return '';
        const img = item.image ? `<img src="${item.image}" alt="">` : `<i class="fa-solid fa-box"></i>`;
        const cat = (item.effect || item.form) ? 'drug' : (item.compatibility ? 'attachment' : 'weapon');
        return `<div class="grid-item" data-id="${item.id}"><button class="remove-item-btn" onclick="removeFromInventory(${item.id})" title="Remove"><i class="fa-solid fa-trash"></i></button><div class="grid-item-content" onclick="openModal(${item.id}, '${cat}')">${img}<span class="item-name">${item.name}</span></div></div>`;
    }).filter(Boolean).join('');
}
function removeFromInventory(id) {
    if (!currentUser) return;
    currentUser.inventoryIds = (currentUser.inventoryIds || []).filter(i => i !== id);
    saveCurrentUser(); renderInventory();
}
function renderWiki() {
    const grid = document.getElementById('wiki-grid');
    if (!grid) return;
    const items = getAllItems();
    grid.innerHTML = items.map(item => {
        const img = item.image ? `<img src="${item.image}" alt="">` : `<i class="fa-solid fa-circle-question"></i>`;
        const cat = (item.effect || item.form) ? 'drug' : (item.compatibility ? 'attachment' : 'weapon');
        return `<div class="grid-item" onclick="openModal(${item.id}, '${cat}')">${img}<span class="item-name">${item.name}</span></div>`;
    }).join('');
}
function populateManagement() {
    if (!requireAuth()) return;
    const leadGrid = document.getElementById('lead-mgmt-grid');
    const staffGrid = document.getElementById('staff-mgmt-grid');
    if (leadGrid) leadGrid.innerHTML = '';
    if (staffGrid) staffGrid.innerHTML = '';
    STAFF_TEAM.forEach(staff => {
        const factionClass = `faction-${staff.faction}`;
        const card = document.createElement('div');
        card.className = 'staff-card';
        const avatarStyle = staff.avatar ? `background-image:url(${staff.avatar})` : '';
        card.innerHTML = `<div class="staff-avatar" style="${avatarStyle}"></div><div class="staff-info"><h3>${staff.name}</h3><span class="staff-rank">${staff.rank}</span><span class="staff-faction-badge ${factionClass}">${staff.faction}</span></div>`;
        if (!staff.avatar) card.querySelector('.staff-avatar').innerHTML = '<i class="fa-solid fa-user-shield"></i>';
        (staff.tier === 'lead' ? leadGrid : staffGrid).appendChild(card);
    });
}
// -----------------------------
// MODAL
// -----------------------------
function openModal(id, type) {
    const item = getItemById(id);
    if (!item) return;
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-rarity').textContent = item.rarity || 'N/A';
    document.getElementById('modal-desc').textContent = item.desc || '';
    const icon = document.getElementById('modal-icon');
    icon.innerHTML = item.image ? `<img src="${item.image}" alt="">` : '<i class="fa-solid fa-gun"></i>';
    const weaponStats = document.getElementById('weapon-stats');
    const drugDetails = document.getElementById('drug-details');
    const attachmentDetails = document.getElementById('attachment-details');
    if (weaponStats) weaponStats.style.display = type === 'weapon' ? 'block' : 'none';
    if (drugDetails) drugDetails.style.display = type === 'drug' ? 'block' : 'none';
    if (attachmentDetails) attachmentDetails.style.display = type === 'attachment' ? 'block' : 'none';
    if (type === 'weapon' && item.damage != null) {
        ['damage','firespeed','range','accuracy','rel'].forEach((s, i) => {
            const bar = document.getElementById('stat-' + (s === 'rel' ? 'rel' : s));
            const val = document.getElementById('stat-' + (s === 'rel' ? 'rel' : s) + '-value');
            const v = item[s === 'firespeed' ? 'fireSpeed' : s] || 0;
            if (bar) bar.style.width = v + '%';
            if (val) val.textContent = v;
        });
    }
    if (type === 'drug' && item.bonus) { document.getElementById('drug-bonus').textContent = item.bonus; document.getElementById('drug-type').textContent = item.type || '-'; document.getElementById('drug-effect').textContent = item.effect || '-'; document.getElementById('drug-form').textContent = item.form || '-'; document.getElementById('drug-notes').textContent = item.notes || '-'; document.getElementById('drug-price').textContent = item.price || '-'; }
    if (type === 'attachment') { document.getElementById('attachment-type').textContent = item.type || '-'; document.getElementById('attachment-compatibility').textContent = item.compatibility || '-'; document.getElementById('attachment-capacity').textContent = item.capacity || '-'; }
    document.getElementById('modal').classList.add('active');
}
function closeModal() { document.getElementById('modal')?.classList.remove('active'); }

// -----------------------------
// CHAT
// -----------------------------
let chatMode = 'global';
function toggleChat() { document.getElementById('chat-node')?.classList.toggle('active'); }
function switchChat(mode) { chatMode = mode; document.querySelectorAll('.chat-tab').forEach(t => t.classList.remove('active')); document.querySelector(`.chat-tab[onclick*="'${mode}'"]`)?.classList.add('active'); }
function sendMessage() {
    const input = document.getElementById('chat-input');
    const msg = (input?.value || '').trim();
    if (!msg || !currentUser) return;
    const div = document.createElement('div');
    div.className = 'msg';
    div.innerHTML = `<span class="msg-user">${currentUser.name}</span><span class="msg-faction faction-${currentUser.faction || 'None'}">${currentUser.faction || 'None'}</span> ${msg}`;
    document.getElementById('chat-messages').appendChild(div);
    div.scrollIntoView();
    input.value = '';
}

// -----------------------------
// INIT
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('profile-btn')?.addEventListener('click', () => { if (requireAuth()) setActiveView('profile'); });
    const session = getSession();
    if (session?.username) {
        const accounts = loadAccounts();
        const acct = accounts[session.username];
        if (acct) { currentUser = { username: session.username, name: acct.name || session.username, avatar: acct.avatar || '', credits: acct.credits ?? 50000, inventoryIds: acct.inventoryIds || [], faction: acct.faction || 'None' }; hideAuthOverlay(); updateUIForUser(); initWheel(); renderInventory(); renderWiki(); }
        else showAuthOverlay();
    } else showAuthOverlay();
    changeCategory('weapons', document.querySelector('.cat-btn.tier-btn'));
});
