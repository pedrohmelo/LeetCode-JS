// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
  
    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
  
        current.next = new ListNode(sum % 10);
        current = current.next;
  
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
  
    return dummyHead.next;
  };
  
  // Example usage:
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  
  const result = addTwoNumbers(l1, l2);
  console.log(result); 
  