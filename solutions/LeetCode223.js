/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    let overlap = 0;
    if (!(B>=H || D<=F || A>=G || C<=E)){
        let l = Math.min(C,G) - Math.max(A,E), w = Math.min(D,H) - Math.max(B,F);
        overlap = l*w;
    }
    return (C-A)*(D-B)+(G-E)*(H-F)-overlap;
};

