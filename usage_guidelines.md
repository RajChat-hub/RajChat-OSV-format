OSV (Obligations Separated Values) Format Usage Guidelines

© 2024 Rajdeep Chatterjee. All rights reserved.
Introduction

The OSV (Obligations Separated Values) format is a simple and intuitive format for storing tabular data, similar to CSV. However, OSV uses the / (slash) character as the delimiter between values instead of the traditional comma in CSV. This format is designed to facilitate data exchange between systems while offering an alternative separation character.

This guide will walk you through the installation, usage, and guidelines for the OSV Converter, providing instructions on how to convert CSV files to OSV format.
Table of Contents

    Features
    Installation
    Usage
    API Documentation
    Testing
    Licensing

Features

    Converts CSV files to OSV format using / as the delimiter.
    Easily integrates into web-based applications.
    Simple and minimalistic design, accessible to all users.
    Allows users to upload a CSV file and download it in OSV format.
    Built with JavaScript and HTML for easy integration into other platforms.

Installation

To get started with the OSV Converter, follow these steps:

    Clone the Repository:

    Open your terminal and clone the OSV repository to your local machine:


    https://github.com/RajChat-hub/RajChat-OSV-format.git
    cd RajChat-OSV-format

    Set Up Your Environment:

    Since the OSV converter is a web-based tool, there are no additional dependencies required. Simply open the index.html file in any web browser to use the tool.

Usage

To use the OSV Converter, follow these steps:

    Open the Converter:

    Open the index.html file from the OSV converter repository in your preferred web browser.

    Select Your CSV File:
        Click the Choose File button and select a valid .csv file from your computer.

    Convert the File:
        Click the Convert to OSV button to convert the CSV data into OSV format (using / as the delimiter).

    Download the Converted File:
        Once the conversion is complete, a Download OSV File link will appear.
        Click the link to download your file with the .osv extension.

API Documentation

If you are interested in integrating OSV conversion functionality into your own applications, the following JavaScript API is available.
OSV Conversion Function


function convertCSVToOSV(content) {
    const lines = content.split('\n');
    return lines.map(line => line.split(',').join('/')).join('\n');
}

Parameters:

    content (String): The CSV data to be converted, provided as a string.

Returns:

    A string of OSV formatted data, with values separated by the / delimiter.

Testing

To ensure your OSV conversion works correctly, you can create unit tests in JavaScript or any other language that validates the output. Here is a simple test example using Jest:
Test Example


test('Convert CSV to OSV', () => {
    const csv = "name,age,city\nJohn,30,New York";
    const expectedOSV = "name/age/city\nJohn/30/New York";
    expect(convertCSVToOSV(csv)).toBe(expectedOSV);
});

Run the test:


jest

This will ensure that your CSV to OSV conversion produces the expected result.
License

This project is licensed under the MIT License - see the LICENSE file for details.

© 2024 Rajdeep Chatterjee

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

For full license details, refer to the LICENSE file included in the repository.
Conclusion

By following these guidelines, you can efficiently convert and work with the OSV format. You are encouraged to contribute to the project by submitting issues, pull requests, or suggestions through the repository.

Feel free to contact me with any questions or feedback about the OSV format.

© 2024 Rajdeep Chatterjee
Additional Resources:

    GitHub Repository - Contribute or download the OSV Converter.
    Issues - Report bugs or request new features.

