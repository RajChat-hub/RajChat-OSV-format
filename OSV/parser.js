class OSVParser {
    // Parse OSV to an array of objects (like CSV)
    static parse(content) {
        const lines = content.split('\n').map(line => line.trim()).filter(Boolean);
        const headers = lines[0].split('/').map(header => header.trim());
        const data = lines.slice(1).map(line => {
            const values = line.split('/').map(value => value.trim());
            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index] || '';
            });
            return obj;
        });
        return data;
    }

    // Convert JSON back to OSV format
    static stringify(data) {
        const headers = Object.keys(data[0]);
        const lines = data.map(row => headers.map(header => row[header]).join('/'));
        return headers.join('/') + '\n' + lines.join('\n');
    }
}