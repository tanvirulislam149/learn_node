const path = require("path")

console.log(__filename)
console.log(__dirname)

const filePath = path.join("folder", "subfolder1", "subfolder2", "subfolder3", "file.txt")
console.log(filePath)

const baseName = path.basename(filePath)
const extName = path.extname(filePath)
const dirName = path.dirname(filePath)
const parsedPath = path.parse(filePath)
const resolvedPath = path.resolve(filePath)

console.log("Base Name:", baseName)
console.log("Extension Name:", extName)
console.log("Directory Name:", dirName)
console.log("Parsed Path:", parsedPath)
console.log("Resolved Path:", resolvedPath)