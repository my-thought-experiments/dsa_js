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
})
