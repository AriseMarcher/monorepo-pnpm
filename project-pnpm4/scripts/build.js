const fs = require("fs");
const path = require("path");
const execa = require("execa");

//模块根目录
const packagesDir = path.resolve(__dirname, "../packages");
//模块目录
const dirs = fs.readdirSync(packagesDir).filter(dirPath => {
  const isDir = fs.statSync(path.resolve(packagesDir, dirPath)).isDirectory(); //判断是否为目录，过滤掉packages下非目录文件
  return isDir;
});


//打包
async function build(dir) {
  //execa运行一次会创建一次进程
  await execa("rollup", ["-c", "--environment", `TARGET:${dir}`], {
    stdio: "inherit"
  });
}

//并行打包
async function runParallel(dirs) {
  const result = [];
  //for循环遍历所有模块目录，触发多个build方法
  for (const dir of dirs) {
    result.push(build(dir));
  }
  return Promise.all(result);
};

runParallel(dirs, build).then(() => {
  console.log("打包成功");
})