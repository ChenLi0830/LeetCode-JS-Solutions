/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function charNode(){
    this.links = [];
    this.isEnd = false;
}

var findWords2 = function(board, words) {
    //Iniailization
    let alphabet = "abcdefghijklmnopqrstuvwxyz", root = new charNode(),
        cToI = [], visited = [], ans = [], wordSet = new Set(),
        steps = [[-1,0], [1,0],[0,-1],[0,1]];
    for (let i=0;i<alphabet.length;i++) cToI[alphabet[i]] = i;
    for (let i=0;i<board.length;i++){
        visited[i] = [];
        for (let j=0;j<board[0].length;j++)
            visited[i][j] = false;
    }
    // Put wards into prefix tree
    
    for (let i=0;i<words.length;i++){
        let node = root;
        for (let j=0;j<words[i].length;j++){
            let cIdx = cToI[words[i][j]];
            if (!node.links[cIdx]) node.links[cIdx] = new charNode();
            node = node.links[cIdx];
        }
        node.isEnd = true;
    }
    for (let i=0;i<board.length;i++){
        for (let j=0;j<board[0].length;j++){
            let c = board[i][j], cInx = cToI[c];
            visited[i][j] = true;
            if (root.links[cInx]) doSearch(root.links[cInx], i,j, board[i][j]);
            visited[i][j] = false;
        }
    }
    return ans;
    
    function doSearch(node, x, y, word){
        if (node.isEnd && !wordSet.has(word)) {
            ans[ans.length] = word;
            wordSet.add(word);
        }
        for (let i=0;i<4;i++){
            let newX = x+steps[i][0], newY = y+steps[i][1];
            if (newX<0 || newX>board.length-1 || newY<0 || newY>board[0].length-1) continue;
            let c = board[newX][newY], cInx = cToI[c];
            if (node.links[cInx] && !visited[newX][newY]) {
                visited[newX][newY] = true;
                doSearch(node.links[cInx], newX, newY, word+c);
                visited[newX][newY] = false;
            }
        }
    }
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function TrieNode(){
    this.links = [];
    this.word = null;
}

var findWords = function(board, words) {
    // Iniailization
    let alphabet = "abcdefghijklmnopqrstuvwxyz", root = new TrieNode(),
        cToI = [], ans = [], steps = [[-1,0], [1,0],[0,-1],[0,1]];
    for (let i=0;i<alphabet.length;i++) cToI[alphabet[i]] = i;
    // Put wards into prefix tree
    
    for (let i=0;i<words.length;i++){
        let node = root;
        for (let j=0;j<words[i].length;j++){
            let cIdx = cToI[words[i][j]];
            if (!node.links[cIdx]) node.links[cIdx] = new TrieNode();
            node = node.links[cIdx];
        }
        node.word = words[i];
    }
    for (let i=0;i<board.length;i++){
        for (let j=0;j<board[0].length;j++){
            let c = board[i][j], cInx = cToI[c];
            board[i][j] = "#";
            if (root.links[cInx]) doSearch(root.links[cInx], i,j);
            board[i][j] = c;
        }
    }
    return ans;
    
    function doSearch(node, x, y){
        if (node.word) {
            ans[ans.length] = node.word;
            node.word = null;
        }
        for (let i=0;i<4;i++){
            let newX = x+steps[i][0], newY = y+steps[i][1];
            if (newX<0 || newX>board.length-1 || newY<0 || newY>board[0].length-1) continue;
            let c = board[newX][newY], cInx = cToI[c];
            if (node.links[cInx]) {
                board[newX][newY] = "#";
                doSearch(node.links[cInx], newX, newY);
                board[newX][newY] = c;
            }
        }
    }
};