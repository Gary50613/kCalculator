class SyntaxErr extends Error {
    constructor(position, char, message) {
        super(message ? `${message} \nat ${position?.row || 'unknown'}:${position?.col || 'unknown'}` : `${char} at ${position?.row || 'unknown'}:${position?.col || 'unknown'}`);
        this.name = 'SyntaxErr'
    }
}

module.exports = SyntaxErr