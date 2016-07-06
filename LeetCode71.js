/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath2 = function(path) {
    let last=null;
    while (path !== last)
    {
        last = path;
        path = path.replace(/\/\.(\/|$)/g,"/");
    }

    last=null;
    while (path !== last){
        last = path;
        path = path.replace(/\/+/g, "/");
        path = path.replace(/[^\/]*\/\.\.(\/|$)/, "/");
    }

    path = path.replace(/\/+/g, "/");
    if (path[path.length-1]==="/" && path.length>1) path = path.slice(0, path.length-1);
    return path;
};

var simplifyPath = function(path) {
    let skips = {"":true, ".":true/*, "/":true*/}, stack=[], index=0;
    let eleArray = path.split("/"), result = "";
    for (let i=0;i<eleArray.length;i++){
        if (eleArray[i]===".."){
            index = index>0? index-1:0;
        }
        else if (!skips[eleArray[i]]){
            stack[index++]=eleArray[i];
        }
    }
    for (let i=0;i<index;i++){
        result = result + "/" + stack[i];
    }
    return result.length===0? "/":result;
};

simplifyPath("///////asdfasdfasd/aa/./../"); // /asdfasdfasd
simplifyPath("/...");// /...
simplifyPath("/.");// /
simplifyPath("/home/foo/.ssh/../.ssh2/authorized_keys/");// "/home/foo/.ssh2/authorized_keys"
simplifyPath("/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///");// "/e/f/g"
simplifyPath("/..///XrG/././././../");// "/"


