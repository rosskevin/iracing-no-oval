//
// Execute this on the http://members.iracing.com/membersite/member/Tracks.do page in the console.
//  content_group_arr[1] is for full content owners, need to do others if you don't own all content.
//
var sb = "// Generated output \nvar roadTracks = [\n";
$.each(content_group_arr[1].tracks, function (index, track) {

    if ("Road" == track.category) {
        sb = sb + ("\t" + track.trackID + ", // " + track.category + " - " + track.name + " - " + track.configname + "\n");
    }
});

sb = sb + "];"

console.log(sb);

///////////
var sb = "// Generated output \nvar ovalTracks = [\n";
$.each(content_group_arr[1].tracks, function (index, track) {

    if ("Oval" == track.category) {
        sb = sb + ("\t" + track.trackID + ", // " + track.category + " - " + track.name + " - " + track.configname + "\n");
    }
});

sb = sb + "];"

console.log(sb);
// Generated output
var ovalTracks = [
    52, // Oval - Atlanta Motor Speedway - Legends Oval
    53, // Oval - Atlanta Motor Speedway - Oval
    225, // Oval - Auto Club Speedway - Oval
    101, // Oval - Bristol Motor Speedway -
    143, // Oval - Centripetal Circuit -
    39, // Oval - Charlotte Motor Speedway - Legends Oval
    40, // Oval - Charlotte Motor Speedway - Oval
    123, // Oval - Chicagoland Speedway -
    15, // Oval - Concord Speedway -
    115, // Oval - Darlington Raceway -
    191, // Oval - Daytona International Speedway - Oval
    27, // Oval - Daytona circa 2007 - Oval
    162, // Oval - Dover International Speedway -
    20, // Oval - Homestead Miami Speedway - Miami Speedway
    133, // Oval - Indianapolis Motor Speedway - Oval
    178, // Oval - Indianapolis Motor Speedway - IndyCar Oval
    169, // Oval - Iowa Speedway - Oval
    171, // Oval - Iowa Speedway - Legends
    172, // Oval - Iowa Speedway - Infield Legends
    19, // Oval - Irwindale Speedway - Inner
    23, // Oval - Irwindale Speedway - Outer
    30, // Oval - Irwindale Speedway - Outer - Inner
    214, // Oval - Kansas Speedway - Oval
    189, // Oval - Kentucky Speedway - Legends
    188, // Oval - Kentucky Speedway - Oval
    201, // Oval - Langley Speedway -
    17, // Oval - Lanier National Speedway -
    113, // Oval - Las Vegas Motor Speedway - Infield Legends Oval
    103, // Oval - Las Vegas Motor Speedway - Oval
    110, // Oval - Las Vegas Motor Speedway - Legends Oval
    33, // Oval - Martinsville Speedway -
    124, // Oval - Michigan International Speedway -
    156, // Oval - Mid-Ohio Sports Car Course - Oval
    157, // Oval - Mid-Ohio Sports Car Course - Alt Oval
    131, // Oval - New Hampshire Motor Speedway - Oval
    222, // Oval - New Hampshire Motor Speedway - Legends
    190, // Oval - New Smyrna Speedway -
    12, // Oval - Oxford Plains Speedway -
    104, // Oval - Phoenix International Raceway - Oval
    136, // Oval - Pocono Raceway - Oval
    31, // Oval - Richmond International Raceway -
    203, // Oval - Rockingham Speedway - Oval
    14, // Oval - South Boston Speedway -
    11, // Oval - Stafford Motor Speedway - Full Course
    116, // Oval - Talladega Superspeedway -
    120, // Oval - Texas Motor Speedway - Legends Oval
    121, // Oval - Texas Motor Speedway - Oval
    94, // Oval - The Milwaukee Mile -
    161, // Oval - Thompson International Speedway -
    198, // Oval - Twin Ring Motegi - Oval
    16 // Oval - USA International Speedway -
];


// Generated output
var roadTracks = [
    51, // Road - Atlanta Motor Speedway - Road Course
    226, // Road - Auto Club Speedway - Competition
    227, // Road - Auto Club Speedway - Moto
    228, // Road - Auto Club Speedway - Interior
    213, // Road - Autódromo José Carlos Pace - Moto
    212, // Road - Autódromo José Carlos Pace - Grand Prix
    46, // Road - Barber Motorsports Park - Full Course
    99, // Road - Barber Motorsports Park - Short A
    100, // Road - Barber Motorsports Park - Short B
    145, // Road - Brands Hatch Circuit - Grand Prix
    146, // Road - Brands Hatch Circuit - Indy
    144, // Road - Canadian Tire Motorsports Park -
    37, // Road - Charlotte Motor Speedway - Road Course
    38, // Road - Charlotte Motor Speedway - Infield Road Course
    218, // Road - Circuit Gilles Villeneuve - Grand Prix
    200, // Road - Circuit Zolder - Alternate
    199, // Road - Circuit Zolder - Grand Prix
    164, // Road - Circuit de Spa-Francorchamps - Classic Pits
    165, // Road - Circuit de Spa-Francorchamps - Endurance
    163, // Road - Circuit de Spa-Francorchamps - GP Pits
    194, // Road - Daytona International Speedway - Short
    192, // Road - Daytona International Speedway - Road
    193, // Road - Daytona International Speedway - Bike
    28, // Road - Daytona circa 2007 - Bike
    29, // Road - Daytona circa 2007 - Short
    26, // Road - Daytona circa 2007 - Road
    21, // Road - Homestead Miami Speedway - Road Course A
    22, // Road - Homestead Miami Speedway - Road Course B
    134, // Road - Indianapolis Motor Speedway - Road Course
    135, // Road - Indianapolis Motor Speedway - Bike
    170, // Road - Iowa Speedway - Road
    217, // Road - Irwindale Speedway - Figure Eight
    216, // Road - Kansas Speedway - Infield Road Course
    215, // Road - Kansas Speedway - Road Course
    112, // Road - Las Vegas Motor Speedway - Road Short
    114, // Road - Las Vegas Motor Speedway - Road Combined
    111, // Road - Las Vegas Motor Speedway - Road Long
    1, // Road - Lime Rock Park - Full Course
    34, // Road - Lime Rock Park - Chicane
    160, // Road - Lime Rock Park - School
    47, // Road - Mazda Raceway Laguna Seca - Full Course
    158, // Road - Mazda Raceway Laguna Seca - School
    153, // Road - Mid-Ohio Sports Car Course - Full
    154, // Road - Mid-Ohio Sports Car Course - Chicane
    155, // Road - Mid-Ohio Sports Car Course - Short
    219, // Road - Mount Panorama Circuit -
    129, // Road - New Hampshire Motor Speedway - Road
    130, // Road - New Hampshire Motor Speedway - Road with North Oval
    132, // Road - New Hampshire Motor Speedway - Road with South Oval
    166, // Road - Okayama International Circuit - Full Course
    167, // Road - Okayama International Circuit - Short Course
    202, // Road - Oran Park Raceway - Grand Prix
    207, // Road - Oran Park Raceway - North Course
    211, // Road - Oran Park Raceway - Moto
    208, // Road - Oran Park Raceway - South Course
    209, // Road - Oran Park Raceway - North A Course
    210, // Road - Oran Park Raceway - North B Course
    184, // Road - Oulton Park Circuit - Intl w/out Brittens
    186, // Road - Oulton Park Circuit - Fosters w/Hislop
    183, // Road - Oulton Park Circuit - Intl w/out Hislop
    180, // Road - Oulton Park Circuit - International
    185, // Road - Oulton Park Circuit - Intl w/no Chicanes
    181, // Road - Oulton Park Circuit - Fosters
    187, // Road - Oulton Park Circuit - Island Historic
    182, // Road - Oulton Park Circuit - Island
    152, // Road - Phillip Island - Phillip Island Circuit
    105, // Road - Phoenix International Raceway - Road
    139, // Road - Pocono Raceway - North
    140, // Road - Pocono Raceway - International Course
    137, // Road - Pocono Raceway - East
    138, // Road - Pocono Raceway - South
    18, // Road - Road America - Full Course
    50, // Road - Road America - Bend
    205, // Road - Rockingham Speedway - Infield Road Course
    206, // Road - Rockingham Speedway - Short Road Course
    204, // Road - Rockingham Speedway - Road Course
    95, // Road - Sebring International Raceway - International
    96, // Road - Sebring International Raceway - Modified
    97, // Road - Sebring International Raceway - Club
    42, // Road - Silverstone Circuit - Historical Grand Prix
    41, // Road - Silverstone Circuit - Grand Prix
    43, // Road - Silverstone Circuit - International
    44, // Road - Silverstone Circuit - National
    45, // Road - Silverstone Circuit - Southern
    48, // Road - Sonoma Raceway - Cup
    49, // Road - Sonoma Raceway - IRL 2007
    98, // Road - Sonoma Raceway - Long
    102, // Road - Sonoma Raceway - IRL
    8, // Road - Summit Point Raceway - Jefferson Course
    159, // Road - Summit Point Raceway - School
    9, // Road - Summit Point Raceway - Summit Point Raceway
    24, // Road - Summit Point Raceway - Short Configuration
    142, // Road - Summit Point Raceway - Jefferson Reverse
    168, // Road - Suzuka International Racing Course - Grand Prix
    173, // Road - Suzuka International Racing Course - Moto
    176, // Road - Suzuka International Racing Course - West w/chicane
    175, // Road - Suzuka International Racing Course - West
    174, // Road - Suzuka International Racing Course - East
    118, // Road - Texas Motor Speedway - Road Short A
    117, // Road - Texas Motor Speedway - Road Long
    122, // Road - Texas Motor Speedway - Road Combined
    119, // Road - Texas Motor Speedway - Road Short B
    195, // Road - Twin Ring Motegi - GP
    196, // Road - Twin Ring Motegi - East
    197, // Road - Twin Ring Motegi - West
    5, // Road - Virginia International Raceway - Grand West
    6, // Road - Virginia International Raceway - Grand East
    7, // Road - Virginia International Raceway - South Course
    141, // Road - Virginia International Raceway - Patriot Reverse
    2, // Road - Virginia International Raceway - Full Course
    3, // Road - Virginia International Raceway - Patriot
    4, // Road - Virginia International Raceway - North Course
    106, // Road - Watkins Glen International - Cup
    107, // Road - Watkins Glen International - Boot
    108, // Road - Watkins Glen International - Classic Boot
    109, // Road - Watkins Glen International - Classic
    147, // Road - Zandvoort - Chicane
    148, // Road - Zandvoort - Club
    149, // Road - Zandvoort - Grand Prix
    150, // Road - Zandvoort - National
    151 // Road - Zandvoort - Oostelijk
];