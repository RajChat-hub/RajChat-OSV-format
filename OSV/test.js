const sampleOSV = `Name/Age/City
John Doe/30/New York
Jane Doe/25/Los Angeles`;

console.log('--- Parsing OSV ---');
const parsed = OSVParser.parse(sampleOSV);
console.log(parsed);

console.log('--- Stringifying to OSV ---');
const osvString = OSVParser.stringify(parsed);
console.log(osvString);

console.log('--- Validating OSV ---');
console.log(isValidOSV(sampleOSV) ? 'Valid OSV' : 'Invalid OSV');