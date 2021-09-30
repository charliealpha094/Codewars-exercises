// Done by Carlos Amaral (2021/09/30)

/*
Write a function that when given a URL as a string, parses out just the domain 
name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" 
*/

function domainName(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");
  // Create an array with the remaining words and select only the 1st one
  return url.split(".")[0];
}

console.log(domainName("www.google.com"));
console.log(domainName("http://github.com/charliealpha094"));
console.log(domainName("https://www.casio.com"));
