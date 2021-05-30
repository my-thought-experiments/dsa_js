const { Node, BinarySearchTree } = require('../binarySearchTree')

describe('Trees > Binary Search Tree', () => {
  test('should create new node with correct default reference', () => {
    let element1 = new Node()
    expect(element1.data).toBeNull()
    expect(element1.left).toBeNull()
    expect(element1.right).toBeNull()

    let element2 = new Node(10)
    expect(element2.data).toBe(10)
    expect(element2.left).toBeNull()
    expect(element2.right).toBeNull()
  })

  test('should create binary serch tree with correct default reference', () => {
    const bst = new BinarySearchTree()
    expect(bst.root).toBeNull()
  })

  test('should insert into binary search tree', () => {
    const bst = new BinarySearchTree()
    
    bst.insert(10)
    expect(bst.root).toEqual({
      data: 10,
      left: null,
      right: null
    })

    bst.insert(8)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right).toBeNull()
    expect(bst.root.left).toEqual({
      data: 8,
      left: null,
      right: null
    })

    bst.insert(9)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right).toBeNull()
    expect(bst.root.left.data).toBe(8)
    expect(bst.root.left.left).toBeNull()
    expect(bst.root.left.right).toEqual({
      data: 9,
      left: null,
      right: null
    })

    bst.insert(5)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right).toBeNull()
    expect(bst.root.left.data).toBe(8)
    expect(bst.root.left.left).toEqual({
      data: 5,
      left: null,
      right: null
    })
    expect(bst.root.left.right).toEqual({
      data: 9,
      left: null,
      right: null
    })

    bst.insert(15)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right).toEqual({
      data: 15,
      left: null,
      right: null
    })

    bst.insert(11)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right.data).toBe(15)
    expect(bst.root.right.right).toBeNull()
    expect(bst.root.right.left).toEqual({
      data: 11,
      left: null,
      right: null
    })

    bst.insert(12)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right.data).toBe(15)
    expect(bst.root.right.right).toBeNull()
    expect(bst.root.right.left.data).toBe(11)
    expect(bst.root.right.left.left).toBeNull()
    expect(bst.root.right.left.right).toEqual({
      data: 12,
      left: null,
      right: null
    })

    bst.insert(18)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right.data).toBe(15)
    expect(bst.root.right.right).toEqual({
      data: 18,
      left: null,
      right: null
    })
    expect(bst.root.right.left.data).toBe(11)
    
    bst.insert(20)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right.data).toBe(15)
    expect(bst.root.right.left.data).toBe(11)
    expect(bst.root.right.right.data).toBe(18)
    expect(bst.root.right.right.right).toEqual({
      data: 20,
      left: null,
      right: null
    })
    expect(bst.root.right.right.left).toBeNull()
  })

  test('should throw error with duplicate insert into binary search tree', () => {
    const bst = new BinarySearchTree()
    
    bst.insert(10)
    expect(bst.root).toEqual({
      data: 10,
      left: null,
      right: null
    })

    try {
      bst.insert(10)
    } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Found duplicate value')
    }

    bst.insert(8)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right).toBeNull()
    expect(bst.root.left).toEqual({
      data: 8,
      left: null,
      right: null
    })

    bst.insert(9)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right).toBeNull()
    expect(bst.root.left.data).toBe(8)
    expect(bst.root.left.left).toBeNull()
    expect(bst.root.left.right).toEqual({
      data: 9,
      left: null,
      right: null
    })

    bst.insert(5)
    expect(bst.root.data).toBe(10)
    expect(bst.root.right).toBeNull()
    expect(bst.root.left.data).toBe(8)
    expect(bst.root.left.left).toEqual({
      data: 5,
      left: null,
      right: null
    })
    expect(bst.root.left.right).toEqual({
      data: 9,
      left: null,
      right: null
    })

    try {
      bst.insert(9)
    } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Found duplicate value')
    }
  })

  test('should find the node in binary search tree', () => {
    const bst = new BinarySearchTree()
    
    expect(bst.find()).toBeFalsy() // root null

    bst.insert(10)
    bst.insert(8)
    bst.insert(9)
    bst.insert(5)
    bst.insert(15)
    bst.insert(11)
    bst.insert(12)
    bst.insert(18)
    bst.insert(20)

    expect(bst.find(10)).toBeTruthy()
    expect(bst.find(20)).toBeTruthy()
    expect(bst.find(25)).toBeFalsy()
    expect(bst.find(0)).toBeFalsy()
  })

  // const expected = ['Alice', 'Bobh'];
  // it('matches even if received contains additional elements', () => {
  //   expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  // });

  test('should traverse as breath first search on binary search tree', () => {
    const bst = new BinarySearchTree()
    
    bst.insert(10)
    bst.insert(8)
    bst.insert(9)
    bst.insert(5)
    bst.insert(15)
    bst.insert(11)
    bst.insert(12)
    bst.insert(18)
    bst.insert(20)

    const expected = [10, 8, 15, 5, 9, 11, 18, 12, 20]
    expect(bst.breadthFirstSearch()).toEqual(expect.arrayContaining(expected))
  })

  test('should traverse as depth first search pre-order on binary search tree', () => {
    const bst = new BinarySearchTree()
    
    bst.insert(10)
    bst.insert(8)
    bst.insert(9)
    bst.insert(5)
    bst.insert(15)
    bst.insert(7)
    bst.insert(11)
    bst.insert(12)
    bst.insert(14)
    bst.insert(18)
    bst.insert(16)
    bst.insert(20)

    const expected = [10, 8, 5, 9, 7, 15, 11, 12, 14, 18, 16, 20]
    expect(bst.breadthFirstSearch()).toEqual(expect.arrayContaining(expected))
  })

  test('should traverse as depth first search post-order on binary search tree', () => {
    const bst = new BinarySearchTree()
    
    bst.insert(10)
    bst.insert(8)
    bst.insert(9)
    bst.insert(5)
    bst.insert(15)
    bst.insert(7)
    bst.insert(11)
    bst.insert(12)
    bst.insert(14)
    bst.insert(18)
    bst.insert(16)
    bst.insert(20)

    const expected = [5, 7, 9, 8, 14, 12, 11, 16, 20, 18, 15, 10]
    expect(bst.depthFirstSearchPostOrder()).toEqual(expect.arrayContaining(expected))
  })

  test('should traverse as depth first search in-order on binary search tree', () => {
    const bst = new BinarySearchTree()
    
    bst.insert(10)
    bst.insert(8)
    bst.insert(9)
    bst.insert(5)
    bst.insert(15)
    bst.insert(7)
    bst.insert(11)
    bst.insert(12)
    bst.insert(14)
    bst.insert(18)
    bst.insert(16)
    bst.insert(20)

    const expected = [5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20]
    expect(bst.depthFirstSearchInOrder()).toEqual(expect.arrayContaining(expected))
  })
})
