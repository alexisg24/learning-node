const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf8')

const wordCount = content.split(' ')
const reactCount = wordCount.filter(text => text.toLocaleLowerCase().includes('react'))

console.log('Palabras totales: ', wordCount.length)
console.log('React palabras totales: ', reactCount.length)
