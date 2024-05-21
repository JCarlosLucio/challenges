/** https://www.codewars.com/kata/514a024011ea4fb54200004b
 *
 * Extract the domain name from a URL -- Codewars
 * Given a URL as a string, parses out just the domain name and returns it as a string.
 *
 * Example: url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 *
 * @param {string} url
 * @returns {string}
 */
function domainName(url) {
  return url.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\.[\s\S]*$/, '');
}

// function domainName(url) {
//   const protocolSubdomainRegex = /^(https?:\/\/)?(www\.)?/;
//   const afterFirstDotRegex = /\.[\s\S]*$/; // Matches everthing after first dot
//   return url
//     .replace(protocolSubdomainRegex, '')
//     .replace(afterFirstDotRegex, '');
// }
