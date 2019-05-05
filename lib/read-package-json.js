/**
 * @module read-package-json
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const readPkg = require("@pnpm/read-importer-manifest").default
const pathResolve = require('path').resolve

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Reads the package.json in the current directory.
 *
 * @returns {object} package.json's information.
 */
module.exports = function readPackageJson() {
    return readPkg(process.cwd()).then(({ manifest, fileName }) => ({
        taskList: Object.keys(manifest.scripts || {}),
        packageInfo: { path: pathResolve(fileName), body: manifest },
    }))
}
