# Big O Notation

Simplified analysis of an algorithm's efficiency.

## Type of measurement

1. Worst-case
2. Best-case
3. Average-case

## General rules

1. Igore constants.

    For eg. 5n --> O(n)

2. Certain teams dominate others

    For eg.
    O(1) < O(Log n) < O(n) < O(n Log n) < O(n^2) < O(2^n) < O(n!)

    **In Table form:**
    | Teams | Notation |
    |:---|:---|
    | Excellent | O(1) |
    | Good | O(Log n) |
    | Fair | O(n) |
    | Bad | O(n Log n) |
    | Horrible | O(n^2) / O(2^n) / O(n!) |

### Time

1. **Constant time**: Independent of input size, n. Hence, O(1)

    For eg.

    ```
    x = 5 + (15 * 20) // O(1)
    ```

    ```
    x = 5 + (15 * 20)
    y = 15 - 2
    print x + y // O(1)
    ```
    Total time = O(1) + O(1) + O(1) = O(1)

2. **Linear time**: n * O(1) = O(n)

    For eg.

    ```
    for x in rage (0, n): // O(n)
      print x; // O(1)
    ```

    ```
    x = 5 + (15 * 20) // O(1)
    for x in rage (0, n): // O(n)
      print x;
    ```
    Total time = O(1) + O(n) = O(n)

3. **Quadratic time**: O(n^2)

    For eg.

    ```
    for x in rage (0, n): // O(n)
      for y in rage (0, n): // O(n)
        print x * y // O(1)
    ```
    Total time = O(n^2) + O(1) = O(n^2)

    Understand **Total time**

    ```
    // O(1)
    x = 5 + (15 * 20) // O(1)

    // O(n)
    for x in rage (0, n): // O(n)
      print x;

    // O(n^2)
    for x in rage (0, n): // O(n)
      for y in rage (0, n): // O(n)
        print x * y // O(1)
    ```
    Total time = O(1) + O(n) + O(n^2) = O(n^2)


    ```
    if x > 0:
      // O(1)
    else if x < 0:
      // O(Log n)
    else:
      // O(n^2)
    ```
    Total time = O(1) + O(Log n) + O(n^2) = O(n^2)
