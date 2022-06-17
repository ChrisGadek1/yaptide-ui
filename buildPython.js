const fs = require("fs");
const glob = require("glob")
const { execSync } = require("child_process");
const { exit } = require("process");


const SKIP = process.argv[2] === 'skip';

const destFolder = 'public/libs/converter/dist/';
const srcFolder = 'src/libs/converter/';

const globPromise = (pattern) => {
    return new Promise((resolve, reject) => {
        glob(pattern, (err, files) => {
            if (err) {
                reject(err);
            }
            resolve(files);
        });
    });
}

const saveFileName = (destFolder, fileName) => {
    const data = JSON.stringify({ 'fileName': fileName });
    if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

    fs.writeFileSync(destFolder + 'yaptide_converter.json', data);
    console.log('yaptide_converter.json saved');
}

(async () => {
    const installedPath = await globPromise(destFolder + 'yaptide_converter-*-py3-none-any.whl').then(files => files[0]);
    const installedFileName = installedPath?.split('/').pop();

    if (installedPath && SKIP === true) {
        //file exists
        console.log(`${installedFileName} is already installed`);
        saveFileName(destFolder, installedFileName);
    } else {
        const measureTime = (label, callback) => {
            console.log("Start: " + label)
            console.time(label);
            try {
                callback();
            } catch (error) {
                console.error(error.stdout.toString());
                exit(1);
            }
            console.timeEnd(label);
        }


        measureTime('Installing build module for python', () => {
            execSync("python3 -m pip install build", {
                cwd: srcFolder
            });
        });

        measureTime('Building yaptide_converter', () => {
            execSync("python3 -m build", {
                cwd: srcFolder
            })
        });

        console.log('Checking destination folder');
        if (!fs.existsSync(destFolder)) {
            console.log('Creating folder ' + destFolder);
            fs.mkdirSync(destFolder, { recursive: true });
        }

        const buildFilePath = await globPromise(srcFolder + 'dist/yaptide_converter-*-py3-none-any.whl').then(files => files[0]);
        const buildFileName = buildFilePath?.split('/').pop();

        const destFullPath = destFolder + buildFileName;

        console.log('Copying yaptide_converter');
        fs.copyFile(buildFilePath, destFullPath, (err) => {
            if (err) {
                console.error(err.message);
                exit(1);
            }
            console.log('yaptide_converter was copied to destination');
            console.log(buildFilePath);
            console.log('=>');
            console.log(destFullPath);
        });
        saveFileName(destFolder, buildFileName);
    }
})();






