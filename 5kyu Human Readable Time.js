/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/



// ======================== SOLUTION ===========================


function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds - (3600 * hh)) / 60);
  let ss = seconds - (hh * 3600) - (mm * 60);

  return (hh < 10 ? '0'+hh : hh) + ':' + (mm < 10 ? '0'+mm : mm) + ':' + (ss < 10 ? '0'+ss : ss);
}

