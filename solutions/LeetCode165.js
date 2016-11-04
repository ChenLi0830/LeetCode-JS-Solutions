/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let nums1 = version1.split("."), nums2 = version2.split(".");
    for (let i=0;i<Math.max(nums1.length, nums2.length);i++){
        if (nums1[i]===undefined || nums1[i]==="") nums1[i] = 0;
        if (nums2[i]===undefined || nums2[i]==="") nums2[i] = 0;
        if (parseInt(nums1[i])>parseInt(nums2[i])) return 1;
        if (parseInt(nums1[i])<parseInt(nums2[i])) return -1;
    }
    if (nums1.length===nums2.length) return 0;
};
