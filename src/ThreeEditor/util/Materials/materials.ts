export const COMMON_MATERIAL_IDS = ['104', '276', '223', '179', '222', '6', '245', '170'];

// made with:
//
// import json
// result = []
// with open('07_reftab.tex', 'r') as infile:
//     for line in infile.readlines():
//         data = line.strip().split()
//         materialId = data[0]
//         materialName = ' '.join(data[2:])[1:-2]
//         result.append({'id': materialId, 'name': materialName})
//         print(materialId, materialName)
// with open('materials.txt', 'w') as outfile:
//     json.dump(result, outfile)

export const MATERIALS = [
    { id: "1", name: "HYDROGEN" },
    { id: "2", name: "HELIUM" },
    { id: "3", name: "LITHIUM" },
    { id: "4", name: "BERYLLIUM" },
    { id: "5", name: "BORON" },
    { id: "6", name: "AMORPHOUS CARBON (density 2.0 g/cm3)" },
    { id: "906", name: "GRAPHITE" },
    { id: "7", name: "NITROGEN" },
    { id: "8", name: "OXYGEN" },
    { id: "98", name: "CALIFORNIUM" },
    { id: "99", name: "A-150 TISSUE-EQUIVALENT PLASTIC" },
    { id: "100", name: "ACETONE" },
    { id: "101", name: "ACETYLENE" },
    { id: "102", name: "ADENINE" },
    { id: "103", name: "ADIPOSE TISSUE (ICRP)" },
    { id: "104", name: "AIR, DRY (NEAR SEA LEVEL)" },
    { id: "105", name: "ALANINE" },
    { id: "106", name: "ALUMINUM OXIDE" },
    { id: "107", name: "AMBER" },
    { id: "108", name: "AMMONIA" },
    { id: "109", name: "ANILINE" },
    { id: "110", name: "ANTHRACENE" },
    { id: "111", name: "B100" },
    { id: "112", name: "BAKELITE" },
    { id: "113", name: "BARIUM FLUORIDE" },
    { id: "114", name: "BARIUM SULFATE" },
    { id: "115", name: "BENZENE" },
    { id: "116", name: "BERYLLIUM OXIDE" },
    { id: "117", name: "BISMUTH GERMANIUM OXIDE" },
    { id: "118", name: "BLOOD (ICRP)" },
    { id: "119", name: "BONE, COMPACT (ICRU)" },
    { id: "120", name: "BONE, CORTICAL (ICRP)" },
    { id: "121", name: "BORON CARBIDE" },
    { id: "122", name: "BORON OXIDE" },
    { id: "123", name: "BRAIN (ICRP)" },
    { id: "124", name: "BUTANE" },
    { id: "125", name: "N-BUTYLALCOHOL" },
    { id: "126", name: "C-552 AIR-EQUIVALENT PLASTIC" },
    { id: "127", name: "CADMIUM TELLURIDE" },
    { id: "128", name: "CADMIUM TUNGSTATE" },
    { id: "129", name: "CALCIUM CARBONATE" },
    { id: "130", name: "CALCIUM FLUORIDE" },
    { id: "131", name: "CALCIUM OXIDE" },
    { id: "132", name: "CALCIUM SULFATE" },
    { id: "133", name: "CALCIUM TUNGSTATE" },
    { id: "134", name: "CARBON DIOXIDE" },
    { id: "135", name: "CARBON TETRACHLORIDE" },
    { id: "136", name: "CELLULOSE ACETATE, CELLOPHANE" },
    { id: "137", name: "CELLULOSE ACETATE BUTYRATE" },
    { id: "138", name: "CELLULOSE NITRATE" },
    { id: "139", name: "CERIC SULFATE DOSIMETER SOLUTION" },
    { id: "140", name: "CESIUM FLUORIDE" },
    { id: "141", name: "CESIUM IODIDE" },
    { id: "142", name: "CHLOROBENZENE" },
    { id: "143", name: "CHLOROFORM" },
    { id: "144", name: "CONCRETE PORTLAND" },
    { id: "145", name: "CYCLOHEXANE" },
    { id: "146", name: "1,2-DICHLOROBENZENE" },
    { id: "147", name: "DICHLORODIETHYL ETHER" },
    { id: "148", name: "DICHLOROETHANE" },
    { id: "149", name: "DIETHYLETHER" },
    { id: "150", name: "N,N-DIMETHYL FORMAMIDE" },
    { id: "151", name: "DIMETHYLSULFOXIDE" },
    { id: "152", name: "ETHANE" },
    { id: "153", name: "ETHYL ALCOHOL" },
    { id: "154", name: "ETHYL CELLULOSE" },
    { id: "155", name: "ETHYLENE" },
    { id: "156", name: "EYELENS (ICRP)" },
    { id: "157", name: "FERRIC OXIDE" },
    { id: "158", name: "FERRO BORIDE" },
    { id: "159", name: "FERROUS OXIDE" },
    { id: "160", name: "FERROUS SULFATE DOSIMETER SOLUTION" },
    { id: "161", name: "FREON-12" },
    { id: "162", name: "FREON-12B2" },
    { id: "163", name: "FREON-13" },
    { id: "164", name: "FREON-13B1" },
    { id: "165", name: "FREON-13I1" },
    { id: "166", name: "GADOLINIUM OXYSULFIDE" },
    { id: "167", name: "GALLIUM ARSENIDE" },
    { id: "168", name: "GEL IN PHOTOGRAPHIC EMULSION" },
    { id: "169", name: "GLASS, PYREX" },
    { id: "170", name: "GLASS, LEAD" },
    { id: "171", name: "GLASS, PLATE" },
    { id: "172", name: "GLUCOSE" },
    { id: "173", name: "GLUTAMINE" },
    { id: "174", name: "GLYCEROL" },
    { id: "175", name: "GUANINE" },
    { id: "176", name: "GYPSUM / PLASTER OF PARIS" },
    { id: "177", name: "N-HEPTANE" },
    { id: "178", name: "N-HEXANE" },
    { id: "179", name: "KAPTON POLYIMIDE FILM" },
    { id: "180", name: "LANTHANUM OXYBROMIDE" },
    { id: "181", name: "LANTHANUM OXYSULFIDE" },
    { id: "182", name: "LEADOXIDE" },
    { id: "183", name: "LITHIUM AMIDE" },
    { id: "184", name: "LITHIUM CARBONATE" },
    { id: "185", name: "LITHIUM FLUORIDE" },
    { id: "186", name: "LITHIUM HYDRIDE" },
    { id: "187", name: "LITHIUM IODIDE" },
    { id: "188", name: "LITHIUM OXIDE" },
    { id: "189", name: "LITHIUM TETRABORATE" },
    { id: "190", name: "LUNG (ICRP)" },
    { id: "191", name: "M3 WAX" },
    { id: "192", name: "MAGNESIUM CARBONATE" },
    { id: "193", name: "MAGNESIUM FLUORIDE" },
    { id: "194", name: "MAGNESIUM OXIDE" },
    { id: "195", name: "MAGNESIUM TETRABORATE" },
    { id: "196", name: "MERCURIC IODIDE" },
    { id: "197", name: "METHANE" },
    { id: "198", name: "METHANOL" },
    { id: "199", name: "MIX D WAX" },
    { id: "200", name: "MS20 TISSUE SUBSTITUTE" },
    { id: "201", name: "MUSCLE, SKELETAL (ICRP)" },
    { id: "202", name: "MUSCLE, STRIATED (ICRU)" },
    { id: "203", name: "MUSCLE EQUIVALENT LIQUID, WITH SUCROSE" },
    { id: "204", name: "MUSCLE EQUIVALENT LIQUID, NO SUCROSE" },
    { id: "205", name: "NAPHTHALENE" },
    { id: "206", name: "NITROBENZENE" },
    { id: "207", name: "NITROUS OXIDE" },
    { id: "208", name: "NYLON, DU PONT ELVAMIDE 8062" },
    { id: "209", name: "NYLON, TYPE 6 AND 6/6" },
    { id: "210", name: "NYLON, TYPE 6/10" },
    { id: "211", name: "NYLON, TYPE 11 (RILSAN)" },
    { id: "212", name: "OCTANE, LIQUID" },
    { id: "213", name: "PARAFFINWAX" },
    { id: "214", name: "N-PENTANE" },
    { id: "215", name: "PHOTOGRAPHIC EMULSION" },
    { id: "216", name: "PLASTIC SCINTILLATOR (VINYLTOLUENE BASED)" },
    { id: "217", name: "PLUTONIUM DIOXIDE" },
    { id: "218", name: "POLYACRYLONITRILE" },
    { id: "219", name: "POLYCARBONATE (MAKROLON, LEXAN)" },
    { id: "220", name: "POLYCHLOROSTYRENE" },
    { id: "221", name: "POLYETHYLENE" },
    { id: "222", name: "POLYETHYLENE TEREPHTHALATE (MYLAR)" },
    { id: "223", name: "POLYMETHYL METHACRALATE (LUCITE, PERSPEX, PMMA)" },
    { id: "224", name: "POLYOXYMETHYLENE" },
    { id: "225", name: "POLYPROPYLENE" },
    { id: "226", name: "POLYSTYRENE" },
    { id: "227", name: "POLYTETRAFLUOROETHYLENE (TEFLON)" },
    { id: "228", name: "POLYTRIFLUOROCHLOROETHYLENE" },
    { id: "229", name: "POLYVINYL ACETATE" },
    { id: "230", name: "POLYVINYL ALCOHOL" },
    { id: "231", name: "POLYVINYL BUTYRAL" },
    { id: "232", name: "POLYVINYL CHLORIDE" },
    { id: "233", name: "SARAN" },
    { id: "234", name: "POLYVINYLIDENE FLUORIDE" },
    { id: "235", name: "POLYVINYLPYRROLIDONE" },
    { id: "236", name: "POTASSIUM IODIDE" },
    { id: "237", name: "POTASSIUM OXIDE" },
    { id: "238", name: "PROPANE" },
    { id: "239", name: "PROPANE, LIQUID" },
    { id: "240", name: "N-PROPYL ALCOHOL" },
    { id: "241", name: "PYRIDINE" },
    { id: "242", name: "RUBBER, BUTYL" },
    { id: "243", name: "RUBBER, NATURAL" },
    { id: "244", name: "RUBBER, NEOPRENE" },
    { id: "245", name: "SILICON DIOXIDE" },
    { id: "246", name: "SILVER BROMIDE" },
    { id: "247", name: "SILVER CHLORIDE" },
    { id: "248", name: "SILVER HALIDES IN PHOTOGRAPHIC EMULSION" },
    { id: "249", name: "SILVER IODIDE" },
    { id: "250", name: "SKIN (ICRP)" },
    { id: "251", name: "SODIUM CARBONATE" },
    { id: "252", name: "SODIUM IODIDE" },
    { id: "253", name: "SODIUM MONOXIDE" },
    { id: "254", name: "SODIUM NITRATE" },
    { id: "255", name: "STILBENE" },
    { id: "256", name: "SUCROSE" },
    { id: "257", name: "TERPHENYL" },
    { id: "258", name: "TESTES (ICRP)" },
    { id: "259", name: "TETRACHLOROETHYLENE" },
    { id: "260", name: "THALLIUM CHLORIDE" },
    { id: "261", name: "TISSUE, SOFT (ICRP)" },
    { id: "262", name: "TISSUE, SOFT (ICRU, FOUR COMPONENT)" },
    { id: "263", name: "TISSUE-EQUIVALENT GAS (METHANE BASED)" },
    { id: "264", name: "TISSUE-EQUIVALENT GAS (PROPANE BASED)" },
    { id: "265", name: "TITANIUM DIOXIDE" },
    { id: "266", name: "TOLUENE" },
    { id: "267", name: "TRICHLOROETHYLENE" },
    { id: "268", name: "TRIETHYL PHOSPHATE" },
    { id: "269", name: "TUNGSTEN HEXAFLUORIDE" },
    { id: "270", name: "URANIUM DICARBIDE" },
    { id: "271", name: "URANIUM MONOCARBIDE" },
    { id: "272", name: "URANIUM OXIDE" },
    { id: "273", name: "UREA" },
    { id: "274", name: "VALINE" },
    { id: "275", name: "VITON FLUOROELASTOMER" },
    { id: "276", name: "WATER, LIQUID" },
    { id: "277", name: "WATER VAPOR" },
    { id: "278", name: "XYLENE" },
];
