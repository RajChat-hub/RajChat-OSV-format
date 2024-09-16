function isValidOSV(content) {
    const lines = content.split('\n').map(line => line.trim()).filter(Boolean);
    const headerCount = lines[0].split('/').length;
    return lines.every(line => line.split('/').length === headerCount);
}