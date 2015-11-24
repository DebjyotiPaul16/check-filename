var fs = require('fs')
	, path = require('path')
	, pkg = require(path.join(__dirname, '../../package.json'))

var checkFileName = require('../../bin/main.js')

describe('Check Filename CLI app ::', function () {
	describe('checkFilename module', function () {
		it('exists', function () {
			expect(checkFileName).toBeDefined()
		})

		it('has list of folders', function () {
			expect(checkFileName.Folders).toBeDefined()

			expect(checkFileName.Folders).toEqual([])
		})

		it('has list of files', function () {
			expect(checkFileName.Files).toBeDefined()

			expect(checkFileName.Files).toEqual([])
		})
	})
})
