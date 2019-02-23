//
// Execute this on the http://members.iracing.com/membersite/member/Tracks.do page in the console.
//  content_group_arr[1] is for full content owners, need to do others if you don't own all content.
//

// for (const i in TracksByPkgListing) {
//   console.info(Array.isArray(TracksByPkgListing[i]));
//   // var owned_idx=OwnedContentListing.objIndexOf(i,"pkgid");
//   // if(owned_idx!=-1)tracks_arr.push(TracksByPkgListing[i][0]);
// }
var misclassifiedRoadTracks = [
  144, // Canadian Tire Motorsports Park []
  218, // Circuit Gilles Villeneuve []
  219, // Mount Panorama Circuit []
  152, // Phillip Island Circuit []
]

var ob = '// Generated output \nvar ovalTracks = [\n'
tracks_arr.forEach(track => {
  if (
    ('Oval' == track.config || '' == track.config) &&
    !misclassifiedRoadTracks.includes(track.id)
  ) {
    ob = ob + `\t${track.id}, // ${track.name} [${track.config}]\n`
  }
})

ob = ob + '];'

console.log(ob)

//
//
//
var ovalTracks = [
  53, // Atlanta Motor Speedway [Oval]
  225, // Auto Club Speedway [Oval]
  101, // Bristol Motor Speedway []
  143, // Centripetal Circuit []
  40, // Charlotte Motor Speedway - 2016 [Oval]
  123, // Chicagoland Speedway []
  15, // Concord Speedway []
  115, // Darlington Raceway []
  191, // Daytona International Speedway [Oval]
  27, // Daytona International Speedway - 2007 [Oval]
  162, // Dover International Speedway []
  273, // Eldora Speedway []
  20, // Homestead Miami Speedway [Oval]
  169, // Iowa Speedway [Oval]
  214, // Kansas Speedway [Oval]
  188, // Kentucky Speedway [Oval]
  201, // Langley Speedway []
  17, // Lanier National Speedway []
  103, // Las Vegas Motor Speedway [Oval]
  33, // Martinsville Speedway []
  276, // Michigan International Speedway []
  124, // Michigan International Speedway - 2014 []
  131, // New Hampshire Motor Speedway [Oval]
  190, // New Smyrna Speedway []
  12, // Oxford Plains Speedway []
  104, // Phoenix International Raceway - 2008 [Oval]
  277, // Pocono Raceway []
  136, // Pocono Raceway - 2011 [Oval]
  31, // Richmond Raceway []
  203, // Rockingham Speedway [Oval]
  14, // South Boston Speedway []
  116, // Talladega Superspeedway []
  121, // Texas Motor Speedway [Oval]
  94, // The Milwaukee Mile []
  161, // Thompson Speedway Motorsports Park [Oval]
  16, // USA International Speedway []
]
