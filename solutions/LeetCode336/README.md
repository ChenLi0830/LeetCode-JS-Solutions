# Palindrome Pairs

1. Use a `hashMap<word, index>` to keep track of all the words.
2. Traverse the dictionary, for each word check all of its prefix for palindrome. 
3. If a prefix is a palindrome, reverse the rest of the word and check its existence in the hashMap. If it exist, push their indices into `ans` array.
4. Do step 3, but for all **postfix** of the word. 
