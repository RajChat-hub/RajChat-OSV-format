# OSV (Obligations Separated Values)

### Introduction

OSV is a simple format to store tabular data where each value is separated by an `/` (Obligation) symbol. It is similar to CSV but uses a different delimiter. The purpose of this format is to provide a new way to represent structured data, which can be used for various applications such as data exchange between systems.

### How It Works

- Each row represents a line of data.
- Each value within the row is separated by `/`.
- The first row contains the headers.

### Example OSV File

Name/Age/City John Doe/30/New York Jane Doe/25/Los Angeles

### How to Use the OSV Parser

1. Clone this repository.
2. Use the `OSVParser` class to parse or generate OSV files.

### Parsing OSV

```javascript
const data = OSVParser.parse(osvContent);
console.log(data);

Generating OSV from JSON

const osvString = OSVParser.stringify(data);
console.log(osvString);

License

This project is licensed under the MIT License - see the LICENSE file for details.

Copyright

© 2024 Rajdeep Chatterjee. All Rights Reserved.