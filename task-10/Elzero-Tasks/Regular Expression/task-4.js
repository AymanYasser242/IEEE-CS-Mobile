let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// let re = /https?:\/\/          Match "http://" or "https://"
//           (?:[-\w]+\.)?        Optional hostname prefix (like "www.")
//           ([-\w]+)            Domain name (captured)
//           \.\w+               Dot and top-level domain (like ".com", ".org")
//           (?:\.\w+)?          Optional second-level domain (like ".co.uk")
//           \/?                 Optional trailing slash "/"
//           .*/i;               Match any characters (zero or more) after the path, case-insensitive
